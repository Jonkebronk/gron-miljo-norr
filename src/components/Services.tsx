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
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21c-1.5 0-6-3.5-6-9 0-3.5 2.5-6 6-6s6 2.5 6 6c0 5.5-4.5 9-6 9z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V12" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 15c1-1 2-2.5 3-3"
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
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v18M12 3l-3 3M12 3l3 3M12 21l-3-3M12 21l3-3M3 12h18M3 12l3-3M3 12l3 3M21 12l-3-3M21 12l-3 3"
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
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.049.58.025 1.194-.14 1.743"
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
