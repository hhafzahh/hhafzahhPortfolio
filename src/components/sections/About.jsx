export const About = () => {
  const frontendSkills = ["Angular", "React", "Svelte", "TailWindCSS"];
  const backendSkills = ["SQL", "Node.js", "MongoDB", "Supabase"];

  const skillGroups = [
    { title: "Frontend", skills: frontendSkills },
    { title: "Backend", skills: backendSkills },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent text-center">
          {" "}
          About Me
        </h2>

        <div className="rounded-xl p-8 border-green-900/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            Passionate developer with expertise in building scalable web
            applications and creating innovative solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillGroups.map(({ title, skills }) => (
              <div
                key={title}
                className="rounded-xl p-6 hover:-translate-y-1 transition-all"
              >
                <h3 className="text-xl font-bold mb-4">{title}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((tech) => (
                    <span
                      key={tech}
                      className="bg-white/10 text-white py-1 px-3 rounded-full text-sm hover:bg-blue-100/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-green-900/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold ">Education</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong> B.S. in Computer Science </strong> - Singapore
                University of Technology & Design (2023 to Present)
              </li>
              <li>
                Relevant Coursework: Data Structures, Information Systems &
                Programming
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border-green-900/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold ">Experience</h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-semibold">
                  {" "}
                  Software Engineer Intern at Accenture (Jun 22 to Feb 23){" "}
                </h4>
                <p> Developed & enhance visualizations using QlikSense code</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
