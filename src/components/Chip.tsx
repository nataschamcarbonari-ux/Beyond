import type { CSSProperties, ReactNode } from "react"

export default function Chip({
  children,
  variant = "default",
  className = "",
  style,
}: {
  children: ReactNode
  variant?: "default" | "faint" | "outlined"
  className?: string
  style?: CSSProperties
}) {
  const background =
    variant === "faint" ? "bg-white/56" : "bg-white/72"
  const border = variant === "outlined" ? "border-[0.85px] border-[#edf9ff]" : ""

  return (
    <span
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-full px-[12.5px] py-[5.2px] font-mono text-sm tracking-[-0.28px] text-ink backdrop-blur-[5px] ${background} ${border} ${className}`}
      style={style}
    >
      {children}
    </span>
  )
}
