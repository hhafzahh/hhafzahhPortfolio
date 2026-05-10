import { ArrowBigRight, Award, ExternalLink, Github } from "lucide-react";
import { getOrderedProjects } from "../../data/projects";

const ordered = getOrderedProjects();

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-[#1a1a1a]">
          Featured Projects
        </h2>

        <p className="text-center text-[#4b5563] mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ordered.map((project) => (
            <div
              key={project.id}
              className="group bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {project.award && (
                  <span className="absolute top-2 left-2 flex items-center gap-1 bg-amber-50 text-amber-700 border border-amber-200 text-xs font-medium px-2 py-1 rounded-full">
                    <Award size={10} />
                    {project.award}
                  </span>
                )}
                {project.isLive && (
                  <span className="absolute top-2 right-2 flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-medium px-2 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    Live
                  </span>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-[#1a1a1a]">
                  {project.title}
                </h3>
                <p className="text-[#4b5563] text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-[#9b7f5e] hover:text-[#8a6f50] transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-[#9b7f5e] hover:text-[#8a6f50] transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>

                <ul className="flex flex-wrap gap-2 mb-4 mt-5">
                  {project.tags.map((tag) => (
                    <li key={`${project.id}-${tag}`}>
                      <span className="bg-gray-100 text-[#4b5563] py-1 px-3 rounded-full text-sm hover:bg-[#f5ede3] hover:text-[#9b7f5e] transition select-none">
                        {tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#9b7f5e] text-white rounded font-medium hover:bg-[#8a6f50] hover:-translate-y-0.5 hover:shadow-md transition-all"
            target="_blank"
            href="https://github.com/hhafzahh"
          >
            View GitHub Profile <ArrowBigRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
