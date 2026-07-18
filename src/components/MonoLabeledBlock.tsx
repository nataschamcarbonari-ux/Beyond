import type { ReactNode } from "react"

/**
 * A dark editorial content block: an IBM Plex Mono uppercase label above a
 * top divider rule, with muted body content below. The recurring building block
 * of the Deep Dive "problem territory" columns, focus-opportunity lists, etc.
 */
export default function MonoLabeledBlock({
  label,
  children,
  className = "",
}: {
  label: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`flex flex-col gap-2 border-t border-white/72 ${className}`}>
      <div className="flex h-10 items-center">
        {/* Labels are auto-width (single line) in Figma; keep them on one line at
            desk, but allow wrapping on narrow mobile so nothing overflows. */}
        <p className="font-mono text-base font-semibold uppercase tracking-[3.2px] text-surface desk:whitespace-nowrap">
          {label}
        </p>
      </div>
      <div className="font-sans text-sm leading-[1.2] text-white/72">{children}</div>
    </div>
  )
}
