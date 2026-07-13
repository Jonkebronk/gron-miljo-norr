"use client";

import { useState } from "react";
import { SITE_CONFIG } from "@/lib/site-config";

const NAV_LINKS = [
  { href: "#tjanster", label: "Tjänster" },
  { href: "#om-oss", label: "Om oss" },
  { href: "#bilder", label: "Bilder" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
        <a href="/" className="text-lg font-bold text-forest-700">
          Grön Miljö Norr
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-1 text-sm font-medium text-neutral-600 transition-colors hover:text-forest-700"
            >
              {link.label}
            </a>
          ))}
          <a
            href={SITE_CONFIG.phoneHref}
            className="rounded-lg bg-forest-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-forest-900"
          >
            Ring nu
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-lg text-neutral-600 transition-colors hover:bg-neutral-50 md:hidden"
          aria-label={menuOpen ? "Stäng meny" : "Öppna meny"}
          aria-expanded={menuOpen}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-neutral-200 bg-white px-4 pb-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-base font-medium text-neutral-600 transition-colors hover:text-forest-700"
            >
              {link.label}
            </a>
          ))}
          <a
            href={SITE_CONFIG.phoneHref}
            className="mt-2 block rounded-lg bg-forest-700 px-4 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-forest-900"
          >
            Ring {SITE_CONFIG.phone}
          </a>
        </nav>
      )}
    </header>
  );
}
