# L'Étoile — Moodboard to Quote

L'Étoile is a visual planning and quoting experience for wedding planners, interior designers, producers, and their clients. It helps users move from scattered visual inspiration to a structured, actionable quote request.

The project combines a polished public Next.js experience with a Strapi CMS and staff dashboard. Clients can browse catalog pieces, build a moodboard, adjust quantities, and submit an inquiry. Atelier staff can manage catalog content, upload images, review quotes, and update quote status from one place.

## The Problem

Event and interior projects often begin with inspiration spread across messages, folders, and moodboards. The visual direction is difficult to share, while pricing, availability, and production details are managed separately.

The result is a slow and unclear handoff between the client, planner, designer, and production team. The original frontend also relied heavily on browser storage, which meant catalog data and quote information were not centrally available across devices.

## The Solution

L'Étoile connects visual curation with the next operational step:

1. Explore florals, seating, lighting, tables, arches, and tableware.
2. Add pieces to a moodboard-style quote.
3. Adjust quantities and see the estimated total update.
4. Submit a structured quote request with event and contact details.
5. Let staff manage catalog inventory and review inquiries through the dashboard.

Strapi provides the persistent backend for catalog items, media, users, permissions, and quotes. Next.js remains responsible for the public experience and application interface.

## Benefits

- **Clients:** Communicate preferences visually instead of describing an idea only through text.
- **Planners and designers:** Create a shared visual direction that clients and production teams can understand.
- **Atelier staff:** Receive structured quote requests with selected items, quantities, and estimated totals.
- **Content teams:** Update catalog content and images without changing frontend code.
- **Business owners:** Replace scattered browser-only data with a maintainable, centralized workflow.

## Core Features

### Public experience

- Responsive landing page for the atelier service
- Moodboard-style catalog browsing
- Search and category filtering
- Add-to-quote interactions with animated feedback
- Quantity controls and live estimate calculation
- Responsive layouts for desktop and mobile
- Local showcase assets with Strapi catalog integration

### Staff workflow

- Strapi Users & Permissions authentication
- JWT-based protected requests
- Staff inventory dashboard
- Catalog item creation, editing, and deletion
- Image upload through Strapi Media Library
- Quote review and status updates
- Role-based backend permissions

### SEO and performance foundations

- Next.js App Router metadata
- Canonical URL, Open Graph, and Twitter card metadata
- `sitemap.xml` generated through `app/sitemap.ts`
- `robots.txt` generated through `app/robots.ts`
- Organization JSON-LD structured data
- `next/image` for responsive public-page imagery
- `next/font` for optimized font loading
- Responsive image `sizes` and prioritized hero image
- Immutable caching for hashed Next static assets
- Hydration-safe public catalog loading

## Architecture

```text
Client or planner
        |
        v
Next.js App Router
        |
        v
Typed Strapi API client
        |
        v
Strapi REST API
        |
        +--> Catalog content
        +--> Media Library
        +--> Authentication and roles
        +--> Quotes and inquiries
        |
        v
SQLite database for local development
```

The frontend API boundary is centralized in [`client/lib/strapi.ts`](./client/lib/strapi.ts). This keeps request construction, authentication headers, response mapping, media URL handling, and error parsing out of UI components.

## Tech Stack

### Frontend

- Next.js 16 with App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Radix UI
- Lucide React
- `next/image` and `next/font`

### Backend

- Strapi 5
- Strapi Users & Permissions
- Strapi Upload and Media Library
- Strapi REST API
- SQLite with `better-sqlite3` for local development

## Project Structure

```text
moonboar/
├── client/                         # Next.js frontend
│   ├── app/                        # App Router routes and metadata
│   ├── components/                 # Reusable UI and catalog components
│   ├── lib/                        # API client, types, quote state, seed data
│   └── public/assests/             # Local showcase images by category
├── server/                         # Strapi backend
│   ├── config/                     # Strapi server, CORS, database settings
│   ├── src/api/                    # Catalog, quote, and profile APIs
│   └── public/uploads/             # Local Strapi media uploads
├── MANUAL-STRAPI-SETUP.md          # Backend setup checklist
├── STRAPI-INTEGRATION-WALKTHROUGH.md
└── RESUME-PROJECT-SUMMARY.md      # Four-line resume version
```

## Getting Started

### Prerequisites

- Node.js 20 or later
- npm

### 1. Install frontend dependencies

```powershell
cd client
npm install
```

### 2. Install backend dependencies

Open a second terminal:

```powershell
cd server
npm install
```

### 3. Configure the frontend

Create `client/.env.local`:

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

`NEXT_PUBLIC_STRAPI_URL` points the frontend to the Strapi API. `NEXT_PUBLIC_SITE_URL` is used for canonical URLs, Open Graph URLs, sitemap entries, and structured data.

### 4. Start Strapi

```powershell
cd server
npm run develop
```

Strapi runs at:

```text
http://localhost:1337
```

Complete the content type, role, permissions, and staff user steps in [`MANUAL-STRAPI-SETUP.md`](./MANUAL-STRAPI-SETUP.md).

### 5. Start Next.js

In another terminal:

```powershell
cd client
npm run dev
```

The frontend runs at:

```text
http://localhost:3000
```

Useful routes:

```text
/                  Public landing page
/moodboard         Catalog and quote builder
/checkout          Quote details and submission
/admin/login       Staff login
/admin             Staff dashboard
/sitemap.xml       Generated sitemap
/robots.txt        Generated crawler rules
```

## Available Commands

### Frontend

```powershell
cd client
npm run dev       # Start development server
npm run build     # Create production build
npm run start     # Start production server
npm run lint      # Run ESLint
```

### Backend

```powershell
cd server
npm run develop   # Start Strapi with auto reload
npm run build     # Build the Strapi admin panel
npm run start     # Start Strapi without auto reload
```

## API and Data Flow

Catalog loading:

```text
Moodboard
  -> getCatalogItems()
  -> Strapi REST API
  -> Catalog item mapping
  -> Masonry catalog cards
```

Quote submission:

```text
Selected catalog items
  -> Quote form
  -> POST /api/quotes
  -> Strapi database
  -> Staff dashboard
```

Staff authentication:

```text
Staff login form
  -> POST /api/auth/local
  -> Strapi JWT
  -> Protected catalog and quote requests
```

The frontend uses the Strapi Users & Permissions user system for application login. It is separate from Strapi Administration Panel users.

## Local Showcase Assets

The repository includes category images in [`client/public/assests/`](./client/public/assests/). The folder name is retained as-is to match the existing project assets.

These files provide a reliable local showcase catalog for:

- Florals
- Lighting
- Seating
- Tables

The frontend starts with local showcase items and merges Strapi catalog records when the backend is available. This keeps the public demo usable even when the CMS has not yet been populated.

## Production Roadmap

The current implementation establishes the core product and integration foundation. A production expansion could include:

- ISR or targeted revalidation for CMS-driven public content
- Strapi Article, Category, Tag, and reusable page-block content types
- Blog listing and detail pages
- Article, BreadcrumbList, and FAQPage JSON-LD
- CDN delivery for Strapi media
- Core Web Vitals monitoring in CI and real-user monitoring
- Automated image compression and media transformations
- Email notifications for new quote requests
- Production database and object storage

## Walkthrough

The full product and technical walkthrough is available in [`STRAPI-INTEGRATION-WALKTHROUGH.md`](./STRAPI-INTEGRATION-WALKTHROUGH.md).

It covers the product problem, target audience, user journey, Strapi architecture, performance decisions, SEO foundations, authentication, permissions, and the quote workflow.

## Resume Summary

See [`RESUME-PROJECT-SUMMARY.md`](./RESUME-PROJECT-SUMMARY.md) for a concise four-line version suitable for a resume, portfolio, or application attachment.

