import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Bill Petersen | Clermont City Council Seat 5",
  description:
    "Meet Bill Petersen, incumbent Clermont City Council Seat 5. A husband, neighbor, and public servant committed to protecting Clermont's quality of life.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Bill Petersen | Clermont City Council Seat 5",
    description:
      "Meet Bill Petersen, incumbent Clermont City Council Seat 5. A husband, neighbor, and public servant committed to protecting Clermont's quality of life.",
    url: "/about",
    type: "profile",
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
    title: "About Bill Petersen | Clermont City Council Seat 5",
    description:
      "Meet Bill Petersen, incumbent Clermont City Council Seat 5.",
    images: ["/bill-petersen.png"],
  },
};

type Accomplishment = { number: number; headline: string; body: string };
type TimelineEntry = { year: string; title: string; body: string };

const careerTimeline: TimelineEntry[] = [
  {
    year: "1972",
    title: "Foundation in Healthcare",
    body: "I earned my Bachelor of Science in Pharmacy from the Brooklyn College of Pharmacy. It launched me into a lifetime of serving others.",
  },
  {
    year: "1980",
    title: "Built a Business from the Ground Up",
    body: "I owned and operated a retail pharmacy and surgical business for two decades, learning what it means to serve a community directly, face to face, every single day.",
  },
  {
    year: "1990s",
    title: "Created 200 Jobs in Healthcare",
    body: "My entrepreneurial spirit led me to establish a licensed nursing agency employing approximately 200 nurses specializing in high-tech medical care.",
  },
  {
    year: "2000s",
    title: "Expanded Access to Care",
    body: "I owned a closed-shop pharmacy providing medications and IV therapy to assisted living facilities and group homes, making sure the most vulnerable had what they needed.",
  },
  {
    year: "2003",
    title: "Recognized by Omnicare",
    body: "I sold my pharmacy business to Omnicare and spent five years as a consultant focused on retention and growth, broadening my strategic and operational expertise.",
  },
  {
    year: "Today",
    title: "Still Serving Clermont Every Day",
    body: "For the past decade I have worked at our local Clermont CVS pharmacy and run outside vaccine clinics, staying connected to this community and the people who call it home.",
  },
];

const accomplishments: Accomplishment[] = [
  {
    number: 1,
    headline: "Cut Your Property Tax Rate",
    body: "In 2025, I made the motion to lower Clermont's millage rate to 4.59. It passed 4-1. Government should not take more from your paycheck than it needs to operate. Clermont families kept more of what they earned. I will keep fighting for lower taxes every budget cycle.",
  },
  {
    number: 2,
    headline: "Killed the Term Extension",
    body: "When a proposal came before the council to extend terms from two years to four, I cast the deciding 3-2 vote against it. As I said publicly: “Having elections every two years makes us accountable to the citizens.” Politicians should not vote to give themselves more time between elections. I never will.",
  },
  {
    number: 3,
    headline: "Funded a Fire Engine for Wellness Way",
    body: "Response times in the Wellness Way corridor were too long. I voted to approve a pumper fire engine for Fire Station 5. Families in that growing part of Clermont deserve the same protection as everyone else. When seconds matter, there is no acceptable excuse.",
  },
  {
    number: 4,
    headline: "Got Fire Station 5 Built",
    body: "I made the motion to approve the temporary bunk house for Fire Station 5 and separately made the motion for emergency construction of the temporary station site. Both passed 5-0. We did not wait. We acted. In my next term I will see Fire Station 5 fully permanent and operational.",
  },
  {
    number: 5,
    headline: "Kept Fire Station 2 Running",
    body: "During Fire Station 2 renovations, I voted to approve emergency temporary facilities to keep it operational. Clermont cannot have gaps in fire coverage. Not for a single day. I will always make sure that is true.",
  },
  {
    number: 6,
    headline: "Approved the Fire Department's Five-Year Plan",
    body: "I voted yes on the Clermont Fire Department 2026-2030 Strategic Plan. Our firefighters now have a roadmap for staffing, equipment, and response capacity, not just today but five years from now. I will hold the city accountable for executing every piece of it.",
  },
  {
    number: 7,
    headline: "Stood Behind Our Police Officers",
    body: "I voted to update the Police Officers Retirement Pension Plan to reflect collective bargaining changes and federal law. The men and women who protect Clermont deserve retirement security. I will always support the people who keep this city safe.",
  },
  {
    number: 8,
    headline: "Made It Easier for Families to Build on Their Own Property",
    body: "I supported and voted yes on reducing impact fees for accessory dwelling units. A Clermont family can now add a home on their own property for an aging parent, an adult child, or extra income, with lower upfront costs. Government should make it easier to build, not harder.",
  },
  {
    number: 9,
    headline: "Hired DPZ CoDesign to Plan Clermont's Future",
    body: "I voted to hire DPZ CoDesign to develop a form-based code and guide the Comprehensive Plan update for the entire City of Clermont. This is the most significant planning investment Clermont will make in a generation. It sets the rules for how our city grows for decades to come. I will see it through to completion and make sure residents have a real voice in the outcome.",
  },
  {
    number: 10,
    headline: "Brought ABA Ethos to Clermont",
    body: "I voted to engage ABA Ethos, the planning and activation consulting arm of USA BMX, to help Clermont develop its vision for cycling and recreation facilities. Clermont is the Choice of Champions. ABA Ethos helps us build the infrastructure that lives up to that identity, from bike parks to multi-discipline cycling destinations that draw visitors and serve our residents.",
  },
  {
    number: 11,
    headline: "The Florida Native Streetscape: Largest in Florida",
    body: "Downtown Clermont's Montrose Street has been transformed with over 10 species of Florida native plants that cost less to maintain and make our downtown more beautiful. When all three phases are complete, Clermont will have the largest Florida native plant downtown streetscape in the state. This was covered by News 6 Orlando. This is what investing in your city looks like.",
  },
  {
    number: 12,
    headline: "National Financial Excellence Award",
    body: "The City of Clermont earned the GFOA Certificate of Achievement for Excellence in Financial Reporting, the highest honor in governmental accounting. An independent panel confirmed Clermont's commitment to full transparency and public disclosure. This happened on my watch. I will hold Clermont to that standard every year.",
  },
  {
    number: 13,
    headline: "Went to Tallahassee to Fight for Clermont",
    body: "I traveled to the Capitol for Florida League of Cities Legislative Action Days, meeting directly with state legislators to advocate for Clermont's local funding priorities. The work of protecting Clermont does not stop at City Hall. I will always show up wherever Clermont needs a voice.",
  },
  {
    number: 14,
    headline: "Supported a Government Efficiency Audit",
    body: "I voted to cooperate with Florida's government efficiency audit. If government is spending your money wisely, it has nothing to hide. I welcome outside review. In my next term I will continue to support any process that gives Clermont residents a clearer picture of how their money is being spent.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO — full-width navy with dotted texture. Two-column on lg+:
          left = text (slides in from left), right = framed photo (fades in
          from right with delay). Min-h 70vh anchors the section height. */}
      <section className="relative overflow-hidden bg-navy-900 text-cream-50 flex items-center lg:h-[54vh] lg:max-h-[540px]">
        {/* Dot pattern — radial-gradient repeated. Sits behind everything. */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.18] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(230,185,72,0.55) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        {/* Soft navy gradient over the top of the dots so the text side stays
            readable while the dots show through more on the empty edges. */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-navy-950/85 via-navy-900/60 to-transparent pointer-events-none"
        />

        <div className="container-wide relative py-8 md:py-10 lg:py-12 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          {/* LEFT — slides in from left */}
          <div className="lg:col-span-7 animate-slide-in-left">
            <div className="text-[11px] uppercase tracking-[0.22em] text-gold-300 font-semibold">
              About Bill
            </div>
            <h1 className="mt-3 font-display text-4xl md:text-5xl lg:text-[54px] leading-[1.05] text-balance text-cream-50">
              Meet Councilman William “Bill” Petersen.
            </h1>
            <p className="mt-3 font-display italic text-base md:text-lg text-gold-300">
              Incumbent · Clermont City Council · Seat 5
            </p>
            <p className="mt-4 max-w-2xl text-base md:text-lg text-cream-50/85 leading-relaxed">
              A husband, a neighbor, and a public servant. I bring calm,
              careful judgment to the toughest decisions facing our community,
              and an unwavering commitment to the city I call home.
            </p>
            <Link
              href="/volunteer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold-400 px-7 py-3 text-sm font-semibold text-navy-900 shadow-card hover:bg-gold-300 hover:-translate-y-0.5 transition"
            >
              Join the campaign
              <span aria-hidden>→</span>
            </Link>
          </div>

          {/* RIGHT — photo, fades in from the right with delay */}
          <div
            className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            <div className="relative">
              {/* Gold accent: blurred circle behind the frame, offset down-right
                  for an asymmetric glow that catches the eye. */}
              <div
                aria-hidden
                className="absolute -inset-3 md:-inset-4 -z-10 rounded-[2rem] bg-gold-400/15 blur-2xl"
              />
              {/* Gold accent square behind the photo, offset top-right. */}
              <div
                aria-hidden
                className="absolute -top-3 -right-3 md:-top-4 md:-right-4 h-2/3 w-2/3 -z-10 rounded-2xl border-2 border-gold-400/50 bg-gold-400/[0.04]"
              />
              <div className="relative w-[160px] sm:w-[185px] md:w-[210px] lg:w-[240px] aspect-[4/5] overflow-hidden rounded-3xl ring-4 ring-gold-400/60 shadow-2xl bg-gradient-to-b from-navy-800 to-navy-950">
                <Image
                  src="/bill-petersen.png"
                  alt="Bill Petersen Clermont City Council Seat 5 candidate photo"
                  fill
                  priority
                  sizes="(min-width: 1024px) 240px, (min-width: 768px) 210px, 160px"
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BIO — pull-quote layout. Cream background, big gold typographic
          quote mark anchoring the top, a centered serif pull quote, a gold
          divider, two body columns, and a full-width closing paragraph. */}
      <section className="bg-cream-50 py-20 md:py-28">
        <div className="container-wide">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <div className="text-[11px] uppercase tracking-[0.22em] text-gold-600 font-semibold">
                Biography
              </div>
            </Reveal>
            <Reveal delay={60}>
              <div
                aria-hidden
                className="mx-auto mt-6 font-display text-gold-400 leading-none select-none text-6xl md:text-8xl lg:text-9xl"
              >
                &ldquo;
              </div>
            </Reveal>
            <Reveal delay={120}>
              <blockquote className="mt-2 md:-mt-6 font-display text-2xl md:text-4xl lg:text-5xl text-navy-900 leading-snug text-balance px-2 md:px-0">
                I have always believed that good government starts with
                knowing the community it serves.
              </blockquote>
            </Reveal>
            <Reveal delay={180}>
              <div className="mx-auto mt-10 h-px w-24 bg-gold-400" />
            </Reveal>
          </div>

          <div className="mx-auto mt-14 md:mt-16 max-w-5xl grid md:grid-cols-2 gap-10 md:gap-14">
            <Reveal delay={120}>
              <p className="text-lg text-navy-700 leading-relaxed">
                I have built my life around the people and places that make
                Clermont feel like home. From early mornings around the lakes
                to evenings spent at neighborhood gatherings, I know this city,
                not from a distance, but from living in it.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p className="text-lg text-navy-700 leading-relaxed">
                With a background in healthcare, business management, and
                community service, I bring a calm, practical approach to city
                government. I listen first, ask the right questions, and make
                the call that&apos;s best for the long-term health of the city.
              </p>
            </Reveal>
          </div>

          <Reveal delay={240}>
            <p className="mx-auto mt-10 md:mt-14 max-w-4xl text-center text-lg md:text-xl text-navy-700 leading-relaxed">
              On the council, I have earned a reputation as a steady,
              prepared, resident-first voice: one of the people you call when
              something doesn&apos;t feel right in the neighborhood, and one of the
              people who actually picks up.
            </p>
          </Reveal>
        </div>
      </section>

      {/* GET TO KNOW ME — vertical career timeline. Navy bg contrasts with
          the cream biography above. Gold dot per entry on the centerline;
          cards alternate sides on lg+ with the year displayed opposite each
          card. On smaller screens everything stacks left of a single rail. */}
      <section className="bg-navy-900 text-cream-50 py-20 md:py-28">
        <div className="container-wide">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <div className="text-[11px] uppercase tracking-[0.22em] text-gold-300 font-semibold">
                Get to Know Me
              </div>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl text-cream-50 text-balance">
                A Life Built on Service.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gold-400" />
            </Reveal>
          </div>

          <div className="relative mx-auto mt-16 md:mt-20 max-w-5xl">
            {/* Gold vertical rail — left side on mobile, dead center on lg+ */}
            <div
              aria-hidden
              className="absolute top-0 bottom-0 left-4 lg:left-1/2 w-px bg-gradient-to-b from-gold-400/0 via-gold-400/60 to-gold-400/0 lg:-translate-x-px"
            />

            <div className="grid gap-12 md:gap-16">
              {careerTimeline.map((entry, i) => (
                <TimelineRow key={entry.year} entry={entry} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAMILY + FAITH */}
      <section className="bg-cream-100 py-16 md:py-24">
        <div className="container-wide grid md:grid-cols-2 gap-10">
          <Reveal>
            <div className="rounded-2xl bg-white p-8 md:p-10 shadow-card h-full hover:shadow-card-hover transition">
              <div className="h-12 w-12 rounded-xl bg-navy-900 grid place-items-center text-gold-400 text-xl">
                ♥
              </div>
              <h3 className="mt-5 font-display text-2xl text-navy-900">
                Family
              </h3>
              <p className="mt-3 text-navy-700 leading-relaxed">
                I am married to my wife,{" "}
                <span className="font-semibold text-navy-900">Audrey</span>.
                Together we share a love for Clermont. The kind of love
                that&apos;s measured in Saturday mornings at the park, neighborhood
                dinners, and being there when it matters.
              </p>
              <p className="mt-3 text-navy-700 leading-relaxed">
                For us, public service isn&apos;t an abstraction. It&apos;s keeping the
                city safe and welcoming for the families we see every day.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-2xl bg-white p-8 md:p-10 shadow-card h-full hover:shadow-card-hover transition">
              <div className="h-12 w-12 rounded-xl bg-navy-900 grid place-items-center text-gold-400 text-xl">
                ✦
              </div>
              <h3 className="mt-5 font-display text-2xl text-navy-900">
                Faith &amp; Community
              </h3>
              <p className="mt-3 text-navy-700 leading-relaxed">
                Faith and community are at the center of my life. I&apos;m an active
                participant in my church and a regular supporter of local
                charities, civic events, and nonprofit causes that strengthen
                Clermont&apos;s social fabric.
              </p>
              <p className="mt-3 text-navy-700 leading-relaxed">
                For me, character, integrity, and respect for neighbors aren&apos;t
                talking points. They&apos;re how I was raised and how I govern.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MY RECORD — 14 ACCOMPLISHMENTS */}
      <section className="container-wide py-16 md:py-24">
        <Reveal>
          <header className="flex flex-col md:flex-row md:items-end gap-6 md:gap-10 max-w-5xl">
            <div
              aria-hidden
              className="font-display leading-none text-gold-400/90 select-none text-7xl md:text-[9rem]"
            >
              14
            </div>
            <div className="md:pb-3">
              <div className="text-[11px] uppercase tracking-[0.22em] text-gold-600 font-semibold">
                My Record
              </div>
              <h2 className="mt-2 font-display text-3xl md:text-4xl text-navy-900 text-balance">
                Ways I Have Fought for Clermont
              </h2>
              <p className="mt-4 text-lg text-navy-700 leading-relaxed max-w-xl">
                Every vote is a choice. Here is how I voted, and why it
                matters to you.
              </p>
            </div>
          </header>
        </Reveal>

        <div className="mt-12 md:mt-16 grid gap-5 md:gap-6 md:grid-cols-2">
          {accomplishments.map((a, i) => (
            <AccomplishmentCard
              key={a.number}
              item={a}
              delay={(i % 4) * 70}
            />
          ))}
        </div>
      </section>

      {/* WHY HE'S RUNNING */}
      <section className="relative overflow-hidden bg-navy-900 text-cream-50 py-20">
        <div className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-gold-400/15 blur-3xl pointer-events-none" />
        <div className="container-wide relative grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="text-[11px] uppercase tracking-[0.22em] text-gold-300 font-semibold">
                Why I&apos;m Running
              </div>
              <h2 className="mt-3 font-display text-3xl md:text-4xl text-balance text-cream-50">
                Because there&apos;s more work to do, and it&apos;s worth doing well.
              </h2>
              <p className="mt-5 text-lg text-cream-50/85 max-w-2xl leading-relaxed">
                The decisions we make in the next few years, on public safety,
                downtown, how we spend taxpayer dollars, and what gets approved
                at the council table, will shape Clermont for a generation.
                I&apos;m running for re-election to keep that work in steady hands,
                to keep listening to residents, and to keep protecting the
                quality of life that brought us all here.
              </p>
              <p className="mt-3 text-lg text-cream-50/85 max-w-2xl leading-relaxed">
                Thank you for the privilege of serving, and for considering me
                for another term.
              </p>
              <div className="mt-7 font-display text-2xl text-gold-300">
                Bill
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={120}>
              <div className="rounded-2xl bg-cream-50/5 border border-cream-50/10 p-8">
                <div className="text-[11px] uppercase tracking-[0.22em] text-gold-300 font-semibold">
                  At a glance
                </div>
                <ul className="mt-4 grid gap-3 text-cream-50/90">
                  <li>• Incumbent · Clermont City Council, Seat 5</li>
                  <li>• Married to Audrey</li>
                  <li>• Active in church and community life</li>
                  <li>
                    • Theme:{" "}
                    <span className="text-gold-300 font-semibold">
                      Protecting Our Quality of Life
                    </span>
                  </li>
                  <li>• On the ballot: Primary Election Day, August 18, 2026</li>
                </ul>
                <Link
                  href="/volunteer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-3 text-sm font-semibold text-navy-900 hover:bg-gold-300 hover:-translate-y-0.5 transition"
                >
                  Join the campaign
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

/**
 * One row on the Get-to-Know-Me timeline.
 *
 * Mobile (< lg): single column to the right of a 4-from-left rail. Year
 * stacks on top of the title; gold dot anchors the row to the rail.
 *
 * lg+: two-column grid centered on a middle rail. Rows alternate — even
 * index puts the card on the LEFT (right-aligned) with the year sitting on
 * the right of the rail; odd index reverses it. Year is sized "outside the
 * card" so it reads as a stand-alone marker, not a label of the card.
 */
function TimelineRow({ entry, index }: { entry: TimelineEntry; index: number }) {
  const onLeft = index % 2 === 0;
  return (
    <Reveal delay={index * 80}>
      <div className="relative">
        {/* Gold dot — sits on the rail. Ring matches section bg so the dot
            looks "punched out" of the line. */}
        <span
          aria-hidden
          className="absolute top-3 left-4 lg:left-1/2 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-gold-400 ring-4 ring-navy-900"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-14 pl-10 lg:pl-0">
          {/* YEAR */}
          <div
            className={
              "font-display text-4xl md:text-5xl lg:text-6xl text-gold-300 leading-none " +
              (onLeft
                ? "lg:col-start-2 lg:row-start-1 lg:pl-14"
                : "lg:col-start-1 lg:row-start-1 lg:pr-14 lg:text-right")
            }
          >
            {entry.year}
          </div>

          {/* CARD */}
          <div
            className={
              "mt-3 lg:mt-0 " +
              (onLeft
                ? "lg:col-start-1 lg:row-start-1 lg:pr-14 lg:text-right"
                : "lg:col-start-2 lg:row-start-1 lg:pl-14")
            }
          >
            <h3 className="font-display font-bold text-xl md:text-2xl text-cream-50">
              {entry.title}
            </h3>
            <p className="mt-3 text-cream-50/80 leading-relaxed">
              {entry.body}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function AccomplishmentCard({
  item,
  delay,
}: {
  item: Accomplishment;
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <article className="group relative h-full overflow-hidden rounded-2xl bg-white p-7 md:p-8 shadow-card transition hover:shadow-card-hover hover:-translate-y-1">
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 transition-transform duration-300 group-hover:scale-x-100"
        />
        <div className="flex items-start gap-5">
          <span
            aria-hidden
            className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-navy-900 text-gold-400 font-display font-bold text-xl shadow-card ring-2 ring-gold-400/30 transition group-hover:ring-gold-400 group-hover:scale-105"
          >
            {item.number}
          </span>
          <h3 className="pt-1.5 font-display text-xl md:text-2xl text-navy-900 leading-tight">
            {item.headline}
          </h3>
        </div>
        <p className="mt-5 text-navy-700 leading-relaxed">{item.body}</p>
      </article>
    </Reveal>
  );
}
