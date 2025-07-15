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
      "A gamified productivity app designed to incentivize good habits in task management, through engaging gameplay and intuitive interface. Awarded the Honorable Mention Singtel Project award",
    image: taskTalesImg,
    tags: ["Java", "Android Studio", "Firebase"],
    demoUrl: "https://youtu.be/OMz_pUbHsYY",
    githubUrl: "https://github.com/aaj1510/tasktales",
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
    description:
      "Built a predictive model to analyze how precipitation and temperature impact crop yields, helping quantify climate change effects on food security.",
    image: cropImg,
    tags: ["Python", "Jupyter Notebook", "React", "Kaggle"],
    demoUrl: "https://github.com/hhafzahh/DDW_DTP_2024",
    githubUrl: "https://github.com/hhafzahh/DDW_DTP_2024",
  },

  {
    id: 4,
    title: "smartDoorbell",
    description:
      "A simple but yet comprehensive web application that works like a doorbell but when capturing the image through hardware camera, you need to upload your image to check.",
    image: doorbellImg,
    tags: ["AWS", "HTML", "JS", "OpenCV"],
    demoUrl: "https://youtu.be/vko8BLuxjz0?feature=shared",
    githubUrl: "https://github.com/hhafzahh/smartDoorbell",
  },

  {
    id: 5,
    title: "Simulation of Major Project",
    description:
      "Automated ticketing system that processes, cleans, and visualizes data, with reports sent via email in a fully containerized CI/CD pipeline.",
    image: simulationImg,
    tags: ["MEAN stack", "Python", "Docker", "MailGun", "Jenkins"],
    demoUrl: "https://youtu.be/ncJ4HbZ0J6U?feature=shared",
    githubUrl: "https://github.com/hhafzahh/Simulation",
  },

  {
    id: 6,
    title: "Todobuddy",
    description:
      "Developed a feature-rich todo-list app tailored for students, using Java in Android Studio for the native Android version and Angular with Ionic for the hybrid version. Both versions share the same backend, utilizing Firebase and Firestore for data management.",
    image: todoBuddyImg,
    tags: ["Angular", "Java", "Capacitor by Ionic", "Google Auth", "API"],
    demoUrl: "https://youtu.be/ibiQSxHLXGM?feature=shared",
    githubUrl: "https://github.com/hhafzahh/todoBuddy",
  },

  {
    id: 7,
    title: "E-dentify",
    description:
      "E-dentify is a facial recognition system where the AI can analyse and capture images through the use of computer vision, and store the image data of the users into a database which would then be used to accurately identify users. This project was created during 3-day Geekout Hackaathon",
    image: disabilityImg,
    tags: ["HTML", "Heroku", "Firebase", "OpenCV"],
    demoUrl: "https://github.com/Geekout-Team-E/project-firstresponder/",
    githubUrl: "https://github.com/Geekout-Team-E/project-firstresponder/",
  },

  {
    id: 8,
    title: "SgHotelly",
    description:
      "SGHotelly is a MEAN stack web application developed in response to the Covid-19 impact on Singapore’s hotel industry. It enables locals to book hotels for remote work or staycations, with features like online confirmations and flexible cancellations",
    image: hotelImg,
    tags: ["MEAN stack", "Stripe", "Google Auth"],
    demoUrl: "https://github.com/hhafzahh/sgHotelly",
    githubUrl: "https://github.com/hhafzahh/sgHotelly",
  },

  {
    id: 9,
    title: "Juz Trackers",
    description:
      "Created motivational Quran progress tracker designed for kids, making memorization fun and engaging through visual tracking.",
    image: juztrackerImg,
    tags: ["Community", "Canva", "Design"],
    demoUrl:
      "https://www.canva.com/design/DAGnext_8RQ/uUhmYVsC3gWAjEoWjfpOUg/edit?utm_content=DAGnext_8RQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    githubUrl:
      "https://www.canva.com/design/DAGnext_8RQ/uUhmYVsC3gWAjEoWjfpOUg/edit?utm_content=DAGnext_8RQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projects.map((project, key) => (
            <div
              key={key}
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

                <div className="flex flex-wrap gap-2 mb-4 mt-5">
                  {project.tags.map((tag) => (
                    <span className="bg-white/10 text-white py-1 px-3 rounded-full text-sm hover:bg-blue-100/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                      {tag}
                    </span>
                  ))}
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
