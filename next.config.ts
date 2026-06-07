import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Wir liefern die Platzhalter-Grafiken als SVG aus /public aus.
  // Sobald echte Fotos vorliegen, koennen diese Einstellungen bleiben.
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
