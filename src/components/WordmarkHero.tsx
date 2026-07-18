import type { ReactNode } from "react"

/**
 * Full-screen hero shared by both pages: a giant full-bleed wordmark cut at the
 * viewport edges + a tagline, centered over a background image.
 *
 * The wordmark uses cqw sizing (relative to the section via
 * [container-type:inline-size]) rather than vw so it grows/bleeds off both edges
 * past 1366px and stays symmetric even when a vertical scrollbar shrinks the
 * section width. Below `desk` the overlay is `absolute inset-0` so it layers over
 * the image; at `desk` it switches to translate-centering.
 *
 * `tone` themes the text/bg: "light" = light text on a dark full-bleed image
 * (Briefing); "dark" = dark text on a light bg with a faint image (Deep Dive).
 * Font family, tracking, tagline width and image opacity are className props so
 * each page can match its exact design (Briefing = Lexend Exa; Deep Dive = the
 * narrower Lexend Deca at a tighter tracking over a 24%-opacity sketch).
 */
export default function WordmarkHero({
  image,
  alt,
  wordmark,
  tagline,
  tone = "light",
  wordmarkClassName = "font-display text-[clamp(4rem,23cqw,19.64rem)] tracking-[-0.01em] desk:text-[23.0092cqw]",
  wordmarkDeskShift = "desk:translate-x-0",
  taglineClassName = "max-w-[22rem] desk:w-[518px]",
  imageClassName = "",
}: {
  image: string
  alt: string
  wordmark: string
  tagline: ReactNode
  tone?: "light" | "dark"
  wordmarkClassName?: string
  /** Desk-only horizontal shift of the wordmark, e.g. "desk:-translate-x-[42px]"
      to nudge it left. Overrides the default centered position at `desk`. */
  wordmarkDeskShift?: string
  taglineClassName?: string
  imageClassName?: string
}) {
  const dark = tone === "dark"
  return (
    <section
      className={`relative h-[560px] w-full md:h-[768px] desk:h-dvh ${
        dark ? "bg-surface" : "bg-white"
      }`}
    >
      {/* Image + wordmark cap at --content-max and center on ultra-wide; the
          section bg fills the margins. container-type lives here so the cqw
          wordmark scales relative to the capped width, not the full viewport. */}
      <div className="relative mx-auto h-full w-full max-w-[var(--content-max)] overflow-hidden [container-type:inline-size]">
      <img src={image} alt={alt} className={`absolute inset-0 size-full object-cover ${imageClassName}`} />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-[7px] px-6 text-center desk:inset-auto desk:left-1/2 desk:top-1/2 desk:w-auto desk:-translate-x-1/2 desk:-translate-y-1/2 desk:px-0">
        <h1
          // Center the (viewport-overflowing) wordmark with translateX(-50%)
          // rather than flex alignment: some browsers align an over-wide flex
          // item to the start ("safe" centering) instead of overflowing it
          // symmetrically. `self-start` pins a deterministic base; left-1/2 +
          // -translate-x-1/2 then centers it identically everywhere. At desk the
          // parent overlay handles centering, so these are reset.
          className={`relative left-1/2 w-max -translate-x-1/2 self-start whitespace-nowrap font-medium leading-none desk:left-auto desk:self-auto ${wordmarkDeskShift} ${wordmarkClassName} ${
            dark ? "text-ink" : "text-surface"
          }`}
        >
          {wordmark}
        </h1>
        <p
          className={`w-full font-sans text-[clamp(1.375rem,2.6vw,2.25rem)] font-semibold leading-[1.2] desk:max-w-none desk:text-4xl ${taglineClassName} ${
            dark ? "text-ink" : "text-white"
          }`}
        >
          {tagline}
        </p>
      </div>
      </div>
    </section>
  )
}
