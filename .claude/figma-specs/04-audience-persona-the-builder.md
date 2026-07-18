# 04 — Audience Persona: "The Builder"

## Node identity
- Node id: `93:533`, name "Frame 1321317755"
- File key: `YoGF1orUDvzuUkD7XCHZPs`
- Position in page flow: y = 2406 (within root frame `10:64`)
- Size: 1366 × 819
- Confirmed content: this is a single-persona spotlight slide. Eyebrow label reads "AUDIENCE"; persona name is "The Builder". If more persona slides exist elsewhere in the file (not covered by this node), this spec only documents this one instance.

Screenshot: https://www.figma.com/api/mcp/asset/6a9edc52-640d-4ff4-847a-e689fedb8e85 (short-lived; re-fetch via get_screenshot on `93:533` if expired)

## Layout

Root: `flex-col`, `items-start`, full width, no gap (two stacked full-width rows).

### Row 1 — eyebrow bar (`11:326`)
- `h-[51px]`, full width, `bg-#fdfdfd`, `border-bottom: 1px solid #777`
- Flex row, `items-center`
- Inner wrapper `11:327`: `flex-[1_0_0]`, `h-[40px]`, `items-center`, `padding: 0 64px`
- Text "AUDIENCE" (`11:328`)

### Row 2 — content panel (`11:266`, named "Desktop - 4")
- `bg-#fdfdfd`, `overflow: hidden`, full width
- Fixed-size inner canvas `11:267`: `h-[768px] w-[1366px]` (absolute-positioned children)

Absolute children, all within the 1366×768 canvas:
- **Headline block** (`11:334`): `left-64 top-87`, width 420px, flex-col
  - "The" / "Builder" as two stacked `<p>` lines (headline text, see Typography)
- **Background image** (`11:344`, "image 6"): `left: calc(33.33% + 212.67px)` (≈ 668px), `top: 0`, `w-698 h-768`. Object-fit crop: `left -28.62%`, `top -0.03%`, `w 201.75%`, `h 100%` — i.e. a large image cropped/zoomed to fill this region. This is the woman-at-desk photo visible behind the framed portrait.
- **Framed portrait card** (`11:352` → `11:349`): `left: calc(33.33% + 212.67px)`, `top: -11px`, container `h-442px`, `items-end`
  - Card `11:349`: `bg-#fdfdfd`, `border: 1px solid #777`, `padding: 5.843px`, `w-343 h-442.508`, centers image
  - Image `11:356` ("image 7"): aspect ratio 774/1024, `object-cover`, fills card
  - This appears to be the "Builder needs chart" / stats infographic image seen in the screenshot (icons: workforce %, multi-workspace use %, mobility %, days WFH; plus horizontal bar chart "Builder needs chart*")
- **Body copy block** (`11:379`): `left-64`, `top: calc(50% + 13px)` (≈ 417px), `w-397 h-285`, flex-col, `justify-between`
  - Paragraph (`11:337`): persona description
  - Uppercase mono line (`11:378`): journey path
- **Divider lines** (`41:635`, `41:636`): decorative horizontal rule SVGs (`imgLine2`, `imgLine3`) positioned mid-canvas, separating the stat-icon area from the bar-chart area within the portrait-card image. These are baked into the portrait image asset area, not separately styled text dividers — treat as part of image `11:356` visual, OR as separate overlay lines at `top: calc(50% + 46px)` / `calc(50% + 45px)`. Width 356px and 342px respectively, `h-0` (hairline).

## Typography

| Element | Font | Weight | Size | Line-height | Letter-spacing | Color | Transform |
|---|---|---|---|---|---|---|---|
| Eyebrow "AUDIENCE" | IBM Plex Mono | SemiBold | 16px | normal | 3.2px | `#1e1e1e` | uppercase (literal caps in source) |
| Headline "The" / "Builder" | Manrope | Regular | 128px | 0.96 | normal | `#1e1e1e` | uppercase |
| Body paragraph | Manrope | Regular | 20px | 1.2 | normal | `#777` | none |
| Journey path line | IBM Plex Mono | Regular | 14px | (inherit ~1.2) | normal | `#777` | uppercase |

Exact copy:
- Headline: "The" (line 1) / "Builder" (line 2) — rendered as "THE BUILDER" via CSS `uppercase` on literal text "The"/"Builder"
- Body: "One of the Dell's persona, is a high‑mobility executive who must deliver top‑tier performance anywhere, maintaining continuity, authority, and efficiency as work shifts constantly between environments."
- Journey path: "airport → hotel → client → third place " (trailing space in source; arrows are literal "→")

## Color
- Background: `#fdfdfd`
- Divider/border: `#777`
- Heading/eyebrow text: `#1e1e1e`
- Body/secondary text: `#777`
- No Figma variables found bound to this node (`get_variable_defs` on `93:533` returned empty `{}`). Treat hex values as literal.

## Assets
| Asset | Figma ref | Description | Export rec. |
|---|---|---|---|
| `imgImage6` | https://www.figma.com/api/mcp/asset/1d484bfa-4219-4505-b87b-976c54dde81d | Background lifestyle photo (woman working at desk), cropped/zoomed | PNG/JPG |
| `imgImage7` | https://www.figma.com/api/mcp/asset/901c8a24-b6a2-44e2-99c9-0f8bdd405be6 | Framed infographic/stat-card image (icons + bar chart "Builder needs chart*", stats: 10% Workforce, 76% Use Multiple workspaces, 20% More mobile, 2 days Work from office/week) | PNG (contains baked-in text/chart, not editable — confirm with design if this should be rebuilt as live chart instead) |
| `imgLine2` | https://www.figma.com/api/mcp/asset/7e87571b-9880-4285-8998-d6321d70adfa | Decorative hairline SVG, w-356 | SVG |
| `imgLine3` | https://www.figma.com/api/mcp/asset/a99c5c9b-17db-433b-9ffa-292bcd44b4ee | Decorative hairline SVG, w-342, rotated 180° | SVG |

None downloaded yet per task instructions (list only).

## Uncertainties
- The stat/chart image (`imgImage7`) bakes in text content (percentages, labels, bar chart) as a flat raster/vector image rather than structured DOM — UNKNOWN whether the design intends this to be rebuilt as live HTML/CSS (accessible, translatable) or kept as a static image. Flag for product decision.
- `imgLine2`/`imgLine3` positioning suggests they visually divide the stat-icon row from the bar-chart row inside the portrait card graphic — but since that graphic is a single flattened image (`imgImage7`), these two line overlays may be redundant/legacy leftover shapes sitting behind or in front of the image. Visually not distinguishable as separate elements in the screenshot. Confirm necessity before implementing as separate DOM elements.
- Only one persona slide was in scope (`93:533`). If "Audience" as a full section includes multiple personas beyond "The Builder", those sibling nodes were not covered by this task and are UNKNOWN.
- Exact original (non-cropped) dimensions/source of `imgImage6` and `imgImage7` are UNKNOWN beyond the crop math shown above.
