# 09 — Market Outlook: Key Trends Grid

## Node identity
- Two sibling nodes forming one continuous visual section (same grid pattern, alternating image side):
  - `28:531` "Frame 1321317459" — abs y=7971, size 1366×768
  - `80:22` "Frame 1321317460" — abs y=8739, size 1366×768
- Combined section: abs y=7971–9507, height 1536px.

## Layout
### Row A — `28:531` (image right)
- Text column: frame `28:611`, absolute at left=68px, top=86px, width=813px, `flex-col`, no gap (rows are stacked, each row has its own top border).
- 3 rows, each `border-t border-[#777]`, height 198.667px, `flex items-center`, `padding: 8px 24px 8px 0`, gap 24px between the two cells in a row:
  1. `28:612` (headline, flex 393px) + `28:537` (body, fixed 372px)
  2. `28:542` (body, fixed 393px) + `28:615` (headline, fixed 372px) — order flips (body first, then headline) — row uses `justify-between`
  3. `28:617` (headline, fixed 393px) + `28:547` (body, fixed 372px) — `justify-between`
- Image: `94:538` "Rectangle 8", absolute, left=`calc(66.67% - 5.67px)` (≈905px), top=86px, size 397×596, `object-cover`.

### Row B — `80:22` (image left)
- Image: `94:539` "Rectangle 8", absolute, left=64px, top=86px, size 397×596, `object-cover`.
- Text column: frame `80:70`, absolute, left=`calc(33.33% + 29.67px)` (≈485px), top=86px, width=817px, height=596px, `flex-col justify-center`.
- 3 rows, each `border-t border-[#777]`, `flex-[1_0_0]`, `justify-between`, `padding: 8px 0`:
  1. `80:72` (headline, 372px) + `80:74` (body, 397px)
  2. `80:77` (body, 372px) + `80:79` (headline, 397px)
  3. `80:82` (headline, 372px, no wrapper) + `80:83` (body, 397px)

## Typography
- **Headline cells** (e.g. "Resilience over efficiency."):
  - Font: Manrope SemiBold, size 36px, line-height: none (1.0)
  - Color: `#1e1e1e`
- **Body cells**:
  - Font: Manrope Regular, size 16px, line-height 1.2
  - Color: `#777`
  - Inline citation links: Manrope Medium, color `#a63f1e`, underline, `text-decoration-skip-ink: none`, opens in new tab.

## Copy (verbatim, in visual order)

Row A (28:531):
1. Headline: "Resilience over efficiency." — Body: "As travel disruption increases, companies and travelers shift from a "just in time" mindset to "just in case" planning, prioritizing security, predictability, and responsiveness. [Amex GBT, 2025]" (link: https://explorer.amexglobalbusinesstravel.com/rs/346-POJ-129/images/Meet-tomorrows-business-travelers-report.pdf?version=0)
2. Body: "By 2030, corporate travel will need to balance business needs with emissions reduction, making lower-impact solutions more relevant in procurement. [Amex GBT, 2025]" (same link) — Headline: "Sustainability becomes mandatory."
3. Headline: "AI reshapes the traveler role." — Body: "Routine tasks such as expenses, summaries, and itinerary adjustments will increasingly move to AI, turning the road warrior into an AI-supported workflow manager. [Amex GBT, 2025]" (same link)

Row B (80:22):
1. Headline: "Bleisure is mainstream." — Body: "With 62% of travelers extending business trips for personal purposes, business travel must support both professional performance and personal flexibility. [Amex GBT, 2025]" (same link)
2. Body: "As Gen Z reaches 27% of the global workforce by the end of 2025, demand will grow for travel experiences that are sustainable, flexible, digital, and adaptive. [Amex GBT, 2025]" (same link) — Headline: "Gen Z raises expectations."
3. Headline: "Transit becomes a workplace." — Body: "Planes, trains, and vehicles are evolving into dynamic workspaces, increasing the need for tools that support productivity, collaboration, and readiness on the move. [Globetrender, 2025]" (link: https://amadeus.com/documents/resources/research-report/business-travel-trends-2025-compressed.pdf)

## Color
- `#1e1e1e` — headline text
- `#777` — body text, row borders
- `#a63f1e` — citation link color (accent/rust — recurs across the whole mega-section as the brand accent)

## Assets
- `94:538` "Rectangle 8" (row A image), export URL: `https://www.figma.com/api/mcp/asset/f79f173c-4f2c-46f9-99cd-a076b21d1d94`, 397×596, object-cover.
- `94:539` "Rectangle 8" (row B image), export URL: `https://www.figma.com/api/mcp/asset/ca9314f6-0f96-4cfe-b306-8e0a8bf6f484`, 397×596, object-cover.
- Both are plain photographic fills (not vectors) — export as JPG/PNG.

## Uncertainties
- Whether these two frames (28:531, 80:22) should be one React component with a `reverse` prop, or two separate components — implementation detail, not specified by Figma structure itself.
- Photo subject matter for both Rectangle 8 images — UNKNOWN without visual inspection of downloaded asset.
