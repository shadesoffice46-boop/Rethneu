import { createBrowserClient } from "@supabase/ssr";

/**
 * Supabase-Client für den Browser (Client Components).
 * Nutzt den öffentlichen Publishable Key; Zugriffsschutz läuft über RLS-Policies.
 */
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
  );
}
