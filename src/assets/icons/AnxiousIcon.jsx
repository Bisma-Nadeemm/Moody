import { MoodIconWrapper } from "./IconBase";

export default function AnxiousIcon({ className, size }) {
  return (
    <MoodIconWrapper className={className} size={size}>
      <path d="M20 28 Q24 34 28 28" fill="none" />
      <path d="M36 28 Q40 34 44 28" fill="none" />
      <circle cx="24" cy="30" r="2" fill="#1f3069" stroke="none" />
      <circle cx="40" cy="30" r="2" fill="#1f3069" stroke="none" />
      <path d="M28 42 Q32 40 36 42" fill="none" strokeWidth="2" />
      <path d="M30 18 Q32 14 34 18" fill="none" stroke="#7c5cff" strokeWidth="1.8" opacity="0.6" />
    </MoodIconWrapper>
  );
}
