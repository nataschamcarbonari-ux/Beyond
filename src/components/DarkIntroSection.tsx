import type { ReactNode } from "react"
import PageScaleSection from "@/components/PageScaleSection"

/**
 * The recurring Deep Dive "chapter beat" opener: a giant uppercase Manrope
 * heading (Figma 128px, two lines) above a 36px paragraph whose second clause is
 * highlighted in accent orange. Used by DESK RESEARCH / INTERVIEWS / WORKSHOP and
 * the equivalent openers in later chapters.
 *
 * `heading` may contain a <br /> to force the two-line break; below `desk` the
 * heading fluidly shrinks via clamp so it never overflows narrow viewports.
 * `children` is the paragraph body — wrap the highlighted clause in
 * <span className="text-accent">…</span>.
 */
export default function DarkIntroSection({
  id,
  heading,
  children,
}: {
  id?: string
  heading: ReactNode
  children: ReactNode
}) {
  return (
    <PageScaleSection
      id={id}
      height={768}
      bg="ink"
      fullHeight
      canvasClassName="flex max-w-none flex-col px-6 py-16 md:px-16"
    >
      <div className="flex flex-col gap-8 md:gap-12 desk:absolute desk:left-[64px] desk:top-[86px] desk:w-[1238px] desk:gap-[64px]">
        <h2 className="font-sans text-[clamp(3rem,11vw,8rem)] font-normal uppercase leading-[0.96] text-surface desk:text-[128px]">
          {heading}
        </h2>
        <p className="font-sans text-xl font-medium leading-tight text-surface md:text-2xl desk:text-[36px] desk:leading-none">
          {children}
        </p>
      </div>
    </PageScaleSection>
  )
}
