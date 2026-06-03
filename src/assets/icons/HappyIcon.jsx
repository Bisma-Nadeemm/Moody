import { MoodIconWrapper } from "./IconBase";

export default function HappyIcon({ className, size }) {
  return (
    <MoodIconWrapper className={className} size={size}>
      <ellipse cx="24" cy="30" rx="4" ry="5" fill="#dce8ff" stroke="none" opacity="0.9" />
      <ellipse cx="40" cy="30" rx="4" ry="5" fill="#dce8ff" stroke="none" opacity="0.9" />
      <circle cx="24" cy="30" r="2.2" fill="#1f3069" stroke="none" />
      <circle cx="40" cy="30" r="2.2" fill="#1f3069" stroke="none" />
      <path
        d="M22 40 Q32 48 42 40"
        fill="none"
        stroke="#1f3069"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="20" cy="36" r="2.5" fill="#a78bfa" stroke="none" opacity="0.35" />
      <circle cx="44" cy="36" r="2.5" fill="#a78bfa" stroke="none" opacity="0.35" />
    </MoodIconWrapper>
  );
}
