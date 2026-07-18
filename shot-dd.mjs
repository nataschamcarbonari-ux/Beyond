import { chromium } from "playwright"
const b = await chromium.launch()
const p = await b.newPage({ viewport: { width: 1366, height: 768 } })
await p.goto("http://localhost:5173/deep-dive", { waitUntil: "networkidle" })
await p.waitForTimeout(300)
await p.screenshot({ path: "dd-hero-live.png" })
const hs = await p.evaluate(()=>document.documentElement.scrollWidth===document.documentElement.clientWidth)
console.log("deep-dive h-scroll ok:", hs)
await b.close()
