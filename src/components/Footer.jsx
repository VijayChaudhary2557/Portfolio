import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { navLinks, profile } from "../data/portfolioData";
import Reveal from "./Reveal";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-ink via-[#12030e] to-abyss">
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(122, 20, 75, 0.72) 25%, rgba(247, 237, 226, 0.58) 50%, rgba(122, 20, 75, 0.72) 75%, transparent 100%)",
        }}
      />
      <Reveal direction="up" distance={28}>
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.3fr_1fr_auto] md:items-start">
          <div>
            <p className="font-serif text-2xl text-gold-gradient">{profile.fullName}</p>
            {profile.alternateName ? (
              <p className="mt-1 font-serif text-base text-signal-bright/95">
                {profile.alternateName}
              </p>
            ) : null}
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-mute">{profile.tagline}</p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-2.5">
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} className="text-sm text-mute transition hover:text-signal-bright">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-2.5">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="btn-rosso grid h-10 w-10 place-items-center rounded-lg"
            >
              <FaGithub size={16} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="btn-rosso grid h-10 w-10 place-items-center rounded-lg"
            >
              <FaLinkedinIn size={15} />
            </a>
          </div>
        </div>
      </Reveal>
      <div className="border-t border-line/70">
        <p className="mx-auto max-w-6xl px-5 py-4 font-mono text-xs tracking-[0.06em] text-mute sm:px-8">
          © {year} {profile.fullName}
          {profile.alternateName ? ` (${profile.alternateName})` : ""}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
