import Reveal from "./Reveal";

export default function SectionHeading({ index, eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      <Reveal direction="down" distance={22} duration={0.55}>
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-crimson/55 bg-gradient-to-b from-raised/90 to-ink/95 px-3.5 py-1 shadow-[0_0_22px_-6px_rgba(184,37,111,0.65)]">
            <span className="h-1.5 w-1.5 rounded-full bg-ember shadow-[0_0_8px_#b8256f]" />
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-signal-bright">
              {index}
              <span className="mx-2 text-signal/40">/</span>
              {eyebrow}
            </p>
          </div>
          <span
            className="hidden h-px w-20 bg-gradient-to-r from-signal/60 to-transparent sm:block"
            aria-hidden="true"
          />
        </div>
      </Reveal>

      <Reveal direction="left" distance={34} delay={0.07} duration={0.62}>
        <h2 className="mt-4 font-serif text-[2.5rem] leading-[1.06] text-paper sm:text-5xl">{title}</h2>
      </Reveal>

      {description ? (
        <Reveal direction="up" distance={22} delay={0.14} duration={0.6}>
          <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-body">{description}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
