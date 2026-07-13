const SERVICES = [
  {
    title: "Trädgårdsanläggning",
    description:
      "Vi skapar trädgårdar som passar just ditt hem. Från planering till färdig anläggning hjälper vi dig att förverkliga din drömträdgård – oavsett storlek.",
    icon: (
      <svg
        className="h-10 w-10 text-forest-700"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        {/* Flower/plant icon */}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
        />
      </svg>
    ),
  },
  {
    title: "Snöröjning",
    description:
      "Vintrarna i Luleå kräver pålitlig snöröjning. Vi ser till att dina ytor är säkra och framkomliga, hela vintern igenom.",
    icon: (
      <svg
        className="h-10 w-10 text-forest-700"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        {/* Snowflake icon */}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2v20m0-20l3 3m-3-3L9 5m3 17l3-3m-3 3l-3-3M2 12h20m-20 0l3-3m-3 3l3 3m17-3l-3-3m3 3l-3 3M5.636 5.636l2.121 2.121m8.486 8.486l2.121 2.121M18.364 5.636l-2.121 2.121M7.757 16.243l-2.121 2.121"
        />
      </svg>
    ),
  },
  {
    title: "Markarbeten",
    description:
      "Dränering, schaktning, plattsättning och andra markarbeten – vi har erfarenheten och maskinerna för att göra jobbet rätt.",
    icon: (
      <svg
        className="h-10 w-10 text-forest-700"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        {/* Excavator/digging icon */}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
        />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section id="tjanster" className="bg-white px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-forest-900 md:text-4xl">
          Våra tjänster
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-600">
          Vi erbjuder ett brett utbud av tjänster för att skapa och underhålla
          din utemiljö i Luleå.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-neutral-200 bg-white p-8 transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-forest-50">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-forest-900">
                {service.title}
              </h3>
              <p className="mt-3 leading-relaxed text-neutral-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
