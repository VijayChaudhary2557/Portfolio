import { useState } from "react";

function HydrviewArtwork() {
  return (
    <svg
      viewBox="0 0 640 400"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="hydr-glow" cx="55%" cy="48%" r="58%">
          <stop offset="0%" stopColor="#b81824" stopOpacity="0.52" />
          <stop offset="52%" stopColor="#42080e" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#070506" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hydr-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f5d88c" />
          <stop offset="100%" stopColor="#b0822d" />
        </linearGradient>
      </defs>

      <rect width="640" height="400" fill="#090406" />
      <rect width="640" height="400" fill="url(#hydr-glow)" />

      {/* Geospatial Grid */}
      <g stroke="rgba(226, 184, 87, 0.1)" strokeWidth="1">
        <path d="M0 80 H640 M0 160 H640 M0 240 H640 M0 320 H640" />
        <path d="M128 0 V400 M256 0 V400 M384 0 V400 M512 0 V400" />
      </g>

      {/* Topographic GeoTIFF contours */}
      <path
        d="M50 295 C140 240, 210 310, 320 235 C430 160, 495 215, 595 140"
        stroke="rgba(214, 40, 57, 0.65)"
        strokeWidth="2"
      />
      <path
        d="M35 250 C145 190, 225 260, 335 185 C445 110, 500 170, 610 95"
        stroke="rgba(226, 184, 87, 0.48)"
        strokeWidth="1.5"
      />
      <path
        d="M75 335 C170 285, 245 340, 360 270 C465 205, 520 250, 605 195"
        stroke="rgba(184, 24, 36, 0.5)"
        strokeWidth="1.4"
      />

      {/* Satellite Orbital Radar Rings */}
      <circle cx="340" cy="195" r="98" stroke="rgba(226, 184, 87, 0.25)" strokeDasharray="4 5" />
      <circle cx="340" cy="195" r="56" stroke="rgba(214, 40, 57, 0.55)" />
      <circle cx="340" cy="195" r="10" fill="url(#hydr-gold)" opacity="0.9" />
      <circle cx="340" cy="195" r="22" stroke="url(#hydr-gold)" strokeOpacity="0.65" />

      {/* Moisture / GeoTIFF layer card */}
      <g transform="translate(36, 32)">
        <rect width="184" height="58" rx="10" fill="#120609" fillOpacity="0.9" stroke="rgba(226, 184, 87, 0.3)" />
        <circle cx="22" cy="22" r="4" fill="#d62839" />
        <text x="36" y="26" fill="#f5d88c" fontSize="11" fontFamily="monospace" letterSpacing="1.5">
          GEOTIFF · ISRO
        </text>
        <text x="16" y="44" fill="#d6c7c0" fontSize="11" fontFamily="sans-serif">
          Soil Moisture Layer Active
        </text>
      </g>

      {/* Bottom coordinate strip */}
      <g transform="translate(420, 336)">
        <rect width="188" height="34" rx="8" fill="#120609" fillOpacity="0.9" stroke="rgba(143, 17, 28, 0.5)" />
        <text x="16" y="21" fill="#d6c7c0" fontSize="11" fontFamily="monospace">
          27.18° N · 78.02° E
        </text>
      </g>
    </svg>
  );
}

function ErpArtwork() {
  return (
    <svg
      viewBox="0 0 640 400"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="erp-glow" cx="72%" cy="22%" r="60%">
          <stop offset="0%" stopColor="#9e1420" stopOpacity="0.5" />
          <stop offset="55%" stopColor="#35070c" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#070506" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="bar-gold" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f5d88c" />
          <stop offset="100%" stopColor="#8f111c" />
        </linearGradient>
      </defs>

      <rect width="640" height="400" fill="#090406" />
      <rect width="640" height="400" fill="url(#erp-glow)" />

      {/* App Shell Frame */}
      <rect x="34" y="30" width="572" height="340" rx="14" fill="#120609" stroke="rgba(226, 184, 87, 0.25)" />
      {/* Sidebar */}
      <rect x="34" y="30" width="128" height="340" rx="14" fill="#19090d" />
      <line x1="162" y1="30" x2="162" y2="370" stroke="rgba(143, 17, 28, 0.45)" />

      {/* Sidebar items */}
      <circle cx="58" cy="58" r="7" fill="#e2b857" />
      <rect x="74" y="53" width="60" height="10" rx="4" fill="#f7f1eb" fillOpacity="0.85" />
      <rect x="48" y="96" width="98" height="26" rx="6" fill="rgba(143, 17, 28, 0.45)" stroke="rgba(226, 184, 87, 0.35)" />
      <rect x="48" y="134" width="90" height="14" rx="4" fill="rgba(255,255,255,0.08)" />
      <rect x="48" y="162" width="76" height="14" rx="4" fill="rgba(255,255,255,0.08)" />
      <rect x="48" y="190" width="84" height="14" rx="4" fill="rgba(255,255,255,0.08)" />
      <rect x="48" y="218" width="70" height="14" rx="4" fill="rgba(255,255,255,0.08)" />

      {/* Top metric cards */}
      <g transform="translate(184, 52)">
        <rect width="124" height="70" rx="10" fill="#1a090d" stroke="rgba(143, 17, 28, 0.45)" />
        <rect x="14" y="16" width="54" height="8" rx="3" fill="#a38985" fillOpacity="0.55" />
        <rect x="14" y="36" width="74" height="16" rx="4" fill="#f5d88c" fillOpacity="0.88" />
      </g>
      <g transform="translate(324, 52)">
        <rect width="124" height="70" rx="10" fill="#1a090d" stroke="rgba(143, 17, 28, 0.45)" />
        <rect x="14" y="16" width="58" height="8" rx="3" fill="#a38985" fillOpacity="0.55" />
        <rect x="14" y="36" width="66" height="16" rx="4" fill="#d62839" fillOpacity="0.9" />
      </g>
      <g transform="translate(464, 52)">
        <rect width="124" height="70" rx="10" fill="#1a090d" stroke="rgba(226, 184, 87, 0.35)" />
        <rect x="14" y="16" width="60" height="8" rx="3" fill="#a38985" fillOpacity="0.55" />
        <rect x="14" y="36" width="80" height="16" rx="4" fill="#f7f1eb" fillOpacity="0.85" />
      </g>

      {/* Main Analytics Chart Area */}
      <rect x="184" y="142" width="404" height="202" rx="12" fill="#0d0507" stroke="rgba(143, 17, 28, 0.4)" />
      <text x="206" y="170" fill="#f5d88c" fontSize="11" fontFamily="monospace" letterSpacing="1.4">
        PROJECTS · ATTENDANCE · PAYROLL
      </text>

      {/* Bars */}
      <g transform="translate(212, 198)">
        <rect x="0" y="64" width="28" height="60" rx="5" fill="url(#bar-gold)" opacity="0.85" />
        <rect x="46" y="36" width="28" height="88" rx="5" fill="url(#bar-gold)" opacity="0.9" />
        <rect x="92" y="52" width="28" height="72" rx="5" fill="url(#bar-gold)" opacity="0.8" />
        <rect x="138" y="16" width="28" height="108" rx="5" fill="url(#bar-gold)" />
        <rect x="184" y="42" width="28" height="82" rx="5" fill="url(#bar-gold)" opacity="0.88" />
        <rect x="230" y="24" width="28" height="100" rx="5" fill="url(#bar-gold)" opacity="0.95" />
        <rect x="276" y="48" width="28" height="76" rx="5" fill="url(#bar-gold)" opacity="0.82" />
        <rect x="322" y="10" width="28" height="114" rx="5" fill="url(#bar-gold)" />
      </g>
    </svg>
  );
}

function ThermaArtwork() {
  return (
    <svg
      viewBox="0 0 640 400"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="therm-core" cx="52%" cy="54%" r="48%">
          <stop offset="0%" stopColor="#f5d88c" stopOpacity="0.92" />
          <stop offset="28%" stopColor="#e63946" stopOpacity="0.85" />
          <stop offset="62%" stopColor="#7f111a" stopOpacity="0.58" />
          <stop offset="100%" stopColor="#090406" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="therm-scale" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#1b060a" />
          <stop offset="45%" stopColor="#9e141f" />
          <stop offset="78%" stopColor="#e63946" />
          <stop offset="100%" stopColor="#f5d88c" />
        </linearGradient>
      </defs>

      <rect width="640" height="400" fill="#080305" />

      {/* Desktop App Window */}
      <rect x="34" y="28" width="572" height="344" rx="14" fill="#100508" stroke="rgba(226, 184, 87, 0.28)" />
      {/* Window Bar */}
      <path d="M34 42 C34 34, 40 28, 48 28 H592 C600 28, 606 34, 606 42 V62 H34 V42 Z" fill="#1a080c" />
      <circle cx="56" cy="45" r="4.5" fill="#d62839" />
      <circle cx="72" cy="45" r="4.5" fill="#e2b857" />
      <circle cx="88" cy="45" r="4.5" fill="#5e3d39" />
      <text x="116" y="49" fill="#d6c7c0" fontSize="11" fontFamily="monospace" letterSpacing="1.2">
        ThermaXK Desktop · GeoTIFF Thermal Engine
      </text>

      {/* Thermal Heatmap Field */}
      <rect x="52" y="78" width="468" height="274" rx="10" fill="#070304" stroke="rgba(143, 17, 28, 0.4)" />
      <ellipse cx="300" cy="216" rx="165" ry="118" fill="url(#therm-core)" />

      {/* Thermal Contour Lines */}
      <ellipse cx="300" cy="216" rx="115" ry="80" stroke="rgba(245, 216, 140, 0.35)" strokeWidth="1.2" />
      <ellipse cx="300" cy="216" rx="68" ry="46" stroke="rgba(245, 216, 140, 0.6)" strokeWidth="1.3" />

      {/* Drone Target Crosshair */}
      <path d="M300 154 V278 M238 216 H362" stroke="#f5d88c" strokeOpacity="0.6" strokeDasharray="3 4" />
      <rect x="284" y="200" width="32" height="32" rx="6" stroke="#f5d88c" strokeWidth="1.5" />

      {/* Thermal Spectrum Scale Bar */}
      <rect x="542" y="96" width="16" height="220" rx="8" fill="url(#therm-scale)" stroke="rgba(226, 184, 87, 0.35)" />
      <text x="538" y="88" fill="#f5d88c" fontSize="10" fontFamily="monospace">
        64°C
      </text>
      <text x="538" y="334" fill="#a38985" fontSize="10" fontFamily="monospace">
        18°C
      </text>

      {/* JPEG + BIN Badge */}
      <g transform="translate(68, 94)">
        <rect width="150" height="30" rx="7" fill="#120609" fillOpacity="0.9" stroke="rgba(226, 184, 87, 0.3)" />
        <text x="14" y="19" fill="#f5d88c" fontSize="10" fontFamily="monospace" letterSpacing="1">
          JPEG + BIN → TIFF
        </text>
      </g>
    </svg>
  );
}

function UavRecordsArtwork() {
  return (
    <svg
      viewBox="0 0 640 400"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="uav-glow" cx="32%" cy="52%" r="54%">
          <stop offset="0%" stopColor="#b81824" stopOpacity="0.52" />
          <stop offset="55%" stopColor="#3c070e" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#070506" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="640" height="400" fill="#090406" />
      <rect width="640" height="400" fill="url(#uav-glow)" />

      {/* Outer UI Dashboard Shell */}
      <rect x="32" y="28" width="576" height="344" rx="14" fill="#120609" stroke="rgba(226, 184, 87, 0.25)" />
      <line x1="32" y1="68" x2="608" y2="68" stroke="rgba(143, 17, 28, 0.45)" />
      <circle cx="56" cy="48" r="4.5" fill="#e0293c" />
      <text x="72" y="52" fill="#f5d88c" fontSize="11" fontFamily="monospace" letterSpacing="1.4">
        UAV RECORDS · ASSEMBLY &amp; PROCUREMENT
      </text>

      {/* Left Quadcopter BOM Wireframe */}
      <rect x="52" y="88" width="236" height="262" rx="12" fill="#0b0406" stroke="rgba(143, 17, 28, 0.4)" />
      <g transform="translate(170, 206)">
        <line x1="-54" y1="-54" x2="54" y2="54" stroke="#e5bc5b" strokeWidth="2.2" strokeOpacity="0.85" />
        <line x1="54" y1="-54" x2="-54" y2="54" stroke="#e5bc5b" strokeWidth="2.2" strokeOpacity="0.85" />
        <circle cx="-54" cy="-54" r="24" stroke="#e0293c" strokeWidth="1.6" strokeDasharray="4 4" />
        <circle cx="54" cy="-54" r="24" stroke="#e0293c" strokeWidth="1.6" strokeDasharray="4 4" />
        <circle cx="-54" cy="54" r="24" stroke="#e0293c" strokeWidth="1.6" strokeDasharray="4 4" />
        <circle cx="54" cy="54" r="24" stroke="#e0293c" strokeWidth="1.6" strokeDasharray="4 4" />
        <rect x="-18" y="-24" width="36" height="48" rx="8" fill="#1f0a10" stroke="#f5d88c" strokeWidth="1.5" />
        <circle cx="0" cy="0" r="6" fill="#e0293c" />
      </g>
      <text x="76" y="330" fill="#ad918d" fontSize="10" fontFamily="monospace" letterSpacing="1.2">
        BOM STOCK → BUILD CALCULATOR
      </text>

      {/* Right Capacity & Procurement Cards */}
      <rect x="308" y="88" width="280" height="88" rx="12" fill="#19090d" stroke="rgba(229, 188, 91, 0.4)" />
      <text x="328" y="116" fill="#ad918d" fontSize="10" fontFamily="monospace" letterSpacing="1.2">
        MAX BUILDABLE DRONES
      </text>
      <text x="328" y="152" fill="#f7dc92" fontSize="28" fontFamily="serif">
        18 Complete Units
      </text>

      {/* Parts Stock Bars */}
      <rect x="308" y="192" width="280" height="158" rx="12" fill="#0d0507" stroke="rgba(143, 17, 28, 0.4)" />
      <text x="328" y="218" fill="#f5d88c" fontSize="10" fontFamily="monospace" letterSpacing="1.2">
        INVENTORY · SUPPLIER PRs
      </text>

      <rect x="328" y="236" width="240" height="10" rx="5" fill="#1d090e" />
      <rect x="328" y="236" width="196" height="10" rx="5" fill="#e5bc5b" />

      <rect x="328" y="264" width="240" height="10" rx="5" fill="#1d090e" />
      <rect x="328" y="264" width="142" height="10" rx="5" fill="#e0293c" />

      <rect x="328" y="292" width="240" height="10" rx="5" fill="#1d090e" />
      <rect x="328" y="292" width="212" height="10" rx="5" fill="#d48c46" />

      <rect x="328" y="316" width="128" height="22" rx="6" fill="rgba(158, 20, 33, 0.35)" stroke="rgba(229, 188, 91, 0.4)" />
      <text x="342" y="331" fill="#f8f2ec" fontSize="10" fontFamily="monospace">
        PR #408 SENT ✓
      </text>
    </svg>
  );
}

function DamSafetyArtwork() {
  return (
    <svg
      viewBox="0 0 640 400"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="dam-glow" cx="62%" cy="42%" r="58%">
          <stop offset="0%" stopColor="#9e1421" stopOpacity="0.5" />
          <stop offset="56%" stopColor="#35070c" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#070506" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="dam-arch" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e0293c" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#f7dc92" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#e0293c" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      <rect width="640" height="400" fill="#090406" />
      <rect width="640" height="400" fill="url(#dam-glow)" />

      {/* Redesigned .NET Web Portal Browser Frame */}
      <rect x="34" y="30" width="572" height="340" rx="14" fill="#120609" stroke="rgba(229, 188, 91, 0.28)" />
      <path d="M34 44 C34 36, 40 30, 48 30 H592 C600 30, 606 36, 606 44 V66 H34 V44 Z" fill="#1a080d" />
      <circle cx="56" cy="48" r="4" fill="#e0293c" />
      <circle cx="72" cy="48" r="4" fill="#e5bc5b" />
      <circle cx="88" cy="48" r="4" fill="#5e3d39" />
      <rect x="118" y="39" width="230" height="18" rx="5" fill="#0c0406" stroke="rgba(143, 17, 28, 0.45)" />
      <text x="132" y="51" fill="#ad918d" fontSize="9.5" fontFamily="monospace">
        damsafetysociety · .NET UI
      </text>

      {/* Hero Banner Redesign inside Browser */}
      <rect x="54" y="84" width="532" height="148" rx="12" fill="#0b0406" stroke="rgba(143, 17, 28, 0.45)" />
      {/* Architectural Arch Dam Spillway Vectors */}
      <path d="M54 202 Q320 132 586 202" stroke="url(#dam-arch)" strokeWidth="2" />
      <path d="M54 218 Q320 154 586 218" stroke="rgba(224, 41, 60, 0.45)" strokeWidth="1.4" />
      <text x="78" y="124" fill="#f7dc92" fontSize="11" fontFamily="monospace" letterSpacing="1.6">
        DAM SAFETY SOCIETY · REDESIGNED
      </text>
      <text x="78" y="158" fill="#f8f2ec" fontSize="24" fontFamily="serif">
        Modernized .NET Web Platform
      </text>

      {/* Bottom Feature Cards & Plesk Deployment Badge */}
      <rect x="54" y="248" width="166" height="100" rx="10" fill="#18080c" stroke="rgba(143, 17, 28, 0.42)" />
      <rect x="70" y="268" width="64" height="8" rx="4" fill="#e5bc5b" />
      <rect x="70" y="288" width="124" height="8" rx="4" fill="rgba(255,255,255,0.14)" />
      <rect x="70" y="306" width="96" height="8" rx="4" fill="rgba(255,255,255,0.1)" />

      <rect x="237" y="248" width="166" height="100" rx="10" fill="#18080c" stroke="rgba(143, 17, 28, 0.42)" />
      <rect x="253" y="268" width="76" height="8" rx="4" fill="#e0293c" />
      <rect x="253" y="288" width="122" height="8" rx="4" fill="rgba(255,255,255,0.14)" />
      <rect x="253" y="306" width="104" height="8" rx="4" fill="rgba(255,255,255,0.1)" />

      <rect x="420" y="248" width="166" height="100" rx="10" fill="#18080c" stroke="rgba(229, 188, 91, 0.4)" />
      <text x="438" y="280" fill="#f7dc92" fontSize="10" fontFamily="monospace" letterSpacing="1.2">
        DEPLOYMENT
      </text>
      <text x="438" y="306" fill="#f8f2ec" fontSize="14" fontFamily="sans-serif">
        Plesk Panel
      </text>
      <text x="438" y="326" fill="#ad918d" fontSize="10" fontFamily="monospace">
        FTP · SECURED ✓
      </text>
    </svg>
  );
}

function DefaultArtwork({ title }) {
  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center px-6 text-center"
      style={{
        background:
          "radial-gradient(circle at 60% 35%, rgba(122, 20, 75, 0.38), rgba(16, 4, 12, 0.96) 65%)",
      }}
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal">Case Study</p>
      <p className="mt-3 max-w-xs font-serif text-3xl text-paper">{title}</p>
    </div>
  );
}

export default function ProjectVisual({ src, title, projectId = "", className = "" }) {
  const [status, setStatus] = useState("loading");

  const renderFallback = () => {
    if (projectId === "hydrview") return <HydrviewArtwork />;
    if (projectId === "erp") return <ErpArtwork />;
    if (projectId === "thermaxk") return <ThermaArtwork />;
    if (projectId === "uav-records") return <UavRecordsArtwork />;
    if (projectId === "dam-safety-society") return <DamSafetyArtwork />;
    return <DefaultArtwork title={title} />;
  };

  return (
    <div
      className={`relative overflow-hidden bg-ink ${className}`}
      style={{
        background:
          "radial-gradient(100% 80% at 50% 40%, rgba(122, 20, 75, 0.32) 0%, #0b0208 75%)",
      }}
    >
      {status !== "error" ? (
        <img
          src={src}
          alt={status === "ready" ? `${title} screenshot` : ""}
          className={`h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03] ${
            status === "ready" ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setStatus("ready")}
          onError={() => setStatus("error")}
        />
      ) : null}

      {status !== "ready" ? (
        <div className="absolute inset-0 transition duration-500 group-hover:scale-[1.02]">
          {renderFallback()}
        </div>
      ) : null}
    </div>
  );
}
