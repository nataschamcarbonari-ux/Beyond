import { Link } from "react-router-dom"
import Card from "./Card"
import ImagePlaceholder from "./ImagePlaceholder"
import OpportunityFlow from "./OpportunityFlow"
import type { StepSectionData } from "../data/types"

// One content block within a case-study step: a mono label + heading + body
// (constrained to a readable measure), followed by full-width cards, images, or
// the interactive Opportunity Solution Tree.
export default function CaseSection({ section }: { section: StepSectionData }) {
  const images = (section.images ?? []).filter(Boolean)
  const isFlow = section.label === "Opportunity mapping"

  return (
    <div className="flex flex-col gap-6">
      <div className="flex max-w-[760px] flex-col gap-3">
        <p className="font-mono text-xs font-semibold uppercase tracking-[3.2px] text-accent">
          {section.label}
        </p>
        <h3 className="font-sans text-2xl font-semibold leading-tight text-ink desk:text-[28px]">
          {section.heading}
        </h3>
        {section.body && (
          <p className="font-sans text-base leading-[1.6] text-muted">{section.body}</p>
        )}
        {section.linkText && section.linkHref && (
          <Link
            to={section.linkHref}
            className="group mt-1 w-fit font-sans text-base font-medium text-accent"
          >
            <span className="underline-offset-4 group-hover:underline">{section.linkText}</span>
          </Link>
        )}
      </div>

      {section.cards && section.cards.length > 0 && (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {section.cards.map((card, i) => (
            <Card key={i} label={card.label} text={card.text} wide={card.wide} />
          ))}
        </div>
      )}

      {isFlow ? (
        <div className="border border-muted bg-surface-alt">
          <OpportunityFlow />
        </div>
      ) : images.length > 0 ? (
        <div className={`grid gap-3 ${images.length > 1 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"}`}>
          {images.map((src, i) => (
            <ImagePlaceholder key={i} src={src} aspect={images.length > 1 ? "square" : "wide"} />
          ))}
        </div>
      ) : null}
    </div>
  )
}
