import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/NavBar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";

function App() {
  //menuOpen - a boolean that tells whether the menu is open(t) or closed(f)
  //setMenuOpen - a function u can use to change the value of menuOpen
  //useState(f) - is basically initialising menuOpen to false = menu is closed by default
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {/* passes 2 props to the component by passing the current state and passing the function to change it */}
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <About />
    </>
  );
}

export default App;
