import ExperienceCard from "../components/ExperienceCard";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { experience } from "../data/portfolioData";
import { totalExperience } from "../utils/duration";

export default function Experience() {
  const total = totalExperience(experience);

  return (
    <section id="experience" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          index="04"
          eyebrow="Experience"
          title="Production software at Agrocast Analytics."
          description="Web applications, desktop tools, and geospatial systems for a company working with maps and operational data."
        />

        <Reveal direction="down" delay={0.05}>
          <div className="card-rosso mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl px-6 py-5">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-signal">
                Total professional experience
              </p>
              <p className="mt-1 font-serif text-4xl text-gold-gradient">{total.label}</p>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-body">
              Counted from February 2026, when I joined Agrocast Analytics. The role is current.
            </p>
          </div>
        </Reveal>

        <ol className="relative mt-10 ml-2 pl-7">
          <div
            className="pointer-events-none absolute bottom-0 left-0 top-2 w-px"
            style={{
              background:
                "linear-gradient(180deg, #f7ede2 0%, rgba(184, 37, 111, 0.78) 65%, transparent 100%)",
            }}
            aria-hidden="true"
          />
          {experience.map((job) => (
            <li key={job.id} className="relative pb-2">
              <span
                className="absolute -left-[33px] top-8 grid h-3 w-3 place-items-center rounded-full border border-paper bg-ember shadow-[0_0_12px_rgba(247,237,226,0.65)]"
                aria-hidden="true"
              />
              <Reveal direction="right" delay={0.08}>
                <ExperienceCard job={job} />
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
