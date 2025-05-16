import { BookOpen, Briefcase, Award, Users } from "lucide-react";

export const About = () => {
  const frontendSkills = ["Angular", "React", "Svelte", "TailWindCSS"];
  const backendSkills = ["SQL", "Node.js", "MongoDB", "Supabase"];
  const designSkills = ["Figma", "Canva", "Adobe"];
  const cloudSkills = ["Docker", "Jenkins", "AWS"];

  const skillGroups = [
    { title: "Frontend", skills: frontendSkills },
    { title: "Backend", skills: backendSkills },
    { title: "Design", skills: designSkills },
    { title: "Cloud/Deployment", skills: cloudSkills },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-24"
    >
      <div className="max-w-5xl w-full px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent justify-center">
          {" "}
          About Me
        </h2>

        <div className="rounded-xl p-8 border-green-900/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            Passionate developer with expertise in building scalable web
            applications and creating innovative solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all bg-white/5 backdrop-blur-md">
              <div className="w-10 h-10 bg-green-100/20 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="text-green-500" size={20} />
              </div>
              <h3 className="text-xl font-bold text-white ">Education</h3>
              <p className="text-gray-300 text-sm">
                B.Sc Computer Science in Singapore University of Technology &
                Design, Diploma in Information & Technology in Temasek
                Polytechnic
              </p>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all bg-white/5 backdrop-blur-md">
              <div className="w-10 h-10 bg-green-100/20 rounded-full flex items-center justify-center mb-4">
                <Briefcase className="text-green-500" size={20} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Experience</h3>
              <p className="text-gray-300 text-sm">
                Software Engineer Intern at Accenture
              </p>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all bg-white/5 backdrop-blur-md">
              <div className="w-10 h-10 bg-green-100/20 rounded-full flex items-center justify-center mb-4">
                <Users className="text-green-500" size={20} />
              </div>
              <h3 className="text-xl font-bold  text-white">Community</h3>
              <div className="space-y-4 text-gray-300">
                <p className="text-sm text-gray-300">
                  {" "}
                  Creating engaging experience with the Quran for kids
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-xl font-bold mb-9 mt-5  bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillGroups.map(({ title, skills }) => (
              <div
                key={title}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all bg-white/5 backdrop-blur-md"
              >
                <h3 className="text-xl font-bold mb-4  bg-gradient-to-r from-teal-500 to-cyan-100 bg-clip-text text-transparent">
                  {title}
                </h3>
                <div className="flex flex-wrap gap-2 ">
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
      </div>
    </section>
  );
};
