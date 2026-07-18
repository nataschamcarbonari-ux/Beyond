export default function Quote() {
  return (
    <section className="relative w-full bg-surface-alt">
      <div className="relative mx-auto flex h-auto w-full max-w-[1366px] items-center justify-center px-6 py-16 desk:block desk:h-[calc(768px*var(--page-scale))] desk:max-w-none desk:px-0 desk:py-0">
        {/* Invention: split into an outer "reservation" box (pre-multiplied
            height, no transform, full-bleed/unscaled width matching the
            section so it never clips the inner box's transform-driven
            growth) and this inner "canvas" box, kept at its true native
            768px height, centered with its own mx-auto, and transformed as
            a whole from that centered position (transform-origin:top is
            horizontal-center + top, so it grows symmetrically to fill the
            viewport exactly like every other section's single-div canvas
            does). Centering the quote card is done with flex items-center,
            which — like desk:bottom-anchored content elsewhere — must
            measure against the real 768px height, not the outer's
            pre-inflated height, or the quote card drifts downward instead
            of staying vertically centered above 1366px. */}
        <div className="contents desk:relative desk:mx-auto desk:flex desk:h-[768px] desk:w-[1366px] desk:origin-top desk:items-center desk:justify-center desk:[transform:scale(var(--page-scale))]">
          <div className="flex w-full max-w-[729px] flex-col items-center gap-6 text-center desk:w-[729px]">
            <p className="font-sans text-[clamp(1.375rem,2.6vw,2.25rem)] font-semibold leading-none text-ink desk:text-[36px]">
              Integrated electronics should only be included when they{" "}
              <span className="text-accent">
                clearly improve access, protection, organization, or readiness
              </span>{" "}
              — avoiding features with low perceived value, high interaction complexity,
              durability risks, or maintenance burden.
            </p>
            <p className="font-mono text-sm uppercase leading-[1.2] text-muted">
              Soft-goods especialist at Dell.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
