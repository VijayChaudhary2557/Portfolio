import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { about, countTechnologies, education, experience, profile, projects } from "../data/portfolioData";
import { totalExperience } from "../utils/duration";

const statDirections = ["down", "right", "left", "up"];

export default function About() {
  const experienceLabel = totalExperience(experience).label;
  const highlights = [
    { label: "Total Experience", value: experienceLabel, note: "Since Feb 2026" },
    { label: "Projects Shipped", value: String(projects.length), note: "Across web, desktop & GIS" },
    { label: "Technologies", value: String(countTechnologies()), note: "Active across stack" },
    {
      label: "Current Role",
      value: profile.role,
      note: experience[0].company,
      compact: true,
    },
  ];

  return (
    <section id="about" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          index="01"
          eyebrow="About"
          title="Software for maps, operations, and the desktop."
          description="A development background built on the MERN stack, geospatial data, and the systems I ship at Agrocast Analytics."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div>
            <Reveal direction="left">
              <div className="relative space-y-5 pl-6 text-[15.5px] leading-relaxed text-body">
                <div
                  className="pointer-events-none absolute bottom-1 left-0 top-1 w-0.5 rounded-full"
                  style={{
                    background: "linear-gradient(180deg, #f7ede2 0%, #e5bc5b 35%, #b8256f 70%, rgba(122, 20, 75, 0.18) 100%)",
                  }}
                  aria-hidden="true"
                />
                {about.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <div className="mt-10 border-t border-line/80 pt-7">
              <Reveal direction="left" distance={24}>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-signal-bright">Education</p>
              </Reveal>
              <ul className="mt-4 space-y-3">
                {education.map((item, idx) => (
                  <li key={item.degree}>
                    <Reveal direction="up" delay={idx * 0.08} distance={24}>
                      <div className="card-rosso-interactive flex flex-col gap-3 rounded-xl px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="font-medium text-paper">{item.degree}</p>
                          <p className="mt-0.5 text-sm text-mute">{item.school}</p>
                        </div>
                        <div className="flex shrink-0 flex-wrap items-center gap-2">
                          {item.cgpa ? (
                            <span className="rounded-full border border-ember/45 bg-crimson/20 px-3 py-1 font-mono text-xs text-paper">
                              <span className="text-signal-bright">{item.cgpa}</span> CGPA
                            </span>
                          ) : null}
                          <span className="w-fit rounded-full border border-signal/35 bg-ink/80 px-3 py-1 font-mono text-xs text-signal-bright">
                            {item.period}
                          </span>
                        </div>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 self-start">
            {highlights.map((item, idx) => (
              <Reveal
                key={item.label}
                direction={statDirections[idx % statDirections.length]}
                delay={idx * 0.07}
                className="h-full"
              >
                <div
                  className={`card-rosso-interactive flex h-full flex-col justify-between rounded-2xl p-5 sm:p-6 ${
                    idx === 0 || idx === 3 ? "bg-gradient-to-br from-raised/85 to-ink" : ""
                  }`}
                >
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.12em] text-mute">{item.label}</p>
                    <p
                      className={`mt-4 font-serif leading-tight ${
                        item.compact
                          ? "text-[1.45rem] text-paper"
                          : "text-3xl text-gold-gradient sm:text-4xl"
                      }`}
                    >
                      {item.value}
                    </p>
                  </div>
                  <p className="mt-4 border-t border-line/70 pt-3 text-xs leading-relaxed text-mute">{item.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
