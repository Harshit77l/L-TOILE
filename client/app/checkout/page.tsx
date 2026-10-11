"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Minus, Plus, Trash2 } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { RequestBuildModal } from "@/components/request-build-modal";
import { RollingNumber } from "@/components/rolling-number";
import { Button } from "@/components/ui/button";
import { useQuote } from "@/lib/quote-context";
import { formatCurrency } from "@/lib/utils";

function CheckoutInner() {
  const search = useSearchParams();
  const requested = search.get("requested") === "1";
  const { lines, increment, decrement, removeItem, clear, total, count } =
    useQuote();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 md:px-8">
      <Link
        href="/moodboard"
        className="mb-8 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-taupe hover:text-ink"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back to moodboard
      </Link>

      {requested ? (
        <div className="mb-8 flex items-start gap-3 rounded-[1.5rem] border border-linen bg-white px-5 py-4">
          <CheckCircle2 className="mt-0.5 h-5 w-5 text-gold" />
          <div>
            <p className="font-medium text-ink">Inquiry received</p>
            <p className="text-sm text-taupe">
              Our atelier will confirm availability within 24 hours. You can still refine this build below.
            </p>
          </div>
        </div>
      ) : null}

      <div className="mb-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
          Checkout
        </p>
        <h1 className="mt-2 font-serif text-[40px] leading-tight text-ink">Review your build</h1>
        <p className="mt-2 max-w-xl text-taupe">
          Quantities, subtotals, and a formal request — without leaving the visual language of the board.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
        <div className="space-y-4">
          {lines.length === 0 ? (
            <div className="rounded-[2rem] border border-dashed border-linen bg-white px-6 py-16 text-center">
              <p className="font-serif text-2xl">Nothing in this build yet</p>
              <Link href="/moodboard" className="mt-4 inline-block text-sm text-gold">
                Return to the moodboard
              </Link>
            </div>
          ) : (
            <AnimatePresence>
              {lines.map((line) => (
                <motion.div
                  layout
                  key={line.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-4 rounded-[1.5rem] bg-white p-4"
                >
                  <img
                    src={line.imageUrl}
                    alt={line.title}
                    className="h-24 w-24 rounded-2xl object-cover"
                  />
                  <div className="flex min-w-0 flex-1 flex-col justify-between">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-taupe">
                          {line.category}
                        </p>
                        <h2 className="font-serif text-xl text-ink">{line.title}</h2>
                      </div>
                      <button
                        onClick={() => removeItem(line.id)}
                        aria-label={`Remove ${line.title}`}
                        className="cursor-pointer text-taupe hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => decrement(line.id)}
                          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-linen"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center tabular-nums">{line.quantity}</span>
                        <button
                          onClick={() => increment(line.id)}
                          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-linen"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <p className="tabular-nums text-ink">
                        {formatCurrency(line.price * line.quantity)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>

        <aside className="h-fit rounded-[2rem] bg-white p-6 shadow-[0_4px_20px_-2px_rgba(20,20,20,0.04)]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-taupe">
            Estimate summary
          </p>
          <div className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between text-taupe">
              <span>Pieces</span>
              <span className="tabular-nums">{count}</span>
            </div>
            <div className="flex justify-between text-taupe">
              <span>Production hold</span>
              <span>Complimentary</span>
            </div>
          </div>
          <div className="mt-6 flex items-end justify-between border-t border-linen pt-5">
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-taupe">
              Total
            </span>
            <RollingNumber value={total} className="font-serif text-[36px] text-ink" />
          </div>
          <Button
            className="mt-6 w-full"
            disabled={lines.length === 0}
            onClick={() => setModalOpen(true)}
          >
            Request This Build
          </Button>
          {lines.length > 0 ? (
            <button
              onClick={clear}
              className="mt-4 w-full cursor-pointer text-center text-[12px] uppercase tracking-[0.14em] text-taupe hover:text-ink"
            >
              Clear board
            </button>
          ) : null}
        </aside>
      </div>
      <RequestBuildModal open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense>
      <CheckoutInner />
    </Suspense>
  );
}
