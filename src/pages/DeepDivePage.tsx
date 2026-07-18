import DeepDiveHero from "@/sections/deep-dive/DeepDiveHero"
import DeepDiveIntro from "@/sections/deep-dive/DeepDiveIntro"
import Chapter01 from "@/sections/deep-dive/Chapter01"
import Chapter02 from "@/sections/deep-dive/Chapter02"
import Chapter03 from "@/sections/deep-dive/Chapter03"
import Chapter04 from "@/sections/deep-dive/Chapter04"
import Chapter05 from "@/sections/deep-dive/Chapter05"
import Chapter06 from "@/sections/deep-dive/Chapter06"
import Chapter07 from "@/sections/deep-dive/Chapter07"
import Chapter08 from "@/sections/deep-dive/Chapter08"
import DeepDiveFooter from "@/sections/deep-dive/DeepDiveFooter"
import BackToTop from "@/components/BackToTop"

export default function DeepDivePage() {
  return (
    <main className="w-full overflow-x-clip">
      <DeepDiveHero />
      <DeepDiveIntro />
      <Chapter01 />
      <Chapter02 />
      <Chapter03 />
      <Chapter04 />
      <Chapter05 />
      <Chapter06 />
      <Chapter07 />
      <Chapter08 />
      <DeepDiveFooter />
      <BackToTop />
    </main>
  )
}
