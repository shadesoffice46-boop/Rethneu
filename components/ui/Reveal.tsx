"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Verzoegerung in Sekunden fuer gestaffelte Reveals. */
  delay?: number;
  /** Versatz in px, aus dem das Element einfaedt. */
  y?: number;
  className?: string;
  as?: "div" | "li" | "section";
};

/*
  Dezenter Fade/Slide beim Scroll-In.
  - respektiert prefers-reduced-motion: dann ohne Bewegung, sofort sichtbar
  - feuert nur einmal (once)
  - weiche Exponential-Kurve, kein Bounce
*/
export function Reveal({
  children,
  delay = 0,
  y = 20,
  className,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </MotionTag>
  );
}
