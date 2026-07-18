# 13 — Quote: Soft-Goods Specialist at Dell

## Node identity
- Node id: `26:349` "Frame 7" (child of `25:90` "Desktop - 5")
- Abs position: y=14251 (7203 + 5970 + 1078), size 1366×768

## Layout
- Full-bleed background rectangle `31:684` "Rectangle 7": 1368×768 (2px wider than frame — likely a bleed/rounding artifact), fill `#f1f1f1`, positioned at 0,0.
- Quote block `25:164`: centered both horizontally and vertically (`left: calc(50% + 0.5px)`, `top: calc(50% + 0.5px)`, `translate(-50%, -50%)`), width 729px, `flex-col gap-[24px]`, text-align center.
  - Quote paragraph (`25:165`), then attribution (`25:166`).

## Copy (verbatim)
Quote (single paragraph, mixed inline styling — all Manrope SemiBold 36px, line-height none, differs only by color):
> "Integrated electronics should only be included when they clearly improve access, protection, organization, or readiness — avoiding features with low perceived value, high interaction complexity, durability risks, or maintenance burden."

Inline color breakdown:
- "Integrated electronics should only be included when they" — color `#1e1e1e`
- " " — color `#777`
- "clearly improve access, protection, organization, or readiness" — color `#a63f1e` (highlighted phrase)
- " — avoiding features with low perceived value, high interaction complexity, durability risks, or maintenance burden." — color `#1e1e1e`

Attribution:
> "SOFT-GOODS ESPECIALIST AT DELL." [sic — verbatim spelling "ESPECIALIST", likely typo for "SPECIALIST"; flag before shipping]

## Typography
- Quote: Manrope SemiBold, 36px, line-height none (1.0), text-align center, colors per breakdown above.
- Attribution: IBM Plex Mono Regular, 14px, line-height 1.2, uppercase, color `#777`.

## Color
- `#f1f1f1` — section background
- `#1e1e1e` — quote default text
- `#777` — quote connector word / attribution text
- `#a63f1e` — highlighted quote phrase (brand accent, same as link/accent color used across the mega-section)

## Assets
None — pure typography on flat background color, no images/icons.

## Uncertainties
- "ESPECIALIST" spelling — verbatim from Figma; almost certainly should read "SPECIALIST". Confirm with content owner.
- The 1368px width of background rectangle vs 1366px frame (2px overhang) — likely negligible design rounding; safe to implement as full-bleed 100% width.
