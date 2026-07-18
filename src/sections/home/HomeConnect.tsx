// Right-pointing arrow used beside each contact link.
function ArrowRight() {
  return (
    <svg
      viewBox="0 0 40 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      className="w-10 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
    >
      <line x1="0" y1="8" x2="38" y2="8" />
      <path d="M30 2 L38 8 L30 14" />
    </svg>
  )
}

// TODO: replace the CV placeholder with Natascha's real URL.
const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/natascha-carbonari/" },
  { label: "Behance", href: "https://www.behance.net/nataschcarbona" },
  { label: "CV", href: "https://drive.google.com/file/d/17vwNCVjEOaa5pNS2fLOHSikOEN7NOhDg/view?usp=drive_link" },
]

// Home "Let's Connect" section (Figma 445:835) — the portfolio's outro footer:
// title + intro + contact links, the giant bleeding NATASCHA wordmark, and a
// PRODUCT DESIGNER / 2026 / PORTFOLIO meta row. Mirrors the Beyond OutroFooter.
export default function HomeConnect() {
  return (
    <section id="connect" className="w-full bg-surface-alt">
      {/* Content caps at --content-max and centers on ultra-wide; the section bg
          fills the margins. container-type scales the cqw wordmark to the cap. */}
      <div className="relative mx-auto flex w-full max-w-[var(--content-max)] flex-col gap-16 overflow-hidden [container-type:inline-size] md:gap-20 desk:h-dvh desk:justify-between desk:gap-0">
      <div className="relative z-10 flex flex-col gap-12 px-6 pt-20 md:px-16 desk:flex-row desk:items-start desk:justify-between desk:gap-12 desk:px-[var(--gutter-x)] desk:pt-[86px]">
        <h2 className="shrink-0 font-sans text-[clamp(2.5rem,10vw,64px)] font-normal uppercase leading-[0.96] text-ink desk:w-[397px] desk:text-[64px]">
          Let&rsquo;s Connect
        </h2>

        <p className="font-sans text-lg leading-[1.2] text-muted desk:w-[373px] desk:text-[20px]">
          Whether you&rsquo;d like to discuss design, product strategy, emerging technologies, or
          simply exchange ideas, I&rsquo;d love to hear from you.
        </p>

        <nav aria-label="Contact links" className="flex shrink-0 flex-col gap-4 desk:w-[227px]">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-6 text-accent"
            >
              <span className="pl-2 font-sans text-3xl font-semibold leading-none underline-offset-4 group-hover:underline desk:text-[36px]">
                {l.label}
              </span>
              <ArrowRight />
            </a>
          ))}
        </nav>
      </div>

      <p
        className="pointer-events-none w-max self-center whitespace-nowrap font-deca text-[clamp(4rem,23cqw,19.64rem)] font-medium leading-none tracking-[-0.05em] text-white desk:text-[23.0092cqw]"
        style={{ textShadow: "0px 4px 4px rgba(255,255,255,0.25)" }}
      >
        NATASCHA
      </p>

      <div className="relative z-10 flex flex-col gap-2 px-6 pb-12 font-mono text-xs font-semibold tracking-[2px] text-ink sm:flex-row sm:justify-between sm:text-base sm:tracking-[3.2px] md:px-16 md:pb-16 desk:px-[var(--gutter-x)] desk:pb-[65px]">
        <span>PRODUCT DESIGNER</span>
        <span>2026</span>
        <span>PORTFOLIO</span>
      </div>
      </div>
    </section>
  )
}
