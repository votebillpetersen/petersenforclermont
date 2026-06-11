import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact the Bill Petersen Campaign | Clermont Florida",
  description:
    "Get in touch with the Bill Petersen campaign for Clermont City Council Seat 5. Questions, media inquiries, and event invitations welcome.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact the Bill Petersen Campaign | Clermont Florida",
    description:
      "Get in touch with the Bill Petersen campaign for Clermont City Council Seat 5. Questions, media inquiries, and event invitations welcome.",
    url: "/contact",
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
    title: "Contact the Bill Petersen Campaign | Clermont Florida",
    description:
      "Questions, media inquiries, and event invitations welcome.",
    images: ["/bill-petersen.png"],
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-grain text-cream-50">
        <div className="container-wide py-20">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.22em] text-gold-300 font-semibold">
              Contact
            </div>
            <h1 className="mt-3 font-display text-5xl md:text-6xl leading-tight text-balance text-cream-50">
              Get in touch with the campaign.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-cream-50/85 leading-relaxed">
              Questions, story ideas, event invitations, or just want to say
              hello? We'd love to hear from you.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-wide py-16 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <Reveal>
            <div className="rounded-2xl bg-white p-8 shadow-card">
              <div className="text-[11px] uppercase tracking-[0.22em] text-gold-600 font-semibold">
                Reach the team
              </div>
              <h2 className="mt-3 font-display text-2xl text-navy-900">
                Campaign HQ
              </h2>
              <dl className="mt-5 grid gap-4 text-sm">
                <div>
                  <dt className="text-navy-500 uppercase tracking-wider text-[10px]">
                    Email
                  </dt>
                  <dd className="mt-1">
                    <a
                      href="mailto:VoteBillPetersen@gmail.com"
                      className="text-navy-900 font-semibold hover:text-gold-600 transition"
                    >
                      VoteBillPetersen@gmail.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-navy-500 uppercase tracking-wider text-[10px]">
                    Election Day
                  </dt>
                  <dd className="mt-1 text-navy-900 font-semibold">
                    Tuesday, November 3, 2026
                  </dd>
                </div>
                <div>
                  <dt className="text-navy-500 uppercase tracking-wider text-[10px]">
                    Seat
                  </dt>
                  <dd className="mt-1 text-navy-900 font-semibold">
                    Clermont City Council · Seat 5
                  </dd>
                </div>
              </dl>
              <div className="mt-6 rounded-lg bg-cream-100 p-4 text-xs text-navy-700 leading-relaxed">
                For media inquiries, please include "Press" in the subject line.
                We respond to journalists as quickly as possible.
              </div>
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-3">
          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
