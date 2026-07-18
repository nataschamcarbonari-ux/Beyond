import PageScaleSection from "@/components/PageScaleSection"

// Home bio (Figma 445:746): a centered brand statement on a light-alt panel, with
// one accent-highlighted clause, and a mono "HOW I CREATE VALUE" label beneath.
export default function HomeBio() {
  return (
    <PageScaleSection
      id="about"
      height={768}
      bg="surface-alt"
      fullHeight
      canvasClassName="flex min-h-[62vh] items-center justify-center px-6 py-20"
    >
      <div className="flex flex-col items-center gap-6 text-center desk:absolute desk:left-1/2 desk:top-1/2 desk:w-[1167px] desk:-translate-x-1/2 desk:-translate-y-1/2">
        <p className="font-sans text-[clamp(1.375rem,4.6vw,36px)] font-semibold leading-[1.15] text-ink desk:text-[36px] desk:leading-[1.08]">
          I&rsquo;m passionate about creating new things, connecting ideas, and making sense of
          complex problems.
          <br />
          As a Product Designer,{" "}
          <span className="text-accent">
            I leverage 7 years of engineering experience to combine systems thinking, strategy, and
            execution, balancing user needs, business goals, and technical feasibility.
          </span>
          <br />
          I enjoy turning complexity into simple, meaningful, and scalable solutions that deliver
          real value to both users and organizations.
          <br />
          With a strong interest in product strategy, I&rsquo;m constantly exploring how AI and
          modern product development methodologies can help create more impactful outcomes.
        </p>
        <p className="font-mono text-sm uppercase leading-[1.2] text-ink">How I Create Value</p>
      </div>
    </PageScaleSection>
  )
}
