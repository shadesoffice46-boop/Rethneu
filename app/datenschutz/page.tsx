import type { Metadata } from "next";
import Link from "next/link";
import { studio } from "@/lib/data";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von Reth Thaimassage & Kosmetik.",
  robots: { index: false, follow: true },
};

/*
  Datenschutzerklärung nach Art. 13 DSGVO – auf den realen Stack zugeschnitten
  (Vercel, Supabase, Cal.com, Anthropic Claude, Google Workspace, Hostinger/n8n).

  OFFENE PUNKTE vor Go-Live (siehe Obsidian „Rechtliche Umsetzung“):
  - Die 6 AVV/DPA müssen abgeschlossen sein (Hostinger, Supabase, Vercel,
    Google, Anthropic, Cal.com), bevor diese Erklärung wirksam greift.
  - E-Mail (studio.email) ist noch ein Platzhalter; echte Studio-Adresse setzen.
  - Cal.com DPF-Status vor Live final prüfen (dataprivacyframework.gov/list);
    aktuell als SCC (Art. 46) ausgewiesen – das ist der sichere Default.
  - Vor Veröffentlichung ein Generator-/Anwalts-Gegencheck (eRecht24 o. Ä.).
*/

/** Empfänger / Auftragsverarbeiter + Drittland-Rechtsgrundlage (Art. 28 / Art. 44 ff.). */
const processors = [
  {
    name: "Vercel Inc.",
    purpose: "Hosting & Auslieferung der Website",
    country: "USA",
    basis: "Angemessenheitsbeschluss EU-US Data Privacy Framework (Art. 45 DSGVO)",
  },
  {
    name: "Supabase Inc.",
    purpose: "Datenbank für Anfragen (Serverstandort EU/Frankfurt)",
    country: "USA (Konzernsitz)",
    basis: "EU-Standardvertragsklauseln (Art. 46 DSGVO) + Transfer-Folgenabschätzung",
  },
  {
    name: "Cal.com Inc.",
    purpose: "Online-Terminbuchung",
    country: "USA",
    basis: "EU-Standardvertragsklauseln (Art. 46 DSGVO)",
  },
  {
    name: "Anthropic PBC",
    purpose: "KI-gestützte Vorsortierung & Entwurf von Antworten (Claude API)",
    country: "USA",
    basis: "Data Privacy Framework (Art. 45) + EU-Standardvertragsklauseln (Art. 46)",
  },
  {
    name: "Google Ireland Ltd. / Google LLC",
    purpose: "E-Mail-Versand & interne Protokollierung (Gmail, Sheets, Calendar)",
    country: "USA",
    basis: "Angemessenheitsbeschluss EU-US Data Privacy Framework (Art. 45 DSGVO)",
  },
  {
    name: "Hostinger International Ltd.",
    purpose: "Server für die Automatisierung (selbst betriebenes n8n)",
    country: "EU",
    basis: "Verarbeitung innerhalb der EU – keine Drittlandübermittlung",
  },
];

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="mt-3 space-y-3 leading-relaxed text-muted">{children}</div>
    </section>
  );
}

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

      <p className="mt-6 leading-relaxed text-muted">
        Der Schutz Ihrer persönlichen Daten ist uns wichtig. Nachfolgend
        informieren wir Sie gemäß Art. 13 DSGVO darüber, welche Daten wir beim
        Besuch dieser Website und bei einer Anfrage oder Terminbuchung
        verarbeiten, zu welchem Zweck und auf welcher Rechtsgrundlage.
      </p>

      <div className="mt-10 space-y-9 text-ink/90">
        <Section title="1. Verantwortliche Stelle">
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
          </p>
          <p>
            {studio.owner}
            <br />
            {studio.name}
            <br />
            {studio.address.street}, {studio.address.city}
            <br />
            Telefon: {studio.phoneDisplay}
            <br />
            E-Mail:{" "}
            <a
              href={`mailto:${studio.email}`}
              className="text-lavender-700 underline-offset-4 hover:underline"
            >
              {studio.email}
            </a>
          </p>
        </Section>

        <Section title="2. Aufruf der Website (Server-Logs, Hosting)">
          <p>
            Unsere Website wird bei <strong>Vercel Inc.</strong> gehostet. Beim
            Aufruf der Seite verarbeitet Vercel technisch notwendige Daten (u. a.
            IP-Adresse, Datum und Uhrzeit, abgerufene Datei, Browsertyp), um die
            Seite sicher und stabil auszuliefern.
          </p>
          <p>
            Rechtsgrundlage ist unser berechtigtes Interesse an einem
            funktionsfähigen, sicheren Internetauftritt (Art. 6 Abs. 1 lit. f
            DSGVO). Die Schriftarten werden lokal von unserem Server geladen; es
            besteht hierfür <strong>keine Verbindung zu Google Fonts</strong>.
          </p>
        </Section>

        <Section title="3. Kontakt- und Terminanfrage über das Formular">
          <p>
            Wenn Sie das Anfrageformular nutzen, verarbeiten wir die von Ihnen
            angegebenen Daten – Name und E-Mail-Adresse (Pflicht) sowie optional
            Telefonnummer, gewünschte Behandlung, Wunschdatum/-zeit und Ihre
            Nachricht – ausschließlich, um Ihre Anfrage zu bearbeiten und Ihnen zu
            antworten.
          </p>
          <p>
            Rechtsgrundlage ist die Anbahnung bzw. Durchführung eines
            (vorvertraglichen) Verhältnisses auf Ihre Anfrage hin (Art. 6 Abs. 1
            lit. b DSGVO) sowie unser berechtigtes Interesse an der Beantwortung
            (Art. 6 Abs. 1 lit. f DSGVO). Die Angabe ist freiwillig; ohne Name und
            E-Mail können wir Ihre Anfrage allerdings nicht bearbeiten.
          </p>
          <p>
            Die Anfrage wird in unserer Datenbank bei{" "}
            <strong>Supabase</strong> gespeichert (Serverstandort EU/Frankfurt).
            Ihre IP-Adresse wird dabei nur in <strong>nicht umkehrbar
            gehashter</strong> Form zum Schutz vor Missbrauch (Spam, Rate-Limit)
            abgelegt – nicht im Klartext.
          </p>
        </Section>

        <Section title="4. Online-Terminbuchung (Cal.com)">
          <p>
            Für die direkte Terminbuchung nutzen wir den Dienst{" "}
            <strong>Cal.com</strong>. Das Buchungsfenster wird{" "}
            <strong>erst geladen, wenn Sie aktiv auf „Termin buchen“ klicken</strong>{" "}
            – vorher findet keine Verbindung zu Cal.com statt. Bei der Buchung
            geben Sie Name, E-Mail und den gewünschten Termin an; diese Daten
            verarbeitet Cal.com in unserem Auftrag, um den Termin zu organisieren.
          </p>
          <p>
            Rechtsgrundlage ist die Durchführung der von Ihnen selbst
            angestoßenen Terminbuchung (Art. 6 Abs. 1 lit. b DSGVO).
          </p>
        </Section>

        <Section title="5. KI-gestützte Bearbeitung von Anfragen">
          <p>
            Zur schnelleren Bearbeitung werden eingehende Anfragen mit
            Unterstützung eines KI-Dienstes (<strong>Anthropic „Claude“</strong>)
            vorsortiert und Antwort-Entwürfe vorbereitet. Die{" "}
            <strong>endgültige Entscheidung über Termin und Angebot trifft immer
            ein Mensch</strong> – es findet keine ausschließlich automatisierte
            Entscheidung im Sinne des Art. 22 DSGVO statt.
          </p>
          <p>
            Rechtsgrundlage ist unser berechtigtes Interesse an einer effizienten
            Anfragebearbeitung (Art. 6 Abs. 1 lit. f DSGVO). Über die kommerzielle
            Programmierschnittstelle von Anthropic werden Ihre Daten{" "}
            <strong>nicht zum Training von KI-Modellen verwendet</strong> und nur
            kurzzeitig verarbeitet.
          </p>
        </Section>

        <Section title="6. E-Mail-Antwort & interne Verwaltung (Google Workspace)">
          <p>
            Für den Versand unserer Antwort-E-Mails sowie die interne
            Protokollierung und Terminverwaltung nutzen wir{" "}
            <strong>Google Workspace</strong> (Gmail, Google Tabellen, Google
            Kalender). Dabei werden die für die Beantwortung erforderlichen Daten
            verarbeitet. Automatisch erstellte Antworten kennzeichnen wir als
            mithilfe eines KI-Assistenten erstellt.
          </p>
          <p>
            Die Server-Automatisierung läuft über eine von uns selbst betriebene{" "}
            <strong>n8n</strong>-Instanz auf einem Server bei{" "}
            <strong>Hostinger</strong> (Serverstandort EU). Rechtsgrundlage ist
            Art. 6 Abs. 1 lit. b und lit. f DSGVO.
          </p>
        </Section>

        <Section title="7. Empfänger & Übermittlung in Drittländer (USA)">
          <p>
            Wir geben Ihre Daten nur an die nachfolgend genannten Dienstleister
            weiter, die sie ausschließlich in unserem Auftrag und nach unseren
            Weisungen verarbeiten (Auftragsverarbeitung, Art. 28 DSGVO). Eine
            Übermittlung in die USA ist mit den genannten Garantien abgesichert;
            eine Kopie der Garantien stellen wir auf Anfrage bereit.
          </p>
          <div className="overflow-x-auto">
            <table className="mt-2 w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-ink/15 text-left text-ink">
                  <th className="py-2 pr-4 font-semibold">Dienst</th>
                  <th className="py-2 pr-4 font-semibold">Zweck</th>
                  <th className="py-2 pr-4 font-semibold">Land</th>
                  <th className="py-2 font-semibold">Grundlage des Transfers</th>
                </tr>
              </thead>
              <tbody>
                {processors.map((p) => (
                  <tr key={p.name} className="border-b border-ink/10 align-top">
                    <td className="py-2 pr-4 font-medium text-ink">{p.name}</td>
                    <td className="py-2 pr-4">{p.purpose}</td>
                    <td className="py-2 pr-4">{p.country}</td>
                    <td className="py-2">{p.basis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm">
            Hinweis: Auch bei einem Serverstandort in der EU kann ein
            US-Mutterkonzern dem US-CLOUD-Act unterliegen. Für diese Fälle gelten
            die oben genannten Standardvertragsklauseln als zusätzliche Garantie.
          </p>
        </Section>

        <Section title="8. Speicherdauer">
          <p>
            Wir speichern Ihre Daten nur so lange, wie es für die Bearbeitung
            Ihrer Anfrage bzw. Ihres Termins erforderlich ist oder gesetzliche
            Aufbewahrungspflichten bestehen. Anfragen, aus denen kein
            Geschäftsvorgang entsteht, werden anschließend gelöscht.
          </p>
        </Section>

        <Section title="9. Ihre Rechte">
          <p>Sie haben nach der DSGVO jederzeit das Recht auf:</p>
          <ul className="ml-5 list-disc space-y-1">
            <li>Auskunft über die zu Ihnen gespeicherten Daten (Art. 15)</li>
            <li>Berichtigung unrichtiger Daten (Art. 16)</li>
            <li>Löschung (Art. 17) und Einschränkung der Verarbeitung (Art. 18)</li>
            <li>Datenübertragbarkeit (Art. 20)</li>
            <li>
              Widerspruch gegen Verarbeitungen auf Grundlage von Art. 6 Abs. 1
              lit. f (Art. 21)
            </li>
          </ul>
          <p>
            Zur Ausübung genügt eine formlose Nachricht an die oben genannten
            Kontaktdaten.
          </p>
        </Section>

        <Section title="10. Beschwerderecht bei der Aufsichtsbehörde">
          <p>
            Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu
            beschweren. Für uns zuständig ist:
          </p>
          <p>
            Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit
            Baden-Württemberg
            <br />
            Lautenschlagerstraße 20, 70173 Stuttgart
            <br />
            <a
              href="https://www.baden-wuerttemberg.datenschutz.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lavender-700 underline-offset-4 hover:underline"
            >
              www.baden-wuerttemberg.datenschutz.de
            </a>
          </p>
        </Section>

        <p className="hairline border-t pt-6 text-sm text-muted">
          Stand: Juni 2026
        </p>
      </div>
    </main>
  );
}
