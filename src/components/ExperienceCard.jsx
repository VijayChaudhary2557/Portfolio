import { getDuration } from "../utils/duration";

export default function ExperienceCard({ job }) {
  const duration = getDuration(job.startDate, job.endDate);

  return (
    <article className="card-rosso-interactive rounded-2xl p-6 sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-line/80 pb-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-signal-bright">{job.period}</p>
          <h3 className="mt-2 font-serif text-3xl text-paper">{job.role}</h3>
          <p className="mt-1 text-body">{job.company}</p>
        </div>
        <p className="rounded-full border border-signal/35 bg-ink/80 px-3.5 py-1.5 font-mono text-xs uppercase tracking-[0.12em] text-signal-bright">
          {duration.label}
        </p>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <div className="rounded-xl border border-line/80 bg-ink/65 p-5">
          <h4 className="font-mono text-xs uppercase tracking-[0.14em] text-signal">Responsibilities</h4>
          <ul className="mt-3.5 space-y-3">
            {job.responsibilities.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-body">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember shadow-[0_0_6px_#b8256f]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-line/80 bg-ink/65 p-5">
          <h4 className="font-mono text-xs uppercase tracking-[0.14em] text-signal">Contributions</h4>
          <ul className="mt-3.5 space-y-3">
            {job.contributions.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-body">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal shadow-[0_0_6px_#e5bc5b]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 border-t border-line/80 pt-5">
        <h4 className="font-mono text-xs uppercase tracking-[0.14em] text-mute">Technologies</h4>
        <ul className="mt-3 flex flex-wrap gap-2">
          {job.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-lg border border-crimson/40 bg-ink/85 px-3 py-1 font-mono text-xs text-paper"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
