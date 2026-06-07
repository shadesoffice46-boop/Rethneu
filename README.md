# Reth Thaimassage & Kosmetik — Website

Marketing-Website (One-Pager) für ein Thai-Massage- & Kosmetikstudio.
Ruhiges, hochwertiges Design im Stil eines Spa-Magazins: viel Weißraum, große
Serif-Typografie, dezente Übergänge.

> **Wichtig:** Dieser Stand enthält **nur das Frontend**. Das Buchungsformular
> ist bewusst noch **ohne echte Anbindung** (kein Backend, kein n8n, keine
> Datenbank). Beim Absenden wird nur ein kurzer Lade-Zustand simuliert und ein
> lokaler Erfolgs-Hinweis angezeigt. Die echte Anbindung
> (Webhook/Buchung) folgt in einem **späteren, separaten Schritt**.

---

## Tech-Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS v4** (Tokens über `@theme` in `app/globals.css`)
- **next/font/google**: Fraunces (Headings) + Inter (Body/UI)
- **next/image** für Bilder
- **framer-motion** für dezente Scroll-/Mount-Animationen (respektiert
  `prefers-reduced-motion`)

---

## Setup

```bash
npm install
npm run dev
```

Danach im Browser öffnen: **http://localhost:3000**

Produktionsbuild:

```bash
npm run build
npm run start
```

> Hinweis: In dieser Arbeitsumgebung läuft der Dev-Server über die
> Preview-Konfiguration auf Port **3100**. Standalone (`npm run dev`) startet er
> auf dem Next-Standardport **3000**.

---

## Projektstruktur

```
app/
  layout.tsx          # Fonts, globale Metadaten (SEO/OpenGraph), Skip-Link
  page.tsx            # Setzt alle Sektionen zusammen
  globals.css         # Design-System (Farb-Tokens, Typo, Schatten, Easing)
  icon.svg            # Favicon (Lotus-Marke)
  impressum/page.tsx  # Stub-Seite (Platzhalter)
  datenschutz/page.tsx# Stub-Seite (Platzhalter)
components/
  ui/                 # Button, Reveal (Motion), Logo, Icon-Set
  sections/           # Header, Hero, Treatments, About, Process,
                      # Testimonials, Faq, Booking, Footer
lib/
  data.ts             # ZENTRALE INHALTE: Studio-Daten, Behandlungen, FAQ, …
public/
  images/             # Platzhalter-Grafiken (SVG) + Hinweis-README
```

---

## Wo echte Inhalte eingesetzt werden

Fast alle Texte liegen zentral in **`lib/data.ts`**. Dort anpassen:

| Inhalt | Stelle | Status |
|--------|--------|--------|
| Adresse (Hausnummer/Ort) | `studio.address` | **TODO** |
| E-Mail-Adresse | `studio.email` | **TODO** |
| Öffnungszeiten | `studio.hours` | **TODO** |
| Preise & Dauer der Behandlungen | `treatments[]` | **TODO** |
| Social-Media-Links | `studio.social` | **TODO** |
| Bewertungen (Testimonials) | `testimonials[]` | **TODO Platzhalter** |
| Zahlungsarten (FAQ) | `faqs[]` | **TODO** |
| Telefonnummer | `studio.phoneDisplay` / `phoneHref` | aus Foto übernommen, bitte prüfen |

**Bilder** liegen in `public/images/` als SVG-Platzhalter. Zum Ersetzen siehe
`public/images/README.md`. Bei echten Fotos (JPG/WebP) in `Hero.tsx` und
`About.tsx` das Attribut `unoptimized` am `<Image>` entfernen, um die
Next-Bildoptimierung zu nutzen.

**Rechtstexte:** `app/impressum/page.tsx` und `app/datenschutz/page.tsx` sind
Platzhalter und müssen vor dem Livegang rechtssicher ausgefüllt werden.

---

## Design-System (Kurzüberblick)

Definiert in `app/globals.css` (`@theme`):

- **Lavendel** `lavender-50 … lavender-700` — Soft-Flächen & primäre Buttons
- **Olivgrün** `olive-100 … olive-700` — sekundärer Akzent (Icons, Badges, Labels)
- **Neutral** `cream` (Grundfläche), `ink` (Text), `muted` (Sekundärtext)
- **Schrift** `font-display` (Fraunces), `font-sans` (Inter)
- **Schatten** `shadow-soft`, `shadow-lift`

Der dezente Verlauf Lavendel → Oliv wird bewusst nur an einer Stelle eingesetzt
(Gutschein-Hinweis in der Buchungs-Sektion).

---

## Barrierefreiheit & SEO

- Semantisches HTML, sinnvolle Heading-Hierarchie, Skip-Link
- Sichtbare Fokus-Stile, `aria`-Labels, zugängliches FAQ-Accordion
- Formular: sichtbare Labels, Inline-Fehler, Fokus springt zum ersten Fehler
- `metadata`-Export inkl. OpenGraph in `app/layout.tsx`
- `prefers-reduced-motion` wird respektiert

---

## Nächster Schritt (separat)

Anbindung des Buchungsformulars an ein Backend/Workflow. Die einzusetzende
Stelle ist im Code klar markiert:

```
components/sections/Booking.tsx
  → handleSubmit(): {/* TODO: Anbindung (Webhook/Buchung) folgt in späterem Schritt */}
```
