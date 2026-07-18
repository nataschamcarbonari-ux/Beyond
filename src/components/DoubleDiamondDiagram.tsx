// The intro "Double Diamond" process diagram (Figma 140:26), rebuilt as inline
// SVG + positioned labels/nodes so it stays crisp at any width. Coordinates are
// in the 1366px design space (relative to the diagram's own top-left); the whole
// thing is scaled by the enclosing PageScaleSection.
//
// Geometry: 4 diamonds (2 per cycle) tile across; each is 310.5 wide × 276.412
// tall. 8 dashed verticals sit at the diamond left/centre vertices (one per
// phase). 16 numbered step-circles are scattered inside.

const DIAMOND_W = 310.5
const DIAMOND_H = 276.412
const BAND_TOP = 64.6 // diamonds sit below the phase-label row

const DIAMONDS = [0, 310.5, 621, 931.5] // left x of each diamond
const VERTS = [0, 155.25, 310.5, 465.75, 621, 776.25, 931.5, 1086.75] // dashed-line / phase x
const PHASES = [
  "Discover",
  "Define",
  "Generate",
  "Set",
  "Deepen",
  "Reframe",
  "Shape",
  "Prepare",
]

// Step-circle top-left positions (design px, relative to the diagram origin).
const NODES: { n: string; x: number; y: number }[] = [
  { n: "01", x: 43.14, y: 193.53 },
  { n: "02", x: 106.34, y: 128 },
  { n: "03", x: 106.34, y: 244.34 },
  { n: "04", x: 176.57, y: 191.58 },
  { n: "05", x: 234.76, y: 191.58 },
  { n: "06", x: 387.25, y: 191.58 },
  { n: "07", x: 505.7, y: 193.53 },
  { n: "08", x: 679.25, y: 159.26 },
  { n: "09", x: 679.25, y: 209.16 },
  { n: "10", x: 730.42, y: 188.64 },
  { n: "11", x: 820.68, y: 188.64 },
  { n: "12", x: 992.23, y: 168.13 },
  { n: "13", x: 992.23, y: 215.03 },
  { n: "14", x: 1041.39, y: 128 },
  { n: "15", x: 1041.39, y: 244.34 },
  { n: "16", x: 1134.69, y: 193.53 },
]

const STROKE = "rgba(255,255,255,0.72)"

export default function DoubleDiamondDiagram() {
  return (
    <div className="relative h-[341px] w-[1242px]">
      {/* Phase labels */}
      {PHASES.map((label, i) => (
        <span
          key={label}
          className="absolute top-0 font-mono text-base font-semibold uppercase leading-none tracking-[3.2px] text-white/72"
          style={{ left: VERTS[i] }}
        >
          {label}
        </span>
      ))}

      {/* Diamonds + dashed verticals */}
      <svg
        className="absolute left-0"
        style={{ top: BAND_TOP }}
        width={DIAMONDS[3] + DIAMOND_W}
        height={DIAMOND_H}
        viewBox={`0 0 ${DIAMONDS[3] + DIAMOND_W} ${DIAMOND_H}`}
        fill="none"
        aria-hidden="true"
      >
        {DIAMONDS.map((x0) => (
          <polygon
            key={x0}
            points={`${x0 + DIAMOND_W / 2},0 ${x0 + DIAMOND_W},${DIAMOND_H / 2} ${x0 + DIAMOND_W / 2},${DIAMOND_H} ${x0},${DIAMOND_H / 2}`}
            stroke={STROKE}
            strokeWidth={1}
          />
        ))}
        {VERTS.map((x) => (
          <line
            key={x}
            x1={x}
            y1={0}
            x2={x}
            y2={DIAMOND_H}
            stroke={STROKE}
            strokeWidth={1}
            strokeDasharray="4 5"
          />
        ))}
      </svg>

      {/* Numbered step nodes */}
      {NODES.map((node) => (
        <span
          key={node.n}
          className="absolute flex size-[31.266px] items-center justify-center rounded-full border border-white/72 bg-ink font-mono text-[8.928px] font-semibold leading-none text-surface"
          style={{ left: node.x, top: node.y }}
        >
          {node.n}
        </span>
      ))}
    </div>
  )
}
