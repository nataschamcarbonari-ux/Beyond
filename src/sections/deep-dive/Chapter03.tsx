import SectionLabel from "@/components/SectionLabel"
import DarkIntroSection from "@/components/DarkIntroSection"
import PageScaleSection from "@/components/PageScaleSection"
import BoardSection from "@/sections/deep-dive/BoardSection"
import conceptBoard from "@/assets/ch3-concept-board.webp"

const STAGES = [
  {
    title: "Before focus",
    desc: "This stage explored how the system could prepare the user before deep work begins.",
    items: [
      "Intelligent daily planning.",
      "Focus-block recommendations.",
      "Calendar and task orchestration.",
      "Wearable signals connected to energy levels.",
      "AI-supported schedule preparation.",
    ],
  },
  {
    title: "During Focus",
    desc: "This stage explored how the system could protect the user while work is happening.",
    items: [
      "Integrated focus mode across devices.",
      "Minimal phone dock.",
      "Simplified computer interface.",
      "Productivity apps in Do Not Disturb mode.",
      "Smart headphones.",
      "Adaptive noise control.",
      "Visual focus visor.",
      "E-ink writing or note surfaces.",
    ],
  },
  {
    title: "After focus",
    desc: "This stage explored how the system could help the user return to the broader workday without losing context.",
    items: [
      "AI summary of what happened during focus time.",
      "Suggested replies.",
      "Missed-notification recap.",
      "Schedule adjustment suggestions.",
      "Next-step recommendations.",
    ],
  },
]

// 239:60 — the three stages of the focus cycle explored during concept generation.
function FocusCycle() {
  return (
    <PageScaleSection
      height={768}
      bg="ink"
      fullHeight
      canvasClassName="flex max-w-none flex-col gap-10 px-6 py-16 md:px-16"
    >
      <div className="flex flex-col gap-10 desk:absolute desk:left-[63px] desk:top-[86px] desk:w-[1239px] desk:flex-row desk:items-start desk:gap-6">
        {STAGES.map((s) => (
          <div
            key={s.title}
            className="flex flex-col gap-6 border-t border-surface p-6 desk:w-[397px]"
          >
            <h3 className="font-sans text-3xl font-semibold leading-none text-surface md:text-4xl desk:text-[36px]">
              {s.title}
            </h3>
            <p className="font-sans text-sm leading-[1.2] text-white/72">{s.desc}</p>
            <ul className="list-disc ps-6 font-sans text-base font-medium leading-[1.2] text-surface">
              {s.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </PageScaleSection>
  )
}

// Chapter 03 — Generate early concepts (Cycle 1). Alternatives explored across the
// whole focus cycle rather than committing to a single product form.
export default function Chapter03() {
  return (
    <>
      <SectionLabel dark trailing="CYCLE 1" id="ch-generate">
        03. GENERATE EARLY CONCEPTS
      </SectionLabel>

      <DarkIntroSection
        id="dd-alternative-generation"
        heading={
          <>
            Alternative
            <br />
            Generation
          </>
        }
      >
        <span className="text-accent">
          After the audience and context became clearer, the project needed to explore solutions
          without locking too early into one product form.
        </span>{" "}
        Alternatives were generated around the complete focus cycle: before, during, and after
        focused work.
      </DarkIntroSection>

      <BoardSection src={conceptBoard} alt="Concept board of early alternatives across the focus cycle" />

      <FocusCycle />
    </>
  )
}
