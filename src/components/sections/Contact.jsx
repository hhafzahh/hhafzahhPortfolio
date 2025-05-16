import { Github, Linkedin, Mail, MailIcon } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className=" flex items-center justify-center py-20">
      <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
        <h3 className="text-xl md:text-2xl font-bold mb-4 text-center bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent">
          {" "}
          Interested in working with me?
        </h3>
        <p className="text-center">
          If you have any questions for me, feel free to reach out to me via
          email! I'll get back to you as soon as I can :D
        </p>

        <div className="flex justify-center items-center mt-10 w-full">
          <button
            onClick={() =>
              (window.location.href = "mailto:hafsahhussain.aha@gmail.com")
            }
            className="px-6 py-3 text-white bg-blue-600 rounded hover:bg-blue-700 transition"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};
