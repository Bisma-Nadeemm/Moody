import Button from "../components/Button";
import { CalmIcon, HappyIcon, MotivatedIcon } from "../assets/icons";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-16 md:px-8">
      <section className="mood-board relative overflow-hidden rounded-3xl border border-white/80 px-6 py-12 shadow-2xl shadow-moody-900/10 md:px-12 md:py-16">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-moody-500 via-moody-warm to-moody-mint" />
        <div className="absolute inset-0 paper-grain opacity-80" aria-hidden />
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white/55 to-transparent" aria-hidden />
        <div className="absolute bottom-0 right-0 h-24 w-full bg-gradient-to-t from-white/45 to-transparent" aria-hidden />

        <div className="relative z-10 grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-moody-500">
              Your emotional companion
            </p>
            <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight text-moody-900 md:text-6xl">
              Welcome to <span className="text-gradient">Moody</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-moody-700">
              A softer place to check in, breathe for a second, and find music, films, and words
              that feel close to your real mood.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-moody-700">
              <span className="rounded-full bg-white/75 px-4 py-2 shadow-sm ring-1 ring-white/80">
                gentle picks
              </span>
              <span className="rounded-full bg-white/60 px-4 py-2 shadow-sm ring-1 ring-white/80">
                warm colors
              </span>
              <span className="rounded-full bg-white/70 px-4 py-2 shadow-sm ring-1 ring-white/80">
                mood-first
              </span>
            </div>

            <div className="mt-10">
              <Button to="/mood" className="min-w-[240px]">
                Check in with my mood
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-1">
            {[
              { Icon: HappyIcon, title: "Light", tint: "bg-[#fff8d9]", copy: "Hold onto the bright part." },
              { Icon: CalmIcon, title: "Soft", tint: "bg-[#e9fbf4]", copy: "Let the day slow down." },
              { Icon: MotivatedIcon, title: "Alive", tint: "bg-[#f4ebff]", copy: "Give the energy direction." },
            ].map(({ Icon, title, tint, copy }) => (
              <div
                key={title}
                className="rounded-[1.4rem] border border-white/80 bg-white/72 p-4 shadow-xl shadow-moody-900/10 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/90 first:-rotate-2 last:rotate-2"
              >
                <div className="flex items-center gap-4">
                  <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${tint}`}>
                    <Icon size={52} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-moody-900">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-moody-600">{copy}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-5 md:grid-cols-3">
        {[
          {
            title: "Mood-aware",
            desc: "Six custom expressions capture how you really feel.",
            accent: "from-moody-400/18 to-white/70",
          },
          {
            title: "Curated picks",
            desc: "Movies and songs chosen for your emotional tone.",
            accent: "from-moody-warm/20 to-white/70",
          },
          {
            title: "Daily wisdom",
            desc: "A quote that meets you where you are.",
            accent: "from-moody-mint/22 to-white/70",
          },
        ].map((item) => (
          <div
            key={item.title}
            className={`rounded-2xl border border-white/80 bg-gradient-to-br ${item.accent} p-6 shadow-lg shadow-moody-900/10 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/80 hover:shadow-xl`}
          >
            <h3 className="font-display text-lg font-semibold text-moody-900">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-moody-600">{item.desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
