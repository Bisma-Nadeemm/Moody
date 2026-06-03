import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MOODS } from "../data/moods";
import { useMood } from "../context/MoodContext";
import MoodCard from "../components/MoodCard";
import Button from "../components/Button";

export default function MoodPage() {
  const [picked, setPicked] = useState(null);
  const { setSelectedMood } = useMood();
  const navigate = useNavigate();

  function handleContinue() {
    if (!picked) return;
    setSelectedMood(picked);
    navigate("/results");
  }

  return (
    <main className="mx-auto max-w-6xl px-4 pb-16 md:px-8">
      <section className="py-8 text-center md:py-10">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-moody-500">
          Mood check-in
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold text-moody-900 md:text-4xl">
          How are you <span className="text-gradient">feeling</span>?
        </h1>
      </section>

      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {MOODS.map((mood) => (
          <MoodCard
            key={mood.id}
            mood={mood}
            selected={picked?.id === mood.id}
            onSelect={setPicked}
          />
        ))}
      </section>

      <div className="mt-12 flex justify-center">
        <Button type="button" onClick={handleContinue} disabled={!picked} className="min-w-[220px]">
          See my recommendations
        </Button>
      </div>
    </main>
  );
}
