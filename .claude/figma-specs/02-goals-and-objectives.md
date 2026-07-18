# 02 — Goals and Objectives

## Node identity
- Eyebrow: node `11:315`, name "Frame 28", size 1366×51 (rendered content 40px tall), y=768
- Main content: node `10:52`, name "Desktop - 2", size 1366×768, y=819
- File key: `YoGF1orUDvzuUkD7XCHZPs`

## Confirmed section name
**Kept as "Goals and Objectives"** — matches provisional guess, per the literal eyebrow copy "GOALS AND OBJECTIVES". Flag: the section's visual content is a document-cover-style block (giant "STRATEGIC BRIEFING" title + a metadata table of Focus/Discipline/Autor/Year + a short description), not a bulleted goals/objectives list. The "Focus" row (Future of Work, AI, Mobile Productivity, Focus Protection) is effectively where the goals/objectives content lives. No better name is evidenced by the copy, so the eyebrow label is treated as authoritative and the filename is unchanged. Consider naming the React component something like `OverviewSection` or `BriefingMastheadSection` internally if "GoalsAndObjectives" reads misleadingly in code, but the outward section label/eyebrow text must remain "GOALS AND OBJECTIVES".

## Layout

### Eyebrow strip (`11:315`)
- `flex items-center`, background `#fdfdfd`, bottom border `1px solid #777`.
- Inner (`11:316`): `flex-1`, height 40px, `items-center`, `padding: 0 64px`.
- Label text node `11:317`.

### Main content (`10:52` → `10:61`, 768×1366)
All children are absolutely positioned within the 768×1366 box:
- **Title block** (`10:94`) at `left:64px, top:86px`: two-line uppercase heading, `flex items-start`.
  - Line 1: "Strategic " (trailing space)
  - Line 2: "Briefing"
- **Description** (`10:92`) at `left: calc(66.67% - 3.67px)` (≈ left:907px), `top: calc(75% - 39px)` (≈ top:537px), width 395px.
- **Empty/placeholder frame** (`10:118`→`10:129`) at `left:456px, top: calc(75% + 86px)` (≈ top:662px), box 102×39 — confirmed empty/blank in screenshot (no visible fill, no icon/logo rendered). Likely an unpopulated logo placeholder.
- **Metadata table** (`10:194`) at `left:64px, top: calc(50% + 92px)` (≈ top:476px), size 634×206, `flex-col`.
  - 4 rows, each `flex items-center`, each row has a `border-top: 1px solid #777`; the last row additionally has `border-bottom: 1px solid #777` (i.e. the table is a stack of top-ruled rows plus one closing bottom rule — implement as `divide-y` + a final border, or per-row top border with an extra bottom border on the last row).
  - Row label column: `IBM Plex Mono SemiBold 16px`, `letter-spacing:3.2px`, `color:#1e1e1e`, fixed-ish width per row (gap to value column varies: 111px / 47px / 111px / 124px — these look like they're artifacts of differing label widths rather than intentional distinct gaps; recommend using a fixed label column width, e.g. `w-[140px]`, plus `gap-x` consistent value in implementation rather than replicating the exact per-row gap).
  - Value column: `Manrope Regular 16px`, `line-height:1.2`, `color:#777`, values space with `gap:24px` where multiple values exist.

## Typography
| Element | Font | Weight | Size | Line-height | Letter-spacing | Color |
|---|---|---|---|---|---|---|
| Eyebrow "GOALS AND OBJECTIVES" | IBM Plex Mono | SemiBold | 16px | normal | 3.2px | `#1e1e1e` |
| Title "Strategic Briefing" | Manrope | Regular | 128px | 0.96 | — | `#1e1e1e` (uppercase, set via literal caps or `uppercase` CSS — source text appears to already be styled uppercase) |
| Description paragraph | Manrope | Regular | 20px | (default/normal, `leading-[0]` wrapper — visually ~1.2 per line height of child `<p>`s) | — | `#777` |
| Table row labels (FOCUS/DISCIPLINE/AUTOR/YEAR) | IBM Plex Mono | SemiBold | 16px | normal | 3.2px | `#1e1e1e` |
| Table row values | Manrope | Regular | 16px | 1.2 | — | `#777` |

Exact copy (verbatim):
- Title: "Strategic Briefing" (two lines: "Strategic " / "Briefing")
- Description: "Beyond is a strategic product briefing that turns research on productivity, mobility, AI-enabled work, and high-mobility professionals into clear direction for future hardware concepts that protect focus anywhere."
- Table:
  - FOCUS: Future of Work, AI, Mobile Productivity, Focus Protection
  - DISCIPLINE: Design Strategy, Industrial Design, Research
  - AUTOR: Natascha Carbonari, Drew Tosh
  - YEAR: 2025-2026

Note: "AUTOR" is verbatim from the design (not "AUTHOR") — do not "fix" this, it's the actual source copy; flag to the team if it's a typo, but implement as-is unless corrected upstream in Figma.

## Color
- Background: `#fdfdfd`
- Headings/labels: `#1e1e1e`
- Body/muted/values: `#777777`
- Dividers/borders: `#777777`, 1px solid
- No variable bindings detected on this node (`get_variable_defs` → `{}`).

## Assets
- One empty placeholder frame (`10:129`, 102×39) — no image/vector fill present; renders blank. Do not treat as an asset to export; flag to design if a logo mark was intended here.
- No photographic or vector assets otherwise in this section.

## Uncertainties
- The `calc()`-based positioning (`calc(66.67% - 3.67px)`, `calc(75% - 39px)`, `calc(75% + 86px)`, `calc(50% + 92px)`) suggests Figma auto-layout/constraint resizing artifacts rather than deliberate percentage-based responsive design. Given the project targets a fixed 1366px authored width, recommend converting these to fixed pixel offsets: description block ≈ `left:907px, top:537px`; placeholder frame ≈ `left:456px, top:662px`; metadata table ≈ `top:476px`. Confirm against screenshot if exact alignment matters.
- Purpose of the empty 102×39 placeholder frame is unknown — possibly a logo/watermark not yet populated in this design pass.
- Title line-height `leading-[0]` on the wrapping div for "Strategic"/"Briefing" is a Tailwind/CSS artifact of the codegen (actual visual line-height is governed by the child `<p leading-[0.96]>` tags) — implement as `line-height: 0.96` on the heading text, not 0.
