import PageScaleSection from "@/components/PageScaleSection"
import DeepDiveTripleHeader from "@/components/DeepDiveTripleHeader"
import gabrielCard from "@/assets/ch2-persona-gabriel.webp"
import marianaCard from "@/assets/ch2-persona-mariana.webp"

// PERSONAS (225:57) — title/intro/notes header + the Gabriel Smith persona card,
// an intricate bordered infographic exported flat from Figma so it stays crisp.
export function PersonasIntro() {
  return (
    <PageScaleSection
      height={970}
      bg="ink"
      canvasClassName="flex max-w-none flex-col gap-10 px-6 py-16 md:px-16"
    >
      <DeepDiveTripleHeader
        title="Personas"
        intro="Two personas were created based on different work contexts and Dell archetype references."
        notes={
          <>
            <p>
              <span className="font-semibold text-surface">Road Warrior</span>: a high-mobility
              professional working across airports, hotels, cafés, client offices, and transit
              moments.
            </p>
            <p className="mt-4">
              <span className="font-semibold text-surface">Conventional / Office-based worker</span>:
              a professional facing interruptions, noise, lack of privacy, and fragmented work in
              more stable office environments.
            </p>
          </>
        }
      />
      <img
        src={gabrielCard}
        alt="Persona card: Gabriel Smith, Head of Technology — environment, responsibilities, frustrations, technology use, goals, and behaviors"
        className="w-full desk:absolute desk:left-[64px] desk:top-[289px] desk:w-[820px]"
      />
    </PageScaleSection>
  )
}

// The second persona card, Mariana Ribeiro (225:155) — a full-bleed card section
// with no separate heading.
export function PersonaMariana() {
  return (
    <PageScaleSection height={775} bg="ink" canvasClassName="flex max-w-none px-6 py-10 md:px-16">
      <img
        src={marianaCard}
        alt="Persona card: Mariana Ribeiro, Project Analyst — environment, responsibilities, frustrations, technology use, goals, and behaviors"
        className="w-full self-center desk:absolute desk:inset-0 desk:h-full desk:w-full desk:object-cover"
      />
    </PageScaleSection>
  )
}
