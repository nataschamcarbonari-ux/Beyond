import { useEffect, useRef, useState } from "react"

/** Walk up from the element under the button and report whether the first solid
 * background behind it is light — so the label can switch to black for contrast. */
function isLightBehind(btn: HTMLElement): boolean {
  const rect = btn.getBoundingClientRect()
  const x = rect.left + rect.width / 2
  const y = rect.bottom - 6 // sample over the label row
  // Ignore the button itself so elementFromPoint returns the content behind it.
  const prevPE = btn.style.pointerEvents
  btn.style.pointerEvents = "none"
  let el = document.elementFromPoint(x, y) as HTMLElement | null
  btn.style.pointerEvents = prevPE
  while (el) {
    const m = getComputedStyle(el).backgroundColor.match(/rgba?\(([^)]+)\)/)
    if (m) {
      const [r, g, b, a = 1] = m[1].split(",").map(Number)
      if (a > 0) return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255 > 0.6
    }
    el = el.parentElement
  }
  return false // default to dark background → light text
}

/**
 * Floating "back to top" control (Figma 343:1154): an accent circle with an
 * up-arrow above a mono label. Appears once the reader has scrolled past the
 * hero and smooth-scrolls to the top. The label auto-switches to black over
 * light sections so it stays legible on both themes.
 */
export default function BackToTop() {
  const ref = useRef<HTMLButtonElement>(null)
  const [visible, setVisible] = useState(false)
  const [onLight, setOnLight] = useState(false)

  useEffect(() => {
    let queued = false
    let lastY = window.scrollY
    const update = () => {
      queued = false
      const y = window.scrollY
      const delta = y - lastY
      // Ignore sub-pixel jitter; only react to a deliberate scroll move.
      if (Math.abs(delta) < 6) return
      lastY = y
      // Reveal only while scrolling up, and not right at the top of the page.
      const show = delta < 0 && y > 200
      setVisible(show)
      if (show && ref.current) setOnLight(isLightBehind(ref.current))
    }
    const onScroll = () => {
      if (queued) return
      queued = true
      requestAnimationFrame(update)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-8 right-6 z-30 flex cursor-pointer flex-col items-center gap-2 transition-opacity duration-300 md:right-[var(--gutter-x)] ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <span className="flex size-[54px] items-center justify-center rounded-full border border-black bg-accent text-surface">
        <svg
          viewBox="0 0 28 28"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="size-[28px]"
        >
          <path d="M14 22V6M6 14l8-8 8 8" />
        </svg>
      </span>
      <span
        className={`font-mono text-xs transition-colors duration-200 ${
          onLight ? "text-black" : "text-white/72"
        }`}
      >
        BACK TO TOP
      </span>
    </button>
  )
}
