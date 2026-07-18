import type { ReactNode } from "react"
import SectionLabel from "@/components/SectionLabel"
import DarkIntroSection from "@/components/DarkIntroSection"
import PageScaleSection from "@/components/PageScaleSection"
import MonoLabeledBlock from "@/components/MonoLabeledBlock"
import BoardSection from "@/sections/deep-dive/BoardSection"
import segmentationBoard from "@/assets/ch5-segmentation-board.webp"
import videoBoard from "@/assets/ch5-video-board.webp"
import journeyBoard from "@/assets/ch5-journey-board.webp"

// Shared bits for this chapter's "title + top-right note + mid content" layout.
function Title({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-sans text-[clamp(2.5rem,7vw,64px)] font-normal uppercase leading-[0.96] text-surface desk:absolute desk:left-[64px] desk:top-[86px] desk:text-[64px]">
      {children}
    </h2>
  )
}

function UserSegmentation() {
  return (
    <PageScaleSection
      height={768}
      bg="ink"
      fullHeight
      canvasClassName="flex max-w-none flex-col gap-10 px-6 py-16 md:px-16"
    >
      <Title>
        User
        <br />
        Segmentation
      </Title>

      <div className="font-sans text-sm leading-[1.2] text-white/72 desk:absolute desk:left-[905px] desk:top-[86px] desk:w-[396px]">
        <p>The project compared different user segments with potential fit for the solution:</p>
        <ul className="mt-4 list-disc ps-[21px]">
          <li>Hybrid workers.</li>
          <li>Road warriors.</li>
          <li>Executives and client-facing professionals.</li>
          <li>High-mobility knowledge workers.</li>
        </ul>
      </div>

      <MonoLabeledBlock
        label="Validation with Dell Profiles"
        className="desk:absolute desk:left-[64px] desk:top-[396px] desk:w-[396px]"
      >
        <p>
          The audience was connected to Dell&rsquo;s internal profile of The Builder: a high-mobility
          executive who must maintain performance, authority, and continuity as work shifts across
          environments.
        </p>
        <p className="mt-4 font-medium text-surface">What was mapped</p>
        <ul className="list-disc ps-[21px]">
          <li>Everyday carry.</li>
          <li>Pain points.</li>
          <li>Value topics.</li>
          <li>Product targets.</li>
          <li>Contexts of use.</li>
          <li>Professional expectations.</li>
        </ul>
      </MonoLabeledBlock>

      <img
        src={segmentationBoard}
        alt="Board validating the audience against Dell's internal user profiles"
        className="w-full self-center desk:absolute desk:left-[636px] desk:top-[396px] desk:w-[666px]"
      />
    </PageScaleSection>
  )
}

function WorkPatterns() {
  return (
    <PageScaleSection
      height={768}
      bg="ink"
      fullHeight
      canvasClassName="flex max-w-none flex-col gap-10 px-6 py-16 md:px-16"
    >
      <Title>
        Work
        <br />
        Patterns
      </Title>

      <p className="font-sans text-lg leading-[1.2] text-white/72 md:text-xl desk:absolute desk:left-[905px] desk:top-[86px] desk:w-[397px] desk:text-[20px]">
        Road warriors already build their own systems. The opportunity is not to invent mobility
        from zero, but to integrate what users are already assembling alone.
      </p>

      <div className="flex flex-col gap-10 desk:contents">
        <MonoLabeledBlock
          label="How they work"
          className="desk:absolute desk:left-[64px] desk:top-[396px] desk:w-[396px]"
        >
          <ul className="list-disc ps-[21px]">
            <li>phone as primary workstation during transit;</li>
            <li>adaptive setup depending on place;</li>
            <li>preference for fast connection;</li>
            <li>strong need for security and privacy;</li>
            <li>investment in ergonomics;</li>
            <li>reliance on organizer cases.</li>
          </ul>
        </MonoLabeledBlock>

        <MonoLabeledBlock
          label="What they say"
          className="desk:absolute desk:left-[484px] desk:top-[396px] desk:w-[396px]"
        >
          Community quotes and informal observations reinforced that mobile workers value tools that
          are light, reliable, easy to connect, and easy to carry.
        </MonoLabeledBlock>

        <MonoLabeledBlock
          label="What they carry"
          className="desk:absolute desk:left-[905px] desk:top-[396px] desk:w-[396px]"
        >
          <ul className="list-disc ps-[21px]">
            <li>laptop;</li>
            <li>smartphone;</li>
            <li>portable monitor;</li>
            <li>compact mouse;</li>
            <li>external keyboard;</li>
            <li>headset;</li>
            <li>earbuds;</li>
            <li>organizer case;</li>
            <li>cables and adapters;</li>
            <li>portable hotspot;</li>
            <li>travel charger.</li>
          </ul>
        </MonoLabeledBlock>
      </div>
    </PageScaleSection>
  )
}

function UserInterviews() {
  return (
    <PageScaleSection
      height={768}
      bg="ink"
      fullHeight
      canvasClassName="flex max-w-none flex-col gap-10 px-6 py-16 md:px-16"
    >
      <Title>
        User
        <br />
        Interviews
      </Title>

      <p className="font-sans text-lg leading-[1.2] text-white/72 md:text-xl desk:absolute desk:left-[905px] desk:top-[86px] desk:w-[397px] desk:text-[20px]">
        The interviews showed that the executive&rsquo;s kit is not just a work tool — it is part of
        how the brand is experienced in the field.
      </p>

      <div className="flex flex-col gap-10 desk:contents">
        <div className="flex flex-col gap-6 desk:absolute desk:left-[64px] desk:top-[396px] desk:w-[398px]">
          {[
            { n: "2", label: "field executives based on Brazil", labelClass: "desk:w-[205px]" },
            { n: "1", label: "Dell's soft goods specialist", labelClass: "" },
          ].map((s) => (
            <div key={s.n} className="flex items-center gap-4">
              <p className="font-sans text-[clamp(4rem,15vw,96px)] font-medium leading-[0.96] text-surface desk:text-[96px]">
                {s.n}
              </p>
              <p
                className={`font-sans text-lg font-semibold leading-[0.96] text-white/72 desk:text-[20px] ${s.labelClass}`}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <MonoLabeledBlock
          label="How the executives work"
          className="desk:absolute desk:left-[484px] desk:top-[396px] desk:w-[396px]"
        >
          <ul className="list-disc ps-[21px]">
            <li>The setup changes by environment.</li>
            <li>Accessories often stay permanently in the bag.</li>
            <li>Security is the first filter when choosing where to work.</li>
            <li>Both users maintain duplicated setups between home and field.</li>
            <li>The bag is not passive storage; it is part of the work system.</li>
          </ul>
        </MonoLabeledBlock>

        <MonoLabeledBlock
          label="Specialist Insights"
          className="desk:absolute desk:left-[905px] desk:top-[396px] desk:w-[396px]"
        >
          <ul className="list-disc ps-[21px]">
            <li>
              How electronics could be integrated into soft goods without creating discomfort or
              durability issues.
            </li>
            <li>
              Why weight is a critical adoption risk, especially for users who already carry personal
              and work items.
            </li>
            <li>Why technology should simplify the experience instead of adding interaction complexity.</li>
            <li>
              How a modular smart sleeve could reduce adoption barriers by working across backpacks,
              handbags, briefcases, or suitcases.
            </li>
            <li>
              Why users may be more willing to pay for protection, organization, and reliability than
              for technology alone.
            </li>
          </ul>
        </MonoLabeledBlock>
      </div>
    </PageScaleSection>
  )
}

// Chapter 05 — Deepen the audience (Cycle 2). Road warriors are segmented,
// validated against Dell profiles, and studied through work patterns and
// interviews with field executives and a soft-goods specialist.
export default function Chapter05() {
  return (
    <>
      <SectionLabel dark trailing="CYCLE 2" id="ch-deepen">
        05. DEEPEN THE AUDIENCE
      </SectionLabel>

      <DarkIntroSection
        id="dd-audience-deepening"
        heading={
          <>
            Audience
            <br />
            Deepening
          </>
        }
      >
        After road warriors became the primary archetype, the project needed to understand what made
        this audience different from other hybrid or mobile workers.{" "}
        <span className="text-accent">
          The goal was to identify the specific pains, values, routines, and expectations that should
          guide the product direction.
        </span>
      </DarkIntroSection>

      <UserSegmentation />
      <WorkPatterns />
      <BoardSection src={videoBoard} alt="Board of field videos and community observations from mobile workers" />
      <UserInterviews />
      <BoardSection src={journeyBoard} alt="User journey board of a field sales executive across contexts" />
    </>
  )
}
