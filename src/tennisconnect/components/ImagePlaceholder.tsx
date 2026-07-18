// A framed image (bordered, object-cover). Without a `src` it renders a labeled
// dashed placeholder — used for slots that don't have a final asset yet.
export default function ImagePlaceholder({
  label = "Add image",
  aspect = "wide",
  src,
  alt,
}: {
  label?: string
  aspect?: "wide" | "square"
  src?: string
  alt?: string
}) {
  const aspectClass = aspect === "wide" ? "aspect-[16/9]" : "aspect-[4/3]"

  if (src) {
    return (
      <div className={`w-full overflow-hidden border border-muted bg-surface-alt ${aspectClass}`}>
        <img src={src} alt={alt ?? ""} className="size-full object-cover" />
      </div>
    )
  }

  return (
    <div
      className={`flex w-full items-center justify-center border border-dashed border-muted bg-surface-alt ${aspectClass}`}
    >
      <span className="font-mono text-xs uppercase tracking-[2px] text-muted">{label}</span>
    </div>
  )
}
