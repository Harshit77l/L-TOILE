import Link from "next/link";
import { ArrowRight } from "lucide-react";

const LOOKS = [
  {
    title: "Venetian Splendor",
    tag: "Gilded Romance",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Provence Limestone",
    tag: "Coastal Provence",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "English Garden Reverie",
    tag: "Enchanted Greenhouse",
    image:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1400&q=80",
  },
];

export default function Home() {
  return (
    <div>
      <section className="mx-auto max-w-[1440px] px-4 pb-8 pt-16 text-center md:px-8 md:pt-24">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-taupe">
            Seasonal curations · edition no. 24
          </span>
        </div>
        <h1 className="mx-auto max-w-4xl font-serif text-[38px] leading-[1.08] tracking-tight text-ink md:text-[68px]">
          The Inspiration Atelier
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-7 text-taupe">
          A Pinterest-grade moodboard that becomes a live quote. Click the pieces you love.
          Watch the estimate assemble itself.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/moodboard"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-ink px-7 text-[13px] font-medium text-white transition hover:bg-gold"
          >
            Load into Moodboard Builder
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/checkout"
            className="inline-flex h-12 items-center rounded-full border border-linen bg-white px-7 text-[13px] font-medium text-ink hover:border-gold"
          >
            Review current quote
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 pb-20 md:px-8">
        <div className="overflow-hidden rounded-[2.5rem] bg-white p-5 shadow-[0_4px_20px_-2px_rgba(20,20,20,0.04)] md:p-8">
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
            <div className="relative h-[380px] overflow-hidden rounded-[1.5rem] lg:col-span-7 lg:h-[480px]">
              <img
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1600&q=80"
                alt="Grand chateau wedding reception with chandeliers and ivory garden roses"
                className="h-full w-full object-cover"
              />
              <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] backdrop-blur-md">
                Spotlight 01
              </div>
              <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-[#141414]/85 p-4 text-white backdrop-blur-md">
                <p className="font-serif text-xl">Château de Vaux-le-Vicomte</p>
                <p className="text-[12px] text-white/70">Grand Orangery · 220 Guests</p>
              </div>
            </div>
            <div className="flex flex-col justify-center lg:col-span-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
                Haute couture curation
              </p>
              <h2 className="mt-3 font-serif text-[32px] leading-tight text-ink md:text-[40px]">
                From moodboard to verified production
              </h2>
              <p className="mt-4 text-[15px] leading-6 text-taupe">
                Interior designers, wedding planners, and landscapers stop sending a Pinterest
                board plus an ugly spreadsheet. Clients tap what they love. The quote writes itself.
              </p>
              <Link
                href="/moodboard"
                className="mt-8 inline-flex h-12 w-fit items-center rounded-full bg-ink px-7 text-[13px] font-medium text-white transition hover:bg-gold"
              >
                Proceed to proposal
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {LOOKS.map((look) => (
            <Link
              key={look.title}
              href="/moodboard"
              className="group overflow-hidden rounded-[2rem] bg-white p-3 shadow-[0_4px_20px_-2px_rgba(20,20,20,0.04)]"
            >
              <div className="h-64 overflow-hidden rounded-[1.5rem]">
                <img
                  src={look.image}
                  alt={look.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="px-3 pb-4 pt-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-taupe">
                  {look.tag}
                </p>
                <h3 className="mt-1 font-serif text-[22px] text-ink">{look.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
