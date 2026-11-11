export default function AmbientBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Royal Plum & Marble Ivory atmospheric depth */}
      <div
        className="absolute -left-1/4 -top-40 h-[44rem] w-[44rem] rounded-full opacity-55 blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(138, 22, 85, 0.62) 0%, rgba(64, 9, 41, 0.32) 54%, transparent 76%)",
        }}
      />
      <div
        className="absolute -right-1/4 top-[20%] h-[48rem] w-[48rem] rounded-full opacity-52 blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(164, 28, 102, 0.5) 0%, rgba(74, 11, 48, 0.26) 52%, transparent 74%)",
        }}
      />
      <div
        className="absolute bottom-[-12rem] left-[14%] h-[40rem] w-[52rem] rounded-full opacity-45 blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(122, 20, 75, 0.56) 0%, rgba(247, 237, 226, 0.11) 45%, transparent 72%)",
        }}
      />

      {/* Subtle Marble Ivory & Champagne Gold specular haze near hero */}
      <div
        className="absolute left-1/2 top-0 h-[28rem] w-[54rem] -translate-x-1/2 opacity-28 blur-[120px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(247, 237, 226, 0.22) 0%, rgba(164, 28, 102, 0.18) 46%, transparent 74%)",
        }}
      />

      {/* Royal Plum & Marble Ivory crystalline marble veins */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.26]"
        preserveAspectRatio="none"
        viewBox="0 0 1440 900"
        fill="none"
      >
        <defs>
          <filter id="vein-glow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="5" />
          </filter>
          <linearGradient id="vein-crimson" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#b8256f" stopOpacity="0" />
            <stop offset="32%" stopColor="#b8256f" stopOpacity="0.88" />
            <stop offset="68%" stopColor="#f7ede2" stopOpacity="0.58" />
            <stop offset="100%" stopColor="#7a144b" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="vein-gold" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f7ede2" stopOpacity="0" />
            <stop offset="44%" stopColor="#e5bc5b" stopOpacity="0.58" />
            <stop offset="76%" stopColor="#b8256f" stopOpacity="0.72" />
            <stop offset="100%" stopColor="#5c0d39" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Soft under-glow veins */}
        <g filter="url(#vein-glow)" opacity="0.75">
          <path
            d="M-40 160 C 210 210, 320 90, 560 190 S 940 310, 1180 210 S 1380 120, 1500 180"
            stroke="#9c1d61"
            strokeWidth="4"
          />
          <path
            d="M-60 470 C 180 420, 390 540, 640 450 S 1020 340, 1260 460 S 1410 510, 1520 440"
            stroke="#7a144b"
            strokeWidth="3.5"
          />
          <path
            d="M180 860 C 360 720, 590 790, 820 690 S 1190 610, 1470 740"
            stroke="#b8256f"
            strokeWidth="4"
          />
        </g>
        {/* Sharp Marble Ivory & Royal Plum vein filaments */}
        <path
          d="M-40 160 C 210 210, 320 90, 560 190 S 940 310, 1180 210 S 1380 120, 1500 180"
          stroke="url(#vein-crimson)"
          strokeWidth="1.25"
        />
        <path
          d="M-60 470 C 180 420, 390 540, 640 450 S 1020 340, 1260 460 S 1410 510, 1520 440"
          stroke="url(#vein-gold)"
          strokeWidth="1.1"
        />
        <path
          d="M180 860 C 360 720, 590 790, 820 690 S 1190 610, 1470 740"
          stroke="url(#vein-crimson)"
          strokeWidth="1.2"
        />
      </svg>

      {/* Subtle architectural coordinate grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(247, 237, 226, 0.42) 1px, transparent 1px), linear-gradient(to bottom, rgba(184, 37, 111, 0.4) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
    </div>
  );
}
