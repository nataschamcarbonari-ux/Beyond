import PageScaleSection from "@/components/PageScaleSection"

export type Stat = { value: string; lines: string[] }

/**
 * A "research evidence" beat: a column of big numeric stats + a mono-labelled
 * numbered list across the top, with a photo/slide gallery (exported flat from
 * Figma, transparent gaps) filling the lower half. Used twice in Chapter 01
 * (interviews: 5/23 + workspace photos; workshop: 2,5/15/5 + session gallery).
 *
 * At `desk` the top block and gallery are pinned at their Figma coordinates;
 * below `desk` everything stacks in a single padded column.
 */
export default function StatsGallerySection({
  height,
  stats,
  statsColClass = "",
  listLabel,
  listItems,
  gallerySrc,
  galleryAlt,
  galleryDeskClass,
}: {
  height: number
  stats: Stat[]
  /** Desk-only extra classes for the stats column (height / gap / justify). */
  statsColClass?: string
  listLabel: string
  listItems: string[]
  gallerySrc: string
  galleryAlt: string
  /** Desk-only absolute position + height for the gallery, e.g. "desk:top-[656px] desk:h-[530.57px]". */
  galleryDeskClass: string
}) {
  return (
    <PageScaleSection
      height={height}
      bg="ink"
      canvasClassName="flex max-w-none flex-col gap-12 px-6 py-16 md:px-16"
    >
      {/* Stats + list */}
      <div className="flex flex-col gap-12 desk:absolute desk:left-[64px] desk:top-[86px] desk:w-[1238px] desk:flex-row desk:justify-between desk:gap-0">
        <div className={`flex flex-col gap-[21px] desk:w-[398px] ${statsColClass}`}>
          {stats.map((s) => (
            <div key={s.value} className="flex items-center gap-4">
              <p className="font-sans text-[clamp(4rem,15vw,96px)] font-medium leading-[0.96] text-surface desk:text-[96px]">
                {s.value}
              </p>
              <div className="font-sans text-lg font-semibold leading-[0.96] text-white/72 desk:text-[20px]">
                {s.lines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-0.5 desk:w-[648px]">
          <div className="flex h-[56px] items-center border-t border-white/72 py-2">
            <p className="font-mono text-base font-semibold uppercase tracking-[3.2px] text-white/72">
              {listLabel}
            </p>
          </div>
          <div className="font-sans text-lg font-semibold leading-[1.2] text-surface md:text-xl desk:text-2xl">
            {listItems.map((it) => (
              <p key={it}>{it}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery */}
      <img
        src={gallerySrc}
        alt={galleryAlt}
        className={`w-full desk:absolute desk:left-[64px] desk:w-[1238px] desk:object-cover ${galleryDeskClass}`}
      />
    </PageScaleSection>
  )
}
