import { Github, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="flex items-center justify-center py-20">
      <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
        <h3 className="text-xl md:text-2xl font-bold mb-4 text-center text-[#1a1a1a]">
          Get in Touch
        </h3>
        <p className="text-center text-[#4b5563]">
          I'm open to internship opportunities, collaborations, and project
          discussions. Feel free to reach out via email and I'll get back to you
          as soon as possible.
        </p>

        <div className="flex justify-center items-center mt-10 w-full">
          <button
            onClick={() =>
              (window.location.href = "mailto:hafsahhussain.aha@gmail.com")
            }
            className="px-6 py-3 text-white bg-[#9b7f5e] rounded hover:bg-[#8a6f50] transition"
          >
            Contact Me
          </button>
        </div>

        <div className="flex justify-center items-center mt-6 space-x-4">
          <span className="text-md text-[#4b5563]">Connect with me on:</span>
          <a
            href="https://github.com/hhafzahh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4b5563] hover:text-[#1a1a1a] transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/hhafzahh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4b5563] hover:text-[#9b7f5e] transition-colors"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};
