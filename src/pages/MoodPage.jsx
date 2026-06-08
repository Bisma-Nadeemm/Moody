import { useNavigate } from "react-router-dom";
import { MOODS } from "../data/moods";
import { useMood } from "../context/MoodContext";
import MoodCard from "../components/MoodCard";

export default function MoodPage() {
  const { setSelectedMood } = useMood();
  const navigate = useNavigate();

  function handleMoodSelect(mood) {
    setSelectedMood(mood);
    navigate("/results");
  }

  return (
    <main className="mx-auto max-w-6xl px-4 pb-16 md:px-8">
      <section className="mx-auto max-w-3xl py-8 text-center md:py-10">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-moody-500">
          Mood check-in
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold text-moody-900 md:text-4xl">
          What feels most true <span className="text-gradient">right now</span>?
        </h1>
        <p className="mt-4 text-moody-600">
          Tap a mood and Moody will take you straight to recommendations for that moment.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {MOODS.map((mood) => (
          <MoodCard
            key={mood.id}
            mood={mood}
            onSelect={handleMoodSelect}
          />
        ))}
      </section>
    </main>
  );
}
