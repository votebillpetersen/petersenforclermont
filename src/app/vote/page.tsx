import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title:
    "Vote — Primary Election Day August 18, 2026 | Bill Petersen for Clermont",
  description:
    "How to vote in the Clermont City Council Seat 5 Primary Election on Tuesday, August 18, 2026. Request a mail ballot, find your precinct, and learn about early voting in Lake County, Florida.",
  alternates: { canonical: "/vote" },
  openGraph: {
    title:
      "Vote — Primary Election Day August 18, 2026 | Bill Petersen for Clermont",
    description:
      "Make your voice heard in the Clermont City Council Seat 5 Primary Election on August 18, 2026. Mail ballot, early voting, and Election Day info.",
    url: "/vote",
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
    title:
      "Vote — Primary Election Day August 18, 2026 | Bill Petersen for Clermont",
    description:
      "Make your voice heard in the Clermont City Council Seat 5 Primary Election on August 18, 2026.",
    images: ["/bill-petersen.png"],
  },
};

const LAKE_SOE_URL =
  "https://www.lakecountyfl.gov/offices/supervisor_of_elections/";

const keyDates = [
  {
    label: "Request Mail Ballot",
    date: "Now Open",
    detail:
      "Lake County voters can request a Vote-by-Mail ballot from the Supervisor of Elections at any time. Request early so your ballot arrives with time to spare.",
    cta: { href: LAKE_SOE_URL, label: "Request a mail ballot" },
  },
  {
    label: "Early Voting",
    date: "Dates coming soon",
    detail:
      "Early voting locations and hours are published by the Lake County Supervisor of Elections about 30 days before Election Day. We will list every Clermont-area early voting site here as soon as it is announced.",
    cta: { href: LAKE_SOE_URL, label: "Check early voting info" },
  },
  {
    label: "Primary Election Day",
    date: "Tuesday, August 18, 2026",
    detail:
      "Polls are open 7:00 AM – 7:00 PM. Vote at your assigned precinct. Bring a valid Florida photo ID with a signature.",
    cta: { href: LAKE_SOE_URL, label: "Find your precinct" },
  },
];

const waysToVote = [
  {
    icon: "✉",
    title: "Vote by Mail",
    body: "Request a Vote-by-Mail ballot from the Lake County Supervisor of Elections, fill it out at home, and return it by mail or to a secure drop-off location. Easiest way to make sure your vote is counted.",
  },
  {
    icon: "⏱",
    title: "Vote Early, in Person",
    body: "Early voting lets you cast your ballot at any designated Lake County early voting site in the days leading up to the election. No waiting in lines on Election Day.",
  },
  {
    icon: "✓",
    title: "Vote on Election Day",
    body: "On Tuesday, August 18, 2026, vote at your assigned precinct between 7:00 AM and 7:00 PM. Bring a valid photo ID with a signature.",
  },
];

export default function VotePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-grain text-cream-50">
        <div className="container-wide py-20">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.22em] text-gold-300 font-semibold">
              Vote
            </div>
            <h1 className="mt-3 font-display text-5xl md:text-6xl leading-tight text-balance text-cream-50">
              Make Your Voice Heard —{" "}
              <span className="text-gold-300">August 18, 2026</span>.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-cream-50/85 leading-relaxed">
              The Clermont City Council Seat 5 Primary Election is{" "}
              <span className="font-semibold text-cream-50">
                Tuesday, August 18, 2026
              </span>
              . Here is everything you need to vote by mail, vote early, or vote
              on Election Day.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={LAKE_SOE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-7 py-3 text-sm font-semibold text-navy-900 shadow-card hover:bg-gold-300 hover:-translate-y-0.5 transition"
              >
                Request a mail ballot
                <span aria-hidden>→</span>
              </a>
              <a
                href={LAKE_SOE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cream-50/30 px-7 py-3 text-sm font-semibold text-cream-50 hover:border-gold-400 hover:text-gold-300 transition"
              >
                Find your precinct
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* KEY DATES */}
      <section className="container-wide py-16 md:py-20">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.22em] text-gold-600 font-semibold">
            Key Dates
          </div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl text-navy-900 text-balance">
            Mark your calendar.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:gap-6 md:grid-cols-3">
          {keyDates.map((d, i) => (
            <Reveal key={d.label} delay={i * 100}>
              <div className="h-full rounded-2xl bg-white p-7 shadow-card hover:shadow-card-hover transition flex flex-col">
                <div className="text-[11px] uppercase tracking-[0.22em] text-gold-600 font-semibold">
                  {d.label}
                </div>
                <div className="mt-2 font-display text-2xl text-navy-900">
                  {d.date}
                </div>
                <p className="mt-3 text-navy-700 leading-relaxed text-sm flex-1">
                  {d.detail}
                </p>
                <a
                  href={d.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 hover:text-gold-600 transition"
                >
                  {d.cta.label}
                  <span aria-hidden>→</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* THREE WAYS TO VOTE */}
      <section className="bg-cream-100 py-16 md:py-20">
        <div className="container-wide">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.22em] text-gold-600 font-semibold">
              How to Vote
            </div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-navy-900 text-balance">
              Three ways to cast your ballot.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:gap-6 md:grid-cols-3">
            {waysToVote.map((w, i) => (
              <Reveal key={w.title} delay={i * 100}>
                <div className="h-full rounded-2xl bg-white p-8 shadow-card hover:shadow-card-hover transition">
                  <div className="h-12 w-12 rounded-xl bg-navy-900 grid place-items-center text-gold-400 text-xl">
                    {w.icon}
                  </div>
                  <h3 className="mt-5 font-display text-2xl text-navy-900">
                    {w.title}
                  </h3>
                  <p className="mt-3 text-navy-700 leading-relaxed">{w.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRECINCT LOOKUP + SOE LINK */}
      <section className="container-wide py-16 md:py-20">
        <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl bg-navy-900 text-cream-50 p-8 md:p-10 shadow-card">
              <div className="text-[11px] uppercase tracking-[0.22em] text-gold-300 font-semibold">
                Precinct Lookup
              </div>
              <h3 className="mt-3 font-display text-2xl md:text-3xl text-cream-50">
                Find your polling place.
              </h3>
              <p className="mt-4 text-cream-50/85 leading-relaxed">
                Enter your address on the Lake County Supervisor of Elections
                website to see your assigned precinct, sample ballot, and
                registration status.
              </p>
              <a
                href={LAKE_SOE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-3 text-sm font-semibold text-navy-900 hover:bg-gold-300 hover:-translate-y-0.5 transition"
              >
                Look up my precinct
                <span aria-hidden>→</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="h-full rounded-2xl bg-white p-8 md:p-10 shadow-card">
              <div className="text-[11px] uppercase tracking-[0.22em] text-gold-600 font-semibold">
                Lake County Supervisor of Elections
              </div>
              <h3 className="mt-3 font-display text-2xl md:text-3xl text-navy-900">
                Your official elections office.
              </h3>
              <p className="mt-4 text-navy-700 leading-relaxed">
                Mail ballots, early voting locations, precinct lookups, sample
                ballots, voter registration, and accessibility information are
                all available from the Lake County SOE.
              </p>
              <a
                href={LAKE_SOE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-cream-50 hover:bg-navy-800 hover:-translate-y-0.5 transition"
              >
                Visit the SOE website
                <span aria-hidden>→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-navy-900 text-cream-50 py-14">
        <div className="container-wide text-center">
          <Reveal>
            <p className="font-display text-2xl md:text-3xl text-cream-50 text-balance">
              On August 18th, send Bill Petersen back to Clermont City Council
              Seat 5.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                href="/volunteer"
                className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-7 py-3 text-sm font-semibold text-navy-900 hover:bg-gold-300 hover:-translate-y-0.5 transition"
              >
                Join the team
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/donate"
                className="inline-flex items-center gap-2 rounded-full border border-cream-50/30 px-7 py-3 text-sm font-semibold text-cream-50 hover:border-gold-400 hover:text-gold-300 transition"
              >
                Donate
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* REQUIRED FLORIDA DISCLAIMER */}
      <section className="container-wide pb-20 pt-12">
        <Reveal>
          <div className="rounded-2xl border-2 border-navy-900 bg-cream-50 p-6 md:p-8">
            <div className="text-[11px] uppercase tracking-[0.22em] text-gold-600 font-semibold">
              Required disclaimer
            </div>
            <p className="mt-3 font-semibold text-navy-900 leading-relaxed">
              Political advertisement paid for and approved by William “Bill”
              Petersen, for Clermont City Council Seat 5.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
