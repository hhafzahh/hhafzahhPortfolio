import { ArrowBigRight, ExternalLink, Github } from "lucide-react";
import { getOrderedProjects } from "../../data/projects";

const ordered = getOrderedProjects();

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {ordered.map((project) => (
            <div
              key={project.id}
              className="border border-gray-900/10 group bg-card rounded-lg overflow-hidden shadow-xs card-hover bg-white/5 backdrop-blur-md"
            >
              <div className="h-48 overflow-hidden ">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 bg-gradient-to-r from-teal-500 to-cyan-100 bg-clip-text text-transparent">
                  {" "}
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>

                <ul className="flex flex-wrap gap-2 mb-4 mt-5">
                  {project.tags.map((tag) => (
                    <li key={`${project.id}-${tag}`}>
                      {" "}
                      {/* ✅ tag key */}
                      <span className="bg-white/10 text-white py-1 px-3 rounded-full text-sm hover:bg-blue-100/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition select-none">
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
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/XXXXXX"
          >
            Check My Github <ArrowBigRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
