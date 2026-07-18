# 15 — Roadmap Suggestion

## Node identity
- Node id: `41:334` "Frame 10" (child of `25:90` "Desktop - 5", last sub-section of the mega-section)
- Abs position: y=15787 (7203 + 5970 + 2614), size 1366×1462
- This is the final sub-section of mega-section `17:43` — ends at abs y=17249, matching `17:43`'s bottom (7203+10046=17249). The `ClosingCta` section (numbered by another agent) begins immediately after.

## Layout
- Title `41:335`: absolute, left=64px, top=86px — "Roadmap Suggestion" (wraps "Roadmap" / "Suggestion"), Manrope Regular, 128px, line-height 0.96, uppercase, color `#1e1e1e`.
- Step list `41:563`: absolute, left=`calc(33.33% + 29.67px)` (≈485px), top=`calc(25% + 49.5px)` (≈415px), width 817px, height 961px, `flex-col`.
  - 8 steps, each `flex-[1_0_0] items-start justify-between py-[24px]`, ~120.125px tall.
  - Left cell: step title, Manrope SemiBold 36px, line-height none, color `#1e1e1e`.
  - Right cell: step description, fixed width 397px, Manrope Regular 16px, line-height 1.2, color `#777` (one step, "Prioritize the direction", contains an inline link styled Manrope Medium, color `#a63f1e`, underline — text "here").
- Timeline rail `41:455` "Group 66": absolute, left=`calc(33.33% + 413.67px)` (≈869px), top=`calc(25% + 73.5px)` (≈439px), width 12px, height 854px. A single vertical line + 8 evenly-spaced 12×12 circle markers (one per step), rendered as one flattened image asset (`imgGroup66`).

## Copy (verbatim, 8 steps in order)
1. **"Align"** — "Review the opportunity, audience, market, competitors, guidelines, and mandatories."
2. **"Select territory"** — "Choose the first product direction to explore."
3. **"Define functions"** — "Separate core functions from secondary or future-facing ones."
4. **"Generate concepts"** — "Explore multiple forms, interactions, materials, and features."
5. **"Validate and improve"** — "Use the **Concept Layered Framework** to evaluate desirability, alignment, resilience, and gaps." (the phrase "Concept Layered Framework" is a styled/bolded link fragment — colored `#a63f1e`, underlined, Manrope Medium — though no href was present in the extracted code for this specific instance; verify if it should link out)
6. **"Prioritize the direction"** — "Select the strongest concept using structured decision frameworks. If needed, revisit the methods used in this project here." (word "here" is an underlined link, color `#a63f1e`, Manrope Medium; target href UNKNOWN — not present in extracted code, likely an internal anchor)
7. **"Quick-test and fail fast"** — "Gather early feedback from road warriors and technical specialists to expose weak assumptions, reduce risk, and improve the concept before detailed development."
8. **"Detail the product"** — "Define specifications, materials, components, dimensions, interaction logic, and technical constraints."

## Typography
- Section title: Manrope Regular, 128px, line-height 0.96, uppercase, color `#1e1e1e`.
- Step title: Manrope SemiBold, 36px, line-height none, color `#1e1e1e`.
- Step description: Manrope Regular, 16px, line-height 1.2, color `#777`.
- Inline links within descriptions: Manrope Medium, 16px, color `#a63f1e`, underline, `text-decoration-skip-ink: none`.

## Color
- `#1e1e1e` — titles
- `#777` — body/description text
- `#a63f1e` — inline links / accent (consistent brand accent across whole mega-section)

## Assets
- Timeline rail graphic `41:455` "Group 66" (line + 8 dot markers), export URL: `https://www.figma.com/api/mcp/asset/dec1f1ed-664a-4087-849b-7cd1cd758835`. Could alternatively be implemented as CSS (a `1px`/`2px` vertical line + 8 absolutely-spaced circles) rather than a flattened image, since it's a simple geometric pattern — recommend CSS reconstruction over image asset for crisper rendering at other viewport widths:
  - Line: vertical, from y=448.76 to y=1285.25 relative (≈836.49px), centered at x=875 (i.e. center of the 12px-wide rail).
  - 8 circle markers, 12×12px each, evenly spaced roughly every ~120px vertically (y offsets within `41:455`: 0, 120, 240, 361, 489, 602, 722, 842 approx per ellipse ids `41:453,564,567,570,571,572,573,574`), aligned one per step row.

## Uncertainties
- Href targets for the two inline links ("Concept Layered Framework" and "here") were not resolvable from the extracted code (no `href` attributes rendered for these two, unlike the citation links in sections 08/09 which do carry explicit URLs) — mark as internal anchor links to be wired up by implementer, exact target UNKNOWN.
- Whether "Concept Layered Framework" text is meant to link to an external resource or an internal page section — UNKNOWN, ask design/product.
