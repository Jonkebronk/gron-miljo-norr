import Image from "next/image";
import { SITE_CONFIG } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative min-h-[70vh] px-4 py-20 md:min-h-[80vh] md:px-8 md:py-32">
      <Image
        src="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1920&h=1080&fit=crop&crop=center"
        alt="Grön trädgårdsmiljö"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-white/80" />

      <div className="relative mx-auto max-w-6xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-forest-900 md:text-6xl">
          Grön Miljö Norr
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 md:text-xl">
          Professionell trädgårdsanläggning, markarbeten och snöröjning i Luleå
        </p>
        <p className="mt-6 text-lg font-semibold text-forest-700 md:text-xl">
          <a href={SITE_CONFIG.phoneHref} className="hover:underline">
            {SITE_CONFIG.phone}
          </a>
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={SITE_CONFIG.phoneHref}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-forest-700 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-forest-900 sm:w-auto"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Ring nu
          </a>
          <a
            href="#kontakt"
            className="inline-flex w-full items-center justify-center rounded-lg border-2 border-forest-700 px-8 py-4 text-lg font-semibold text-forest-700 transition-colors hover:bg-forest-700 hover:text-white sm:w-auto"
          >
            Kontakta oss
          </a>
        </div>
      </div>
    </section>
  );
}
