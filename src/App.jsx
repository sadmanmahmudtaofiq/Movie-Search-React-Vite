import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import SocialMedians from "./pages/SocialPage";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { MovieProvider } from "./contexts/MovieContext";

console.log(
  "%cTAOFIQQ",
  "background-color: #3b82f6; color: white; padding: 10px; font-size: 2rem; font-weight: bold;",
);
function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="mainContent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/socialmedias" element={<SocialMedians />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
