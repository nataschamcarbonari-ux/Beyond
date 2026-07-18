import SectionLabel from "@/components/SectionLabel"
import DarkIntroSection from "@/components/DarkIntroSection"
import PageScaleSection from "@/components/PageScaleSection"
import MonoLabeledBlock from "@/components/MonoLabeledBlock"
import DeepDiveTripleHeader from "@/components/DeepDiveTripleHeader"
import BoardSection from "@/sections/deep-dive/BoardSection"
import evalBoard from "@/assets/ch4-eval-board.webp"
import analysisBoard from "@/assets/ch4-analysis-board.webp"
import definitionCollage from "@/assets/ch4-definition-collage.webp"

// 241:79 — DEFINITION: the chosen "portable workspace" direction, with a product
// reference collage and the "Backpack Office" concept statement.
function Definition() {
  return (
    <PageScaleSection
      height={768}
      bg="ink"
      fullHeight
      canvasClassName="flex max-w-none flex-col gap-10 px-6 py-16 md:px-16"
    >
      <DeepDiveTripleHeader
        title="Definition"
        intro="The selected direction moved toward a portable workspace system — a way to help people carry the conditions of work with them instead of rebuilding them from scratch in every place."
        notes={
          <>
            <p>The alternatives were evaluated through:</p>
            <ul className="mt-4 list-disc ps-[21px]">
              <li>Desirable, Viable, and Feasible matrix.</li>
              <li>Impact &times; Effort matrix.</li>
              <li>Patent potential criteria.</li>
            </ul>
          </>
        }
      />

      <img
        src={definitionCollage}
        alt="Collage of portable-workspace and desk-mat product references"
        className="w-full desk:absolute desk:left-[560px] desk:top-[270px] desk:w-[750px]"
      />

      <div className="flex flex-col gap-4 desk:absolute desk:left-[64px] desk:top-[538px] desk:w-[397px]">
        <p className="font-mono text-base font-semibold uppercase tracking-[3.2px] text-surface">
          Backpack Office
        </p>
        <p className="font-sans text-3xl font-semibold leading-none text-surface md:text-4xl desk:text-[36px]">
          &ldquo;Empowering people to carry their workspace anywhere.&rdquo;
        </p>
      </div>
    </PageScaleSection>
  )
}

// 250:72 — what the recalibration revealed was still missing before Cycle 2.
function WhatWasMissing() {
  return (
    <PageScaleSection
      height={578}
      bg="ink"
      fullHeight
      canvasClassName="flex max-w-none flex-col gap-10 px-6 py-16 md:px-16"
    >
      <p className="font-sans text-lg leading-[1.2] text-white/72 md:text-xl desk:absolute desk:left-[64px] desk:top-[86px] desk:w-[396px] desk:text-[20px]">
        The recalibration helped the project become less solution-led and more evidence-led.
      </p>

      <MonoLabeledBlock
        label="What was missing"
        className="desk:absolute desk:left-[905px] desk:top-[86px] desk:w-[396px]"
      >
        <ul className="list-disc ps-[21px]">
          <li>More reliable data from the primary audience.</li>
          <li>A deeper understanding of road warrior routines.</li>
          <li>Validation with people who actually work in high-mobility contexts.</li>
          <li>Input from soft-goods and product specialists.</li>
          <li>A future-facing lens, not only a response to current problems.</li>
        </ul>
      </MonoLabeledBlock>
    </PageScaleSection>
  )
}

// Chapter 04 — Set the direction (Cycle 1). Alternatives are evaluated, a portable
// workspace direction is defined, then recalibrated toward stronger evidence.
export default function Chapter04() {
  return (
    <>
      <SectionLabel dark trailing="CYCLE 1" id="ch-set">
        04. SET THE DIRECTION
      </SectionLabel>

      <DarkIntroSection
        id="dd-initial-direction"
        heading={
          <>
            Initial
            <br />
            Direction
          </>
        }
      >
        The project had several possible concepts, but it needed a structured way to decide which
        direction had stronger product potential.{" "}
        <span className="text-accent">
          Evaluation methods helped compare alternatives through desirability, feasibility, business
          relevance, and innovation opportunity.
        </span>
      </DarkIntroSection>

      <BoardSection src={evalBoard} alt="Evaluation board: impact/effort and desirable/viable/feasible matrices" />

      <Definition />

      <DarkIntroSection id="dd-recalibration" heading="Recalibration">
        <span className="text-accent">
          The first direction was promising, but the project needed stronger evidence to avoid
          turning an early solution into a false need.
        </span>{" "}
        This moment helped the project slow down, question its assumptions, and rebuild the direction
        around real behavior.
      </DarkIntroSection>

      <BoardSection src={analysisBoard} alt="Project analysis board with the three concept approaches" />

      <WhatWasMissing />
    </>
  )
}
