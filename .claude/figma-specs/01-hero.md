# 01 — Hero

## Node identity
- Node id: `8:15`, name "Desktop - 1"
- Size: 1366 × 768, position y=0 (top of page)
- File key: `YoGF1orUDvzuUkD7XCHZPs`
- Child image-container node: `9:26` (768px tall, full width, holds bg photo + nav + wordmark/subhead)

## Confirmed section name
Hero — matches provisional guess. Content is a full-bleed photographic hero with a giant wordmark and tagline; no eyebrow label precedes it (it's the page's very first section).

## Layout
- Root: flex-col, gap 10px, `items-start`, full width/height, background white (fallback under image).
- Image container `9:26`: relative, 768×1366, background image absolutely positioned `inset-0`, `object-cover`.
- **Nav bar** (`9:25`): absolutely positioned `top:0, left:0`, width 1366px, height 72px, `flex items-center justify-center`, gap 32px.
  - "Briefing" tab (`9:22`): `flex-col items-center justify-center`, padding `8.028px 12px`(px/py as `px-[8.028px] py-[12px]`), bottom border `1.606px solid #fdfdfd` (active-tab underline).
  - "Deep Dive" tab (`9:23`): `flex items-center justify-center`, padding `8.028px`, no border (inactive tab).
- **Wordmark + tagline block** (`86:126`): absolutely positioned `left:-103px, top:151px`, box 1571×479 (wider than viewport — text is centered and overflows/crops at frame edges), `flex-col`, `gap:7px`, `items-center`, `text-center`.

## Typography
| Element | Font | Weight | Size | Line-height | Letter-spacing | Color |
|---|---|---|---|---|---|---|
| "Briefing" nav label | Manrope | SemiBold | 20px | normal | — | `#fdfdfd` |
| "Deep Dive" nav label | Manrope | Medium | 20px | normal | — | `#fdfdfd` |
| "BEYOND" wordmark | Lexend Exa | Medium | 314.245px | normal | -3.1424px | `#fdfdfd` |
| Tagline "For those who work anywhere and go everywhere." | Manrope | SemiBold | 36px | 1.2 | — | `#ffffff` (white) |

Exact copy (verbatim):
- Nav: "Briefing" / "Deep Dive"
- Wordmark: "BEYOND"
- Tagline: "For those who work anywhere and go everywhere." (two lines per Figma's `w-[518px]` wrap; wraps as "For those who work anywhere" / "and go everywhere.")

## Color
- Nav text / wordmark / tagline: `#fdfdfd` and `#ffffff` (both literal whites used — nav+wordmark use `#fdfdfd`, tagline node uses `text-white` i.e. `#ffffff`). Not variable-bound.
- Active-tab underline: `#fdfdfd`, 1.606px.
- No other named-variable fills detected (get_variable_defs on this node returned `{}`).

## Assets
- Background photo: Figma node `9:26` fill, exported reference name `Frame4` in generated code, temp URL `https://www.figma.com/api/mcp/asset/a287543e-2ec4-4bcf-a142-5e4147ccc8e2` (expires ~7 days — re-fetch via `download_assets` on node `9:26` before implementation). Content: close-up macro photo of a dark gray fabric bag/backpack with visible zipper and handle, warm-toned blurred background. Export as JPG (photographic).
- No vector/icon assets in this section beyond the tab underline (a CSS border, not an asset).

## Uncertainties
- Exact crop/viewport behavior of the oversized wordmark box (1571px wide inside a 1366px frame, offset -103px) — implement as `overflow-hidden` on the section with text horizontally centered and naturally clipped; confirm visually against screenshot if pixel-perfect crop matters.
- Whether "Briefing"/"Deep Dive" are functional nav links/tabs or purely decorative — no interaction/href data present in Figma; treat as UI-only unless product spec says otherwise.
- The two whites (`#fdfdfd` vs `#ffffff`) are used inconsistently across nearby text nodes; likely negligible visually but kept distinct per source data rather than merged.
