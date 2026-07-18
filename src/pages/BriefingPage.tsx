import SectionLabel from "@/components/SectionLabel"
import {
  goalsCards,
  problemCards,
  audienceCards,
  marketCards,
  projectGuidelinesCards,
} from "@/data/dropdowns"
import Hero from "@/sections/Hero"
import GoalsAndObjectives from "@/sections/GoalsAndObjectives"
import Problem from "@/sections/Problem"
import AudiencePersona from "@/sections/AudiencePersona"
import PainPoints from "@/sections/PainPoints"
import UserValues from "@/sections/UserValues"
import MarketSizing from "@/sections/MarketSizing"
import MarketOutlookHero from "@/sections/MarketOutlookHero"
import MarketOutlookTrends from "@/sections/MarketOutlookTrends"
import ProductTargets from "@/sections/ProductTargets"
import AttributesPositioning from "@/sections/AttributesPositioning"
import Mandatories from "@/sections/Mandatories"
import Quote from "@/sections/Quote"
import DesiredOutcomes from "@/sections/DesiredOutcomes"
import Roadmap from "@/sections/Roadmap"
import ClosingCta from "@/sections/ClosingCta"
import BackToTop from "@/components/BackToTop"

export default function BriefingPage() {
  return (
    <main className="w-full overflow-x-clip">
      <Hero />

      <SectionLabel id="goals" dropdown={goalsCards}>
        GOALS AND OBJECTIVES
      </SectionLabel>
      <GoalsAndObjectives />

      <SectionLabel dropdown={problemCards}>PROBLEM</SectionLabel>
      <Problem />

      <SectionLabel id="audience" dropdown={audienceCards}>
        AUDIENCE
      </SectionLabel>
      <AudiencePersona />

      <PainPoints />
      <UserValues />

      <SectionLabel id="market" dropdown={marketCards}>
        MARKET ANALISYS
      </SectionLabel>
      <MarketSizing />

      <MarketOutlookHero />
      <MarketOutlookTrends />

      <SectionLabel id="project-guidelines" dropdown={projectGuidelinesCards}>
        PROJECT GUIDELINES
      </SectionLabel>
      <ProductTargets />

      <AttributesPositioning />
      <Mandatories />
      <Quote />

      <SectionLabel id="deliverables">DELIVERABLES</SectionLabel>
      <DesiredOutcomes />

      <Roadmap />
      <ClosingCta />
      <BackToTop />
    </main>
  )
}
