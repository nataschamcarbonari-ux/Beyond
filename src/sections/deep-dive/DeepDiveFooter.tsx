import { Link } from "react-router-dom"
import OutroFooter from "@/components/OutroFooter"
import arrowRight from "@/assets/arrow-right.svg"

// Dark mirror of the briefing footer: a "← Briefing" back-CTA (top-left) and a
// closing paragraph (top-right). Reuses the shared OutroFooter shell (BEYOND
// watermark + meta row).
export default function DeepDiveFooter() {
  return (
    <OutroFooter tone="dark">
      <div className="flex flex-col gap-8 px-6 pt-12 md:px-16 md:pt-16 desk:flex-row desk:items-start desk:justify-between desk:px-[var(--gutter-x)] desk:pt-[86px]">
        <Link to="/beyond" className="group flex w-fit items-center gap-[29px]">
          <img src={arrowRight} alt="" className="h-[15px] w-10 rotate-180" />
          <span className="font-sans text-[clamp(1.375rem,2.6vw,2.25rem)] font-semibold leading-none text-accent underline-offset-4 group-hover:underline desk:text-[36px]">
            Briefing
          </span>
        </Link>

        <div className="flex flex-col gap-6 font-sans text-lg leading-[1.2] text-white/72 md:text-xl desk:w-[397px]">
          <p>
            You&rsquo;ve explored how Beyond was built from early research and problem framing to
            audience deepening, concept generation, and validation logic.
          </p>
          <p>
            Return to the{" "}
            <Link
              to="/beyond"
              className="font-medium text-accent underline [text-decoration-skip-ink:none]"
            >
              Briefing
            </Link>{" "}
            to see how these decisions translate into the final product direction.
          </p>
        </div>
      </div>
    </OutroFooter>
  )
}
