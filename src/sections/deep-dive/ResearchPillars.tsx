import PageScaleSection from "@/components/PageScaleSection"

const PILLARS = [
  {
    title: "Productivity",
    desc: "This pillar explored how productivity changed after COVID-19 and how digital work created both gains and new friction.",
    items: [
      "Remote and hybrid productivity.",
      "Virtual communication overload.",
      "Blurred boundaries between work and home.",
      "Digitalization and process change.",
      "AI as a personal productivity partner.",
      "Human + AI agent collaboration.",
    ],
    summary:
      "Productivity is becoming less about doing more tasks and more about protecting the conditions that allow high-value work to happen.",
    deskClass: "desk:left-[63px] desk:w-[397px]",
  },
  {
    title: "Workplace",
    desc: "This pillar explored how work environments influence focus, autonomy, comfort, and performance.",
    items: [
      "Hybrid work models.",
      "Flexible environments.",
      "Private areas and focus spaces.",
      "Control over lighting, noise, and setting.",
      "Workplace as a reflection of employee values.",
      "Calm, natural, and connected spaces.",
    ],
    summary:
      "The best work environments adapt to people. When the environment does not adapt, people compensate with personal systems, rituals, and tools.",
    deskClass: "desk:left-[484px] desk:w-[396px]",
  },
  {
    title: "Time Management",
    desc: "This pillar explored how people manage priorities, unexpected events, focus blocks, and the transition between work and life.",
    items: [
      "Flexible planning.",
      "Goal-driven scheduling.",
      "Focus sessions and intentional pauses.",
      "Energy-aware productivity.",
      "Psychological detachment after work.",
      "The limits of personal planning when the environment is fragmented.",
    ],
    summary:
      "Time management is not only an individual skill. It depends on systems, environments, and the ability to reduce interruptions and unnecessary decisions.",
    deskClass: "desk:left-[905px] desk:w-[397px]",
  },
]

export default function ResearchPillars() {
  return (
    <PageScaleSection
      height={768}
      bg="ink"
      fullHeight
      canvasClassName="flex max-w-none flex-col gap-12 px-6 py-16 md:px-16"
    >
      <h2 className="font-sans text-[clamp(2.5rem,7vw,64px)] font-normal uppercase leading-[0.96] text-surface desk:absolute desk:left-[63px] desk:top-[85px] desk:text-[64px]">
        Research
        <br />
        Pillars
      </h2>

      <div className="flex flex-col gap-10 desk:contents">
        {PILLARS.map((p) => (
          <div
            key={p.title}
            className={`flex flex-col justify-between gap-6 border-t border-surface p-6 desk:absolute desk:top-[311px] desk:h-[372px] desk:gap-0 ${p.deskClass}`}
          >
            <p className="font-sans text-3xl font-semibold leading-none text-surface md:text-4xl desk:text-[36px]">
              {p.title}
            </p>
            <p className="font-sans text-sm leading-[1.2] text-white/72">{p.desc}</p>
            <ul className="list-disc pl-6 font-sans text-base font-medium leading-[1.2] text-surface">
              {p.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
            <p className="font-sans text-sm leading-[1.2] text-white/72">{`→ ${p.summary}`}</p>
          </div>
        ))}
      </div>
    </PageScaleSection>
  )
}
