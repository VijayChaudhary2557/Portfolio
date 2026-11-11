import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export default function useTypewriter(words, options = {}) {
  const { typeSpeed = 70, deleteSpeed = 36, pause = 1500 } = options;
  const reduce = useReducedMotion();
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!words.length || reduce) return undefined;

    const current = words[index % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      timeout = setTimeout(() => {
        setDeleting(false);
        setIndex((value) => (value + 1) % words.length);
      }, 280);
    } else {
      timeout = setTimeout(() => {
        const nextLength = deleting ? text.length - 1 : text.length + 1;
        setText(current.slice(0, Math.max(0, nextLength)));
      }, deleting ? deleteSpeed : typeSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause, reduce]);

  if (reduce) return words[0] ?? "";
  return text;
}
