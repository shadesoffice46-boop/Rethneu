import { Reveal } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ValueIcon } from "@/components/ui/icons";
import { values } from "@/lib/data";

export function About() {
  return (
    <section id="ueber-uns" className="bg-[#fcf3f8] py-24 md:py-32">
      <div className="grid w-full items-center gap-14 px-[clamp(1.25rem,4.5vw,4.5rem)] lg:grid-cols-2 lg:gap-16">
        {/* Bild */}
        <Reveal className="order-1">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-[2rem] bg-olive-100"
            />
            {/* TODO: Echtes Studio-Foto einsetzen. */}
            <ImagePlaceholder ratio="aspect-[6/5]" className="shadow-soft" />
          </div>
        </Reveal>

        {/* Text */}
        <Reveal className="order-2" delay={0.1}>
          <h2 className="heading-lg">Ein Ort der Ruhe, mit Hingabe geführt</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Bei Reth Thaimassage &amp; Kosmetik verbinden wir traditionelle
            Thai-Techniken mit moderner Kosmetik. Wir glauben daran, dass echte
            Erholung Zeit braucht, deshalb nehmen wir uns diese Zeit, hören zu
            und gestalten jede Behandlung individuell für Sie.
          </p>

          <ul className="mt-10 space-y-6">
            {values.map((v) => (
              <li key={v.title} className="flex gap-4">
                <span className="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-olive-700 shadow-soft">
                  <ValueIcon name={v.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-medium">{v.title}</h3>
                  <p className="mt-1 leading-relaxed text-muted">{v.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
