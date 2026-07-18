import type { ReactNode } from "react"
import PageScaleSection from "@/components/PageScaleSection"

// One row of the "currently" data table: a mono label and its value(s).
function DataRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex items-center gap-6 border-t border-white/72 py-2 last:border-b desk:h-[51.5px] desk:gap-[47px] desk:py-0">
      <p className="w-[110px] shrink-0 whitespace-nowrap font-mono text-sm font-semibold uppercase tracking-[3.2px] text-white desk:w-[138px] desk:text-base">
        {label}
      </p>
      <div className="flex flex-wrap gap-x-8 gap-y-1 font-sans text-sm text-white desk:text-base">
        {children}
      </div>
    </div>
  )
}

// Home "Currently" section (Figma 452:175): an accent panel with the section
// title, a bio paragraph (with bold highlights), and a right-hand data table.
export default function HomeCurrently() {
  return (
    <PageScaleSection
      id="currently"
      height={768}
      bg="accent"
      fullHeight
      canvasClassName="flex flex-col gap-12 px-6 py-16"
    >
      <h2 className="font-sans text-[clamp(2.5rem,10vw,64px)] font-normal uppercase leading-[0.96] text-white desk:absolute desk:left-[64px] desk:top-[86px] desk:text-[64px]">
        Currently
      </h2>

      <p className="font-sans text-lg leading-[1.2] text-white/72 desk:absolute desk:left-[64px] desk:top-[370px] desk:w-[397px] desk:text-[20px]">
        I&rsquo;m a Product Designer Intern at{" "}
        <span className="font-semibold text-white">Dell Technologies&rsquo; Client Innovation team</span>
        , where I contribute to creating user-centered solutions in a global and collaborative
        environment. Alongside my professional experience, I&rsquo;m pursuing a degree in{" "}
        <span className="font-semibold text-white">Product Design at UFRGS</span>, building on a
        foundation in Mechanical Engineering. I&rsquo;m also an active member of the{" "}
        <span className="font-semibold text-white">Interaction Design Foundation</span> (IxDF) in
        Porto Alegre, where I connect with other designers, exchange ideas, and continue learning
        from the community.
      </p>

      <div className="flex flex-col desk:absolute desk:left-[659px] desk:top-[86px] desk:w-[643px]">
        <DataRow label="Work">
          <span>Product Design Intern at Dell Technologies</span>
        </DataRow>
        <DataRow label="Education">
          <span>Product Design Student at UFRGS</span>
        </DataRow>
        <DataRow label="Community">
          <span>Member of IxDF</span>
        </DataRow>
        <DataRow label="Focus Areas">
          <span>Product Strategy</span>
          <span>AI &amp; Innovation</span>
          <span>UX</span>
        </DataRow>
        <DataRow label="Based on">
          <span>Porto Alegre, Brazil</span>
        </DataRow>
      </div>
    </PageScaleSection>
  )
}
