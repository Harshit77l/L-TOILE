"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useQuote } from "@/lib/quote-context";

export function FlyingThumbnail() {
  const { flying, clearFlying } = useQuote();
  const [target, setTarget] = useState<DOMRect | null>(null);

  useEffect(() => {
    if (!flying) return;
    const timer = window.setTimeout(() => {
      const els = Array.from(
        document.querySelectorAll<HTMLElement>("[data-quote-dock]"),
      );
      const el = els.find((node) => node.getClientRects().length > 0) ?? els[0];
      setTarget(el?.getBoundingClientRect() ?? null);
    }, 0);
    const clear = window.setTimeout(clearFlying, 700);
    return () => {
      window.clearTimeout(timer);
      window.clearTimeout(clear);
    };
  }, [flying, clearFlying]);

  return (
    <AnimatePresence>
      {flying && target ? (
        <motion.img
          key={flying.id}
          src={flying.imageUrl}
          alt=""
          initial={{
            position: "fixed",
            left: flying.from.left,
            top: flying.from.top,
            width: flying.from.width,
            height: flying.from.height,
            opacity: 1,
            borderRadius: 24,
            zIndex: 80,
          }}
          animate={{
            left: target.left,
            top: target.top,
            width: 48,
            height: 48,
            opacity: 0.2,
            borderRadius: 12,
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none fixed object-cover shadow-2xl"
          style={{ zIndex: 80 }}
        />
      ) : null}
    </AnimatePresence>
  );
}
