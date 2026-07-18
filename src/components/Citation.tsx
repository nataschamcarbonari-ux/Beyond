// A bracketed source citation: [Label, Year] where Label links to the source.
// Shared across sections that cite research (Problem stats, Market Outlook
// trends, etc.). Rendered as a block that sits below the sentence it cites.
export default function Citation({
  label,
  href,
  year,
}: {
  label: string
  href: string
  year: string | number
}) {
  return (
    <span className="mt-1 block">
      [
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="font-medium text-accent underline [text-decoration-skip-ink:none]"
      >
        {label}
      </a>
      , {year}]
    </span>
  )
}
