---
name: L'Étoile Atelier
colors:
  surface: '#fbf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#fbf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ef'
  surface-container: '#efeeea'
  surface-container-high: '#eae8e4'
  surface-container-highest: '#e4e2de'
  on-surface: '#1b1c1a'
  on-surface-variant: '#4d4639'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f0ed'
  outline: '#7f7668'
  outline-variant: '#d1c5b5'
  surface-tint: '#755a21'
  primary: '#755a21'
  on-primary: '#ffffff'
  primary-container: '#b89758'
  on-primary-container: '#443000'
  inverse-primary: '#e6c27e'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfde'
  on-secondary-container: '#636262'
  tertiary: '#645d56'
  on-tertiary: '#ffffff'
  tertiary-container: '#a39a91'
  on-tertiary-container: '#38322c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdea4'
  primary-fixed-dim: '#e6c27e'
  on-primary-fixed: '#261900'
  on-primary-fixed-variant: '#5b430a'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#ece1d7'
  tertiary-fixed-dim: '#cfc5bb'
  on-tertiary-fixed: '#201b15'
  on-tertiary-fixed-variant: '#4c463f'
  background: '#fbf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e4e2de'
typography:
  display-hero:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Playfair Display
    fontSize: 38px
    fontWeight: '400'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 34px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 28px
  title-editorial:
    fontFamily: Playfair Display
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: 0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.12em
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
  space-3xl: 6rem
---

## Brand & Style

The design system conveys the quiet grandeur, poise, and curated intimacy of a haute couture bridal salon paired with the architectural rigor of an editorial monograph. Crafted for discerning event designers, luxury planners, and private clientele, the experience evokes grace, bespoke refinement, and effortless clarity.

Visual style bridges classic editorial minimalism with soft tactile luxury. High-contrast transitional serifs dominate headlines to evoke timeless bespoke paper goods, while structured, high-legibility geometric sans-serif type grounds transactional metadata, pricing tables, and logistics. Generous negative space, warm alabaster foundations, gentle champagne accents, and soft sweeping pill contours balance tactile opulence with modern digital utility.

## Colors

The color palette centers on warm mineral tones, antique metallic finishes, and rich editorial contrast:

- **Primary (`#B89758`):** Champagne gold. Employed for active status states, primary CTA accents, focus borders, delicate active indicator pips, and key monetary metrics.
- **Secondary (`#141414`):** Rich carbon noir. The dominant ink color for body copy, primary headings, stark high-contrast pill actions, and structural dividers.
- **Tertiary (`#7D756D`):** Warm taupe. Applied to secondary narrative copy, captions, sub-headers, and inactive state metadata.
- **Neutral (`#FBF9F5`):** Warm alabaster base canvas. Paired with pure white (`#FFFFFF`) for elevated card surfaces and stone linen (`#E7E2DB`) for micro-borders.

### Hierarchy & Tint Roles
- **Canvas Base:** `#FBF9F5` (Alabaster) creates a gentle, non-glare foundation reminiscent of heavy cotton rag paper.
- **Surface Elevation:** `#FFFFFF` (Pristine Ivory) elevates cards, floating quotation docks, and dialog modals.
- **Borders & Rules:** `#E7E2DB` (Soft Linen) provides featherlight 1px structural framing without harsh delineations.
- **Muted Contrast:** `#D8D2C9` provides subtle boundary definitions for active interactive fields.

## Typography

Typography governs the tension between poetic romance and rigorous curation:

- **Playfair Display:** Preserves editorial grandeur. Reserved exclusively for hero statements, proposal section titles, editorial quotes, and bespoke collection headers. Always set with generous line heights to avoid collision between classical ascenders and descenders.
- **Inter:** The pragmatic counterweight. Ensures rapid legibility across inventory tables, dimension specifications, pricing tiers, and form inputs.
- **Caps Hierarchy:** Category tags, section super-titles, and table headers are set in `label-caps` (`Inter`, uppercase, `0.12em` tracking) to mirror fine museum catalog labeling.

## Layout & Spacing

The layout is built upon a 12-column responsive fluid grid with intentional negative space:

- **Desktop (1200px+):** 12 columns, 48px canvas margins (`margin: 3rem`), 24px column gutters (`gutter: 1.5rem`). Content boundaries max out at a curated 1440px viewport limit to maintain intimate line lengths.
- **Tablet (768px - 1199px):** 8 columns, 32px canvas margins, 20px gutters. Proposal balance summaries shift to two-column stacked formats.
- **Mobile (<767px):** 4 columns, 20px canvas margins (`margin-mobile: 1.25rem`), 16px gutters (`gutter-mobile: 1rem`).
- **Vertical Cadence:** Editorial sections breathe through intentional intervals of `space-2xl` (64px) and `space-3xl` (96px). Intra-component clusters utilize strict 8px/16px rhythms (`space-sm`, `space-md`).

## Elevation & Depth

Depth is conveyed through subtle tonal gradation and ultra-diffused atmospheric shadows rather than heavy artificial drops. The system simulates the tactile presence of museum mounts and high-grade archival card stock:

- **Flat / Ground:** Standard canvas background (`#FBF9F5`) with no shadow. Structural separation relies solely on hair-thin 1px borders in `#E7E2DB`.
- **Level 1 (Cards & Modules):** Pure white `#FFFFFF` surface accompanied by a featherlight shadow: `0 4px 20px -2px rgba(20, 20, 20, 0.04)`. Outlined with a 1px border of `#E7E2DB`.
- **Level 2 (Floating Quote Dock & Navigation Bar):** Semi-translucent alabaster acrylic background (`rgba(251, 249, 245, 0.88)` with `backdrop-filter: blur(16px)`), combined with `0 12px 32px -4px rgba(20, 20, 20, 0.08)` and a bounding rule of `#D8D2C9`.
- **Level 3 (Curated Lightboxes & Dialogs):** `#FFFFFF` with `0 24px 48px -12px rgba(20, 20, 20, 0.14)`. Backdrop scrim uses `#141414` tinted at 35% opacity with `backdrop-filter: blur(4px)`.

## Shapes

The design system employs a refined Level 3 (Pill-shaped) geometry, creating an organic, supple harmony with classical serif letterforms:

- **Pills (`rounded-full` / `9999px`):** Primary action buttons, curated status tags, collection filter chips, search query bars, and floating toolbar docks.
- **Structural Containers (`rounded-xl` / `3rem`):** Editorial cards, curated photo lookbooks, and segmented hero cards carry soft, sculpted corners.
- **Internal Form Inputs (`rounded-lg` / `2rem`):** Text fields and dropdown selectors maintain pill contours, ensuring an inviting tactile presence across all interactive touchpoints.

## Components

### Buttons
- **Primary Action:** Solid `#141414` pill, text in `#FFFFFF` (`Inter`, 13px, weight 500), horizontal padding `1.75rem`, height `44px`. Hover transitions smoothly to `#B89758`.
- **Accent Action:** Solid `#B89758` pill with `#FFFFFF` text. Hover shifts to `#A08144`.
- **Secondary / Outline:** `#FFFFFF` background with 1px `#E7E2DB` border, `#141414` text. On hover, border transitions to `#B89758` with subtle micro-scale elevation.

### Badges & Curated Chips
- Full pill contour (`9999px`). Background in `#F8F5F0` with a 1px `#E7E2DB` border.
- Text rendered in `label-caps` (`Inter`, 10px, uppercase, tracking `0.1em`, color `#55504A`).
- Active state: `#141414` fill with `#FFFFFF` text, or `#B89758` fill for verified luxury reservations.

### Form Inputs & Selectors
- Minimalist pill enclosures with `2rem` border radius, `#FFFFFF` interior fill, and 1px `#E7E2DB` default border.
- Padding: `0.75rem 1.25rem`. Label positioned above in `label-caps` (`#7D756D`).
- Focus state: Border color transitions to `#B89758` with an ambient glow of `0 0 0 3px rgba(184, 151, 88, 0.15)`. No harsh browser outlines.

### Editorial Proposal Cards
- Background: `#FFFFFF`. Border-radius: `2rem` (`rounded-xl`).
- Structural 1px border in `#E7E2DB` with Level 1 elevation.
- Media container features subtle inset radii (`1.5rem`), displaying high-resolution imagery with an aspect ratio of 4:5 or 16:10.
- Hover state: Ambient zoom on artwork (`transform: scale(1.02)`) accompanied by a subtle floating badge revelation.

### Checkboxes & Radios
- Radios: Circular double-ring. Inactive has 1px `#D8D2C9` border. Active shows `#141414` outer ring surrounding a `#B89758` center pip.
- Checkboxes: Soft-rounded squircle (`6px`), `#FFFFFF` background, `#E7E2DB` border. Selected state fills with `#141414` housing a clean champagne gold checkmark.

### Luxury Navigation Header
- Fixed or sticky presentation with frosted glass backdrop (`rgba(251, 249, 245, 0.90)`, `backdrop-filter: blur(12px)`).
- Hairline bottom border in `#E7E2DB`.
- Active nav links feature a 4px primary gold (`#B89758`) indicator dot centered 6px beneath the active category label.

### Floating Proposal Summary Bar
- Docked permanently to viewport bottom center with `1.5rem` clearance.
- Pill shell shaped at `9999px` with `#FFFFFF` fill, Level 2 elevation, and a 1px `#E7E2DB` border.
- Houses real-time proposal totals, itemized atelier counts, and an immediate primary booking action.