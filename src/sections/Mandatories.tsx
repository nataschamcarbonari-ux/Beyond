// Spec: .claude/figma-specs/12-mandatories.md
import PageScaleSection from "@/components/PageScaleSection"
import mandatoriesPhoto1 from "@/assets/mandatories-photo-1.webp"
import mandatoriesPhoto2 from "@/assets/mandatories-photo-2.webp"

type TextCard = {
  type: "text"
  number: string
  headline: string
  body: string
  accent?: boolean
}

type ImageCard = {
  type: "image"
  src: string
  alt: string
  left: string
  width: string
  top: string
}

const cards: (TextCard | ImageCard)[] = [
  {
    type: "text",
    number: "01.",
    headline: "Make setup fast and effortless",
    body: "Immediate readiness — arrive, one connection, ready. Friction is a product failure.",
  },
  {
    type: "image",
    src: mandatoriesPhoto1,
    alt: "Woman working on a laptop at a table in an airport lounge",
    left: "-48.6%",
    width: "175.2%",
    top: "0.07%",
  },
  {
    type: "text",
    number: "02.",
    headline: "Security covers everything by default",
    body: "Both data and physical items are protected from the moment the user arrives.",
    accent: true,
  },
  {
    type: "text",
    number: "03.",
    headline: "Weight and ergonomics cannot be compromised",
    body: "Electronics integration must not create discomfort, shoulder/back pain, or long-term rejection.",
  },
  {
    type: "text",
    number: "04.",
    headline: "Durability and repairability from day one",
    body: "Electronics-in-softgoods must respect thermal, durability, maintenance, and repairability constraints.",
  },
  {
    type: "text",
    number: "05.",
    headline: "Premium positioning and defensibility",
    body: "Must be defensible as a productivity accessory. Commodity pricing is out of scope.",
  },
  {
    type: "image",
    src: mandatoriesPhoto2,
    alt: "Two people at a table assembling and organizing electronics and accessories inside a soft-goods case",
    left: "-61.02%",
    width: "169.84%",
    top: "0.11%",
  },
  {
    type: "text",
    number: "06.",
    headline: "Sustainability considered from the start",
    body: "Not retrofitted — built into material, weight, and lifecycle decisions from the beginning.",
  },
]

export default function Mandatories() {
  return (
    <PageScaleSection
      id="mandatories"
      height={1078}
      canvasClassName="max-w-[1366px] px-6 py-12 md:px-16 md:py-16"
    >
        <h2 className="font-sans text-[clamp(3rem,9.4vw,8rem)] font-normal uppercase leading-[0.96] text-ink desk:absolute desk:left-[64px] desk:top-[86px] desk:text-[128px]">
          Mandatories
        </h2>

        {/* Invention: grid steps 1 -> 2 -> 4 columns below `desk`; the
            column-divider (border-l) logic is recomputed per breakpoint
            in pure CSS below so dividers always sit between columns and
            never on a row's leading edge. Card height stays a fixed 296px
            at every width so text and photo cells keep matching row
            heights, matching the desktop "card" treatment. */}
        <div className="mt-10 grid w-full grid-cols-1 sm:grid-cols-2 desk:absolute desk:left-[64px] desk:top-[345.5px] desk:mt-0 desk:w-[1239px] desk:grid-cols-4">
          {cards.map((card, i) => {
            const smInterior = i % 2 === 1
            const deskInterior = i % 4 !== 0
            const borderClass = `border-t border-muted ${smInterior ? "sm:border-l" : ""} ${
              deskInterior ? "desk:border-l" : "desk:border-l-0"
            }`

            if (card.type === "image") {
              return (
                <div key={i} className={`relative h-[296px] overflow-hidden ${borderClass}`}>
                  <img
                    src={card.src}
                    alt={card.alt}
                    className="absolute h-full max-w-none object-cover"
                    style={{ left: card.left, width: card.width, top: card.top }}
                  />
                </div>
              )
            }

            return (
              <div
                key={i}
                className={`flex h-[296px] flex-col justify-between p-[24px] ${borderClass} ${
                  card.accent ? "bg-accent" : ""
                }`}
              >
                <div className="flex flex-col gap-3">
                  <h3
                    className={`font-sans text-4xl font-semibold leading-none ${
                      card.accent ? "text-surface" : "text-ink"
                    }`}
                  >
                    {card.headline}
                  </h3>
                  <p
                    className={`font-sans text-base leading-[1.2] ${
                      card.accent ? "text-white/82" : "text-muted"
                    }`}
                  >
                    {card.body}
                  </p>
                </div>
                <span
                  className={`font-mono text-4xl font-medium leading-[0.96] ${
                    card.accent ? "text-surface" : "text-ink"
                  }`}
                >
                  {card.number}
                </span>
              </div>
            )
          })}
        </div>
    </PageScaleSection>
  )
}
