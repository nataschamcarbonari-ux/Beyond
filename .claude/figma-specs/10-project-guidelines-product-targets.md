# 10 — Project Guidelines: Product Targets

## Node identity
- Eyebrow bar: `17:118` "Frame 30" — abs y=9507, size 1366×51
- Content frame: `17:252` "Desktop - 4" (nested, contains `17:253` "Frame 6") — abs y=9558, size 1366×1396
- Combined section: abs y=9507–10954, height 1447px.

## Layout
### Eyebrow bar (`17:118`)
- Full width, `bg-[#fdfdfd]`, `border-b border-[#777]`, `flex items-center`.
- Inner padding: `px-[64px]`, height 40px (bar itself 51px tall with vertical centering).
- Single label text `17:120`: "project guidelines".

### Content (`17:252` → `17:253`, 1366×1396)
Three absolutely-positioned groups inside this 1396px-tall canvas:

1. **Title** `17:254`/`17:255` — left=64px, top=87px, width 420px:
   - Text "Product Targets" (wraps "Product " / "Targets"), Manrope Regular, 128px, line-height 0.96, uppercase, color `#1e1e1e`.

2. **Center diagram** `41:768` "gemini-svg 1" — absolute, left=402px, top=`calc(25% + 61px)` (≈410px), size 900×900 (overflow-clip). This is a large concentric-circle diagram (image `imgGeminiSvg1` as base layer) with ~3 nested vector circles and ~20 small labeled callout points scattered radially (each callout = a 16×16 vector icon + short text label, e.g. "Small size", "Low weight", "Quick access", "Ready-to-use", "Locking mechanism", "Materials resistance", "Ensure that items inside the product are not damaged → Pockets, compartments, cases", "Auto performance Tuning (battery and workloads)", "Stored battery", "Full connection", "Modularity to fit anywhere", "Colors, print, name, / notes, photos", "Tracking system", "Vision angle, distances, / components position.", "Functional / on different / surfaces", "Automatic organization", "Accordion style", "One-step interactions", "One-layer design", "Items identification", "Simultaneous devices without loss of performance"). All callout text: Manrope Regular 16px, color `#1e1e1e`.
   - This is effectively a single flattened diagram asset (base PNG/SVG "gemini-svg 1") with text overlays reproducing an infographic — likely best implemented as ONE exported image rather than rebuilt from ~20 absolutely positioned labels, unless pixel-perfect editable text is required.

3. **CORE / ESSENTIAL / EXTENDED legend** `41:840` — absolute, left=64px, top=`calc(50% + 183px)` (≈881px), width 468px, height 426px, `flex-col justify-between`. Three stacked blocks, each: label (IBM Plex Mono SemiBold, 16px, letter-spacing 3.2px, uppercase-styled via literal uppercase text) + horizontal divider line + description paragraph (Manrope Regular 16px, color `#777`, tracking -0.32px, width 270px):
   - **CORE** — "Non‑negotiable capabilities required to deliver the product's primary value. If these do not exist, the product fails at its core promise." (two paragraphs/lines)
   - **ESSENCIAL** [sic — verbatim spelling in Figma, likely a typo for "ESSENTIAL", flag to product owner] — "Capabilities that strongly reinforce and complete the core experience but are not the absolute minimum to validate the product."
   - **EXTENDED** — "Nice‑to‑have or extensible features that may be explored later without compromising the core proposition."

4. **Attribute-dot legend** `41:995` — absolute, left=`calc(66.67% - 5.67px)` (≈905px), top=86px, width 397px, height 247px. 6 rows, each `border-t border-[#777]`, `flex items-center gap-[33px]`, a 12×12 colored square + IBM Plex Mono SemiBold 16px uppercase label (tracking 3.2px, color `#1e1e1e`):
   | Label | Dot color |
   |---|---|
   | CONTINUITY | `#1e1e1e` |
   | SECURITY | `#a63f1e` |
   | ERGONOMICS | `#ccc` |
   | AGILITY | `#777` |
   | ADAPTABILITY | `#ff6f43` |
   | PERSONALIZATION | `#fcae17` |

## Typography summary
- Eyebrow label: IBM Plex Mono SemiBold, 16px, tracking 3.2px, uppercase, color `#1e1e1e`.
- Section title "Product Targets": Manrope Regular, 128px, line-height 0.96, uppercase, `#1e1e1e`.
- Legend headers (CORE/ESSENCIAL/EXTENDED, and dot labels): IBM Plex Mono SemiBold, 16px, tracking 3.2px.
- Legend body text: Manrope Regular, 16px, color `#777`, tracking -0.32px (CORE/ESSENCIAL/EXTENDED descriptions), line-height 1.2.
- Diagram callout labels: Manrope Regular, 16px, color `#1e1e1e`.

## Color
- `#1e1e1e` — primary text / CONTINUITY dot
- `#777` — secondary text / borders / AGILITY dot
- `#a63f1e` — SECURITY dot (brand accent)
- `#ccc` — ERGONOMICS dot
- `#ff6f43` — ADAPTABILITY dot
- `#fcae17` — PERSONALIZATION dot
- `#fdfdfd` — eyebrow bar background

## Assets
- `41:768` "gemini-svg 1" base image: `https://www.figma.com/api/mcp/asset/98dc9c88-a8ca-44e5-9a63-9bb5e2027331` (900×900)
- Nested vector rings inside it (3 concentric circle vectors + small dot vectors) — many small SVG icon assets (≈10 unique vector URLs reused across ~20 callout points), e.g.:
  - `imgVector` (ring, 750×750 equiv inset), `imgVector1`, `imgVector2` (small dot rings)
  - `imgVector3`..`imgVector9` — small 16×16 bullet/checkmark icons reused for each callout
  - 3 horizontal divider line assets: `imgLine12`, `imgLine13`, `imgLine14` (under CORE/ESSENCIAL/EXTENDED headers) — these are likely just 1px `border-t` lines, not real images; treat as CSS borders instead of exported assets where practical.
- Given the volume (~14 distinct vector URLs) and that they compose one cohesive circular infographic, recommend exporting `41:768` as a single flattened SVG/PNG asset for `src/assets/` rather than reconstructing ~20 absolutely-positioned micro-labels in code, unless the design system requires editable text here.

## Uncertainties
- "ESSENCIAL" is spelled without a T in the Figma source — confirm with design/product whether this is an intentional term or a typo before shipping copy.
- Whether the CORE/ESSENTIAL/EXTENDED legend and the CONTINUITY/SECURITY/... dot legend are meant to cross-reference the central diagram (e.g., color-coding matches diagram callouts) — not verifiable from metadata alone; screenshot inspection recommended.
- Exact vector geometry (concentric circle radii) not extracted — treat diagram as a flattened image asset instead of rebuilding SVG paths.
