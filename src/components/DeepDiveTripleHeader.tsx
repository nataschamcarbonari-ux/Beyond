import type { ReactNode } from "react"

/**
 * The three-column header used by the PERSONAS and SCENARIOS beats: a 64px
 * uppercase title (left), a 20px intro paragraph (middle), and a 14px notes
 * block (right) — all pinned at the same top offset at `desk`, stacking into a
 * single column below it. Drop it as the first child of a `PageScaleSection`.
 */
export default function DeepDiveTripleHeader({
  title,
  intro,
  notes,
}: {
  title: ReactNode
  intro: ReactNode
  notes: ReactNode
}) {
  return (
    <div className="flex flex-col gap-8 desk:contents">
      <h2 className="font-sans text-[clamp(2.5rem,7vw,64px)] font-normal uppercase leading-[0.96] text-surface desk:absolute desk:left-[64px] desk:top-[86px] desk:text-[64px]">
        {title}
      </h2>
      <p className="font-sans text-lg leading-[1.2] text-white/72 md:text-xl desk:absolute desk:left-[484px] desk:top-[86px] desk:w-[396px] desk:text-[20px]">
        {intro}
      </p>
      <div className="font-sans text-sm leading-[1.2] text-white/72 desk:absolute desk:left-[905px] desk:top-[86px] desk:w-[396px]">
        {notes}
      </div>
    </div>
  )
}
