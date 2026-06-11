"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Reveal from "@/components/Reveal";

type Vote = {
  id: number;
  /** Row icon — ✓ marks a "win for Clermont", ✗ marks a "harmful project blocked." */
  icon: "check" | "x";
  /** Bill's actual vote — used for the modal "I Voted YES/NO" headline. */
  vote: "yes" | "no";
  title: string;
  date: string;
  result: string;
  description: string;
};

const votes: Vote[] = [
  {
    id: 17,
    icon: "check",
    vote: "yes",
    title: "Brought in a New City Attorney",
    date: "Dec 10, 2024",
    result: "Passed 4-1",
    description:
      "One of my first votes on the council was to bring in new legal leadership. I voted to appoint Christian Waugh as City Attorney, and it was one of the best decisions this council has made. The change in legal strategy saved Clermont taxpayers millions of dollars in pending litigation. Getting the right people in the right seats matters. Good decisions start with good counsel.",
  },
  {
    id: 18,
    icon: "check",
    vote: "yes",
    title: "Brought in a New City Manager",
    date: "Dec 17, 2024",
    result: "Passed 4-1",
    description:
      "Strong cities need strong leadership. I voted to bring Rick Van Wagner on as City Manager and see through a real transition plan, and today Rick serves as Clermont's permanent City Manager. The people of Clermont deserve a City Hall that runs well, responds quickly, and has steady, experienced hands at the wheel. That's exactly what we have now.",
  },
  {
    id: 12,
    icon: "check",
    vote: "yes",
    title: "Brought Rowing to Clermont's Lakes",
    date: "Apr 8, 2025",
    result: "Passed 3-2",
    description:
      "I voted to approve a use license with the Lake County Rowing Association to bring organized rowing to our lakefront. Clermont's lakes are one of our greatest assets. They should be alive with activity. This was about making sure our waterways are being used and enjoyed by the people who live here.",
  },
  {
    id: 7,
    icon: "check",
    vote: "yes",
    title: "Taxpayer Efficiency Review",
    date: "May 13, 2025",
    result: "Passed 5-0",
    description:
      "I voted yes on this without hesitation. If there's a way to spend your tax dollars more efficiently, I want to find it. You work too hard for your money to have it wasted by any level of government. Transparency and accountability aren't buzzwords to me. They're the job.",
  },
  {
    id: 11,
    icon: "check",
    vote: "yes",
    title: "Protected Lake Dot for Our Parks",
    date: "Jun 24, 2025",
    result: "Passed 4-1",
    description:
      "There was a push to sell a small city-owned parcel on Lake Dot. I voted to keep it and fold it into our parks planning instead. That land belongs to the people of Clermont. Once you sell lakefront property, you never get it back. I wasn't willing to let that happen on my watch.",
  },
  {
    id: 1,
    icon: "check",
    vote: "yes",
    title: "Two Consecutive Tax Cuts",
    date: "Jul–Sep 2025",
    result: "Passed 4-1",
    description:
      "Every time I sit down to vote on the budget, I think about the families in this city who are working hard and watching every dollar. Two years in a row, I voted to lower your taxes. That money stays in your pocket, where it belongs.",
  },
  {
    id: 3,
    icon: "check",
    vote: "yes",
    title: "Strengthened Landscaping Standards",
    date: "Jul 29, 2025",
    result: "Passed 4-1",
    description:
      "Clermont deserves to keep getting more beautiful, and I voted to make sure it does. I strengthened the landscaping and irrigation standards that anything new being built has to meet. More trees. More green space. Higher requirements. I raised the bar because your neighborhood, your park, your street should reflect the pride this community has in itself. Clermont isn't just maintaining its character. Under my watch, we're improving it.",
  },
  {
    id: 2,
    icon: "check",
    vote: "yes",
    title: "Kept Downtown Design Standards",
    date: "Aug 26, 2025",
    result: "Passed 4-1",
    description:
      "Clermont has a character worth protecting, and good planning is how you protect it. I voted to bring in a firm that specializes in form-based codes so we have clear, community-driven design standards in place. I want what gets built here to look like it belongs here, and I want our historic buildings and streetscapes preserved for the people who come after us. That starts with having the right rules written before the decisions get made.",
  },
  {
    id: 9,
    icon: "x",
    vote: "no",
    title: "Blocked US 27 Development",
    date: "Aug 26, 2025",
    result: "Passed 3-2 (Bill opposed)",
    description:
      "Safety and design standards exist to protect you. Full stop. When a development came before us along US 27 that didn't meet those standards, I voted no. I'm not going to approve something that cuts corners just to move things along. You deserve better than that.",
  },
  {
    id: 19,
    icon: "check",
    vote: "yes",
    title: "Your Right to Fly the Flag",
    date: "Sep 23, 2025",
    result: "Passed 4-1",
    description:
      "I voted to update our flagpole height ordinance so residents have more freedom to fly the American flag on their own property. This is America. If you want to honor your country in front of your home, your city government shouldn't be the thing standing in your way.",
  },
  {
    id: 13,
    icon: "check",
    vote: "yes",
    title: "New Fire Engine for Wellness Way",
    date: "Oct 28, 2025",
    result: "Passed 5-0",
    description:
      "Wellness Way is one of the busiest parts of Clermont. I voted to get a new pumper fire engine stationed at Fire Station 5 to make sure every family in that corridor has the same fire protection as everyone else. When seconds matter, there is no acceptable excuse.",
  },
  {
    id: 6,
    icon: "check",
    vote: "yes",
    title: "ADU Affordability",
    date: "Dec 2025–Jan 2026",
    result: "Passed 5-0",
    description:
      "Housing costs are squeezing a lot of Clermont families. I voted to reduce the fees that make it harder to build small, affordable units on existing lots. This isn't about changing our neighborhoods. It's about making sure the people who love this city can afford to stay in it.",
  },
  {
    id: 14,
    icon: "check",
    vote: "yes",
    title: "Kept Fire Station 2 Running",
    date: "Feb 10, 2026",
    result: "Passed 4-1",
    description:
      "When Fire Station 2 needed renovation, I voted to make sure it stayed operational the entire time. There's no acceptable gap in fire protection in this city. Your safety isn't something we put on pause while construction is underway.",
  },
  {
    id: 15,
    icon: "check",
    vote: "yes",
    title: "Fire Department 5-Year Plan",
    date: "Feb 10, 2026",
    result: "Passed 5-0",
    description:
      "I voted to approve the Clermont Fire Department's 2026–2030 Strategic Plan. Our firefighters now have a roadmap for staffing, equipment, and response capacity, not just today but five years from now. I will hold the city accountable for executing every piece of it.",
  },
  {
    id: 4,
    icon: "check",
    vote: "no",
    title: "Voted to Defeat 4-Year Term Extensions",
    date: "Mar 2026",
    result: "Failed 2-3 (Bill's no vote defeated it)",
    description:
      "Mayor Tim Murry proposed letting council members go four years between elections. I voted no. You should get to weigh in on who represents you every two years, not every four. I want to earn your vote on a regular basis. If I'm not doing my job, you should be able to say so sooner rather than later.",
  },
  {
    id: 10,
    icon: "x",
    vote: "no",
    title: "Denied 7-Eleven on Wellness Way",
    date: "Mar 2026",
    result: "Failed 0-5",
    description:
      "Every single council member voted no on this one, and I was proud to be part of it. A gas station and car wash on Wellness Way isn't what that corridor is supposed to be. The community showed up and made their voice heard. We listened. That's how it's supposed to work.",
  },
  {
    id: 16,
    icon: "check",
    vote: "yes",
    title: "Lights On for Excalibur Road",
    date: "Mar 10, 2026",
    result: "Passed 5-0",
    description:
      "Residents on Excalibur Road needed streetlights, and I voted to make sure the city covered that utility cost for up to 18 months while a long-term solution was worked out. Safe, well-lit streets aren't a luxury. Every neighborhood in Clermont deserves to feel safe after dark.",
  },
];

export default function VotingRecord() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  /* Close on Escape + lock body scroll while modal is open. */
  useEffect(() => {
    if (selectedId === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedId(null);
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedId]);

  const selectedVote = votes.find((v) => v.id === selectedId) ?? null;

  return (
    <div>
      {/* TWO-COLUMN ROW LIST — row-major fill so reading order is left→right
          across rows (oldest first, newest last). Items are direct grid
          children so CSS grid handles the natural row-major flow. */}
      <Reveal>
        <div className="mx-auto max-w-5xl border-t border-gold-400/40 grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12">
          {votes.map((v) => (
            <VoteRow
              key={v.id}
              v={v}
              onClick={() => setSelectedId(v.id)}
            />
          ))}
        </div>
      </Reveal>

      {/* BOTTOM CTAs — gold primary + outlined-navy secondary (adapted for the
          cream background so the outline stays legible) */}
      <Reveal delay={120}>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/record"
            className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-7 py-3 text-sm font-semibold text-navy-900 shadow-card transition hover:-translate-y-0.5 hover:bg-gold-300"
          >
            View My Complete Voting Record
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="/issues"
            className="inline-flex items-center gap-2 rounded-full border border-navy-300 px-7 py-3 text-sm font-semibold text-navy-900 transition hover:-translate-y-0.5 hover:border-gold-500 hover:text-gold-700"
          >
            Learn About the Issues
            <span aria-hidden>→</span>
          </Link>
        </div>
      </Reveal>

      {/* MODAL — unchanged styling (navy/gold) since it's fixed-positioned
          and renders on top of the page regardless of the section bg below. */}
      {selectedVote && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="vote-modal-title"
          onClick={() => setSelectedId(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/85 p-4 backdrop-blur-sm animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-[600px] overflow-y-auto rounded-2xl border-t-4 border-gold-400 bg-navy-900 p-8 md:p-10 text-cream-50 shadow-2xl animate-fade-up"
          >
            <button
              type="button"
              onClick={() => setSelectedId(null)}
              aria-label="Close"
              className="absolute top-4 right-4 grid h-9 w-9 place-items-center rounded-full text-cream-50/70 transition hover:bg-cream-50/10 hover:text-cream-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
            >
              <span aria-hidden className="text-2xl leading-none">
                ×
              </span>
            </button>

            <div className="text-center">
              <div aria-hidden className="flex justify-center">
                <span
                  className={`inline-flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-navy-950 ${
                    selectedVote.icon === "check"
                      ? "ring-2 ring-gold-400/60"
                      : "ring-2 ring-cream-50/25"
                  }`}
                >
                  {selectedVote.icon === "check" ? (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-10 w-10 md:h-12 md:w-12 text-gold-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-10 w-10 md:h-12 md:w-12 text-cream-50/80"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  )}
                </span>
              </div>
              <div
                id="vote-modal-title"
                className="mt-3 font-display text-3xl text-gold-300 md:text-4xl"
              >
                I Voted {selectedVote.vote === "yes" ? "YES" : "NO"}
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.22em] text-gold-300">
                {selectedVote.result}
              </div>
            </div>

            <h4 className="mt-8 font-display text-2xl text-cream-50 text-balance md:text-3xl">
              {selectedVote.title}
            </h4>

            <p className="mt-4 text-base leading-relaxed text-cream-50/85 md:text-lg">
              {selectedVote.description}
            </p>

            <div className="mt-8 text-xs uppercase tracking-[0.22em] text-gold-300">
              {selectedVote.date}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Single clean row: gold check or navy X on the left, bold navy title in the
 * middle (turns gold on hover), small gray date on the right. Thin gold rule
 * separates each row from the next. No borders or boxes around the row itself.
 */
function VoteRow({ v, onClick }: { v: Vote; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex w-full items-center gap-3 border-b border-gold-400/40 py-3 md:py-4 text-left transition hover:bg-gold-400/[0.06] focus:outline-none focus-visible:bg-gold-400/10"
    >
      {v.icon === "check" ? (
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className="h-5 w-5 shrink-0 text-gold-600"
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ) : (
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className="h-5 w-5 shrink-0 text-navy-800"
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      )}
      <span className="flex-1 font-bold text-sm md:text-base leading-snug text-navy-900 transition group-hover:text-gold-700">
        {v.title}
      </span>
      <span className="shrink-0 whitespace-nowrap text-xs text-navy-500">
        {v.date}
      </span>
    </button>
  );
}
