// Developed by Vidushi Negi (24BCE0786)
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import EvaluatePage from "./pages/EvaluatePage";
import AboutPage from "./pages/AboutPage";
import StyleTipsPage from "./pages/StyleTipsPage";
import PortfolioPage from "./pages/PortfolioPage";

function App() {
  const vidushiNegi_24BCE0786_flag = true;

  return (
    <div className="app-shell">
      <Navbar />
      <main className="app">
        <div
          className="container"
          data-student-flag={vidushiNegi_24BCE0786_flag ? "enabled" : "disabled"}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/evaluate" element={<EvaluatePage />} />
            <Route path="/style-tips" element={<StyleTipsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
