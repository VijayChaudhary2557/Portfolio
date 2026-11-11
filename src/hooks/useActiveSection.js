import { useEffect, useState } from "react";

export default function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) setActive(visible[0].target.id);
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0, 0.15, 0.4, 0.7],
      },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
