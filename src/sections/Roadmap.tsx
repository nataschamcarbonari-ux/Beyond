import type { ReactNode } from "react"
import { Link } from "react-router-dom"
import PageScaleSection from "@/components/PageScaleSection"

type Step = {
  title: ReactNode
  description: ReactNode
}

const steps: Step[] = [
  {
    title: "Align",
    description: "Review the opportunity, audience, market, competitors, guidelines, and mandatories.",
  },
  {
    title: (
      <>
        Select
        <br />
        territory
      </>
    ),
    description: "Choose the first product direction to explore.",
  },
  {
    title: (
      <>
        Define
        <br />
        functions
      </>
    ),
    description: "Separate core functions from secondary or future-facing ones.",
  },
  {
    title: (
      <>
        Generate
        <br />
        concepts
      </>
    ),
    description: "Explore multiple forms, interactions, materials, and features.",
  },
  {
    title: (
      <>
        Validate and
        <br />
        improve
      </>
    ),
    description: (
      <>
        Use the{" "}
        <Link
          to="/beyond/deep-dive#dd-validation-framework"
          className="font-medium text-accent underline [text-decoration-skip-ink:none]"
        >
          Concept Layered Framework
        </Link>{" "}
        to evaluate desirability, alignment, resilience, and gaps.
      </>
    ),
  },
  {
    title: (
      <>
        Prioritize
        <br />
        the direction
      </>
    ),
    description: (
      <>
        Select the strongest concept using structured decision frameworks. If needed, revisit the
        methods used in this project{" "}
        <Link
          to="/beyond/deep-dive#dd-initial-direction"
          className="font-medium text-accent underline [text-decoration-skip-ink:none]"
        >
          here
        </Link>
        .
      </>
    ),
  },
  {
    title: (
      <>
        Quick-test and
        <br />
        fail fast
      </>
    ),
    description:
      "Gather early feedback from road warriors and technical specialists to expose weak assumptions, reduce risk, and improve the concept before detailed development.",
  },
  {
    title: (
      <>
        Detail
        <br />
        the product
      </>
    ),
    description:
      "Define specifications, materials, components, dimensions, interaction logic, and technical constraints.",
  },
]

export default function Roadmap() {
  return (
    <PageScaleSection
      id="roadmap"
      height={1462}
      canvasClassName="flex max-w-[1366px] flex-col gap-12 px-6 py-12 md:gap-16 md:px-16 md:py-16"
    >
        <h2 className="font-sans text-[clamp(3rem,9.4vw,8rem)] font-normal uppercase leading-[0.96] text-ink desk:absolute desk:left-[64px] desk:top-[86px] desk:text-[128px]">
          Roadmap
          <br />
          Suggestion
        </h2>

        <ol className="flex w-full flex-col desk:absolute desk:left-[485px] desk:top-[415px] desk:w-[817px]">
          {steps.map((step, i) => (
            <li
              key={i}
              className="flex flex-col gap-2 border-t border-muted py-6 desk:min-h-[120px] desk:flex-row desk:items-start desk:justify-between desk:border-t-0"
            >
              <span className="font-sans text-[clamp(1.375rem,2.6vw,2.25rem)] font-semibold leading-none text-ink desk:text-[36px]">
                {step.title}
              </span>
              <span className="font-sans text-base leading-[1.2] text-muted desk:w-[397px]">
                {step.description}
              </span>
            </li>
          ))}
        </ol>

        {/* Invention: the vertical timeline rail's dot spacing is
            hand-tuned to the fixed 817px/min-h-120 desktop step layout
            (justify-between across a hardcoded 854px column). Below
            `desk` the steps reflow to full width and wrap onto more
            lines, so the dots can no longer stay aligned to each step
            without JS measurement — the rail is hidden below `desk`
            rather than shown desynced. */}
        <div className="hidden desk:absolute desk:left-[869px] desk:top-[439px] desk:block desk:h-[854px] desk:w-3">
          <div className="absolute left-1/2 top-1.5 bottom-1.5 w-px -translate-x-1/2 bg-muted/50" />
          <div className="flex h-full flex-col justify-between">
            {steps.map((_, i) => (
              <span key={i} className="h-3 w-3 shrink-0 rounded-full bg-muted" />
            ))}
          </div>
        </div>
    </PageScaleSection>
  )
}
