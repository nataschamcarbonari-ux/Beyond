import { Link } from "react-router-dom"

// A single portfolio project card (Figma 446:974): title + muted description at
// the top, a desaturated screenshot band, and mono discipline tags at the bottom.
// Equal-height in the desk grid (h-[548px]); flows naturally on mobile. On hover
// the card fills with accent orange and its text turns white. An in-app `href`
// (starting with "/") routes via react-router; an external one opens in a new tab.
export type Project = {
  title: string
  description: string
  tags: string[]
  image: string
  alt: string
  href?: string
}

export default function ProjectCard({ title, description, tags, image, alt, href }: Project) {
  const className =
    "group flex cursor-pointer flex-col border border-muted transition-colors duration-200 hover:border-accent hover:bg-accent desk:h-[548px]"

  const content = (
    <>
      <div className="flex flex-col gap-3 p-6">
        <h3 className="font-sans text-[28px] font-semibold leading-none text-ink transition-colors group-hover:text-white desk:text-[36px]">
          {title}
        </h3>
        <p className="font-sans text-base leading-[1.2] text-muted transition-colors group-hover:text-white">
          {description}
        </p>
      </div>

      <div className="mt-auto flex flex-col">
        <div className="overflow-hidden border-y border-muted transition-colors group-hover:border-white/40">
          <img
            src={image}
            alt={alt}
            className="h-[200px] w-full object-cover object-bottom grayscale desk:h-[223px]"
          />
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-2 p-6">
          {tags.map((t) => (
            <span
              key={t}
              className="font-mono text-base font-semibold uppercase tracking-[3.2px] text-ink transition-colors group-hover:text-white"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </>
  )

  if (!href) return <div className={className}>{content}</div>

  return href.startsWith("/") ? (
    <Link to={href} className={className}>
      {content}
    </Link>
  ) : (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {content}
    </a>
  )
}
