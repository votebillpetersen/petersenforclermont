"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Bill" },
  { href: "/record", label: "Record" },
  { href: "/issues", label: "Issues" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream-50/95 shadow-md backdrop-blur"
          : "bg-cream-50/80 backdrop-blur-sm"
      }`}
    >
      <div className="container-wide flex items-center justify-between py-3">
        <Link href="/" className="group flex items-center gap-3">
          {/* Circular headshot — replaces the prior BP monogram. Navy backdrop
              shows through the PNG's transparent areas so the silhouette reads
              cleanly inside the gold-ringed circle. */}
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-navy-900 shadow-card ring-2 ring-gold-400/40 group-hover:ring-gold-400 transition">
            <Image
              src="/bill-petersen.png"
              alt="Bill Petersen Clermont City Council Seat 5 candidate photo"
              fill
              sizes="40px"
              className="object-cover object-top"
            />
          </div>
          <div className="leading-tight">
            <div className="font-display text-navy-900 font-semibold text-base leading-tight">
              William “Bill” Petersen
            </div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-navy-700">
              Clermont · Seat 5
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => {
            const active =
              l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative px-2.5 py-2 text-sm font-medium transition ${
                  active ? "text-navy-900" : "text-navy-700 hover:text-navy-900"
                }`}
              >
                {l.label}
                <span
                  className={`absolute left-2.5 right-2.5 -bottom-0.5 h-0.5 bg-gold-400 rounded-full transition-all duration-300 origin-left ${
                    active ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                  }`}
                />
              </Link>
            );
          })}
          <Link
            href="/donate"
            className="ml-3 inline-flex items-center gap-1.5 rounded-full bg-gold-400 px-5 py-2 text-sm font-semibold text-navy-900 shadow-card hover:bg-gold-300 hover:-translate-y-0.5 transition"
          >
            Donate
            <span aria-hidden>→</span>
          </Link>
        </nav>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-navy-900 hover:bg-navy-900/5"
        >
          <span className="sr-only">Toggle menu</span>
          <div className="relative h-4 w-6">
            <span
              className={`absolute left-0 top-0 h-0.5 w-6 bg-current transition-all ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-6 bg-current transition-all ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-3 h-0.5 w-6 bg-current transition-all ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container-wide pb-5 pt-1 flex flex-col gap-1">
          {links.map((l) => {
            const active =
              l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-md px-3 py-3 text-base font-medium ${
                  active
                    ? "bg-navy-900/5 text-navy-900"
                    : "text-navy-700 hover:bg-navy-900/5"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/donate"
            className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-gold-400 px-5 py-3 text-base font-semibold text-navy-900"
          >
            Donate
          </Link>
        </nav>
      </div>
    </header>
  );
}
