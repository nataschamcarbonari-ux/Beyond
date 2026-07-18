import type { ReactNode } from "react"
import PageScaleSection from "@/components/PageScaleSection"
import MonoLabeledBlock from "@/components/MonoLabeledBlock"

/**
 * A "problem territory" deep-dive: a 64px title, a left column of three
 * mono-labelled blocks (MAIN PROBLEMS / CONCEPT DIRECTION / FUTURE VISION), and a
 * bespoke image collage exported flat from Figma. Used 3× in Chapter 02 (time
 * management, lack of focus, communication); each has a different collage layout
 * and left-column offset, passed via the *DeskClass props.
 */
export default function ProblemTerritory({
  title,
  problems,
  concept,
  future,
  leftColDeskClass,
  collageSrc,
  collageAlt,
  collageDeskClass,
}: {
  title: ReactNode
  problems: string[]
  concept: string
  future: string
  /** Desk-only position for the left text column, e.g. "desk:top-[414px]". */
  leftColDeskClass: string
  collageSrc: string
  collageAlt: string
  /** Desk-only position + width for the collage, e.g. "desk:left-[713px] desk:top-[278px] desk:w-[588.5px]". */
  collageDeskClass: string
}) {
  return (
    <PageScaleSection
      height={915}
      bg="ink"
      canvasClassName="flex max-w-none flex-col gap-10 px-6 py-16 md:px-16"
    >
      <h2 className="font-sans text-[clamp(2.5rem,7vw,64px)] font-normal uppercase leading-[0.96] text-surface desk:absolute desk:left-[64px] desk:top-[86px] desk:text-[64px]">
        {title}
      </h2>

      <div className={`flex flex-col gap-[42px] desk:absolute desk:left-[64px] desk:w-[396px] ${leftColDeskClass}`}>
        <MonoLabeledBlock label="Main problems">
          <ul className="list-disc ps-[21px]">
            {problems.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </MonoLabeledBlock>
        <MonoLabeledBlock label="Concept direction">{concept}</MonoLabeledBlock>
        <MonoLabeledBlock label="Future vision">{future}</MonoLabeledBlock>
      </div>

      <img src={collageSrc} alt={collageAlt} className={`w-full self-center desk:absolute ${collageDeskClass}`} />
    </PageScaleSection>
  )
}
