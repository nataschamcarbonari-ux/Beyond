import SectionLabel from "@/components/SectionLabel"
import type { Outcome } from "../data/types"

// Closing "Outcomes" grid — a mono section bar + numbered bordered cards.
export default function Outcomes({ outcomes }: { outcomes: Outcome[] }) {
  return (
    <>
      <SectionLabel id="outcomes">OUTCOMES</SectionLabel>
      <section className="w-full bg-surface">
        <div className="mx-auto w-full max-w-[1366px] px-6 py-12 md:px-16 md:py-16 desk:max-w-[var(--content-max)] desk:px-[var(--gutter-x)] desk:py-20">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {outcomes.map((o, i) => (
              <div key={o.id} className="flex flex-col gap-3 border border-muted p-8">
                <p className="font-mono text-sm font-semibold tracking-[2px] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-sans text-xl font-semibold leading-tight text-ink">{o.title}</h3>
                <p className="font-sans text-sm leading-[1.6] text-muted">{o.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
