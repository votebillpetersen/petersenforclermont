"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-2xl bg-cream-50 p-8 md:p-12 shadow-card text-center animate-fade-up">
        <div className="mx-auto h-14 w-14 rounded-full bg-gold-400 grid place-items-center text-navy-900 text-2xl font-bold">
          ✓
        </div>
        <h3 className="mt-5 font-display text-2xl text-navy-900">
          Message sent
        </h3>
        <p className="mt-2 text-navy-700">
          Thanks for reaching out. Bill or a member of the campaign team will
          respond as soon as possible.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-semibold text-navy-700 underline underline-offset-4 hover:text-gold-600 transition"
        >
          Send another message
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
        <Input id="name" label="Your name" required />
        <Input id="email" label="Email" type="email" required />
      </div>
      <Input id="subject" label="Subject" required />
      <div>
        <label htmlFor="message" className="text-sm font-semibold text-navy-900">
          Message <span className="text-gold-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="mt-2 w-full rounded-lg border-2 border-navy-100 bg-white px-4 py-3 text-navy-900 placeholder-navy-400 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-200"
          placeholder="How can we help?"
        />
      </div>
      <button
        type="submit"
        className="justify-self-start inline-flex items-center gap-2 rounded-full bg-navy-900 px-7 py-3 text-sm font-semibold text-cream-50 shadow-card hover:bg-navy-800 hover:-translate-y-0.5 transition"
      >
        Send message
        <span aria-hidden>→</span>
      </button>
    </form>
  );
}

function Input({
  id,
  label,
  type = "text",
  required = false,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-navy-900">
        {label} {required && <span className="text-gold-600">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="mt-2 w-full rounded-lg border-2 border-navy-100 bg-white px-4 py-3 text-navy-900 placeholder-navy-400 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-200"
      />
    </div>
  );
}
