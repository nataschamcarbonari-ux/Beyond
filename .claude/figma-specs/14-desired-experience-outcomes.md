# 14 — Desired Experience Outcomes

## Node identity
- Node id: `28:442` "Frame 9" (child of `25:90` "Desktop - 5")
- Abs position: y=15019 (7203 + 5970 + 1846), size 1366×768

## Layout
- Full section background: `#a63f1e` (accent/rust — same brand accent color used as highlight elsewhere).
- Title `28:443`: absolute, left=`calc(66.67% - 5.67px)` (≈905px), top=`calc(50% + 115px)` (≈499px), width 397px — "Desired Experience Outcomes", Manrope Regular, 64px, line-height 0.96, uppercase, color white.
- List `34:55`: absolute, left=64px, top=86px, width 817px, height 596px, `flex-col justify-between`.
- 5 rows, each `border-t border-[rgba(255,255,255,0.72)]`, `flex gap-[24px] items-start`, `py-[12px]` (rows 1–4 have `margin-bottom: -24px` — i.e. slightly overlapping/compressed spacing so the visible list reads as evenly tight rows).
  - Left cell: headline, fixed width 397px, Manrope SemiBold 36px, line-height none, color white.
  - Right cell: body copy, fixed width 320px, Manrope Regular 16px, line-height 1.2, color `rgba(255,255,255,0.82)`.

## Copy (verbatim, 5 items)
1. **"Readiness becomes invisible"** — "Users no longer think about setup, packing, charging, or preparation. The product stays organized, ready, and easy to start with: arrive, connect, work."
2. **"Control replaces uncertainty"** — "Users trust that everything has a place, every essential item is accounted for, and nothing critical is forgotten during transitions."
3. **"Trust replaces workarounds"** — "Users rely on the product to support security, connectivity, and protection." (body cell width 270px here, slightly narrower than others — minor inconsistency, treat as 320px container regardless)
4. **"Mobility feels lighter"** — "The product supports movement without adding load anxiety, bulk, or visual clutter. It feels compact, clean, organized, and easy to carry across contexts."
5. **"Professional presence increase"** — "Users feel more prepared, credible, and premium in front of clients. The product becomes something people notice, understand, and want to ask about."

Title: "Desired Experience Outcomes"

## Typography
- Section title: Manrope Regular, 64px, line-height 0.96, uppercase, color white.
- Row headline: Manrope SemiBold, 36px, line-height none, color white.
- Row body: Manrope Regular, 16px, line-height 1.2, color `rgba(255,255,255,0.82)`.

## Color
- `#a63f1e` — section background (brand accent)
- White — headline/title text
- `rgba(255,255,255,0.82)` — body text
- `rgba(255,255,255,0.72)` — row divider borders

## Assets
None — no images in this section, pure typography on flat accent background.

## Uncertainties
- Title is positioned at ~905px left / ~499px top within a 768px-tall section while the list occupies the left/top area (64,86) — this creates a right-side/lower-half title placement distinct from the list; confirm visually that title does not overlap the 5-item list (list ends at top 86+596=682px, title starts at top 499px, right column starts at x=905px vs list width 64+817=881px — there's a ~24px gap, so they are side-by-side, title lower-right, list upper-left). Layout is very likely a 2-column arrangement: list on the left half, title anchored to bottom-right of the right half.
