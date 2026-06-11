"use client";

import { useState } from "react";

const helpOptions = [
  { id: "yardsign", label: "Display a yard sign" },
  { id: "doorknocking", label: "Knock on doors" },
  { id: "phonebanking", label: "Make phone calls" },
  { id: "events", label: "Help at events" },
  { id: "social", label: "Share on social media" },
  { id: "donate", label: "Donate" },
];

export default function VolunteerForm() {
  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (id: string) =>
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  if (submitted) {
    return (
      <div className="rounded-2xl bg-cream-50 p-8 md:p-12 shadow-card text-center animate-fade-up">
        <div className="mx-auto h-14 w-14 rounded-full bg-gold-400 grid place-items-center text-navy-900 text-2xl font-bold">
          ✓
        </div>
        <h3 className="mt-5 font-display text-2xl text-navy-900">Thank you!</h3>
        <p className="mt-2 text-navy-700">
          Your information was received. A member of the campaign team will be
          in touch soon to coordinate next steps.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setSelected([]);
          }}
          className="mt-6 text-sm font-semibold text-navy-700 underline underline-offset-4 hover:text-gold-600 transition"
        >
          Submit another response
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="rounded-2xl bg-cream-50 p-6 md:p-10 shadow-card grid gap-5"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field name="firstName" label="First name" required />
        <Field name="lastName" label="Last name" required />
        <Field name="email" type="email" label="Email" required />
        <Field name="phone" type="tel" label="Phone" />
      </div>

      <div>
        <div className="text-sm font-semibold text-navy-900 mb-2">
          How would you like to help?{" "}
          <span className="text-navy-500 font-normal">
            (Select all that apply)
          </span>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          {helpOptions.map((opt) => {
            const active = selected.includes(opt.id);
            return (
              <button
                type="button"
                key={opt.id}
                onClick={() => toggle(opt.id)}
                className={`group flex items-center justify-between rounded-lg border-2 px-4 py-3 text-left transition ${
                  active
                    ? "border-gold-400 bg-gold-50 shadow-sm"
                    : "border-navy-100 bg-white hover:border-navy-300"
                }`}
              >
                <span className="text-sm text-navy-900 font-medium">
                  {opt.label}
                </span>
                <span
                  className={`h-5 w-5 rounded-md border-2 grid place-items-center transition ${
                    active
                      ? "border-gold-500 bg-gold-400 text-navy-900"
                      : "border-navy-200"
                  }`}
                  aria-hidden
                >
                  {active && (
                    <svg
                      viewBox="0 0 16 16"
                      className="h-3 w-3 fill-none stroke-current stroke-[3]"
                    >
                      <polyline points="3,8 7,12 13,4" />
                    </svg>
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="text-sm font-semibold text-navy-900"
        >
          Additional notes{" "}
          <span className="text-navy-500 font-normal">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-2 w-full rounded-lg border-2 border-navy-100 bg-white px-4 py-3 text-navy-900 placeholder-navy-400 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-200"
          placeholder="Tell us anything else that would help."
        />
      </div>

      <button
        type="submit"
        className="justify-self-start inline-flex items-center gap-2 rounded-full bg-navy-900 px-7 py-3 text-sm font-semibold text-cream-50 shadow-card hover:bg-navy-800 hover:-translate-y-0.5 transition"
      >
        Sign me up
        <span aria-hidden>→</span>
      </button>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required = false,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-semibold text-navy-900">
        {label} {required && <span className="text-gold-600">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-lg border-2 border-navy-100 bg-white px-4 py-3 text-navy-900 placeholder-navy-400 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-200"
      />
    </div>
  );
}
