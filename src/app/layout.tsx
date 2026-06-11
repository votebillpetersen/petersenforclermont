import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: SITE_URL,
  title: {
    default:
      "Re-Elect Bill Petersen | Clermont City Council Seat 5 | November 3, 2026",
    template: "%s",
  },
  description:
    "Re-elect William Bill Petersen for Clermont City Council Seat 5. Protecting our quality of life, cutting taxes, and keeping Clermont the city we love. Vote November 3, 2026.",
  keywords: [
    "Bill Petersen",
    "William Bill Petersen",
    "Clermont City Council",
    "Clermont City Council Seat 5",
    "Clermont Florida",
    "Clermont elections",
    "November 3 2026",
    "Re-Elect Bill Petersen",
    "Petersen for Clermont",
    "Protecting Our Quality of Life",
  ],
  authors: [{ name: "William Bill Petersen" }],
  creator: "Petersen for Clermont",
  publisher: "Petersen for Clermont",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Re-Elect Bill Petersen for Clermont City Council Seat 5",
    title:
      "Re-Elect Bill Petersen | Clermont City Council Seat 5 | November 3, 2026",
    description:
      "Re-elect William Bill Petersen for Clermont City Council Seat 5. Protecting our quality of life, cutting taxes, and keeping Clermont the city we love. Vote November 3, 2026.",
    url: "/",
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
    title:
      "Re-Elect Bill Petersen | Clermont City Council Seat 5 | November 3, 2026",
    description:
      "Re-elect William Bill Petersen for Clermont City Council Seat 5. Vote November 3, 2026.",
    images: ["/bill-petersen.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-cream-50 text-navy-900`}
      >
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
