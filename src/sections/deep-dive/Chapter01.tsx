import SectionLabel from "@/components/SectionLabel"
import DarkIntroSection from "@/components/DarkIntroSection"
import BoardSection from "@/sections/deep-dive/BoardSection"
import ResearchPillars from "@/sections/deep-dive/ResearchPillars"
import StatsGallerySection from "@/sections/deep-dive/StatsGallerySection"
import researchBoard from "@/assets/ch1-research-board.webp"
import interviewBoard from "@/assets/ch1-interview-board.webp"
import workshopBoard from "@/assets/ch1-workshop-board.webp"
import interviewPhotos from "@/assets/ch1-interview-photos.webp"
import workshopGallery from "@/assets/ch1-workshop-gallery.webp"

// Chapter 01 — Discover the context (Cycle 1). Desk research → research pillars →
// interviews → workshop, alternating narrative openers, process boards, and
// evidence (pillars, stats + photo galleries).
export default function Chapter01() {
  return (
    <>
      <SectionLabel dark trailing="CYCLE 1" id="ch-discover">
        01. DISCOVER THE CONTEXT
      </SectionLabel>

      <DarkIntroSection
        id="dd-desk-research"
        heading={
          <>
            Desk
            <br />
            Research
          </>
        }
      >
        The research began broadly because the project did not yet know which productivity problem
        should become the focus.{" "}
        <span className="text-accent">
          By exploring productivity, workplace, and time management, the project could compare
          different opportunity spaces before committing to one direction.
        </span>
      </DarkIntroSection>

      <BoardSection src={researchBoard} alt="Desk research board of productivity sources and clustered notes" />

      <ResearchPillars />

      <DarkIntroSection id="dd-interviews" heading="Interviews">
        The interviews helped reveal how different professionals define productivity, protect focus,
        manage overload, and use their environments.{" "}
        <span className="text-accent">
          This step was necessary because desk research alone could not explain the small routines,
          compensations, and workarounds people use every day.
        </span>
      </DarkIntroSection>

      <BoardSection src={interviewBoard} alt="Interview synthesis board of highlights and clustered themes" />

      <StatsGallerySection
        height={1273}
        stats={[
          { value: "5", lines: ["professionals included", "designers, HR, PM,", "and sales."] },
          { value: "23", lines: ["questions"] },
        ]}
        listLabel="THEMES EXPLORED"
        listItems={[
          "01. Daily routine.",
          "02. Definition of a productive day.",
          "03. Preferred work environments.",
          "04. Overload and stuck moments.",
          "05. Repetitive or low-value tasks.",
          "06. Workspace infrastructure.",
          "07. Remote vs. in-office productivity.",
          "08. AI usage and trust.",
          "09. Future expectations around work and collaboration.",
        ]}
        gallerySrc={interviewPhotos}
        galleryAlt="Grid of interviewees' workspace photos"
        galleryDeskClass="desk:top-[656px] desk:h-[530.57px]"
      />

      <DarkIntroSection id="dd-workshop" heading="Workshop">
        <span className="text-accent">
          The workshop was created to expand the research beyond individual interviews and collect
          perspectives from a larger group in a structured way.
        </span>{" "}
        It helped compare problems across remote, hybrid, and on-site work while generating shared
        future scenarios.
      </DarkIntroSection>

      <BoardSection src={workshopBoard} alt="Workshop board of sessions, clusters, and future scenarios" />

      <StatsGallerySection
        height={1678}
        stats={[
          { value: "2,5", lines: ["hours of", "duration"] },
          { value: "15", lines: ["participants,", "all designers"] },
          { value: "5", lines: ["future scenarios", "presented"] },
        ]}
        statsColClass="desk:h-[319px] desk:justify-between desk:gap-0"
        listLabel="ACTIVITIES"
        listItems={[
          "01. Icebreaker",
          "02. Presenting the context and goals.",
          "03. Exploration by work model: remote, on-site, and hybrid.",
          "02. Problem clustering.",
          "03. Voting by productivity impact, well-being potential, and innovation potential.",
          "04. Future scenario generation.",
          "05. Presentation and discussion.",
        ]}
        gallerySrc={workshopGallery}
        galleryAlt="Workshop agenda slides and photos of the session"
        galleryDeskClass="desk:top-[637px] desk:h-[955px]"
      />
    </>
  )
}
