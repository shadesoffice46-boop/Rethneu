import type { Metadata } from "next";
import { Marcellus, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { studio } from "@/lib/data";

/*
  Schriften ueber next/font/google (self-hosted -> kein Google-Fonts-CDN, kein Cookie-Banner).
  - Marcellus: schlanker, klassisch-eleganter Serif fuer Ueberschriften.
  - Hanken Grotesk: warme, gut lesbare Grotesk fuer Fliesstext und UI.
  Beide ueber CSS-Variablen eingebunden (siehe globals.css @theme).
*/
const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marcellus",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
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
    <html lang="de" className={`${marcellus.variable} ${hanken.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Zum Inhalt springen
        </a>
        {/* Liquid-Glass-Filter (Claude-Design-Stand) – speist .glass-btn / .nav-link */}
        <svg
          aria-hidden
          width="0"
          height="0"
          style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
        >
          <defs>
            <filter
              id="container-glass"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              colorInterpolationFilters="sRGB"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.05 0.05"
                numOctaves={1}
                seed={1}
                result="turbulence"
              />
              <feGaussianBlur in="turbulence" stdDeviation={2} result="blurredNoise" />
              <feDisplacementMap
                in="SourceGraphic"
                in2="blurredNoise"
                scale={70}
                xChannelSelector="R"
                yChannelSelector="B"
                result="displaced"
              />
              <feGaussianBlur in="displaced" stdDeviation={4} result="finalBlur" />
              <feComposite in="finalBlur" in2="finalBlur" operator="over" />
            </filter>
          </defs>
        </svg>
        {children}
      </body>
    </html>
  );
}
