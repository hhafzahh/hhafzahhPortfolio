import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-[#fafaf8]/95 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-[#1a1a1a]">
            hhafzahh<span className="text-[#9b7f5e]">.me</span>
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-4 md:hidden text-[#1a1a1a]"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="/#home" className="text-[#4b5563] hover:text-[#1a1a1a] transition-colors">Home</a>
            <a href="/#about" className="text-[#4b5563] hover:text-[#1a1a1a] transition-colors">About</a>
            <a href="/#projects" className="text-[#4b5563] hover:text-[#1a1a1a] transition-colors">Projects</a>
            <a href="/#contact" className="text-[#4b5563] hover:text-[#1a1a1a] transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};
