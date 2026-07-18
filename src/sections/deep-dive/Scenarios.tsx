import PageScaleSection from "@/components/PageScaleSection"
import DeepDiveTripleHeader from "@/components/DeepDiveTripleHeader"
import scenarioGabriel from "@/assets/ch2-scenario-gabriel.webp"
import scenarioMariana from "@/assets/ch2-scenario-mariana.webp"

// SCENARIOS (225:212) — title/intro/notes header + two "GOAL" storyboards
// (Gabriel travelling, Mariana in the office). Each storyboard is a 6-step
// caption+photo strip exported flat from Figma; the two sit 200px apart.
export default function Scenarios() {
  return (
    <PageScaleSection
      height={1642}
      bg="ink"
      canvasClassName="flex max-w-none flex-col gap-12 px-6 py-16 md:px-16"
    >
      <DeepDiveTripleHeader
        title="Scenarios"
        intro="The road warrior scenario made the focus problem more intense because the user does not control the environment. Power, connectivity, surface, privacy, setup, noise, and professional presence all become unstable at the same time."
        notes={
          <>
            <p>The scenarios were used to understand the sequence of events around focus loss.</p>
            <ul className="mt-4 list-disc ps-[21px]">
              <li>Where the user is.</li>
              <li>What the user is trying to accomplish.</li>
              <li>What interrupts the flow.</li>
              <li>What tools or workarounds the user uses.</li>
              <li>What the emotional and productivity outcome is.</li>
            </ul>
          </>
        }
      />

      <div className="flex flex-col gap-16 desk:absolute desk:left-[64px] desk:top-[460px] desk:w-[1238px] desk:gap-[200px]">
        <img
          src={scenarioGabriel}
          alt="Storyboard — Goal: Gabriel needs to deliver a critical client presentation while traveling (6 steps)"
          className="w-full"
        />
        <img
          src={scenarioMariana}
          alt="Storyboard — Goal: Mariana needs to complete a project document by the end of the workday (6 steps)"
          className="w-full"
        />
      </div>
    </PageScaleSection>
  )
}
