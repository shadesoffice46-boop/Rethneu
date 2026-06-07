type ImagePlaceholderProps = {
  /** Seitenverhaeltnis-Utility, z. B. "aspect-[4/5]". */
  ratio?: string;
  /** Kurzer Hinweis, der dezent in der Flaeche steht. */
  label?: string;
  className?: string;
};

/*
  Reservierte, bewusst leere Bildflaeche.
  Haelt das Layout im Gleichgewicht, bis ein echtes Foto eingesetzt wird –
  ohne stoerende Platzhalter-Grafik.
*/
export function ImagePlaceholder({
  ratio = "aspect-[4/5]",
  label = "Foto folgt",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`Bildplatzhalter: ${label}`}
      className={`relative grid w-full place-items-center overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-lavender-100 via-lavender-50 to-cream ring-1 ring-inset ring-ink/10 ${ratio} ${className}`}
    >
      <div className="flex flex-col items-center gap-3 text-olive-700/45">
        <svg
          width="38"
          height="38"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <rect x="3" y="4.5" width="18" height="15" rx="2.5" />
          <circle cx="8.5" cy="9.5" r="1.6" />
          <path d="m4 17 4.6-4.6c.7-.7 1.8-.7 2.5 0L16 17" />
          <path d="m13.5 14.5 1.7-1.7c.7-.7 1.8-.7 2.5 0L20 15" />
        </svg>
        <span className="text-sm font-medium tracking-wide">{label}</span>
      </div>
    </div>
  );
}
