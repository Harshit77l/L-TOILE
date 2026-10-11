import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-linen bg-[#f5f3ef]">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-4 px-4 py-8 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="text-[12px] tracking-wide text-taupe">
          <span className="font-serif text-[16px] tracking-[0.12em] text-ink">
            L&apos;ÉTOILE
          </span>
          <span className="mx-3">·</span>
          Curated Wedding Design & Production Platform
        </p>
        <div className="flex flex-wrap gap-5 text-[12px] text-taupe">
          <Link href="/moodboard" className="hover:text-ink">
            Moodboard
          </Link>
          <Link href="/checkout" className="hover:text-ink">
            Checkout
          </Link>
          <Link href="/admin" className="hover:text-ink">
            Client Portal
          </Link>
        </div>
      </div>
    </footer>
  );
}
