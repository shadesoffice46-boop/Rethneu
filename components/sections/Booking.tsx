"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  IconClock,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@/components/ui/icons";
import { studio, treatments } from "@/lib/data";
import { submitInquiry } from "@/app/actions/submit-inquiry";

type FieldName =
  | "name"
  | "email"
  | "phone"
  | "treatment"
  | "duration"
  | "date"
  | "time"
  | "message";
type Values = Record<FieldName, string>;
type Errors = Partial<Record<FieldName, string>>;

const emptyValues: Values = {
  name: "",
  email: "",
  phone: "",
  treatment: "",
  duration: "",
  date: "",
  time: "",
  message: "",
};

const inputClasses =
  "w-full rounded-xl border bg-white px-4 py-3 text-ink placeholder:text-muted/70 " +
  "transition-colors duration-200 focus:border-lavender-500 " +
  "focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-lavender-700";

const errorText = "text-[#a23b30]"; // ausreichender Kontrast auf Weiß

/* --------------------------- Öffnungszeiten-Logik --------------------------- */
// Minuten ab Mitternacht. Mo–Fr 10–19, Sa 10–18, So geschlossen.
function hoursForDate(dateStr: string): { open: number; close: number } | null {
  if (!dateStr) return null;
  const d = new Date(`${dateStr}T00:00:00`);
  if (Number.isNaN(d.getTime())) return null;
  const day = d.getDay(); // 0 = Sonntag, 6 = Samstag
  if (day === 0) return null;
  if (day === 6) return { open: 600, close: 1080 };
  return { open: 600, close: 1140 };
}

function minutesToLabel(min: number): string {
  const h = Math.floor(min / 60);
  const m = min % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

// Mögliche Startzeiten (30-Min-Schritte), so dass die Behandlung bis Ladenschluss passt.
function timeOptionsFor(dateStr: string, durationMin: number): string[] {
  const h = hoursForDate(dateStr);
  if (!h) return [];
  const last = h.close - (durationMin > 0 ? durationMin : 30);
  const out: string[] = [];
  for (let m = h.open; m <= last; m += 30) out.push(minutesToLabel(m));
  return out;
}

export function Booking() {
  const [values, setValues] = useState<Values>(emptyValues);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );
  const [submitError, setSubmitError] = useState<string | null>(null);
  // Honeypot: für Menschen unsichtbar, nur Bots füllen es aus.
  const [honeypot, setHoneypot] = useState("");

  // Abgeleitete Werte (während des Renderns berechnet, kein useEffect nötig).
  const selectedTreatment = treatments.find((t) => t.name === values.treatment);
  const durationOptions = selectedTreatment?.durations ?? [];
  const hasBookableTreatment = durationOptions.length > 0;
  const durationMin =
    Number(values.duration) || durationOptions[0]?.min || 30;
  const dateChosen = values.date !== "";
  const dayClosed = dateChosen && hoursForDate(values.date) === null;
  const times = timeOptionsFor(values.date, durationMin);

  function clearError(field: FieldName) {
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function update(field: FieldName, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    clearError(field);
  }

  // Behandlung wechseln → passende Standard-Dauer setzen, Uhrzeit zurücksetzen.
  function changeTreatment(name: string) {
    const t = treatments.find((x) => x.name === name);
    const firstDuration = t?.durations?.[0]?.min;
    setValues((prev) => ({
      ...prev,
      treatment: name,
      duration: firstDuration ? String(firstDuration) : "",
      time: "",
    }));
    clearError("treatment");
  }

  // Datum/Dauer ändern → Uhrzeit zurücksetzen, da sich die Optionen ändern.
  function changeDate(value: string) {
    setValues((prev) => ({ ...prev, date: value, time: "" }));
    clearError("date");
  }

  function changeDuration(value: string) {
    setValues((prev) => ({ ...prev, duration: value, time: "" }));
  }

  function validate(v: Values): Errors {
    const next: Errors = {};
    if (!v.name.trim()) next.name = "Bitte geben Sie Ihren Namen ein.";
    if (!v.email.trim()) {
      next.email = "Bitte geben Sie Ihre E-Mail-Adresse ein.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) {
      next.email = "Diese E-Mail-Adresse sieht nicht gültig aus.";
    }
    if (!v.treatment) next.treatment = "Bitte wählen Sie eine Behandlung.";
    if (v.date && hoursForDate(v.date) === null) {
      next.date = "Sonntags geschlossen – bitte einen anderen Tag wählen.";
    }
    if (v.date && hoursForDate(v.date) && !v.time) {
      next.time = "Bitte wählen Sie eine Uhrzeit.";
    }
    return next;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);

    const firstError = (
      ["name", "email", "treatment", "date", "time"] as FieldName[]
    ).find((f) => found[f]);
    if (firstError) {
      document.getElementById(`booking-${firstError}`)?.focus();
      return;
    }

    setSubmitError(null);
    setStatus("submitting");

    // Echte Übermittlung an Supabase via Server Action (inkl. Honeypot).
    const result = await submitInquiry({ ...values, company: honeypot });
    if (result.ok) {
      setStatus("success");
    } else {
      setStatus("idle");
      setSubmitError(
        result.error ||
          "Es gab ein Problem beim Senden. Bitte versuchen Sie es erneut oder rufen Sie uns telefonisch an.",
      );
    }
  }

  function reset() {
    setValues(emptyValues);
    setErrors({});
    setSubmitError(null);
    setStatus("idle");
  }

  return (
    <section id="buchung" className="bg-lavender-100/60 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Linke Spalte: Kontext + Kontaktdaten */}
        <Reveal>
          <span className="font-display text-base italic text-olive-700">
            Termin
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl">Termin anfragen</h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
            Wählen Sie Behandlung, Dauer und Wunschzeit – wir bestätigen Ihren
            Termin verbindlich per E-Mail. Lieber sofort sehen, was frei ist?
            Nutzen Sie die „Termin buchen"-Buttons bei den Behandlungen.
          </p>

          <dl className="mt-10 space-y-5">
            <ContactRow icon={<IconPhone className="h-5 w-5" />} label="Telefon">
              <a
                href={studio.phoneHref}
                className="font-medium text-ink transition-colors hover:text-lavender-700"
              >
                {studio.phoneDisplay}
              </a>
            </ContactRow>
            <ContactRow icon={<IconMail className="h-5 w-5" />} label="E-Mail">
              <a
                href={`mailto:${studio.email}`}
                className="font-medium text-ink transition-colors hover:text-lavender-700"
              >
                {studio.email}
              </a>
            </ContactRow>
            <ContactRow
              icon={<IconMapPin className="h-5 w-5" />}
              label="Adresse"
            >
              <span className="text-ink">
                {studio.address.street}, {studio.address.city}
              </span>
            </ContactRow>
            <ContactRow
              icon={<IconClock className="h-5 w-5" />}
              label="Öffnungszeiten"
            >
              <ul className="space-y-0.5 text-ink">
                {studio.hours.map((h) => (
                  <li key={h.days}>
                    <span className="text-muted">{h.days}:</span> {h.time}
                  </li>
                ))}
              </ul>
            </ContactRow>
          </dl>

          {/* Gutschein-Hinweis: einer der wenigen Verlauf-Akzente (Lavendel → Oliv) */}
          <div className="mt-8 rounded-2xl bg-gradient-to-br from-lavender-700 to-olive-700 p-6 text-cream">
            <p className="font-display text-xl">Gutscheine</p>
            <p className="mt-2 text-sm leading-relaxed text-cream/90">
              Individuell auf Ihre Wünsche abgestimmt und portofrei mit Rechnung
              zugeschickt. Sprechen Sie uns einfach an.
            </p>
          </div>
        </Reveal>

        {/* Rechte Spalte: Formular */}
        <Reveal delay={0.1}>
          <div className="rounded-3xl bg-white p-7 shadow-lift sm:p-9">
            {status === "success" ? (
              <div
                className="flex flex-col items-center py-10 text-center"
                aria-live="polite"
              >
                <span className="grid h-16 w-16 place-items-center rounded-full bg-olive-100 text-olive-700">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="m5 12.5 4 4 10-10" />
                  </svg>
                </span>
                <h3 className="mt-6 text-2xl">Vielen Dank!</h3>
                <p className="mt-3 max-w-sm leading-relaxed text-muted">
                  Wir haben Ihre Anfrage erhalten und melden uns zeitnah bei
                  Ihnen – in der Regel mit einer Terminbestätigung per E-Mail.
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="mt-6 text-sm font-medium text-lavender-700 underline-offset-4 hover:underline"
                >
                  Weitere Anfrage senden
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Honeypot gegen Bots: für Menschen unsichtbar & nicht fokussierbar */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    width: 1,
                    height: 1,
                    padding: 0,
                    margin: -1,
                    overflow: "hidden",
                    clipPath: "inset(50%)",
                    border: 0,
                  }}
                >
                  <label htmlFor="company">Firma (bitte frei lassen)</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    id="booking-name"
                    label="Name"
                    required
                    error={errors.name}
                  >
                    <input
                      id="booking-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={values.name}
                      onChange={(e) => update("name", e.target.value)}
                      aria-required
                      aria-invalid={!!errors.name}
                      aria-describedby={
                        errors.name ? "booking-name-error" : undefined
                      }
                      className={`${inputClasses} ${
                        errors.name ? "border-[#a23b30]" : "border-ink/15"
                      }`}
                    />
                  </Field>

                  <Field
                    id="booking-email"
                    label="E-Mail"
                    required
                    error={errors.email}
                  >
                    <input
                      id="booking-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={values.email}
                      onChange={(e) => update("email", e.target.value)}
                      aria-required
                      aria-invalid={!!errors.email}
                      aria-describedby={
                        errors.email ? "booking-email-error" : undefined
                      }
                      className={`${inputClasses} ${
                        errors.email ? "border-[#a23b30]" : "border-ink/15"
                      }`}
                    />
                  </Field>

                  <div className="sm:col-span-2">
                    <Field
                      id="booking-treatment"
                      label="Gewünschte Behandlung"
                      required
                      error={errors.treatment}
                    >
                      <select
                        id="booking-treatment"
                        name="treatment"
                        value={values.treatment}
                        onChange={(e) => changeTreatment(e.target.value)}
                        aria-required
                        aria-invalid={!!errors.treatment}
                        aria-describedby={
                          errors.treatment
                            ? "booking-treatment-error"
                            : undefined
                        }
                        className={`${inputClasses} ${
                          errors.treatment
                            ? "border-[#a23b30]"
                            : "border-ink/15"
                        } cursor-pointer`}
                      >
                        <option value="" disabled>
                          Bitte wählen …
                        </option>
                        {treatments.map((t) => (
                          <option key={t.slug} value={t.name}>
                            {t.name}
                          </option>
                        ))}
                        <option value="Beratung / Sonstiges">
                          Beratung / Sonstiges
                        </option>
                      </select>
                    </Field>
                  </div>

                  {hasBookableTreatment && (
                    <div className="sm:col-span-2">
                      <Field id="booking-duration" label="Dauer">
                        <select
                          id="booking-duration"
                          name="duration"
                          value={values.duration}
                          onChange={(e) => changeDuration(e.target.value)}
                          className={`${inputClasses} border-ink/15 cursor-pointer`}
                        >
                          {durationOptions.map((d) => (
                            <option key={d.min} value={String(d.min)}>
                              {d.min} Min. – {d.price} €
                            </option>
                          ))}
                        </select>
                      </Field>
                    </div>
                  )}

                  <Field
                    id="booking-date"
                    label="Wunschdatum"
                    hint="optional"
                    error={errors.date}
                  >
                    <input
                      id="booking-date"
                      name="date"
                      type="date"
                      value={values.date}
                      onChange={(e) => changeDate(e.target.value)}
                      aria-invalid={!!errors.date}
                      aria-describedby={
                        errors.date ? "booking-date-error" : undefined
                      }
                      className={`${inputClasses} ${
                        errors.date ? "border-[#a23b30]" : "border-ink/15"
                      }`}
                    />
                  </Field>

                  <Field
                    id="booking-time"
                    label="Wunschuhrzeit"
                    hint="optional"
                    error={errors.time}
                  >
                    <select
                      id="booking-time"
                      name="time"
                      value={values.time}
                      onChange={(e) => update("time", e.target.value)}
                      disabled={!dateChosen || dayClosed}
                      aria-invalid={!!errors.time}
                      aria-describedby={
                        errors.time ? "booking-time-error" : undefined
                      }
                      className={`${inputClasses} ${
                        errors.time ? "border-[#a23b30]" : "border-ink/15"
                      } cursor-pointer disabled:cursor-not-allowed disabled:bg-ink/5`}
                    >
                      <option value="">
                        {!dateChosen
                          ? "Erst Datum wählen"
                          : dayClosed
                            ? "Sonntags geschlossen"
                            : "Uhrzeit wählen …"}
                      </option>
                      {times.map((t) => (
                        <option key={t} value={t}>
                          {t} Uhr
                        </option>
                      ))}
                    </select>
                  </Field>

                  <div className="sm:col-span-2">
                    <Field id="booking-phone" label="Telefon" hint="optional">
                      <input
                        id="booking-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        value={values.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        className={`${inputClasses} border-ink/15`}
                      />
                    </Field>
                  </div>

                  <div className="sm:col-span-2">
                    <Field
                      id="booking-message"
                      label="Nachricht"
                      hint="optional"
                    >
                      <textarea
                        id="booking-message"
                        name="message"
                        rows={4}
                        maxLength={2000}
                        value={values.message}
                        onChange={(e) => update("message", e.target.value)}
                        placeholder="Sonderwünsche, Fragen oder gewünschte Zone (z. B. bei Haarentfernung) …"
                        className={`${inputClasses} resize-none border-ink/15`}
                      />
                    </Field>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-lavender-700 px-6 py-3.5 text-sm font-medium tracking-wide text-white shadow-soft transition-all duration-300 ease-out hover:bg-[#4d3b6e] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "submitting" ? (
                    <>
                      <Spinner />
                      Wird gesendet …
                    </>
                  ) : (
                    "Anfrage senden"
                  )}
                </button>

                {submitError && (
                  <p
                    role="alert"
                    className="mt-3 text-center text-sm text-[#a23b30]"
                  >
                    {submitError}
                  </p>
                )}

                <p className="mt-4 text-center text-xs leading-relaxed text-muted">
                  Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Angaben zur
                  Bearbeitung der Anfrage zu. Pflichtfelder sind mit
                  <span className="text-[#a23b30]"> *</span> markiert.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------- Hilfsteile ------------------------------- */

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-olive-700 shadow-soft">
        {icon}
      </span>
      <div>
        <dt className="text-sm text-muted">{label}</dt>
        <dd className="mt-0.5">{children}</dd>
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  required,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 flex items-baseline gap-1.5 text-sm font-medium text-ink"
      >
        {label}
        {required && (
          <span className="text-[#a23b30]" aria-hidden>
            *
          </span>
        )}
        {hint && <span className="text-xs font-normal text-muted">({hint})</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className={`mt-1.5 text-sm ${errorText}`}>
          {error}
        </p>
      )}
    </div>
  );
}

function Spinner() {
  return (
    <svg
      className="h-4 w-4 animate-spin"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="2.5"
        opacity="0.25"
      />
      <path
        d="M21 12a9 9 0 0 0-9-9"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
