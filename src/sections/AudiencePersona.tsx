import audienceDeskPhoto from "@/assets/audience-persona-desk-photo.webp"
import audienceStatsChart from "@/assets/audience-persona-stats-chart.webp"

export default function AudiencePersona() {
  return (
    <section id="the-builder" className="relative w-full bg-surface desk:h-dvh">
     {/* Content caps at --content-max and centers on ultra-wide; the section stays
         full-width so the split photo/text layout holds at the max width and the
         extra space becomes surface-colored margin. The 50%-based photo/card
         offsets are now relative to this capped box. */}
     <div className="relative mx-auto w-full max-w-[var(--content-max)] desk:h-full desk:overflow-hidden">
      {/* Photo: at >=desk this breaks out of the 1366px content canvas and bleeds to the
          true viewport edge (same treatment as Hero's background photo), rather than
          stopping at the canvas boundary the way the rest of this section's content does.
          left/width are expressed as calc(50% +/- 15px) so the photo's LEFT edge still
          tracks the centered canvas (equivalent to left-[668px] when canvas == viewport,
          i.e. exactly at the 1366px breakpoint), while its RIGHT edge always reaches the
          real edge of the section (== viewport) at any wider width. Height now matches the
          section's true 100dvh content area directly (no more page-scale factor). */}
      <div className="relative aspect-[4/3] w-full desk:absolute desk:left-[calc(50%-15px)] desk:top-0 desk:aspect-auto desk:h-full desk:w-[calc(50%+15px)]">
        <img
          src={audienceDeskPhoto}
          alt="Woman working on a laptop at a hotel lobby desk, with a travel bag beside her"
          className="h-full w-full object-cover object-[47%_center]"
        />
      </div>

      {/* Continues the stats-chart card's bottom border across the photo to the section's
          true right edge (right-0 here means the section itself, not the 1366px canvas,
          since this div is now a direct section child rather than nested in the canvas).
          Desktop-only overlay detail: once the card is stacked below the photo (below desk) an
          edge-to-edge hairline no longer reads as connective tissue, so it's hidden below desk.
          top is a fixed px value equal to the stats-card's bottom edge: the card sits at
          top-[-11px] relative to the content canvas (whose top is the section top now that the
          AUDIENCE label is its own preceding section), so -11px + 442.5px card height = 431.5px.
          The card is pinned via a fixed absolute offset (not part of the flex redistribution) so
          its bottom edge never moves regardless of viewport height -- this line tracks it exactly
          at any section height instead of approximating it. */}
      <div className="hidden desk:block desk:absolute desk:left-[calc(50%-15px)] desk:right-0 desk:top-[431.5px] desk:border-t desk:border-muted" />

      <div className="relative mx-auto flex h-auto w-full max-w-none flex-col gap-8 py-12 md:gap-12 md:py-16 desk:flex desk:h-full desk:w-full desk:flex-col desk:justify-between desk:gap-0 desk:px-[var(--gutter-x)] desk:py-16">
        <div className="flex w-full flex-col px-6 md:px-16 desk:w-[420px] desk:px-0">
          <p className="font-sans text-[clamp(3rem,9.4vw,8rem)] font-normal uppercase leading-[0.96] text-ink desk:text-[128px]">
            The
          </p>
          <p className="font-sans text-[clamp(3rem,9.4vw,8rem)] font-normal uppercase leading-[0.96] text-ink desk:text-[128px]">
            Builder
          </p>
        </div>

        {/* Stats card: deliberately kept absolutely positioned (out of the flex flow) rather
            than redistributed like the headline/body-copy below, so it overlaps the photo's
            top-left corner. Its left edge is `calc(50% - 15px)` -- identical to the photo's
            own left edge -- so it stays pinned to the photo at every viewport width now that
            the content canvas is full-width (the old fixed left-668px was only correct while
            the canvas was a centered 1366px block). top-[-11px] keeps its top tucked under
            the section's overflow-hidden edge, matching the photo's top. */}
        <div className="relative flex aspect-[686/885] w-full items-center justify-center border border-muted bg-surface p-[6px] desk:absolute desk:left-[calc(50%-15px)] desk:top-[-11px] desk:aspect-auto desk:h-[442.5px] desk:w-[343px]">
          <img
            src={audienceStatsChart}
            alt="Builder persona stats: 10% of workforce, 76% use multiple workspaces, 20% more mobile, 2 days working from office per week; plus a needs chart ranking transition across work spaces, mobility, collaboration time, performance, unique software, and productivity ecosystem complexity"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex w-full flex-col gap-8 px-6 md:px-16 desk:h-[285px] desk:w-[397px] desk:justify-between desk:gap-0 desk:px-0">
          <p className="font-sans text-lg leading-[1.2] text-muted md:text-xl">
            One of the Dell&rsquo;s persona, is a high-mobility executive who must deliver
            top-tier performance anywhere, maintaining continuity, authority, and efficiency as
            work shifts constantly between environments.
          </p>
          <p className="font-mono text-sm uppercase leading-[1.2] text-muted">
            airport &rarr; hotel &rarr; client &rarr; third place{" "}
          </p>
        </div>
      </div>
     </div>
    </section>
  )
}
