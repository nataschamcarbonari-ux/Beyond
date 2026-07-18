# 07 — Market & Trends (TAM/SAM/SOM)

Figma file key: `YoGF1orUDvzuUkD7XCHZPs`
Root frame: `10:64` "Strategic Briefing" (1366×18017)

Confirmed section name: **"Market & Trends"** (H1 copy is literally `MARKET &` / `TRENDS`, uppercase, two lines).
Eyebrow/label above it reads **"MARKET ANALISYS"** (verbatim from Figma — note this is a typo for "ANALYSIS" in the source design; kept verbatim per instructions, flag to implementer to confirm before shipping).

The stale prior guess ("three overlapping circles = TAM/SAM/SOM") is **confirmed correct** for this design — it really is a 3-circle overlapping venn/bubble chart with TAM, SAM, SOM values. Exact geometry, colors, and z-order below (previously unverified, now measured from real render).

## Node identity

| Node | id | name | x,y (page-abs, y relative to section top) | size |
|---|---|---|---|---|
| Eyebrow bar | `14:634` | "Frame 30" | 0, 6057 (abs) | 1366×51 |
| Main section | `17:264` | "Desktop - 5" | 0, 6108 (abs) | 1366×1095 |
| Inner frame | `17:265` | "Frame 6" | 0,0 rel to 17:264 | 1366×1095 |
| Circles group | `17:275` | "Group 64" | 63, 467 rel to 17:265 | 1239×542 |
| TAM circle | `17:276` (ellipse `0:3`) | "Shape with text" | 63, 467 rel to 17:265 | 542×542 |
| SAM circle | `17:277` (ellipse `0:5`) | "Shape with text" | 570, 527 rel to 17:265 | 422×422 |
| SOM circle | `17:278` (ellipse `0:7`) | "Shape with text" | 957, 566 rel to 17:265 | 345×345 |
| H1 "Market & Trends" | `17:270` | text | 64, 87 | box 600×246 |
| Intro paragraph | `17:272` | text | ~905, 225 (calc(66.67%-5.67px)) | 397×96 |
| Empty decorative div | `17:266` | "Frame 39" | 64, 86 | 420×61 — no visible fill/stroke in render; likely legacy/unused. UNKNOWN purpose, ignore unless it turns out to carry a border on hover/other state. |

Note: coordinates above marked "rel to 17:265" come from Figma metadata which reports **absolute-to-frame** coordinates (not nested-relative to immediate parent), confirmed by cross-checking 17:276's x/y matching Group 64's own x/y exactly.

## Copy (verbatim)

- Eyebrow: `MARKET ANALISYS`
- H1 line 1: `Market &`
- H1 line 2: `Trends`
- Intro paragraph: `A recovering, premiumizing business-travel market creates space for integrated, intelligent, and durable mobile-work solutions.`
- TAM label: `TAM ` (note: trailing space in source text node `17:280`)
- TAM value: `$15.2B`
- TAM description: `Global annual opportunity modeled from ~85M high-mobility professionals, 5-year replacement cycle, $899 price point.`
- SAM label: `SAM ` (trailing space, node `17:284`)
- SAM value: `$8.9B`
- SAM description: `North America + Western Europe annual opportunity, modeled from ~50M professionals and a 20% annual refresh.`
- SOM label: `SOM` (no trailing space, node `17:288`)
- SOM value: `$89.9M`
- SOM description: `realistic Dell opportunity: 1% capture of the premium laptop base in the first 24–36 months. ` (trailing space + en-dash in "24–36" verbatim)

## Circle geometry (measured, local coords within Group 64 / frame 17:265, px)

All three circles share the same vertical center line.

| Circle | Diameter | Radius | Center (local x,y) | Center (abs page x,y within 17:265) | Left edge x | Right edge x |
|---|---|---|---|---|---|---|
| TAM | 542px | 271px | (271, 271) | (334, 738) | 63 | 605 |
| SAM | 422px | 211px | (718, 271) | (781, 738) | 570 | 992 |
| SOM | 345px | 172.5px | (1066.5, 271.5) | (1129.5, 738.5) | 957 | 1302 |

Overlaps (measured, not just eyeballed):
- TAM∩SAM: TAM right edge (605) > SAM left edge (570) → overlap width 35px at the shared centerline. Vesica intersection points computed at local (526.86, 181.7) and (526.86, 360.3) — i.e. the lens spans roughly y=182 to y=360 (±89px from centerline).
- SAM∩SOM: SAM right edge (992) > SOM left edge (957) → overlap width 35px at centerline.
- TAM and SOM do **not** touch (605 to 957 gap).

## Z-order (confirmed via pixel sampling on the actual render, not guessed)

Back → front: **SAM → SOM → TAM** (TAM topmost).

Evidence: sampled pixels along SAM's own fill boundary inside the SAM∩SOM overlap zone return SOM's gray (241,241,241), i.e. SOM paints over SAM's edge. Sampled pixels along TAM's stroke path inside the TAM∩SAM overlap zone return the stroke gray blended over orange (not pure orange), i.e. TAM's stroke paints over SAM's fill. TAM's own fill is transparent (see below), so SAM's orange shows straight through the TAM∩SAM overlap interior — only TAM's 1px stroke sits visibly on top.

Practical CSS implication: render SAM first, then SOM (opaque, on top of SAM), then TAM last (fill = none/background color, 1px stroke, on top of everything).

## Circle fills/strokes (hex, sampled directly from rendered pixels — no Figma variables bound, see below)

- **TAM**: fill = transparent / matches page background (sampled interior pixel `#FCFCFC`, page bg declared as `#FDFDFD` in code — treat as "no fill, shows page bg"). Stroke: 1px solid `#777777` (sampled boundary pixel `rgb(119,119,119)` exactly).
- **SAM**: fill = solid `#A63F1E` (sampled `rgb(166,63,30)` exactly). This is the same accent orange used for the "Deep Dive" link text in the ClosingCta section — treat as a shared brand accent token, e.g. `--color-accent-rust: #A63F1E`.
- **SOM**: fill = solid `#F1F1F1` (sampled `rgb(241,241,241)` exactly). This matches the ClosingCta section's page background color — treat as a shared neutral token, e.g. `--color-neutral-100: #F1F1F1`.

No Figma variables are bound on this node (`get_variable_defs` returned `{}`) — all colors above are raw fills/strokes with no token in Figma itself; assign your own token names in code.

## Typography

| Text | Node | Font | Weight | Size | Line-height | Tracking | Color |
|---|---|---|---|---|---|---|---|
| Eyebrow "MARKET ANALISYS" | 14:636 | IBM Plex Mono | SemiBold | 16px | normal | 3.2px (letter-spacing) | `#1E1E1E` |
| H1 "Market & / Trends" | 17:270 | Manrope | Regular | 128px, uppercase | 0.96 | default | `#1E1E1E` |
| Intro paragraph | 17:272 | Manrope | Regular | 20px | 1.2 | default | `#777777` |
| TAM label "TAM" | 17:280 | IBM Plex Mono | Regular | 24px | 1.5 | -0.528px | `#1E1E1E` |
| TAM value "$15.2B" | 17:281 | Manrope | SemiBold | 64px | default | -1.408px | `#1E1E1E` |
| TAM description | 17:282 | Manrope | Regular | 20px | default | -0.44px | `#777777` |
| SAM label "SAM" | 17:284 | IBM Plex Mono | Regular | 17.358px | 1.5 | -0.3819px | `#F9F9F9` |
| SAM value "$8.9B" | 17:285 | Manrope | SemiBold | 46.287px | default | -1.0183px | `#F9F9F9` |
| SAM description | 17:286 | Manrope | Regular | 16px | default | -0.352px | `rgba(255,255,255,0.82)` |
| SOM label "SOM" | 17:288 | IBM Plex Mono | Regular | 13.723px | 1.5 | -0.3019px | `#1E1E1E` |
| SOM value "$89.9M" | 17:289 | Manrope | SemiBold | 36.595px | default | -0.8051px | `#1E1E1E` |
| SOM description | 17:290 | Manrope | Regular | 12px | default | -0.264px | `#777777` |

Note the label/value/description font sizes for SAM and SOM are non-round numbers (e.g. 46.287px, 17.358px) — these appear to be the TAM values scaled proportionally down by each circle's diameter ratio relative to TAM's diameter (roughly, not an exact match — do not assume a clean formula, just use the literal px values above).

## Text block layout inside each circle

Each circle's text block is a `flex-col` with these gaps, positioned starting near the circle's left edge + inset:

- TAM text block (`17:279`): left=143 (local, i.e. 80px inset from TAM's own left edge at 63), top=586 (i.e. ~119px below circle top), width 383px, `gap: 24px`, items-start.
- SAM text block (`17:283`): left=642, top=622, width 277px, `gap: 17.358px`.
- SOM text block (`17:287`): left=1019, top=645, width 219px, `gap: 13.723px`.

All three are top-aligned within their circle (not vertically centered) and left-aligned to a fixed inset from each circle's bounding box.

## Section layout (17:265, 1366×1095)

- Background: `#FDFDFD`.
- H1 pinned at (64, 87).
- Intro paragraph pinned at roughly (905, 225), width 397px, 3 manual line breaks (not auto-wrap — verify if intentional hard breaks or just narrow-column wrap; text reads as 3 lines: "A recovering, premiumizing" / "business-travel market creates space" / "for integrated, intelligent, and durable mobile-work solutions.").
- Circles group starts at y=467 (i.e. ~380px below the heading block), circle vertical centerline at y≈738 within the section (which is roughly section-height 1095 minus ~360, i.e. lower-middle of the section, with circles bottom-cropped near section bottom — SOM/TAM bottoms extend to y≈1009/1009, well within the 1095 height, some bottom margin remains ~86px).

## Eyebrow bar (14:634 / "Frame 30")

- Full width 1366×51 (per task brief; render shows ~40px inner content height).
- Background `#FDFDFD`, `border-bottom: 1px solid #777777`.
- Inner content: flex row, items-center, height 40px, `padding: 0 64px`.
- Text: "MARKET ANALISYS", IBM Plex Mono SemiBold, 16px, tracking 3.2px, color `#1E1E1E`.

## Assets

No image or vector assets in this section — the three circles are native vector ellipses (no exported bitmap), all text is live text. Nothing to export.

## Uncertainties

- The empty node `17:266` ("Frame 39", 420×61 at 64,86) has no visible styling in the render or code dump — could be a legacy/unused frame, or could carry an interactive/hover state not visible in the static screenshot. UNKNOWN purpose; recommend omitting from implementation unless the designer confirms it's load-bearing.
- Intro paragraph's 3-line break: UNKNOWN whether these are hard line breaks (`<br>`) in Figma or natural wrap at a 397px column width — the code dump renders them as separate `<p>` tags (`mb-0`), suggesting hard breaks. Treat as hard breaks unless testing shows otherwise.
- The eyebrow bar's own outer frame height (51px, per task brief) vs. inner content's 40px — the extra ~11px is unaccounted for in the code dump (likely padding/border not captured). Verify against screenshot if pixel-perfect eyebrow height matters.
- SAM/SOM font-size non-round values (e.g. 46.287px) are exact as returned by Figma; no cleaner rounding is implied — use as-is or deliberately round if the target codebase prefers whole px, but note this diverges from source.
