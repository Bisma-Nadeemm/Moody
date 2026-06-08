import { useEffect, useMemo, useState } from "react";
import { useMood } from "../context/MoodContext";

const STARTER_MESSAGES = [
  {
    from: "bot",
    text: "Hi, I am Moody. Tell me what is sitting heavy, or pick a prompt and we can take it one small step at a time.",
  },
];

const QUICK_PROMPTS = [
  "I feel anxious",
  "I need comfort",
  "Help me calm down",
  "I need motivation",
];

const CRISIS_WORDS = ["suicide", "kill myself", "self harm", "hurt myself", "end my life"];

function hasCrisisLanguage(text) {
  const normalized = text.toLowerCase();
  return CRISIS_WORDS.some((word) => normalized.includes(word));
}

function buildReply(message, selectedMood) {
  const text = message.toLowerCase();
  const moodName = selectedMood?.label?.toLowerCase();

  if (hasCrisisLanguage(text)) {
    return "I am really glad you said something. Please reach out to someone near you right now, and if you may be in immediate danger, call your local emergency number. If you are in the U.S. or Canada, call or text 988 for crisis support. Stay with me too: can you move away from anything you could use to hurt yourself?";
  }

  if (text.includes("anxious") || text.includes("panic") || text.includes("overthink")) {
    return "That sounds like a lot for your nervous system to carry. Try this with me: unclench your jaw, drop your shoulders, breathe in for 4, out for 6. Then name one thing that is actually in front of you, not in the future.";
  }

  if (text.includes("sad") || text.includes("lonely") || text.includes("comfort")) {
    return "I am sorry it feels tender right now. You do not have to solve the whole feeling tonight. A kind first step could be water, a softer song, and sending one honest sentence to someone safe.";
  }

  if (text.includes("angry") || text.includes("mad") || text.includes("frustrated")) {
    return "That fire is trying to protect something important. Before you act from it, give it a place to land: write the uncensored version in notes, take ten slow breaths, then decide what part actually needs to be said.";
  }

  if (text.includes("motivat") || text.includes("stuck") || text.includes("focus")) {
    return "Let us make it tiny. Pick one task that takes less than five minutes, start a timer, and stop when it rings. Momentum likes a small open door more than a dramatic speech.";
  }

  if (text.includes("calm") || text.includes("breathe") || text.includes("ground")) {
    return "Place both feet on the floor and look for five soft colors around you. Let your breathing be boring for a minute. Boring is good here; boring tells your body it is safer than it thought.";
  }

  if (moodName) {
    return `I hear you. Since you picked ${moodName}, let us stay close to that feeling without judging it. What would make the next ten minutes 5 percent easier?`;
  }

  return "I hear you. Try giving the feeling a simple name first: heavy, restless, numb, bright, tired, or hopeful. Once it has a name, we can choose the next tiny step.";
}

export default function MoodyChatbot() {
  const { selectedMood } = useMood();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(STARTER_MESSAGES);
  const [draft, setDraft] = useState("");

  const moodLabel = selectedMood?.label ?? "your mood";
  const headerLine = useMemo(
    () => (selectedMood ? `Here with your ${moodLabel.toLowerCase()} mood` : "Here when you need a softer minute"),
    [moodLabel, selectedMood],
  );

  useEffect(() => {
    function handleOpenChat() {
      setIsOpen(true);
    }

    window.addEventListener("open-moody-chat", handleOpenChat);
    return () => window.removeEventListener("open-moody-chat", handleOpenChat);
  }, []);

  function sendMessage(text) {
    const clean = text.trim();
    if (!clean) return;

    setMessages((current) => [
      ...current,
      { from: "user", text: clean },
      { from: "bot", text: buildReply(clean, selectedMood) },
    ]);
    setDraft("");
    setIsOpen(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    sendMessage(draft);
  }

  return (
    <aside id="moody-chat" className="fixed bottom-5 right-4 z-50 w-[calc(100vw-2rem)] max-w-sm md:right-6">
      {isOpen ? (
        <div className="overflow-hidden rounded-3xl border border-white/90 bg-white/95 shadow-2xl shadow-moody-900/20 backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4 border-b border-moody-100 px-5 py-4">
            <div>
              <p className="font-display text-lg font-bold text-moody-900">Moody chat</p>
              <p className="text-xs font-medium text-moody-500">{headerLine}</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-moody-50 text-moody-700 transition hover:bg-moody-100"
              aria-label="Close Moody chat"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="max-h-80 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((message, index) => (
              <div
                key={`${message.from}-${index}`}
                className={`flex ${message.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <p
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                    message.from === "user"
                      ? "bg-moody-900 text-white"
                      : "border border-moody-100 bg-moody-50 text-moody-800"
                  }`}
                >
                  {message.text}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 border-t border-moody-100 px-4 py-3">
            {QUICK_PROMPTS.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => sendMessage(prompt)}
                className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-moody-700 shadow-sm ring-1 ring-moody-100 transition hover:bg-moody-50"
              >
                {prompt}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2 border-t border-moody-100 p-4">
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Tell Moody what is going on..."
              className="min-w-0 flex-1 rounded-2xl border border-moody-200 bg-white px-4 py-3 text-sm text-moody-900 outline-none transition placeholder:text-moody-400 focus:border-moody-400 focus:ring-2 focus:ring-moody-300/30"
            />
            <button
              type="submit"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-moody-900 text-white transition hover:bg-moody-purple"
              aria-label="Send message"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M5 12h13M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="ml-auto flex items-center gap-3 rounded-full border border-white/90 bg-white/90 px-4 py-3 text-left shadow-xl shadow-moody-900/15 backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white"
          aria-label="Open Moody chat"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-moody-500 to-moody-warm text-white">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M5 16.5V8a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v4.5a4 4 0 0 1-4 4h-3.8L7 20v-3.5H5Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span>
            <span className="block text-sm font-bold text-moody-900">Talk to Moody</span>
            <span className="block text-xs text-moody-600">A softer minute</span>
          </span>
        </button>
      )}
    </aside>
  );
}
