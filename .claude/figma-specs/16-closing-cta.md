# 14 — Closing CTA ("Still curious?")

Figma file key: `YoGF1orUDvzuUkD7XCHZPs`
Root frame: `10:64` "Strategic Briefing" (1366×18017)

Confirmed section name: **"Still Curious?"** (H1 copy is literally `still curious?`, lowercase in source but rendered uppercase via CSS `uppercase`). This is the final section of the page (node ends at y=17249+768=18017, matching the root frame's total height exactly).

## Node identity

| Node | id | name | position | size |
|---|---|---|---|---|
| Section root | `41:576` | "Desktop - 2" | 0, 17249 (abs) | 1366×768 |
| Inner frame | `41:579` | (unnamed frame) | 0,0 rel to 41:576 | 1366×768 |
| Giant wordmark "BEYOND" | `41:585` | text | centered, left=682.5 (translate-x -50%), top≈`calc(75%-245px)` → ~331px | font-size 314.245px, single line, no wrap |
| H1 "still curious?" | `41:588` | text | 64, 86 | box 397×131 |
| Body paragraph | `41:590` | text (rich, 3 spans) | 64, `calc(25%+49px)` → ~241px | 373px wide |
| "Deep Dive" link + arrow | `41:613` | group | `calc(66.67%+143.33px)` → ~1054px, `calc(25%+49px)` → ~241px | auto (gap 29px) |
| Footer left "STRATEGIC BRIEFING" | `41:614` | text | 64, `calc(100%-65px)` → 703 | auto |
| Footer center "2026" | `41:617` | text | `calc(33.33%+203.67px)` → ~659px, 703 | auto |
| Footer right "DELL TECHNOLOGIES" | `41:616` | text | `calc(66.67%+176.33px)` → ~1087px, 703 | auto |

## Copy (verbatim)

- Giant background wordmark: `BEYOND`
- H1: `still curious?` (source text is lowercase; CSS applies `uppercase` transform → renders "STILL CURIOUS?")
- Body paragraph (3 spans, one styled inline):
  - Plain: `Explore the full research process, decision logic, interviews, workshop insights, and validation frameworks in the `
  - Link (underlined, colored): `Deep Dive`
  - Plain: `.`
- CTA link label: `Deep Dive` (separate large standalone link, node 41:612, distinct from the inline link above)
- Footer: `STRATEGIC BRIEFING` · `2026` · `DELL TECHNOLOGIES`

## Colors

- Section background: `#F1F1F1` (same hex as the SOM circle fill in section 07 — shared neutral token, e.g. `--color-neutral-100`).
- "BEYOND" wordmark: `color: white` (#FFFFFF), with `text-shadow: 0px 4px 4px rgba(255,255,255,0.25)` (a white-on-white soft shadow — very subtle emboss/glow effect since fill and shadow are both white against the light-gray `#F1F1F1` bg).
- H1 "still curious?": `#1E1E1E`.
- Body paragraph plain text: `#777777`.
- Body paragraph inline "Deep Dive" link: `#A63F1E` (same accent-orange token as section 07's SAM circle and shared with the CTA link below), underlined (`text-decoration: underline`, `text-underline-position: from-font`), font-weight Medium (vs Regular for surrounding text).
- Standalone CTA "Deep Dive" link (node 41:612): `#A63F1E`, font-weight SemiBold, 36px.
- Footer text (all 3 items): `#1E1E1E`.

No Figma variables bound on this node either (`get_variable_defs` returned `{}`) — all raw hex, no tokens defined in Figma itself.

## Typography

| Text | Node | Font | Weight | Size | Line-height | Tracking | Color |
|---|---|---|---|---|---|---|---|
| "BEYOND" wordmark | 41:585 | Lexend Exa | Medium | 314.245px | normal | -3.1424px | white + shadow (see above) |
| H1 "still curious?" | 41:588 | Manrope | Regular | 64px, uppercase | 0.96 | default | `#1E1E1E` |
| Body paragraph (plain runs) | 41:591 | Manrope | Regular | 20px | 1.2 | default | `#777777` |
| Body paragraph (inline link run) | 41:591 (span) | Manrope | Medium | 20px | 1.2 | default | `#A63F1E`, underline |
| CTA "Deep Dive" | 41:612 | Manrope | SemiBold | 36px | none (leading-none) | default | `#A63F1E` |
| Footer items (all 3) | 41:614/616/617 | IBM Plex Mono | SemiBold | 16px | normal | 3.2px | `#1E1E1E` |

## Layout

- Section: `flex flex-col`, `gap: 10px`, background `#F1F1F1`, fixed 1366×768 (last section, no scroll continuation below).
- H1 pinned top-left at (64, 86), matches the H1 inset pattern used elsewhere in the deck (64px left margin is a consistent page gutter).
- Body paragraph directly below H1 at (64, ~241px), 373px column width, 3 text runs inline within a single flex row wrapper (not a real multi-line block — the wrapping to 4 visual lines in the screenshot is natural text-wrap at 373px width, not hard breaks).
- Standalone "Deep Dive" CTA + arrow icon: positioned far right, roughly (1054, 241), `flex items-center gap-[29px]` — link label then arrow, horizontally laid out.
- Giant "BEYOND" wordmark: absolutely centered horizontally (`left-1/2` + `translate-x-[-50%]`), vertically anchored around y≈331 (`calc(75%-245px)` of 768px section height = 576-245=331), sized so it's cropped left/right at the section edges (confirmed by screenshot — the "B" and final "D" are clipped by the viewport at 1366px width, i.e. the wordmark is wider than the section and deliberately bleeds off both edges).
- Footer row: 3 items pinned to fixed x offsets at y=703 (i.e. `bottom: 65px` from section bottom): left item at x=64 (page gutter), center item at ~659px, right item at ~1087px. Not a flexbox space-between — these are absolute-positioned at calculated percentage+offset positions (`calc(33.33%+203.67px)` and `calc(66.67%+176.33px)`), effectively landing near thirds of the 1366px width but not exact thirds — treat as fixed px offsets: left=64, center≈659, right≈1087.

## Assets

- **Arrow icon** (node `41:610`, referenced as `imgArrow1` in the code dump): a horizontal right-pointing arrow SVG, rendered at 40×0 bounding box with `inset-[-7.36px_-2.5%_-7.36px_0]` (i.e. the visible glyph overflows its nominal 0-height box — actual rendered arrow is ~14.7px tall). Source URL (short-lived, re-fetch via `download_assets` on node `41:610` when ready to export): `https://www.figma.com/api/mcp/asset/177da962-2d52-4925-8743-7c1c92fa3d59`. Recommend exporting as SVG. **Not yet downloaded to `src/assets/`** — only listed per task scope; export when implementation begins.
- No other image assets in this section — "BEYOND" is live text (Lexend Exa), not an image/logo asset.

## Uncertainties

- H1 "still curious?" — source text node capitalization is lowercase with a CSS `uppercase` transform. Confirm with implementer whether to store the copy as lowercase-with-transform (matches Figma source of truth) or hardcode uppercase — recommend lowercase + `uppercase` class to match every other H1 in the deck (section 07's "Market & Trends" H1 uses the same pattern... actually that one's source text is already uppercase "MARKET &" — inconsistent authoring between sections, worth flagging to design).
- Exact footer x-offsets (659px center, 1087px right) are derived from `calc()` percentage expressions in the generated code, not confirmed against a clean grid — treat as approximate to ±1px, not exact design-intent thirds.
- The "BEYOND" wordmark's white-on-white shadow (`rgba(255,255,255,0.25)`) — purpose/visibility is minimal against the `#F1F1F1` bg; effect is barely perceptible, verify visually against the screenshot rather than assuming it needs pixel-perfect reproduction.
- Body paragraph's flex wrapper is `items-center` with `flex-[1_0_0]` on the inner `<p>` — width is content-driven at 373px per the fixed `w-[373px]` on the parent div; no explicit max-width beyond that was found.
