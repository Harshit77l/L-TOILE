"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus, Search } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { CATEGORIES } from "@/lib/catalog";
import type { CatalogItem, ItemCategory } from "@/lib/types";
import { useQuote } from "@/lib/quote-context";
import { cn, formatCurrency } from "@/lib/utils";

const HEIGHTS: Record<CatalogItem["height"], string> = {
  short: "h-[220px] md:h-[240px]",
  medium: "h-[280px] md:h-[320px]",
  tall: "h-[360px] md:h-[420px]",
};

export function MasonryBoard({ items }: { items: CatalogItem[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ItemCategory | "All">("All");
  const { addItem, lines } = useQuote();
  const selectedIds = useMemo(() => lines.map((l) => l.id), [lines]);

  const filtered = useMemo(() => {
    return items.filter((item) => {
      const matchCat = category === "All" || item.category === category;
      const q = query.trim().toLowerCase();
      const matchQ =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [items, category, query]);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-5">
        <div>
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
            Seasonal curations · edition no. 24
          </p>
          <h1 className="max-w-xl font-serif text-[32px] leading-[1.15] text-ink md:text-[40px]">
            Select the styles you love to build your custom wedding estimate.
          </h1>
        </div>
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <label className="flex h-11 flex-1 items-center gap-2 rounded-full border border-linen bg-white px-4">
            <Search className="h-4 w-4 text-taupe" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search florals, chairs, lighting…"
              className="w-full bg-transparent text-[14px] outline-none placeholder:text-taupe"
            />
          </label>
        </div>
        <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
          {(["All", ...CATEGORIES] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={cn(
                "h-10 shrink-0 cursor-pointer rounded-full px-5 text-[13px] font-medium transition",
                category === cat
                  ? "bg-ink text-white"
                  : "bg-white text-taupe hover:text-ink",
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-[2rem] border border-dashed border-linen bg-white px-6 py-16 text-center">
          <p className="font-serif text-2xl">No pieces match this search</p>
          <p className="mt-2 text-taupe">Try another category or clear the query.</p>
        </div>
      ) : (
        <div className="masonry">
          <AnimatePresence>
            {filtered.map((item, index) => (
              <MasonryCard
                key={item.id}
                item={item}
                selected={selectedIds.includes(item.id)}
                delay={index * 0.04}
                onAdd={(rect) => addItem(item, rect)}
              />
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}

function MasonryCard({
  item,
  selected,
  delay,
  onAdd,
}: {
  item: CatalogItem;
  selected: boolean;
  delay: number;
  onAdd: (from: DOMRect) => void;
}) {
  const imgRef = useRef<HTMLImageElement>(null);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="masonry-item group relative overflow-hidden rounded-[1.75rem] bg-white"
    >
      <div className={cn("relative overflow-hidden", HEIGHTS[item.height])}>
        <img
          ref={imgRef}
          src={item.imageUrl}
          alt={item.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:brightness-90"
        />
        <div className="absolute left-3 top-3">
          <Badge>{item.category}</Badge>
        </div>
        {selected ? (
          <div className="absolute right-3 top-3">
            <Badge variant="gold">In quote</Badge>
          </div>
        ) : null}
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-2 bg-gradient-to-t from-black/55 via-black/20 to-transparent px-4 pb-5 pt-16 opacity-100 transition md:opacity-0 md:group-hover:opacity-100">
          <p className="w-full text-left font-serif text-lg text-white">{item.title}</p>
          <button
            onClick={() => {
              const rect = imgRef.current?.getBoundingClientRect();
              if (rect) onAdd(rect);
            }}
            className="flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-white/95 text-[13px] font-medium text-ink shadow-lg backdrop-blur-sm transition hover:bg-white"
          >
            <Plus className="h-4 w-4" />
            Add to Quote ({formatCurrency(item.price)})
          </button>
        </div>
      </div>
    </motion.article>
  );
}
