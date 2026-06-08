export default function MoodCard({ mood, selected = false, onSelect }) {
  const { Icon, label, description, gradient } = mood;

  return (
    <button
      type="button"
      onClick={() => onSelect(mood)}
      className={`
        group relative flex flex-col items-center gap-4 rounded-3xl p-6 text-center
        transition-all duration-300 ease-out
        border border-white/90 bg-white/75 shadow-sm hover:-translate-y-1 hover:bg-white hover:shadow-xl
        bg-gradient-to-br ${gradient}
        ${selected ? "ring-2 ring-moody-500 scale-[1.03] glow-blue" : ""}
      `}
    >
      <div
        className="
          flex h-20 w-20 items-center justify-center rounded-2xl
          bg-white/80 backdrop-blur-md shadow-sm transition-transform duration-300
          group-hover:scale-105
        "
      >
        <Icon size={64} className="drop-shadow-lg" />
      </div>
      <div>
        <h3 className="font-display text-lg font-semibold text-moody-900">{label}</h3>
        <p className="mt-1 text-sm leading-6 text-moody-700/80">{description}</p>
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
