// Spec: .claude/figma-specs/07-market-sizing-tam-sam-som.md
import PageScaleSection from "@/components/PageScaleSection"

export default function MarketSizing() {
  return (
    <PageScaleSection
      id="market-trends"
      height={1095}
      canvasClassName="flex max-w-none flex-col gap-10 overflow-visible px-6 py-12 md:gap-12 md:px-16 md:py-16 desk:overflow-hidden"
    >
        <h1 className="static w-full max-w-[600px] font-sans text-[clamp(3rem,9.4vw,8rem)] font-normal uppercase leading-[0.96] text-ink desk:absolute desk:left-16 desk:top-[87px] desk:w-[600px] desk:max-w-none desk:text-[128px]">
          Market &<br />Trends
        </h1>

        <p className="static w-full max-w-[397px] font-sans text-lg leading-[1.2] text-muted md:text-xl desk:absolute desk:left-[905px] desk:top-[225px] desk:w-[397px] desk:max-w-none desk:text-xl">
          A recovering, premiumizing business-travel market creates space for
          integrated, intelligent, and durable mobile-work solutions.
        </p>

        {/* Fixed-geometry TAM/SAM/SOM chart: scaled proportionally to container
            width below `desk` via a container-query transform, restored to
            pixel-exact absolute positioning at `desk` and above. */}
        <div
          className="relative w-full [container-type:inline-size] desk:absolute desk:left-[63px] desk:top-[467px] desk:h-[542px] desk:w-[1239px]"
          style={{ aspectRatio: "1239 / 542" }}
        >
          <div className="absolute left-0 top-0 h-[542px] w-[1239px] origin-top-left [transform:scale(calc(100cqw/1239px))] desk:[transform:none]">
            <div
              aria-hidden
              className="absolute left-[507px] top-[60px] size-[422px] rounded-full bg-accent"
            />
            <div
              aria-hidden
              className="absolute left-[894px] top-[99px] size-[345px] rounded-full bg-surface-alt"
            />
            <div
              aria-hidden
              className="absolute left-0 top-0 size-[542px] rounded-full border border-muted bg-transparent"
            />

            <div className="absolute left-[80px] top-[119px] flex w-[383px] flex-col items-start gap-6">
              <p className="font-mono text-2xl leading-[1.5] tracking-[-0.528px] text-ink">
                {"TAM "}
              </p>
              <p className="font-sans text-[64px] font-semibold leading-none tracking-[-1.408px] text-ink">
                $15.2B
              </p>
              <p className="w-[383px] font-sans text-xl leading-normal tracking-[-0.44px] text-muted">
                Global annual opportunity modeled from ~85M high-mobility
                professionals, 5-year replacement cycle, $899 price point.
              </p>
            </div>

            <div className="absolute left-[579px] top-[155px] flex w-[277px] flex-col items-start gap-[17.358px]">
              <p className="font-mono text-[17.358px] leading-[1.5] tracking-[-0.3819px] text-[#f9f9f9]">
                {"SAM "}
              </p>
              <p className="font-sans text-[46.287px] font-semibold leading-none tracking-[-1.0183px] text-[#f9f9f9]">
                $8.9B
              </p>
              <p className="w-[277px] font-sans text-base leading-normal tracking-[-0.352px] text-white/82">
                North America + Western Europe annual opportunity, modeled from
                ~50M professionals and a 20% annual refresh.
              </p>
            </div>

            <div className="absolute left-[956px] top-[178px] flex w-[219px] flex-col items-start gap-[13.723px]">
              <p className="font-mono text-[13.723px] leading-[1.5] tracking-[-0.3019px] text-ink">
                SOM
              </p>
              <p className="font-sans text-[36.595px] font-semibold leading-none tracking-[-0.8051px] text-ink">
                $89.9M
              </p>
              <p className="w-[219px] font-sans text-xs leading-normal tracking-[-0.264px] text-muted">
                realistic Dell opportunity: 1% capture of the premium laptop
                base in the first 24–36 months.
              </p>
            </div>
          </div>
        </div>

        {/* Below `desk` the chart above shrinks proportionally (including its
            baked-in labels), which makes the TAM/SAM/SOM copy illegible on
            phones. This plain, full-size stacked repeat keeps the numbers and
            copy readable; it is hidden again at `desk` where the chart's own
            labels are already at full size. */}
        <div className="flex w-full flex-col gap-8 desk:hidden">
          <div className="flex flex-col gap-2 border-t border-muted pt-4">
            <p className="font-mono text-sm tracking-[-0.33px] text-ink">TAM</p>
            <p className="font-sans text-[clamp(2rem,9vw,2.75rem)] font-semibold leading-none tracking-[-1.408px] text-ink">
              $15.2B
            </p>
            <p className="font-sans text-base leading-normal tracking-[-0.44px] text-muted">
              Global annual opportunity modeled from ~85M high-mobility
              professionals, 5-year replacement cycle, $899 price point.
            </p>
          </div>

          <div className="flex flex-col gap-2 border-t border-muted pt-4">
            <p className="font-mono text-sm tracking-[-0.3px] text-ink">SAM</p>
            <p className="font-sans text-[clamp(1.75rem,7.5vw,2.25rem)] font-semibold leading-none tracking-[-1.0183px] text-ink">
              $8.9B
            </p>
            <p className="font-sans text-base leading-normal tracking-[-0.352px] text-muted">
              North America + Western Europe annual opportunity, modeled from
              ~50M professionals and a 20% annual refresh.
            </p>
          </div>

          <div className="flex flex-col gap-2 border-t border-muted pt-4">
            <p className="font-mono text-sm tracking-[-0.26px] text-ink">SOM</p>
            <p className="font-sans text-[clamp(1.5rem,6.5vw,1.75rem)] font-semibold leading-none tracking-[-0.8051px] text-ink">
              $89.9M
            </p>
            <p className="font-sans text-base leading-normal tracking-[-0.264px] text-muted">
              realistic Dell opportunity: 1% capture of the premium laptop
              base in the first 24–36 months.
            </p>
          </div>
        </div>
    </PageScaleSection>
  )
}
