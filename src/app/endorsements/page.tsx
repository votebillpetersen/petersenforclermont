import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Endorsements for Bill Petersen | Clermont City Council Seat 5",
  description:
    "Endorsements from elected officials, community leaders, and organizations standing with Bill Petersen for Clermont City Council Seat 5.",
  alternates: { canonical: "/endorsements" },
  openGraph: {
    title: "Endorsements for Bill Petersen | Clermont City Council Seat 5",
    description:
      "Elected officials, community leaders, and organizations standing with Bill Petersen for Clermont City Council Seat 5.",
    url: "/endorsements",
    type: "article",
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
    title: "Endorsements for Bill Petersen | Clermont City Council Seat 5",
    description:
      "Elected officials, community leaders, and organizations standing with Bill Petersen.",
    images: ["/bill-petersen.png"],
  },
};

type Endorser = { name: string; role: string };

const electedOfficials: Endorser[] = [
  { name: "[Endorser Name]", role: "Florida State Representative" },
  { name: "[Endorser Name]", role: "Lake County Commissioner" },
  { name: "[Endorser Name]", role: "Former Mayor of Clermont" },
  { name: "[Endorser Name]", role: "Clermont City Councilmember" },
];

const communityLeaders: Endorser[] = [
  { name: "[Endorser Name]", role: "Downtown Business Owner" },
  { name: "[Endorser Name]", role: "Clermont Civic Leader" },
  { name: "[Endorser Name]", role: "Pastor, Local Church" },
  { name: "[Endorser Name]", role: "Youth Sports Coach" },
];

const organizations: Endorser[] = [
  { name: "[Organization]", role: "Local Trade Association" },
  { name: "[Organization]", role: "Public Safety Union" },
  { name: "[Organization]", role: "Small Business Coalition" },
  { name: "[Organization]", role: "Community Civic Group" },
];

const testimonials = [
  {
    quote:
      "Bill listens, prepares, and votes for Clermont, not the politics of the moment.",
    attribution: "[Endorser Name]",
  },
  {
    quote:
      "When our neighborhood needed a councilmember who would actually show up, Bill did.",
    attribution: "[Endorser Name]",
  },
  {
    quote:
      "He treats every dollar of the city budget like it came out of his own pocket. That's exactly the steward Clermont needs.",
    attribution: "[Endorser Name]",
  },
];

export default function EndorsementsPage() {
  return (
    <>
      <section className="bg-grain text-cream-50">
        <div className="container-wide py-20">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.22em] text-gold-300 font-semibold">
              Endorsements
            </div>
            <h1 className="mt-3 font-display text-5xl md:text-6xl leading-tight text-balance text-cream-50">
              Backed by neighbors, leaders, and the people who know Clermont
              best.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-cream-50/85 leading-relaxed">
              A growing list of residents, public servants, and community
              organizations standing with William “Bill” Petersen.
            </p>
          </Reveal>
        </div>
      </section>

      <Group title="Elected Officials" items={electedOfficials} />
      <Group
        title="Community Leaders"
        items={communityLeaders}
        variant="cream"
      />
      <Group title="Organizations" items={organizations} />

      {/* TESTIMONIALS */}
      <section className="bg-cream-100 py-20">
        <div className="container-wide">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.22em] text-gold-600 font-semibold">
              In Their Words
            </div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-navy-900">
              Why they're with Bill.
            </h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 100}>
                <figure className="h-full rounded-2xl bg-white p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition">
                  <div className="font-display text-5xl text-gold-400 leading-none">
                    &ldquo;
                  </div>
                  <blockquote className="-mt-2 text-navy-800 leading-relaxed">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-5 text-sm font-semibold text-navy-900">
                    {t.attribution}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-wide py-16">
        <Reveal>
          <div className="rounded-3xl bg-navy-900 text-cream-50 p-10 md:p-14 shadow-card flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl text-cream-50">
                Want to add your endorsement?
              </h3>
              <p className="mt-2 text-cream-50/85">
                Public officials, business owners, and community leaders welcome.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-3 text-sm font-semibold text-navy-900 hover:bg-gold-300 hover:-translate-y-0.5 transition self-start md:self-auto"
            >
              Contact the campaign
              <span aria-hidden>→</span>
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function initials(name: string): string {
  const cleaned = name.replace(/[\[\]]/g, "").trim();
  const parts = cleaned.split(/\s+/);
  const result = parts
    .map((w) => w[0])
    .filter(Boolean)
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return result || "•";
}

function Group({
  title,
  items,
  variant = "default",
}: {
  title: string;
  items: Endorser[];
  variant?: "default" | "cream";
}) {
  return (
    <section className={variant === "cream" ? "bg-cream-100 py-20" : "py-20"}>
      <div className="container-wide">
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-display text-3xl md:text-4xl text-navy-900">
              {title}
            </h2>
            <div className="hidden sm:block h-px flex-1 ml-6 bg-navy-200" />
          </div>
        </Reveal>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="group h-full rounded-2xl bg-white p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-full bg-navy-900 grid place-items-center text-gold-400 font-display font-bold">
                    {initials(item.name)}
                  </div>
                  <div>
                    <div className="font-display text-navy-900">
                      {item.name}
                    </div>
                    <div className="text-xs text-navy-700">{item.role}</div>
                  </div>
                </div>
                <div className="mt-4 inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.18em] text-gold-600 font-semibold">
                  Endorses William “Bill” Petersen
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
