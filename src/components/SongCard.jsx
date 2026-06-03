export default function SongCard({ title, artist, duration, index }) {
  return (
    <div
      className="
        flex items-center gap-4 rounded-2xl glass px-4 py-3
        transition-all duration-300 hover:bg-white/50 hover:glow-blue-sm
      "
    >
      <span
        className="
          flex h-10 w-10 shrink-0 items-center justify-center rounded-xl
          bg-gradient-to-br from-moody-400 to-moody-purple text-sm font-bold text-white
        "
      >
        {index + 1}
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate font-semibold text-moody-900">{title}</p>
        <p className="truncate text-sm text-moody-600">{artist}</p>
      </div>
      <span className="shrink-0 text-sm tabular-nums text-moody-500">{duration}</span>
      <button
        type="button"
        className="
          flex h-9 w-9 shrink-0 items-center justify-center rounded-full
          bg-gradient-to-r from-moody-500 to-moody-purple text-white
          transition hover:scale-105 hover:shadow-[0_0_16px_rgba(61,110,245,0.4)]
        "
        aria-label={`Play ${title}`}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>
    </div>
  );
}
