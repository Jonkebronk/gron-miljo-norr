import type { WithContext, LocalBusiness } from "schema-dts";
import { SITE_CONFIG } from "./site-config";

export const localBusinessSchema: WithContext<LocalBusiness> = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Grön Miljö Norr",
  description:
    "Professionell trädgårdsanläggning, markarbeten och snöröjning i Luleå.",
  telephone: SITE_CONFIG.phoneHref.replace("tel:", ""),
  email: SITE_CONFIG.email,
  url: SITE_CONFIG.url,
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
