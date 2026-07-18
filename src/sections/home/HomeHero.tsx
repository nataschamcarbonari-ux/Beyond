import PageScaleSection from "@/components/PageScaleSection"
import heroPhoto from "@/assets/home-hero-photo.webp"

// Home hero (Figma 458:536): dark full-screen intro — a mono greeting + the big
// "PRODUCT DESIGNER" title on the left, Natascha's portrait bleeding off the
// right, and a personal aside over the photo. Fixed 1366×768 canvas (the top
// 61px sits under the fixed NATASCHA header); stacks on mobile.
export default function HomeHero() {
  return (
    <PageScaleSection
      id="top"
      height={768}
      bg="black"
      fullHeight
      canvasClassName="flex flex-col gap-8 px-6 pb-14 pt-[88px]"
    >
      {/* Photo — behind the title on desk (z-0), a stacked block on mobile. */}
      <img
        src={heroPhoto}
        alt="Portrait of Natascha Carbonari"
        className="h-[440px] w-full rounded-sm object-cover object-[center_15%] desk:absolute desk:left-[832px] desk:top-[61px] desk:z-0 desk:h-[707px] desk:w-[534px] desk:rounded-none desk:object-bottom"
      />

      <p className="relative z-10 order-first font-mono text-sm uppercase leading-[1.3] text-white desk:absolute desk:left-[64px] desk:top-[150px]">
        Hi,
        <br />
        I&rsquo;m Natascha Carbonari
      </p>

      <h1 className="relative z-10 order-first font-sans text-[clamp(2.5rem,12.5vw,88px)] font-normal uppercase leading-[0.96] text-white desk:absolute desk:left-[64px] desk:top-[217px] desk:w-[891px] desk:text-[128px]">
        <span className="block">Product</span>
        <span className="block desk:pl-[243px]">Designer</span>
      </h1>

      <p className="relative z-10 font-sans text-base leading-[1.25] text-white desk:absolute desk:left-[654px] desk:top-[513px] desk:w-[378px]">
        Beach lover, avid reader, and always up for a good laugh. An unconventional writer in my
        spare time, fascinated by quantum physics, astronomy, and everything that sparks more
        questions than answers. Always learning and evolving.
      </p>
    </PageScaleSection>
  )
}
