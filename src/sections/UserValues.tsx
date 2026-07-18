import PageScaleSection from "@/components/PageScaleSection"
import techFlatlay from "@/assets/user-values-tech-flatlay.webp"
import clientMeeting from "@/assets/user-values-client-meeting.webp"

export default function UserValues() {
  return (
    <PageScaleSection
      id="user-values"
      height={977}
      canvasClassName="flex max-w-none flex-col gap-12 py-12 md:gap-16 md:py-16"
    >
        <div className="flex w-full flex-col px-6 md:px-16 desk:absolute desk:left-[64px] desk:top-[86px] desk:w-[420px] desk:px-0">
          <p className="font-sans text-[clamp(2rem,4.7vw,4rem)] font-normal uppercase leading-[0.96] text-ink desk:text-[64px]">
            User
          </p>
          <p className="font-sans text-[clamp(2rem,4.7vw,4rem)] font-normal uppercase leading-[0.96] text-ink desk:text-[64px]">
            Values
          </p>
        </div>

        {/* "Sense of Control" — invented as the mobile-stack's lead/intro value statement. */}
        <div className="flex w-full flex-col items-start gap-6 border-t border-muted px-6 py-8 md:px-16 md:py-10 desk:absolute desk:left-[64px] desk:top-[305px] desk:h-[298px] desk:w-[399px] desk:justify-end desk:border-r desk:px-6 desk:py-6">
          <p className="font-sans text-[clamp(1.375rem,2.6vw,2.25rem)] font-semibold leading-none text-ink desk:text-[36px]">
            Sense of Control
          </p>
          <p className="font-sans text-base leading-[1.2] text-muted">
            For users with demanding mobile routines, preparation is essential. They value
            being able to plan ahead, know exactly what they are carrying, and feel confident
            that every work essential is available when needed. Control reduces uncertainty
            and allows them to focus on the work itself rather than logistics.
          </p>
        </div>

        {/* Accent card, promoted directly after the intro box in the invented mobile order. */}
        <div className="flex w-full flex-col items-start gap-6 border-t border-muted bg-accent px-6 py-8 md:px-16 md:py-10 desk:absolute desk:left-[66px] desk:top-[603px] desk:h-[288px] desk:w-[397px] desk:justify-end desk:border-r desk:px-6 desk:py-6">
          <p className="font-sans text-[clamp(1.375rem,2.6vw,2.25rem)] font-semibold leading-none text-white desk:text-[36px]">
            Emotional Stability
          </p>
          <p className="font-sans text-base leading-[1.2] text-white/82">
            Because their workday constantly shifts across locations, users rely on familiar
            tools and routines to create a sense of continuity. A consistent setup becomes an
            emotional anchor, helping them feel grounded even when the environment changes.
            Reliability, familiarity, and predictability are highly valued.
          </p>
        </div>

        <div className="relative aspect-[839/263] w-full border-muted desk:absolute desk:left-[463px] desk:top-[86px] desk:aspect-auto desk:h-[263px] desk:w-[839px] desk:border-l desk:border-t">
          <img
            src={techFlatlay}
            alt="Flat-lay photo of tech and travel accessories on a dark surface, including cables, a charger, a phone, a mouse, a laptop, a headphone case, wireless earbuds, and a notebook"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex w-full flex-col items-start gap-6 border-t border-muted px-6 py-8 md:px-16 md:py-10 desk:absolute desk:left-[463px] desk:top-[349px] desk:h-[203px] desk:w-[839px] desk:justify-end desk:px-6 desk:py-6">
          <p className="font-sans text-[clamp(1.375rem,2.6vw,2.25rem)] font-semibold leading-none text-ink desk:text-[36px]">
            Professional Credibility
          </p>
          <p className="font-sans text-base leading-[1.2] text-muted">
            Users see their work tools as an extension of their professional image. The
            devices, accessories, and workspace they bring into client environments help
            signal competence, discipline, and brand alignment. A polished kit is not only
            useful — it reinforces trust and can even become part of the sales conversation.
          </p>
        </div>

        {/* Client Presence + client-meeting photo were side-by-side at the same row in the
            desktop grid, so they're paired again here at sm+ via grid-cols-2. desk:contents
            drops this wrapper from the box model so the two children resume their exact
            flattened absolute coordinates at desk. */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 desk:contents">
          <div className="flex w-full flex-col items-start gap-6 border-t border-muted px-6 py-8 md:px-16 md:py-10 desk:absolute desk:left-[463px] desk:top-[552px] desk:h-[339px] desk:w-[301px] desk:justify-end desk:px-6 desk:py-6">
            <p className="font-sans text-[clamp(1.375rem,2.6vw,2.25rem)] font-semibold leading-none text-ink desk:text-[36px]">
              Client Presence
            </p>
            <p className="font-sans text-base leading-[1.2] text-muted">
              Users want the client meeting to feel protected from interruptions. They value
              solutions that help them arrive prepared, stay focused, and avoid visible friction
              during critical moments. The goal is to be fully present, attentive, and composed
              when interacting with clients.
            </p>
          </div>

          <div className="relative aspect-[538/339] w-full border-t border-muted desk:absolute desk:left-[764px] desk:top-[552px] desk:aspect-auto desk:h-[339px] desk:w-[538px]">
            <img
              src={clientMeeting}
              alt="Two men in a business meeting at a table beside floor-to-ceiling windows, one using a laptop"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
    </PageScaleSection>
  )
}
