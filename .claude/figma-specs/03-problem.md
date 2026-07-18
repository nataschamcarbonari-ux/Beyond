# 03 — Problem

## Node identity
- Eyebrow: node `11:323`, name "Frame 29", size 1366×51 (rendered content 40px tall), y=1587
- Main content: node `11:196`, name "Desktop - 3", size 1366×768, y=1638
- File key: `YoGF1orUDvzuUkD7XCHZPs`

## Confirmed section name
Problem — matches provisional guess and is confirmed by both the literal eyebrow text "PROBLEM" and the content (a problem-statement headline plus three supporting statistics with citations).

## Layout

### Eyebrow strip (`11:323`)
- Identical structure/styling to the section-2 eyebrow: `flex items-center`, background `#fdfdfd`, bottom border `1px solid #777`, inner padding `0 64px`, height 40px.
- Label text node `11:325`: "PROBLEM".

### Main content (`11:196` → `11:197`, 768×1366)
- Outer wrapper `93:537`: absolutely positioned `left:64px, top:86px`, size 1238×596, `flex-col`, `items-center`, `justify-between` (headline block pinned to top, stats row pinned to bottom of the 596px box).
  - **Headline + subhead block** (`93:535`): `flex-col`, `gap:30px`, `items-center`, `text-center`, width 992px.
    - Headline (`11:199`): single paragraph, mixed-color inline spans, width constrained to 992px (wraps to 4 lines per screenshot).
    - Subhead (`11:231`): width 396px, centered.
  - **Stats row** (`93:536`): `flex`, `gap:24px`, `items-center`, full width (1238px), 3 equal-ish stat columns.
    - Each stat column: `flex-col`, `gap:10px`, `items-end`-anchored via `justify-end`, `items-center`, fixed height 217px, horizontal padding `69px`, width ~397/396/397px.
    - Column 1 (`11:238`) and column 3 (`11:251`): big number set as `<number><unit>` inline (e.g. "18" + "min"), caption below.
    - Column 2 (`11:239`): big number "60" + "%" inline, with an extra empty 40px-tall/0-width spacer div (`11:242`, no visible purpose — likely a leftover layout node), caption below.

## Typography
| Element | Font | Weight | Size | Line-height | Color |
|---|---|---|---|---|---|
| Eyebrow "PROBLEM" | IBM Plex Mono | SemiBold | 16px | normal, letter-spacing 3.2px | `#1e1e1e` |
| Headline (neutral part) | Manrope | Medium | 64px | normal (leading-none per span) | `#1e1e1e` |
| Headline (emphasized part) | Manrope | Medium | 64px | normal (leading-none per span) | `#a63f1e` |
| Subhead | Manrope | Regular | 20px | 1.2 | `#777` |
| Stat big number | Manrope | Regular | 96px (number) / 64px (unit, e.g. "min"/"%") | 0.96 | `#1e1e1e` |
| Stat caption body | Manrope | Regular | 16px | 1.2 | `#777` |
| Stat caption citation link (e.g. "Cisco Systems") | Manrope | Medium | 16px | 1.2 | `#a63f1e`, underlined |
| Stat caption "[" / ", 2024]" bracket text | Manrope | Regular | 16px | 1.2 | `#777` |

Note: source JSX wraps headline and stat-number text in an outer `Georgia:Regular` element, but every visible glyph is inside a nested Manrope-font `<span>` that overrides it (and for the stat numbers the outer Georgia text is literally `text-[0px]`, i.e. invisible). **Georgia is not actually rendered anywhere in this section** — implement entirely in Manrope.

Exact copy (verbatim):
- Headline: "AI is making knowledge work faster. But " (color `#1e1e1e`) + "high-mobility professionals still lose attention before the real work begins." (color `#a63f1e`, this is two concatenated spans forming one continuous clause)
- Subhead: "If AI promises massive efficiency gains, why do we still waste time on basic things like connectivity, setup, and organization?"
- Stat 1: "18min" — caption: "lost per day finding and setting up a workspace in hot-desk environments. [" + link "Cisco Systems" (→ https://investor.cisco.com/news/news-details/2024/Cisco-Hybrid-Work-Study-Reveals-Companies-Need-to-Modernize-Offices/default.aspx) + ", 2024]"
- Stat 2: "60%" — caption: "60% of U.S. and Canadian employers now use desk sharing or hoteling. [" + link "Archie" (→ https://archieapp.co/blog/hot-desking-statistics/) + ", 2025]"
- Stat 3: "23min" — caption: "to fully regain focused attention after a single interruption. [" + link "University of California" (→ https://dl.acm.org/doi/10.1145/1357054.1357072?...) + ", 2008]"

## Color
- Background: `#fdfdfd`
- Body/heading neutral text: `#1e1e1e`
- Emphasis/accent text + citation links: `#a63f1e` (rust/burnt orange), links underlined with `text-underline-offset` from font
- Muted captions/subhead: `#777777`
- No variable bindings detected on this node (`get_variable_defs` → `{}`).

## Assets
- No image or vector assets in this section — pure typography/stats layout.
- One empty zero-width spacer div (`11:242`, 0×40px) in the "60%" stat column with no visible content — layout artifact only, not an asset.

## Uncertainties
- Exact per-column width variance (397px / 396px / 397px) is likely rounding noise from Figma's flex distribution across 1238px÷3 with 24px gaps; implement as three equal-width flex-1 columns rather than replicating the 1px discrepancies.
- Citation link hover/visited states not specified in Figma (static design) — use standard underline treatment shown; no separate hover style data available.
- The `justify-between` on the 596px-tall outer wrapper means the vertical gap between headline block and stats row is fully dependent on content height, not a fixed gap value — implement with `justify-between` (or measure and hardcode the resulting gap, approx 596 − headline-block-height − 217, if a fixed-gap flex layout is preferred).
