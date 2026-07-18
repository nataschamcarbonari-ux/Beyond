import { lazy, Suspense, useEffect, useRef } from "react"
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import SiteHeader from "@/components/SiteHeader"
import HomePage from "@/pages/HomePage"
import BriefingPage from "@/pages/BriefingPage"
import DeepDivePage from "@/pages/DeepDivePage"

// The TennisConnect case study pulls in reactflow + its own CSS-module bundle;
// lazy-load them so Home/Beyond don't pay for it.
const TennisConnectPage = lazy(() => import("@/tennisconnect/TennisConnectPage"))
const DesignSystemPage = lazy(() => import("@/tennisconnect/DesignSystemPage"))

// Manages scroll on navigation:
//  - cross-page jump to a #hash (e.g. a Briefing card → a Deep Dive section):
//    jump straight to that section (instant, respecting scroll-padding-top);
//  - cross-page without a hash: reset to the top;
//  - same-page #hash changes (the side-nav): left to the browser's native
//    smooth anchor scroll.
function ScrollManager() {
  const { pathname, hash } = useLocation()
  const prevPath = useRef<string | null>(null)

  useEffect(() => {
    const changedPage = prevPath.current !== pathname
    prevPath.current = pathname
    if (hash) {
      if (!changedPage) return
      const id = decodeURIComponent(hash.slice(1))
      const raf = requestAnimationFrame(() => {
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: "instant" as ScrollBehavior, block: "start" })
      })
      return () => cancelAnimationFrame(raf)
    }
    if (changedPage) window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior })
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <SiteHeader />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/beyond" element={<BriefingPage />} />
          <Route path="/beyond/deep-dive" element={<DeepDivePage />} />
          <Route path="/tennisconnect" element={<TennisConnectPage />} />
          <Route path="/tennisconnect/design-system" element={<DesignSystemPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
