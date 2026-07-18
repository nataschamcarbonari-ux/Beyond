# 08 — Market Outlook Hero

## Node identity
- Node id: `17:44` ("Frame 6")
- Parent: `17:43` "Desktop - 4" (mega-section)
- Absolute position within root frame `10:64`: x=0, y=7203 (top of the mega-section)
- Size: 1366 × 768

## Layout
- Single full-bleed frame, position: relative, children absolutely positioned.
- Background: rounded-rectangle `28:565` (id note: despite the "rounded-rectangle" tag it renders full-bleed at 0,0, 1366×768 — no visible corner radius at this scale) filled with a photographic image (see Assets) with two overlaid CSS gradients on top:
  - `linear-gradient(180.00001deg, rgba(253,253,253,0.05) 74.74%, rgb(253,253,253) 98.307%)` — vertical fade to near-white at the bottom.
  - `linear-gradient(269.99999deg, rgba(253,253,253,0.05) 55.71%, rgb(253,253,253) 88.763%)` — horizontal fade to near-white on the left/right (rotated ~270°).
  - Net effect: photo fades to off-white `#fdfdfd` toward the bottom and one side, so overlaid dark text stays legible.
- Title text (`17:45`) is absolutely positioned at left=64px, vertically centered around `top: calc(50% + 19px)` (i.e. ~403px from top of this 768px frame).
- Body/subhead text (`17:100`) at left=66px, `top: calc(75% - 14px)` (~562px from top), width 395px.

## Typography
- **Eyebrow/Title** (`17:45`, name "Market Outlook"):
  - Text: "Market Outlook" (wraps as two lines: "Market " / "Outlook")
  - Font: Manrope Regular
  - Size: 64px, line-height: 0.96, uppercase
  - Color: `#1e1e1e`
- **Body** (`17:100`):
  - Text (verbatim): "The business travel market is expected to evolve toward a more resilient, sustainable, and AI-enabled model, driven by bleisure, Gen Z expectations, and the need for secure, flexible work anywhere."
  - Font: Manrope Regular
  - Size: 20px, line-height: 1.2
  - Color: `#777`
  - Width constraint: 395px

## Color
- `#1e1e1e` — primary text (no Figma variable resolved; matches token "Color 4" = `#1e1e1e` seen elsewhere in this mega-section).
- `#777` — secondary/body text.
- `#fdfdfd` — gradient fade target (near-white background).
- Gradient overlay colors: `rgba(253,253,253,0.05)` → `rgb(253,253,253)`.

## Assets
- Background photo, node `28:565` "Rectangle 1", fill image, export URL: `https://www.figma.com/api/mcp/asset/9e240b20-0e1e-4ce4-a18c-ff7a0ee55fe7` (temporary, not yet downloaded to repo). Full-bleed, `object-cover`. Recommend exporting as JPG/PNG at 1366×768 (or 2x for retina) into `src/assets/`.

## Uncertainties
- Exact corner radius of `28:565` (named "rounded-rectangle" but visually appears square at hero scale) — UNKNOWN, treat as 0 unless screenshot shows otherwise.
- Source subject of background photo (travel/office scene) not confirmed via alt text — UNKNOWN, visually inspect screenshot before cropping.
