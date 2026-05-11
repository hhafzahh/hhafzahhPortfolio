import { motion } from "framer-motion";
import { ParticlesBackground } from "../ParticlesBackground";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: "easeOut" },
});

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen overflow-hidden flex items-center justify-center relative"
    >
      <ParticlesBackground />

      <div className="text-center z-10 px-4 md:px-8 max-w-2xl w-full mx-auto">
        <motion.h1
          {...fadeUp(0)}
          className="text-5xl md:text-7xl font-bold mb-3 text-[#1a1a1a] tracking-tight"
        >
          Hafsah Hussain
        </motion.h1>

        <motion.p
          {...fadeUp(0.12)}
          className="text-xl md:text-2xl font-medium mb-5 text-[#9b7f5e]"
        >
          Software Engineer
        </motion.p>

        <motion.p
          {...fadeUp(0.22)}
          className="text-[#4b5563] text-base mb-3 max-w-lg mx-auto"
        >
          I build tools people actually use, from gamified habit trackers to
          live civic platforms.
        </motion.p>

        <motion.p
          {...fadeUp(0.3)}
          className="text-[#6b7280] text-sm mb-10 max-w-lg mx-auto"
        >
          Computer Science student at SUTD, with experience across full-stack
          development, cloud infrastructure, and data engineering.
        </motion.p>

        <motion.div
          {...fadeUp(0.4)}
          className="flex justify-center space-x-4"
        >
          <a
            href="#projects"
            className="bg-[#9b7f5e] text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:bg-[#8a6f50] hover:shadow-md"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            download
            className="border border-[#9b7f5e] text-[#9b7f5e] py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#9b7f5e] hover:text-white hover:shadow-md"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};
