import type { ReactNode } from "react"

/**
 * The full-screen outro footer shared by both pages: a top content cluster
 * (passed as children — it differs per page), the giant full-bleed BEYOND
 * watermark, and the STRATEGIC BRIEFING / 2026 / DELL TECHNOLOGIES meta row.
 *
 * `tone` themes the shell: "light" (Briefing — light-gray bg, white watermark
 * with a soft shadow, dark meta) or "dark" (Deep Dive — near-black bg, faint
 * watermark, light meta). The BEYOND `<p>` uses `self-center` + `w-max` so it
 * overflows symmetrically past both viewport edges (see WordmarkHero for the
 * same cqw/flex-centering rationale).
 */
export default function OutroFooter({
  tone = "light",
  children,
}: {
  tone?: "light" | "dark"
  children: ReactNode
}) {
  const dark = tone === "dark"
  return (
    <section className={`w-full ${dark ? "bg-ink" : "bg-surface-alt"}`}>
      {/* Content caps at --content-max and centers on ultra-wide; the section bg
          fills the margins. container-type here scales the cqw watermark to the
          capped width. */}
      <div className="relative mx-auto flex w-full max-w-[var(--content-max)] flex-col gap-16 overflow-hidden [container-type:inline-size] md:gap-20 desk:h-dvh desk:justify-between desk:gap-0">
        {children}

      <p
        className={`pointer-events-none w-max self-center whitespace-nowrap font-display text-[clamp(4rem,23cqw,19.64rem)] font-medium leading-none tracking-[-0.01em] desk:text-[23.0092cqw] ${
          dark ? "text-white/[0.05]" : "text-white"
        }`}
        style={dark ? undefined : { textShadow: "0px 4px 4px rgba(255,255,255,0.25)" }}
      >
        BEYOND
      </p>

      <div
        className={`flex flex-col gap-2 px-6 pb-12 font-mono text-xs font-semibold tracking-[2px] sm:flex-row sm:justify-between sm:text-base sm:tracking-[3.2px] md:px-16 md:pb-16 desk:px-[var(--gutter-x)] desk:pb-[65px] ${
          dark ? "text-surface" : "text-ink"
        }`}
      >
        <span>STRATEGIC BRIEFING</span>
        <span>2026</span>
        <span>DELL TECHNOLOGIES</span>
      </div>
      </div>
    </section>
  )
}
