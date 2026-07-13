import Image from "next/image";

const GALLERY_ITEMS = [
  {
    label: "Trädgårdsanläggning",
    alt: "Professionellt anlagd trädgård med gröna växter och blommor",
    src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&h=600&fit=crop&crop=center",
  },
  {
    label: "Plattsättning",
    alt: "Stenlagd gångväg med markplattor i trädgårdsmiljö",
    src: "https://images.unsplash.com/photo-1572025442646-866d16c84a54?w=800&h=600&fit=crop&crop=center",
  },
  {
    label: "Snöröjning",
    alt: "Snöröjning av väg under vintern",
    src: "https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=800&h=600&fit=crop&crop=center",
  },
  {
    label: "Markarbete",
    alt: "Markarbete med grävmaskin vid anläggningsprojekt",
    src: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&h=600&fit=crop&crop=center",
  },
  {
    label: "Plantering",
    alt: "Nyplanterade blommor och växter i trädgårdsrabatt",
    src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop&crop=center",
  },
  {
    label: "Utemiljö",
    alt: "Färdig utemiljö med trädgård och gräsmatta",
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop&crop=center",
  },
];

export function Gallery() {
  return (
    <section id="bilder" className="bg-white px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-forest-900 md:text-4xl">
          Bilder &amp; Referenser
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-600">
          Ett urval av projekt som visar vad vi kan hjälpa dig med.
        </p>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.label}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <span className="absolute bottom-3 left-3 text-sm font-medium text-white">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
