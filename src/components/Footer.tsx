import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-forest-900 px-4 py-8 text-sm text-white/80 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center md:flex-row md:justify-between md:text-left">
        <p>&copy; {new Date().getFullYear()} Grön Miljö Norr</p>
        <p>
          <Link
            href="/integritetspolicy"
            className="underline transition-colors hover:text-white"
          >
            Integritetspolicy
          </Link>
          <span className="mx-2">·</span>
          Inga spårningskakor
        </p>
        <p>
          Webbplats av{" "}
          <span className="font-medium text-white">Nortropic</span>
        </p>
      </div>
    </footer>
  );
}
