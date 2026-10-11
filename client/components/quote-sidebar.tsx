"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { RequestBuildModal } from "@/components/request-build-modal";
import { RollingNumber } from "@/components/rolling-number";
import { Button } from "@/components/ui/button";
import { useQuote } from "@/lib/quote-context";
import { cn, formatCurrency } from "@/lib/utils";

export function QuoteSidebar({
  onClose,
  className,
}: {
  onClose?: () => void;
  className?: string;
}) {
  const { lines, increment, decrement, removeItem, total, count } = useQuote();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <aside
        className={cn(
          "glass-panel flex h-full flex-col overflow-hidden rounded-[2rem]",
          className,
        )}
      >
        <div className="flex items-center justify-between border-b border-linen px-6 py-5">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-taupe">
              Line Items
            </p>
            <h2 className="font-serif text-[22px] text-ink">Sticky Quote Builder</h2>
          </div>
          {onClose ? (
            <button
              onClick={onClose}
              aria-label="Close quote"
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-taupe hover:bg-secondary hover:text-ink"
            >
              <X className="h-4 w-4" />
            </button>
          ) : null}
        </div>

        <div className="relative flex-1 space-y-4 overflow-y-auto px-5 py-5">
          <div
            data-quote-dock
            className="pointer-events-none absolute right-6 top-5 h-12 w-12"
          />
          <AnimatePresence initial={false}>
            {lines.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="rounded-3xl border border-dashed border-linen bg-white/50 px-5 py-10 text-center"
              >
                <p className="font-serif text-xl text-ink">Your board is empty</p>
                <p className="mt-2 text-sm text-taupe">
                  Select the styles you love. Each piece will land here with a live estimate.
                </p>
              </motion.div>
            ) : (
              lines.map((line) => (
                <motion.div
                  layout
                  key={line.id}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 24 }}
                  className="flex gap-3 rounded-2xl bg-white/80 p-2.5"
                >
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl">
                    <img
                      src={line.imageUrl}
                      alt={line.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="truncate text-[14px] font-medium text-ink">
                        {line.title}
                      </p>
                      <button
                        onClick={() => removeItem(line.id)}
                        aria-label={`Remove ${line.title}`}
                        className="cursor-pointer text-taupe hover:text-ink"
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <p className="text-[13px] text-taupe">{formatCurrency(line.price)}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => decrement(line.id)}
                          aria-label="Decrease quantity"
                          className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-linen"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-6 text-center text-sm tabular-nums">
                          {line.quantity}
                        </span>
                        <button
                          onClick={() => increment(line.id)}
                          aria-label="Increase quantity"
                          className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-linen"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <span className="text-[13px] tabular-nums text-ink">
                        ×{line.quantity}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>

        <div className="border-t border-linen bg-white/70 px-6 py-5">
          <div className="mb-1 flex items-center justify-between text-[13px] text-taupe">
            <span>Total items</span>
            <span className="tabular-nums">{count}</span>
          </div>
          <div className="mb-4 flex items-end justify-between gap-3">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-taupe">
              Total Estimate
            </p>
            <RollingNumber
              value={total}
              className="font-serif text-[36px] leading-none tracking-tight text-ink md:text-[40px]"
            />
          </div>
          <Button
            className="w-full"
            disabled={lines.length === 0}
            onClick={() => setModalOpen(true)}
          >
            Request This Build
          </Button>
          <Link
            href="/checkout"
            className="mt-3 block text-center text-[12px] font-medium uppercase tracking-[0.14em] text-taupe hover:text-ink"
          >
            Review checkout
          </Link>
        </div>
      </aside>
      <RequestBuildModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
}
