import { Link } from "react-router-dom"
import OutroFooter from "@/components/OutroFooter"
import arrowRight from "@/assets/arrow-right.svg"

export default function ClosingCta() {
  return (
    <OutroFooter tone="light">
      {/* Top cluster: title + (phrase | Deep Dive), shared --gutter-x edge gutter */}
      <div className="flex flex-col gap-6 px-6 pt-12 md:px-16 md:pt-16 desk:px-[var(--gutter-x)] desk:pt-[86px]">
        {/* Heading + Deep Dive CTA share the top row (CTA top-aligned with the title). */}
        <div className="flex flex-col gap-6 desk:flex-row desk:items-start desk:justify-between desk:gap-0">
          <h2 className="font-sans text-[clamp(2rem,4.7vw,4rem)] font-normal uppercase leading-[0.96] text-ink desk:w-[397px] desk:text-[64px]">
            still curious?
          </h2>

          <Link to="/beyond/deep-dive" className="group flex w-fit items-center gap-[29px]">
            <span className="font-sans text-[clamp(1.375rem,2.6vw,2.25rem)] font-semibold leading-none text-accent underline-offset-4 group-hover:underline desk:text-[36px]">
              Deep Dive
            </span>
            <img src={arrowRight} alt="" className="h-[15px] w-10" />
          </Link>
        </div>

        <p className="font-sans text-lg leading-[1.2] text-muted md:text-xl desk:w-[373px]">
          Explore the full research process, decision logic, interviews, workshop insights, and
          validation frameworks in the{" "}
          <Link
            to="/beyond/deep-dive"
            className="font-medium text-accent underline [text-decoration-skip-ink:none]"
          >
            Deep Dive
          </Link>
          .
        </p>
      </div>
    </OutroFooter>
  )
}
