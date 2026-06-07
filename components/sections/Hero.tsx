"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { IconLeaf, IconPhone } from "@/components/ui/icons";
import { studio } from "@/lib/data";

export function Hero() {
  const reduce = useReducedMotion();

  // Eltern-/Kind-Varianten fuer einen ruhigen, gestaffelten Bildaufbau.
  const container = {
    hidden: {},
    show: {
      transition: reduce ? {} : { staggerChildren: 0.12, delayChildren: 0.08 },
    },
  };
  const item = reduce
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 24 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
        },
      };

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-lavender-50 pt-32 pb-20 md:pt-40 md:pb-28"
    >
      {/* Sehr dezenter Lichtschein im Hintergrund */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[-10%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.85),transparent_65%)]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Text */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full bg-olive-100 px-4 py-1.5 text-sm font-medium text-olive-700"
          >
            <IconLeaf className="h-4 w-4" />
            {studio.tagline}
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[4.2rem]"
          >
            Eine ruhige{" "}
            <span className="font-display italic text-lavender-700">
              Auszeit
            </span>{" "}
            für Körper und Sinne.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            Traditionelle Thai-Massage, Aromaöl, Hot Stone und Kosmetik. Mit
            erfahrenen Händen und viel Zeit für Sie, in unserem neu eröffneten
            Studio mitten in der Altstadt.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button href="#buchung">Termin buchen</Button>
            <Button href="#behandlungen" variant="secondary">
              Behandlungen ansehen
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:gap-6"
          >
            <a
              href={studio.phoneHref}
              className="inline-flex items-center gap-2 font-medium text-ink transition-colors hover:text-lavender-700"
            >
              <IconPhone className="h-4 w-4 text-olive-700" />
              {studio.phoneDisplay}
            </a>
            <span className="hidden h-4 w-px bg-ink/15 sm:block" aria-hidden />
            <span>Termine ohne Vereinbarung möglich</span>
          </motion.div>
        </motion.div>

        {/* Bild */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          {/* Dekorative Flaeche fuer Tiefe */}
          <div
            aria-hidden
            className="absolute -right-4 -top-4 -z-10 h-full w-full rounded-[2rem] bg-olive-100"
          />
          {/* TODO: Echtes Hero-Foto einsetzen, z. B. <Image src="/images/hero.jpg" ... />. */}
          <ImagePlaceholder ratio="aspect-[4/5]" className="shadow-lift" />

          {/* Schwebendes "Neueröffnung"-Badge (vom Schaufenster inspiriert) */}
          <div className="absolute -bottom-5 left-5 rounded-2xl bg-cream/95 px-5 py-3 shadow-soft backdrop-blur">
            <p className="font-display text-sm font-medium text-lavender-700">
              Neueröffnung
            </p>
            <p className="text-xs text-muted">Herzlich willkommen</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
