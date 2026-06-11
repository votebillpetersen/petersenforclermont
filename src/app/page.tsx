import Link from "next/link";
import Reveal from "@/components/Reveal";
import HeroVideoBg from "@/components/HeroVideoBg";
import VotingRecord from "@/components/VotingRecord";

/**
 * Schema.org JSON-LD describing Bill Petersen as a Person who is the
 * candidate in a 2026 Clermont City Council Seat 5 Election. Embedded
 * inline on the homepage so search engines (and rich-results crawlers)
 * have a structured record of who, where, and when.
 */
const candidateSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.petersenforclermont.com/#bill-petersen",
      name: "William \"Bill\" Petersen",
      alternateName: "Bill Petersen",
      jobTitle: "Clermont City Councilman, Seat 5",
      description:
        "Incumbent Clermont City Council member, Seat 5. Running for re-election November 3, 2026.",
      image: "https://www.petersenforclermont.com/bill-petersen.png",
      url: "https://www.petersenforclermont.com",
      email: "VoteBillPetersen@gmail.com",
      affiliation: {
        "@type": "Organization",
        name: "Petersen for Clermont",
        url: "https://www.petersenforclermont.com",
      },
      memberOf: {
        "@type": "GovernmentOrganization",
        name: "Clermont City Council",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Clermont",
          addressRegion: "FL",
          addressCountry: "US",
        },
      },
    },
    {
      "@type": "Election",
      name: "2026 Clermont City Council Seat 5 Election",
      startDate: "2026-11-03",
      endDate: "2026-11-03",
      location: {
        "@type": "Place",
        name: "Clermont, Florida",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Clermont",
          addressRegion: "FL",
          addressCountry: "US",
        },
      },
      candidate: {
        "@id": "https://www.petersenforclermont.com/#bill-petersen",
      },
    },
    {
      "@type": "WebSite",
      url: "https://www.petersenforclermont.com",
      name: "Re-Elect Bill Petersen for Clermont City Council Seat 5",
      publisher: {
        "@type": "Organization",
        name: "Petersen for Clermont",
      },
    },
  ],
};

const issuePreviews = [
  {
    icon: "★",
    title: "Quality of Life",
    body: "Safer streets, cleaner parks, and the calm character that drew families to Clermont in the first place.",
  },
  {
    icon: "↗",
    title: "Protecting Our Neighborhoods",
    body: "Smart planning, strong standards, and making sure what gets built in Clermont actually belongs here, and that our historic character is preserved for generations to come.",
  },
  {
    icon: "$",
    title: "Fiscal Accountability",
    body: "Tight budgets, transparent spending, and respect for every taxpayer dollar that funds city services.",
  },
];

export default function Home() {
  return (
    <>
      {/* Schema.org JSON-LD for the candidate, the election, and the site. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(candidateSchema) }}
      />
      {/* HERO — full-bleed looping video background, min 90vh tall.
          No text card or box. Text sits directly over the video with a
          horizontal navy gradient from the left edge fading to transparent
          by the center. Bill's transparent-PNG cutout is anchored bottom-
          right, flush to both edges, full height of the hero.
          `isolate` forces this section to be its own stacking context so the
          -z-20 video paints inside it (above bg) instead of escaping to root. */}
      <section
        className="relative overflow-hidden isolate bg-navy-900 text-cream-50 h-[65vh] max-h-[600px] flex items-center"
        style={{ height: "65vh", maxHeight: "600px" }}
      >
        {/* Background video — see HeroVideoBg for Safari-autoplay handling */}
        <HeroVideoBg />

        {/* Left-side gradient overlay — heavy dark-navy at the left edge
            (rgba(5,15,40,0.75)) fading to fully transparent by 65% across.
            Single linear gradient, no midpoint stop, exactly as specified
            for guaranteed text readability on any video frame. */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(5,15,40,0.85)_0%,transparent_70%)]"
        />
        {/* Subtle bottom-up boost — gives the gradient a "coming up from the
            bottom-left" feel without darkening the upper area of the video */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950/40 to-transparent to-[35%]"
        />

        {/* TEXT — left-aligned. Each block slides in from the left, staggered
            100 ms apart on page load via the slide-in-left keyframe. */}
        <div className="container-wide relative w-full py-8 lg:py-10">
          {/* `text-shadow` is set once here via Tailwind arbitrary-property
              syntax and inherits to every descendant text element — no need
              to touch each block individually. Stronger blur + darker shadow
              than the previous pass for readability on bright video frames. */}
          <div className="max-w-lg lg:max-w-xl [text-shadow:0_2px_20px_rgba(0,0,0,0.9)]">
            {/* 1. Badge — 0 ms */}
            <div className="animate-slide-in-left" style={{ animationDelay: "0ms" }}>
              <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-navy-900/40 backdrop-blur-sm px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-gold-300">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-400 animate-pulse" />
                Incumbent · Clermont · Seat 5
              </div>
            </div>

            {/* 2. Tagline — 100 ms — gold serif italic, replaces P.P.P. */}
            <p
              className="mt-4 font-display italic text-lg md:text-xl text-gold-300 animate-slide-in-left"
              style={{ animationDelay: "100ms" }}
            >
              Fighting for the Clermont We Love.
            </p>

            {/* 3. Headline — 200 ms — large, bold, white */}
            <h1
              className="mt-2 font-display font-bold text-3xl md:text-4xl xl:text-5xl leading-[1.05] text-cream-50 text-balance animate-slide-in-left"
              style={{ animationDelay: "200ms" }}
            >
              Re-Elect William “Bill” Petersen.
            </h1>

            {/* 4. Subhead — 300 ms — gold italic */}
            <p
              className="mt-3 font-display italic text-base md:text-lg text-gold-300 animate-slide-in-left"
              style={{ animationDelay: "300ms" }}
            >
              Protecting Our Quality of Life.
            </p>

            {/* 5. Body — 400 ms — white, readable */}
            <p
              className="mt-3 text-sm md:text-base text-cream-50 leading-relaxed animate-slide-in-left"
              style={{ animationDelay: "400ms" }}
            >
              Clermont is worth protecting. Two years ago you trusted me with
              your voice. I&apos;ve used it for you every single vote. On November
              3rd, I&apos;m asking you to send me back.
            </p>

            {/* 6. Buttons — 500 ms */}
            <div
              className="mt-5 flex flex-wrap items-center gap-3 animate-slide-in-left"
              style={{ animationDelay: "500ms" }}
            >
              <Link
                href="/volunteer"
                className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-7 py-3 text-sm font-semibold text-navy-900 shadow-card hover:bg-gold-300 hover:-translate-y-0.5 transition"
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
              <Link
                href="/issues"
                className="inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-cream-50/85 hover:text-gold-300 transition"
              >
                Read the issues →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VOTING RECORD — header lives on its own NAVY strip (white/gold on
          navy as before); list + CTAs live below on a CREAM strip so the rows
          read like a clean newspaper TOC. Splitting into two sections gives
          the visual contrast without a card or panel inside one section. */}

      {/* Header strip (navy) */}
      <section className="relative bg-navy-900 pt-6 md:pt-8 pb-12 md:pb-16 text-cream-50">
        <div className="container-wide text-center">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.22em] text-gold-300 font-semibold">
              The Record
            </div>
            <h3 className="mt-3 font-display text-4xl md:text-5xl text-cream-50 text-balance">
              A Few Highlights From My Record
            </h3>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gold-400" />
          </Reveal>
          <Reveal delay={80}>
            <p className="mx-auto mt-6 max-w-2xl font-display italic text-base md:text-lg text-cream-50/80">
              These are just a few of the votes I&apos;ve cast for the people of
              Clermont. Click any item to learn more.
            </p>
          </Reveal>
        </div>
      </section>

      {/* List strip (cream) */}
      <section className="relative bg-cream-50 py-12 md:py-16">
        <div className="container-wide">
          <VotingRecord />
        </div>
      </section>

      {/* QUALITY OF LIFE PILLAR */}
      <section className="container-wide py-10 md:py-14">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="text-[11px] uppercase tracking-[0.22em] text-gold-600 font-semibold">
                What This Race Is About
              </div>
              <h2 className="mt-3 font-display text-4xl md:text-5xl text-navy-900 text-balance">
                A council that listens, and a community I protect.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <p className="text-lg text-navy-700 leading-relaxed">
                Clermont is one of Central Florida&apos;s most loved hometowns. I
                intend to keep it that way. I&apos;ve spent my time on this council
                fighting for the neighborhoods, families, and quality of life
                that make this city worth living in.
              </p>
              <p className="mt-4 text-lg text-navy-700 leading-relaxed">
                This campaign is about continuing that work, and never taking
                what we have here for granted.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ISSUES PREVIEW */}
      <section className="bg-cream-100 py-20 md:py-28">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <Reveal>
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-gold-600 font-semibold">
                  Where Bill Stands
                </div>
                <h2 className="mt-3 font-display text-4xl md:text-5xl text-navy-900">
                  Priorities for Clermont
                </h2>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <Link
                href="/issues"
                className="inline-flex items-center gap-2 text-navy-900 font-semibold hover:text-gold-600 transition"
              >
                See all issues <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {issuePreviews.map((iss, i) => (
              <Reveal key={iss.title} delay={i * 80}>
                <Link
                  href="/issues"
                  className="group block h-full rounded-2xl bg-white p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition"
                >
                  <div className="h-12 w-12 rounded-xl bg-navy-900 grid place-items-center text-gold-400 text-xl font-display font-bold">
                    {iss.icon}
                  </div>
                  <h3 className="mt-5 font-display text-2xl text-navy-900">
                    {iss.title}
                  </h3>
                  <p className="mt-3 text-navy-700 leading-relaxed">
                    {iss.body}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy-900 group-hover:text-gold-600 transition">
                    Learn more{" "}
                    <span
                      aria-hidden
                      className="transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="container-wide py-20 md:py-28">
        <Reveal>
          <figure className="mx-auto max-w-3xl text-center">
            <div className="font-display text-6xl text-gold-400 leading-none select-none">
              &ldquo;
            </div>
            <blockquote className="-mt-4 font-display text-2xl md:text-3xl text-navy-900 leading-snug text-balance">
              The little things make Clermont special: quiet streets, safe
              parks, neighbors who know your name. My job is to protect that,
              vote after vote.
            </blockquote>
            <figcaption className="mt-6 text-[11px] uppercase tracking-[0.22em] text-navy-700">
              Councilman William “Bill” Petersen
            </figcaption>
          </figure>
        </Reveal>
      </section>

      {/* FINAL CTA */}
      <section className="container-wide py-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 p-10 md:p-16 text-cream-50 shadow-card">
            <div className="absolute -top-12 -right-12 h-64 w-64 rounded-full bg-gold-400/15 blur-2xl" />
            <div className="relative grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <h3 className="font-display text-3xl md:text-4xl text-cream-50">
                  Help Re-Elect William “Bill” Petersen.
                </h3>
                <p className="mt-3 text-cream-50/85 max-w-xl">
                  Volunteer an hour. Display a yard sign. Chip in $25. Every
                  neighbor counts.
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
