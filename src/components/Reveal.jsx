import { motion, useReducedMotion } from "framer-motion";

const offsets = {
  up: { x: 0, y: 40 },
  down: { x: 0, y: -40 },
  left: { x: -48, y: 0 },
  right: { x: 48, y: 0 },
  none: { x: 0, y: 0 },
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance,
  duration = 0.65,
  scale = 1,
  once = false,
}) {
  const reduce = useReducedMotion();

  if (reduce) return <div className={className}>{children}</div>;

  const base = offsets[direction] ?? offsets.up;
  const x = distance !== undefined && base.x !== 0 ? Math.sign(base.x) * distance : base.x;
  const y = distance !== undefined && base.y !== 0 ? Math.sign(base.y) * distance : base.y;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y, scale }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once, amount: 0.08 }}
      transition={{ duration, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
