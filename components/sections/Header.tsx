"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { navLinks } from "@/lib/data";

/*
  Sticky-Header.
  - ueber dem Hero transparent, beim Scrollen cremefarben + weiche Trennlinie
  - mobiles Menue mit Fokus-Zustaenden und aria-Attributen
*/
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hintergrund-Scroll sperren, solange das mobile Menue offen ist.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ease-out ${
        solid
          ? "border-b border-ink/10 bg-cream/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <Logo />

        {/* Desktop-Navigation */}
        <nav
          aria-label="Hauptnavigation"
          className="hidden items-center gap-8 md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/75 transition-colors duration-200 hover:text-lavender-700"
            >
              {link.label}
            </Link>
          ))}
          <Button href="#buchung" className="!px-5 !py-2.5">
            Termin buchen
          </Button>
        </nav>

        {/* Mobiler Umschalter */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          className="grid h-11 w-11 place-items-center rounded-full text-ink transition-colors hover:bg-ink/5 md:hidden"
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden>
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden>
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobiles Menue */}
      <AnimatePresence>
        {open && (
          <motion.nav
            key="mobile-menu"
            id="mobile-menu"
            aria-label="Hauptnavigation (mobil)"
            initial={reduce ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-ink/10 bg-cream/95 backdrop-blur-md md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-medium text-ink/85 transition-colors hover:bg-lavender-50 hover:text-lavender-700"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                href="#buchung"
                onClick={() => setOpen(false)}
                className="mt-2 w-full"
              >
                Termin buchen
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
