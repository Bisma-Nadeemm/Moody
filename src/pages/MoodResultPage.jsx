import { Navigate, Link } from "react-router-dom";
import { useMood } from "../context/MoodContext";
import { MOOD_QUOTES, MOOD_MOVIES, MOOD_SONGS } from "../data/recommendations";
import MovieCard from "../components/MovieCard";
import SongCard from "../components/SongCard";
import Button from "../components/Button";

export default function MoodResultPage() {
  const { selectedMood } = useMood();

  if (!selectedMood) {
    return <Navigate to="/mood" replace />;
  }

  const moodId = selectedMood.id;
  const quote = MOOD_QUOTES[moodId];
  const movies = MOOD_MOVIES[moodId] ?? [];
  const songs = MOOD_SONGS[moodId] ?? [];
  const { Icon, label } = selectedMood;

  return (
    <main className="mx-auto max-w-6xl px-4 pb-20 md:px-8">
      <section className="relative mt-6 overflow-hidden rounded-3xl glass glow-blue p-8 md:p-12">
        <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-moody-purple/20 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-moody-400/20 blur-3xl" />

        <div className="relative z-10 flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-white/40 backdrop-blur-md glow-blue-sm">
            <Icon size={80} />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold uppercase tracking-widest text-moody-500">
              Your mood · {label}
            </p>
            <blockquote className="mt-4 font-display text-2xl font-semibold leading-snug text-moody-900 md:text-3xl">
              &ldquo;{quote.quote}&rdquo;
            </blockquote>
            <cite className="mt-4 block text-sm font-medium not-italic text-moody-600">
              — {quote.author}
            </cite>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-bold text-moody-900">Films for you</h2>
            <p className="mt-1 text-moody-600">Hand-picked for your {label.toLowerCase()} vibe</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {movies.map((movie) => (
            <MovieCard key={movie.title} {...movie} />
          ))}
        </div>
      </section>

      <section className="mt-14">
        <div className="mb-6">
          <h2 className="font-display text-2xl font-bold text-moody-900">Songs to match</h2>
          <p className="mt-1 text-moody-600">A soundtrack for how you feel right now</p>
        </div>
        <div className="space-y-3">
          {songs.map((song, i) => (
            <SongCard key={song.title} {...song} index={i} />
          ))}
        </div>
      </section>

      <div className="mt-12 flex flex-wrap justify-center gap-4">
        <Button to="/mood" variant="secondary">
          Choose another mood
        </Button>
        <Link
          to="/home"
          className="inline-flex items-center rounded-2xl px-6 py-3 text-sm font-medium text-moody-600 hover:text-moody-purple"
        >
          Back to dashboard
        </Link>
      </div>
    </main>
  );
}
