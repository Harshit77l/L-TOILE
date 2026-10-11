"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { useQuote } from "@/lib/quote-context";

const NAV = [
  { href: "/", label: "Inspiration" },
  { href: "/moodboard", label: "Moodboard" },
  { href: "/checkout", label: "Checkout" },
  { href: "/admin", label: "Atelier" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { count } = useQuote();

  return (
    <header className="sticky top-0 z-40 border-b border-linen bg-[rgba(251,249,245,0.90)] backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1600px] items-center gap-6 px-4 md:px-8">
        <Link href="/" className="shrink-0 leading-tight">
          <span className="font-serif text-[22px] tracking-[0.18em] text-ink">
            L&apos;ÉTOILE
          </span>
          <span className="mt-0.5 block text-[9px] font-semibold uppercase tracking-[0.28em] text-taupe">
            Atelier & Curation
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-[11px] font-semibold uppercase tracking-[0.16em] transition",
                  active ? "text-ink" : "text-taupe hover:text-ink",
                )}
              >
                {item.label}
                {active ? (
                  <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-gold" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <div className="hidden h-10 items-center gap-2 rounded-full border border-linen bg-white px-4 text-taupe md:flex">
            <Search className="h-3.5 w-3.5" />
            <span className="text-[12px]">Search arches, chandeliers…</span>
          </div>
          <Link
            href="/admin/login"
            className="hidden px-3 text-[12px] font-medium text-taupe transition hover:text-ink sm:block"
          >
            Log In
          </Link>
          <Link
            href="/moodboard"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-ink px-5 text-[13px] font-medium text-white transition hover:bg-gold"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Moodboard-to-Quote
            {count > 0 ? (
              <span className="ml-1 rounded-full bg-white/15 px-2 py-0.5 text-[11px]">
                {count}
              </span>
            ) : null}
          </Link>
          <Link
            href="/admin"
            aria-label="Admin atelier"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-linen bg-white text-ink"
          >
            <User className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
