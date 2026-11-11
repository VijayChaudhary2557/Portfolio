import { motion, useReducedMotion } from "framer-motion";

export default function SectionDivider() {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8" aria-hidden="true">
        <div className="relative flex items-center justify-center">
          <div
            className="h-px w-full"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(122, 20, 75, 0.6) 20%, rgba(229, 188, 91, 0.7) 44%, rgba(247, 237, 226, 0.65) 50%, rgba(229, 188, 91, 0.7) 56%, rgba(122, 20, 75, 0.6) 80%, transparent 100%)",
            }}
          />
          <div className="absolute flex h-6 w-6 items-center justify-center rounded-full border border-paper/45 bg-ink shadow-[0_0_16px_rgba(247,237,226,0.35)]">
            <span className="text-xs font-light leading-none text-signal-bright">+</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative mx-auto max-w-6xl px-5 sm:px-8" aria-hidden="true">
      <div className="relative flex items-center justify-center">
        <motion.div
          className="h-px w-full origin-center"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(122, 20, 75, 0.6) 20%, rgba(229, 188, 91, 0.7) 44%, rgba(247, 237, 226, 0.65) 50%, rgba(229, 188, 91, 0.7) 56%, rgba(122, 20, 75, 0.6) 80%, transparent 100%)",
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className="absolute flex h-6 w-6 items-center justify-center rounded-full border border-paper/45 bg-ink shadow-[0_0_16px_rgba(247,237,226,0.35)]"
          initial={{ scale: 0.4, opacity: 0, rotate: -90 }}
          whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <span className="text-xs font-light leading-none text-signal-bright">+</span>
        </motion.div>
      </div>
    </div>
  );
}
