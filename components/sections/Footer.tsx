import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { IconFacebook, IconInstagram } from "@/components/ui/icons";
import { navLinks, studio } from "@/lib/data";

const socialIcon = {
  Instagram: IconInstagram,
  Facebook: IconFacebook,
} as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream/85">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          {/* Marke */}
          <div>
            <Logo tone="light" />
            <p className="mt-5 max-w-xs leading-relaxed text-cream/70">
              {studio.tagline}. Ihre ruhige Auszeit in der Altstadt.
            </p>
            <div className="mt-6 flex gap-3">
              {studio.social.map((s) => {
                const Icon = socialIcon[s.label as keyof typeof socialIcon];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={`${studio.shortName} auf ${s.label}`}
                    className="grid h-10 w-10 place-items-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-lavender-300 hover:text-lavender-200"
                  >
                    {Icon && <Icon className="h-5 w-5" />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer-Navigation">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-cream/55">
              Seiten
            </h2>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/80 transition-colors hover:text-lavender-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#buchung"
                  className="text-cream/80 transition-colors hover:text-lavender-200"
                >
                  Termin buchen
                </Link>
              </li>
            </ul>
          </nav>

          {/* Kontakt */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-cream/55">
              Kontakt
            </h2>
            <ul className="mt-4 space-y-2.5 text-cream/80">
              <li>
                <a
                  href={studio.phoneHref}
                  className="transition-colors hover:text-lavender-200"
                >
                  {studio.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${studio.email}`}
                  className="transition-colors hover:text-lavender-200"
                >
                  {studio.email}
                </a>
              </li>
              <li className="text-cream/70">
                {studio.address.street}
                <br />
                {studio.address.city}
              </li>
            </ul>
          </div>

          {/* Öffnungszeiten */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-cream/55">
              Öffnungszeiten
            </h2>
            <ul className="mt-4 space-y-2.5 text-cream/80">
              {studio.hours.map((h) => (
                <li key={h.days} className="flex flex-col">
                  <span className="text-cream/60">{h.days}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Untere Leiste */}
        <div className="mt-14 flex flex-col gap-4 border-t border-cream/15 pt-7 text-sm text-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {studio.name}
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/impressum"
              className="transition-colors hover:text-lavender-200"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="transition-colors hover:text-lavender-200"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
