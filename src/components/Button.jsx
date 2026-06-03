import { Link } from "react-router-dom";

const base =
  "inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 font-semibold text-white transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-moody-400 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  primary:
    "bg-gradient-to-r from-moody-500 via-moody-purple to-moody-violet shadow-lg hover:shadow-[0_0_32px_rgba(61,110,245,0.45)] hover:scale-[1.02] active:scale-[0.98]",
  secondary:
    "glass text-moody-700 hover:bg-white/55 hover:glow-blue-sm border-moody-200/60",
  ghost: "bg-transparent text-moody-600 hover:bg-moody-100/50",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  to,
  type = "button",
  ...props
}) {
  const classes = `${base} ${variants[variant] ?? variants.primary} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
