import HomeHeader from "@/components/HomeHeader"
import HomeConnect from "@/sections/home/HomeConnect"
import SectionLabel from "@/components/SectionLabel"
import CaseSection from "./components/CaseSection"
import Outcomes from "./components/Outcomes"
import Tag from "./components/Tag"
import ImagePlaceholder from "./components/ImagePlaceholder"
import { project } from "./data/project"
import { stepContents } from "./data/stepContents"

// The process steps drive the header menu (replacing the old on-page sidebar).
const stepMenu = project.steps.map((s) => ({ label: s.title, href: `#step-${s.id}` }))

const meta = [
  { label: "Role", value: project.role },
  { label: "Theme", value: project.theme },
  { label: "Status", value: "Live · In testing" },
  { label: "Year", value: "2024–2025" },
]

// Shared full-width gutter container (matches the Beyond sections / SectionLabel).
const container =
  "mx-auto w-full max-w-[1366px] px-6 md:px-16 desk:max-w-[var(--content-max)] desk:px-[var(--gutter-x)]"

// TennisConnect case study, restyled in the site's (Beyond) design system:
// light surface, Manrope + IBM Plex Mono, orange accent, full-gutter width.
export default function TennisConnectPage() {
  return (
    <>
      <HomeHeader showNav={false} menuItems={stepMenu} />

      <main className="w-full overflow-x-clip bg-surface">
        {/* Intro */}
        <section className={`${container} pb-12 pt-[116px] md:pb-16 md:pt-[140px]`}>
          <p className="font-mono text-sm font-semibold uppercase tracking-[3.2px] text-muted">
            {project.context}
          </p>
          <h1 className="mt-5 font-sans text-[clamp(2.75rem,7vw,5.5rem)] font-semibold uppercase leading-[0.95] text-ink">
            {project.title}
          </h1>
          <p className="mt-6 max-w-[680px] font-sans text-lg leading-[1.5] text-muted">
            {project.description}
          </p>
          <dl className="mt-12 flex flex-wrap gap-x-16 gap-y-8 border-t border-muted pt-8">
            {meta.map((m) => (
              <div key={m.label} className="flex min-w-[40%] flex-col gap-2 sm:min-w-0">
                <dt className="font-mono text-xs font-semibold uppercase tracking-[3.2px] text-muted">
                  {m.label}
                </dt>
                <dd className="font-sans text-base text-ink">{m.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Hero image */}
        <section className={`${container} pb-4`}>
          <ImagePlaceholder src="/inicio.png" alt="TennisConnect product cover" aspect="wide" />
        </section>

        {/* Steps */}
        {project.steps.map((step) => {
          const content = stepContents[step.id]
          if (!content) return null
          return (
            <div key={step.id}>
              <SectionLabel id={`step-${step.id}`} trailing={String(step.id).padStart(2, "0")}>
                {step.title.toUpperCase()}
              </SectionLabel>
              <section className={`${container} py-12 md:py-16`}>
                <div className="flex max-w-[760px] flex-col gap-4">
                  <p className="font-sans text-base leading-[1.5] text-muted">{step.subtitle}</p>
                  <div className="flex flex-wrap gap-2">
                    {step.tags.map((tag) => (
                      <Tag key={tag} label={tag} />
                    ))}
                  </div>
                </div>
                <div className="mt-12 flex flex-col gap-14">
                  {content.sections.map((sec, i) => (
                    <CaseSection key={i} section={sec} />
                  ))}
                </div>
              </section>
            </div>
          )
        })}

        {/* Outcomes */}
        <Outcomes outcomes={project.outcomes} />
      </main>

      <HomeConnect />
    </>
  )
}
