import { MoodIconWrapper } from "./IconBase";

export default function SadIcon({ className, size }) {
  return (
    <MoodIconWrapper className={className} size={size}>
      <path d="M20 28 Q24 32 28 28" fill="none" />
      <path d="M36 28 Q40 32 44 28" fill="none" />
      <circle cx="24" cy="31" r="2" fill="#1f3069" stroke="none" />
      <circle cx="40" cy="31" r="2" fill="#1f3069" stroke="none" />
      <path d="M24 44 Q32 38 40 44" fill="none" />
      <path
        d="M46 38 Q48 44 46 50"
        fill="none"
        stroke="#5b8fff"
        strokeWidth="2"
        opacity="0.85"
      />
      <circle cx="46" cy="50" r="2.5" fill="#7c5cff" stroke="none" opacity="0.7" />
    </MoodIconWrapper>
  );
}
