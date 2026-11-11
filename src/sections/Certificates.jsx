import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Award, ChevronLeft, ChevronRight, Maximize2, Pause, Play } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import CertificateModal from "../components/CertificateModal";
import CertificateVisual from "../components/CertificateVisual";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { certificates } from "../data/portfolioData";

const AUTO_INTERVAL_MS = 4800;

export default function Certificates() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [previewIndex, setPreviewIndex] = useState(null);
  const touchStartRef = useRef(null);

  const total = certificates.length;
  const current = certificates[index];
  const autoPaused = Boolean(reduce || isPaused || isHovered || previewIndex !== null || total <= 1);

  const goTo = useCallback(
    (nextIndex, explicitDir) => {
      if (!total) return;
      const normalized = ((nextIndex % total) + total) % total;
      if (normalized === index) return;
      const computedDir =
        explicitDir ?? (normalized > index || (index === total - 1 && normalized === 0) ? 1 : -1);
      setDirection(computedDir);
      setIndex(normalized);
    },
    [index, total],
  );

  const goNext = useCallback(() => {
    goTo(index + 1, 1);
  }, [goTo, index]);

  const goPrev = useCallback(() => {
    goTo(index - 1, -1);
  }, [goTo, index]);

  useEffect(() => {
    if (autoPaused) return undefined;
    const timer = window.setTimeout(() => {
      goTo(index + 1, 1);
    }, AUTO_INTERVAL_MS);
    return () => window.clearTimeout(timer);
  }, [autoPaused, index, goTo]);

  const handleTouchStart = (event) => {
    const touch = event.touches?.[0];
    if (!touch) return;
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (event) => {
    const start = touchStartRef.current;
    touchStartRef.current = null;
    const touch = event.changedTouches?.[0];
    if (!start || !touch) return;
    const dx = touch.clientX - start.x;
    const dy = touch.clientY - start.y;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) goNext();
      else goPrev();
    }
  };

  const slideVariants = {
    enter: (dir) => (reduce ? { opacity: 0 } : { opacity: 0, x: dir > 0 ? 52 : -52 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => (reduce ? { opacity: 0 } : { opacity: 0, x: dir > 0 ? -52 : 52 }),
  };

  if (!total || !current) return null;

  return (
    <section id="certificates" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            index="03"
            eyebrow="Certificates"
            title="Verified credentials & hackathon recognition."
            description="Full-stack web certification, university hackathon recognition, and core programming credentials. Auto-slides smoothly — hover or pause anytime to inspect."
          />

          <Reveal direction="right" distance={24} className="shrink-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-signal/30 bg-panel/75 px-3.5 py-2">
              <Award size={15} className="text-signal-bright" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-paper">
                {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
              <span className="mx-1 h-3 w-px bg-line" aria-hidden="true" />
              <button
                type="button"
                onClick={() => setIsPaused((value) => !value)}
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.1em] text-signal-bright transition hover:text-paper"
                aria-label={isPaused ? "Resume automatic slider" : "Pause automatic slider"}
              >
                {isPaused ? (
                  <>
                    <Play size={13} aria-hidden="true" />
                    Resume
                  </>
                ) : (
                  <>
                    <Pause size={13} aria-hidden="true" />
                    Auto
                  </>
                )}
              </button>
            </div>
          </Reveal>
        </div>

        {/* Main Automatic Slider Stage */}
        <Reveal direction="up" distance={34} duration={0.68} className="mt-10">
          <div
            className="card-rosso relative touch-pan-y overflow-hidden rounded-2xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") goPrev();
              if (event.key === "ArrowRight") goNext();
            }}
            aria-roledescription="carousel"
            aria-label="Certificates slider"
          >
            {/* Subtle top hairline Marble Ivory & Gold shimmer */}
            <div
              className="pointer-events-none h-px w-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(247, 237, 226, 0.55) 50%, transparent 100%)",
              }}
              aria-hidden="true"
            />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: reduce ? 0.15 : 0.44, ease: [0.22, 1, 0.36, 1] }}
                className="grid items-stretch lg:grid-cols-[1.15fr_0.85fr]"
              >
                {/* Certificate Artwork / Scanned Image Frame */}
                <div className="relative border-b border-line/80 p-4 sm:p-6 lg:border-b-0 lg:border-r">
                  <button
                    type="button"
                    onClick={() => setPreviewIndex(index)}
                    className="group relative block w-full overflow-hidden rounded-xl border border-signal/30 bg-ink text-left shadow-[0_18px_40px_-20px_rgba(0,0,0,0.95)] transition hover:border-signal/65"
                    aria-label={`Open full preview of ${current.title}`}
                  >
                    <CertificateVisual
                      certificate={current}
                      index={index}
                      className="aspect-[7/5] w-full"
                    />
                    <span className="pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-signal/40 bg-ink/85 px-3 py-1 font-mono text-xs text-signal-bright opacity-85 backdrop-blur-sm transition group-hover:border-signal group-hover:bg-raised group-hover:opacity-100">
                      <Maximize2 size={12} aria-hidden="true" />
                      Preview
                    </span>
                  </button>
                </div>

                {/* Certificate Metadata & Controls */}
                <div className="flex flex-col justify-between gap-6 p-6 sm:p-8">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="inline-flex items-center gap-2 rounded-full border border-crimson/55 bg-crimson/20 px-3 py-1 font-mono text-xs uppercase tracking-[0.12em] text-signal-bright">
                        <span className="h-1.5 w-1.5 rounded-full bg-ember shadow-[0_0_8px_#b8256f]" />
                        {current.category}
                      </span>
                      <span className="rounded-full border border-signal/35 bg-ink/80 px-3 py-1 font-mono text-xs text-paper">
                        {current.date}
                      </span>
                      {current.credentialId ? (
                        <span className="rounded-full border border-crimson/40 bg-ink/80 px-3 py-1 font-mono text-xs text-mute">
                          {current.credentialId}
                        </span>
                      ) : null}
                    </div>

                    <h3 className="mt-5 font-serif text-3xl leading-tight text-gold-gradient sm:text-[2.15rem]">
                      {current.title}
                    </h3>

                    <p className="mt-2 font-medium text-paper">{current.issuer}</p>
                    {current.duration ? (
                      <p className="mt-1 font-mono text-xs text-signal-bright">{current.duration}</p>
                    ) : null}

                    <p className="mt-4 text-[15px] leading-relaxed text-body">{current.summary}</p>

                    {current.skills?.length ? (
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {current.skills.map((skill) => (
                          <li
                            key={skill}
                            className="rounded-lg border border-crimson/40 bg-ink/80 px-2.5 py-1 font-mono text-xs text-body"
                          >
                            {skill}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>

                  {/* Bottom Control Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line/80 pt-5">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={goPrev}
                        className="btn-rosso grid h-10 w-10 place-items-center rounded-full"
                        aria-label="Previous certificate"
                      >
                        <ChevronLeft size={18} />
                      </button>
                      <button
                        type="button"
                        onClick={goNext}
                        className="btn-rosso grid h-10 w-10 place-items-center rounded-full"
                        aria-label="Next certificate"
                      >
                        <ChevronRight size={18} />
                      </button>

                      {/* Slide Dots */}
                      <div className="ml-2 flex items-center gap-1.5" role="tablist" aria-label="Choose certificate">
                        {certificates.map((cert, dotIndex) => {
                          const activeDot = dotIndex === index;
                          return (
                            <button
                              key={cert.id}
                              type="button"
                              role="tab"
                              aria-selected={activeDot}
                              aria-label={`Show certificate ${dotIndex + 1}: ${cert.title}`}
                              onClick={() => goTo(dotIndex)}
                              className={`h-2 rounded-full transition-all duration-300 ${
                                activeDot
                                  ? "w-7 bg-gradient-to-r from-ember via-signal to-paper shadow-[0_0_10px_rgba(247,237,226,0.5)]"
                                  : "w-2 bg-crimson/60 hover:bg-paper/60"
                              }`}
                            />
                          );
                        })}
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5">
                      {current.credentialUrl ? (
                        <a
                          href={current.credentialUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-gold inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.1em]"
                        >
                          Verify
                          <ArrowUpRight size={14} aria-hidden="true" />
                        </a>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setPreviewIndex(index)}
                          className="btn-rosso inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs uppercase tracking-[0.1em]"
                        >
                          Inspect
                          <Maximize2 size={13} aria-hidden="true" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Synchronized Auto-Advance Progress Line */}
            <div className="relative h-[3px] w-full bg-ink/90" aria-hidden="true">
              {!autoPaused ? (
                <motion.div
                  key={`progress-${index}-${isPaused}-${isHovered}-${previewIndex !== null}`}
                  className="h-full origin-left"
                  style={{
                    background: "linear-gradient(90deg, #7a144b 0%, #b8256f 42%, #e5bc5b 76%, #f7ede2 100%)",
                    boxShadow: "0 0 10px rgba(247, 237, 226, 0.45)",
                  }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: AUTO_INTERVAL_MS / 1000, ease: "linear" }}
                />
              ) : (
                <div
                  className="h-full w-full opacity-35"
                  style={{
                    background: "linear-gradient(90deg, #7a144b 0%, #e5bc5b 65%, #f7ede2 100%)",
                  }}
                />
              )}
            </div>
          </div>
        </Reveal>

        {/* 3-Card Thumbnail Switcher */}
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {certificates.map((cert, thumbIndex) => {
            const selected = thumbIndex === index;
            return (
              <Reveal
                key={cert.id}
                direction={thumbIndex === 0 ? "left" : thumbIndex === 2 ? "right" : "up"}
                delay={thumbIndex * 0.07}
                distance={24}
                className="h-full"
              >
                <button
                  type="button"
                  onClick={() => goTo(thumbIndex)}
                  aria-current={selected ? "true" : undefined}
                  className={`card-rosso-interactive group flex h-full w-full items-center gap-3.5 rounded-xl p-3 text-left transition ${
                    selected
                      ? "!border-paper/70 shadow-[0_14px_34px_-16px_rgba(247,237,226,0.38)]"
                      : "opacity-80 hover:opacity-100"
                  }`}
                >
                  <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border border-line/80 bg-ink">
                    <CertificateVisual certificate={cert} index={thumbIndex} compact className="h-full w-full" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-xs text-signal-bright">
                        {String(thumbIndex + 1).padStart(2, "0")}
                      </span>
                      {selected ? (
                        <span className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.1em] text-signal-bright">
                          <span className="h-1.5 w-1.5 rounded-full bg-ember shadow-[0_0_6px_#b8256f]" />
                          Active
                        </span>
                      ) : null}
                    </div>
                    <p
                      className={`mt-0.5 truncate text-sm font-medium transition ${
                        selected ? "text-paper" : "text-body group-hover:text-paper"
                      }`}
                    >
                      {cert.title}
                    </p>
                    <p className="truncate text-xs text-mute">{cert.issuer}</p>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      <CertificateModal
        certificates={certificates}
        activeIndex={previewIndex}
        onSelectIndex={setPreviewIndex}
        onClose={() => setPreviewIndex(null)}
      />
    </section>
  );
}
