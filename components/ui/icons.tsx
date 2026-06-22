/*
  Einheitliches Icon-Set (Stroke-basiert, currentColor, 1.6px).
  Bewusst keine Emojis – konsistente, skalierbare SVGs.
*/
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

/* --------------------------- Behandlungs-Icons --------------------------- */

export function IconLotus(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 20c4.5 0 8-2.4 8-5.6-2 0-4 .8-5.2 2.2" />
      <path d="M12 20c-4.5 0-8-2.4-8-5.6 2 0 4 .8 5.2 2.2" />
      <path d="M12 20c2.2 0 4-2.5 4-5.6-1.4.4-2.8 1.4-3.5 2.7" />
      <path d="M12 20c-2.2 0-4-2.5-4-5.6 1.4.4 2.8 1.4 3.5 2.7" />
      <path d="M12 20c0-3.2 0-6 0-9 1.8 1 3 3 3 5.2 0 1.4-1.2 3.8-3 3.8s-3-2.4-3-3.8c0-2.2 1.2-4.2 3-5.2" />
    </svg>
  );
}

export function IconDrop(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5c3.2 4 5.5 6.8 5.5 9.7A5.5 5.5 0 0 1 12 18.7a5.5 5.5 0 0 1-5.5-5.5C6.5 10.3 8.8 7.5 12 3.5Z" />
      <path d="M9.6 13.2a2.4 2.4 0 0 0 2.4 2.4" />
    </svg>
  );
}

export function IconStones(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="12" cy="17.5" rx="7" ry="2.3" />
      <ellipse cx="12" cy="13.4" rx="5.4" ry="1.9" />
      <ellipse cx="12" cy="9.8" rx="3.9" ry="1.6" />
      <ellipse cx="12" cy="6.7" rx="2.5" ry="1.2" />
    </svg>
  );
}

export function IconBack(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 4.5a2 2 0 1 0 0 .01" />
      <path d="M8.5 8.5c0 2 .5 3 .5 4.5 0 1.5-1 2.5-1 4.5" />
      <path d="M9 13h4.5c1.5 0 2.5 1 2.5 2.5" />
      <path d="M9 9.5h3.5c1.5 0 2.5 1 2.5 2.5" />
    </svg>
  );
}

export function IconFace(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 4.5c-3.6 0-6 2.6-6 6.4 0 3.6 2.6 8.6 6 8.6s6-5 6-8.6c0-3.8-2.4-6.4-6-6.4Z" />
      <path d="M9.5 12c.5.7 1.2 1 2.5 1s2-.3 2.5-1" />
      <path d="M16.5 8.5c.9-.6 1.7-.5 2.3 0" />
      <path d="M7.5 8.5c-.9-.6-1.7-.5-2.3 0" />
    </svg>
  );
}

export function IconHands(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 13.5V8a1.3 1.3 0 0 1 2.6 0v3" />
      <path d="M9.6 11V7a1.3 1.3 0 0 1 2.6 0v4" />
      <path d="M12.2 11V7.6a1.3 1.3 0 0 1 2.6 0V13" />
      <path d="M14.8 10.5a1.3 1.3 0 0 1 2.6 0c0 4-1.8 7-5.3 7-2.4 0-3.6-1-4.8-2.8l-1.6-2.4a1.3 1.3 0 0 1 2.1-1.5l1 1.2" />
    </svg>
  );
}

const treatmentIcons = {
  lotus: IconLotus,
  drop: IconDrop,
  stones: IconStones,
  back: IconBack,
  face: IconFace,
  hands: IconHands,
};

export function TreatmentIcon({
  name,
  ...props
}: { name: keyof typeof treatmentIcons } & IconProps) {
  const Cmp = treatmentIcons[name];
  return <Cmp {...props} />;
}

/* ------------------------------ Vorteil-Icons ----------------------------- */

export function IconCalm(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 14c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2" />
      <path d="M4 18c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2" />
      <path d="M12 4v4" />
      <circle cx="12" cy="4" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function IconHand(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8 11V6.5a1.3 1.3 0 0 1 2.6 0V10" />
      <path d="M10.6 10V5.5a1.3 1.3 0 0 1 2.6 0V10" />
      <path d="M13.2 10V6.5a1.3 1.3 0 0 1 2.6 0V12" />
      <path d="M15.8 9.5a1.3 1.3 0 0 1 2.6 0c0 4.5-2 8-5.6 8-2.2 0-3.4-.8-4.6-2.6l-2-3a1.3 1.3 0 0 1 2.1-1.5L8 12" />
    </svg>
  );
}

export function IconLeaf(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 19c0-7 5-12 14-13 1 9-4 14-11 14a3 3 0 0 1-3-1Z" />
      <path d="M9 15c2-3 4.5-5 8-6.5" />
    </svg>
  );
}

const valueIcons = { calm: IconCalm, hand: IconHand, leaf: IconLeaf };

export function ValueIcon({
  name,
  ...props
}: { name: keyof typeof valueIcons } & IconProps) {
  const Cmp = valueIcons[name];
  return <Cmp {...props} />;
}

/* -------------------------------- Allgemein ------------------------------- */

export function IconStar(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable={false} {...props}>
      <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />
    </svg>
  );
}

export function IconChevron(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function IconPhone(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5L15.5 12l4 1.5v3a1.5 1.5 0 0 1-1.6 1.5A14 14 0 0 1 5 5.6 1.5 1.5 0 0 1 6.5 4Z" />
    </svg>
  );
}

export function IconMail(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4 7 8 5.5L20 7" />
    </svg>
  );
}

export function IconMapPin(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21c4.5-4.2 7-7.5 7-11a7 7 0 1 0-14 0c0 3.5 2.5 6.8 7 11Z" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  );
}

export function IconClock(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4.2l2.6 1.6" />
    </svg>
  );
}

export function IconInstagram(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.4" />
      <circle cx="16.5" cy="7.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconFacebook(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14.5 8.5H16V5.8h-2.2c-1.9 0-3 1.2-3 3.1V11H9v2.6h1.8V21h2.7v-7.4h2L18 11h-2.5V9.4c0-.6.3-.9 1-.9Z" />
    </svg>
  );
}
