import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://gron-miljo-norr.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://gron-miljo-norr.vercel.app/integritetspolicy",
      lastModified: new Date(),
    },
  ];
}
