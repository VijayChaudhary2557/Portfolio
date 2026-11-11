import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
    restDelta: 0.001,
  });

  if (reduce) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #7a144b 0%, #b8256f 42%, #e5bc5b 78%, #f7ede2 100%)",
        boxShadow: "0 0 12px rgba(247, 237, 226, 0.48)",
      }}
      aria-hidden="true"
    />
  );
}

