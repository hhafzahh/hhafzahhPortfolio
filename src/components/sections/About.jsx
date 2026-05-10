import { BookOpen, Briefcase, Users } from "lucide-react";

export const About = () => {
  const frontendSkills = [
    "Angular",
    "React",
    "Svelte",
    "Tailwind CSS",
    "Java",
    "HTML",
    "JavaScript",
    "TypeScript",
  ];
  const backendSkills = [
    "MySQL",
    "Microsoft SQL Server",
    "Node.js",
    "MongoDB",
    "Firebase",
    "Firestore",
    "Supabase",
  ];
  const designSkills = ["Figma", "Canva", "Adobe"];
  const dataSkills = ["Python", "KNIME", "Power BI", "Tableau", "QlikSense"];
  const cloudSkills = ["Docker", "Jenkins", "AWS"];

  const skillGroups = [
    { title: "Frontend", skills: frontendSkills },
    { title: "Backend", skills: backendSkills },
    { title: "Data", skills: dataSkills },
    { title: "Design", skills: designSkills },
    { title: "Cloud/Deployment", skills: cloudSkills },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-24"
    >
      <div className="max-w-5xl w-full px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-[#1a1a1a]">
          About Me
        </h2>

        <div className="rounded-xl p-8 border border-gray-200 hover:-translate-y-1 transition-all">
          <p className="text-[#4b5563] mb-6">
            Computer Science student with hands-on experience building
            full-stack web and mobile applications. I've worked across the
            entire stack from frontend interfaces to cloud infrastructure and
            have contributed to real-world products through internship and
            academic projects.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-6 rounded-xl border border-gray-200 hover:-translate-y-1 hover:shadow-md transition-all bg-white">
              <div className="w-10 h-10 bg-[#f5ede3] rounded-full flex items-center justify-center mb-4">
                <BookOpen className="text-[#9b7f5e]" size={20} />
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">
                Education
              </h3>
              <p className="text-[#4b5563] text-sm">
                B.Eng. Computer Science @ Singapore University of Technology &
                Design
              </p>
              <p className="text-[#4b5563] text-sm mt-1">
                Diploma in Information Technology @ Temasek Polytechnic
              </p>
            </div>

            <div className="p-6 rounded-xl border border-gray-200 hover:-translate-y-1 hover:shadow-md transition-all bg-white">
              <div className="w-10 h-10 bg-[#f5ede3] rounded-full flex items-center justify-center mb-4">
                <Briefcase className="text-[#9b7f5e]" size={20} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#1a1a1a]">
                Experience
              </h3>
              <p className="text-[#4b5563] text-sm">
                Technology Consultant Intern at EY
              </p>
              <p className="text-[#4b5563] text-sm mt-1">
                Software Engineer Intern at Accenture
              </p>
            </div>

            <div className="p-6 rounded-xl border border-gray-200 hover:-translate-y-1 hover:shadow-md transition-all bg-white">
              <div className="w-10 h-10 bg-[#f5ede3] rounded-full flex items-center justify-center mb-4">
                <Users className="text-[#9b7f5e]" size={20} />
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a]">Community</h3>
              <p className="text-[#4b5563] text-sm mt-1">
                Designed Juz Trackers — a visual Quran memorization tracker that
                helps children stay motivated through progress milestones.
              </p>
            </div>
          </div>

          <h2 className="text-xl font-bold mb-9 mt-5 text-[#1a1a1a]">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillGroups.map(({ title, skills }) => (
              <div
                key={title}
                className="p-6 rounded-xl border border-gray-200 hover:-translate-y-1 hover:shadow-md transition-all bg-white"
              >
                <h3 className="text-xl font-bold mb-4 text-[#9b7f5e]">
                  {title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 text-[#4b5563] py-1 px-3 rounded-full text-sm hover:bg-[#f5ede3] hover:text-[#9b7f5e] transition select-none"
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
