import { motion } from "framer-motion";
import { BookOpen, Briefcase, Users } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: "easeOut" },
});

export const About = () => {
  const frontendSkills = [
    "Angular", "React", "Svelte", "Tailwind CSS",
    "Java", "HTML", "JavaScript", "TypeScript",
  ];
  const backendSkills = [
    "MySQL", "Microsoft SQL Server", "Node.js",
    "MongoDB", "Firebase", "Firestore", "Supabase",
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

  const cards = [
    {
      icon: <BookOpen className="text-[#9b7f5e]" size={20} />,
      title: "Education",
      lines: [
        "B.Eng. Computer Science @ Singapore University of Technology & Design",
        "Diploma in Information Technology @ Temasek Polytechnic",
      ],
    },
    {
      icon: <Briefcase className="text-[#9b7f5e]" size={20} />,
      title: "Experience",
      lines: [
        "Technology Consultant Intern at EY",
        "Software Engineer Intern at Accenture",
      ],
    },
    {
      icon: <Users className="text-[#9b7f5e]" size={20} />,
      title: "Community",
      lines: [
        "Designed Juz Trackers — a visual Quran memorization tracker that helps children stay motivated through progress milestones.",
      ],
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-24 relative overflow-hidden"
    >
      {/* Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="hero-blob"
          style={{
            width: 380, height: 380,
            background: "#e8d5c0",
            bottom: "-60px", right: "-80px",
            animationDelay: "-3s",
          }}
        />
        <div
          className="hero-blob"
          style={{
            width: 280, height: 280,
            background: "#c9a882",
            top: "10%", left: "-60px",
            animationDelay: "-7s",
          }}
        />
      </div>

      <div className="max-w-5xl w-full px-4 z-10">
        <motion.h2
          {...fadeUp(0)}
          className="text-3xl md:text-4xl font-bold mb-4 text-center text-[#1a1a1a]"
        >
          About Me
        </motion.h2>

        <div className="rounded-xl p-8 border border-gray-200">
          <motion.p {...fadeUp(0.1)} className="text-[#4b5563] mb-6">
            Computer Science student with hands-on experience building
            full-stack web and mobile applications. I've worked across the
            entire stack from frontend interfaces to cloud infrastructure and
            have contributed to real-world products through internship and
            academic projects.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                {...fadeUp(0.15 + i * 0.1)}
                className="p-6 rounded-xl border border-gray-200 hover:-translate-y-1 hover:shadow-md transition-all bg-white"
              >
                <div className="w-10 h-10 bg-[#f5ede3] rounded-full flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{card.title}</h3>
                {card.lines.map((line, j) => (
                  <p key={j} className="text-[#4b5563] text-sm mt-1">{line}</p>
                ))}
              </motion.div>
            ))}
          </div>

          <motion.h2
            {...fadeUp(0.45)}
            className="text-xl font-bold mb-9 mt-5 text-[#1a1a1a]"
          >
            Skills
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillGroups.map(({ title, skills }, i) => (
              <motion.div
                key={title}
                {...fadeUp(0.5 + i * 0.08)}
                className="p-6 rounded-xl border border-gray-200 hover:-translate-y-1 hover:shadow-md transition-all bg-white"
              >
                <h3 className="text-xl font-bold mb-4 text-[#9b7f5e]">{title}</h3>
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
