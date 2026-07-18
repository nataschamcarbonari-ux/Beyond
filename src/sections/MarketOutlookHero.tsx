// Spec: .claude/figma-specs/08-market-outlook-hero.md
import heroImg from "@/assets/market-outlook-hero.webp"

export default function MarketOutlookHero() {
  return (
    <section className="relative w-full overflow-hidden bg-surface">
     {/* Content caps at --content-max and centers on ultra-wide; the section
         itself stays full-width so the extra space is surface-colored margin. */}
     <div className="relative mx-auto flex min-h-[520px] w-full max-w-[var(--content-max)] flex-col justify-end overflow-hidden px-6 pb-12 md:min-h-[620px] md:px-16 md:pb-16 desk:block desk:h-dvh desk:px-0 desk:pb-0">
      {/* Full-bleed photo + gradients are direct section children (matching
          Hero's background photo pattern) so they naturally fill whatever
          height the section is at `desk` -- no page-scale transform, no
          intermediate 1366x768 canvas. */}
      <img
        src={heroImg}
        alt="A businesswoman works on a laptop at a small table in a modern office lounge, with a laptop bag and rolling suitcase beside her while travelers pass by in motion blur."
        className="absolute inset-0 size-full object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(180.00001deg, rgba(253,253,253,0.05) 74.74%, rgb(253,253,253) 98.307%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(269.99999deg, rgba(253,253,253,0.05) 55.71%, rgb(253,253,253) 88.763%)",
        }}
      />
      {/* Invention: the two gradients above are calibrated for the 1366-wide
          photo crop, where they fade a wide empty region on the left/bottom
          into near-white behind the text. Below `desk`, object-cover crops
          the same landscape photo much tighter (portrait-ish viewports),
          centering on the woman rather than empty background, so the
          existing gradients no longer guarantee contrast behind the stacked
          heading/paragraph. This extra bottom-anchored scrim (hidden at
          `desk`, where it is not needed) restores legibility. */}
      <div
        aria-hidden
        className="absolute inset-0 desk:hidden"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(253,253,253,0.97) 0%, rgba(253,253,253,0.88) 38%, rgba(253,253,253,0) 72%)",
        }}
      />

      {/* Invention: below `desk` this is a normal in-flow flex item, pushed
          to the bottom of the section by the section's own `justify-end`.
          At `desk` it is bottom-anchored and left-aligned to the shared
          --gutter-x (the same gutter every other section and the labels use),
          so the heading lines up with the rest of the page on wide screens
          instead of sitting inside a centered 1366px box. Font sizes stay
          fixed at the Figma px values rather than scaling up. */}
      <div className="relative z-10 flex h-auto w-full max-w-[600px] flex-col gap-4 desk:absolute desk:bottom-0 desk:left-0 desk:h-auto desk:w-full desk:max-w-none desk:gap-9 desk:px-[var(--gutter-x)] desk:pb-16">
        <h1 className="w-full font-sans text-[clamp(2rem,4.7vw,4rem)] font-normal uppercase leading-[0.96] text-ink desk:w-[600px] desk:text-[64px]">
          Market
          <br />
          Outlook
        </h1>

        <p className="w-full max-w-[395px] font-sans text-lg leading-[1.2] text-muted md:text-xl desk:w-[395px] desk:max-w-none desk:text-xl">
          The business travel market is expected to evolve toward a more
          resilient, sustainable, and AI-enabled model, driven by bleisure,
          Gen Z expectations, and the need for secure, flexible work anywhere.
        </p>
      </div>
     </div>
    </section>
  )
}
