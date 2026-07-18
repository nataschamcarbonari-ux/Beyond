import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

// Portfolio (Home) header — NATASCHA branding + ABOUT / PROJECTS nav, mirroring
// the Beyond header's structure. Used on the Home route and on project pages
// (e.g. TennisConnect), where `menuItems` supplies that page's in-page nav and
// `showNav` hides the About/Projects links.
type MenuItem = { label: string; href: string }

const homeSections: MenuItem[] = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#work" },
  { label: "Currently", href: "/#currently" },
  { label: "Let's Connect", href: "/#connect" },
]

const navLinkClass = "p-2 font-mono uppercase transition-colors"

export default function HomeHeader({
  menuItems = homeSections,
  showNav = true,
}: {
  menuItems?: MenuItem[]
  showNav?: boolean
} = {}) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <>
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

        {showNav ? (
          <nav className="hidden flex-1 items-center justify-center gap-8 md:flex">
            <a href="/#about" className={`${navLinkClass} text-base font-semibold text-surface`}>
              About
            </a>
            <a href="/#work" className={`${navLinkClass} text-sm font-medium text-white/72 hover:text-surface`}>
              Projects
            </a>
          </nav>
        ) : (
          <div className="hidden flex-1 md:block" />
        )}

        <Link
          to="/"
          className="shrink-0 font-deca text-2xl font-medium uppercase tracking-[-2.16px] text-surface"
        >
          NATASCHA
        </Link>
        </div>
      </header>

      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={`fixed inset-x-0 bottom-0 top-[61px] z-30 ${open ? "" : "pointer-events-none"}`}
      />

      <nav
        aria-label="Sections"
        className={`fixed bottom-0 left-0 top-[61px] z-40 flex w-[255px] flex-col gap-3 overflow-y-auto border-r border-white/72 bg-ink pb-8 pt-6 transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "pointer-events-none -translate-x-full"
        }`}
      >
        <div className="flex h-[40px] shrink-0 items-center px-8">
          <p className="font-mono text-sm font-semibold uppercase tracking-[2.8px] text-white">Menu</p>
        </div>
        <div className="flex flex-col gap-2 pl-8">
          {menuItems.map((s) => (
            <a
              key={s.href}
              href={s.href}
              onClick={() => setOpen(false)}
              className="font-sans text-sm font-semibold leading-[1.2] text-surface transition-colors hover:text-accent"
            >
              {s.label}
            </a>
          ))}
        </div>
      </nav>
    </>
  )
}
