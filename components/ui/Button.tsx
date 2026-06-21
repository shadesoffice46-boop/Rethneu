import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary";

const variants: Record<Variant, string> = {
  // Primaer: volles, dunkles Lila mit weißem Text (Kontrast > 7:1).
  primary:
    "bg-lavender-700 text-white shadow-soft hover:bg-[#87045f] hover:-translate-y-0.5 hover:shadow-lift",
  // Sekundaer: ruhiger Olive-Umriss, fuellt sich beim Hover sanft.
  secondary:
    "border border-olive-500/45 text-olive-700 hover:bg-olive-100 hover:border-olive-500/70 hover:-translate-y-0.5",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide " +
  "transition-all duration-300 ease-out " +
  "focus-visible:outline-2 focus-visible:outline-offset-3 " +
  "motion-reduce:transition-none motion-reduce:hover:translate-y-0";

type CommonProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className">;

type ButtonAsButton = CommonProps & {
  href?: undefined;
} & Omit<ComponentPropsWithoutRef<"button">, "className">;

type ButtonProps = ButtonAsLink | ButtonAsButton;

/** Polymorpher Button: rendert <a> bei href, sonst <button>. */
export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if ("href" in props && props.href !== undefined) {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}
