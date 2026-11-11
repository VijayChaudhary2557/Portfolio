import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import ProfilePortrait from "../components/ProfilePortrait";
import { experience, hero, profile, roles } from "../data/portfolioData";
import useTypewriter from "../hooks/useTypewriter";

const focusAreas = ["MERN Stack", "Electron Desktop", "Leaflet & GeoTIFF", "ISRO APIs"];

export default function Hero() {
  const typed = useTypewriter(roles);
  const reduce = useReducedMotion();
  const current = experience[0];
  const nameParts = profile.fullName.split(" ");
  const firstName = nameParts[0];
  const restName = nameParts.slice(1).join(" ");

  const LeftWrapper = reduce ? "div" : motion.div;
  const RightWrapper = reduce ? "div" : motion.div;

  return (
    <section id="home" className="relative scroll-mt-24 overflow-hidden">
      {/* Hero Royal Plum focal bloom */}
      <div
        className="pointer-events-none absolute right-[-8%] top-20 h-[34rem] w-[34rem] rounded-full opacity-38 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(156, 29, 97, 0.64) 0%, rgba(92, 13, 55, 0.32) 50%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto grid min-h-[calc(100svh-3rem)] max-w-6xl items-center gap-12 px-5 pb-20 pt-28 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:pt-24">
        <LeftWrapper
          className="min-w-0"
          {...(!reduce
            ? {
                initial: { opacity: 0, x: -42 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
              }
            : {})}
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-crimson/55 bg-raised/70 px-3.5 py-1.5 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-ember shadow-[0_0_10px_#b8256f]" />
            <span className="font-mono text-xs uppercase tracking-[0.12em] text-body">
              {current.role} · <span className="text-signal-bright">{current.company}</span>
            </span>
          </div>

          <p className="mt-7 font-mono text-xs uppercase tracking-[0.16em] text-signal">{hero.greeting}</p>
          <h1 className="mt-3 max-w-xl font-serif text-[3.4rem] leading-[0.95] text-paper sm:text-7xl">
            {firstName}{" "}
            {restName ? <span className="text-gold-gradient">{restName}</span> : null}
          </h1>

          {profile.alternateName ? (
            <div className="mt-3.5 inline-flex flex-wrap items-center gap-2.5 rounded-xl border border-signal/40 bg-gradient-to-r from-raised/90 via-panel/85 to-ink/90 px-4 py-2 shadow-[0_10px_28px_-14px_rgba(184,37,111,0.68)] backdrop-blur-sm">
              <span
                className="h-2 w-2 rounded-full bg-signal shadow-[0_0_8px_rgba(229,188,91,0.9)]"
                aria-hidden="true"
              />
              <p className="text-sm text-body sm:text-base">
                Also known as{" "}
                <span className="font-serif text-base font-semibold text-signal-bright sm:text-xl">
                  {profile.alternateName}
                </span>
              </p>
            </div>
          ) : null}

          <p className="sr-only">
            {profile.fullName}
            {profile.alternateName ? ` (${profile.alternateName})` : ""} · Roles: {roles.join(", ")}
          </p>
          <p
            className="mt-5 min-h-[4.2rem] max-w-xl font-serif text-[1.75rem] leading-tight sm:min-h-[3.2rem] sm:text-4xl"
            aria-hidden="true"
          >
            <span className="text-rosso-gradient">{typed}</span>
            <span className="caret" />
          </p>

          <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-body">{hero.bio}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={profile.resumeUrl}
              download
              className="btn-gold inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold"
            >
              <Download size={16} aria-hidden="true" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="btn-rosso inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium"
            >
              Contact Me
              <ArrowRight size={15} className="text-signal" aria-hidden="true" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="btn-rosso grid h-11 w-11 place-items-center rounded-xl"
            >
              <FaGithub size={17} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="btn-rosso grid h-11 w-11 place-items-center rounded-xl"
            >
              <FaLinkedinIn size={16} />
            </a>
          </div>

          <div className="mt-10 border-t border-line/80 pt-6">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-mute">Core Focus</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {focusAreas.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-crimson/35 bg-panel/70 px-3 py-1.5 font-mono text-xs text-body"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </LeftWrapper>

        <RightWrapper
          className="min-w-0"
          {...(!reduce
            ? {
                initial: { opacity: 0, x: 42, scale: 0.96 },
                animate: { opacity: 1, x: 0, scale: 1 },
                transition: { duration: 0.78, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
              }
            : {})}
        >
          <ProfilePortrait
            src={profile.profileImage}
            name={profile.fullName}
            role={current.role}
            company={current.company}
            period={current.period}
            location={profile.location}
          />
        </RightWrapper>
      </div>
    </section>
  );
}
