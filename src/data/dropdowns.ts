// Content for the expandable "micro-section" dropdowns (the labels with a
// +/- toggle). Extracted from Figma frames 343:531 / 343:581 / 340:383 /
// 343:492 / 343:699. Each card links to a specific Deep Dive destination via
// `href` (a /deep-dive#<id> anchor resolved on the Deep Dive page).

export type DropdownCard = {
  n: string
  q: string
  a: string
  href?: string
}

export const goalsCards: DropdownCard[] = [
  {
    n: "01.",
    q: "Want to understand how the project started?",
    a: "Explore how the challenge was framed, what constraints guided the project, and why the process was structured into two cycles.",
    href: "/beyond/deep-dive#ch-discover",
  },
  {
    n: "02.",
    q: "How was the project process structured?",
    a: "See how the first cycle helped find the focus and how the second cycle transformed it into a product opportunity.",
    href: "/beyond/deep-dive#ch-discover",
  },
  {
    n: "03.",
    q: "Why was this not a linear process?",
    a: "See how the project evolved through research, decision-making, and recalibration.",
    href: "/beyond/deep-dive#dd-recalibration",
  },
]

export const problemCards: DropdownCard[] = [
  {
    n: "01.",
    q: "Why was lack of focus chosen as the main problem?",
    a: "See how the project compared time management, communication, and lack of focus before selecting the final theme.",
    href: "/beyond/deep-dive#dd-problem-territories",
  },
  {
    n: "02.",
    q: "How was the focus theme prioritized?",
    a: "Explore the decision process used to compare the problem territories and choose lack of focus.",
    href: "/beyond/deep-dive#dd-prioritization",
  },
  {
    n: "03.",
    q: "What other problems were considered?",
    a: "See the three original problem territories and how each one was framed before the final decision.",
    href: "/beyond/deep-dive#dd-problem-territories",
  },
  {
    n: "04.",
    q: "How did research reveal the focus problem?",
    a: "Explore the desk research, interviews, and workshop that surfaced focus as a recurring friction across work models.",
    href: "/beyond/deep-dive#ch-discover",
  },
]

export const audienceCards: DropdownCard[] = [
  {
    n: "01.",
    q: "Why did the project focus on road warriors?",
    a: "See how user mapping revealed that mobility made the focus problem more intense.",
    href: "/beyond/deep-dive#dd-user-mapping",
  },
  {
    n: "02.",
    q: "How was The Builder profile selected?",
    a: "Explore how the project deepened the audience and connected high-mobility professionals to the Builder profile.",
    href: "/beyond/deep-dive#dd-audience-deepening",
  },
  {
    n: "03.",
    q: "What evidence supported the road warrior direction?",
    a: "See the work patterns, routines, and interviews that helped validate this audience.",
    href: "/beyond/deep-dive#dd-audience-deepening",
  },
  {
    n: "04.",
    q: "What do road warriors actually carry and do?",
    a: "Explore the observed work patterns, everyday carry, and interview insights behind this audience.",
    href: "/beyond/deep-dive#dd-audience-deepening",
  },
]

export const marketCards: DropdownCard[] = [
  {
    n: "01.",
    q: "How was the opportunity validated as a market relevant direction?",
    a: "See how the project reframed the concept as mobile infrastructure instead of a traditional accessory.",
    href: "/beyond/deep-dive#dd-market-validation",
  },
  {
    n: "02.",
    q: "Where did the business travel signals come from?",
    a: "Explore the market and future signals that shaped the opportunity.",
    href: "/beyond/deep-dive#dd-future-signals",
  },
  {
    n: "03.",
    q: "Why does business travel matter for this product direction?",
    a: "See how mobility, business travel growth, ROI logic, and premium positioning supported the opportunity.",
    href: "/beyond/deep-dive#dd-market-validation",
  },
  {
    n: "04.",
    q: "What future trends influenced the direction?",
    a: "Explore how resilience, sustainability, AI, bleisure, Gen Z, and transit work reframed the opportunity.",
    href: "/beyond/deep-dive#dd-future-signals",
  },
  {
    n: "05.",
    q: "Why did the project include psychology and cognitive load?",
    a: "See how constant transit, interruptions, and environmental instability helped explain the road warrior's needs.",
    href: "/beyond/deep-dive#dd-psychological-layer",
  },
]

export const projectGuidelinesCards: DropdownCard[] = [
  {
    n: "01.",
    q: "How did the research become product direction?",
    a: "See how insights were translated into product guidelines, concept directions, and development logic.",
    href: "/beyond/deep-dive#ch-shape",
  },
  {
    n: "02.",
    q: "Where did the product principles come from?",
    a: "Explore how the project translated user values, market signals, and specialist input into product guidelines.",
    href: "/beyond/deep-dive#dd-project-guidelines",
  },
  {
    n: "03.",
    q: "What concept directions were considered?",
    a: "See the early product territories explored before defining the strategic brief.",
    href: "/beyond/deep-dive#dd-concept-directions",
  },
  {
    n: "04.",
    q: "How should future concepts be evaluated?",
    a: "Explore the validation framework created to test desirability, alignment, resilience, and gaps.",
    href: "/beyond/deep-dive#dd-validation-framework",
  },
]
