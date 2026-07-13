import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 text-center">
      <h1 className="text-6xl font-bold text-forest-700">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-forest-900">
        Sidan kunde inte hittas
      </h2>
      <p className="mt-3 max-w-md text-neutral-600">
        Sidan du letar efter finns inte eller har flyttats. Gå tillbaka till
        startsidan eller ring oss direkt.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg bg-forest-700 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-forest-900"
        >
          Till startsidan
        </Link>
        <a
          href="tel:+46705555555"
          className="inline-flex items-center justify-center rounded-lg border-2 border-forest-700 px-6 py-3 text-base font-semibold text-forest-700 transition-colors hover:bg-forest-700 hover:text-white"
        >
          Ring 070-555 55 55
        </a>
      </div>
    </section>
  );
}
