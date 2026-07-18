# Design Tokens — Beyond / Strategic Briefing

File key: `YoGF1orUDvzuUkD7XCHZPs`
Root frame: `10:64` "Strategic Briefing", 1366×18017.

## Published Figma variables (file-level, queried via get_variable_defs on root 10:64)

Only 3 variables exist/are published in this file:

| Variable name | Value |
|---|---|
| `Color 3` | `#edf9ff` (very pale blue) |
| `Color 4` | `#1e1e1e` (near-black text) |
| `Color 5` | `#f9f9f9` (off-white) |

**Important:** `get_variable_defs` scoped to each of the 3 sections covered in this pass (8:15 Hero, 10:52 Goals/Overview, 11:196 Problem) all returned `{}` — meaning none of the colors actually used in these three sections are bound to a Figma variable, even where the hex happens to coincide (e.g. `#1e1e1e` text matches `Color 4`'s value but is a raw literal fill in these nodes, not a variable reference). Treat variable binding as file-wide/unverified beyond these 3 vars; other sections further down the page may bind them properly.

## Raw hex colors observed in sections 1–3 (not variable-bound, verbatim from Figma fills)

| Hex | Usage | Notes |
|---|---|---|
| `#fdfdfd` | Section backgrounds, nav text on hero, eyebrow-strip background | Off-white, close to but distinct from `Color 5` (#f9f9f9) — do not conflate |
| `#1e1e1e` | Primary body/heading text | Coincides with `Color 4` value but unbound in these nodes |
| `#777777` | Secondary/muted text, hairline borders/dividers | e.g. description copy, table dividers, eyebrow bottom border |
| `#a63f1e` | Accent — rust/burnt orange | Used for emphasized headline text (Problem section) and inline citation links |
| `#ffffff` | Hero subhead text, "BEYOND" wordmark | literal white |

Recommendation for implementation: define local Tailwind tokens (e.g. `--color-ink: #1e1e1e`, `--color-muted: #777777`, `--color-accent: #a63f1e`, `--color-surface: #fdfdfd`) rather than importing the 3 published Figma variables verbatim, since the published variables are not actually bound in this part of the design.

## Fonts observed (sections 1–3)

- **Lexend Exa** — Medium (hero wordmark only)
- **Manrope** — Regular, Medium, SemiBold (primary UI/body/heading font throughout)
- **IBM Plex Mono** — SemiBold, used only for section "eyebrow" labels (all-caps, letter-spacing 3.2px)
- **Georgia** — appears in the JSX as an outer wrapper font-family on a couple of text nodes (Problem headline, stat numbers) but is always overridden by inner `<span>` elements using Manrope; Georgia is not actually visible anywhere. Treat as a stray/legacy style — implement with Manrope only.

## Page-wide layout constants (inferred from these 3 sections)

- Page authored width: 1366px fixed.
- Section horizontal padding/inset: `64px` left (content start), consistent across Hero nav, eyebrow strips, and section 2/3 content.
- Eyebrow/label strip: 51px tall in layout terms per the task brief, rendered content box 40px tall with `px-64px`, bottom border `1px solid #777`, background `#fdfdfd`, label font `IBM Plex Mono SemiBold 16px`, `letter-spacing: 3.2px`, `color: #1e1e1e`, uppercase text is verbatim content (not CSS-transformed).
