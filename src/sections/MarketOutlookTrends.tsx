// Spec: .claude/figma-specs/09-market-outlook-key-trends.md
import type { ReactNode } from "react"
import Citation from "@/components/Citation"
import trendRowA from "@/assets/trend-row-a.webp"
import trendRowB from "@/assets/trend-row-b.webp"

const AMEX_URL =
  "https://explorer.amexglobalbusinesstravel.com/rs/346-POJ-129/images/Meet-tomorrows-business-travelers-report.pdf?version=0"
const GLOBETRENDER_URL =
  "https://amadeus.com/documents/resources/research-report/business-travel-trends-2025-compressed.pdf"

function Headline({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h3 className={`font-sans text-4xl leading-none font-semibold text-ink ${className}`}>
      {children}
    </h3>
  )
}

function Body({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`font-sans text-base leading-[1.2] text-muted ${className}`}>{children}</p>
  )
}

export default function MarketOutlookTrends() {
  return (
    <>
      <section className="w-full bg-surface">
        <div className="relative mx-auto flex h-auto w-full max-w-none flex-col gap-8 px-6 py-12 md:gap-10 md:px-16 md:py-16 desk:block desk:h-[calc(768px*var(--page-scale))] desk:w-[1366px] desk:gap-0 desk:px-0 desk:py-0 desk:origin-top desk:[transform:scale(var(--page-scale))]">
          {/* Invention: below `desk` both trend rows show photo-then-copy,
              consistently. Row A's DOM already has copy before the image, so
              it is reordered visually only (source/tab order unchanged). */}
          <img
            src={trendRowA}
            alt="An airplane taking off from a runway lined with trees at dusk."
            className="order-first aspect-[397/596] h-auto w-full object-cover desk:order-none desk:absolute desk:left-[905px] desk:top-[86px] desk:aspect-auto desk:h-[596px] desk:w-[397px]"
          />

          <div className="flex w-full flex-col gap-6 desk:absolute desk:left-[64px] desk:top-[86px] desk:w-[813px] desk:gap-0">
            <div className="flex flex-col gap-2 border-t border-muted py-4 desk:h-[198.667px] desk:flex-row desk:items-center desk:justify-between desk:gap-6 desk:py-2 desk:pr-6">
              <Headline className="w-full desk:w-[393px]">Resilience over efficiency.</Headline>
              <Body className="w-full desk:w-[372px]">
                As travel disruption increases, companies and travelers shift
                from a &ldquo;just in time&rdquo; mindset to{" "}
                <span className="whitespace-nowrap">&ldquo;just in case&rdquo;</span>{" "}
                planning, prioritizing security, predictability, and
                responsiveness.
                <Citation label="Amex GBT" href={AMEX_URL} year={2025} />
              </Body>
            </div>

            <div className="flex flex-col gap-2 border-t border-muted py-4 desk:h-[198.667px] desk:flex-row desk:items-center desk:justify-between desk:gap-6 desk:py-2 desk:pr-6">
              <Body className="w-full desk:w-[393px]">
                By 2030, corporate travel will need to balance business needs
                with emissions reduction, making lower-impact solutions more
                relevant in procurement.
                <Citation label="Amex GBT" href={AMEX_URL} year={2025} />
              </Body>
              <Headline className="order-first w-full desk:order-none desk:w-[372px]">
                Sustainability becomes mandatory.
              </Headline>
            </div>

            <div className="flex flex-col gap-2 border-t border-muted py-4 desk:h-[198.667px] desk:flex-row desk:items-center desk:justify-between desk:gap-6 desk:py-2 desk:pr-6">
              <Headline className="w-full desk:w-[393px]">AI reshapes the traveler role.</Headline>
              <Body className="w-full desk:w-[372px]">
                Routine tasks such as expenses, summaries, and itinerary
                adjustments will increasingly move to AI, turning the road
                warrior into an AI-supported workflow manager.
                <Citation label="Amex GBT" href={AMEX_URL} year={2025} />
              </Body>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface">
        <div className="relative mx-auto flex h-auto w-full max-w-none flex-col gap-8 px-6 py-12 md:gap-10 md:px-16 md:py-16 desk:block desk:h-[calc(768px*var(--page-scale))] desk:w-[1366px] desk:gap-0 desk:px-0 desk:py-0 desk:origin-top desk:[transform:scale(var(--page-scale))]">
          <img
            src={trendRowB}
            alt="A businesswoman uses a laptop at a fold-down table on a train while a city skyline passes by the window."
            className="aspect-[397/596] h-auto w-full object-cover desk:absolute desk:left-16 desk:top-[86px] desk:aspect-auto desk:h-[596px] desk:w-[397px]"
          />

          <div className="flex w-full flex-col gap-6 desk:absolute desk:left-[485px] desk:top-[86px] desk:h-[596px] desk:w-[817px] desk:justify-center desk:gap-0">
            <div className="flex flex-col gap-2 border-t border-muted py-4 desk:flex-1 desk:flex-row desk:items-center desk:justify-between desk:py-2">
              <Headline className="w-full desk:w-[372px]">Bleisure is mainstream.</Headline>
              <Body className="w-full desk:w-[397px]">
                With 62% of travelers extending business trips for personal
                purposes, business travel must support both professional
                performance and personal flexibility.
                <Citation label="Amex GBT" href={AMEX_URL} year={2025} />
              </Body>
            </div>

            <div className="flex flex-col gap-2 border-t border-muted py-4 desk:flex-1 desk:flex-row desk:items-center desk:justify-between desk:py-2">
              <Body className="w-full desk:w-[372px]">
                As Gen Z reaches 27% of the global workforce by the end of
                2025, demand will grow for travel experiences that are
                sustainable, flexible, digital, and adaptive.
                <Citation label="Amex GBT" href={AMEX_URL} year={2025} />
              </Body>
              <Headline className="order-first w-full desk:order-none desk:w-[397px]">
                Gen Z raises expectations.
              </Headline>
            </div>

            <div className="flex flex-col gap-2 border-t border-muted py-4 desk:flex-1 desk:flex-row desk:items-center desk:justify-between desk:py-2">
              <Headline className="w-full desk:w-[372px]">Transit becomes a workplace.</Headline>
              <Body className="w-full desk:w-[397px]">
                Planes, trains, and vehicles are evolving into dynamic
                workspaces, increasing the need for tools that support
                productivity, collaboration, and readiness on the move.
                <Citation label="Globetrender" href={GLOBETRENDER_URL} year={2025} />
              </Body>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
