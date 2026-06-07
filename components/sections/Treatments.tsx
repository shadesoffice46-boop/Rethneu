import { Reveal } from "@/components/ui/Reveal";
import { TreatmentIcon } from "@/components/ui/icons";
import { treatments } from "@/lib/data";

/*
  Behandlungen als Karten-Grid.
  Die Signatur-Behandlung (featured) ist bewusst anders gestaltet, damit das
  Raster nicht uniform wirkt.
*/
export function Treatments() {
  return (
    <section id="behandlungen" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <span className="font-display text-base italic text-olive-700">
            Unsere Behandlungen
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl">
            Anwendungen, die spürbar guttun
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Von kraftvoller Thai-Massage bis zu sanfter Gesichtspflege. Jede
            Behandlung nehmen wir uns in Ruhe vor, abgestimmt auf das, was Ihr
            Körper gerade braucht.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((t, i) => (
            <Reveal key={t.slug} delay={i * 0.06}>
              <article
                className={`group flex h-full flex-col rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 ${
                  t.featured
                    ? "bg-lavender-50 ring-1 ring-lavender-300/70 hover:shadow-lift"
                    : "border border-ink/10 bg-white hover:border-lavender-300/70 hover:shadow-soft"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-xl ${
                      t.featured
                        ? "bg-lavender-700 text-white"
                        : "bg-olive-100 text-olive-700"
                    }`}
                  >
                    <TreatmentIcon name={t.icon} className="h-6 w-6" />
                  </span>
                  {t.featured && (
                    <span className="rounded-full bg-lavender-700 px-3 py-1 text-xs font-medium tracking-wide text-white">
                      Signatur
                    </span>
                  )}
                </div>

                <h3 className="mt-5 text-xl font-medium">{t.name}</h3>
                <p className="mt-2 flex-1 leading-relaxed text-muted">
                  {t.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-ink/10 pt-4 text-sm">
                  <span className="text-muted">{t.duration}</span>
                  <span className="font-display text-lg font-medium text-lavender-700">
                    {t.price}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-8 text-sm text-muted">
            Alle Preise sind Richtwerte. Gern beraten wir Sie persönlich zur
            passenden Behandlung und Dauer.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
