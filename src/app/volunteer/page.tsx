import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import VolunteerForm from "@/components/VolunteerForm";

export const metadata: Metadata = {
  title: "Volunteer for Bill Petersen | Clermont City Council Campaign",
  description:
    "Join the campaign to re-elect Bill Petersen for Clermont City Council Seat 5. Volunteer, display a yard sign, or make calls from home.",
  alternates: { canonical: "/volunteer" },
  openGraph: {
    title: "Volunteer for Bill Petersen | Clermont City Council Campaign",
    description:
      "Join the campaign to re-elect Bill Petersen for Clermont City Council Seat 5. Volunteer, display a yard sign, or make calls from home.",
    url: "/volunteer",
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
    title: "Volunteer for Bill Petersen | Clermont City Council Campaign",
    description:
      "Volunteer, display a yard sign, or make calls from home.",
    images: ["/bill-petersen.png"],
  },
};

const ways = [
  {
    icon: "⌂",
    title: "Yard Sign",
    body: "Request a sign for your front yard or HOA-friendly location.",
  },
  {
    icon: "✆",
    title: "Phone Banking",
    body: "Help us call voters from home on flexible evening shifts.",
  },
  {
    icon: "✱",
    title: "Door Knocking",
    body: "Knock doors in your own neighborhood. We'll provide everything you need.",
  },
  {
    icon: "★",
    title: "Events",
    body: "Help us pull off rallies, meet-and-greets, and community events.",
  },
];

export default function VolunteerPage() {
  return (
    <>
      <section className="bg-grain text-cream-50">
        <div className="container-wide py-20">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.22em] text-gold-300 font-semibold">
              Volunteer
            </div>
            <h1 className="mt-3 font-display text-5xl md:text-6xl leading-tight text-balance text-cream-50">
              Help Re-Elect{" "}
              <span className="text-gold-300">
                William “Bill” Petersen
              </span>
              . An hour goes a long way.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-cream-50/85 leading-relaxed">
              Whether it&apos;s a yard sign, a few phone calls, or a Saturday morning
              knocking doors, every neighbor who pitches in moves us closer to
              November 3.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-wide py-16 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 grid gap-4 content-start">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.22em] text-gold-600 font-semibold">
              Ways to help
            </div>
            <h2 className="mt-3 font-display text-3xl text-navy-900">
              Find your fit.
            </h2>
          </Reveal>
          {ways.map((w, i) => (
            <Reveal key={w.title} delay={i * 80}>
              <div className="rounded-2xl bg-white p-6 shadow-card flex gap-4 items-start hover:-translate-y-0.5 hover:shadow-card-hover transition">
                <div className="h-11 w-11 rounded-xl bg-navy-900 grid place-items-center text-gold-400 text-xl shrink-0">
                  {w.icon}
                </div>
                <div>
                  <div className="font-display text-xl text-navy-900">
                    {w.title}
                  </div>
                  <p className="mt-1 text-navy-700 text-sm leading-relaxed">
                    {w.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="lg:col-span-3">
          <Reveal delay={120}>
            <h2 className="font-display text-3xl text-navy-900">Sign up</h2>
            <p className="mt-2 text-navy-700">
              Fill out the form below and the team will reach out within a few
              days.
            </p>
            <div className="mt-6">
              <VolunteerForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
