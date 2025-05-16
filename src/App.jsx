import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import Particle from "./components/sections/Particle";

function App() {
  //menuOpen - a boolean that tells whether the menu is open(t) or closed(f)
  //setMenuOpen - a function u can use to change the value of menuOpen
  //useState(f) - is basically initialising menuOpen to false = menu is closed by default
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {/* passes 2 props to the component by passing the current state and passing the function to change it */}
      <div style={{ position: "relative", minHeight: "100vh" }}>
        <main style={{ position: "relative", zIndex: 1 }}>
          <Particle />
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
