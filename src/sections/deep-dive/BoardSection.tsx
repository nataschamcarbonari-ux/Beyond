import PageScaleSection from "@/components/PageScaleSection"

/**
 * A full-bleed "process board" beat: a dense research/synthesis board exported
 * flat from Figma (transparent margins baked in, so it blends into the ink
 * section). The export spans the whole 1366×768 canvas, so at `desk` it fills
 * the canvas edge-to-edge; below `desk` it scales down to fit the width.
 */
export default function BoardSection({
  src,
  alt,
  height = 768,
  fullHeight = true,
}: {
  src: string
  alt: string
  height?: number
  /** Fill the viewport height (default). Pass false for oversized boards. */
  fullHeight?: boolean
}) {
  return (
    <PageScaleSection
      height={height}
      bg="ink"
      fullHeight={fullHeight}
      canvasClassName="flex max-w-none px-6 py-10 md:px-16"
    >
      <img
        src={src}
        alt={alt}
        className="w-full self-center desk:absolute desk:inset-0 desk:h-full desk:w-full desk:object-cover"
      />
    </PageScaleSection>
  )
}
