/*
  Dauerhaft erreichbarer Buchungs-Button auf dem Handy (Daumen-Zone, unten).
  Bewusst solide (nicht Glas) fuer maximale Lesbarkeit ueber wechselnden
  Hintergruenden; auf Desktop ausgeblendet.
*/
export function MobileBookingCta() {
  return (
    <a
      href="#buchung"
      className="fixed inset-x-4 bottom-4 z-30 inline-flex items-center justify-center gap-2 rounded-full bg-lavender-700 px-6 py-3.5 text-sm font-semibold tracking-wide text-white shadow-lift md:hidden"
    >
      Termin buchen
    </a>
  );
}
