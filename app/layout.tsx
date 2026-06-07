import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { studio } from "@/lib/data";

/*
  Schriften ueber next/font/google.
  - Fraunces: eleganter, moderner Serif fuer Ueberschriften (inkl. Kursiv).
  - Inter: ruhiger Sans fuer Fliesstext und UI.
  Beide als Variable-Fonts ueber CSS-Variablen eingebunden (siehe globals.css @theme).
*/
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.reth-thaimassage-kosmetik.de"),
  title: {
    default:
      "Reth Thaimassage & Kosmetik – Massage & Wellness in der Altstadt",
    template: "%s · Reth Thaimassage & Kosmetik",
  },
  description:
    "Traditionelle Thai-Massage, Aromaöl, Hot Stone und Kosmetik. Eine ruhige Auszeit für Körper und Sinne – mit erfahrenen Händen in unserem neu eröffneten Studio.",
  keywords: [
    "Thaimassage",
    "Massage",
    "Kosmetik",
    "Hot Stone",
    "Aromaöl-Massage",
    "Wellness",
    "Maniküre",
    "Pediküre",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: studio.name,
    title: "Reth Thaimassage & Kosmetik – Massage & Wellness in der Altstadt",
    description:
      "Traditionelle Thai-Massage, Aromaöl, Hot Stone und Kosmetik. Eine ruhige Auszeit für Körper und Sinne.",
    images: [
      {
        // TODO: Durch ein echtes Foto im Format 1200x630 ersetzen.
        url: "/images/og.svg",
        width: 1200,
        height: 630,
        alt: studio.name,
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Zum Inhalt springen
        </a>
        {children}
      </body>
    </html>
  );
}
