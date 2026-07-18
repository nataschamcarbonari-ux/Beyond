import type { CSSProperties, ReactNode } from "react"

/**
 * A section whose 1366px-wide Figma canvas is reproduced pixel-faithfully at the
 * `desk` breakpoint and scaled up on wider viewports via `--page-scale`.
 *
 * This centralizes the scaling mechanism — the two heights that must stay in
 * lockstep to avoid the squared-scaling / section-overlap bugs:
 *   - the reserved layout height = canvasHeight * --page-scale
 *   - the inner canvas is a fixed canvasHeight-tall, 1366px-wide box, transformed
 *     by scale(--page-scale) from its top edge.
 * Both read the same `--canvas-h` custom property (set here), so they can never
 * drift apart.
 *
 * Per-section mobile (< desk) layout — flex/gap/padding/max-width — is passed via
 * `canvasClassName`; at `desk` those are all reset here (gap-0/px-0/py-0/block/
 * max-w-none) so only the scaled 1366px canvas remains.
 *
 * `fullHeight` makes the section fill the viewport (`min-h-dvh`) and vertically
 * centers the scaled canvas within it — used for the Deep Dive "one section per
 * screen" beats. It stays `min-h` (not a hard `h`) so an unusually tall canvas on
 * a short viewport grows instead of clipping.
 */
export default function PageScaleSection({
  height,
  id,
  bg = "surface",
  canvasClassName = "",
  fullHeight = false,
  children,
}: {
  /** The Figma canvas height in px at the 1366px design width. */
  height: number
  id?: string
  /** Section background token. */
  bg?: "surface" | "surface-alt" | "ink" | "black" | "accent"
  /** Mobile/tablet (< desk) layout classes for the inner canvas. */
  canvasClassName?: string
  /** Fill the viewport height at `desk` and center the scaled canvas. */
  fullHeight?: boolean
  children: ReactNode
}) {
  const canvas = (
    <div
      className={`relative mx-auto w-full ${canvasClassName} desk:block desk:h-[var(--canvas-h)] desk:w-[1366px] desk:max-w-none desk:origin-top desk:gap-0 desk:px-0 desk:py-0 desk:[transform:scale(var(--page-scale))]`}
    >
      {children}
    </div>
  )

  return (
    <section
      id={id}
      style={{ "--canvas-h": `${height}px` } as CSSProperties}
      className={`w-full ${
        bg === "ink"
          ? "bg-ink"
          : bg === "black"
            ? "bg-black"
            : bg === "accent"
              ? "bg-accent"
              : bg === "surface-alt"
                ? "bg-surface-alt"
                : "bg-surface"
      } ${
        fullHeight
          ? "desk:flex desk:min-h-dvh desk:flex-col desk:justify-center"
          : "desk:h-[calc(var(--canvas-h)*var(--page-scale))]"
      }`}
    >
      {fullHeight ? (
        <div className="w-full desk:h-[calc(var(--canvas-h)*var(--page-scale))]">{canvas}</div>
      ) : (
        canvas
      )}
    </section>
  )
}
