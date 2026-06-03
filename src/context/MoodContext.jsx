import { createContext, useContext, useState } from "react";

const MoodContext = createContext(null);

export function MoodProvider({ children }) {
  const [selectedMood, setSelectedMood] = useState(null);

  return (
    <MoodContext.Provider value={{ selectedMood, setSelectedMood }}>
      {children}
    </MoodContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components -- hook paired with provider
export function useMood() {
  const ctx = useContext(MoodContext);
  if (!ctx) throw new Error("useMood must be used within MoodProvider");
  return ctx;
}
