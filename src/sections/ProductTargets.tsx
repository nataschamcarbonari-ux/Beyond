// Spec: .claude/figma-specs/10-project-guidelines-product-targets.md
import PageScaleSection from "@/components/PageScaleSection"
import productTargetsDiagram from "@/assets/product-targets-diagram.webp"

// Row widths (393 / 468 / 594) are not a mistake — the divider under each
// label is genuinely a different length in the Figma source (node 41:840's
// three children are fixed at 393px, 468px and 594px respectively), and the
// 594px row deliberately runs wider than its 468px-wide parent, extending
// under the diagram. Below `desk` that composition-specific variation no
// longer applies (rows just stack full-width), so `rowWidthClass` here is a
// `desk:`-only override.
const guidelines: { label: string; paragraphs: string[]; rowWidthClass: string }[] = [
  {
    label: "CORE",
    paragraphs: [
      "Non-negotiable capabilities required to deliver the product's primary value. If these do not exist, the product fails at its core promise.",
    ],
    rowWidthClass: "desk:w-[393px]",
  },
  {
    label: "ESSENCIAL",
    paragraphs: [
      "Capabilities that strongly reinforce and complete the core experience but are not the absolute minimum to validate the product.",
    ],
    rowWidthClass: "desk:w-[468px]",
  },
  {
    label: "EXTENDED",
    paragraphs: [
      "Nice-to-have or extensible features that may be explored later without compromising the core proposition.",
    ],
    rowWidthClass: "desk:w-[594px]",
  },
]

const dotLegend: { label: string; color: string }[] = [
  { label: "CONTINUITY", color: "#1e1e1e" },
  { label: "SECURITY", color: "#a63f1e" },
  { label: "ERGONOMICS", color: "#cccccc" },
  { label: "AGILITY", color: "#777777" },
  { label: "ADAPTABILITY", color: "#ff6f43" },
  { label: "PERSONALIZATION", color: "#fcae17" },
]

export default function ProductTargets() {
  return (
    <PageScaleSection
      id="product-targets"
      height={1396}
      canvasClassName="flex max-w-none flex-col gap-10 px-6 py-12 md:gap-12 md:px-16 md:py-16"
    >
        <h2 className="static w-full max-w-[420px] font-sans text-[clamp(3rem,9.4vw,8rem)] font-normal uppercase leading-[0.96] text-ink desk:absolute desk:left-[64px] desk:top-[87px] desk:w-[420px] desk:max-w-none desk:text-[128px]">
          Product Targets
        </h2>

        {/* Invention: below `desk` the reading order is heading -> dot
            legend -> diagram -> CORE/ESSENCIAL/EXTENDED, reordered here in
            the JSX itself (rather than with CSS order) since at `desk` every
            block is absolutely positioned at its original coordinates, so
            source order has no effect on the pixel-identical desktop
            layout. */}
        <div className="static flex h-auto w-full flex-col desk:absolute desk:left-[905px] desk:top-[86px] desk:h-[247px] desk:w-[397px]">
          {dotLegend.map((dot) => (
            <div
              key={dot.label}
              className="flex h-[41.17px] items-center gap-[33px] border-t border-muted"
            >
              <span
                className="size-3 shrink-0"
                style={{ backgroundColor: dot.color }}
                aria-hidden="true"
              />
              <span className="font-mono text-base font-semibold uppercase tracking-[3.2px] text-ink">
                {dot.label}
              </span>
            </div>
          ))}
        </div>

        {/* Known limitation: this is a raster image with ~20 small text
            labels baked in. It scales down proportionally (w-full) below
            `desk`, so at 375px those baked-in labels become quite small /
            hard to read. Rebuilding the diagram as HTML markup would fix
            this but is out of scope here. */}
        <img
          src={productTargetsDiagram}
          alt="Circular infographic mapping product target capabilities such as small size, quick access, materials resistance, locking mechanism, and modularity around three nested tiers of priority"
          className="mx-auto h-auto w-full max-w-[900px] desk:absolute desk:left-[402px] desk:top-[410px] desk:size-[900px] desk:max-w-none"
        />

        <div className="static flex h-auto w-full flex-col gap-8 desk:absolute desk:left-[64px] desk:top-[881px] desk:h-[426px] desk:w-[468px] desk:justify-between desk:gap-0">
          {guidelines.map((item) => (
            <div
              key={item.label}
              className={`flex w-full flex-col gap-2 border-t border-muted pt-3 ${item.rowWidthClass}`}
            >
              <span className="font-mono text-base font-semibold uppercase tracking-[3.2px] text-ink">
                {item.label}
              </span>
              <p className="w-full font-sans text-base leading-[1.2] tracking-[-0.32px] text-muted desk:w-[270px]">
                {item.paragraphs.join(" ")}
              </p>
            </div>
          ))}
        </div>
    </PageScaleSection>
  )
}
