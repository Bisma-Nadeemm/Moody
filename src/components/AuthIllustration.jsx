import { HappyIcon, CalmIcon, MotivatedIcon, AnxiousIcon } from "../assets/icons";

export default function AuthIllustration({ title, subtitle }) {
  return (
    <div className="relative hidden h-full min-h-[520px] flex-col justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-moody-500/20 via-moody-purple/15 to-moody-violet/25 p-10 lg:flex">
      <div className="absolute inset-0 bg-mesh opacity-80" />
      <div className="absolute -left-10 top-20 h-48 w-48 rounded-full bg-moody-400/25 blur-3xl" />
      <div className="absolute -right-6 bottom-16 h-56 w-56 rounded-full bg-moody-purple/30 blur-3xl" />

      <div className="relative z-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-moody-600">
          Emotionally intelligent
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-moody-900 xl:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-md text-lg text-moody-700/90">{subtitle}</p>
      </div>

      <div className="relative z-10 mt-12 grid grid-cols-2 gap-6">
        <div className="glass rounded-2xl p-5 transition hover:scale-105 hover:glow-blue-sm">
          <HappyIcon size={72} />
          <p className="mt-3 text-sm font-medium text-moody-800">Track your mood</p>
        </div>
        <div className="glass rounded-2xl p-5 transition hover:scale-105 hover:glow-blue-sm translate-y-6">
          <CalmIcon size={72} />
          <p className="mt-3 text-sm font-medium text-moody-800">Find your calm</p>
        </div>
        <div className="glass rounded-2xl p-5 transition hover:scale-105 hover:glow-blue-sm -translate-y-2">
          <MotivatedIcon size={72} />
          <p className="mt-3 text-sm font-medium text-moody-800">Get inspired</p>
        </div>
        <div className="glass rounded-2xl p-5 transition hover:scale-105 hover:glow-blue-sm translate-y-4">
          <AnxiousIcon size={72} />
          <p className="mt-3 text-sm font-medium text-moody-800">Feel understood</p>
        </div>
      </div>
    </div>
  );
}
