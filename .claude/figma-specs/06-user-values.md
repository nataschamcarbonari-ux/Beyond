# 06 — User Values

## Node identity
- Node id: `12:561`, name "Desktop - 4"
- File key: `YoGF1orUDvzuUkD7XCHZPs`
- Position in page flow: y = 5080 (within root frame `10:64`)
- Size: 1366 × 977
- Confirmed section name from real content: **"User Values"** (heading text at `12:579`). Provisional name "MarketAnalysis" was incorrect — this is a 4-value editorial grid (Sense of Control, Professional Credibility, Emotional Stability, Client Presence) with two supporting photos, not a market-trend narrative.

Screenshot: https://www.figma.com/api/mcp/asset/0caa7b57-7b68-4e68-898f-d4f8ead22808 (short-lived; re-fetch via get_screenshot on `12:561` if expired)

## Layout

Root: `flex-col`, `items-start`, `bg-#fdfdfd`, full width. Single inner canvas `12:562`: `h-977px w-1366px`, absolute-positioned children.

### Heading (`12:579`)
- `absolute`, `left-64 top-86`
- Manrope Regular, 64px, uppercase, `leading-[0.96]`, color `#1e1e1e`
- Two stacked lines: "User " / "Values" → visually "USER VALUES"

### Top-right photo (`28:672`)
- `absolute`, `left: calc(33.33% + 7.67px)` (≈ 463px), `top-86`, `w-839 h-263`
- `border-top: 1px solid #777`, `border-left: 1px solid #777`
- Contains `imgFrame31`, cropped/zoomed (`h-180.36%`, `left -3.68%`, `top -9.04%`, `w-103.65%`) — flat-lay photo of tech accessories/gear (cables, charger, phone, mouse, laptop, headphones case, AirPods, notebook) per screenshot

### Value-card grid (`28:671`)
- `absolute`, `left-64`, `top: calc(25% + 48.75px)` (≈ 293px), `w-1238 h-598`
- Composed of 5 absolutely-positioned children forming an editorial (non-uniform) grid — not a simple CSS grid; implement as absolute/relative positions per table below or reconstruct as a custom grid matching pixel geometry.

| Card | id | x | y | w | h | border | bg | fg |
|---|---|---|---|---|---|---|---|---|
| Sense of Control | `14:603` | 0 | 0 | 399 | 310 | `border-top + border-right: 1px solid #777` | `#fdfdfd` (inherited) | dark text |
| Professional Credibility | `14:582` | 399 | 56 | 839 | 203 | `border-top: 1px solid #777` | `#fdfdfd` (inherited) | dark text |
| Emotional Stability | `14:610` | 2 | 310 | 397 | 288 | `border-top + border-right: 1px solid #777` | **`#a63f1e`** (accent fill) | white text |
| Client Presence | `14:615` | 399 | 259 | 301 | 339 | `border-top: 1px solid #777` | `#fdfdfd` (inherited) | dark text |
| Photo (bottom-right) | `28:665` | 700 | 259 | 538 | 339 | `border-top: 1px solid #777` | — | `imgFrame30` (client meeting photo, `object-cover`) |

Each text card: `flex-col`, `gap-24px`, `items-start`, `justify-end` (content bottom-aligned within card), `padding-24px`.

Card internal structure: title `<p>` (Manrope SemiBold 36px, `leading-none`) directly, or wrapped in a flex row `items-center w-full` div — functionally equivalent, then body paragraph in a similar wrapper.

## Typography

| Element | Font | Weight | Size | Line-height | Letter-spacing | Color |
|---|---|---|---|---|---|---|
| Section heading | Manrope | Regular | 64px | 0.96 | normal | `#1e1e1e` |
| Card title (light cards) | Manrope | SemiBold | 36px | none (1.0) | normal | `#1e1e1e` |
| Card title (accent card) | Manrope | SemiBold | 36px | none (1.0) | normal | `#ffffff` |
| Card body (light cards) | Manrope | Regular | 16px | 1.2 | normal | `#777` |
| Card body (accent card) | Manrope | Regular | 16px | 1.2 | normal | `rgba(255,255,255,0.82)` |

Verbatim copy:

**Sense of Control**
> "For users with demanding mobile routines, preparation is essential. They value being able to plan ahead, know exactly what they are carrying, and feel confident that every work essential is available when needed. Control reduces uncertainty and allows them to focus on the work itself rather than logistics."

**Professional Credibility**
> "Users see their work tools as an extension of their professional image. The devices, accessories, and workspace they bring into client environments help signal competence, discipline, and brand alignment. A polished kit is not only useful — it reinforces trust and can even become part of the sales conversation."

**Emotional Stability** (accent card, white text on `#a63f1e`)
> "Because their workday constantly shifts across locations, users rely on familiar tools and routines to create a sense of continuity. A consistent setup becomes an emotional anchor, helping them feel grounded even when the environment changes. Reliability, familiarity, and predictability are highly valued."

**Client Presence**
> "Users want the client meeting to feel protected from interruptions. They value solutions that help them arrive prepared, stay focused, and avoid visible friction during critical moments. The goal is to be fully present, attentive, and composed when interacting with clients."

## Color
- Background: `#fdfdfd`
- Divider/border (all card top/side rules): `#777`
- Heading/title text (light): `#1e1e1e`
- Body text (light): `#777`
- Accent card background: `#a63f1e`
- Accent card title: `#ffffff`
- Accent card body: `rgba(255,255,255,0.82)`
- No Figma variables bound (`get_variable_defs` on `12:561` returned empty `{}`). All hex/rgba values are literal fills — note `#a63f1e` matches the quote-accent color used in section 05 ("Pain Points"), suggesting this is the deck's shared accent/brand color (candidate token name: `accent` / `brand-rust` — confirm naming with design system if one exists).

## Assets
| Asset | Figma ref | Description | Export rec. |
|---|---|---|---|
| `imgFrame30` | https://www.figma.com/api/mcp/asset/2de74783-8e57-44e9-94e1-f7d75c458768 | Photo: two men at a client meeting table by a window (bottom-right, Client Presence card area), `object-cover` fill of 538×339 box | JPG |
| `imgFrame31` | https://www.figma.com/api/mcp/asset/718fd2d8-5f91-44d7-ae75-2c5f2def6663 | Photo: flat-lay of tech/travel accessories on dark background (top-right, 839×263 box), cropped/zoomed | JPG |

Neither downloaded yet per task instructions (list only).

## Uncertainties
- No top eyebrow bar (like "AUDIENCE" in section 04) precedes this section's heading — heading sits directly at top of the 977px canvas. Confirmed absent, not an oversight.
- Card grid geometry (5 absolutely-positioned boxes with non-uniform borders) does not map cleanly to a standard CSS Grid without either (a) replicating exact pixel offsets via a custom grid-template, or (b) using absolute positioning matching the table above. Recommend using explicit grid-template-columns/rows tuned to match 0/399/700/1238 x-breakpoints and 0/56/259/310/598 y-breakpoints, or absolute positioning for pixel fidelity.
- Whether `#a63f1e` is meant to be a shared design token across the whole deck (it recurs in section 05's quote accents) is inferred, not confirmed via a named Figma variable — `get_variable_defs` found no bound variables on either node.
