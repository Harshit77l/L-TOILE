export type ItemCategory =
  | "Florals"
  | "Seating"
  | "Lighting"
  | "Tables"
  | "Arches"
  | "Tableware";

export type QuoteStatus = "pending" | "reviewed" | "confirmed";

export interface CatalogItem {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  category: ItemCategory;
  description: string;
  height: "short" | "medium" | "tall";
  createdAt: string;
}

export interface QuoteLine {
  itemId: string;
  quantity: number;
}

export interface QuoteRecord {
  id: string;
  clientName: string;
  clientEmail: string;
  eventDate: string;
  venue?: string;
  notes?: string;
  selectedItemIds: string[];
  lines: QuoteLine[];
  totalEstimatedPrice: number;
  status: QuoteStatus;
  createdAt: string;
}

export interface QuoteCartItem extends CatalogItem {
  quantity: number;
}
