import type { Metadata } from "next";
import Link from "next/link";
import { studio } from "@/lib/data";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von Reth Thaimassage & Kosmetik.",
  robots: { index: false, follow: true },
};

/*
  Stub-Seite. Platzhalter-Datenschutzerklärung.
  TODO: Mit einer vollständigen, DSGVO-konformen Erklärung ersetzen
  (z. B. zu Kontaktformular, Hosting, Cookies, Betroffenenrechten).
*/
export default function DatenschutzPage() {
  return (
    <main id="main" className="mx-auto max-w-2xl px-6 py-24 md:py-32">
      <Link
        href="/"
        className="text-sm font-medium text-lavender-700 transition-opacity hover:opacity-70"
      >
        ← Zurück zur Startseite
      </Link>

      <h1 className="mt-8 text-4xl md:text-5xl">Datenschutz&shy;erklärung</h1>

      <div className="mt-10 space-y-8 text-ink/90">
        <section>
          <h2 className="text-xl font-semibold">Verantwortliche Stelle</h2>
          <p className="mt-3 leading-relaxed text-muted">
            {studio.name}
            <br />
            {studio.address.street}, {studio.address.city}
            <br />
            Telefon: {studio.phoneDisplay}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Kontaktanfragen</h2>
          <p className="mt-3 leading-relaxed text-muted">
            {/* TODO: Beschreiben, wie Anfragen über das Formular verarbeitet werden,
                sobald die technische Anbindung steht. */}
            Wenn Sie uns über das Anfrageformular kontaktieren, verarbeiten wir
            die von Ihnen übermittelten Daten ausschließlich zur Bearbeitung
            Ihrer Anfrage. Eine Weitergabe an Dritte erfolgt nicht ohne Ihre
            Einwilligung.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Ihre Rechte</h2>
          <p className="mt-3 leading-relaxed text-muted">
            {/* TODO: Betroffenenrechte nach DSGVO vollständig ausführen. */}
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung und
            Einschränkung der Verarbeitung Ihrer personenbezogenen Daten.
          </p>
        </section>

        <p className="hairline border-t pt-6 text-sm text-muted">
          Hinweis: Dies ist eine Platzhalter-Datenschutzerklärung. Bitte vor dem
          Livegang vollständig und rechtssicher ausarbeiten lassen.
        </p>
      </div>
    </main>
  );
}
