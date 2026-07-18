import { useId, useState, type ReactNode } from "react"
import { Link } from "react-router-dom"
import type { DropdownCard } from "@/data/dropdowns"

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 34 34"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M4 17h26M21 8l9 9-9 9" />
    </svg>
  )
}

export default function SectionLabel({
  children,
  dropdown,
  id,
  dark = false,
  trailing,
}: {
  children: ReactNode
  /** When provided, the label becomes an expandable micro-section: a +/-
      toggle reveals a dark panel of cards below the bar. */
  dropdown?: DropdownCard[]
  /** Anchor id so the side-nav can scroll to this label. */
  id?: string
  /** Dark theme (bg-ink, light text) — used for the Deep Dive chapter bars. */
  dark?: boolean
  /** Optional right-aligned content, e.g. "CYCLE 1". */
  trailing?: ReactNode
}) {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  return (
    // Standalone micro-section: each label bar is its own top-level <section>
    // in the page flow. z-10 so the toggle button (which straddles the bar's
    // bottom edge) paints over the top of the following section.
    <section
      id={id}
      className={`relative z-10 w-full border-b border-muted ${dark ? "bg-ink" : "bg-surface"}`}
    >
      <div className="flex h-[51px] items-center">
        <div className="mx-auto flex h-full w-full max-w-[1366px] items-center justify-between px-6 md:px-16 desk:max-w-[var(--content-max)] desk:px-[var(--gutter-x)]">
          <span
            className={`font-mono text-sm font-semibold tracking-[3.2px] md:text-base ${
              dark ? "text-surface" : "text-ink"
            }`}
          >
            {children}
          </span>
          {trailing && (
            <span
              className={`font-mono text-sm font-semibold tracking-[3.2px] md:text-base ${
                dark ? "text-white/72" : "text-muted"
              }`}
            >
              {trailing}
            </span>
          )}
        </div>
      </div>

      {dropdown && (
        <>
          {/* Panel: dark, collapsible. The 0fr->1fr grid-rows trick animates
              the height without a hard-coded max-height. */}
          <div
            id={panelId}
            className={`grid overflow-hidden bg-ink transition-[grid-template-rows] duration-300 ease-out ${
              open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="min-h-0 overflow-hidden">
              <div className="mx-auto w-full max-w-[1366px] px-6 pb-16 pt-10 md:px-16 desk:max-w-[var(--content-max)] desk:px-[var(--gutter-x)] desk:pb-[86px] desk:pt-[62px]">
                <div className="flex flex-col gap-6 desk:flex-row desk:gap-[26px]">
                  {dropdown.map((card) => (
                    <Link
                      key={card.n}
                      to={card.href ?? "#"}
                      className="group flex cursor-pointer flex-col justify-between border border-white/72 px-6 py-4 transition-colors duration-200 hover:bg-accent desk:flex-1"
                    >
                      <div className="flex flex-col gap-4">
                        <span className="font-sans text-4xl font-semibold leading-none text-surface">
                          {card.n}
                        </span>
                        <div className="flex flex-col gap-2">
                          <p className="font-sans text-xl font-medium leading-[1.2] text-surface">
                            {card.q}
                          </p>
                          <p className="font-sans text-sm leading-[1.2] text-white/72">{card.a}</p>
                        </div>
                      </div>
                      <div className="mt-8 flex justify-end">
                        <ArrowIcon className="size-[34px] text-accent transition-colors duration-200 group-hover:text-white" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Toggle: +/- pill straddling the section's bottom edge (half in the
              open section, half in the section below) at the right gutter. */}
          <button
            type="button"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? "Collapse details" : "Expand details"}
            onClick={() => setOpen((v) => !v)}
            className="absolute bottom-0 right-6 z-20 flex size-[43px] translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-muted bg-surface text-ink transition-colors duration-200 hover:border-accent hover:bg-accent hover:text-surface md:right-16 desk:right-[var(--gutter-x)]"
          >
            <svg
              viewBox="0 0 25 25"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              aria-hidden="true"
              className="size-[25px]"
            >
              <line x1="5.5" y1="12.5" x2="19.5" y2="12.5" />
              {!open && <line x1="12.5" y1="5.5" x2="12.5" y2="19.5" />}
            </svg>
          </button>
        </>
      )}
    </section>
  )
}
