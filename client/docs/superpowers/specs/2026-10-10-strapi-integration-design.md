# L'Étoile Atelier — Strapi Integration

Date: 2026-10-10

## Goal

Replace localStorage (`lib/store.ts`) with a Strapi 5 backend in this repo so inventory and quote inquiries persist on the server. Keep the existing Next.js UI.

## Architecture

```
Browser (preview port 3000)
  /moodboard  /checkout  /admin     Next.js App Router
  /api/*  ---------------------->   Strapi 5 :1337 (SQLite)
```

- Strapi lives in `backend/` (TypeScript, SQLite).
- Next.js rewrites `/api/:path*` to `http://127.0.0.1:1337/api/:path*`.
- Preview still exposes one port. Strapi admin panel is not proxied.
- Quote cart stays client-only (`lib/quote-context.tsx`).

## Content types

### Item (`api::item.item`)

- title (string, required)
- price (decimal, required)
- imageUrl (string, required) — Unsplash URLs, no media library
- category (enum: Florals, Seating, Lighting, Tables, Arches, Tableware)
- description (text)
- height (enum: short, medium, tall)
- draftAndPublish: false

Frontend maps Strapi `documentId` to `CatalogItem.id`.

### Quote (`api::quote.quote`)

- clientName, clientEmail, eventDate (required)
- venue, notes (optional)
- selectedItemIds (json)
- lines (json: `{ itemId, quantity }[]`)
- totalEstimatedPrice (decimal)
- status (enum: pending | reviewed | confirmed, default pending)
- draftAndPublish: false

## Permissions

Public:

- `item.find`, `item.findOne`
- `quote.create`

Authenticated (Users & Permissions):

- full item CRUD
- `quote.find`, `quote.findOne`, `quote.update`

Seeded atelier user:

- email: `atelier@letoile.local`
- password: `etoile2026`
- confirmed, Authenticated role

## Frontend changes

- `lib/strapi.ts` — fetch helper, JWT in localStorage (`letoile-jwt`)
- `lib/api.ts` — getItems, upsertItem, deleteItem, saveQuote, getQuotes, updateQuoteStatus, login, logout, isAdminAuthed
- Moodboard loads items from `GET /api/items`
- Request This Build posts `POST /api/quotes`
- Admin login uses `POST /api/auth/local`; JWT required for inventory CRUD and quotes table
- If Strapi is down, moodboard/admin show an error (no silent localStorage fallback)

## Out of scope

- Strapi Media Library / file uploads
- Strapi admin panel in preview
- Payment processing
- Draft/publish workflow
