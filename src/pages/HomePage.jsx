import Button from "../components/Button";
import { CalmIcon, HappyIcon, MotivatedIcon } from "../assets/icons";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-16 md:px-8">
      <section className="relative overflow-hidden rounded-3xl glass glow-blue px-6 py-14 text-center md:px-12 md:py-20">
        <div className="absolute -left-16 top-0 h-56 w-56 rounded-full bg-moody-400/25 blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-48 w-48 rounded-full bg-moody-purple/30 blur-3xl" />

        <div className="relative z-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-moody-500">
            Your emotional companion
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-moody-900 md:text-5xl">
            Welcome to <span className="text-gradient">Moody</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-moody-600">
            Tell us how you feel. We will match you with films, music, and words that understand your
            moment.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <HappyIcon size={64} className="opacity-90" />
            <CalmIcon size={64} className="opacity-90" />
            <MotivatedIcon size={64} className="opacity-90" />
          </div>

          <div className="mt-10">
            <Button to="/mood" className="min-w-[240px]">
              Check in with my mood
            </Button>
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-5 md:grid-cols-3">
        {[
          { title: "Mood-aware", desc: "Six custom expressions capture how you really feel." },
          { title: "Curated picks", desc: "Movies and songs chosen for your emotional tone." },
          { title: "Daily wisdom", desc: "A quote that meets you where you are." },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl glass p-6 transition hover:glow-blue-sm hover:bg-white/45"
          >
            <h3 className="font-display text-lg font-semibold text-moody-900">{item.title}</h3>
            <p className="mt-2 text-sm text-moody-600">{item.desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
