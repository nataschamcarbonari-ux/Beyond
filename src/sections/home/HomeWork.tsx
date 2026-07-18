import { Link } from "react-router-dom"
import PageScaleSection from "@/components/PageScaleSection"
import ProjectCard, { type Project } from "@/sections/home/ProjectCard"
import beyondPhoto from "@/assets/home-work-beyond.webp"
import tennisImg from "@/assets/home-work-tennisconnect.webp"
import docImg from "@/assets/home-work-doccheck.webp"
import suaviteImg from "@/assets/home-work-suavite.webp"

const projects: Project[] = [
  {
    title: "TennisConnect",
    description:
      "A tennis ranking management app for Paladino Tennis Club, centralizing player performance, match results, and automatic bracket generation in one digital platform.",
    tags: ["UX/UI", "RESEARCH", "SERVICE"],
    image: tennisImg,
    alt: "TennisConnect web app screens",
    href: "/tennisconnect",
  },
  {
    title: "Doc.check",
    description:
      "A health management app that centralizes appointments, exams, vaccines, and smart reminders, helping users organize preventive care for themselves and their families.",
    tags: ["UX/UI", "MOBILE"],
    image: docImg,
    alt: "Doc.check mobile app screens",
    href: "https://www.behance.net/gallery/219866741/doccheck-app",
  },
  {
    title: "Suavité",
    description:
      "A product design project focused on developing a corkscrew that combines functionality, safety, and classic style, helping people with limited strength or mobility open bottles with more confidence and stability.",
    tags: ["RESEARCH", "INDUSTRIAL DESIGN"],
    image: suaviteImg,
    alt: "Suavité corkscrew product design render",
    href: "https://www.behance.net/gallery/218599959/Suavit-Saca-rolhas",
  },
]

// One row of the featured card's spec table.
function SpecRow({ label, values, last }: { label: string; values: string[]; last?: boolean }) {
  return (
    <div
      className={`flex items-center gap-4 border-t border-white/72 py-2 desk:h-[51.5px] desk:gap-0 desk:py-0 ${
        last ? "border-b" : ""
      }`}
    >
      <p className="w-[110px] shrink-0 whitespace-nowrap font-mono text-sm font-semibold uppercase tracking-[3.2px] text-white desk:w-[172px] desk:text-base">
        {label}
      </p>
      <div className="flex flex-wrap gap-x-6 gap-y-1 font-sans text-sm text-white/72 desk:text-base">
        {values.map((v) => (
          <span key={v}>{v}</span>
        ))}
      </div>
    </div>
  )
}

// The featured project — Beyond (Figma 446:939). A full-bleed train photo fades
// left-to-right into black, with the title, blurb and spec table on the dark side.
// Links through to the Beyond briefing.
function FeaturedBeyondCard() {
  return (
    <Link
      to="/beyond"
      className="group relative block overflow-hidden border border-muted bg-black desk:h-[600px]"
    >
      {/* Mobile: photo as a top band. */}
      <img
        src={beyondPhoto}
        alt="A professional working on a Dell laptop aboard a moving train"
        className="h-[220px] w-full object-cover object-[center_32%] desk:hidden"
      />
      {/* Desk: photo bleeds off the left, faded into black on the right (Figma crop). */}
      <img
        src={beyondPhoto}
        alt=""
        aria-hidden
        className="hidden desk:absolute desk:left-[-18%] desk:top-[-52.5%] desk:block desk:h-[187.7%] desk:w-[78.9%] desk:max-w-none desk:object-cover"
      />
      <div
        aria-hidden
        className="hidden desk:absolute desk:inset-0 desk:block"
        style={{
          backgroundImage:
            "linear-gradient(to left, #000 45%, rgba(0,0,0,0.2) 60%)",
        }}
      />
      {/* Accent veil on hover. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-accent/86 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
      />

      <div className="relative z-10 flex flex-col gap-8 p-6 desk:h-full desk:items-end desk:justify-between desk:p-12">
        <div className="flex w-full flex-col gap-4 desk:max-w-[643px] desk:gap-9">
          <h3 className="font-sans text-[48px] font-medium leading-none text-white desk:text-[64px]">
            Beyond
          </h3>
          <p className="font-sans text-base font-normal leading-[1.2] text-white/72 desk:text-[20px]">
            This is my main strategic design project, exploring the future of mobile work through
            research, strategy, and product direction. It translates insights about focus, mobility,
            AI-enabled work, and high-mobility professionals into a strategic briefing for future
            hardware concepts.
          </p>
        </div>
        <div className="flex w-full flex-col desk:max-w-[643px]">
          <SpecRow label="Focus" values={["Future of Work", "AI", "Mobile Productivity", "Focus Protection"]} />
          <SpecRow label="Discipline" values={["Design Strategy", "Industrial Design", "Research"]} />
          <SpecRow label="Related to" values={["Dell Technologies"]} />
          <SpecRow label="Year" values={["2025-2026"]} last />
        </div>
      </div>
    </Link>
  )
}

// Home "My Work" section (Figma 445:296): section title, the featured Beyond card,
// then a three-up grid of the other projects.
export default function HomeWork() {
  return (
    <PageScaleSection
      id="work"
      height={1469}
      bg="surface"
      canvasClassName="flex flex-col gap-12 px-6 py-16"
    >
      <h2 className="font-sans text-[clamp(2.5rem,10vw,64px)] font-normal uppercase leading-[0.96] text-ink desk:absolute desk:left-[64px] desk:top-[86px] desk:text-[64px]">
        My Work
      </h2>

      <div className="desk:absolute desk:left-[64px] desk:top-[211px] desk:h-[600px] desk:w-[1238px]">
        <FeaturedBeyondCard />
      </div>

      <div className="grid gap-6 lg:grid-cols-3 desk:absolute desk:left-[64px] desk:top-[835px] desk:w-[1238px]">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </PageScaleSection>
  )
}
