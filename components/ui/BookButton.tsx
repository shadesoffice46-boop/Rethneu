"use client";

import { useRef } from "react";
import { getCalApi } from "@calcom/embed-react";
import { calUsername } from "@/lib/data";

type BookButtonProps = {
  /** Cal.com-Event-Typ-Slug (siehe lib/data.ts → treatments[].calSlug). */
  calSlug: string;
  children: React.ReactNode;
  className?: string;
};

/*
  Öffnet das Cal.com-Buchungs-Popup für den jeweiligen Behandlungs-Event-Typ.

  Datenschutz (siehe Obsidian „Rechtliche Umsetzung“ §5/§7):
  Das Cal.com-Embed wird NICHT beim Laden der Seite initialisiert, sondern erst,
  wenn Buchungsabsicht erkennbar ist (Hover / Fokus / Touch auf den Button).
  Dadurch entsteht erst bei aktiver Nutzung eine Verbindung zu Cal.com (USA) –
  das hält die Seite ohne Cookie-/Consent-Banner sauber (Rechtsgrundlage
  Art. 6 Abs. 1 lit. b: vom Nutzer selbst angestoßene Terminbuchung).
*/
export function BookButton({ calSlug, children, className }: BookButtonProps) {
  const initialized = useRef(false);

  // Lädt & konfiguriert das Cal-Embed genau einmal – erst bei Buchungsabsicht.
  function warmUpCalEmbed() {
    if (initialized.current) return;
    initialized.current = true;
    (async () => {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#AA077C" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }

  return (
    <button
      type="button"
      data-cal-link={`${calUsername}/${calSlug}`}
      data-cal-config='{"layout":"month_view"}'
      onMouseEnter={warmUpCalEmbed}
      onFocus={warmUpCalEmbed}
      onTouchStart={warmUpCalEmbed}
      onClick={warmUpCalEmbed}
      className={className}
    >
      <span>{children}</span>
    </button>
  );
}
