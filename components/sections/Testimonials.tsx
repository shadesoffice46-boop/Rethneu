import { Reveal } from "@/components/ui/Reveal";
import { IconStar } from "@/components/ui/icons";
import { testimonials } from "@/lib/data";

/*
  TODO: Platzhalter-Bewertungen (siehe lib/data.ts).
  Vor dem Livegang durch echte, freigegebene Kundenstimmen ersetzen.
*/
export function Testimonials() {
  return (
    <section className="bg-lavender-50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <span className="font-display text-base italic text-olive-700">
            Stimmen
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl">Was Gäste berichten</h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-2xl bg-white p-7 shadow-soft">
                <div
                  className="flex gap-1 text-lavender-500"
                  aria-label={`${t.rating} von 5 Sternen`}
                >
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <IconStar key={s} className="h-5 w-5" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 font-display text-lg italic leading-relaxed text-ink">
                  „{t.quote}“
                </blockquote>
                <figcaption className="mt-6 border-t border-ink/10 pt-4">
                  <span className="font-medium text-ink">{t.name}</span>
                  <span className="block text-sm text-muted">{t.detail}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
