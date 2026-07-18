// A content card — bordered, static (no hover). `wide` spans both columns of a
// 2-up grid.
export default function Card({
  label,
  text,
  wide = false,
}: {
  label: string
  text: string
  wide?: boolean
}) {
  return (
    <div className={`flex flex-col gap-3 border border-muted p-6 ${wide ? "sm:col-span-2" : ""}`}>
      <p className="font-mono text-xs font-semibold uppercase tracking-[2px] text-muted">{label}</p>
      <p className="whitespace-pre-line font-sans text-sm leading-[1.65] text-ink">{text}</p>
    </div>
  )
}
