"use server";

import { createClient } from "@/lib/supabase/server";

export type InquiryInput = {
  name: string;
  email: string;
  phone?: string;
  treatment: string;
  date?: string;
  message?: string;
};

export type InquiryResult = { ok: true } | { ok: false; error: string };

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Speichert eine Formular-Anfrage in Supabase (Tabelle `inquiries`).
 * Läuft als Server Action – kein direkter DB-Zugriff aus dem Browser-Bundle.
 *
 * Hinweis: E-Mail-Versand & AI-Auto-Antwort (n8n + Claude Haiku) folgen in
 * einem späteren Schritt; hier wird die Anfrage zunächst nur persistiert.
 */
export async function submitInquiry(
  input: InquiryInput,
): Promise<InquiryResult> {
  const name = input.name?.trim();
  const email = input.email?.trim();
  const treatment = input.treatment?.trim();

  // Serverseitige Validierung (zusätzlich zur Client-Validierung)
  if (!name || !email || !treatment) {
    return { ok: false, error: "Pflichtfelder fehlen." };
  }
  if (!emailRe.test(email)) {
    return { ok: false, error: "Ungültige E-Mail-Adresse." };
  }

  const supabase = await createClient();
  const { error } = await supabase.from("inquiries").insert({
    name,
    email,
    phone: input.phone?.trim() || null,
    behandlung: treatment,
    wunschdatum: input.date || null,
    nachricht: input.message?.trim() || null,
  });

  if (error) {
    return { ok: false, error: error.message };
  }
  return { ok: true };
}
