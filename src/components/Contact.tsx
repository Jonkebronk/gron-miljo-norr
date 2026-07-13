"use client";

import { useState, type FormEvent } from "react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: Connect to form service (Server Action, Formspree, etc.)
    setSubmitted(true);
  }

  return (
    <section id="kontakt" className="bg-forest-50 px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-forest-900 md:text-4xl">
          Kontakta oss
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-600">
          Hör av dig så berättar vi mer om hur vi kan hjälpa dig.
        </p>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          {/* Contact info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-forest-900">Telefon</h3>
              <a
                href="tel:+46705555555"
                className="mt-1 inline-block text-xl font-semibold text-forest-700 hover:underline"
              >
                070-555 55 55
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-forest-900">E-post</h3>
              <a
                href="mailto:peter@test-gronmiljo.se"
                className="mt-1 inline-block text-forest-700 hover:underline"
              >
                peter@test-gronmiljo.se
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-forest-900">Öppettider</h3>
              {/* TODO: bekräfta öppettider med kund */}
              <p className="mt-1 text-neutral-600">Mån–Fre 07:00–16:00</p>
            </div>
            <p className="text-neutral-600">
              Vi återkommer normalt inom 24 timmar.
            </p>
          </div>

          {/* Contact form */}
          <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <svg
                  className="h-12 w-12 text-forest-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="mt-4 text-lg font-semibold text-forest-900">
                  Tack för ditt meddelande!
                </p>
                <p className="mt-1 text-neutral-600">
                  Vi hör av oss så snart vi kan.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-neutral-900"
                  >
                    Namn
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full rounded-lg border border-neutral-200 px-4 py-3 text-neutral-900 placeholder:text-neutral-600/50 focus:border-forest-700 focus:ring-2 focus:ring-forest-700/20"
                    placeholder="Ditt namn"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-neutral-900"
                  >
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="mt-1 block w-full rounded-lg border border-neutral-200 px-4 py-3 text-neutral-900 placeholder:text-neutral-600/50 focus:border-forest-700 focus:ring-2 focus:ring-forest-700/20"
                    placeholder="070-000 00 00"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-900"
                  >
                    E-post
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full rounded-lg border border-neutral-200 px-4 py-3 text-neutral-900 placeholder:text-neutral-600/50 focus:border-forest-700 focus:ring-2 focus:ring-forest-700/20"
                    placeholder="din@epost.se"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-neutral-900"
                  >
                    Meddelande
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="mt-1 block w-full rounded-lg border border-neutral-200 px-4 py-3 text-neutral-900 placeholder:text-neutral-600/50 focus:border-forest-700 focus:ring-2 focus:ring-forest-700/20"
                    placeholder="Berätta om ditt projekt..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-forest-700 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-forest-900"
                >
                  Skicka meddelande
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
