import { SITE_CONFIG } from "@/lib/site-config";

export function StickyCallButton() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <a
        href={SITE_CONFIG.phoneHref}
        className="flex items-center justify-center gap-2 bg-forest-700 px-4 py-4 text-base font-semibold text-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] transition-colors hover:bg-forest-900"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
        Ring {SITE_CONFIG.phone}
      </a>
    </div>
  );
}
