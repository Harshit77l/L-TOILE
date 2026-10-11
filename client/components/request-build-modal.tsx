"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { saveQuote } from "@/lib/store";
import { useQuote } from "@/lib/quote-context";

export function RequestBuildModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const router = useRouter();
  const { lines, total } = useQuote();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!name.trim() || !email.trim() || !eventDate) {
      setError("Please share your name, email, and event date.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email so our atelier can reply.");
      return;
    }
    setSubmitting(true);
    saveQuote({
      id: `quote-${Date.now()}`,
      clientName: name.trim(),
      clientEmail: email.trim(),
      eventDate,
      selectedItemIds: lines.map((line) => line.id),
      lines: lines.map((line) => ({ itemId: line.id, quantity: line.quantity })),
      totalEstimatedPrice: total,
      status: "pending",
      createdAt: new Date().toISOString(),
    });
    onOpenChange(false);
    router.push("/checkout?requested=1");
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Request this build</DialogTitle>
          <DialogDescription>
            Share three details. Our atelier will confirm availability and send a formal estimate.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={submit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="client-name">Name</Label>
            <Input
              id="client-name"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Eleanor Vanderbilt"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="client-email">Email</Label>
            <Input
              id="client-email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="eleanor@vanderbilt.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="event-date">Event date</Label>
            <Input
              id="event-date"
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
            />
          </div>
          {error ? (
            <p role="alert" className="text-sm text-destructive">
              {error}
            </p>
          ) : null}
          <Button type="submit" className="w-full" disabled={submitting}>
            {submitting ? "Sending…" : "Submit inquiry"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
