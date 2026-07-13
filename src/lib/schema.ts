import type { WithContext, LocalBusiness } from "schema-dts";

export const localBusinessSchema: WithContext<LocalBusiness> = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Grön Miljö Norr",
  description:
    "Professionell trädgårdsanläggning, markarbeten och snöröjning i Luleå.",
  telephone: "+46705555555",
  email: "peter@test-gronmiljo.se",
  areaServed: {
    "@type": "City",
    name: "Luleå",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Luleå",
    addressCountry: "SE",
  },
};
