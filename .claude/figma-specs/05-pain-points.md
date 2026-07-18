# 05 — Pain Points

## Node identity
- Node id: `11:408`, name "Frame 6"
- File key: `YoGF1orUDvzuUkD7XCHZPs`
- Position in page flow: y = 3225 (within root frame `10:64`)
- Size: 1366 × 1855
- Confirmed section name from real content: **"Pain Points"** (heading text at `11:410`). Provisional name "Personas" was incorrect — this section is a pain-point list plus three verbatim user quotes, not persona cards.

Screenshot (full section, scaled): https://www.figma.com/api/mcp/asset/bb7d0035-2be4-4999-bdab-c3c6d49f3d66 (755×1024, original 1366×1855; short-lived)

This node was too tall for a single `get_design_context` call budget-wise, so it was inspected via `get_metadata` first, then split into child calls:
- `11:409` (heading wrapper, empty passthrough) + `11:410` (actual "Pain Points" text)
- `11:419` "Frame 32" (6-row pain-point list)
- `12:535` "Frame 1321317460" (quote 1 — sales executive)
- `12:542` "Frame 1321317461" (quote 2 — field executive, Porto Alegre)
- `12:549` "Frame 1321317462" (quote 3 — field executive SMB, São Paulo)

## Layout

Absolute/flow positions per `get_metadata` (all coordinates relative to `11:408` origin, i.e. subtract nothing — these are local x/y within the 1366×1855 frame):

| Child | id | x | y | w | h |
|---|---|---|---|---|---|
| Heading wrapper | `11:409` | 64 | 86 | 420 | 61 |
| Heading text "Pain Points" | `11:410` | 64 | 86 | 222 | 122 |
| Pain-point list | `11:419` | 668 | 86 | 634 | 476 |
| Quote 1 (sales exec) | `12:535` | 485 | 1121 | 817 | 221 |
| Quote 2 (field exec, Porto Alegre) | `12:542` | 64 | 767 | 397 | 149 |
| Quote 3 (field exec SMB, São Paulo) | `12:549` | 64 | 1620 | 817 | 149 |

Overall reading order top-to-bottom / left-right does not map to a simple single-column flow — it's a free-form editorial layout: heading top-left, pain-point list top-right, quote 2 mid-left, quote 1 mid-right (lower), quote 3 bottom-left-to-wide.

### Heading ("Pain Points", `11:410`)
- Font Manrope Regular, 64px, uppercase, `leading-[0.96]`, color `#1e1e1e`
- Two stacked lines: "Pain" / "Points" (same visual pattern as "User Values" heading in section 06 — likely a shared heading style used across the deck)

### Pain-point list (`11:419`, "Frame 32")
- `flex-col`, `items-start`, full width (634px)
- 6 rows, each: `border-top: 1px solid #777`, `flex` (row), `gap-24px`, `items-center`, `padding: 8px 0`, full width
- Each row = two columns:
  - Col 1 (label): fixed width, `h-40px`, `items-center` — label text, IBM Plex Mono SemiBold 16px, tracking 3.2px, uppercase, color `#1e1e1e`. Width 295px (from code); metadata shows label wrapper x=0 w=295, label text sometimes wraps to 2 lines (e.g. "Lack of Premium / Options") — no fixed width override needed beyond 295px, wraps naturally.
  - Col 2 (description): `flex-[1_0_0]` (fills remaining ~315px), Manrope Regular 16px, `leading-[1.2]`, color `#777`
- Row content, verbatim:
  1. **Mobility Friction** — "Constantly moving between offices, client sites, home, and transit creates setup friction, item-loss risk, and workflow disruption."
  2. **Productivity Constraints** — "Long hours in transit and non-ideal work surfaces make it difficult to complete dense tasks efficiently."
  3. **Power Anxiety** — "Reliable internet, battery life, and safe charging access are essential but inconsistent, creating ongoing work anxiety."
  4. **Security Exposure** — "Working in public spaces increases risks around data visibility, unsecured networks, and device protection."
  5. **Cognitive Load** — "Repeated micro-decisions, disrupted routines, and constant adaptation drain energy before high-value client work."
  6. **Lack of Premium Options** — "Current carrying solutions at Dell do not fully match client-facing expectations for polish, prestige, and efficiency."

### Quote blocks (3x, same pattern)
Each is `flex-col`, `gap-24px`, `items-start`:
- Quote text: Manrope SemiBold, 36px, `leading-none`, color `#1e1e1e`, with an accent-colored inline span (`#a63f1e`) highlighting a key phrase. Straight/curly quotation marks are literal characters (" ") in source text, colored same as surrounding text (not accent).
- Attribution line: IBM Plex Mono Regular, 14px, `leading-[1.2]`, uppercase, color `#777`

Verbatim quote 1 (`12:535`, w=817, at x=485 y=1121):
> "**The hardest part isn't the job — it's managing the backpack.** Checking if the video cable is there, if the headset is charged, if the power bank will last the flight. You become a logistics manager before you even start selling."
Attribution: "sales EXECUTIVE, YOUTUBE DEPOIMENT." (accent span = bolded first sentence only, colored `#a63f1e`)

Verbatim quote 2 (`12:542`, w=397, at x=64 y=767):
> "I like to **adapt my setup** depending on the place I'm in."
Attribution: "Field executive, PORTO ALEGRE - BRAZIL." (accent span = "adapt my setup" only)

Verbatim quote 3 (`12:549`, w=817, at x=64 y=1620):
> "The client expects the executive to arrive with the best accessories. **A nylon bag is a letdown.**"
Attribution: "Field executive SMB, SÃO PAULO - BRAZIL." (accent span = "A nylon bag is a letdown." only)

Note: source text for quote 1 has a typo/foreign-language artifact "DEPOIMENT." (Portuguese "depoimento" = testimonial, likely truncated/typo in source) — reproduce verbatim, do not "fix".

## Typography summary

| Element | Font | Weight | Size | Line-height | Letter-spacing | Color | Transform |
|---|---|---|---|---|---|---|---|
| Section heading | Manrope | Regular | 64px | 0.96 | normal | `#1e1e1e` | uppercase |
| Pain-point label | IBM Plex Mono | SemiBold | 16px | normal | 3.2px | `#1e1e1e` | uppercase |
| Pain-point description | Manrope | Regular | 16px | 1.2 | normal | `#777` | none |
| Quote text | Manrope | SemiBold | 36px | none (1.0) | normal | `#1e1e1e` / accent `#a63f1e` | none |
| Quote attribution | IBM Plex Mono | Regular | 14px | 1.2 | normal | `#777` | uppercase |

## Color
- Background: UNKNOWN explicit fill on `11:408` itself — not returned in the child-scoped calls (parent bg not queried directly since design-context was only called on children). Screenshot shows same off-white `#fdfdfd` background consistent with sibling sections. Assume `#fdfdfd` — verify against parent node fill if precision needed.
- Divider/border: `#777`
- Primary text: `#1e1e1e`
- Secondary text: `#777`
- Accent (quote highlight): `#a63f1e`
- No Figma variables bound (`get_variable_defs` on `11:408` returned empty `{}`). All hex values are literal fills, not tokens.

## Assets
None — this section is pure typography, no images/vectors referenced in any of the inspected children.

## Uncertainties
- Exact background fill of the outer `11:408` frame not directly confirmed (inferred `#fdfdfd` from screenshot/sibling pattern).
- The free-form absolute positions of the 3 quote blocks and the list suggest a manually art-directed layout rather than a simple grid/flow. Implementers should treat the x/y/w/h table above as ground truth for an absolute/grid layout rather than inferring a generic 2-column flex.
- Quote 1 attribution "YOUTUBE DEPOIMENT." — verbatim from source, likely intended as "YouTube Testimonial" or similar; flagged, not corrected.
- No line divider/rule between heading and body content observed (unlike section 04's eyebrow-bar pattern) — this section has no top eyebrow bar; heading sits directly in the content canvas.
