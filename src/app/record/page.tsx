import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Bill Petersen's Voting Record | Clermont City Council Seat 5",
  description:
    "See Bill Petersen's full voting record on the Clermont City Council. Real results on taxes, public safety, parks, and quality of life for Clermont residents.",
  alternates: { canonical: "/record" },
  openGraph: {
    title: "Bill Petersen's Voting Record | Clermont City Council Seat 5",
    description:
      "See Bill Petersen's full voting record on the Clermont City Council. Real results on taxes, public safety, parks, and quality of life for Clermont residents.",
    url: "/record",
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
    title: "Bill Petersen's Voting Record | Clermont City Council Seat 5",
    description:
      "Real results on taxes, public safety, parks, and quality of life for Clermont residents.",
    images: ["/bill-petersen.png"],
  },
};

type Item = { headline: string; body: string };
type SectionData = {
  id: string;
  marker: string;
  eyebrow: string;
  icon: string;
  bg: "default" | "alt";
  items: Item[];
};

const sections: SectionData[] = [
  {
    id: "fiscal",
    marker: "01",
    eyebrow: "Fiscal Responsibility",
    icon: "$",
    bg: "default",
    items: [
      {
        headline: "Cutting Your Property Tax Rate",
        body: "In July 2025, I made the motion to set Clermont's advertised millage rate at 4.59, lower than what city staff recommended. In September 2025, I made the motion again to lock in that rate as final. It passed 4-1. Government should not take more from your paycheck than it needs to operate. I pushed for the lower number because Clermont families deserve to keep more of what they earn. Going forward, I will continue to push back on unnecessary spending, scrutinize every budget cycle, and fight to keep your tax rate as low as possible without sacrificing the services you count on.",
      },
    ],
  },
  {
    id: "accountable",
    marker: "02",
    eyebrow: "Accountable Government",
    icon: "✓",
    bg: "alt",
    items: [
      {
        headline: "Voting Against Politicians Extending Their Own Terms",
        body: "In March 2026, a proposal came before the council to extend council terms from two years to four. I voted no. My vote was the deciding vote. It failed 3-2. As I said publicly at the time: “Having elections every two years makes us accountable to the citizens. People have two years to give us their review.” Elected officials should face voters regularly. I will always vote against measures that insulate elected officials from the people they serve.",
      },
      {
        headline: "Supporting a Government Efficiency Audit",
        body: "In May 2025, I voted to cooperate with the Florida government efficiency audit process. If government is spending your money wisely, it has nothing to hide. I believe in full transparency and I welcome outside review. In my next term I will continue to support audits and any process that gives residents a clearer picture of how their money is being spent.",
      },
      {
        headline: "Bringing in Fresh Leadership",
        body: "In December 2024, I led the votes to appoint a new City Attorney and bring on a new City Manager. Today Rick Van Wagner serves as Clermont's permanent City Manager, and Clermont has leadership it can trust. I acted on that belief on day one. Going forward, I will hold every member of city leadership to the same standard: competence, integrity, and a commitment to serving residents first.",
      },
      {
        headline: "Going to Tallahassee to Fight for Clermont",
        body: "I traveled to Tallahassee with fellow council members to meet with state legislators and advocate for Clermont's local funding priorities at the Florida League of Cities' Legislative Action Days. Most people never see the work that happens behind the scenes. I made sure Clermont's voice was heard at the state level, and I will keep doing it.",
      },
      {
        headline: "Keeping Meetings Efficient and Focused",
        body: "In June 2025, I made the motion to limit council reports to three minutes unless a majority votes to extend. Taxpayer time is valuable. Council meetings should be focused and productive. I will continue pushing for meetings that respect your time.",
      },
      {
        headline: "National Recognition for Financial Excellence",
        body: "During my term, the City of Clermont earned the Certificate of Achievement for Excellence in Financial Reporting from the Government Finance Officers Association, the highest honor in governmental accounting. An independent panel confirmed Clermont's commitment to transparency and full public disclosure. This happened on my watch and I am proud of it. I will continue holding the city to the highest financial standards.",
      },
    ],
  },
  {
    id: "safety",
    marker: "03",
    eyebrow: "Public Safety",
    icon: "✚",
    bg: "default",
    items: [
      {
        headline: "Putting a Fire Engine Where It Was Needed",
        body: "In October 2025, I voted to approve the purchase of a pumper fire engine for Fire Station 5 in the Wellness Way area. Response times there were too long. Families in that corridor deserve the same protection as everyone else. As Clermont continues to grow, I will make sure public safety infrastructure keeps pace. When seconds matter, there is no acceptable excuse.",
      },
      {
        headline: "Getting Fire Station 5 Up and Running",
        body: "In December 2025, I made the motion to approve a temporary bunk house for Fire Station 5 and separately made the motion for emergency construction of the temporary station site. Both passed 5-0. We did not wait. We acted. In my next term I will see Fire Station 5 fully built and operational.",
      },
      {
        headline: "Keeping Fire Station 2 Operational",
        body: "In February 2026, I voted to approve emergency temporary facilities to keep Fire Station 2 running during renovations. Clermont cannot have gaps in fire coverage. I will always prioritize continuity of emergency services.",
      },
      {
        headline: "A Five-Year Plan for Our Fire Department",
        body: "In February 2026, I voted to approve the Clermont Fire Department's 2026-2030 Strategic Plan. Planning ahead means our firefighters have the resources and equipment they need not just today, but five years from now. I will hold the city accountable for executing that plan.",
      },
      {
        headline: "Standing Behind Our Police Officers",
        body: "In September and November 2025, I voted to update the Police Officers Retirement Pension Plan to reflect collective bargaining changes and federal law updates. The men and women who protect Clermont deserve retirement security. I will continue to support competitive compensation and benefits for our law enforcement officers.",
      },
    ],
  },
  {
    id: "housing",
    marker: "04",
    eyebrow: "Housing & Affordability",
    icon: "⌂",
    bg: "alt",
    items: [
      {
        headline: "Making It Easier for Families to Build on Their Own Property",
        body: "In December 2025, I supported introducing an ordinance to reduce impact fees for accessory dwelling units, and in January 2026, I voted for final approval. An accessory dwelling unit lets a family add a small home on their own property for an aging parent, a college graduate, or rental income. We removed a financial barrier that was standing in the way. Government should make it easier for families to use their own land, not harder. In my next term I will continue looking for ways to reduce fees and regulations that make it harder for Clermont families to build, grow, and stay in the community they love.",
      },
    ],
  },
  {
    id: "downtown",
    marker: "05",
    eyebrow: "Downtown & Quality of Life",
    icon: "❖",
    bg: "default",
    items: [
      {
        headline: "Shaping Clermont's Future: The Right Way",
        body: "In August 2025, I voted to approve a contract with DPZ CoDesign to develop a form-based code for downtown Clermont and guide the Comprehensive Plan update for the entire city. This is one of the most significant planning decisions Clermont will make in a generation. A strong Comprehensive Plan sets the rules for how our city grows: what gets built, where, and whether it fits the community we want to be. In my next term I will see that process through to completion, making sure residents have a real voice in shaping Clermont's future.",
      },
      {
        headline: "The Florida Native Streetscape: Largest in the State",
        body: "Downtown Clermont's Montrose Street has been transformed with Florida native plants: over 10 species that cost taxpayers less to maintain because they need far less water than what was there before. When the three phases are complete, Clermont will host the largest Florida native plant downtown streetscape in Florida. This project was covered by News 6 Orlando and represents what happens when a city invests in beauty, sustainability, and community pride.",
      },
      {
        headline: "Protecting Green Space for Future Generations",
        body: "In June 2025, I voted to keep the City-owned Lake Dot parcel in parks planning rather than selling it immediately. Once green space is gone, it is gone. I voted to protect it. I will apply that same principle to every community asset. Before we sell what belongs to all of us, we owe it to residents to ask if we will regret that decision.",
      },
      {
        headline: "Supporting Recreation on Our Lakes",
        body: "In April 2025, I voted to approve a use license with the Lake County Rowing Association. Clermont is known for its lakes and its athletic heritage. I will continue to support partnerships that activate our waterfront and make Clermont a destination for healthy, active living.",
      },
      {
        headline: "Parks, Festivals, and the Events That Define Clermont",
        body: "I voted to approve disc golf at Lake Hiawatha Park, the Sommer Sports season, Pig on the Pond, and other community gatherings that bring Clermont residents together. These events are part of what makes this city a place people love to live. I will keep championing the events and traditions that define Clermont's identity.",
      },
      {
        headline: "Staying Connected: Bagels with Bill",
        body: "Every first Monday of the month at 9 AM, I hold an open community conversation at Panera Bread on SR 50. No RSVP needed. No agenda. Any Clermont resident is welcome to show up and talk. This is what accountability looks like, not just at election time, but every single month. I will keep showing up.",
      },
    ],
  },
];

export default function RecordPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-grain text-cream-50">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-gold-400 blur-3xl" />
          <div className="absolute -bottom-32 -left-10 h-96 w-96 rounded-full bg-navy-700 blur-3xl" />
        </div>
        <div className="container-wide relative py-20 md:py-24">
          <Reveal>
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-gold-400/40 bg-navy-900/40 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-gold-300">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400 animate-pulse" />
              Real Actions · Real Results
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-balance text-cream-50">
              My Record. <span className="text-gold-300">Your Trust.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-3xl text-lg md:text-xl text-cream-50/85 leading-relaxed">
              I promised to show up, work hard, and put Clermont first. Here is
              exactly what I have done, and what I will keep doing.
            </p>
          </Reveal>

          {/* Section jump list */}
          <Reveal delay={220}>
            <nav
              aria-label="Jump to section"
              className="mt-10 flex flex-wrap gap-2"
            >
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="group inline-flex items-center gap-2 rounded-full border border-cream-50/20 bg-navy-900/40 px-4 py-2 text-sm text-cream-50/85 hover:border-gold-400/70 hover:text-gold-300 transition"
                >
                  <span className="font-display text-gold-300 text-xs tracking-wider">
                    {s.marker}
                  </span>
                  <span>{s.eyebrow}</span>
                </a>
              ))}
            </nav>
          </Reveal>
        </div>
      </section>

      {/* SECTIONS */}
      {sections.map((s) => (
        <Section key={s.id} section={s} />
      ))}

      {/* FINAL CTA */}
      <section className="container-wide py-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 p-10 md:p-16 text-cream-50 shadow-card">
            <div className="absolute -top-12 -right-12 h-72 w-72 rounded-full bg-gold-400/15 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-12 h-64 w-64 rounded-full bg-gold-400/10 blur-3xl pointer-events-none" />
            <div className="relative max-w-3xl">
              <div className="text-[11px] uppercase tracking-[0.22em] text-gold-300 font-semibold">
                Re-Elect · Primary Aug 18, 2026
              </div>
              <h2 className="mt-3 font-display text-3xl md:text-5xl text-balance text-cream-50">
                Real results. Real accountability. Real commitment to Clermont.
              </h2>
              <p className="mt-5 text-lg text-cream-50/85 leading-relaxed">
                If you believe Clermont deserves a council member who shows up,
                tells the truth, and puts residents first. I am asking for your
                vote on August 18, 2026.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/volunteer"
                  className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-7 py-3 text-sm font-semibold text-navy-900 shadow-card hover:bg-gold-300 hover:-translate-y-0.5 transition"
                >
                  Volunteer
                  <span aria-hidden>→</span>
                </Link>
                <Link
                  href="/donate"
                  className="inline-flex items-center gap-2 rounded-full bg-cream-50 px-7 py-3 text-sm font-semibold text-navy-900 shadow-card hover:bg-white hover:-translate-y-0.5 transition"
                >
                  Donate
                  <span aria-hidden>→</span>
                </Link>
                <Link
                  href="/volunteer"
                  className="inline-flex items-center gap-2 rounded-full border border-cream-50/30 px-7 py-3 text-sm font-semibold text-cream-50 hover:border-gold-300 hover:text-gold-300 transition"
                >
                  Get a Yard Sign
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function Section({ section }: { section: SectionData }) {
  const isFeature = section.items.length === 1;
  const bg =
    section.bg === "alt" ? "bg-cream-100" : "bg-cream-50";

  return (
    <section
      id={section.id}
      className={`${bg} py-20 md:py-24 scroll-mt-24`}
    >
      <div className="container-wide">
        {/* Section header */}
        <Reveal>
          <header className="flex items-start gap-5">
            <div className="relative h-14 w-14 md:h-16 md:w-16 shrink-0 rounded-2xl bg-navy-900 grid place-items-center text-gold-400 text-2xl md:text-3xl shadow-card">
              <span aria-hidden>{section.icon}</span>
              <span className="absolute -top-2 -right-2 rounded-full bg-gold-400 px-2 py-0.5 text-[10px] font-display font-bold text-navy-900 tracking-wider shadow-card">
                {section.marker}
              </span>
            </div>
            <div className="pt-1">
              <div className="text-[11px] uppercase tracking-[0.22em] text-gold-600 font-semibold">
                Section {section.marker}
              </div>
              <h2 className="mt-2 font-display text-3xl md:text-4xl text-navy-900 text-balance">
                {section.eyebrow}
              </h2>
            </div>
          </header>
        </Reveal>

        {/* Items */}
        <div
          className={
            isFeature
              ? "mt-10"
              : "mt-10 md:mt-12 grid gap-5 md:gap-6 md:grid-cols-2"
          }
        >
          {section.items.map((item, i) =>
            isFeature ? (
              <FeatureCard key={i} item={item} />
            ) : (
              <ItemCard key={i} item={item} index={i} delay={i * 60} />
            )
          )}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ item }: { item: Item }) {
  return (
    <Reveal delay={60}>
      <article className="relative overflow-hidden rounded-2xl bg-white p-8 md:p-12 shadow-card">
        <div className="absolute top-0 left-0 h-full w-1.5 bg-gradient-to-b from-gold-400 to-gold-600" />
        <div className="pl-2 md:pl-4">
          <h3 className="font-display text-2xl md:text-3xl text-navy-900 text-balance">
            {item.headline}
          </h3>
          <p className="mt-5 text-lg text-navy-700 leading-relaxed">
            {item.body}
          </p>
        </div>
      </article>
    </Reveal>
  );
}

function ItemCard({
  item,
  index,
  delay,
}: {
  item: Item;
  index: number;
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <article className="group relative h-full rounded-2xl bg-white p-7 md:p-8 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition">
        <div className="flex items-start gap-4">
          <span
            aria-hidden
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-navy-900 text-gold-400 font-display font-bold text-sm"
          >
            {index + 1}
          </span>
          <h3 className="font-display text-xl md:text-2xl text-navy-900 leading-snug">
            {item.headline}
          </h3>
        </div>
        <p className="mt-4 text-navy-700 leading-relaxed">{item.body}</p>
      </article>
    </Reveal>
  );
}
