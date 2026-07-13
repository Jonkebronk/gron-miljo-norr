import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCallButton } from "@/components/StickyCallButton";
import { localBusinessSchema } from "@/lib/schema";
import { SITE_CONFIG } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: "Grön Miljö Norr – Trädgårdsanläggning & Markarbeten i Luleå",
  description:
    "Grön Miljö Norr erbjuder professionell trädgårdsanläggning, markarbeten och snöröjning i Luleå. Kontakta oss för en kostnadsfri offert.",
  keywords: [
    "trädgårdsanläggning",
    "markarbeten",
    "snöröjning",
    "Luleå",
    "trädgård",
  ],
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    title: "Grön Miljö Norr – Trädgårdsanläggning & Markarbeten i Luleå",
    description:
      "Professionell trädgårdsanläggning, markarbeten och snöröjning i Luleå.",
    url: SITE_CONFIG.url,
    locale: "sv_SE",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Grön Miljö Norr – Trädgårdsanläggning i Luleå",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${inter.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCallButton />
      </body>
    </html>
  );
}
