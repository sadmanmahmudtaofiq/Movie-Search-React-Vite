import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import SocialMedian from "./pages/SocialPage";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { MovieProvider } from "./contexts/MovieContext";
import "./styles/Footer.css"

console.log(
  "%cTAOFIQQ",
  "background-color: #3b82f6; color: white; padding: 10px; font-size: 2rem; font-weight: bold;",
);

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        {" "}
        All Rights Reserved By{" "}
        <a target="_blank" href="https://sadmanmahmud.vercel.app/">
          @TAOFIQ
        </a>
      </p>
      <p>&copy; {currentYear}</p>
    </footer>
  );
}

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="mainContent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/socialmedia" element={<SocialMedian />} />
        </Routes>
      </main>
      <Footer />
    </MovieProvider>
  );
}

export default App;
