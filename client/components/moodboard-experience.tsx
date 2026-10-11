"use client";

import { useEffect, useState } from "react";
import { FlyingThumbnail } from "@/components/flying-thumbnail";
import { MasonryBoard } from "@/components/masonry-board";
import { QuoteSidebar } from "@/components/quote-sidebar";
import { useQuote } from "@/lib/quote-context";
import { getItems } from "@/lib/store";
import { RollingNumber } from "@/components/rolling-number";
import type { CatalogItem } from "@/lib/types";

export function MoodboardExperience() {
  const [items, setItems] = useState<CatalogItem[]>([]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, total } = useQuote();

  useEffect(() => {
    const id = window.setTimeout(() => setItems(getItems()), 0);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <div className="mx-auto flex max-w-[1600px] gap-6 px-4 py-8 md:px-8">
      <div className="min-w-0 flex-[7]">
        <MasonryBoard items={items} />
      </div>
      <div className="sticky top-[96px] hidden h-[calc(100dvh-120px)] w-[min(32%,380px)] flex-[3] lg:block">
        <QuoteSidebar className="h-full" />
      </div>
      <FlyingThumbnail />

      <button
        onClick={() => setMobileOpen(true)}
        className="fixed bottom-6 left-1/2 z-40 flex h-14 -translate-x-1/2 cursor-pointer items-center gap-4 rounded-full bg-ink px-6 text-white shadow-[0_12px_32px_-4px_rgba(20,20,20,0.28)] lg:hidden"
      >
        <span className="text-[13px] font-medium">View Quote</span>
        <span className="rounded-full bg-white/15 px-2 py-0.5 text-[12px]">{count}</span>
        <RollingNumber value={total} className="font-serif text-lg" />
      </button>

      {mobileOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            className="absolute inset-0 bg-[#141414]/35 backdrop-blur-[4px]"
            onClick={() => setMobileOpen(false)}
            aria-label="Close quote overlay"
          />
          <div className="absolute inset-x-3 bottom-3 top-16">
            <QuoteSidebar className="h-full" onClose={() => setMobileOpen(false)} />
          </div>
        </div>
      ) : null}
    </div>
  );
}
