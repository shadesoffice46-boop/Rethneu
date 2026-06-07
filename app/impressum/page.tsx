import type { Metadata } from "next";
import Link from "next/link";
import { studio } from "@/lib/data";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung von Reth Thaimassage & Kosmetik.",
  robots: { index: false, follow: true },
};

/*
  Stub-Seite. Die Inhalte sind Platzhalter und muessen rechtssicher ausgefuellt
  werden (Angaben gemaess § 5 TMG / § 18 MStV).
  TODO: Mit echten Angaben des Studios und ggf. anwaltlicher Pruefung fuellen.
*/
export default function ImpressumPage() {
  return (
    <main id="main" className="mx-auto max-w-2xl px-6 py-24 md:py-32">
      <Link
        href="/"
        className="text-sm font-medium text-lavender-700 transition-opacity hover:opacity-70"
      >
        ← Zurück zur Startseite
      </Link>

      <h1 className="mt-8 text-4xl md:text-5xl">Impressum</h1>

      <div className="mt-10 space-y-8 text-ink/90">
        <section>
          <h2 className="text-xl font-semibold">Angaben gemäß § 5 TMG</h2>
          <p className="mt-3 leading-relaxed text-muted">
            {/* TODO: Vollständige Anbieterangaben eintragen */}
            {studio.name}
            <br />
            {studio.address.street}
            <br />
            {studio.address.city}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Kontakt</h2>
          <p className="mt-3 leading-relaxed text-muted">
            Telefon: {studio.phoneDisplay}
            <br />
            {/* TODO: Echte E-Mail bestätigen */}
            E-Mail: {studio.email}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">
            Umsatzsteuer / Verantwortlichkeit
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            {/* TODO: USt-IdNr., Berufsbezeichnung und inhaltlich Verantwortlichen
                gemäß § 18 Abs. 2 MStV ergänzen. */}
            Diese Angaben werden derzeit vervollständigt.
          </p>
        </section>

        <p className="hairline border-t pt-6 text-sm text-muted">
          Hinweis: Dies ist ein Platzhalter-Impressum. Bitte vor dem Livegang
          rechtssicher ausfüllen lassen.
        </p>
      </div>
    </main>
  );
}
