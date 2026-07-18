import HomeHeader from "@/components/HomeHeader"
import HomeHero from "@/sections/home/HomeHero"
import HomeBio from "@/sections/home/HomeBio"
import HomeWork from "@/sections/home/HomeWork"
import HomeCurrently from "@/sections/home/HomeCurrently"
import HomeConnect from "@/sections/home/HomeConnect"

// Portfolio home (Figma 445:210) — Natascha's personal site; Beyond is one of the
// projects featured here.
export default function HomePage() {
  return (
    <>
      <HomeHeader />
      <main className="w-full overflow-x-clip">
        <HomeHero />
        <HomeBio />
        <HomeWork />
        <HomeCurrently />
        <HomeConnect />
      </main>
    </>
  )
}
