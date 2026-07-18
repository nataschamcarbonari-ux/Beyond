import type { ReactNode } from "react"
import SectionLabel from "@/components/SectionLabel"
import DarkIntroSection from "@/components/DarkIntroSection"
import PageScaleSection from "@/components/PageScaleSection"
import MonoLabeledBlock from "@/components/MonoLabeledBlock"
import BoardSection from "@/sections/deep-dive/BoardSection"
import marketBoard from "@/assets/ch6-market-board.webp"
import travelBoard from "@/assets/ch6-travel-board.webp"
import psychBoard from "@/assets/ch6-psych-board.webp"

function Title({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={`font-sans text-[clamp(2.5rem,7vw,64px)] font-normal uppercase leading-[0.96] text-surface desk:absolute desk:left-[64px] desk:top-[86px] desk:text-[64px] ${className}`}
    >
      {children}
    </h2>
  )
}

// 267:149 — the reframing rationale + how the opportunity was framed + what was analyzed.
function MarketOpportunity() {
  return (
    <PageScaleSection
      height={578}
      bg="ink"
      canvasClassName="flex max-w-none flex-col gap-10 px-6 py-16 md:px-16"
    >
      <p className="font-sans text-lg leading-[1.2] text-white/72 md:text-xl desk:absolute desk:left-[64px] desk:top-[86px] desk:w-[396px] desk:text-[20px]">
        The concept became stronger when reframed as mobile infrastructure — a system that protects
        productivity, readiness, and professional presence — rather than as luggage.
      </p>

      <div className="flex flex-col gap-10 desk:contents">
        <div className="font-sans text-sm leading-[1.2] text-white/72 desk:absolute desk:left-[484px] desk:top-[85px] desk:w-[286px]">
          <p>The opportunity was framed around time recovered from repeated friction:</p>
          <ul className="mt-4 list-disc ps-[21px]">
            <li>setup;</li>
            <li>teardown;</li>
            <li>reconnection;</li>
            <li>power hunting;</li>
            <li>Wi-Fi recovery;</li>
            <li>forgotten items;</li>
            <li>ergonomic adjustments.</li>
          </ul>
        </div>

        <MonoLabeledBlock
          label="What was analyzed"
          className="desk:absolute desk:left-[905px] desk:top-[85px] desk:w-[396px]"
        >
          <ul className="list-disc ps-[21px]">
            <li>TAM, SAM, and SOM.</li>
            <li>Potential annual unit opportunity.</li>
            <li>Premium pricing rationale.</li>
            <li>ROI prediction.</li>
            <li>Business travel growth.</li>
            <li>Replacement cycle logic.</li>
            <li>Comparison with existing premium luggage and tech accessories.</li>
          </ul>
        </MonoLabeledBlock>
      </div>
    </PageScaleSection>
  )
}

const GROWTH = [
  {
    label: "Premium segment",
    desc: "Executive & high-net-worth travelers — personalized, seamless experiences.",
  },
  {
    label: "Purpose-driven travel",
    desc: "Quality over quantity — specialized and high-end segments reshaping the market.",
  },
  {
    label: "Wellness & exclusivity",
    desc: "Safety, well-being and bespoke services accelerating demand.",
  },
  {
    label: "Emerging regions",
    desc: "Ultra-HNWI growth in Asia and Middle East propelling the premium niche.",
  },
]

// 280:189 — the business-travel market size + where growth is going.
function BusinessTravelMarket() {
  return (
    <PageScaleSection
      height={768}
      bg="ink"
      fullHeight
      canvasClassName="flex max-w-none flex-col gap-12 px-6 py-16 md:px-16"
    >
      <Title>
        Business
        <br />
        Travel Market
      </Title>

      <div className="flex flex-col gap-6 desk:absolute desk:left-[64px] desk:top-[474px]">
        <div className="flex items-center gap-4">
          <p className="font-sans text-[clamp(3.5rem,13vw,96px)] font-medium leading-[0.96] text-surface desk:text-[96px]">
            $1.48T
          </p>
          <p className="font-sans text-lg font-semibold leading-[0.96] text-white/72 desk:w-[205px] desk:text-[20px]">
            Market value in 2024
          </p>
        </div>
        <div className="flex items-center gap-4">
          <p className="font-sans text-[clamp(3.5rem,13vw,96px)] font-medium leading-[0.96] text-surface desk:text-[96px]">
            $2.29T
          </p>
          <p className="font-sans text-lg font-semibold leading-[0.96] text-white/72 desk:w-[189px] desk:text-[20px]">
            Projected by 2033 CAGR 5.4%
          </p>
        </div>
      </div>

      <div className="flex flex-col items-start gap-3 desk:absolute desk:left-[905px] desk:top-[260px] desk:w-[397px] desk:items-end">
        <p className="font-sans text-lg leading-[1.2] text-white/72 md:text-xl desk:w-full desk:text-[20px]">
          Where growth is going
        </p>
        <div className="w-full">
          {GROWTH.map((g, i) => (
            <div
              key={g.label}
              className={`flex flex-col gap-4 border-l border-r border-t border-white/72 p-3 ${
                i === GROWTH.length - 1 ? "border-b" : ""
              }`}
            >
              <p className="font-mono text-base font-semibold uppercase tracking-[3.2px] text-surface">
                {g.label}
              </p>
              <p className="font-sans text-sm leading-[1.2] text-white/72">{g.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </PageScaleSection>
  )
}

const DEMANDS = [
  {
    label: "From disruption to resilience",
    items: [
      "Repeated travel disruption raises anxiety and desire for secure, well-planned trips.",
      '"Just in case" mindset will triumph over "just in time".',
      "Companies expected to prioritize duty of care to employees.",
      "Security, predictability and responsiveness become non-negotiable.",
    ],
  },
  {
    label: "Sustainability as a constraint",
    items: [
      "By 2030, companies will balance sustainability with practical business needs.",
      "Pressure to reduce emissions from corporate travel is growing.",
      "Green values increasingly embedded in procurement decisions.",
      "Solutions that reduce environmental impact gain strategic advantage.",
    ],
  },
  {
    label: "Technology shifting roles",
    items: [
      "Road warrior evolving from task executor to AI workflow manager.",
      "Routine tasks (expenses, summaries) delegated to AI.",
      "Transit spaces redesigned as collaboration and networking environments.",
      "Autonomous systems to anticipate disruptions and adapt itineraries proactively.",
    ],
  },
]

// 290:321 — how future business-travel demands are expected to shift.
function FutureTravelDemands() {
  const cols = ["desk:left-[64px]", "desk:left-[484px]", "desk:left-[905px]"]
  return (
    <PageScaleSection
      height={768}
      bg="ink"
      fullHeight
      canvasClassName="flex max-w-none flex-col gap-10 px-6 py-16 md:px-16"
    >
      <Title className="desk:w-[645px]">Future of business travel demands</Title>

      <div className="flex flex-col gap-10 desk:contents">
        {DEMANDS.map((d, i) => (
          <MonoLabeledBlock
            key={d.label}
            label={d.label}
            className={`desk:absolute desk:top-[396px] desk:w-[396px] ${cols[i]}`}
          >
            <ul className="list-disc ps-[21px]">
              {d.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </MonoLabeledBlock>
        ))}
      </div>
    </PageScaleSection>
  )
}

function Arrow() {
  return (
    <svg
      width="45"
      height="12"
      viewBox="0 0 45 12"
      fill="none"
      stroke="rgba(255,255,255,0.72)"
      strokeWidth="1"
      className="shrink-0"
      aria-hidden="true"
    >
      <path d="M0 6h42M37 1l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const PSYCH_ROWS = [
  {
    label: ["Unpredictable", "environment"],
    mid: ["High cognitive", "energy drain"],
    list: ["Low cognitive cost", "Intuitive", "Organized", "Reduce decision points"],
    border: "border-l border-r border-t",
  },
  {
    label: ["Irregular sleep"],
    mid: ["Emotional", "irritability"],
    list: ["Predictive environments", '"Safe work zone" signals', "Consistent hardware setup"],
    border: "border",
  },
  {
    label: ["Frequent context", "switching"],
    mid: ["Stress, frustration", "and depersonalization"],
    list: ["Personal elements", "Create identity anchors", "Transform non-places"],
    border: "border-b border-l border-r",
  },
]

// 267:186 — how unstable environments raise cognitive load, mapped to design responses.
function PsychologicalMapping() {
  return (
    <PageScaleSection
      height={768}
      bg="ink"
      fullHeight
      canvasClassName="flex max-w-none flex-col gap-10 px-6 py-16 md:px-16"
    >
      <p className="font-sans text-lg leading-[1.2] text-white/72 md:text-xl desk:absolute desk:left-[64px] desk:top-[86px] desk:w-[396px] desk:text-[20px]">
        The road warrior is constantly adapting to new environments. Airports, hotels, client sites,
        and transit spaces require repeated decisions and heightened awareness, which can reduce the
        mental energy available for high-value work.
      </p>

      <div className="font-sans text-sm leading-[1.2] text-white/72 desk:absolute desk:left-[905px] desk:top-[86px] desk:w-[397px]">
        <p>This layer explored how environments affect attention and performance:</p>
        <ul className="mt-4 list-disc ps-[21px]">
          <li>visual competition;</li>
          <li>noise;</li>
          <li>decision fatigue;</li>
          <li>context switching;</li>
          <li>lack of personal territory;</li>
          <li>interruption recovery;</li>
          <li>inconsistent routines.</li>
        </ul>
      </div>

      {/* Mapping table — fixed geometry; scrolls horizontally below desk. */}
      <div className="w-full overflow-x-auto desk:absolute desk:left-[484px] desk:top-[396px] desk:h-[286px] desk:w-[817px] desk:overflow-visible">
        <div className="flex h-[286px] w-[817px] flex-col desk:h-full desk:w-full">
          {PSYCH_ROWS.map((r) => (
            <div
              key={r.label.join(" ")}
              className={`flex flex-1 items-center justify-between border-white/72 px-6 ${r.border}`}
            >
              <div className="w-[176px]">
                <p className="font-mono text-base font-semibold uppercase leading-tight tracking-[3.2px] text-surface">
                  {r.label.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </p>
              </div>
              <Arrow />
              <div className="w-[146px] pl-6">
                <p className="font-sans text-sm leading-[1.2] text-white/72">
                  {r.mid.map((m) => (
                    <span key={m} className="block">
                      {m}
                    </span>
                  ))}
                </p>
              </div>
              <Arrow />
              <div className="w-[248px] px-4 py-3">
                <ul className="list-disc ps-[21px] font-sans text-sm leading-[1.2] text-white/72">
                  {r.list.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageScaleSection>
  )
}

// Chapter 06 — Reframe the opportunity (Cycle 2). Market validation, business-travel
// sizing, future signals, and the psychological layer reframe the concept as
// mobile productivity infrastructure.
export default function Chapter06() {
  return (
    <>
      <SectionLabel dark trailing="CYCLE 2" id="ch-reframe">
        06. REFRAME THE OPPORTUNITY
      </SectionLabel>

      <DarkIntroSection
        id="dd-market-validation"
        heading={
          <>
            Market
            <br />
            Validation
          </>
        }
      >
        <span className="text-accent">
          The project needed to understand whether the opportunity was not only desirable, but also
          strategically and economically relevant.
        </span>{" "}
        Market analysis helped frame the concept as a productivity infrastructure opportunity rather
        than a standard accessory.
      </DarkIntroSection>

      <BoardSection src={marketBoard} alt="Market analysis board with pricing, ROI, and sizing" />
      <MarketOpportunity />
      <BusinessTravelMarket />

      <DarkIntroSection
        id="dd-future-signals"
        heading={
          <>
            Future
            <br />
            Signals
          </>
        }
      >
        <span className="text-accent">
          The project needed to look beyond current pain points and understand where business travel,
          mobility, and work behavior are moving.
        </span>{" "}
        Future signals helped make the opportunity more resilient and less tied to today&rsquo;s exact
        tools.
      </DarkIntroSection>

      <BoardSection src={travelBoard} alt="Business travel market signals board" />
      <FutureTravelDemands />

      <DarkIntroSection
        id="dd-psychological-layer"
        heading={
          <>
            Psychological
            <br />
            Layer
          </>
        }
      >
        The project needed to understand why constant movement creates more than logistical friction.{" "}
        <span className="text-accent">
          This layer explored how unstable environments, interruptions, decisions, and unfamiliar
          places affect cognitive load, focus, and recovery.
        </span>
      </DarkIntroSection>

      <BoardSection src={psychBoard} alt="Board on the neurological and psychological factors of road warriors" />
      <PsychologicalMapping />
    </>
  )
}
