"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import type { CatalogItem, QuoteCartItem } from "@/lib/types";

interface FlyingPayload {
  id: string;
  imageUrl: string;
  from: DOMRect;
}

interface QuoteContextValue {
  lines: QuoteCartItem[];
  flying: FlyingPayload | null;
  addItem: (item: CatalogItem, from?: DOMRect | null) => void;
  removeItem: (id: string) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  clear: () => void;
  clearFlying: () => void;
  total: number;
  count: number;
}

const QuoteContext = createContext<QuoteContextValue | null>(null);

export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<QuoteCartItem[]>([]);
  const [flying, setFlying] = useState<FlyingPayload | null>(null);

  const addItem = useCallback((item: CatalogItem, from?: DOMRect | null) => {
    if (from) {
      setFlying({
        id: `${item.id}-${Date.now()}`,
        imageUrl: item.imageUrl,
        from,
      });
    }
    setLines((prev) => {
      const existing = prev.find((line) => line.id === item.id);
      if (existing) {
        return prev.map((line) =>
          line.id === item.id
            ? { ...line, quantity: line.quantity + 1 }
            : line,
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((id: string) => {
    setLines((prev) => prev.filter((line) => line.id !== id));
  }, []);

  const increment = useCallback((id: string) => {
    setLines((prev) =>
      prev.map((line) =>
        line.id === id ? { ...line, quantity: line.quantity + 1 } : line,
      ),
    );
  }, []);

  const decrement = useCallback((id: string) => {
    setLines((prev) =>
      prev.flatMap((line) => {
        if (line.id !== id) return [line];
        if (line.quantity <= 1) return [];
        return [{ ...line, quantity: line.quantity - 1 }];
      }),
    );
  }, []);

  const clear = useCallback(() => setLines([]), []);
  const clearFlying = useCallback(() => setFlying(null), []);

  const total = useMemo(
    () => lines.reduce((sum, line) => sum + line.price * line.quantity, 0),
    [lines],
  );
  const count = useMemo(
    () => lines.reduce((sum, line) => sum + line.quantity, 0),
    [lines],
  );

  const value = useMemo(
    () => ({
      lines,
      flying,
      addItem,
      removeItem,
      increment,
      decrement,
      clear,
      clearFlying,
      total,
      count,
    }),
    [
      lines,
      flying,
      addItem,
      removeItem,
      increment,
      decrement,
      clear,
      clearFlying,
      total,
      count,
    ],
  );

  return (
    <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>
  );
}

export function useQuote() {
  const ctx = useContext(QuoteContext);
  if (!ctx) {
    throw new Error("useQuote must be used within QuoteProvider");
  }
  return ctx;
}
