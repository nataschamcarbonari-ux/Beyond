import type { ReactNode } from "react"
import SectionLabel from "@/components/SectionLabel"
import DarkIntroSection from "@/components/DarkIntroSection"
import PageScaleSection from "@/components/PageScaleSection"
import BoardSection from "@/sections/deep-dive/BoardSection"
import attrBoard from "@/assets/ch7-attr-board.webp"
import attributes from "@/assets/ch7-attributes.webp"
import concept1 from "@/assets/ch7-concept1.webp"
import concept2 from "@/assets/ch7-concept2.webp"
import concept3 from "@/assets/ch7-concept3.webp"
import concept4 from "@/assets/ch7-concept4.webp"
import concept5 from "@/assets/ch7-concept5.webp"

function ConceptBlock({
  label,
  full,
  children,
}: {
  label: string
  full?: boolean
  children: ReactNode
}) {
  return (
    <div
      className={`flex flex-col gap-2 border-white/72 pb-3 pl-3 ${
        full ? "border" : "border-l border-r border-t"
      }`}
    >
      <div className="flex h-10 items-center">
        <p className="font-mono text-base font-semibold uppercase tracking-[3.2px] text-surface">
          {label}
        </p>
      </div>
      <div className="font-sans text-sm leading-[1.2] text-white/72">{children}</div>
    </div>
  )
}

function ConceptCard({
  n,
  name,
  description,
  functionalities,
  value,
  sketchSrc,
  sketchAlt,
  sketchDeskClass,
  bodyTopDesk,
}: {
  n: number
  name: ReactNode
  description: string
  functionalities: string[]
  value: string
  sketchSrc: string
  sketchAlt: string
  sketchDeskClass: string
  bodyTopDesk: string
}) {
  return (
    <PageScaleSection
      height={768}
      bg="ink"
      fullHeight
      canvasClassName="flex max-w-none flex-col gap-10 px-6 py-16 md:px-16"
    >
      <h2 className="font-sans text-[clamp(2.5rem,7vw,64px)] font-normal uppercase leading-[0.96] text-surface desk:absolute desk:left-[64px] desk:top-[86px] desk:text-[64px]">
        Concept {n}
      </h2>

      <img
        src={sketchSrc}
        alt={sketchAlt}
        className={`w-full self-center desk:absolute ${sketchDeskClass}`}
      />

      <div className={`flex flex-col gap-3 desk:absolute desk:left-[905px] desk:w-[397px] ${bodyTopDesk}`}>
        <p className="font-sans text-lg leading-[1.2] text-white/72 md:text-xl desk:text-[20px]">
          {name}
        </p>
        <div>
          <ConceptBlock label="Description">{description}</ConceptBlock>
          <ConceptBlock label="Functionalities">
            {functionalities.map((f) => (
              <p key={f}>{f}</p>
            ))}
          </ConceptBlock>
          <ConceptBlock label="Value" full>
            {value}
          </ConceptBlock>
        </div>
      </div>
    </PageScaleSection>
  )
}

// Chapter 07 — Shape product directions (Cycle 2). Guiding principles and product
// attributes lead into five concept directions for the portable-workspace system.
export default function Chapter07() {
  return (
    <>
      <SectionLabel dark trailing="CYCLE 2" id="ch-shape">
        07. SHAPE PRODUCT DIRECTIONS
      </SectionLabel>

      <DarkIntroSection
        id="dd-project-guidelines"
        heading={
          <>
            Project
            <br />
            Guidelines
          </>
        }
      >
        <span className="text-accent">
          The project needed a shared set of principles to guide concept generation.
        </span>{" "}
        These guidelines helped connect the research insights to the qualities the product should
        express.
      </DarkIntroSection>

      <BoardSection src={attrBoard} alt="Board mapping product attributes across security, speed, and continuity" />
      <BoardSection
        src={attributes}
        alt="Product attributes — pain points, value topics, attributes, and target relations with references"
        height={2966}
        fullHeight={false}
      />

      <DarkIntroSection
        id="dd-concept-directions"
        heading={
          <>
            Concept
            <br />
            Directions
          </>
        }
      >
        <span className="text-accent">
          The project needed to explore multiple product paths before defining a final development
          direction.
        </span>{" "}
        Concepts were generated as possible territories, not as final product decisions.
      </DarkIntroSection>

      <ConceptCard
        n={1}
        name="Integrated Smart Mat Hub"
        description="A foldable smart mat that integrates connectivity, power and device orchestration into a single portable system."
        functionalities={[
          "Private internet connection (router).",
          "Integrated power and battery management.",
          "Instant device connectivity.",
          "Transforms into a full workstation when opened.",
          "Compact, portable form when closed.",
        ]}
        value="Delivers a ready-to-use, high-performance workspace anywhere, with zero setup and full reliability."
        sketchSrc={concept1}
        sketchAlt="Sketch of the Integrated Smart Mat Hub concept"
        sketchDeskClass="desk:left-[64px] desk:top-[312px] desk:w-[619px]"
        bodyTopDesk="desk:top-[313px]"
      />

      <ConceptCard
        n={2}
        name="Intelligent Messenger"
        description="A messenger bag that transforms into a work surface combined with an integrated infrastructure system."
        functionalities={[
          "Unfolds into a stable surface for laptop and secondary screen.",
          "Integrated power module for charging multiple devices.",
          "Embedded secure connectivity (network system).",
          "Retractable cables accessible without opening the bag.",
        ]}
        value="Delivers a ready-to-use, high-performance workspace anywhere, with zero setup and full reliability."
        sketchSrc={concept2}
        sketchAlt="Sketch of the Intelligent Messenger concept"
        sketchDeskClass="desk:left-[64px] desk:top-[313px] desk:w-[494px]"
        bodyTopDesk="desk:top-[313px]"
      />

      <ConceptCard
        n={3}
        name="Messenger Bag as Mobile Workstation"
        description="A messenger bag designed as a control system for device management and continuous workflow execution."
        functionalities={[
          "Smart inventory tracking of stored items.",
          "Active thermal management for devices inside the bag.",
          "Allows devices (e.g. laptops) to continue operating while stored.",
          "Stabilized base that enables use on uneven surfaces.",
        ]}
        value="Ensures full control, protection and continuity of work, even during transitions or while devices are stored."
        sketchSrc={concept3}
        sketchAlt="Sketch of the Messenger Bag as Mobile Workstation concept"
        sketchDeskClass="desk:left-[64px] desk:top-[309px] desk:w-[525px]"
        bodyTopDesk="desk:top-[313px]"
      />

      <ConceptCard
        n={4}
        name="Integrated Cable Management Tech Bag"
        description="A tech bag that eliminates cable clutter by replacing passive storage with an active cable deployment system."
        functionalities={[
          "Pre-integrated cables connected to a central dock/power hub.",
          "Push-to-deploy cable system.",
          "Pull-and-use cable access.",
          "Auto-retract mechanism for clean storage.",
          "Centralized connection for multiple devices.",
        ]}
        value="Simplifies connectivity by making cables always available, organized and ready to use, eliminating setup effort and clutter."
        sketchSrc={concept4}
        sketchAlt="Sketch of the Integrated Cable Management Tech Bag concept"
        sketchDeskClass="desk:left-[64px] desk:top-[292px] desk:w-[471px]"
        bodyTopDesk="desk:top-[279px]"
      />

      <ConceptCard
        n={5}
        name={
          <>
            Invisible
            <br />
            Infrastructure Layer
          </>
        }
        description="A minimal physical system where interaction, power and connectivity are fully integrated and hidden."
        functionalities={[
          "Integrated connectivity and power (router + battery + distribution).",
          "Invisible docking system (pre-connected, no exposed cables).",
          "Instant activation (open and everything works automatically).",
          "Minimal interface with no manual setup.",
        ]}
        value="Creates a frictionless, zero-setup workspace, where everything is ready and seamlessly integrated into the environment."
        sketchSrc={concept5}
        sketchAlt="Sketch of the Invisible Infrastructure Layer concept"
        sketchDeskClass="desk:left-[64px] desk:top-[258px] desk:w-[634px]"
        bodyTopDesk="desk:top-[238px]"
      />
    </>
  )
}
