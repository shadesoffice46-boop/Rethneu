/**
 * Zentrale Inhalte der Website.
 * Stammdaten & Preise stammen aus der Bestandswebsite (reth-thaimassage-kosmetik.de),
 * Behandlungen sind 1:1 mit den Cal.com-Event-Typen verknüpft (calSlug).
 */

/* ----------------------------- Cal.com ---------------------------- */

/** Cal.com-Benutzername; Buchungslink = cal.com/<calUsername>/<calSlug> */
export const calUsername = "ben-kimmel-4yzd0t";

/* ----------------------------- Studio-Stammdaten ---------------------------- */

export const studio = {
  name: "Reth Thaimassage & Kosmetik",
  shortName: "Reth Thaimassage",
  owner: "Simone Reth", // Inhaberin (Impressum)
  tagline: "Gesundheit · Wohlbefinden · mehr Lebensfreude",
  phoneDisplay: "0 73 61 / 9 80 97 74",
  phoneHref: "tel:+4973619809774",
  mobileDisplay: "01 62 / 82 460 11",
  mobileHref: "tel:+4916282460111",
  // Reale Kontakt-Mail laut Impressum: mannejohn1945@gmail.com
  // TODO: Mit Studio klären, ob eine eigene Geschäftsadresse gewünscht ist.
  email: "info@reth-thaimassage-kosmetik.de",
  website: "www.reth-thaimassage-kosmetik.de",
  address: {
    street: "Storchenstraße 1",
    city: "73430 Aalen",
    note: "Zentral in Aalen",
  },
  hours: [
    { days: "Montag – Freitag", time: "10:00 – 19:00 Uhr" },
    { days: "Samstag", time: "10:00 – 18:00 Uhr" },
    { days: "Sonn- & Feiertage", time: "geschlossen" },
  ],
  hoursNote: "Termine auch ohne Vereinbarung möglich – nach Verfügbarkeit.",
  social: [
    // TODO: Echte Profil-Links eintragen.
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
  ],
} as const;

/* -------------------------------- Navigation -------------------------------- */

export const navLinks = [
  { label: "Behandlungen", href: "#behandlungen" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Ablauf", href: "#ablauf" },
  { label: "FAQ", href: "#faq" },
] as const;

/* ------------------------------- Behandlungen ------------------------------- */

/** Eine buchbare Dauer-Option (Minuten + Preis in €), 1:1 mit Cal.com. */
export type DurationOption = { min: number; price: number };

export type Treatment = {
  slug: string;
  /** Cal.com-Event-Typ-Slug für die Online-Buchung. */
  calSlug: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  /**
   * Buchbare Dauern + Preise (1:1 mit den Cal.com-Event-Typen).
   * Treibt das Dauer-Dropdown im Kontaktformular und die Slot-Suche in n8n.
   */
  durations: DurationOption[];
  /** Kennzeichnet die Signatur-Behandlung für eine hervorgehobene Karte. */
  featured?: boolean;
  icon: "lotus" | "drop" | "stones" | "back" | "face" | "hands";
};

export const treatments: Treatment[] = [
  {
    slug: "traditionelle-thai-massage",
    calSlug: "traditionelle-thai-massage",
    name: "Traditionelle Thai-Massage",
    description:
      "Akupressur und sanfte Dehnungen entlang der Energielinien lösen Verspannungen und bringen Körper und Geist ins Gleichgewicht.",
    duration: "30 – 120 Min.",
    price: "30 – 90 €",
    durations: [
      { min: 30, price: 30 },
      { min: 60, price: 50 },
      { min: 90, price: 70 },
      { min: 120, price: 90 },
    ],
    featured: true,
    icon: "lotus",
  },
  {
    slug: "aroma-oel-massage",
    calSlug: "aroma-oel-massage",
    name: "Aroma-Öl-Massage",
    description:
      "Warme, duftende Öle und fließende Streichungen für tiefe Entspannung und ein gepflegtes Hautgefühl.",
    duration: "30 – 120 Min.",
    price: "30 – 90 €",
    durations: [
      { min: 30, price: 30 },
      { min: 60, price: 50 },
      { min: 90, price: 70 },
      { min: 120, price: 90 },
    ],
    icon: "drop",
  },
  {
    slug: "hot-stone-massage",
    calSlug: "hot-stone-massage",
    name: "Hot-Stone-Massage",
    description:
      "Erwärmte Basaltsteine geben wohlige Wärme tief ins Gewebe und lösen auch hartnäckige Verspannungen.",
    duration: "30 – 120 Min.",
    price: "30 – 90 €",
    durations: [
      { min: 30, price: 30 },
      { min: 60, price: 50 },
      { min: 90, price: 70 },
      { min: 120, price: 90 },
    ],
    icon: "stones",
  },
  {
    slug: "ruecken-kopf-massage",
    calSlug: "ruecken-kopf-massage",
    name: "Rücken-Kopf-Massage",
    description:
      "Gezielte Behandlung für alle, die viel sitzen: Fokus auf Rücken, Nacken und Kopf.",
    duration: "30 – 120 Min.",
    price: "30 – 90 €",
    durations: [
      { min: 30, price: 30 },
      { min: 60, price: 50 },
      { min: 90, price: 70 },
      { min: 120, price: 90 },
    ],
    icon: "back",
  },
  {
    slug: "fuss-massage",
    calSlug: "fuss-massage",
    name: "Fuß-Massage",
    description:
      "Wohltuende Fußmassage – Druckpunkte an den Füßen schenken dem ganzen Körper neue Leichtigkeit.",
    duration: "30 / 60 Min.",
    price: "28 / 45 €",
    durations: [
      { min: 30, price: 28 },
      { min: 60, price: 45 },
    ],
    icon: "lotus",
  },
  {
    slug: "relax-massage",
    calSlug: "relax-massage",
    name: "Relax-Massage",
    description:
      "Sanfte Entspannungsmassage, die Körper und Geist zur Ruhe kommen lässt.",
    duration: "30 – 120 Min.",
    price: "30 – 90 €",
    durations: [
      { min: 30, price: 30 },
      { min: 60, price: 50 },
      { min: 90, price: 70 },
      { min: 120, price: 90 },
    ],
    icon: "drop",
  },
  {
    slug: "thai-massage-kraeuter",
    calSlug: "thai-massage-kraeuter",
    name: "Thai-Massage mit Kräutern",
    description:
      "Traditionelle Thai-Massage mit warmen Kräuterstempeln für intensive, wohltuende Wärme.",
    duration: "60 – 120 Min.",
    price: "60 – 110 €",
    durations: [
      { min: 60, price: 60 },
      { min: 90, price: 85 },
      { min: 120, price: 110 },
    ],
    icon: "stones",
  },
  {
    slug: "gesichtsbehandlung",
    calSlug: "gesichtsbehandlung",
    name: "Classic Gesichtsbehandlung",
    description:
      "Reinigung, Peeling, Massage, Aloe-Pflegepackung und Tagespflege – individuell auf Ihre Haut abgestimmt.",
    duration: "30 – 90 Min.",
    price: "30 – 70 €",
    durations: [
      { min: 30, price: 30 },
      { min: 60, price: 50 },
      { min: 90, price: 70 },
    ],
    icon: "face",
  },
  {
    slug: "body-behandlung",
    calSlug: "body-behandlung",
    name: "Body-Behandlung",
    description:
      "Körperpeeling und anschließende Öl-Massage für streichelzarte, gepflegte Haut.",
    duration: "60 – 120 Min.",
    price: "50 – 90 €",
    durations: [
      { min: 60, price: 50 },
      { min: 90, price: 70 },
      { min: 120, price: 90 },
    ],
    icon: "hands",
  },
  {
    slug: "manikuere",
    calSlug: "manikuere",
    name: "Maniküre",
    description:
      "Luxus-Spa-Maniküre für Damen und Herren, inkl. Kurzmassage – auf Wunsch mit farbigem Nagellack.",
    duration: "ca. 30 Min.",
    price: "15 – 20 €",
    durations: [{ min: 30, price: 15 }],
    icon: "hands",
  },
  {
    slug: "pedikuere",
    calSlug: "pedikuere",
    name: "Pediküre",
    description:
      "Luxus-Spa-Pediküre mit Fußbad, Hornhautentfernung und Fußmassage – auf Wunsch mit Shellac.",
    duration: "ca. 45 Min.",
    price: "30 – 40 €",
    durations: [{ min: 45, price: 30 }],
    icon: "hands",
  },
  {
    slug: "haarentfernung",
    calSlug: "haarentfernung",
    name: "Haarentfernung (Warmwachs)",
    description:
      "Sanfte Haarentfernung mit Warmwachs für viele Körperzonen – gewünschte Zone einfach bei der Buchung angeben.",
    duration: "ab 15 Min.",
    price: "15 – 40 €",
    durations: [{ min: 30, price: 15 }],
    icon: "drop",
  },
  {
    slug: "wimpern-augenbrauen",
    calSlug: "wimpern-augenbrauen",
    name: "Wimpern & Augenbrauen",
    description:
      "Wimpernlifting, Wimpern- und Augenbrauenfärben sowie Augenbrauen zupfen für einen wachen Blick.",
    duration: "ca. 60 Min.",
    price: "10 – 40 €",
    durations: [{ min: 60, price: 40 }],
    icon: "face",
  },
];

/* --------------------------------- Vorteile --------------------------------- */

export const values = [
  {
    title: "Ruhe als Grundton",
    text: "Ein zurückgenommener Raum, gedämpftes Licht und Zeit, die nur Ihnen gehört.",
    icon: "calm" as const,
  },
  {
    title: "Erfahrene Hände",
    text: "Traditionelle Techniken, sicher ausgeführt und auf Ihren Körper abgestimmt.",
    icon: "hand" as const,
  },
  {
    title: "Individuelle Betreuung",
    text: "Wir hören zu, fragen nach und passen jede Behandlung an Ihre Bedürfnisse an.",
    icon: "leaf" as const,
  },
];

/* ---------------------------------- Ablauf ---------------------------------- */

export const processSteps = [
  {
    title: "Termin wählen",
    text: "Buchen Sie online Ihre Wunsch-Behandlung und -zeit oder rufen Sie uns einfach an.",
  },
  {
    title: "Ankommen",
    text: "Lassen Sie den Alltag hinter sich. Bei einer Tasse Tee besprechen wir kurz Ihre Wünsche.",
  },
  {
    title: "Behandlung genießen",
    text: "Erfahrene Hände nehmen sich Zeit für Sie, ganz auf Ihren Körper abgestimmt.",
  },
  {
    title: "Entspannt weitergehen",
    text: "Mit neuer Leichtigkeit und einem klaren Kopf zurück in den Tag.",
  },
];

/* ------------------------------- Testimonials ------------------------------- */
/*
  TODO: Platzhalter-Bewertungen. Vor dem Livegang durch echte, freigegebene
  Kundenstimmen ersetzen.
*/
export const testimonials = [
  {
    quote:
      "Nach der Thai-Massage fühle ich mich wie neugeboren, die Verspannungen im Nacken sind endlich weg.",
    name: "Sandra K.",
    detail: "Traditionelle Thai-Massage",
    rating: 5,
  },
  {
    quote:
      "Ruhige Atmosphäre, herzlicher Empfang und eine Massage, die wirklich wirkt. Genau die Auszeit, die ich gebraucht habe.",
    name: "Michael R.",
    detail: "Rücken-Kopf-Massage",
    rating: 5,
  },
  {
    quote:
      "Die Gesichtsbehandlung war ein Traum. Man merkt, dass hier mit viel Sorgfalt und Erfahrung gearbeitet wird.",
    name: "Petra L.",
    detail: "Classic Gesichtsbehandlung",
    rating: 5,
  },
];

/* ------------------------------------ FAQ ----------------------------------- */

export const faqs = [
  {
    question: "Muss ich vorher einen Termin vereinbaren?",
    answer:
      "Sie können online einen Termin buchen oder gerne spontan vorbeikommen. Für Ihre Wunschzeit empfehlen wir eine Buchung bzw. einen kurzen Anruf, damit keine Wartezeit entsteht.",
  },
  {
    question: "Was soll ich zur Behandlung mitbringen?",
    answer:
      "Nichts weiter als sich selbst. Bei Massagen bleibt der Slip an; Einweg-Unterhosen, Handtücher und alles Weitere stellen wir bereit.",
  },
  {
    question: "Wie lange dauert eine Behandlung?",
    answer:
      "Je nach Anwendung zwischen 30 und 120 Minuten. Bei der Online-Buchung wählen Sie die gewünschte Dauer direkt aus.",
  },
  {
    question: "Bieten Sie Gutscheine an?",
    answer:
      "Ja. Unsere Gutscheine sind individuell auf Ihre Wünsche abgestimmt und werden Ihnen portofrei mit Rechnung zugeschickt. Sprechen Sie uns einfach an.",
  },
  {
    question: "Wie kann ich bezahlen?",
    answer:
      "Sie zahlen bequem vor Ort.", // TODO: Zahlungsarten (bar / EC) bestätigen
  },
  {
    question: "Werden auch Erotikmassagen angeboten?",
    answer:
      "Nein. Wir führen ausschließlich seriöse Wellness- und Gesundheitsmassagen durch – keine Erotikmassagen.",
  },
];
