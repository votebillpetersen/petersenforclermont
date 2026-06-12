import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import DonorboxWidget from "@/components/DonorboxWidget";

export const metadata: Metadata = {
  title: "Donate to Bill Petersen | Clermont City Council Seat 5",
  description:
    "Contribute to the Bill Petersen campaign for Clermont City Council Seat 5. Local campaigns are powered by neighbors. Vote in the General Election — November 3, 2026.",
  alternates: { canonical: "/donate" },
  openGraph: {
    title: "Donate to Bill Petersen | Clermont City Council Seat 5",
    description:
      "Contribute to the Bill Petersen campaign for Clermont City Council Seat 5. Vote in the General Election — November 3, 2026.",
    url: "/donate",
    type: "website",
    images: [
      {
        url: "/bill-petersen.png",
        width: 1600,
        height: 2000,
        alt: "Bill Petersen Clermont City Council Seat 5 candidate photo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Donate to Bill Petersen | Clermont City Council Seat 5",
    description: "Local campaigns are powered by neighbors.",
    images: ["/bill-petersen.png"],
  },
};

const impacts = [
  { amount: "$25", text: "Helps print door hangers for a neighborhood walk." },
  { amount: "$100", text: "Fuels phone-bank lists, signage, and printed lit." },
  { amount: "$250", text: "Sponsors a community event the campaign hosts." },
  { amount: "$500", text: "Covers an entire weekend of voter outreach." },
];

export default function DonatePage() {
  return (
    <>
      <section className="bg-grain text-cream-50">
        <div className="container-wide py-20">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.22em] text-gold-300 font-semibold">
              Donate
            </div>
            <h1 className="mt-3 font-display text-5xl md:text-6xl leading-tight text-balance text-cream-50">
              Chip in to{" "}
              <span className="text-gold-300">
                Re-Elect William “Bill” Petersen
              </span>
              .
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-cream-50/85 leading-relaxed">
              Local campaigns are powered by neighbors. Whether it&apos;s $25 or
              $500, your contribution helps us reach more Clermont voters before
              Election Day, November 3, 2026.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-wide py-16 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3">
          <Reveal>
            <div className="rounded-2xl bg-cream-50 p-6 md:p-10 shadow-card">
              <DonorboxWidget />
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-2">
          <Reveal delay={100}>
            <div className="rounded-2xl bg-white p-8 shadow-card">
              <div className="text-[11px] uppercase tracking-[0.22em] text-gold-600 font-semibold">
                What your gift does
              </div>
              <ul className="mt-5 grid gap-4">
                {impacts.map((i) => (
                  <li key={i.amount} className="flex gap-4 items-start">
                    <span className="rounded-full bg-navy-900 text-gold-400 font-display font-bold text-sm px-3 py-1.5 shrink-0">
                      {i.amount}
                    </span>
                    <span className="text-navy-800">{i.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-lg bg-cream-100 p-4 text-xs text-navy-700 leading-relaxed">
                <strong className="text-navy-900">Heads up:</strong> Florida law
                requires contributors to provide name, address, occupation, and
                employer. The donation form collects this for you. Contributions
                are <em>not</em> tax-deductible.
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* REQUIRED FLORIDA DISCLAIMER */}
      <section className="container-wide pb-20">
        <Reveal>
          <div className="rounded-2xl border-2 border-navy-900 bg-cream-50 p-6 md:p-8">
            <div className="text-[11px] uppercase tracking-[0.22em] text-gold-600 font-semibold">
              Required disclaimer
            </div>
            <p className="mt-3 font-semibold text-navy-900 leading-relaxed">
              Political advertisement paid for and approved by William “Bill” Petersen,
              for Clermont City Council Seat 5.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
