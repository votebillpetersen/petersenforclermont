import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import IssueAccordion, { type Issue } from "@/components/IssueAccordion";

export const metadata: Metadata = {
  title: "Where Bill Petersen Stands | Clermont City Council Issues",
  description:
    "Where Bill Petersen stands on the issues that matter to Clermont: quality of life, fiscal accountability, public safety, and protecting our neighborhoods.",
  alternates: { canonical: "/issues" },
  openGraph: {
    title: "Where Bill Petersen Stands | Clermont City Council Issues",
    description:
      "Where Bill Petersen stands on the issues that matter to Clermont: quality of life, fiscal accountability, public safety, and protecting our neighborhoods.",
    url: "/issues",
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
    title: "Where Bill Petersen Stands | Clermont City Council Issues",
    description:
      "Where Bill Petersen stands on the issues that matter to Clermont.",
    images: ["/bill-petersen.png"],
  },
};

const issues: Issue[] = [
  {
    title: "Quality of Life",
    intro:
      "The everyday experience of living in Clermont is what makes this city special: quiet streets, well-maintained parks, accessible recreation. I work to protect those everyday wins.",
    points: [
      "Continue investing in parks, trails, and the chain-of-lakes that define our city.",
      "Support neighborhood-level priorities like sidewalks, lighting, and traffic-calming.",
      "Keep recreation and youth programs strong and affordable for Clermont families.",
      "Protect green space and tree canopy as the city grows.",
    ],
  },
  {
    title: "Protecting Our Neighborhoods",
    intro:
      "Clermont is a special place, and I intend to keep it that way. My job is to make sure that what gets approved at the council table fits the community we are, not just the interests of whoever is asking.",
    points: [
      "Hold every project to Clermont's design and infrastructure standards. No exceptions.",
      "Defend the Comprehensive Plan and land-use protections from short-term pressure.",
      "Make sure builders honor every commitment made in front of residents.",
      "Protect the historic character and architecture that gives Clermont its identity.",
      "Prioritize design that fits Clermont's character and scale.",
    ],
  },
  {
    title: "Fiscal Accountability",
    intro:
      "Every dollar the city spends belongs to a resident. I bring a careful, line-by-line lens to the budget, and push for transparency at every step.",
    points: [
      "Insist on transparent, plain-language budgets the public can actually read.",
      "Look for efficiencies before considering new taxes or fees.",
      "Protect reserves and a strong credit rating to keep borrowing costs low.",
      "Treat every contract as if it were our own money on the line.",
    ],
  },
  {
    title: "Public Safety",
    intro:
      "Safe neighborhoods are the foundation of everything else. I support the people who keep us safe and the systems that prevent problems before they start.",
    points: [
      "Fully fund and equip Clermont Police and Fire/Rescue.",
      "Support community-policing relationships and visible patrols.",
      "Invest in traffic safety on neighborhood roads, school zones, and growing corridors.",
      "Plan ahead for the staffing and equipment needs of a growing city.",
    ],
  },
  {
    title: "Downtown Clermont Revitalization",
    intro:
      "Historic Downtown Clermont is the city's front porch. I'm committed to a downtown that's lively, walkable, locally-owned, and proud of its heritage.",
    points: [
      "Support small businesses with parking, signage, and event infrastructure that actually work.",
      "Preserve the historic character that draws residents and visitors alike.",
      "Encourage activation like markets, live music, and family events that bring downtown to life.",
      "Keep waterfront and lakefront amenities investments resident-first.",
    ],
  },
  {
    title: "Community Character",
    intro:
      "Clermont is a hometown, not a generic suburb. I fight to preserve the look, feel, and values that make this community distinct.",
    points: [
      "Protect the lakes, hills, and natural beauty that define Clermont.",
      "Respect the established neighborhoods that built this city.",
      "Preserve and protect Clermont's historic buildings, streetscapes, and neighborhoods. Once they're gone, they don't come back.",
      "Keep local nonprofits, faith communities, and volunteer groups strong and supported.",
      "Make sure new residents feel just as welcome as longtime ones.",
    ],
  },
];

export default function IssuesPage() {
  return (
    <>
      <section className="bg-grain text-cream-50">
        <div className="container-wide py-20">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.22em] text-gold-300 font-semibold">
              Issues
            </div>
            <h1 className="mt-3 font-display text-5xl md:text-6xl leading-tight text-balance text-cream-50">
              Where I stand on the issues that matter to{" "}
              <span className="text-gold-300">Clermont</span>.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-cream-50/85 leading-relaxed">
              Six priorities, one promise: keep Clermont the kind of place we&apos;re
              proud to call home. Tap any priority below to see the details.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-wide py-16 md:py-20">
        <Reveal>
          <IssueAccordion issues={issues} />
        </Reveal>
      </section>

      <section className="container-wide pb-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-navy-900 text-cream-50 p-10 md:p-14 shadow-card">
            <div className="absolute -top-10 -right-10 h-64 w-64 rounded-full bg-gold-400/15 blur-2xl pointer-events-none" />
            <div className="relative grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <h3 className="font-display text-3xl md:text-4xl text-cream-50">
                  Join the fight for Clermont.
                </h3>
                <p className="mt-3 text-cream-50/85 max-w-xl">
                  Volunteer with the campaign or display a yard sign in your
                  neighborhood. Every conversation matters.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
                <Link
                  href="/volunteer"
                  className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-3 text-sm font-semibold text-navy-900 hover:bg-gold-300 hover:-translate-y-0.5 transition"
                >
                  Volunteer
                </Link>
                <Link
                  href="/donate"
                  className="inline-flex items-center gap-2 rounded-full border border-cream-50/30 px-6 py-3 text-sm font-semibold text-cream-50 hover:border-gold-300 hover:text-gold-300 transition"
                >
                  Donate
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
