import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef } from "react";
import CertificateVisual from "./CertificateVisual";

export default function CertificateModal({ certificates, activeIndex, onSelectIndex, onClose }) {
  const reduce = useReducedMotion();
  const closeRef = useRef(null);
  const hasCert = activeIndex !== null && certificates[activeIndex];
  const certificate = hasCert ? certificates[activeIndex] : null;
  const total = certificates.length;

  useEffect(() => {
    if (!hasCert) return undefined;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") {
        onSelectIndex((activeIndex - 1 + total) % total);
      }
      if (event.key === "ArrowRight") {
        onSelectIndex((activeIndex + 1) % total);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [hasCert, activeIndex, total, onSelectIndex, onClose]);

  const fade = reduce ? { duration: 0 } : { duration: 0.22 };

  return (
    <AnimatePresence>
      {certificate ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center bg-[#060105]/88 p-0 backdrop-blur-md sm:items-center sm:p-6"
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
            aria-labelledby="certificate-dialog-title"
            className="card-rosso max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-t-2xl sm:max-h-[90vh] sm:rounded-2xl"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
            transition={fade}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-line/90 bg-panel/95 px-5 py-3.5 backdrop-blur-md">
              <div className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-ember shadow-[0_0_8px_#b8256f]" />
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-signal-bright">
                  Certificate {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </p>
              </div>

              <div className="flex items-center gap-2">
                {total > 1 ? (
                  <>
                    <button
                      type="button"
                      onClick={() => onSelectIndex((activeIndex - 1 + total) % total)}
                      className="btn-rosso grid h-9 w-9 place-items-center rounded-lg"
                      aria-label="Previous certificate"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      type="button"
                      onClick={() => onSelectIndex((activeIndex + 1) % total)}
                      className="btn-rosso grid h-9 w-9 place-items-center rounded-lg"
                      aria-label="Next certificate"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </>
                ) : null}
                <button
                  ref={closeRef}
                  type="button"
                  onClick={onClose}
                  className="btn-rosso grid h-9 w-9 place-items-center rounded-lg"
                  aria-label="Close certificate preview"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            <CertificateVisual
              certificate={certificate}
              index={activeIndex}
              className="aspect-[7/5] max-h-[64vh] w-full border-b border-line/80"
            />

            <div className="space-y-4 px-5 py-6 sm:px-8 sm:py-7">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h2 id="certificate-dialog-title" className="font-serif text-3xl text-gold-gradient sm:text-4xl">
                    {certificate.title}
                  </h2>
                  <p className="mt-1.5 text-sm font-medium text-signal-bright">
                    {certificate.issuer} · <span className="text-mute">{certificate.date}</span>
                    {certificate.credentialId ? (
                      <span className="text-mute"> · {certificate.credentialId}</span>
                    ) : null}
                  </p>
                  {certificate.duration ? (
                    <p className="mt-1 font-mono text-xs text-mute">Program Period: {certificate.duration}</p>
                  ) : null}
                </div>

                {certificate.credentialUrl ? (
                  <a
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-gold inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs uppercase tracking-[0.12em]"
                  >
                    Verify Credential
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                ) : null}
              </div>

              {certificate.summary ? (
                <p className="text-[15px] leading-relaxed text-body">{certificate.summary}</p>
              ) : null}

              {certificate.skills?.length ? (
                <ul className="flex flex-wrap gap-2 pt-1">
                  {certificate.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border border-crimson/40 bg-ink/85 px-3 py-1 font-mono text-xs text-paper"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

