import type { Metadata } from "next";
import Link from "next/link";
import { studio } from "@/lib/data";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung von Reth Thaimassage & Kosmetik.",
  robots: { index: false, follow: true },
};

/*
  Impressum nach § 5 DDG (seit 14.05.2024; löst § 5 TMG ab) + § 18 Abs. 2 MStV.

  OFFENE PUNKTE vor Go-Live (siehe Obsidian „Rechtliche Umsetzung“):
  - E-Mail: studio.email ist aktuell ein Platzhalter (info@…). Vor Livegang muss
    hier eine ECHTE, regelmäßig abgerufene Adresse stehen (Impressum-Pflicht).
  - USt-IdNr.: bewusst weggelassen. Falls eine USt-IdNr. vorliegt, unten ergänzen.
    Als Kleinunternehmerin (§ 19 UStG) bleibt der Block korrekterweise leer –
    NICHT die Steuernummer eintragen.
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
          <h2 className="text-xl font-semibold">Angaben gemäß § 5 DDG</h2>
          <p className="mt-3 leading-relaxed text-muted">
            {studio.owner}
            <br />
            {studio.name}
            <br />
            {studio.address.street}
            <br />
            {studio.address.city}
            <br />
            Deutschland
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Kontakt</h2>
          <p className="mt-3 leading-relaxed text-muted">
            Telefon: {studio.phoneDisplay}
            <br />
            Mobil: {studio.mobileDisplay}
            <br />
            E-Mail:{" "}
            <a
              href={`mailto:${studio.email}`}
              className="text-lavender-700 underline-offset-4 hover:underline"
            >
              {studio.email}
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            {studio.owner}
            <br />
            Anschrift wie oben.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">
            Verbraucherstreitbeilegung / Universalschlichtungsstelle
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungs&shy;verfahren
            vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Haftung für Inhalte</h2>
          <p className="mt-3 leading-relaxed text-muted">
            Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für
            die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können
            wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir
            gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir
            als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
            gespeicherte fremde Informationen zu überwachen.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Haftung für Links</h2>
          <p className="mt-3 leading-relaxed text-muted">
            Unser Angebot enthält ggf. Links zu externen Websites Dritter, auf
            deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
            Seiten verantwortlich.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Urheberrecht</h2>
          <p className="mt-3 leading-relaxed text-muted">
            Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge
            Dritter sind als solche gekennzeichnet. Vervielfältigung, Bearbeitung,
            Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
            Urheberrechts bedürfen der schriftlichen Zustimmung.
          </p>
        </section>

        <p className="hairline border-t pt-6 text-sm text-muted">
          Stand: Juni 2026
        </p>
      </div>
    </main>
  );
}
