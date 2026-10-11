"use client";

import { Plus, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { CATEGORIES } from "@/lib/catalog";
import {
  deleteItem,
  getItems,
  getQuotes,
  isAdminAuthed,
  setAdminAuthed,
  updateQuoteStatus,
  upsertItem,
} from "@/lib/store";
import type { CatalogItem, ItemCategory, QuoteRecord, QuoteStatus } from "@/lib/types";
import { formatCurrency, formatDate } from "@/lib/utils";

type Tab = "inventory" | "quotes";

const emptyForm = {
  title: "",
  price: "",
  category: "Florals" as ItemCategory,
  imageUrl: "",
  description: "",
};

export default function AdminPage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [tab, setTab] = useState<Tab>("inventory");
  const [items, setItems] = useState<CatalogItem[]>([]);
  const [quotes, setQuotes] = useState<QuoteRecord[]>([]);
  const [formOpen, setFormOpen] = useState(false);
  const [editing, setEditing] = useState<CatalogItem | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");

  useEffect(() => {
    const id = window.setTimeout(() => {
      if (!isAdminAuthed()) {
        router.replace("/admin/login");
        return;
      }
      setItems(getItems());
      setQuotes(getQuotes());
      setReady(true);
    }, 0);
    return () => window.clearTimeout(id);
  }, [router]);

  const itemMap = useMemo(
    () => Object.fromEntries(items.map((item) => [item.id, item])),
    [items],
  );

  function openCreate() {
    setEditing(null);
    setForm(emptyForm);
    setError("");
    setFormOpen(true);
  }

  function openEdit(item: CatalogItem) {
    setEditing(item);
    setForm({
      title: item.title,
      price: String(item.price),
      category: item.category,
      imageUrl: item.imageUrl,
      description: item.description,
    });
    setError("");
    setFormOpen(true);
  }

  function saveItem(e: React.FormEvent) {
    e.preventDefault();
    if (!form.title.trim() || !form.price || !form.imageUrl.trim()) {
      setError("Title, price, and image URL are required.");
      return;
    }
    const price = Number(form.price);
    if (Number.isNaN(price) || price < 0) {
      setError("Enter a valid price.");
      return;
    }
    const next: CatalogItem = {
      id: editing?.id ?? `item-${Date.now()}`,
      title: form.title.trim(),
      price,
      category: form.category,
      imageUrl: form.imageUrl.trim(),
      description: form.description.trim() || "Curated atelier rental piece.",
      height: editing?.height ?? "medium",
      createdAt: editing?.createdAt ?? new Date().toISOString(),
    };
    setItems(upsertItem(next));
    setFormOpen(false);
  }

  function remove(id: string) {
    setItems(deleteItem(id));
  }

  function setStatus(id: string, status: QuoteStatus) {
    setQuotes(updateQuoteStatus(id, status));
  }

  if (!ready) {
    return (
      <div className="px-8 py-20 text-center text-taupe">Opening atelier desk…</div>
    );
  }

  return (
    <div className="mx-auto max-w-[1400px] px-4 py-10 md:px-8">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
            Atelier desk
          </p>
          <h1 className="mt-1 font-serif text-[36px] text-ink">Inventory & inquiries</h1>
        </div>
        <div className="flex gap-2">
          {tab === "inventory" ? (
            <Button onClick={openCreate}>
              <Plus className="h-4 w-4" />
              Add New Item
            </Button>
          ) : null}
          <Button
            variant="outline"
            onClick={() => {
              setAdminAuthed(false);
              router.push("/admin/login");
            }}
          >
            Sign out
          </Button>
        </div>
      </div>

      <div className="mb-6 flex gap-2">
        {(["inventory", "quotes"] as const).map((value) => (
          <button
            key={value}
            onClick={() => setTab(value)}
            className={`h-10 cursor-pointer rounded-full px-5 text-[13px] font-medium capitalize ${
              tab === value ? "bg-ink text-white" : "bg-white text-taupe"
            }`}
          >
            {value}
          </button>
        ))}
      </div>

      {tab === "inventory" ? (
        <div className="overflow-hidden rounded-[2rem] bg-white">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Category</TableHead>
                <TableHead />
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="h-14 w-14 rounded-xl object-cover"
                    />
                  </TableCell>
                  <TableCell className="font-medium">{item.title}</TableCell>
                  <TableCell className="tabular-nums">{formatCurrency(item.price)}</TableCell>
                  <TableCell>
                    <Badge>{item.category}</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <button
                      onClick={() => openEdit(item)}
                      className="mr-3 cursor-pointer text-[13px] text-taupe hover:text-ink"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => remove(item.id)}
                      aria-label={`Delete ${item.title}`}
                      className="cursor-pointer text-taupe hover:text-destructive"
                    >
                      <Trash2 className="inline h-4 w-4" />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="overflow-hidden rounded-[2rem] bg-white">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Client</TableHead>
                <TableHead>Event</TableHead>
                <TableHead>Pieces</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {quotes.map((quote) => (
                <TableRow key={quote.id}>
                  <TableCell>
                    <p className="font-medium">{quote.clientName}</p>
                    <p className="text-[12px] text-taupe">{quote.clientEmail}</p>
                  </TableCell>
                  <TableCell>{formatDate(quote.eventDate)}</TableCell>
                  <TableCell>
                    {quote.lines
                      .map((line) => itemMap[line.itemId]?.title ?? line.itemId)
                      .join(", ")}
                  </TableCell>
                  <TableCell className="tabular-nums">
                    {formatCurrency(quote.totalEstimatedPrice)}
                  </TableCell>
                  <TableCell>
                    <select
                      value={quote.status}
                      onChange={(e) =>
                        setStatus(quote.id, e.target.value as QuoteStatus)
                      }
                      className="h-9 rounded-full border border-linen bg-white px-3 text-[12px]"
                    >
                      <option value="pending">pending</option>
                      <option value="reviewed">reviewed</option>
                      <option value="confirmed">confirmed</option>
                    </select>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      {formOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <button
            className="absolute inset-0 bg-[#141414]/35 backdrop-blur-[4px]"
            onClick={() => setFormOpen(false)}
            aria-label="Close form"
          />
          <form
            onSubmit={saveItem}
            className="relative z-10 w-full max-w-md rounded-[2rem] bg-white p-8"
          >
            <h2 className="mb-6 font-serif text-[28px]">
              {editing ? "Edit item" : "Add new item"}
            </h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  placeholder="Vintage Oak Table"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="price">Price</Label>
                  <Input
                    id="price"
                    type="number"
                    min="0"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                    placeholder="800"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <select
                    id="category"
                    value={form.category}
                    onChange={(e) =>
                      setForm({ ...form, category: e.target.value as ItemCategory })
                    }
                    className="h-12 w-full rounded-2xl border border-linen bg-white px-4 text-[15px]"
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="image">Image URL</Label>
                <Input
                  id="image"
                  value={form.imageUrl}
                  onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
                  placeholder="https://…"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="desc">Description</Label>
                <Textarea
                  id="desc"
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                />
              </div>
              {error ? <p className="text-sm text-destructive">{error}</p> : null}
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </div>
          </form>
        </div>
      ) : null}
    </div>
  );
}
