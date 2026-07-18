import SectionLabel from "@/components/SectionLabel"
import DarkIntroSection from "@/components/DarkIntroSection"
import PageScaleSection from "@/components/PageScaleSection"
import MonoLabeledBlock from "@/components/MonoLabeledBlock"
import BoardSection from "@/sections/deep-dive/BoardSection"
import ProblemTerritory from "@/sections/deep-dive/ProblemTerritory"
import { PersonasIntro, PersonaMariana } from "@/sections/deep-dive/Personas"
import Scenarios from "@/sections/deep-dive/Scenarios"
import territoriesBoard from "@/assets/ch2-board-territories.webp"
import collageTime from "@/assets/ch2-collage-time.webp"
import collageFocus from "@/assets/ch2-collage-focus.webp"
import collageComm from "@/assets/ch2-collage-comm.webp"
import harrisBoard from "@/assets/ch2-board-harris.webp"
import focusBoard from "@/assets/ch2-focus-board.webp"
import personaBoard from "@/assets/ch2-board-personas.webp"

// 196:241 — why "lack of focus" was chosen: a rationale paragraph + how-people-cope
// and market-response lists, over a synthesis board.
function FocusOpportunity() {
  return (
    <PageScaleSection
      height={970}
      bg="ink"
      canvasClassName="flex max-w-none flex-col gap-10 px-6 py-16 md:px-16"
    >
      <p className="font-sans text-lg leading-[1.2] text-white/72 md:text-xl desk:absolute desk:left-[64px] desk:top-[86px] desk:w-[397px] desk:text-[20px]">
        Lack of focus was selected because it connected the other territories instead of competing
        with them. Time management and communication both contributed to focus loss, making focus
        the most systemic and hardware-relevant opportunity.
      </p>

      <div className="flex flex-col gap-10 desk:contents">
        <MonoLabeledBlock
          label="What people do to protect focus"
          className="desk:absolute desk:left-[905px] desk:top-[86px] desk:w-[396px]"
        >
          <ul className="list-disc ps-[21px]">
            <li>Using headphones as a signal and sensory barrier.</li>
            <li>Activating Do Not Disturb modes.</li>
            <li>Listening to brown noise or ambient sound.</li>
            <li>Writing down thoughts to avoid switching tasks.</li>
            <li>Using timers or visual countdowns.</li>
            <li>Blocking distracting websites.</li>
            <li>Separating work and leisure environments.</li>
            <li>Keeping notebooks or low-distraction writing tools nearby.</li>
          </ul>
        </MonoLabeledBlock>

        <MonoLabeledBlock
          label="Market responses"
          className="desk:absolute desk:left-[905px] desk:top-[734px] desk:w-[397px]"
        >
          <ul className="list-disc ps-[21px]">
            <li>Hard lockout devices.</li>
            <li>E-ink writing tablets.</li>
            <li>Physical time trackers.</li>
            <li>Minimalist phones.</li>
            <li>Focus signaling tools.</li>
            <li>Sensory control products.</li>
          </ul>
        </MonoLabeledBlock>
      </div>

      <img
        src={focusBoard}
        alt="Focus synthesis board of coping strategies and market products"
        className="w-full self-center desk:absolute desk:left-[64px] desk:top-[472px] desk:w-[691px]"
      />
    </PageScaleSection>
  )
}

// Chapter 02 — Define the problem (Cycle 1). Three problem territories are
// compared, one (focus) is chosen, then mapped onto personas and scenarios.
export default function Chapter02() {
  return (
    <>
      <SectionLabel dark trailing="CYCLE 1" id="ch-define">
        02. DEFINE THE PROBLEM
      </SectionLabel>

      <DarkIntroSection
        id="dd-problem-territories"
        heading={
          <>
            Problem
            <br />
            Territories
          </>
        }
      >
        Once the research was synthesized, three recurring problem spaces became visible: time
        management, lack of focus, and communication.{" "}
        <span className="text-accent">
          This phase existed to compare them before choosing which one had the strongest potential
          for product development.
        </span>
      </DarkIntroSection>

      <BoardSection src={territoriesBoard} alt="Board comparing the three problem territories" />

      <ProblemTerritory
        title={
          <>
            Time
            <br />
            Management
          </>
        }
        problems={[
          "Too many meetings.",
          "Unexpected schedule changes.",
          "Commute friction.",
          "Family coordination.",
          "Lack of flexibility.",
          "Blurred boundaries between personal and professional life.",
        ]}
        concept="Empower people to have more control over their time through a fluid, intelligent, human-centered experience."
        future="AI helps identify moments for focus and rest, adjusts before unexpected events become stress, and supports better coexistence between work and personal life."
        leftColDeskClass="desk:top-[278px] desk:h-[551px] desk:justify-end"
        collageSrc={collageTime}
        collageAlt="Collage of time-management product concepts"
        collageDeskClass="desk:left-[788px] desk:top-[278px] desk:w-[514.5px]"
      />

      <ProblemTerritory
        title={
          <>
            Lack of
            <br />
            Focus
          </>
        }
        problems={[
          "Constant interruptions.",
          "Fragmented work.",
          "Notification overload.",
          "Physical distractions from others.",
          "Lack of signals or environments that protect concentration.",
        ]}
        concept="Create an environment where people can reach deep focus with less effort."
        future="AI detects when the user is entering deep focus, filters interruptions by urgency and context, and synchronizes digital and physical signals that protect attention."
        leftColDeskClass="desk:top-[414px]"
        collageSrc={collageFocus}
        collageAlt="Collage of focus and deep-work product concepts"
        collageDeskClass="desk:left-[713px] desk:top-[278px] desk:w-[588.5px]"
      />

      <ProblemTerritory
        title="Communication"
        problems={[
          "Difficulty clarifying doubts.",
          "Slow response time.",
          "Time-zone conflict.",
          "Incomplete or dispersed messages.",
          "Lack of integration between channels.",
          "Isolation.",
        ]}
        concept="Enable clear, fluid, and human communication between distributed teams."
        future="AI clarifies, summarizes, and completes messages, reducing ambiguity and improving transitions between synchronous and asynchronous work."
        leftColDeskClass="desk:top-[413px]"
        collageSrc={collageComm}
        collageAlt="Collage of communication product concepts"
        collageDeskClass="desk:left-[861px] desk:top-[278px] desk:w-[441.5px]"
      />

      <DarkIntroSection id="dd-prioritization" heading="Prioritization">
        At this point, the project had three valid directions, but it needed a clear decision.{" "}
        <span className="text-accent">
          Prioritization helped identify which problem had the strongest connection to productivity
          impact, business relevance, hardware potential, AI opportunity, and Dell&rsquo;s product
          ecosystem.
        </span>
      </DarkIntroSection>

      <BoardSection
        src={harrisBoard}
        alt="Harris Profile matrix and focus-time diagram prioritizing the problem"
      />

      <FocusOpportunity />

      <DarkIntroSection
        id="dd-user-mapping"
        heading={
          <>
            User
            <br />
            Mapping
          </>
        }
      >
        <span className="text-accent">
          Once focus became the central theme, the project needed to place the problem inside real
          user contexts.
        </span>{" "}
        Personas and scenarios helped reveal when focus breaks, what causes the friction, and which
        user profiles had the strongest connection to the opportunity.
      </DarkIntroSection>

      <BoardSection src={personaBoard} alt="Board mapping personas and scenarios" />

      <PersonasIntro />
      <PersonaMariana />
      <Scenarios />
    </>
  )
}
