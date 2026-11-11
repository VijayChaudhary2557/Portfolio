import { useCallback, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { projects } from "../data/portfolioData";

export default function Projects() {
  const [active, setActive] = useState(null);
  const close = useCallback(() => setActive(null), []);
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          index="05"
          eyebrow="Projects"
          title="Five production systems, built to ship."
          description="Geospatial imagery, enterprise ERP, thermal desktop tooling, UAV procurement, and .NET web modernization. Each card opens the full write-up."
        />

        <div className="mt-12 space-y-6">
          {featured ? (
            <Reveal direction="up" scale={0.97} duration={0.7}>
              <ProjectCard project={featured} featured onOpen={setActive} />
            </Reveal>
          ) : null}

          <div className="grid gap-6 lg:grid-cols-2">
            {rest.map((project, index) => (
              <Reveal
                key={project.id}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={(index % 2) * 0.08}
                className="h-full"
              >
                <ProjectCard project={project} onOpen={setActive} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <ProjectModal project={active} onClose={close} />
    </section>
  );
}
