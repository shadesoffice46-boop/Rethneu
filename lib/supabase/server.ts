import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

/**
 * Supabase-Client für den Server (Server Components, Route Handler, Server Actions).
 * Liest/aktualisiert Cookies, damit später eine optionale Auth-Session funktioniert.
 * Aktuell ohne Authentifizierung – Zugriffsschutz über RLS.
 */
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch {
            // Aufruf aus einer Server Component ohne Schreibrecht auf Cookies –
            // kann ignoriert werden, solange keine Auth-Session erneuert wird.
          }
        },
      },
    },
  );
}
