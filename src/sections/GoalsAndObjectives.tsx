const metadata: { label: string; values: string[] }[] = [
  { label: "FOCUS", values: ["Future of Work", "AI", "Mobile Productivity", "Focus Protection"] },
  { label: "DISCIPLINE", values: ["Design Strategy", "Industrial Design", "Research"] },
  { label: "AUTOR", values: ["Natascha Carbonari", "Drew Tosh"] },
  { label: "YEAR", values: ["2025-2026"] },
]

export default function GoalsAndObjectives() {
  return (
    <section id="strategic-briefing" className="w-full bg-surface desk:h-dvh">
      <div className="relative mx-auto flex w-full max-w-[1366px] flex-col gap-10 px-6 py-12 md:px-16 md:py-16 desk:flex desk:h-full desk:w-full desk:max-w-[var(--content-max)] desk:flex-col desk:justify-between desk:gap-0 desk:px-[var(--gutter-x)] desk:py-16">
        <h2 className="text-[clamp(3rem,9.4vw,8rem)] font-sans font-normal uppercase leading-[0.96] text-ink desk:text-[128px]">
          Strategic <br />
          Briefing
        </h2>

        <div className="flex w-full flex-col gap-10 desk:flex-row desk:items-end desk:justify-between desk:gap-16">
          <dl className="flex w-full flex-col desk:w-[634px]">
            {metadata.map((row, i) => (
              <div
                key={row.label}
                className={`flex items-center gap-x-6 gap-y-2 border-t border-muted py-4 ${
                  i === metadata.length - 1 ? "border-b" : ""
                }`}
              >
                <dt className="w-[140px] shrink-0 font-mono text-base font-semibold tracking-[3.2px] text-ink">
                  {row.label}
                </dt>
                <dd className="flex min-w-0 flex-1 flex-wrap gap-x-6 gap-y-2 font-sans text-base leading-[1.2] text-muted">
                  {row.values.map((value) => (
                    <span key={value}>{value}</span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>

          <p className="w-full font-sans text-lg leading-[1.2] text-muted md:text-xl desk:w-[395px] desk:text-xl">
            Beyond is a strategic product briefing that turns research on productivity, mobility,
            AI-enabled work, and high-mobility professionals into clear direction for future
            hardware concepts that protect focus anywhere.
          </p>
        </div>
      </div>
    </section>
  )
}
