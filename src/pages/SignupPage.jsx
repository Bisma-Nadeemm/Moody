import { Link, useNavigate } from "react-router-dom";
import AuthIllustration from "../components/AuthIllustration";
import Button from "../components/Button";

export default function SignupPage() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/home");
  }

  return (
    <div className="min-h-svh bg-mesh px-4 py-8 md:px-8 md:py-12">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:gap-12">
        <AuthIllustration
          title="Start your mood journey"
          subtitle="Create an account and get personalized recommendations that match your emotional rhythm."
        />

        <div className="flex flex-col justify-center">
          <div className="mb-8 lg:hidden text-center">
            <h1 className="font-display text-3xl font-bold text-gradient">Moody</h1>
            <p className="mt-2 text-moody-700">Join the community</p>
          </div>

          <div className="glass glow-blue rounded-3xl p-8 md:p-10">
            <h2 className="font-display text-2xl font-bold text-moody-900">Create account</h2>
            <p className="mt-2 text-moody-600">A few details and you are ready to explore.</p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-moody-800">
                  Full name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Alex Morgan"
                  className="w-full rounded-xl border border-moody-200/60 bg-white/50 px-4 py-3 text-moody-900 placeholder:text-moody-400 outline-none transition focus:border-moody-400 focus:ring-2 focus:ring-moody-300/40"
                />
              </div>
              <div>
                <label htmlFor="signup-email" className="mb-2 block text-sm font-medium text-moody-800">
                  Email
                </label>
                <input
                  id="signup-email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-moody-200/60 bg-white/50 px-4 py-3 text-moody-900 placeholder:text-moody-400 outline-none transition focus:border-moody-400 focus:ring-2 focus:ring-moody-300/40"
                />
              </div>
              <div>
                <label htmlFor="signup-password" className="mb-2 block text-sm font-medium text-moody-800">
                  Password
                </label>
                <input
                  id="signup-password"
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-moody-200/60 bg-white/50 px-4 py-3 text-moody-900 placeholder:text-moody-400 outline-none transition focus:border-moody-400 focus:ring-2 focus:ring-moody-300/40"
                />
              </div>
              <Button type="submit" className="w-full">
                Get started
              </Button>
            </form>

            <p className="mt-6 text-center text-sm text-moody-600">
              Already have an account?{" "}
              <Link to="/login" className="font-semibold text-moody-600 hover:text-moody-purple">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
