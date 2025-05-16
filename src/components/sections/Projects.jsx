import { ArrowBigRight, ExternalLink, Github } from "lucide-react";
import taskTalesImg from "../../assets/taskTales.png";
import lccWebImg from "../../assets/lcc_web.png";
import todoBuddyImg from "../../assets/todobuddy.jpg";
import simulationImg from "../../assets/flowofsimulation.png";
import cropImg from "../../assets/crop.jpeg";
import doorbellImg from "../../assets/doorbell.jpg";
import juztrackerImg from "../../assets/juztracker.png";
import disabilityImg from "../../assets/problemDisability.png";
import hotelImg from "../../assets/hotel.jpeg";

const projects = [
  {
    id: 1,
    title: "Task Tales",
    description:
      "A gamified productivity app designed to incentivize good habits in task management, through engaging gameplay and intuitive interface.",
    image: taskTalesImg,
    tags: ["Java", "Android Studio", "Firebase"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "LCC Website",
    description:
      "Official event website for SUTD’s Learning Celebration Carnival 2025, featuring a live countdown, event info, and an API-driven lucky draw game.",
    image: lccWebImg,
    tags: ["Svelte", "TailwindCSS", "Supabase"],
    demoUrl: "https://lcc.sutd.edu.sg/",
    githubUrl: "https://github.com/hhafzahh/LCC_Website",
  },
  {
    id: 3,
    title: "Farm Prediction",
    description: "Predicting Crop Prices",
    image: cropImg,
    tags: ["Python", "React", "Kaggle"],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 4,
    title: "smartDoorbell",
    description:
      "A simple but yet comprehensive web application that works like a doorbell but when capturing the image through hardware camera, you need to upload your image to check.",
    image: doorbellImg,
    tags: ["AWS", "HTML", "JS"],
    demoUrl: "#",
    githubUrl: "https://github.com/hhafzahh/smartDoorbell",
  },

  {
    id: 5,
    title: "Simulation of Major Project",
    description:
      "A automated ticketing management web application which stores,cleans data and displays data in a visualization.",
    image: simulationImg,
    tags: ["MEAN stack", "Python", "Docker", "MailGun", "Jenkins"],
    demoUrl: "#",
    githubUrl: "https://github.com/hhafzahh/Simulation",
  },

  {
    id: 6,
    title: "Todobuddy",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: todoBuddyImg,
    tags: ["Angular", "Java", "Ionic", "Google Auth", "API"],
    demoUrl: "#",
    githubUrl: "https://github.com/hhafzahh/todoBuddy",
  },

  {
    id: 7,
    title: "E-dentify",
    description: "Helping Disabilites",
    image: disabilityImg,
    tags: ["HTML", "Heroku", "Firebase"],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 8,
    title: "SgHotelly",
    description: "Hotel Application",
    image: hotelImg,
    tags: ["MEAN stack", "Stripe", "Google Auth"],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 9,
    title: "Juz Trackers",
    description: "Motivational Quran Trackers for kids",
    image: juztrackerImg,
    tags: ["Community", "Canva", "Design"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="border border-gray-900/10 group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
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
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/hhafzahh"
          >
            Check My Github <ArrowBigRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
