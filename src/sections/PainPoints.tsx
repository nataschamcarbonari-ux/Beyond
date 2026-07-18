import PageScaleSection from "@/components/PageScaleSection"

type PainPoint = {
  label: string
  description: string
}

const painPoints: PainPoint[] = [
  {
    label: "Mobility Friction",
    description:
      "Constantly moving between offices, client sites, home, and transit creates setup friction, item-loss risk, and workflow disruption.",
  },
  {
    label: "Productivity Constraints",
    description:
      "Long hours in transit and non-ideal work surfaces make it difficult to complete dense tasks efficiently.",
  },
  {
    label: "Power Anxiety",
    description:
      "Reliable internet, battery life, and safe charging access are essential but inconsistent, creating ongoing work anxiety.",
  },
  {
    label: "Security Exposure",
    description:
      "Working in public spaces increases risks around data visibility, unsecured networks, and device protection.",
  },
  {
    label: "Cognitive Load",
    description:
      "Repeated micro-decisions, disrupted routines, and constant adaptation drain energy before high-value client work.",
  },
  {
    label: "Lack of Premium Options",
    description:
      "Current carrying solutions at Dell do not fully match client-facing expectations for polish, prestige, and efficiency.",
  },
]

export default function PainPoints() {
  return (
    <PageScaleSection
      id="pain-points"
      height={1855}
      canvasClassName="flex max-w-none flex-col gap-12 py-12 md:gap-16 md:py-16"
    >
        <div className="flex w-full flex-col px-6 md:px-16 desk:absolute desk:left-[64px] desk:top-[86px] desk:w-[420px] desk:px-0">
          <p className="font-sans text-[clamp(2rem,4.7vw,4rem)] font-normal uppercase leading-[0.96] text-ink desk:text-[64px]">
            Pain
          </p>
          <p className="font-sans text-[clamp(2rem,4.7vw,4rem)] font-normal uppercase leading-[0.96] text-ink desk:text-[64px]">
            Points
          </p>
        </div>

        <div className="flex w-full flex-col items-start px-6 md:px-16 desk:absolute desk:left-[668px] desk:top-[86px] desk:w-[634px] desk:px-0">
          {painPoints.map((point) => (
            <div
              key={point.label}
              className="flex w-full flex-col gap-2 border-t border-muted py-4 sm:flex-row sm:items-center sm:gap-6 sm:py-2"
            >
              <p className="w-full shrink-0 font-mono text-base font-semibold uppercase tracking-[3.2px] text-ink sm:w-[295px]">
                {point.label}
              </p>
              <p className="flex-1 font-sans text-base leading-[1.2] text-muted">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex w-full flex-col items-start gap-6 px-6 md:px-16 desk:absolute desk:left-[64px] desk:top-[767px] desk:w-[397px] desk:px-0">
          <p className="font-sans text-[clamp(1.375rem,2.6vw,2.25rem)] font-semibold leading-none text-ink desk:text-[36px]">
            &ldquo;I like to <span className="text-accent">adapt my setup</span> depending on the
            place I&rsquo;m in.&rdquo;
          </p>
          <p className="font-mono text-sm uppercase leading-[1.2] text-muted">
            Field executive, PORTO ALEGRE - BRAZIL.
          </p>
        </div>

        <div className="flex w-full flex-col items-start gap-6 px-6 md:px-16 desk:absolute desk:left-[485px] desk:top-[1121px] desk:w-[817px] desk:px-0">
          <p className="font-sans text-[clamp(1.375rem,2.6vw,2.25rem)] font-semibold leading-none text-ink desk:text-[36px]">
            &ldquo;
            <span className="text-accent">
              The hardest part isn&rsquo;t the job — it&rsquo;s managing the backpack.
            </span>{" "}
            Checking if the video cable is there, if the headset is charged, if the power bank
            will last the flight. You become a logistics manager before you even start
            selling.&rdquo;
          </p>
          <p className="font-mono text-sm uppercase leading-[1.2] text-muted">
            sales EXECUTIVE, YOUTUBE DEPOIMENT.
          </p>
        </div>

        <div className="flex w-full flex-col items-start gap-6 px-6 md:px-16 desk:absolute desk:left-[64px] desk:top-[1620px] desk:w-[817px] desk:px-0">
          <p className="font-sans text-[clamp(1.375rem,2.6vw,2.25rem)] font-semibold leading-none text-ink desk:text-[36px]">
            &ldquo;The client expects the executive to
            <br />
            arrive with the best accessories.
            <br />
            <span className="text-accent">A nylon bag is a letdown.</span>&rdquo;
          </p>
          <p className="font-mono text-sm uppercase leading-[1.2] text-muted">
            Field executive SMB, SÃO PAULO - BRAZIL.
          </p>
        </div>
    </PageScaleSection>
  )
}
