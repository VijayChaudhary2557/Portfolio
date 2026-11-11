import { ArrowRight, Cloud, MapPin, Monitor, Smartphone, Tablet } from "lucide-react";
import { FaApple, FaWindows } from "react-icons/fa6";
import {
  SiCss,
  SiElectron,
  SiHtml5,
  SiLeaflet,
  SiMongodb,
  SiNodedotjs,
  SiQgis,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

const serviceBackgrounds = {
  mern: "/images/services/mern.jpg",
  frontend: "/images/services/frontend.jpg",
  backend: "/images/services/backend.jpg",
  geo: "/images/services/geo.jpg",
  desktop: "/images/services/desktop.jpg",
  responsive: "/images/services/responsive.jpg",
};

function TechStackBadges({ type }) {
  const pill =
    "grid h-7 w-7 place-items-center rounded-lg border border-paper/15 bg-[#160411]/90 shadow-[inset_0_1px_0_rgba(247,237,226,0.08)]";

  if (type === "mern") {
    return (
      <>
        <span className={pill} title="React.js">
          <SiReact className="h-3.5 w-3.5 text-[#61DAFB]" />
        </span>
        <span className={pill} title="Node.js">
          <SiNodedotjs className="h-3.5 w-3.5 text-[#6CC24A]" />
        </span>
        <span className={`${pill} font-mono text-[10px] font-semibold text-paper`} title="Express.js">
          ex
        </span>
        <span className={pill} title="MongoDB">
          <SiMongodb className="h-3.5 w-3.5 text-[#4DB33D]" />
        </span>
      </>
    );
  }

  if (type === "frontend") {
    return (
      <>
        <span className={pill} title="React.js">
          <SiReact className="h-3.5 w-3.5 text-[#61DAFB]" />
        </span>
        <span className={pill} title="Tailwind CSS">
          <SiTailwindcss className="h-3.5 w-3.5 text-[#38BDF8]" />
        </span>
        <span className={pill} title="HTML5">
          <SiHtml5 className="h-3.5 w-3.5 text-[#E34F26]" />
        </span>
        <span className={pill} title="CSS3">
          <SiCss className="h-3.5 w-3.5 text-[#3B82F6]" />
        </span>
      </>
    );
  }

  if (type === "backend") {
    return (
      <>
        <span className={pill} title="Node.js">
          <SiNodedotjs className="h-3.5 w-3.5 text-[#6CC24A]" />
        </span>
        <span className={`${pill} font-mono text-[10px] font-semibold text-paper`} title="Express.js">
          ex
        </span>
        <span
          className="inline-flex h-7 items-center gap-1 rounded-lg border border-white/10 bg-[#140609]/90 px-2 font-mono text-[9.5px] font-medium text-signal-bright"
          title="REST API"
        >
          <Cloud className="h-3 w-3" />
          API
        </span>
      </>
    );
  }

  if (type === "geo") {
    return (
      <>
        <span className={pill} title="Leaflet.js">
          <SiLeaflet className="h-3.5 w-3.5 text-[#7BC950]" />
        </span>
        <span
          className="inline-flex h-7 items-center gap-1 rounded-lg border border-white/10 bg-[#140609]/90 px-2 font-mono text-[9.5px] font-semibold text-[#A3D65C]"
          title="QGIS"
        >
          <SiQgis className="h-3 w-3" />
          QGIS
        </span>
        <span className={pill} title="Geospatial Mapping">
          <MapPin className="h-3.5 w-3.5 text-ember" />
        </span>
      </>
    );
  }

  if (type === "desktop") {
    return (
      <>
        <span className={pill} title="Electron.js">
          <SiElectron className="h-3.5 w-3.5 text-[#9FEAF9]" />
        </span>
        <span className={pill} title="Windows">
          <FaWindows className="h-3.5 w-3.5 text-[#60A5FA]" />
        </span>
        <span className={pill} title="macOS">
          <FaApple className="h-3.5 w-3.5 text-paper" />
        </span>
      </>
    );
  }

  return (
    <>
      <span className={pill} title="Desktop Layout">
        <Monitor className="h-3.5 w-3.5 text-signal-bright" />
      </span>
      <span className={pill} title="Tablet Layout">
        <Tablet className="h-3.5 w-3.5 text-body" />
      </span>
      <span className={pill} title="Mobile Layout">
        <Smartphone className="h-3.5 w-3.5 text-body" />
      </span>
    </>
  );
}

export default function ServiceCard({ service }) {
  const bgSrc = serviceBackgrounds[service.icon] ?? serviceBackgrounds.mern;

  return (
    <article className="group relative flex h-full min-h-[278px] flex-col justify-between overflow-hidden rounded-2xl border border-crimson/55 bg-[#12030d] p-5 transition duration-300 hover:-translate-y-1 hover:border-paper/55 hover:shadow-[0_24px_54px_-18px_rgba(164,28,102,0.58)] sm:p-6">
      {/* Top & bottom specular Marble Ivory + Royal Plum edge glints */}
      <span
        className="pointer-events-none absolute inset-x-10 top-0 z-20 h-[1.5px] bg-gradient-to-r from-transparent via-[#f5dec3]/90 to-transparent opacity-85 shadow-[0_0_16px_1px_rgba(247,237,226,0.4)] transition group-hover:opacity-100"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute inset-x-12 bottom-0 z-20 h-px bg-gradient-to-r from-transparent via-[#c74e92]/75 to-transparent opacity-75 transition group-hover:opacity-100"
        aria-hidden="true"
      />

      {/* Right-aligned 3D background render harmonized to Royal Plum */}
      <img
        src={bgSrc}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-right opacity-90 transition duration-500 [filter:hue-rotate(-24deg)_saturate(1.04)] group-hover:scale-[1.04] group-hover:opacity-100"
      />

      {/* Subtle Royal Plum color glaze over background artwork */}
      <div
        className="pointer-events-none absolute inset-0 bg-[#7a144b]/25 mix-blend-color"
        aria-hidden="true"
      />

      {/* Left-to-right Royal Plum scrim ensuring clear contrast for left text */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(96deg, rgba(14, 3, 11, 0.96) 0%, rgba(22, 5, 17, 0.87) 46%, rgba(29, 6, 22, 0.42) 72%, rgba(14, 3, 11, 0.14) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full max-w-[66%] flex-col">
        <div className="flex flex-wrap items-center gap-1.5" aria-hidden="true">
          <TechStackBadges type={service.icon} />
        </div>

        <h3 className="mt-4 font-serif text-[1.35rem] leading-[1.15] text-paper transition group-hover:text-signal-bright sm:text-[1.42rem]">
          {service.title}
        </h3>

        <p className="mt-2.5 text-[12px] leading-[1.55] text-body/90">{service.description}</p>

        <div className="mt-auto pt-4">
          <a
            href="#contact"
            aria-label={`Inquire about ${service.title}`}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-signal/55 bg-ink/65 text-signal-bright transition group-hover:border-signal-bright group-hover:bg-signal group-hover:text-ink"
          >
            <ArrowRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}
