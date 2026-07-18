const outcomes: { headline: string; body: string }[] = [
  {
    headline: "Readiness becomes invisible",
    body: "Users no longer think about setup, packing, charging, or preparation. The product stays organized, ready, and easy to start with: arrive, connect, work.",
  },
  {
    headline: "Control replaces uncertainty",
    body: "Users trust that everything has a place, every essential item is accounted for, and nothing critical is forgotten during transitions.",
  },
  {
    headline: "Trust replaces workarounds",
    body: "Users rely on the product to support security, connectivity, and protection.",
  },
  {
    headline: "Mobility feels lighter",
    body: "The product supports movement without adding load anxiety, bulk, or visual clutter. It feels compact, clean, organized, and easy to carry across contexts.",
  },
  {
    headline: "Professional presence increase",
    body: "Users feel more prepared, credible, and premium in front of clients. The product becomes something people notice, understand, and want to ask about.",
  },
]

export default function DesiredOutcomes() {
  return (
    <section id="desired-outcomes" className="w-full bg-accent desk:h-dvh">
      {/* Invention: the title is visually bottom-right on desktop, but reads
          as the section's heading, so below `desk` it moves to the top of
          the stack (DOM order only). At >=desk both elements become flex
          children of a full-height row instead of absolutely-positioned:
          the list keeps its left position via `order`, and the title keeps
          its bottom-right position via `order` + `self-end`, with
          `justify-between` reproducing the original ~24px horizontal gap
          between them (817px list + 397px title + 24px gap = the 1238px
          content width left after the 64px side padding). The list's own
          rows are spread across the full section height with
          `justify-between`, replacing the fixed 86px Figma y-offset - this
          is the "full-height moment" invention: with height now genuinely
          responsive (100dvh) instead of a fixed 768px canvas, the row
          spacing grows/shrinks with it instead of staying pinned. */}
      <div className="relative mx-auto flex w-full max-w-[1366px] flex-col gap-12 px-6 py-12 md:gap-16 md:px-16 md:py-16 desk:h-full desk:w-full desk:max-w-[var(--content-max)] desk:flex-row desk:items-stretch desk:justify-between desk:gap-0 desk:px-[var(--gutter-x)] desk:py-16">
        <h2 className="font-sans text-[clamp(2rem,4.7vw,4rem)] font-normal uppercase leading-[0.96] text-white desk:order-2 desk:w-[397px] desk:shrink-0 desk:self-end desk:text-[64px]">
          Desired Experience Outcomes
        </h2>

        <dl className="flex w-full flex-col desk:order-1 desk:h-full desk:w-[817px] desk:shrink-0 desk:justify-between">
          {outcomes.map((item) => (
            <div
              key={item.headline}
              className="flex w-full flex-col gap-2 border-t border-white/72 py-5 desk:w-[741px] desk:flex-row desk:items-start desk:gap-6 desk:py-3"
            >
              <dt className="font-sans text-[clamp(1.375rem,2.6vw,2.25rem)] font-semibold leading-none text-white desk:w-[397px] desk:shrink-0 desk:text-[36px]">
                {item.headline}
              </dt>
              <dd className="font-sans text-base leading-[1.2] text-white/82 desk:w-[320px]">
                {item.body}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
