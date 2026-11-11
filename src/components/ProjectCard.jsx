import { ArrowUpRight } from "lucide-react";
import ProjectVisual from "./ProjectVisual";

function LinkButton({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="btn-rosso inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs uppercase tracking-[0.14em]"
    >
      {children}
      <ArrowUpRight size={14} aria-hidden="true" />
    </a>
  );
}

export default function ProjectCard({ project, featured = false, onOpen }) {
  return (
    <article
      className={`card-rosso-interactive group relative flex h-full flex-col overflow-hidden rounded-2xl ${
        featured ? "lg:grid lg:grid-cols-2" : ""
      }`}
    >
      <span
        className="pointer-events-none absolute inset-x-12 top-0 z-20 h-px bg-gradient-to-r from-transparent via-signal/60 to-transparent opacity-70 transition group-hover:opacity-100"
        aria-hidden="true"
      />
      <button
        type="button"
        onClick={() => onOpen(project)}
        className={`relative block w-full overflow-hidden border-line/80 text-left ${
          featured ? "border-b lg:h-full lg:border-b-0 lg:border-r" : "border-b"
        }`}
        aria-label={`View ${project.title} details`}
      >
        <ProjectVisual
          src={project.image}
          title={project.title}
          projectId={project.id}
          className={featured ? "aspect-[16/10] lg:h-full lg:aspect-auto lg:min-h-[340px]" : "aspect-[16/10]"}
        />
        <span
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-ink/65 to-transparent"
          aria-hidden="true"
        />
      </button>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-ember shadow-[0_0_8px_#b8256f]" />
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-signal">
            {featured ? "Featured system" : "System"}
          </p>
        </div>

        <h3 className="mt-2.5 font-serif text-[1.85rem] leading-tight text-paper">
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="text-left transition hover:text-signal-bright"
          >
            {project.title}
          </button>
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-body">{project.summary}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, featured ? 8 : 4).map((tech) => (
            <li
              key={tech}
              className="rounded-lg border border-crimson/35 bg-ink/80 px-2.5 py-1 font-mono text-xs text-body"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-2.5 pt-6">
          {project.liveUrl ? <LinkButton href={project.liveUrl}>Live Demo</LinkButton> : null}
          {project.githubUrl ? <LinkButton href={project.githubUrl}>GitHub</LinkButton> : null}
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="btn-gold inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em]"
          >
            View Details
            <ArrowUpRight size={14} aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
}
