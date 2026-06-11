import Link from "next/link";
import Image from "next/image";

const cols = [
  {
    heading: "Campaign",
    links: [
      { href: "/about", label: "About Bill" },
      { href: "/record", label: "My Record" },
      { href: "/issues", label: "Issues" },
    ],
  },
  {
    heading: "Get Involved",
    links: [
      { href: "/volunteer", label: "Volunteer" },
      { href: "/donate", label: "Donate" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-24 bg-navy-900 text-cream-50">
      <div className="h-1 w-full bg-gradient-to-r from-gold-500 via-gold-300 to-gold-500" />
      <div className="container-wide py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-navy-900 ring-2 ring-gold-400/40">
              <Image
                src="/bill-petersen.png"
                alt="Bill Petersen Clermont City Council Seat 5 candidate photo"
                fill
                sizes="48px"
                className="object-cover object-top"
              />
            </div>
            <div>
              <div className="font-display text-xl">William “Bill” Petersen</div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-gold-300">
                Clermont City Council · Seat 5
              </div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-cream-50/80 leading-relaxed">
            Protecting Our Quality of Life. Re-Elect William “Bill” Petersen
            for Clermont, Florida City Council Seat 5 on
            <span className="text-gold-300 font-semibold">
              {" "}
              November 3, 2026
            </span>
            .
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold-400/40 px-4 py-2 text-sm text-gold-200">
            <span className="h-2 w-2 rounded-full bg-gold-400 animate-pulse" />
            Election Day · Nov 3, 2026
          </div>
        </div>

        {cols.map((c) => (
          <div key={c.heading}>
            <div className="text-[11px] uppercase tracking-[0.22em] text-gold-300 font-semibold">
              {c.heading}
            </div>
            <ul className="mt-4 space-y-2">
              {c.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-cream-50/85 hover:text-gold-300 transition"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-cream-50/10">
        <div className="container-wide py-6 text-xs text-cream-50/80 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl leading-relaxed">
            Political advertisement paid for and approved by William “Bill” Petersen,
            Republican, for Clermont City Council Seat 5.
          </p>
          <p>© {new Date().getFullYear()} Petersen for Clermont. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
