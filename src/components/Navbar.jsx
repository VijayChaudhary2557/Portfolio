import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, profile } from "../data/portfolioData";
import useActiveSection from "../hooks/useActiveSection";

const sectionIds = navLinks.map((link) => link.id);

export default function Navbar() {
  const active = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-crimson/40 bg-[#0c0209]/82 backdrop-blur-xl">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px opacity-75"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(122, 20, 75, 0.55) 25%, rgba(247, 237, 226, 0.45) 50%, rgba(122, 20, 75, 0.55) 75%, transparent 100%)",
        }}
      />
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#home" className="group flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-signal/45 bg-gradient-to-br from-raised via-panel to-ink font-serif text-lg text-signal-bright shadow-[0_0_20px_-6px_rgba(184,37,111,0.75)] transition group-hover:border-paper/70">
            V
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-serif text-[1.1rem] text-paper transition group-hover:text-signal-bright">
              {profile.fullName}
            </span>
            <span className="hidden text-xs font-medium tracking-[0.04em] text-signal-bright/90 sm:block">
              {profile.alternateName || "Software Developer"}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-0.5 rounded-full border border-line/90 bg-onyx/75 px-2 py-1 lg:flex xl:gap-1" aria-label="Primary">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative whitespace-nowrap rounded-full px-2.5 py-1.5 text-sm transition xl:px-3.5 ${
                  isActive
                    ? "bg-gradient-to-r from-crimson/55 to-raised/90 font-medium text-paper shadow-[inset_0_0_0_1px_rgba(247,237,226,0.38)]"
                    : "text-mute hover:text-paper"
                }`}
                aria-current={isActive ? "true" : undefined}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="btn-gold hidden rounded-lg px-4 py-2 text-sm font-semibold sm:inline-flex"
            onClick={() => setOpen(false)}
          >
            Let&apos;s Talk
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-lg border border-crimson/50 bg-panel/70 text-paper transition hover:border-signal hover:text-signal-bright lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-menu"
          className="border-t border-crimson/40 bg-gradient-to-b from-panel to-ink lg:hidden"
          aria-label="Mobile"
        >
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8">
            {navLinks.map((link) => {
              const isActive = active === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`border-b border-line/70 py-3 text-base transition ${
                    isActive ? "font-medium text-signal-bright" : "text-mute hover:text-paper"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="#contact"
              className="btn-gold mt-4 mb-2 rounded-lg px-4 py-3 text-center text-sm font-semibold sm:hidden"
              onClick={() => setOpen(false)}
            >
              Let&apos;s Talk
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
