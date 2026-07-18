// Spec: .claude/figma-specs/11-attributes-positioning-and-personas.md
import Chip from "@/components/Chip"
import PageScaleSection from "@/components/PageScaleSection"

import context367 from "@/assets/attributes-context/img-367.webp"
import context368 from "@/assets/attributes-context/img-368.webp"
import context369 from "@/assets/attributes-context/img-369.webp"
import context373 from "@/assets/attributes-context/img-373.webp"
import context374 from "@/assets/attributes-context/img-374.webp"
import context375 from "@/assets/attributes-context/img-375.webp"
import context377 from "@/assets/attributes-context/img-377.webp"
import context378 from "@/assets/attributes-context/img-378.webp"
import context379 from "@/assets/attributes-context/img-379.webp"
import context372 from "@/assets/attributes-context/img-372.webp"
import context382 from "@/assets/attributes-context/img-382.webp"
import context380 from "@/assets/attributes-context/img-380.webp"

import feel381 from "@/assets/attributes-feel/img-381.webp"
import feel383 from "@/assets/attributes-feel/img-383.webp"
import feel384 from "@/assets/attributes-feel/img-384.webp"
import feel385 from "@/assets/attributes-feel/img-385.webp"
import feel386 from "@/assets/attributes-feel/img-386.webp"
import feel387 from "@/assets/attributes-feel/img-387.webp"
import feel392 from "@/assets/attributes-feel/img-392.webp"
import feel402 from "@/assets/attributes-feel/img-402.webp"
import feel403 from "@/assets/attributes-feel/img-403.webp"
import feel404 from "@/assets/attributes-feel/img-404.webp"

import look395 from "@/assets/attributes-look/img-395.webp"
import look389 from "@/assets/attributes-look/img-389.webp"
import look390 from "@/assets/attributes-look/img-390.webp"
import look393 from "@/assets/attributes-look/img-393.webp"
import look394 from "@/assets/attributes-look/img-394.webp"
import look396 from "@/assets/attributes-look/img-396.webp"
import look397 from "@/assets/attributes-look/img-397.webp"
import look399 from "@/assets/attributes-look/img-399.webp"
import look400 from "@/assets/attributes-look/img-400.webp"
import look388 from "@/assets/attributes-look/img-388.webp"
import look401 from "@/assets/attributes-look/img-401.webp"
import look405 from "@/assets/attributes-look/img-405.webp"
import look398 from "@/assets/attributes-look/img-398.webp"
import look391 from "@/assets/attributes-look/img-391.webp"

type Rect = { left: number; top: number; width: number; height: number }
type Crop = { left: string; top: string; width: string; height: string }

type PhotoSpec = {
  src: string
  alt: string
  rect: Rect
  crop?: Crop
}

type ChipSpec = {
  label: string
  left: number
  top: number
  variant?: "default" | "faint" | "outlined"
}

function Photo({ src, alt, rect, crop }: PhotoSpec) {
  return (
    <div
      className="absolute overflow-hidden rounded-md"
      style={{ left: rect.left, top: rect.top, width: rect.width, height: rect.height }}
    >
      {crop ? (
        <img
          src={src}
          alt={alt}
          className="absolute max-w-none object-cover"
          style={{ left: crop.left, top: crop.top, width: crop.width, height: crop.height }}
        />
      ) : (
        <img src={src} alt={alt} className="absolute inset-0 size-full object-cover" />
      )}
    </div>
  )
}

function Collage({
  photos,
  chips,
  className = "",
}: {
  photos: PhotoSpec[]
  chips: ChipSpec[]
  className?: string
}) {
  return (
    // Fixed-geometry photo collage: the 816x459 canvas is scaled as a whole
    // via a container-query local-scale wrapper below `desk`, keeping every
    // photo crop and chip position proportionally intact. At >=desk the
    // wrapper is pinned to exactly 816px wide, so the scale factor is 1 and
    // rendering is pixel-identical to the original absolute layout.
    <div
      className={`relative w-full shrink-0 overflow-hidden [container-type:inline-size] desk:w-[816px] ${className}`}
      style={{ aspectRatio: "816 / 459" }}
    >
      <div className="absolute left-0 top-0 h-[459px] w-[816px] origin-top-left overflow-hidden bg-surface-alt [transform:scale(calc(100cqw/816px))]">
        {photos.map((photo, i) => (
          <Photo key={i} {...photo} />
        ))}
        {chips.map((chip) => (
          <Chip
            key={chip.label}
            variant={chip.variant}
            className="absolute"
            style={{ left: chip.left, top: chip.top }}
          >
            {chip.label}
          </Chip>
        ))}
      </div>
    </div>
  )
}

const positioningRows: { label: string; tags: string[] }[] = [
  { label: "POSITIONING", tags: ["Premium", "High-end", "Quality", "Exclusive", "Specialized"] },
  {
    label: "USER EXPERIENCE",
    tags: ["Intuitive", "Personalized", "Easy to use", "Frictionless", "Plug and play"],
  },
  {
    label: "PERFORMANCE",
    tags: ["Consistent", "Readiness", "Predictable", "Organized", "Reliable"],
  },
  { label: "VALUES", tags: ["Secure", "Green", "Safe", "Purpose-driven"] },
]

const contextPhotos: PhotoSpec[] = [
  { src: context367, alt: "Woman checking her phone", rect: { left: 624.75, top: 322.57, width: 191.25, height: 153 } },
  { src: context368, alt: "Colleagues reviewing a presentation on a screen", rect: { left: 281.78, top: 315.78, width: 202.725, height: 143.225 } },
  { src: context369, alt: "Woman walking with a laptop bag in a hotel lobby", rect: { left: 186.57, top: 0, width: 271.15, height: 180.625 } },
  { src: context373, alt: "Man checking his phone while standing", rect: { left: 141.95, top: 179.35, width: 141.1, height: 282.2 } },
  { src: context374, alt: "Man walking through a city street carrying a bag", rect: { left: 0, top: 206.97, width: 141.95, height: 252.025 } },
  {
    src: context375,
    alt: "Woman working on a laptop inside a car",
    rect: { left: 400.35, top: -21.25, width: 160.225, height: 275.4 },
    crop: { left: "-46.42%", top: "-51.98%", width: "174.54%", height: "152.56%" },
  },
  { src: context377, alt: "Woman drinking coffee by a plane window", rect: { left: 650.25, top: 156.82, width: 165.75, height: 165.75 } },
  {
    src: context378,
    alt: "Group of executives talking in a lounge",
    rect: { left: 280.93, top: 160.65, width: 203.575, height: 155.125 },
    crop: { left: "0%", top: "-39.67%", width: "100%", height: "197.04%" },
  },
  { src: context379, alt: "Interior of an executive meeting room", rect: { left: -2.13, top: -143.22, width: 195.559, height: 350.2 } },
  {
    src: context372,
    alt: "Group of business people talking while walking",
    rect: { left: 641.32, top: -21.25, width: 174.675, height: 181.9 },
    crop: { left: "0%", top: "-27.4%", width: "99.97%", height: "143.03%" },
  },
  { src: context382, alt: "Laptop and phone on a table", rect: { left: 484.58, top: 254.15, width: 165.75, height: 207.4 } },
  { src: context380, alt: "Close-up of a laptop bag and accessories", rect: { left: 537.2, top: -3.4, width: 113.05, height: 257.55 } },
]

const contextChips: ChipSpec[] = [
  { label: "Mobile professional", left: 469.2, top: 199.32 },
  { label: "Luxury-adjacent", left: 601.8, top: 302.6 },
  { label: "Best-in-class products", left: 437.75, top: 414.8 },
  { label: "Car meetings", left: 553.77, top: 16.57 },
  { label: "Hotel routine", left: 180.63, top: 342.55, variant: "faint" },
  { label: "C-suite aesthetic", left: 45.48, top: 389.73 },
  { label: "Client presentations", left: 357, top: 303.03 },
  { label: "Airport lounges", left: 331.5, top: 136 },
  { label: "Executive environments", left: 73.95, top: 130.9 },
]

const feelPhotos: PhotoSpec[] = [
  { src: feel381, alt: "Steering wheel of a luxury car", rect: { left: 0, top: 0, width: 232.05, height: 290.275 } },
  {
    src: feel383,
    alt: "Bedroom dresser with an open drawer of organized accessories",
    rect: { left: 232.05, top: -60.77, width: 271.575, height: 290.275 },
    crop: { left: "0%", top: "0%", width: "100.07%", height: "125.42%" },
  },
  { src: feel384, alt: "Charging case with wireless earbuds", rect: { left: 503.63, top: -19.98, width: 180.2, height: 180.2 } },
  { src: feel385, alt: "Chess set and travel accessories", rect: { left: 651.53, top: 239.27, width: 164.475, height: 219.725 } },
  { src: feel386, alt: "Leather-wrapped travel case", rect: { left: 503.63, top: 268.17, width: 147.9, height: 197.2 } },
  {
    src: feel387,
    alt: "Organized travel case with electronics compartments",
    rect: { left: 503.63, top: 158.52, width: 147.9, height: 130.9 },
    crop: { left: "-0.1%", top: "-12.95%", width: "100%", height: "112.99%" },
  },
  { src: feel392, alt: "Work-from-anywhere travel kit contents", rect: { left: 651.53, top: -5.95, width: 164.475, height: 246.925 } },
  {
    src: feel402,
    alt: "Portable speaker on a shelf",
    rect: { left: 0, top: 290.27, width: 161.075, height: 168.725 },
    crop: { left: "-1.96%", top: "-25.5%", width: "104.04%", height: "149.01%" },
  },
  { src: feel403, alt: "Organized laptop case with cables", rect: { left: 354.45, top: 284.32, width: 147.05, height: 149.6 } },
  { src: feel404, alt: "Hand entering a code on a digital door lock", rect: { left: 161.07, top: 229.5, width: 181.475, height: 232.475 } },
]

const feelChips: ChipSpec[] = [
  { label: "Exclusive", left: 44.63, top: 240.97 },
  { label: "Realiable", left: 663.42, top: 256.28 },
  { label: "Intuitive", left: 476, top: 112.63 },
  { label: "Readiness", left: 700.83, top: 99.88 },
  { label: "Secure", left: 476, top: 305.15, variant: "outlined" },
  { label: "Familiar", left: 238.85, top: 250.75 },
  { label: "All in", left: 114.33, top: 325.98 },
  { label: "Organized", left: 412.25, top: 215.9, variant: "outlined" },
]

const lookPhotos: PhotoSpec[] = [
  { src: look395, alt: "Close-up of stitched leather material", rect: { left: 281.35, top: 325.98, width: 119, height: 133.025 } },
  {
    src: look389,
    alt: "Person walking with a leather bag and laptop",
    rect: { left: 151.73, top: -3.4, width: 275.4, height: 211.65 },
    crop: { left: "-0.02%", top: "-42.5%", width: "100%", height: "130.04%" },
  },
  { src: look390, alt: "Hard-shell travel case interior", rect: { left: 422.02, top: -21.67, width: 190.825, height: 176.375 } },
  { src: look393, alt: "Folded soft-goods material detail", rect: { left: 697, top: 347.23, width: 119, height: 124.1 } },
  {
    src: look394,
    alt: "Briefcase being carried by a person in a suit",
    rect: { left: 265.2, top: 178.07, width: 175.1, height: 155.975 },
    crop: { left: "-6.29%", top: "-12.44%", width: "100%", height: "112.45%" },
  },
  { src: look396, alt: "Cables organized inside a travel case", rect: { left: 400.35, top: 334.05, width: 124.95, height: 124.95 } },
  { src: look397, alt: "Zippered accessory case", rect: { left: 697, top: 201.88, width: 119, height: 158.525 } },
  { src: look399, alt: "Compact hard-shell case detail", rect: { left: 561, top: 197.63, width: 137.7, height: 137.7 } },
  { src: look400, alt: "Rigid travel case standing upright", rect: { left: -4.25, top: -21.67, width: 155.975, height: 311.95 } },
  {
    src: look388,
    alt: "Person carrying a leather briefcase outdoors",
    rect: { left: 525.3, top: 335.33, width: 173.4, height: 133.45 },
    crop: { left: "0%", top: "-27.23%", width: "100%", height: "127.28%" },
  },
  { src: look401, alt: "Detail of a leather bag handle", rect: { left: 151.73, top: 153.43, width: 113.475, height: 151.725 } },
  {
    src: look405,
    alt: "Person handing over a leather portfolio",
    rect: { left: 580.97, top: -3.4, width: 235.025, height: 206.55 },
    crop: { left: "-0.08%", top: "-30.41%", width: "100%", height: "142.29%" },
  },
  {
    src: look398,
    alt: "Electronics laid out beside a leather case",
    rect: { left: 422.02, top: 147.9, width: 158.95, height: 187.425 },
    crop: { left: "0%", top: "-20.27%", width: "100%", height: "127.98%" },
  },
  {
    src: look391,
    alt: "Cables and adapters organized in a case",
    rect: { left: 0, top: 290.27, width: 281.35, height: 168.725 },
    crop: { left: "0%", top: "-10.59%", width: "100%", height: "145.38%" },
  },
]

const lookChips: ChipSpec[] = [
  { label: "Compact", left: 710.6, top: 163.63 },
  { label: "Resistant", left: 525.3, top: 14.88 },
  { label: "High-end", left: 373.58, top: 14.88 },
  { label: "Premium materials", left: 124.95, top: 108.38 },
  { label: "Soft goods inside", left: 153, top: 280.92 },
  { label: "Stable", left: 352.75, top: 172.98 },
  { label: "Cables organized", left: 554.2, top: 417.35 },
  { label: "Electronics integration", left: 274.98, top: 422.45 },
  { label: "Lather finishes", left: 537.63, top: 296.23 },
  { label: "Safe", left: 477.27, top: 344.67 },
  { label: "Rigid structure", left: 658, top: 331 },
  { label: "Visibility", left: 19.98, top: 173.4, variant: "faint" },
]

export default function AttributesPositioning() {
  return (
    <PageScaleSection
      id="attributes"
      height={2219}
      canvasClassName="flex max-w-[1366px] flex-col gap-12 px-6 py-12 md:gap-16 md:px-16 md:py-16"
    >
        <h2 className="whitespace-nowrap font-sans text-[clamp(2rem,4.7vw,4rem)] font-normal uppercase leading-[0.96] text-ink desk:absolute desk:left-[64px] desk:top-[86px] desk:w-[369px] desk:text-[64px]">
          Attributes
        </h2>

        <div className="flex w-full flex-col desk:absolute desk:left-[485px] desk:top-[86px] desk:h-[206px] desk:w-[817px]">
          {positioningRows.map((row, i) => (
            <div
              key={row.label}
              className={`flex flex-col gap-2 border-t border-muted py-4 desk:flex-[1_0_0] desk:flex-row desk:items-center desk:gap-[33px] desk:py-0 ${
                i === positioningRows.length - 1 ? "border-b" : ""
              }`}
            >
              <span className="font-mono text-base font-semibold uppercase tracking-[3.2px] text-ink desk:w-[200px] desk:shrink-0">
                {row.label}
              </span>
              <div className="flex flex-wrap gap-x-4 gap-y-2 desk:flex-1 desk:flex-nowrap desk:gap-[24px]">
                {row.tags.map((tag) => (
                  <span key={tag} className="font-sans text-base text-muted desk:text-center">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex w-full flex-col gap-16 desk:absolute desk:left-[64px] desk:top-[448px] desk:w-[1238px] desk:gap-0">
          <div className="flex flex-col gap-6 desk:flex-row desk:gap-[24px]">
            <p className="w-full font-sans text-base leading-[1.2] text-muted desk:order-2 desk:w-[264px]">
              Who the users are and the context in which they use the product.
            </p>
            <Collage photos={contextPhotos} chips={contextChips} className="desk:order-1" />
          </div>

          <div className="flex flex-col gap-6 desk:mt-[115px] desk:flex-row desk:justify-end desk:gap-[25px]">
            <p className="w-full font-sans text-base leading-[1.2] text-muted desk:w-[176px] desk:text-right">
              How the product should make users feel.
            </p>
            <Collage photos={feelPhotos} chips={feelChips} />
          </div>

          <div className="flex flex-col gap-6 desk:mt-[115px] desk:flex-row desk:gap-[25px]">
            <p className="w-full font-sans text-base leading-[1.2] text-muted desk:order-2 desk:w-[397px]">
              How the product should look and visually communicate its identity.
            </p>
            <Collage photos={lookPhotos} chips={lookChips} className="desk:order-1" />
          </div>
        </div>
    </PageScaleSection>
  )
}
