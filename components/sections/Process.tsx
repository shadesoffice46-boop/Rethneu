import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/lib/data";

/*
  Ablauf in nummerierten Schritten.
  Hier sind Nummern bewusst eingesetzt: Es ist eine echte Reihenfolge.
*/
export function Process() {
  return (
    <section id="ablauf" className="py-24 md:py-32">
      <div className="w-full px-[clamp(1.25rem,4.5vw,4.5rem)]">
        <Reveal className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl">
            In vier Schritten zur Entspannung
          </h2>
        </Reveal>

        <ol className="mt-14 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {processSteps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 0.08} className="relative">
              {/* Verbindungslinie zwischen den Schritten (nur Desktop) */}
              {i < processSteps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-12 top-6 hidden h-px w-[calc(100%-2rem)] bg-ink/10 lg:block"
                />
              )}
              <div className="flex items-center gap-4 lg:block">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-lavender-100 font-display text-xl font-medium text-lavender-700">
                  {i + 1}
                </span>
                <h3 className="text-xl font-medium lg:mt-6">{step.title}</h3>
              </div>
              <p className="mt-3 leading-relaxed text-muted lg:pr-6">
                {step.text}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
