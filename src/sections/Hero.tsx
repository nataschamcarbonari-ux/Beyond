import WordmarkHero from "@/components/WordmarkHero"
import heroBg from "@/assets/hero-bg.webp"

export default function Hero() {
  return (
    <WordmarkHero
      image={heroBg}
      alt="Close-up of a dark gray fabric bag with a zipper and handle"
      wordmark="BEYOND"
      tagline="For those who work anywhere and go everywhere."
      tone="light"
    />
  )
}
