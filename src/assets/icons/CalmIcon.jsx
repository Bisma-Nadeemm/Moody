import { MoodIconWrapper } from "./IconBase";

export default function CalmIcon({ className, size }) {
  return (
    <MoodIconWrapper className={className} size={size}>
      <path d="M20 30 Q24 28 28 30" fill="none" strokeWidth="2" opacity="0.9" />
      <path d="M36 30 Q40 28 44 30" fill="none" strokeWidth="2" opacity="0.9" />
      <path d="M26 42 Q32 44 38 42" fill="none" strokeWidth="2" opacity="0.85" />
    </MoodIconWrapper>
  );
}
