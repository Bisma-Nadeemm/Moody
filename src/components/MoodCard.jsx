export default function MoodCard({ mood, selected, onSelect }) {
  const { Icon, label, description, gradient } = mood;

  return (
    <button
      type="button"
      onClick={() => onSelect(mood)}
      className={`
        group relative flex flex-col items-center gap-4 rounded-3xl p-6 text-center
        transition-all duration-300 ease-out
        glass hover:scale-[1.04] hover:glow-blue
        bg-gradient-to-br ${gradient}
        ${selected ? "ring-2 ring-moody-500 scale-[1.03] glow-blue" : ""}
      `}
    >
      <div
        className="
          flex h-20 w-20 items-center justify-center rounded-2xl
          bg-white/30 backdrop-blur-md transition-transform duration-300
          group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(91,143,255,0.5)]
        "
      >
        <Icon size={64} className="drop-shadow-lg" />
      </div>
      <div>
        <h3 className="font-display text-lg font-semibold text-moody-900">{label}</h3>
        <p className="mt-1 text-sm text-moody-700/80">{description}</p>
      </div>
      <span
        className="
          absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300
          bg-gradient-to-t from-moody-500/10 to-transparent pointer-events-none
          group-hover:opacity-100
        "
        aria-hidden
      />
    </button>
  );
}
