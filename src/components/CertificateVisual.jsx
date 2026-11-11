import { useId, useState } from "react";

function CertificateFallbackArtwork({ certificate, index, compact }) {
  const uid = useId().replace(/:/g, "");
  const slotNumber = String(index + 1).padStart(2, "0");
  const filename = certificate.image?.split("/").pop() || `certificate-${index + 1}.png`;

  return (
    <svg
      viewBox="0 0 640 420"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full select-none"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={`cert-bg-${uid}`} cx="50%" cy="38%" r="68%">
          <stop offset="0%" stopColor="#7a144b" stopOpacity="0.38" />
          <stop offset="55%" stopColor="#22071b" stopOpacity="0.94" />
          <stop offset="100%" stopColor="#0b0208" stopOpacity="1" />
        </radialGradient>
        <linearGradient id={`cert-gold-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f7ede2" />
          <stop offset="52%" stopColor="#e5bc5b" />
          <stop offset="100%" stopColor="#b88930" />
        </linearGradient>
        <linearGradient id={`cert-crimson-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#b8256f" />
          <stop offset="100%" stopColor="#4d1436" />
        </linearGradient>
      </defs>

      <rect width="640" height="420" fill={`url(#cert-bg-${uid})`} />

      {/* Subtle silk guilloche lines */}
      <g stroke="rgba(247, 237, 226, 0.08)" strokeWidth="1">
        <circle cx="320" cy="210" r="145" />
        <circle cx="320" cy="210" r="185" strokeDasharray="4 6" />
        <path d="M0 90 Q320 140 640 90" />
        <path d="M0 330 Q320 280 640 330" />
      </g>

      {/* Outer & Inner Certificate Frame */}
      <rect
        x="24"
        y="22"
        width="592"
        height="376"
        rx="14"
        fill="rgba(16, 4, 12, 0.8)"
        stroke={`url(#cert-gold-${uid})`}
        strokeOpacity="0.45"
        strokeWidth="1.4"
      />
      <rect
        x="36"
        y="34"
        width="568"
        height="352"
        rx="9"
        stroke="rgba(122, 20, 75, 0.55)"
        strokeWidth="1"
      />

      {/* Gold ornamental corners */}
      <g stroke={`url(#cert-gold-${uid})`} strokeWidth="2.2" strokeLinecap="round">
        <path d="M46 62 V44 H64" />
        <path d="M576 44 H594 V62" />
        <path d="M46 358 V376 H64" />
        <path d="M576 376 H594 V358" />
      </g>

      {/* Top Crest Ribbon */}
      <g transform="translate(215, 56)">
        <rect
          width="210"
          height="26"
          rx="13"
          fill="rgba(122, 20, 75, 0.36)"
          stroke="rgba(247, 237, 226, 0.45)"
        />
        <circle cx="18" cy="13" r="3.5" fill="#b8256f" />
        <text
          x="112"
          y="17"
          textAnchor="middle"
          fill="#f8e2a3"
          fontSize="10.5"
          fontFamily="monospace"
          letterSpacing="2.2"
        >
          CREDENTIAL {slotNumber}
        </text>
      </g>

      {/* Center Certificate Details */}
      <text
        x="320"
        y="128"
        textAnchor="middle"
        fill="#b89aa6"
        fontSize="12"
        fontFamily="monospace"
        letterSpacing="3.4"
      >
        CERTIFICATE OF COMPLETION
      </text>

      <line x1="210" y1="145" x2="430" y2="145" stroke={`url(#cert-gold-${uid})`} strokeOpacity="0.4" />

      <text
        x="320"
        y="192"
        textAnchor="middle"
        fill="#f7ede2"
        fontSize={compact ? "20" : "23"}
        fontFamily="serif"
        fontWeight="600"
      >
        {certificate.title.length > 34 ? `${certificate.title.slice(0, 32)}…` : certificate.title}
      </text>

      <text
        x="320"
        y="226"
        textAnchor="middle"
        fill="#f8e2a3"
        fontSize="14.5"
        fontFamily="sans-serif"
      >
        {certificate.issuer}
      </text>

      {/* Decorative Signature & Issue Lines */}
      <g transform="translate(76, 286)">
        <line x1="0" y1="24" x2="148" y2="24" stroke="rgba(229, 188, 91, 0.35)" />
        <text x="0" y="16" fill="#e4d1c2" fontSize="11.5" fontFamily="serif">
          Vijay Chaudhary · Vijay Kant Singh
        </text>
        <text x="0" y="40" fill="#b89aa6" fontSize="9.5" fontFamily="monospace" letterSpacing="1.2">
          RECIPIENT · {certificate.date}
        </text>
      </g>

      {/* Wax Seal Medallion */}
      <g transform="translate(495, 294)">
        <path d="M-12 20 L-18 54 L-2 46 L4 56 L10 22" fill={`url(#cert-crimson-${uid})`} opacity="0.9" />
        <path d="M12 20 L18 54 L2 46 L-4 56 L-10 22" fill={`url(#cert-crimson-${uid})`} opacity="0.72" />
        <circle cx="0" cy="0" r="30" fill="#160511" stroke={`url(#cert-gold-${uid})`} strokeWidth="2.5" />
        <circle cx="0" cy="0" r="22" stroke="rgba(247, 237, 226, 0.45)" strokeDasharray="3 3" />
        <text
          x="0"
          y="4"
          textAnchor="middle"
          fill="#f8e2a3"
          fontSize="12"
          fontFamily="monospace"
          fontWeight="700"
        >
          #{slotNumber}
        </text>
      </g>

      {!compact ? (
        <g transform="translate(184, 344)">
          <rect
            width="272"
            height="24"
            rx="12"
            fill="rgba(7, 5, 6, 0.85)"
            stroke="rgba(229, 188, 91, 0.3)"
          />
          <text
            x="136"
            y="15.5"
            textAnchor="middle"
            fill="#dccdc6"
            fontSize="10"
            fontFamily="monospace"
          >
            public/images/certificates/{filename}
          </text>
        </g>
      ) : null}
    </svg>
  );
}

function CertificateImageFrame({ certificate, index, compact }) {
  const [status, setStatus] = useState(certificate.image ? "loading" : "error");

  return (
    <div
      className={`absolute inset-0 flex items-center justify-center ${
        compact ? "p-1" : "p-3 sm:p-4"
      }`}
    >
      {status !== "error" && certificate.image ? (
        <img
          src={certificate.image}
          alt={status === "ready" ? `${certificate.title} certificate by ${certificate.issuer}` : ""}
          className={`max-h-full max-w-full object-contain transition duration-500 ${
            compact
              ? "rounded-[4px] ring-1 ring-signal/30"
              : "rounded-lg shadow-[0_14px_30px_rgba(0,0,0,0.9)] ring-1 ring-signal/40 group-hover:scale-[1.015]"
          } ${status === "ready" ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setStatus("ready")}
          onError={() => setStatus("error")}
        />
      ) : null}

      {status !== "ready" ? (
        <div className="absolute inset-0">
          <CertificateFallbackArtwork certificate={certificate} index={index} compact={compact} />
        </div>
      ) : null}
    </div>
  );
}

export default function CertificateVisual({ certificate, index = 0, className = "", compact = false }) {
  return (
    <div
      className={`relative overflow-hidden bg-ink ${className}`}
      style={{
        background:
          "radial-gradient(100% 85% at 50% 45%, rgba(122, 20, 75, 0.28) 0%, #0b0208 78%)",
      }}
    >
      <CertificateImageFrame
        key={certificate.image || certificate.id}
        certificate={certificate}
        index={index}
        compact={compact}
      />
    </div>
  );
}
