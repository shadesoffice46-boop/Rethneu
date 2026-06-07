/**
 * Zentrale Inhalte der Website.
 *
 * Alle Texte sind echte, plausible deutsche Inhalte. Stellen, die mit echten
 * Daten des Studios gefuellt werden muessen (Adresse, Oeffnungszeiten, E-Mail,
 * Preise), sind mit TODO markiert.
 *
 * TODO: Preise, Dauer, Adresse, Oeffnungszeiten und E-Mail mit dem Studio abgleichen.
 */

/* ----------------------------- Studio-Stammdaten ---------------------------- */

export const studio = {
  name: "Reth Thaimassage & Kosmetik",
  shortName: "Reth Thaimassage",
  tagline: "Gesundheit · Wohlbefinden · mehr Lebensfreude",
  // Telefonnummer laut Schaufenster-Beschriftung des Studios.
  phoneDisplay: "0 73 61 / 9 80 97 74",
  phoneHref: "tel:+4973619809774",
  // TODO: Echte E-Mail-Adresse eintragen.
  email: "info@reth-thaimassage-kosmetik.de",
  website: "www.reth-thaimassage-kosmetik.de",
  address: {
    // TODO: Hausnummer ergaenzen und Ort/PLZ bestaetigen.
    street: "Stadelgasse",
    city: "73430 Aalen",
    note: "In der Altstadt",
  },
  // TODO: Tatsaechliche Oeffnungszeiten bestaetigen.
  hours: [
    { days: "Montag – Freitag", time: "09:00 – 19:00 Uhr" },
    { days: "Samstag", time: "10:00 – 16:00 Uhr" },
    { days: "Sonn- & Feiertage", time: "geschlossen" },
  ],
  hoursNote: "Termine ohne Vereinbarung sind nach Verfügbarkeit möglich.",
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

export type Treatment = {
  slug: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  /** Kennzeichnet die Signatur-Behandlung fuer eine hervorgehobene Karte. */
  featured?: boolean;
  /** Schluessel fuer das passende Icon (siehe TreatmentIcon). */
  icon: "lotus" | "drop" | "stones" | "back" | "face" | "hands";
};

export const treatments: Treatment[] = [
  {
    slug: "thai-massage",
    name: "Traditionelle Thai-Massage",
    description:
      "Akupressur und sanfte Dehnungen entlang der Energielinien lösen Verspannungen und bringen Körper und Geist wieder ins Gleichgewicht.",
    duration: "60 Min.",
    price: "ab 55 €", // TODO: Preis bestaetigen
    featured: true,
    icon: "lotus",
  },
  {
    slug: "aromaoel-massage",
    name: "Aromaöl-Massage",
    description:
      "Warme, duftende Öle und fließende Streichungen für tiefe Entspannung und ein gepflegtes Hautgefühl.",
    duration: "60 Min.",
    price: "ab 60 €", // TODO: Preis bestaetigen
    icon: "drop",
  },
  {
    slug: "hot-stone",
    name: "Hot-Stone-Massage",
    description:
      "Erwärmte Basaltsteine geben wohlige Wärme tief ins Gewebe und lösen auch hartnäckige Verspannungen.",
    duration: "75 Min.",
    price: "ab 70 €", // TODO: Preis bestaetigen
    icon: "stones",
  },
  {
    slug: "ruecken-nacken",
    name: "Rücken- & Nacken-Massage",
    description:
      "Gezielte Behandlung für alle, die viel sitzen: Fokus auf Schultern, Nacken und den unteren Rücken.",
    duration: "30 Min.",
    price: "ab 35 €", // TODO: Preis bestaetigen
    icon: "back",
  },
  {
    slug: "kosmetik-gesicht",
    name: "Kosmetik & Gesichtspflege",
    description:
      "Reinigung, Peeling und eine pflegende Maske, individuell auf Ihren Hauttyp abgestimmt.",
    duration: "60 Min.",
    price: "ab 50 €", // TODO: Preis bestaetigen
    icon: "face",
  },
  {
    slug: "manikuere-pedikuere",
    name: "Maniküre & Pediküre",
    description:
      "Sorgfältige Pflege für Hände und Füße, die nicht nur gut aussieht, sondern auch spürbar entspannt.",
    duration: "45 Min.",
    price: "ab 35 €", // TODO: Preis bestaetigen
    icon: "hands",
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
    text: "Rufen Sie uns an oder schicken Sie eine Anfrage über das Formular. Gemeinsam finden wir Ihre Wunschzeit.",
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
  Kundenstimmen ersetzen. Es wurden bewusst keine vollständigen Namen erfunden.
*/
export const testimonials = [
  {
    quote:
      "Ich komme seit der Neueröffnung regelmäßig her. Nach der Thai-Massage fühle ich mich wie neugeboren, die Verspannungen im Nacken sind endlich weg.",
    name: "Sandra K.",
    detail: "Thai-Massage",
    rating: 5,
  },
  {
    quote:
      "Ruhige Atmosphäre, herzlicher Empfang und eine Massage, die wirklich wirkt. Genau die Auszeit, die ich gebraucht habe.",
    name: "Michael R.",
    detail: "Rücken- & Nacken-Massage",
    rating: 5,
  },
  {
    quote:
      "Die Gesichtsbehandlung war ein Traum. Man merkt, dass hier mit viel Sorgfalt und Erfahrung gearbeitet wird.",
    name: "Petra L.",
    detail: "Kosmetik & Gesichtspflege",
    rating: 5,
  },
];

/* ------------------------------------ FAQ ----------------------------------- */

export const faqs = [
  {
    question: "Muss ich vorher einen Termin vereinbaren?",
    answer:
      "Sie können gerne spontan vorbeikommen. Für Ihre Wunschzeit empfehlen wir aber eine kurze telefonische Voranmeldung, damit keine Wartezeit entsteht.",
  },
  {
    question: "Was soll ich zur Behandlung mitbringen?",
    answer:
      "Nichts weiter als sich selbst. Bequeme Kleidung erleichtert die traditionelle Thai-Massage; Handtücher und alles Weitere stellen wir bereit.",
  },
  {
    question: "Wie lange dauert eine Behandlung?",
    answer:
      "Je nach Anwendung zwischen 30 und 90 Minuten. Die Dauer finden Sie bei jeder Behandlung; gern beraten wir Sie zur passenden Länge.",
  },
  {
    question: "Bieten Sie Gutscheine an?",
    answer:
      "Ja. Unsere Gutscheine sind individuell auf Ihre Wünsche abgestimmt und werden Ihnen portofrei mit Rechnung zugeschickt. Sprechen Sie uns einfach an.",
  },
  {
    question: "Wie kann ich bezahlen?",
    answer:
      "Sie zahlen bequem vor Ort in bar oder per EC-Karte.", // TODO: Zahlungsarten bestaetigen
  },
  {
    question: "Ist eine Massage in der Schwangerschaft möglich?",
    answer:
      "Bitte sprechen Sie uns vorab an. Wir beraten Sie individuell und wählen eine sanfte, geeignete Anwendung für Sie aus.",
  },
];
