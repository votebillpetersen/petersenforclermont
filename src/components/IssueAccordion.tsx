"use client";

import { useState } from "react";

export type Issue = {
  title: string;
  intro: string;
  points: string[];
  icon?: string;
};

export default function IssueAccordion({ issues }: { issues: Issue[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="grid gap-4">
      {issues.map((iss, i) => {
        const isOpen = open === i;
        return (
          <div
            key={iss.title}
            className={`rounded-2xl bg-cream-50 shadow-card transition ${
              isOpen ? "ring-1 ring-gold-400/60" : ""
            }`}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 p-6 text-left"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy-900 text-gold-400 font-display font-bold">
                  {iss.icon ?? i + 1}
                </span>
                <span className="font-display text-xl md:text-2xl text-navy-900">
                  {iss.title}
                </span>
              </div>
              <span
                className={`h-9 w-9 shrink-0 grid place-items-center rounded-full border-2 border-navy-900 text-navy-900 transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden
              >
                <svg
                  viewBox="0 0 16 16"
                  className="h-4 w-4 fill-none stroke-current stroke-[2]"
                >
                  <line x1="8" y1="2" x2="8" y2="14" />
                  <line x1="2" y1="8" x2="14" y2="8" />
                </svg>
              </span>
            </button>
            <div
              className={`grid transition-all duration-500 ease-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 md:px-20">
                  <p className="text-navy-700 leading-relaxed">{iss.intro}</p>
                  <ul className="mt-4 grid gap-2">
                    {iss.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-gold-500 shrink-0" />
                        <span className="text-navy-800">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
