import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"

// Active page link = larger/bold/bright; inactive = smaller/muted.
const pageLinkClass = ({ isActive }: { isActive: boolean }) =>
  `p-2 font-mono uppercase ${
    isActive ? "text-base font-semibold text-surface" : "text-sm font-medium text-white/72"
  }`

type NavGroup = {
  label: string
  href: string
  items: { label: string; href: string }[]
}

// Curated Briefing navigation (Figma node 360:184). Group header -> label section,
// item -> content section. Anchors resolve to ids added on those sections.
const briefingGroups: NavGroup[] = [
  {
    label: "GOALS AND OBJECTIVES",
    href: "/beyond#goals",
    items: [{ label: "Strategic Briefing", href: "/beyond#strategic-briefing" }],
  },
  {
    label: "AUDIENCE",
    href: "/beyond#audience",
    items: [
      { label: "The Builder", href: "/beyond#the-builder" },
      { label: "Pain Points", href: "/beyond#pain-points" },
      { label: "User Values", href: "/beyond#user-values" },
    ],
  },
  {
    label: "MARKET ANALISYS",
    href: "/beyond#market",
    items: [{ label: "Market & Trends", href: "/beyond#market-trends" }],
  },
  {
    label: "PROJECT GUIDELINES",
    href: "/beyond#project-guidelines",
    items: [
      { label: "Product Targets", href: "/beyond#product-targets" },
      { label: "Attributes", href: "/beyond#attributes" },
      { label: "Mandatories", href: "/beyond#mandatories" },
    ],
  },
  {
    label: "DELIVERABLES",
    href: "/beyond#deliverables",
    items: [
      { label: "Desired Experience Outcomes", href: "/beyond#desired-outcomes" },
      { label: "Roadmap Suggestion", href: "/beyond#roadmap" },
    ],
  },
]

type NavCycle = { cycle: string; chapters: NavGroup[] }

// Deep Dive navigation (Figma node 343:1148): two cycles, each with its chapters
// and their section beats. Anchors resolve to ids on the chapter labels (ch-*)
// and section openers (dd-*).
const deepDiveCycles: NavCycle[] = [
  {
    cycle: "CYCLE 1",
    chapters: [
      {
        label: "01. DISCOVER THE CONTEXT",
        href: "/beyond/deep-dive#ch-discover",
        items: [
          { label: "Desk Research", href: "/beyond/deep-dive#dd-desk-research" },
          { label: "Interviews", href: "/beyond/deep-dive#dd-interviews" },
          { label: "Workshop", href: "/beyond/deep-dive#dd-workshop" },
        ],
      },
      {
        label: "02. DEFINE THE PROBLEM",
        href: "/beyond/deep-dive#ch-define",
        items: [
          { label: "Problem Territories", href: "/beyond/deep-dive#dd-problem-territories" },
          { label: "Prioritization", href: "/beyond/deep-dive#dd-prioritization" },
          { label: "User Mapping", href: "/beyond/deep-dive#dd-user-mapping" },
        ],
      },
      {
        label: "03. GENERATE EARLY CONCEPTS",
        href: "/beyond/deep-dive#ch-generate",
        items: [
          { label: "Alternative Generation", href: "/beyond/deep-dive#dd-alternative-generation" },
        ],
      },
      {
        label: "04. SET THE DIRECTION",
        href: "/beyond/deep-dive#ch-set",
        items: [
          { label: "Initial Direction", href: "/beyond/deep-dive#dd-initial-direction" },
          { label: "Recalibration", href: "/beyond/deep-dive#dd-recalibration" },
        ],
      },
    ],
  },
  {
    cycle: "CYCLE 2",
    chapters: [
      {
        label: "05. DEEPEN THE AUDIENCE",
        href: "/beyond/deep-dive#ch-deepen",
        items: [{ label: "Audience Deepening", href: "/beyond/deep-dive#dd-audience-deepening" }],
      },
      {
        label: "06. REFRAME THE OPPORTUNITY",
        href: "/beyond/deep-dive#ch-reframe",
        items: [
          { label: "Market Validation", href: "/beyond/deep-dive#dd-market-validation" },
          { label: "Future Signals", href: "/beyond/deep-dive#dd-future-signals" },
          { label: "Psychological Layer", href: "/beyond/deep-dive#dd-psychological-layer" },
        ],
      },
      {
        label: "07. SHAPE PRODUCT DIRECTIONS",
        href: "/beyond/deep-dive#ch-shape",
        items: [
          { label: "Project Guidelines", href: "/beyond/deep-dive#dd-project-guidelines" },
          { label: "Concept Directions", href: "/beyond/deep-dive#dd-concept-directions" },
        ],
      },
      {
        label: "08. PREPARE FOR DEVELOPMENT",
        href: "/beyond/deep-dive#ch-prepare",
        items: [{ label: "Validation Framework", href: "/beyond/deep-dive#dd-validation-framework" }],
      },
    ],
  },
]

function ChapterGroup({ group, onNavigate }: { group: NavGroup; onNavigate: () => void }) {
  return (
    <div className="flex flex-col gap-2">
      <a
        href={group.href}
        onClick={onNavigate}
        className="font-sans text-xs font-semibold leading-[1.2] text-surface transition-colors hover:text-accent"
      >
        {group.label}
      </a>
      <div className="flex flex-col pl-8">
        {group.items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className="font-sans text-xs leading-[1.5] text-surface transition-colors hover:text-accent"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  )
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const isBeyond = pathname.startsWith("/beyond")
  const isDeepDive = pathname.startsWith("/beyond/deep-dive")

  // Close the drawer on Escape.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  // Close the drawer whenever the route changes.
  useEffect(() => setOpen(false), [pathname])

  const closeDrawer = () => setOpen(false)

  // The Beyond chrome (BEYOND wordmark, Briefing/Deep Dive nav, topic drawer)
  // only applies to the Beyond project pages; the portfolio Home has its own.
  if (!isBeyond) return null

  return (
    <>
      {/* Sticky header bar — full-width bar, content capped at --content-max. */}
      <header className="fixed inset-x-0 top-0 z-50 h-[61px] border-b border-white/72 bg-ink">
        <div className="mx-auto flex h-full w-full max-w-[var(--content-max)] items-center justify-between gap-8 px-8 md:justify-center">
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex size-[27px] shrink-0 cursor-pointer items-center justify-center text-surface md:w-[93px] md:justify-start"
        >
          <svg
            viewBox="0 0 27 27"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
            className="size-[27px]"
          >
            {open ? (
              <>
                <line x1="6" y1="6" x2="21" y2="21" />
                <line x1="21" y1="6" x2="6" y2="21" />
              </>
            ) : (
              <>
                <line x1="3" y1="8" x2="24" y2="8" />
                <line x1="3" y1="13.5" x2="24" y2="13.5" />
                <line x1="3" y1="19" x2="24" y2="19" />
              </>
            )}
          </svg>
        </button>

        <nav className="hidden flex-1 items-center justify-center gap-8 md:flex">
          <NavLink to="/beyond" end className={pageLinkClass}>
            Briefing
          </NavLink>
          <NavLink to="/beyond/deep-dive" className={pageLinkClass}>
            Deep dive
          </NavLink>
        </nav>

        <Link
          to="/"
          className="shrink-0 font-deca text-2xl font-medium uppercase tracking-[-2.16px] text-surface"
        >
          NATASCHA
        </Link>
        </div>
      </header>

      {/* Transparent click-catcher: closes the drawer on outside click. */}
      <div
        aria-hidden="true"
        onClick={closeDrawer}
        className={`fixed inset-x-0 bottom-0 top-[61px] z-30 ${open ? "" : "pointer-events-none"}`}
      />

      {/* Side-nav drawer — Briefing topics or Deep Dive cycles, per current route. */}
      <nav
        aria-label={isDeepDive ? "Deep dive contents" : "All topics"}
        className={`fixed bottom-0 left-0 top-[61px] z-40 flex w-[255px] flex-col overflow-y-auto border-r border-white/72 bg-ink pb-8 transition-transform duration-300 ease-out ${
          isDeepDive ? "gap-4" : "gap-[15px]"
        } ${open ? "translate-x-0" : "pointer-events-none -translate-x-full"}`}
      >
        {isDeepDive ? (
          deepDiveCycles.map((cyc, ci) => (
            <div key={cyc.cycle} className="flex flex-col gap-[15px]">
              <div
                className={`flex h-[40px] shrink-0 items-center px-8 ${
                  ci > 0 ? "border-t border-white/72" : ""
                }`}
              >
                <p className="font-mono text-sm font-semibold uppercase tracking-[2.8px] text-white">
                  {cyc.cycle}
                </p>
              </div>
              <div className="flex flex-col gap-3 pl-8">
                {cyc.chapters.map((group) => (
                  <ChapterGroup key={group.href} group={group} onNavigate={closeDrawer} />
                ))}
              </div>
            </div>
          ))
        ) : (
          <>
            <div className="flex h-[40px] shrink-0 items-center px-8">
              <p className="font-mono text-sm font-semibold uppercase tracking-[2.8px] text-white">
                All topics
              </p>
            </div>
            <div className="flex flex-col gap-3 pl-8">
              {briefingGroups.map((group) => (
                <ChapterGroup key={group.href} group={group} onNavigate={closeDrawer} />
              ))}
            </div>
          </>
        )}
      </nav>
    </>
  )
}
