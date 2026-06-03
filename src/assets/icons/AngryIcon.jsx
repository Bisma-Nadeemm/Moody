import { MoodIconWrapper } from "./IconBase";

export default function AngryIcon({ className, size }) {
  return (
    <MoodIconWrapper className={className} size={size}>
      <path d="M18 26 L28 30" fill="none" strokeWidth="3" />
      <path d="M46 26 L36 30" fill="none" strokeWidth="3" />
      <circle cx="24" cy="34" r="2.5" fill="#1f3069" stroke="none" />
      <circle cx="40" cy="34" r="2.5" fill="#1f3069" stroke="none" />
      <path d="M26 44 L32 42 L38 44" fill="none" strokeWidth="2.5" />
    </MoodIconWrapper>
  );
}
