import { IconMapPin, IconClock, IconPhone, IconLeaf } from "@/components/ui/icons";
import { studio } from "@/lib/data";

/*
  Schmale Vertrauensleiste direkt unter dem Hero: Standort, Zeiten, Kontakt,
  Neueroeffnung – die Dinge, die ein lokaler Besucher sofort sehen will.
*/
export function TrustStrip() {
  return (
    <section
      aria-label="Studio auf einen Blick"
      className="border-y border-ink/10 bg-cream"
    >
      <div className="flex w-full flex-wrap items-center justify-center gap-x-8 gap-y-2.5 px-[clamp(1.25rem,4.5vw,4.5rem)] py-4 text-sm text-muted">
        <span className="inline-flex items-center gap-2">
          <IconMapPin className="h-4 w-4 text-olive-700" />
          {studio.address.street}, {studio.address.city}
        </span>
        <span className="inline-flex items-center gap-2">
          <IconClock className="h-4 w-4 text-olive-700" />
          Mo–Fr 10–19 · Sa 10–18 Uhr
        </span>
        <a
          href={studio.phoneHref}
          className="tel-link inline-flex items-center gap-2 font-medium text-ink"
        >
          <IconPhone className="h-4 w-4 text-olive-700" />
          {studio.phoneDisplay}
        </a>
        <span className="inline-flex items-center gap-2">
          <IconLeaf className="h-4 w-4 text-olive-700" />
          Neu eröffnet in der Altstadt
        </span>
      </div>
    </section>
  );
}
