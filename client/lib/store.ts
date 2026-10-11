import { SEED_ITEMS, SEED_QUOTES } from "@/lib/catalog";
import type { CatalogItem, QuoteRecord, QuoteStatus } from "@/lib/types";

const ITEMS_KEY = "letoile-items";
const QUOTES_KEY = "letoile-quotes";
const AUTH_KEY = "letoile-admin";

function canUseStorage() {
  return typeof window !== "undefined";
}

function readJson<T>(key: string, fallback: T): T {
  if (!canUseStorage()) return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function writeJson<T>(key: string, value: T) {
  if (!canUseStorage()) return;
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function getItems(): CatalogItem[] {
  const items = readJson<CatalogItem[]>(ITEMS_KEY, []);
  if (items.length === 0) {
    writeJson(ITEMS_KEY, SEED_ITEMS);
    return SEED_ITEMS;
  }
  return items;
}

export function saveItems(items: CatalogItem[]) {
  writeJson(ITEMS_KEY, items);
}

export function upsertItem(item: CatalogItem) {
  const items = getItems();
  const index = items.findIndex((entry) => entry.id === item.id);
  if (index >= 0) {
    items[index] = item;
  } else {
    items.unshift(item);
  }
  saveItems(items);
  return items;
}

export function deleteItem(id: string) {
  const items = getItems().filter((item) => item.id !== id);
  saveItems(items);
  return items;
}

export function getQuotes(): QuoteRecord[] {
  const quotes = readJson<QuoteRecord[]>(QUOTES_KEY, []);
  if (quotes.length === 0) {
    writeJson(QUOTES_KEY, SEED_QUOTES);
    return SEED_QUOTES;
  }
  return quotes;
}

export function saveQuote(quote: QuoteRecord) {
  const quotes = getQuotes();
  quotes.unshift(quote);
  writeJson(QUOTES_KEY, quotes);
  return quotes;
}

export function updateQuoteStatus(id: string, status: QuoteStatus) {
  const quotes = getQuotes().map((quote) =>
    quote.id === id ? { ...quote, status } : quote,
  );
  writeJson(QUOTES_KEY, quotes);
  return quotes;
}

export function isAdminAuthed() {
  if (!canUseStorage()) return false;
  return window.localStorage.getItem(AUTH_KEY) === "true";
}

export function setAdminAuthed(value: boolean) {
  if (!canUseStorage()) return;
  if (value) window.localStorage.setItem(AUTH_KEY, "true");
  else window.localStorage.removeItem(AUTH_KEY);
}
