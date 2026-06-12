"use server";

import { createHash } from "crypto";
import { headers } from "next/headers";
import { createClient } from "@/lib/supabase/server";

export type InquiryInput = {
  name: string;
  email: string;
  phone?: string;
  treatment: string;
  date?: string;
  message?: string;
  /** Honeypot – muss leer bleiben; nur Bots füllen es aus. */
  company?: string;
};

export type InquiryResult = { ok: true } | { ok: false; error: string };

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Längen-Limits (server-seitig erzwungen, zusätzlich als DB-CHECK)
const LIMITS = { name: 120, email: 200, phone: 40, treatment: 120, message: 2000 };

// Salt für den IP-Hash. Optional über Env-Var IP_HASH_SALT überschreibbar.
const IP_SALT = process.env.IP_HASH_SALT ?? "reth-thaimassage-static-salt";

/** Bildet einen nicht umkehrbaren Hash der Client-IP (DSGVO-freundlich). */
async function clientIpHash(): Promise<string | null> {
  const h = await headers();
  const fwd = h.get("x-forwarded-for");
  const ip = fwd?.split(",")[0]?.trim() || h.get("x-real-ip") || "";
  if (!ip) return null;
  return createHash("sha256").update(ip + IP_SALT).digest("hex");
}

/**
 * Speichert eine Formular-Anfrage in Supabase (Tabelle `inquiries`).
 * Schutzmaßnahmen: Honeypot, serverseitige Validierung + Längen-Limits,
 * Rate-Limit (DB-Trigger), IP nur gehasht.
 *
 * Hinweis: E-Mail-Versand & AI-Auto-Antwort (n8n + Claude Haiku) folgen später.
 */
export async function submitInquiry(
  input: InquiryInput,
): Promise<InquiryResult> {
  // 1) Honeypot: Ist das versteckte Feld gefüllt, war es ein Bot.
  //    Wir geben "ok" zurück (ohne zu speichern), damit der Bot nichts merkt.
  if (input.company && input.company.trim() !== "") {
    return { ok: true };
  }

  const name = input.name?.trim();
  const email = input.email?.trim();
  const treatment = input.treatment?.trim();

  // 2) Pflichtfeld- & Format-Validierung
  if (!name || !email || !treatment) {
    return { ok: false, error: "Bitte füllen Sie die Pflichtfelder aus." };
  }
  if (!emailRe.test(email)) {
    return { ok: false, error: "Diese E-Mail-Adresse sieht nicht gültig aus." };
  }

  // 3) Längen-Limits (gegen Riesen-Payloads)
  if (
    name.length > LIMITS.name ||
    email.length > LIMITS.email ||
    (input.phone?.length ?? 0) > LIMITS.phone ||
    treatment.length > LIMITS.treatment ||
    (input.message?.length ?? 0) > LIMITS.message
  ) {
    return { ok: false, error: "Eine Ihrer Eingaben ist zu lang." };
  }

  const supabase = await createClient();
  const ip_hash = await clientIpHash();

  const { error } = await supabase.from("inquiries").insert({
    name,
    email,
    phone: input.phone?.trim() || null,
    behandlung: treatment,
    wunschdatum: input.date || null,
    nachricht: input.message?.trim() || null,
    ip_hash,
  });

  if (error) {
    // 4) Rate-Limit (vom DB-Trigger ausgelöst)
    if (error.message?.includes("rate_limit")) {
      return {
        ok: false,
        error:
          "Zu viele Anfragen in kurzer Zeit. Bitte versuchen Sie es in ein paar Minuten erneut.",
      };
    }
    return {
      ok: false,
      error:
        "Es gab ein Problem beim Senden. Bitte versuchen Sie es erneut oder rufen Sie uns telefonisch an.",
    };
  }
  return { ok: true };
}
