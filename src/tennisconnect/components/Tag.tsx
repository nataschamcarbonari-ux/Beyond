// A discipline / skill tag chip — mono, uppercase, bordered (Beyond style).
export default function Tag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center border border-muted px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[2px] text-muted">
      {label}
    </span>
  )
}
