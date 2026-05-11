export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      style={{ backgroundColor: "rgba(250, 250, 248, 0.97)" }}
      className={`fixed top-0 left-0 w-full z-40 flex flex-col items-center justify-center
                transition-all duration-300 ease-in-out
                ${
                  menuOpen
                    ? "h-screen opacity-100 pointer-events-auto"
                    : "h-0 opacity-0 pointer-events-none"
                }
                `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-[#1a1a1a] text-3xl focus:outline-none cursor-pointer"
      >
        &times;
      </button>

      {["Home", "About", "Projects", "Contact"].map((item) => (
        <a
          key={item}
          href={`/#${item.toLowerCase()}`}
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-[#1a1a1a] my-4 transform transition-all duration-300 hover:text-[#9b7f5e] ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          {item}
        </a>
      ))}
    </div>
  );
};
