import WordmarkHero from "@/components/WordmarkHero"
import deepDiveHero from "@/assets/deep-dive-hero.webp"

export default function DeepDiveHero() {
  return (
    <WordmarkHero
      image={deepDiveHero}
      alt="Technical pencil sketch of the Beyond bag"
      imageClassName="opacity-[0.24]"
      tone="dark"
      wordmark="DEEP DIVE"
      wordmarkClassName="font-deca text-[clamp(4rem,23cqw,19.64rem)] tracking-[-0.09em] desk:text-[23.0092cqw]"
      wordmarkDeskShift="desk:-translate-x-[42px]"
      tagline={
        <>
          A deeper look into the process
          <br />
          that shaped Beyond.
        </>
      }
      taglineClassName="max-w-[22rem] desk:w-[689px]"
    />
  )
}
