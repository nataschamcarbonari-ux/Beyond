import PageScaleSection from "@/components/PageScaleSection"
import DoubleDiamondDiagram from "@/components/DoubleDiamondDiagram"

const cycle1Steps = [
  "01. Desk research around productivity, workplace and time management.",
  "02. Interviews with hybrid, remote, and on-site professionals.",
  "03. Internal workshop with design participants.",
  "04. Identification of three problem territories.",
  "05. Harris Profile Matrix to prioritize the strongest topic.",
  "06. Generation of early alternatives around the focus cycle.",
  "07. Selection of an initial product direction.",
]

const cycle2Steps = [
  "08. Road warrior audience deepening.",
  "09. Interviews with high-mobility professionals.",
  "10. Interview with soft goods specialist.",
  "11. Market analysis and ROI modeling.",
  "12. Future signals around business travel.",
  "13. Psychological and environmental research.",
  "14. Product targets and mandatories.",
  "15. Concept directions.",
  "16. Layered Concept Validation Framework.",
]

function StepList({ steps }: { steps: string[] }) {
  return (
    <div className="font-sans text-base font-medium leading-[1.2] text-surface">
      {steps.map((s) => (
        <p key={s}>{s}</p>
      ))}
    </div>
  )
}

export default function DeepDiveIntro() {
  return (
    <PageScaleSection
      height={1424}
      bg="ink"
      canvasClassName="flex max-w-none flex-col gap-12 px-6 py-12 md:gap-16 md:px-16 md:py-16"
    >
      {/* Intro paragraph */}
      <p className="font-sans text-2xl font-medium leading-[1.1] text-surface md:text-3xl desk:absolute desk:left-[64px] desk:top-[86px] desk:w-[1238px] desk:text-[36px] desk:leading-none">
        Beyond began as a personal innovation project developed during an internship experience
        within Dell Technologies.{" "}
        <span className="text-accent">
          The challenge was intentionally open: explore a future-facing opportunity connected to
          hardware, productivity, innovation, and AI.
        </span>{" "}
        The project followed the Double Diamond model, but not as a single linear process. It
        evolved through two connected cycles.
      </p>

      {/* Double Diamond diagram: fixed geometry, scaled to fit width below desk
          via a container-query transform; pinned at its Figma position at desk. */}
      <div
        className="relative w-full [container-type:inline-size] desk:absolute desk:left-[64px] desk:top-[532px] desk:h-[341px] desk:w-[1242px]"
        style={{ aspectRatio: "1242 / 341" }}
      >
        <div className="absolute left-0 top-0 origin-top-left [transform:scale(calc(100cqw/1242px))] desk:[transform:none]">
          <DoubleDiamondDiagram />
        </div>
      </div>

      {/* Cycle 01 / Cycle 02 */}
      <div className="flex flex-col gap-12 desk:absolute desk:left-[64px] desk:top-[calc(50%+233px)] desk:block desk:h-[393px] desk:w-[1238px]">
        {/* Cycle 01 */}
        <div className="desk:absolute desk:left-0 desk:top-0 desk:w-[621px]">
          <div className="flex items-center border-b border-l border-r border-surface pb-6 pl-6">
            <h2 className="font-sans text-4xl font-semibold leading-none text-surface">Cycle 01</h2>
          </div>
          <div className="mt-6 flex flex-col gap-8 pl-6 desk:mt-0 desk:absolute desk:left-6 desk:top-[84px] desk:w-[394px] desk:gap-[49px] desk:pl-0">
            <p className="font-sans text-sm leading-[1.2] text-white/72">
              The first cycle focused on understanding the broader context of productivity and
              defining which problem should be explored in depth.
            </p>
            <StepList steps={cycle1Steps} />
          </div>
        </div>

        {/* Cycle 02 */}
        <div className="desk:absolute desk:left-[622px] desk:top-0 desk:w-[616px]">
          <div className="flex items-center border-b border-r border-surface pb-6 pl-6 desk:border-l-0">
            <h2 className="font-sans text-4xl font-semibold leading-none text-surface">Cycle 02</h2>
          </div>
          <div className="mt-6 flex flex-col gap-8 pl-6 desk:mt-0 desk:absolute desk:left-6 desk:top-[84px] desk:w-[592px] desk:gap-8 desk:pl-0">
            <p className="w-full font-sans text-sm leading-[1.2] text-white/72 desk:w-[394px]">
              The second cycle began after a critical recalibration moment. The project needed to
              move beyond a promising idea and better understand the primary audience, the market
              opportunity, and the long-term product potential.
            </p>
            <StepList steps={cycle2Steps} />
          </div>
        </div>
      </div>
    </PageScaleSection>
  )
}
