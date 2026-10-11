import type { CatalogItem, ItemCategory, QuoteRecord } from "@/lib/types";

const now = "2026-03-12T10:00:00.000Z";

export const CATEGORIES: ItemCategory[] = [
  "Florals",
  "Seating",
  "Lighting",
  "Tables",
  "Arches",
  "Tableware",
];

export const SEED_ITEMS: CatalogItem[] = [
  {
    id: "item-bohemian-arch",
    title: "Bohemian Floral Arch",
    price: 2500,
    category: "Arches",
    height: "tall",
    description:
      "A cathedral-scale wildflower arch of ivory garden roses, pampas, and trailing eucalyptus.",
    imageUrl:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80",
    createdAt: now,
  },
  {
    id: "item-velvet-chairs",
    title: "Velvet Dining Chairs",
    price: 85,
    category: "Seating",
    height: "medium",
    description:
      "Forest-emerald velvet banquet chairs with antique giltwood frames, priced per seat.",
    imageUrl:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80",
    createdAt: now,
  },
  {
    id: "item-crystal-chandeliers",
    title: "Crystal Chandeliers",
    price: 1800,
    category: "Lighting",
    height: "tall",
    description:
      "Three-tier Venetian crystal chandelier with warm candle-like illumination.",
    imageUrl:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    createdAt: now,
  },
  {
    id: "item-garden-centerpiece",
    title: "Blush Garden Centerpiece",
    price: 420,
    category: "Florals",
    height: "short",
    description:
      "Low, abundant arrangement of antique garden roses, peonies, and jasmine on linen.",
    imageUrl:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80",
    createdAt: now,
  },
  {
    id: "item-oak-table",
    title: "Vintage Oak Table",
    price: 800,
    category: "Tables",
    height: "medium",
    description:
      "Hand-hewn French oak trestle table, eight to twelve covers, with a honeyed patina.",
    imageUrl:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
    createdAt: now,
  },
  {
    id: "item-candelabra",
    title: "Gilded Louis XVI Candelabra",
    price: 240,
    category: "Lighting",
    height: "medium",
    description:
      "Five-arm antique gilt bronze candelabra with dripless ivory tapers.",
    imageUrl:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    createdAt: now,
  },
  {
    id: "item-wisteria-canopy",
    title: "Wisteria Crystal Canopy",
    price: 4200,
    category: "Lighting",
    height: "tall",
    description:
      "Overhead installation of silk wisteria, crystal droplets, and fairy lights.",
    imageUrl:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    createdAt: now,
  },
  {
    id: "item-place-setting",
    title: "Heirloom Place Setting",
    price: 65,
    category: "Tableware",
    height: "short",
    description:
      "Gold vermeil flatware, cut crystal, raw-edge Belgian flax, and calligraphy menu.",
    imageUrl:
      "https://images.unsplash.com/photo-1478146893571-ce65dcb7d2f8?auto=format&fit=crop&w=1200&q=80",
    createdAt: now,
  },
  {
    id: "item-bronze-plinth",
    title: "Bronze Floral Plinth",
    price: 1200,
    category: "Florals",
    height: "tall",
    description:
      "Patinated bronze pedestal with architectural white anthuriums and calla lilies.",
    imageUrl:
      "https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=1200&q=80",
    createdAt: now,
  },
  {
    id: "item-linen-canopy",
    title: "Raw Linen Canopy",
    price: 1600,
    category: "Arches",
    height: "medium",
    description:
      "Sun-bleached linen sail canopy with olive branches for terrace ceremonies.",
    imageUrl:
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80",
    createdAt: now,
  },
  {
    id: "item-conservatory",
    title: "English Garden Reverie",
    price: 3100,
    category: "Florals",
    height: "tall",
    description:
      "Glasshouse reception of blush peonies, mossed stone urns, and crystal stemware.",
    imageUrl:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
    createdAt: now,
  },
  {
    id: "item-marble-bar",
    title: "Calacatta Marble Bar",
    price: 2400,
    category: "Tables",
    height: "medium",
    description:
      "Fluted Calacatta marble console with antique mirror panels for cocktail hour.",
    imageUrl:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
    createdAt: now,
  },
  {
    id: "item-giltwood-lounge",
    title: "Giltwood Lounge Suite",
    price: 980,
    category: "Seating",
    height: "short",
    description:
      "Curved giltwood settee and pair of bergères in ivory silk for the cocktail salon.",
    imageUrl:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
    createdAt: now,
  },
  {
    id: "item-urns",
    title: "French Crystal Urns",
    price: 1800,
    category: "Florals",
    height: "medium",
    description:
      "Set of six pedestal crystal urns overflowing with peonies, sweet peas, and jasmine.",
    imageUrl:
      "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&w=1200&q=80",
    createdAt: now,
  },
  {
    id: "item-terracotta",
    title: "Tuscan Terracotta Amphorae",
    price: 540,
    category: "Tableware",
    height: "medium",
    description:
      "Monumental weathered terracotta vessels for olive groves and villa terraces.",
    imageUrl:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    createdAt: now,
  },
  {
    id: "item-banquet",
    title: "Imperial Banquet Setting",
    price: 3600,
    category: "Tables",
    height: "tall",
    description:
      "Full imperial tablescape: linen, candelabras, garden roses, and crystal service.",
    imageUrl:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
    createdAt: now,
  },
];

export const SEED_QUOTES: QuoteRecord[] = [
  {
    id: "quote-atelier-001",
    clientName: "Eleanor Vanderbilt",
    clientEmail: "eleanor@vanderbilt.com",
    eventDate: "2026-09-18",
    venue: "Villa Balbiano, Lake Como",
    notes: "Evening ceremony, 120 guests, champagne and ivory palette.",
    selectedItemIds: ["item-bohemian-arch", "item-crystal-chandeliers", "item-velvet-chairs"],
    lines: [
      { itemId: "item-bohemian-arch", quantity: 1 },
      { itemId: "item-crystal-chandeliers", quantity: 3 },
      { itemId: "item-velvet-chairs", quantity: 10 },
    ],
    totalEstimatedPrice: 8750,
    status: "pending",
    createdAt: "2026-04-02T14:22:00.000Z",
  },
];
