import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary";

/*
  Liquid-Glass-Button (Claude-Design-Stand).
  Beide Varianten teilen den Glas-Stil (.glass-btn aus globals.css) – der
  Inhalt MUSS in einem <span> liegen (z-index/Kanten-Relief). "variant" bleibt
  als Prop erhalten, damit bestehende Aufrufer nicht brechen.
*/
const baseClasses =
  "glass-btn inline-flex items-center justify-center rounded-full px-6 py-3.5 " +
  "text-sm font-semibold tracking-wide";

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

/** Polymorpher Glas-Button: rendert <a> bei href, sonst <button>. */
export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  void variant; // beide Varianten teilen aktuell den Glas-Stil
  const classes = `${baseClasses} ${className}`;

  if ("href" in props && props.href !== undefined) {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...rest}>
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonAsButton)}>
      <span>{children}</span>
    </button>
  );
}
