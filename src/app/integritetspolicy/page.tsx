import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Integritetspolicy – Grön Miljö Norr",
  description:
    "Läs om hur Grön Miljö Norr hanterar dina personuppgifter i enlighet med GDPR.",
};

export default function IntegritetspolicyPage() {
  return (
    <section className="bg-white px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-1 text-sm font-medium text-forest-700 hover:underline"
        >
          &larr; Tillbaka till startsidan
        </Link>

        <h1 className="text-3xl font-bold text-forest-900 md:text-4xl">
          Integritetspolicy
        </h1>

        <div className="mt-8 space-y-8 text-lg leading-relaxed text-neutral-600">
          <div>
            <h2 className="text-xl font-semibold text-forest-900">
              Personuppgiftsansvarig
            </h2>
            <p className="mt-2">
              Grön Miljö Norr ansvarar för behandlingen av de personuppgifter
              som samlas in via denna webbplats. Vid frågor om vår
              personuppgiftshantering, kontakta oss på{" "}
              <a
                href="mailto:peter@test-gronmiljo.se"
                className="text-forest-700 hover:underline"
              >
                peter@test-gronmiljo.se
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-forest-900">
              Vilka uppgifter samlar vi in?
            </h2>
            <p className="mt-2">
              Via kontaktformuläret på webbplatsen samlar vi in följande
              uppgifter som du själv anger:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Namn</li>
              <li>Telefonnummer</li>
              <li>E-postadress</li>
              <li>Ditt meddelande</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-forest-900">
              Varför behandlar vi dina uppgifter?
            </h2>
            <p className="mt-2">
              Vi behandlar dina personuppgifter för att kunna besvara din
              förfrågan och eventuellt ta fram en offert. Den rättsliga grunden
              för behandlingen är ditt samtycke som du ger genom att skicka in
              formuläret, samt vårt berättigade intresse att hantera
              kundkontakter.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-forest-900">
              Hur länge sparar vi dina uppgifter?
            </h2>
            <p className="mt-2">
              Vi sparar dina uppgifter så länge det krävs för att hantera din
              förfrågan, dock som längst i 12 månader efter senaste kontakt.
              Därefter raderas uppgifterna.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-forest-900">
              Kakor (cookies)
            </h2>
            <p className="mt-2">
              Denna webbplats använder inga spårningskakor eller
              analysverktyg. Inga tredjepartscookies placeras på din enhet.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-forest-900">
              Dina rättigheter
            </h2>
            <p className="mt-2">
              Du har rätt att begära tillgång till, rättelse av eller radering
              av dina personuppgifter. Du har också rätt att återkalla ditt
              samtycke och att lämna klagomål till Integritetsskyddsmyndigheten
              (IMY). Kontakta oss på{" "}
              <a
                href="mailto:peter@test-gronmiljo.se"
                className="text-forest-700 hover:underline"
              >
                peter@test-gronmiljo.se
              </a>{" "}
              för att utöva dina rättigheter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
