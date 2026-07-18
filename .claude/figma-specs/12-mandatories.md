# 12 — Mandatories

## Node identity
- Node id: `25:91` "Frame 6" (child of `25:90` "Desktop - 5")
- Abs position: y=13173 (7203 + 5970 + 0), size 1366×1078
- Grid content nested in `26:241` "Frame 1321317737", absolute left=64px, top=`calc(25% + 75.5px)` (≈345px), width 1239px.

## Layout
- Title `25:93` "Mandatories": absolute, left=64px, top=86px, Manrope Regular, 128px, line-height 0.96, uppercase, color `#1e1e1e`.
- Grid: 2 rows × 3 columns of cards, each card 309.75×296px, `p-[24px]`, `flex-col justify-between`.
  - Row 1 (`26:239`): card 01, decorative image cell, card 02 (accent bg), card 03.
  - Row 2 (`28:423`): card 04, card 05, decorative image cell, card 06.
  - Cards have `border-t border-[#777]`; interior cards additionally get `border-l border-[#777]`.
- Card anatomy (text cards): headline block (`Manrope SemiBold 36px`, line-height none) → body block (`Manrope Regular 16px`, line-height 1.2) → number label pinned to bottom (`IBM Plex Mono Medium 36px`, line-height 0.96).
- Two cards (positions 2 and 5 in reading order — grid slots between 01/03 and 05/06) are pure decorative image fills, no text: `28:448` and `28:454`, each a photo with `object-cover`, oversized and cropped (image scaled to ~175%/~170% width, offset negative left, i.e. a zoomed/cropped background photo).

## Copy (verbatim, numbered 01–06)
1. **"Make setup fast and effortless"** — "Immediate readiness — arrive, one connection, ready. Friction is a product failure." — `01.`
2. *(decorative image card, no text)*
3. **"Security covers everything by default"** — "Both data and physical items are protected from the moment the user arrives." — `02.` — this card has accent background `#a63f1e` with white text.
4. **"Weight and ergonomics cannot be compromised"** — "Electronics integration must not create discomfort, shoulder/back pain, or long-term rejection." — `03.`
5. **"Durability and repairability from day one"** — "Electronics-in-softgoods must respect thermal, durability, maintenance, and repairability constraints." — `04.`
6. **"Premium positioning and defensibility"** — "Must be defensible as a productivity accessory. Commodity pricing is out of scope." — `05.`
7. *(decorative image card, no text)*
8. **"Sustainability considered from the start"** — "Not retrofitted — built into material, weight, and lifecycle decisions from the beginning." — `06.`

(Note: numbering 01–06 corresponds to the 6 text cards; the 2 image cards are unnumbered fillers in the 2×3 grid — grid reading order interleaves them as: [01, image, 02] / [04, 05, image, wait — see below].)

Actual grid order (row-by-row, left→right):
- Row 1: `26:215` (01. Make setup fast and effortless), `28:448` (image), `28:411` (02. Security covers everything by default — accent bg)
- Row 1 continues: `28:417` (03. Weight and ergonomics cannot be compromised)
- Row 1 has 4 slots total? — Re-check: row 1 (`26:239`) contains exactly 3 children at x=0, x=309.75, x=619.5 (309.75px cards ×3 = 929.25, leaving one more slot) — actually metadata shows a 4th at x=929.25 (`28:417`, card 03). So row 1 = 4 cards: 01(text), image, 02(text, accent), 03(text). Width 4×309.75=1239 ✓.
- Row 2 (`28:423`): `28:424` (04. Durability...), `28:430` (05. Premium positioning...), `28:454` (image), `28:436` (06. Sustainability considered...). 4 cards, matches 1239 width.

So it's a **2×4 grid** (8 slots, 6 text cards + 2 decorative image cards), not 2×3. Correcting: each card is 309.75px wide, 4 per row, 2 rows = 8 cards total.

## Typography
- Section title: Manrope Regular, 128px, line-height 0.96, uppercase, `#1e1e1e`.
- Card headline: Manrope SemiBold, 36px, line-height none (1.0), color `#1e1e1e` (white on accent card 02).
- Card body: Manrope Regular, 16px, line-height 1.2, color `#777` (color `rgba(255,255,255,0.82)` on accent card 02).
- Card number (e.g. "01."): IBM Plex Mono Medium, 36px, line-height 0.96, color `#1e1e1e` (white on accent card 02).

## Color
- `#1e1e1e` — default text
- `#777` — body text / borders
- `#a63f1e` — accent card 02 background (brand accent, matches link/highlight color used elsewhere)
- White / `rgba(255,255,255,0.82)` — text on accent card

## Assets
- Decorative image, row 1 slot 2 (`28:448`/`28:449`): `imgFrame1321317469` → `https://www.figma.com/api/mcp/asset/a0466ca9-be56-4076-9d8a-b90565f35267`. Rendered oversized/cropped: `absolute h-full left-[-48.6%] w-[175.2%] top-[0.07%]` inside a 309.75×296 clipped cell.
- Decorative image, row 2 slot 3 (`28:454`): `imgFrame1321317470` → `https://www.figma.com/api/mcp/asset/0e7fb08e-941c-40bc-aa54-833318d2b0a0`. Rendered oversized/cropped: `absolute h-full left-[-61.02%] w-[169.84%] top-[0.11%]`.

## Uncertainties
- Grid is 2 rows × 4 columns (8 cells, 6 text + 2 image), not the "6 numbered cards" implied by prior stale inference — confirmed via metadata coordinates in this pass.
- Whether decorative image cells should be treated as background photography with a specific crop/zoom (as coded) or a simple `object-cover` fill — the Figma layer applies an oversized absolute image inside an `overflow-hidden` cell, effectively a manual pan/zoom; replicate with `background-size`/`object-fit` accordingly.
