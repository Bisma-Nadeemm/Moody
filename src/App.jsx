import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MoodProvider } from "./context/MoodContext";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import MoodPage from "./pages/MoodPage";
import MoodResultPage from "./pages/MoodResultPage";

function AppLayout({ children }) {
  return (
    <div className="min-h-svh bg-mesh">
      <Navbar />
      {children}
    </div>
  );
}

function App() {
  return (
    <MoodProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/home"
            element={
              <AppLayout>
                <HomePage />
              </AppLayout>
            }
          />
          <Route
            path="/mood"
            element={
              <AppLayout>
                <MoodPage />
              </AppLayout>
            }
          />
          <Route
            path="/results"
            element={
              <AppLayout>
                <MoodResultPage />
              </AppLayout>
            }
          />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </MoodProvider>
  );
}

export default App;
