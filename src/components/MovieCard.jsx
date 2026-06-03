import { useState } from "react";

export default function MovieCard({ title, year, poster, genre }) {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="group overflow-hidden rounded-2xl glass transition-all duration-300 hover:scale-[1.02] hover:glow-blue-sm">
      <div className="relative aspect-[2/3] overflow-hidden bg-gradient-to-br from-moody-300 to-moody-purple">
        {!imgError && poster ? (
          <img
            src={poster}
            alt={`${title} poster`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center p-4 text-center">
            <span className="font-display text-3xl font-bold text-white/90 drop-shadow-md">
              {title.charAt(0)}
            </span>
            <span className="mt-2 text-xs font-medium uppercase tracking-wider text-white/70">
              {genre}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-moody-900/50 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <div className="p-4">
        <h3 className="font-display font-semibold text-moody-900 line-clamp-1">{title}</h3>
        <p className="mt-1 text-sm text-moody-600">
          {year} · {genre}
        </p>
      </div>
    </article>
  );
}
