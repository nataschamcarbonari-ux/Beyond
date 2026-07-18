import SectionLabel from "@/components/SectionLabel"
import DarkIntroSection from "@/components/DarkIntroSection"
import BoardSection from "@/sections/deep-dive/BoardSection"
import framework from "@/assets/ch8-framework.webp"

// Chapter 08 — Prepare for development (Cycle 2). The Layered Concept Validation
// Framework tests each concept across desirability, alignment, resilience, and
// intentional improvement before hand-off.
export default function Chapter08() {
  return (
    <>
      <SectionLabel dark trailing="CYCLE 2" id="ch-prepare">
        08. PREPARE FOR DEVELOPMENT
      </SectionLabel>

      <DarkIntroSection
        id="dd-validation-framework"
        heading={
          <>
            Validation
            <br />
            Framework
          </>
        }
      >
        The project needed a way to evaluate concepts without relying only on preference or visual
        appeal.{" "}
        <span className="text-accent">
          The Layered Concept Validation Framework was created to test each concept through user
          value, strategic alignment, real-world resilience, and intentional improvement.
        </span>
      </DarkIntroSection>

      <BoardSection
        src={framework}
        alt="The Layered Concept Validation Framework — L1 Desirability, L2 Alignment, L3 Stress-test, and L4 Gap Filling"
        height={2284}
        fullHeight={false}
      />
    </>
  )
}
