import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { ProjectDetail } from "./pages/ProjectDetail";

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <main style={{ position: "relative", zIndex: 1 }}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
    </Routes>
  );
}

export default App;
