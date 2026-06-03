import { MoodIconWrapper } from "./IconBase";

export default function MotivatedIcon({ className, size }) {
  return (
    <MoodIconWrapper className={className} size={size}>
      <path d="M18 24 L24 28 L18 32" fill="none" stroke="#7c5cff" strokeWidth="2" opacity="0.8" />
      <path d="M46 24 L40 28 L46 32" fill="none" stroke="#7c5cff" strokeWidth="2" opacity="0.8" />
      <circle cx="24" cy="30" r="3" fill="#dce8ff" stroke="none" />
      <circle cx="40" cy="30" r="3" fill="#dce8ff" stroke="none" />
      <circle cx="24" cy="30" r="1.8" fill="#1f3069" stroke="none" />
      <circle cx="40" cy="30" r="1.8" fill="#1f3069" stroke="none" />
      <path d="M22 40 Q32 50 42 40" fill="none" />
      <circle cx="14" cy="18" r="2" fill="#a78bfa" stroke="none" opacity="0.9" />
      <circle cx="50" cy="14" r="1.5" fill="#8ab4ff" stroke="none" opacity="0.85" />
      <path d="M52 20 L54 16 L56 20" fill="none" stroke="#7c5cff" strokeWidth="1.5" opacity="0.7" />
    </MoodIconWrapper>
  );
}
