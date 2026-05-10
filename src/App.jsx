import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
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
    </>
  );
}

export default App;
