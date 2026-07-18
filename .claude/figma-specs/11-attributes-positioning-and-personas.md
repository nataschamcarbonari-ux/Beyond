# 11 — Attributes: Positioning Grid + Persona/Feel/Look Collages

## Node identity
- Node id: `22:315` "Frame 1321317458"
- Abs position: y=10954, size 1366×2219

## Layout — top level
- Title text `22:316` "Attributes" at left=66px, top=86px (relative to section), width 369px — Manrope Regular, 128-ish scale text (same family as other section titles; exact size not captured in this call, cross-reference with other section titles which use 128px/0.96/uppercase — treat as `128px, line-height 0.96, uppercase, color #1e1e1e` by consistency; UNKNOWN exact confirmed value for this specific node, verify against screenshot).
- **Positioning grid** `22:349` "Frame 32" — absolute, left=485px, top=86px, width 817px, height 206px.
- **Persona/Feel/Look collages** `25:36` "Frame 1321317733" — absolute, left=66px, top=448px, width 1238px, height 1607px, containing 3 stacked rows of 459px each with 574px row-to-row spacing (some overlap/negative margin implied by 574 vs 459 — rows are NOT flush-stacked; gap ≈115px between each 459px-tall row block, consistent with `top=0`, `top=574`, `top=1148`).

## Sub-section A: Positioning Grid (`22:349`)
- `flex-col`, 4 rows, each `border-t border-[#777]` (last row also `border-b`), `flex-[1_0_0]` (≈51.5px each), `gap-[33px]` between label column and tag row, `items-center`.
- Label column: fixed 200px, IBM Plex Mono SemiBold, 16px, tracking 3.2px, uppercase, color `#1e1e1e`.
- Tag row: `flex gap-[24px]`, Manrope Regular, 16px, color `#777`, center-aligned text.

| Row label | Tags (verbatim, in order) |
|---|---|
| POSITIONING | Premium, High-end, Quality, Exclusive, Specialized |
| USER EXPERIENCE | Intuitive, Personalized, Easy to use, Frictionless, Plug and play |
| PERFORMANCE | Consistent, Readiness, Predictable, Organized, Reliable |
| VALUES | Secure, Green, Safe, Purpose-driven |

## Sub-section B: Persona / Feel / Look collages (`25:36`)
Three near-identical structures: an 816×459px collage of overlapping rounded-rectangle photo fragments (12–14 images per collage, irregular sizes/positions, `overflow-clip` container background `bg-[var(--color-5,#f9f9f9)]` i.e. token **Color 5 = `#f9f9f9`**), each with several floating "pill" tag chips layered on top, plus a short caption paragraph outside the collage.

Pill chip style (consistent across all 3 collages):
- `rounded-[19.228px]` (≈full pill), `padding: 5.197px 12.472px`
- Background: `backdrop-blur(5.197px)` + `rgba(255,255,255,0.72)` (some variants `rgba(255,255,255,0.56)`)
- One variant (`24:712`, `24:722` in collage B "Feel") adds `border: 0.85px solid var(--color-3, #edf9ff)` (token **Color 3 = `#edf9ff`**) — appears on "Secure" and "Organized" chips only.
- Text: IBM Plex Mono Regular, 14px, tracking -0.28px, color `var(--color-4, #1e1e1e)` (token **Color 4 = `#1e1e1e`**).

### Row 1 — "Context" (`25:33` / `24:644` collage)
- Caption (right of collage, 264px wide): "Who the users are and the context in which they use the product." — Manrope Regular, 16px, color `#777`, line-height 1.2.
- Layout: `flex gap-[24px]`, collage first (816px), caption second.
- Chip labels (verbatim): Mobile professional, Luxury-adjacent, Best-in-class products, Car meetings, Hotel routine, C-suite aesthetic, Client presentations, Airport lounges, Executive environments.
- Collage images: 12 photo fragments (`image 367`–`image 380` per naming), assorted rounded-rectangle crops.

### Row 2 — "Feel" (`25:34` / `24:689` collage)
- Caption (left of collage, 176px wide, right-aligned text): "How the product should make users feel." — same type spec as above.
- Layout: `flex gap-[25px] justify-end`, caption first, collage second (mirrored vs Row 1).
- Chip labels (verbatim): Exclusive, Realiable [sic — verbatim spelling in Figma, likely typo for "Reliable"], Intuitive, Readiness, Secure (bordered variant), Familiar, All in, Organized (bordered variant).
- Collage images: 10 photo fragments (`image 381`–`image 404`).

### Row 3 — "Look" (`25:35` / `24:592` collage)
- Caption (right of collage, 397px wide): "How the product should look and visually communicate its identity." — same type spec.
- Layout: `flex gap-[25px]`, collage first (816px), caption second.
- Chip labels (verbatim): Compact, Resistant, High-end, Premium materials, Soft goods inside, Stable, Cables organized, Electronics integration, Lather finishes [sic — likely typo for "Leather finishes"], Safe, Rigid structure, Visibility.
- Collage images: 14 photo fragments (`image 388`–`image 405`).

## Typography summary
- Section title "Attributes": Manrope Regular, ~128px, uppercase (consistent with sibling section titles) — VERIFY exact size against screenshot, not directly captured for this node.
- Grid row labels: IBM Plex Mono SemiBold, 16px, tracking 3.2px, uppercase, `#1e1e1e`.
- Grid tags: Manrope Regular, 16px, `#777`.
- Collage captions: Manrope Regular, 16px, `#777`, line-height 1.2.
- Pill chip text: IBM Plex Mono Regular, 14px, tracking -0.28px, `#1e1e1e`.

## Color
- `#1e1e1e` — text / token "Color 4"
- `#777` — secondary text, borders
- `#f9f9f9` — collage container background / token "Color 5"
- `#edf9ff` — special pill border accent / token "Color 3" (used only on 2 chips in the "Feel" row: Secure, Organized)
- `rgba(255,255,255,0.72)` / `rgba(255,255,255,0.56)` — pill chip backgrounds (frosted glass, needs `backdrop-filter: blur(5px)`)

## Assets
36 total photo-fragment images across the 3 collages (all `object-cover` rounded rectangles, no uniform size — treat each as an individually cropped/positioned image). Given the volume and the collage/mosaic nature, recommend exporting each collage (`24:644`, `24:689`, `24:592`) as ONE flattened composite image per row rather than reconstructing 36 absolutely-positioned photo crops in code — unless the design system specifically needs each photo swappable.
- Row 1 images (12): urls captured in code context for node `25:33` (imgImage367…imgImage380 range) — see raw context for exact download URLs if flattening is not chosen.
- Row 2 images (10): node `25:34` (imgImage381…imgImage404 range).
- Row 3 images (14): node `25:35` (imgImage388…imgImage405 range).
- Use `download_assets` on `24:644`, `24:689`, `24:592` individually if flattened composites are wanted (these calls were not made in this pass — only URLs were discovered via get_design_context).

## Uncertainties
- Exact font size/weight of the "Attributes" title (`22:316`) — not captured in a direct get_design_context call on that specific text node; inferred consistent with other section titles (128px Manrope Regular uppercase). Confirm before implementing.
- Two apparent copy typos: "Realiable" (should likely be "Reliable") and "Lather finishes" (should likely be "Leather finishes") — flagged verbatim from Figma; confirm intent with content owner before correcting in code.
- Row-to-row vertical rhythm in `25:36` (0px, 574px, 1148px tops for 459px-tall rows, implying ~115px gap) — confirmed by metadata coordinates, not independently re-verified via screenshot pixel measurement.
