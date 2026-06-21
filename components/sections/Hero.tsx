"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
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
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-white pt-24 pb-12 md:pt-28"
    >
      {/* Sehr dezenter Lichtschein im Hintergrund */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[-10%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.85),transparent_65%)]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-6 lg:grid-cols-[0.82fr_1.18fr]">
        {/* Text */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full bg-lavender-100 px-4 py-1.5 text-sm font-medium text-[#4a1e47]"
          >
            <IconLeaf className="h-4 w-4" />
            {studio.tagline}
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-5 text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[3.6rem]"
          >
            Eine ruhige{" "}
            <span className="font-display italic text-lavender-700">
              Auszeit
            </span>{" "}
            für Körper, Geist und Sinne.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 max-w-xl text-lg leading-relaxed text-muted"
          >
            Traditionelle Thai-Massage, Aromaöl, Hot Stone und Kosmetik. Mit
            erfahrenen Händen und viel Zeit für Sie, in unserem neu eröffneten
            Studio mitten in der Altstadt.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <Button href="#buchung">Termin buchen</Button>
            <Button href="#behandlungen" variant="secondary">
              Behandlungen ansehen
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-5 flex flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:gap-6"
          >
            <a
              href={studio.phoneHref}
              className="tel-link inline-flex items-center gap-2 font-medium text-ink"
            >
              <IconPhone className="h-4 w-4 text-olive-700" />
              {studio.phoneDisplay}
            </a>
            <span className="hidden h-4 w-px bg-ink/15 sm:block" aria-hidden />
            <span>Termine ohne Vereinbarung möglich</span>
          </motion.div>
        </motion.div>

        {/* Frangipani-Video (Claude-Design-Stand) – nahtloser nativer Loop */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="relative mx-auto w-full"
        >
          <video
            src="/frangipani.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-label="Frangipani-Baum"
            className="block h-auto max-h-[74vh] w-full object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
