"use client";

import { useEffect } from "react";
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
  Der Kunde wählt dort Dauer + freien Termin und bucht direkt.
*/
export function BookButton({ calSlug, children, className }: BookButtonProps) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#5E4A85" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <button
      type="button"
      data-cal-link={`${calUsername}/${calSlug}`}
      data-cal-config='{"layout":"month_view"}'
      className={className}
    >
      {children}
    </button>
  );
}
