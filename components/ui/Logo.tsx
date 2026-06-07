import Link from "next/link";

type LogoProps = {
  /** "dark" fuer helle Hintergruende, "light" fuer den dunklen Footer. */
  tone?: "dark" | "light";
  /** Zweite Zeile (Untertitel) anzeigen. */
  withSubtitle?: boolean;
  className?: string;
};

/* Text-Logo mit kleiner Lotus-Marke. */
export function Logo({
  tone = "dark",
  withSubtitle = true,
  className = "",
}: LogoProps) {
  const titleColor = tone === "light" ? "text-cream" : "text-ink";
  const subColor = tone === "light" ? "text-lavender-200" : "text-muted";

  return (
    <Link
      href="/"
      aria-label="Reth Thaimassage & Kosmetik, zur Startseite"
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-lavender-700 transition-transform duration-300 group-hover:-translate-y-0.5">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#f6f2fb"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
          focusable="false"
        >
          <path d="M12 18c0-3.4 0-5.6 0-7.6" />
          <path d="M12 11.4c-1.9-1.9-4.5-1.9-5.6-.8 0 2.2 2.6 4.1 5.6 4.1s5.6-1.9 5.6-4.1c-1.1-1.1-3.7-1.1-5.6.8Z" />
          <path d="M12 11.4c-1.1-2.2-.7-4.9.4-6 1.4 1.1 1.8 3.8.7 6" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-lg font-medium tracking-tight ${titleColor}`}
        >
          Reth Thaimassage
        </span>
        {withSubtitle && (
          <span
            className={`mt-0.5 text-[0.7rem] font-medium uppercase tracking-[0.18em] ${subColor}`}
          >
            &amp; Kosmetik
          </span>
        )}
      </span>
    </Link>
  );
}
