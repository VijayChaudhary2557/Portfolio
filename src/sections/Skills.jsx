import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SkillCard from "../components/SkillCard";
import { skillGroups } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          index="02"
          eyebrow="Skills"
          title="The stack I actually work in."
          description="Grouped the way it appears on my resume: interface, server, data, maps, desktop, and the tools around them."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal
              key={group.id}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={Math.min(Math.floor(index / 2) * 0.07, 0.21)}
              className="h-full"
            >
              <div className="card-rosso-interactive flex h-full flex-col rounded-2xl p-6">
                <div className="flex items-center justify-between gap-3 border-b border-line/80 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-paper shadow-[0_0_8px_rgba(247,237,226,0.7)]" />
                    <h3 className="font-serif text-2xl text-paper">{group.title}</h3>
                  </div>
                  <span className="rounded-full border border-crimson/40 bg-ink/80 px-2.5 py-0.5 font-mono text-xs uppercase tracking-[0.1em] text-mute">
                    {group.items.length}
                  </span>
                </div>

                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <SkillCard key={item.name} name={item.name} icon={item.icon} />
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
