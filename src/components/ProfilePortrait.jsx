import { useState } from "react";

export default function ProfilePortrait({ src, name, role, company, period, location }) {
  const [status, setStatus] = useState("loading");
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 3)
    .map((part) => part[0])
    .join("");

  return (
    <figure className="relative mx-auto flex max-w-md flex-col items-center lg:max-w-none">
      {/* Studio Royal Plum & Marble Ivory backlight fused into the hero canvas */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-[54%] rounded-full opacity-85 blur-[72px]"
        style={{
          background:
            "radial-gradient(circle at 50% 48%, rgba(156, 29, 97, 0.58) 0%, rgba(92, 13, 55, 0.34) 48%, transparent 74%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-[28%] h-56 w-56 -translate-x-1/2 rounded-full opacity-55 blur-[55px]"
        style={{
          background: "radial-gradient(circle, rgba(247, 237, 226, 0.24) 0%, transparent 68%)",
        }}
        aria-hidden="true"
      />

      {/* Seamless unboxed 1:1 medallion stage matching transparent circular PNG */}
      <div className="relative flex aspect-square w-full max-w-[340px] items-center justify-center sm:max-w-[400px] lg:max-w-[430px]">
        {/* Delicate outer orbital arcs framing the portrait directly in the theme */}
        <svg
          className="pointer-events-none absolute -inset-5 h-[calc(100%+2.5rem)] w-[calc(100%+2.5rem)] opacity-75"
          viewBox="0 0 480 480"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="halo-ring-gold" x1="12%" y1="12%" x2="88%" y2="88%">
              <stop offset="0%" stopColor="#f7ede2" stopOpacity="0.65" />
              <stop offset="48%" stopColor="#e5bc5b" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#7a144b" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="halo-ring-crimson" x1="88%" y1="15%" x2="12%" y2="85%">
              <stop offset="0%" stopColor="#b8256f" stopOpacity="0.58" />
              <stop offset="55%" stopColor="#f7ede2" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0b0208" stopOpacity="0" />
            </linearGradient>
          </defs>
          <circle cx="240" cy="240" r="224" stroke="url(#halo-ring-gold)" strokeWidth="1.1" />
          <circle
            cx="240"
            cy="240"
            r="206"
            stroke="url(#halo-ring-crimson)"
            strokeWidth="1"
            strokeDasharray="4 7"
          />
        </svg>

        {status !== "error" ? (
          <img
            src={src}
            alt={status === "ready" ? `${name}, portrait` : ""}
            className={`relative z-10 h-full w-full object-contain transition duration-700 ${
              status === "ready" ? "scale-100 opacity-100" : "opacity-0"
            }`}
            style={{
              filter:
                "drop-shadow(0 22px 44px rgba(0, 0, 0, 0.9)) drop-shadow(0 0 32px rgba(156, 29, 97, 0.42))",
            }}
            onLoad={() => setStatus("ready")}
            onError={() => setStatus("error")}
          />
        ) : null}

        {status !== "ready" ? (
          <div className="relative z-10 flex h-full w-full flex-col items-center justify-center text-center">
            <div className="relative grid h-44 w-44 place-items-center rounded-full border border-paper/35 bg-radial from-raised/70 via-panel/55 to-transparent shadow-[0_0_70px_-10px_rgba(184,37,111,0.65)] backdrop-blur-sm">
              <div className="absolute inset-2.5 rounded-full border border-crimson/40" />
              <span className="font-serif text-6xl tracking-[0.06em] text-gold-gradient">{initials}</span>
            </div>
            <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.22em] text-signal/85">
              {location || "Agra, India"}
            </p>
          </div>
        ) : null}
      </div>

      {/* Subtle Marble Ivory & Royal Plum horizon line + minimal integrated caption */}
      <div
        className="relative z-20 mt-6 h-px w-4/5"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(122, 20, 75, 0.65) 22%, rgba(247, 237, 226, 0.72) 50%, rgba(122, 20, 75, 0.65) 78%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <figcaption className="relative z-20 mt-4 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-ember shadow-[0_0_8px_#b8256f]" />
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-signal-bright">
            {role}
          </span>
        </div>
        <p className="mt-1 text-sm text-body">
          {company}
          <span className="text-mute"> · {period}</span>
        </p>
      </figcaption>
    </figure>
  );
}
