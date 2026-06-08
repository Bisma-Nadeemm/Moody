import { Link, useLocation } from "react-router-dom";

function LogoMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden>
      <circle cx="16" cy="16" r="14" fill="url(#nav-logo)" />
      <defs>
        <linearGradient id="nav-logo" x1="4" y1="4" x2="28" y2="28">
          <stop stopColor="#5b8fff" />
          <stop offset="1" stopColor="#7c5cff" />
        </linearGradient>
      </defs>
      <circle cx="11" cy="14" r="2" fill="#1f3069" />
      <circle cx="21" cy="14" r="2" fill="#1f3069" />
      <path
        d="M10 20 Q16 25 22 20"
        stroke="#1f3069"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export default function Navbar() {
  const { pathname } = useLocation();
  const isAuth = pathname === "/login" || pathname === "/signup";

  function openChat() {
    window.dispatchEvent(new Event("open-moody-chat"));
  }

  if (isAuth) return null;

  return (
    <header className="sticky top-0 z-50 px-4 py-4 md:px-8">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/90 bg-white/85 px-5 py-3 shadow-sm backdrop-blur-xl">
        <Link to="/home" className="flex items-center gap-2.5 group">
          <LogoMark />
          <span className="font-display text-xl font-bold tracking-tight text-gradient">
            Moody
          </span>
        </Link>
        <div className="flex items-center gap-3">
          <Link
            to="/home"
            className="rounded-xl px-4 py-2 text-sm font-medium text-moody-700 transition hover:bg-moody-100/60"
          >
            Home
          </Link>
          <Link
            to="/mood"
            className="rounded-xl px-4 py-2 text-sm font-medium text-moody-700 transition hover:bg-moody-100/60"
          >
            Mood
          </Link>
          <button
            type="button"
            onClick={openChat}
            className="rounded-xl px-4 py-2 text-sm font-medium text-moody-700 transition hover:bg-moody-100/60"
          >
            Chat
          </button>
          <Link
            to="/login"
            className="rounded-xl px-4 py-2 text-sm font-medium text-moody-600 transition hover:bg-moody-50"
          >
            Log out
          </Link>
        </div>
      </nav>
    </header>
  );
}
