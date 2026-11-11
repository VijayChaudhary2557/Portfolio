import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useRef } from "react";
import ProjectVisual from "./ProjectVisual";

function ExternalLink({ href, children }) {
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

export default function ProjectModal({ project, onClose }) {
  const reduce = useReducedMotion();
  const closeRef = useRef(null);

  useEffect(() => {
    if (!project) return undefined;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  const fade = reduce ? { duration: 0 } : { duration: 0.22 };

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center bg-[#060105]/86 p-0 backdrop-blur-md sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={fade}
          onClick={onClose}
          role="presentation"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            className="card-rosso max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-2xl sm:max-h-[88vh] sm:rounded-2xl"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
            transition={fade}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-line/90 bg-panel/95 px-5 py-3.5 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-ember shadow-[0_0_8px_#b8256f]" />
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-signal-bright">
                  Project Case Study
                </p>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                className="btn-rosso grid h-9 w-9 place-items-center rounded-lg"
                aria-label="Close project details"
              >
                <X size={16} />
              </button>
            </div>

            <ProjectVisual
              src={project.image}
              title={project.title}
              projectId={project.id}
              className="aspect-[16/9] border-b border-line/80"
            />

            <div className="space-y-8 px-5 py-6 sm:px-8 sm:py-8">
              <div>
                <h2 id="project-dialog-title" className="font-serif text-4xl text-gold-gradient">
                  {project.title}
                </h2>
                <p className="mt-4 text-[15.5px] leading-relaxed text-body">{project.description}</p>
              </div>

              <div className="grid gap-4 border-t border-line/80 pt-6 sm:grid-cols-2">
                <div className="rounded-xl border border-line/80 bg-ink/70 p-4">
                  <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-signal">Objective</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{project.objective}</p>
                </div>
                <div className="rounded-xl border border-line/80 bg-ink/70 p-4">
                  <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-signal">Role</h3>
                  <p className="mt-2 text-sm font-medium text-paper">{project.role}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-body">{project.contribution}</p>
                </div>
              </div>

              <div>
                <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-signal">Key features</h3>
                <ul className="mt-3 space-y-3">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm leading-relaxed text-body">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember shadow-[0_0_6px_#b8256f]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {project.challenges.length ? (
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-signal">
                    Challenges solved
                  </h3>
                  <ul className="mt-3 space-y-3">
                    {project.challenges.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed text-body">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal shadow-[0_0_6px_#e5bc5b]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div>
                <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-mute">Technologies</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-lg border border-crimson/40 bg-ink/85 px-3 py-1 font-mono text-xs text-paper"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {project.liveUrl || project.githubUrl ? (
                <div className="flex flex-wrap gap-2.5 border-t border-line/80 pt-6">
                  {project.liveUrl ? <ExternalLink href={project.liveUrl}>Live Demo</ExternalLink> : null}
                  {project.githubUrl ? <ExternalLink href={project.githubUrl}>GitHub</ExternalLink> : null}
                </div>
              ) : (
                <p className="border-t border-line/80 pt-6 text-sm text-mute">
                  Packaged desktop software built for client distribution; live preview available on request.
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
