import { useId } from "react";

const STROKE = 2.5;

export function MoodIconWrapper({ children, className = "", size = 56 }) {
  const raw = useId();
  const id = `mood-${raw.replace(/:/g, "")}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id={`${id}-face`} x1="12" y1="8" x2="52" y2="56">
          <stop offset="0%" stopColor="#8ab4ff" />
          <stop offset="45%" stopColor="#5b8fff" />
          <stop offset="100%" stopColor="#7c5cff" />
        </linearGradient>
        <linearGradient id={`${id}-shine`} x1="20" y1="12" x2="44" y2="36">
          <stop offset="0%" stopColor="#dce8ff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#8ab4ff" stopOpacity="0" />
        </linearGradient>
        <filter id={`${id}-glow`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id={`${id}-soft`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <circle
        cx="32"
        cy="34"
        r="24"
        fill={`url(#${id}-face)`}
        filter={`url(#${id}-glow)`}
      />
      <ellipse
        cx="26"
        cy="22"
        rx="10"
        ry="7"
        fill={`url(#${id}-shine)`}
        opacity="0.55"
      />
      <g stroke="#1f3069" strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round">
        {children}
      </g>
    </svg>
  );
}

export { STROKE };
