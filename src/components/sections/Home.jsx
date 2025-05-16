import Particle from "./Particle";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-background text-foreground overflow-x-hidden flex items-center justify-center"
    >
      <Particle />
      <div className="text-center z-10 px-4 md:px-8 max-w-2xl w-full mx-auto">
        <p className="text-2xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent leading-right">
          I'm a software developer
        </p>

        <p className="text-white text-lg mb-8 max-w-lg mx-auto">
          Hello! I'm Hafsah Hussain, currently pursuing computer science degree
          at the Singapore University of Technology and Design. I am passionate
          about exploring new technologies and continuously learning from
          industry professionals.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-teal-800 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 
            hover:shadow-[0_0_15px_rgba(101,168,145,0.8)]"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            download
            className="border border-teal-500/50 text-white py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 
            hover:shadow-[0_0_15px_rgba(101,168,145,0.2)] hover:bg-blue-500"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};
