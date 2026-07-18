import Citation from "@/components/Citation"

type Stat = {
  number: string
  unit: string
  caption: string
  linkLabel: string
  linkHref: string
  year: string
}

const stats: Stat[] = [
  {
    number: "18",
    unit: "min",
    caption: "lost per day finding and setting up a workspace in hot-desk environments.",
    linkLabel: "Cisco Systems",
    linkHref:
      "https://investor.cisco.com/news/news-details/2024/Cisco-Hybrid-Work-Study-Reveals-Companies-Need-to-Modernize-Offices/default.aspx",
    year: "2024",
  },
  {
    number: "60",
    unit: "%",
    caption: "60% of U.S. and Canadian employers now use desk sharing or hoteling.",
    linkLabel: "Archie",
    linkHref: "https://archieapp.co/blog/hot-desking-statistics/",
    year: "2025",
  },
  {
    number: "23",
    unit: "min",
    caption: "to fully regain focused attention after a single interruption.",
    linkLabel: "University of California",
    linkHref: "https://dl.acm.org/doi/10.1145/1357054.1357072",
    year: "2008",
  },
]

export default function Problem() {
  return (
    <section className="w-full bg-surface desk:h-dvh">
      <div className="mx-auto flex w-full max-w-[1366px] flex-col items-center gap-12 px-6 pb-8 pt-12 md:px-16 md:pb-10 md:pt-16 desk:h-full desk:w-full desk:max-w-[var(--content-max)] desk:justify-between desk:gap-0 desk:px-[var(--gutter-x)] desk:pt-[86px] desk:pb-[86px]">
        <div className="flex w-full max-w-[62rem] flex-col items-center gap-[30px] text-center">
          <h2 className="text-[clamp(2rem,4.7vw,4rem)] font-sans font-medium leading-none desk:text-[64px]">
            <span className="text-ink">AI is making knowledge work faster. But </span>
            <span className="text-accent">
              high-mobility professionals still lose attention before the real work begins.
            </span>
          </h2>
          <p className="w-full max-w-[24.75rem] font-sans text-lg leading-[1.2] text-muted md:text-xl">
            If AI promises massive efficiency gains, why do we still waste time on basic things
            like connectivity, setup, and organization?
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6 desk:flex">
          {stats.map((stat) => (
            <div
              key={stat.linkLabel}
              className="flex flex-col items-center justify-end gap-[10px] px-6 text-center desk:h-[217px] desk:flex-1 desk:px-[69px]"
            >
              <p className="font-sans leading-[0.96] text-ink">
                <span className="text-[clamp(3rem,7.05vw,6rem)] desk:text-[96px]">{stat.number}</span>
                <span className="text-[clamp(2rem,4.7vw,4rem)] desk:text-[64px]">{stat.unit}</span>
              </p>
              <p className="text-center font-sans text-base leading-[1.2] text-muted">
                {stat.caption}
                <Citation label={stat.linkLabel} href={stat.linkHref} year={stat.year} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
