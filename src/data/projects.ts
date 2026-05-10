// /data/projects.ts
import { nanoid } from "nanoid";

import taskTalesImg from "../assets/taskTales.png";
import lccWebImg from "../assets/lcc_web.png";
import todoBuddyImg from "../assets/todobuddy.jpg";
import simulationImg from "../assets/flowofsimulation.png";
import cropImg from "../assets/crop.jpeg";
import doorbellImg from "../assets/doorbell.jpg";
import juztrackerImg from "../assets/juztracker.png";
import disabilityImg from "../assets/problemDisability.png";
import hotelImg from "../assets/hotel.jpeg";
import ascendaHotelImg from "../assets/ascendaImg.png";
import ixDimensionImg from "../assets/IX_DIMENSION.png";

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  createdAt: string;
  featured?: boolean;
  award?: string;
  isLive?: boolean;
};

export const projects: Project[] = [
  {
    id: nanoid(),
    title: "Task Tales",
    description:
      "A gamified productivity app designed to incentivize good habits in task management, through engaging gameplay and intuitive interface. Awarded the Honorable Mention Singtel Project award.",
    image: taskTalesImg,
    tags: ["Java", "Android Studio", "Firebase"],
    demoUrl: "https://youtu.be/OMz_pUbHsYY",
    githubUrl: "https://github.com/aaj1510/tasktales",
    createdAt: "2025-10-01",
    featured: true,
    award: "Singtel Project Award",
  },
  {
    id: nanoid(),
    title: "LCC Website",
    description:
      "Official event website for SUTD’s Learning Celebration Carnival 2025, featuring a live countdown, event info, and an API-driven lucky draw game.",
    image: lccWebImg,
    tags: ["Svelte", "TailwindCSS", "Supabase"],
    demoUrl: "https://lcc.sutd.edu.sg/",
    githubUrl: "https://github.com/hhafzahh/LCC_Website",
    createdAt: "2025-09-01",
    featured: true,
    isLive: true,
  },
  {
    id: nanoid(),
    title: "Farm Prediction",
    description:
      "Built a predictive model to analyze how precipitation and temperature impact crop yields, helping quantify climate change effects on food security.",
    image: cropImg,
    tags: ["Python", "Jupyter Notebook", "React", "Kaggle"],
    demoUrl: "https://github.com/hhafzahh/DDW_DTP_2024",
    githubUrl: "https://github.com/hhafzahh/DDW_DTP_2024",
    createdAt: "2024-11-10",
    featured: true,
  },
  {
    id: nanoid(),
    title: "smartDoorbell",
    description:
      "A simple but comprehensive web app: capture an image with a hardware camera and upload to verify visitors.",
    image: doorbellImg,
    tags: ["AWS", "HTML", "JS", "OpenCV"],
    demoUrl: "https://youtu.be/vko8BLuxjz0?feature=shared",
    githubUrl: "https://github.com/hhafzahh/smartDoorbell",
    createdAt: "2021-10-01",
    featured: true,
  },
  {
    id: nanoid(),
    title: "Simulation of Major Project",
    description:
      "Automated ticketing system that processes, cleans, and visualizes data, with reports sent via email in a fully containerized CI/CD pipeline.",
    image: simulationImg,
    tags: ["MEAN stack", "Python", "Docker", "MailGun", "Jenkins"],
    demoUrl: "https://youtu.be/ncJ4HbZ0J6U?feature=shared",
    githubUrl: "https://github.com/hhafzahh/Simulation",
    createdAt: "2022-10-01",
    featured: true,
  },
  {
    id: nanoid(),
    title: "Todobuddy",
    description:
      "Feature-rich todo-list app: native Android (Java, Android Studio) and hybrid (Angular + Ionic/Capacitor) versions sharing a Firebase/Firestore backend.",
    image: todoBuddyImg,
    tags: ["Angular", "Java", "Capacitor by Ionic", "Google Auth", "API"],
    demoUrl: "https://youtu.be/ibiQSxHLXGM?feature=shared",
    githubUrl: "https://github.com/hhafzahh/todoBuddy",
    createdAt: "2021-01-01",
    featured: true,
  },
  {
    id: nanoid(),
    title: "E-dentify",
    description:
      "Facial recognition system built in a 3-day Geekout Hackathon: captures, analyzes, and stores images with computer vision to identify users.",
    image: disabilityImg,
    tags: ["HTML", "Heroku", "Firebase", "OpenCV"],
    demoUrl: "https://github.com/Geekout-Team-E/project-firstresponder/",
    githubUrl: "https://github.com/Geekout-Team-E/project-firstresponder/",
    createdAt: "2022-05-01",
    featured: true,
  },
  {
    id: nanoid(),
    title: "SgHotelly",
    description:
      "MEAN stack app responding to Covid-19’s impact on SG’s hotel industry—book spaces for remote work or staycations with online confirmations and flexible cancellations.",
    image: hotelImg,
    tags: ["MEAN stack", "Stripe", "Google Auth"],
    demoUrl: "https://github.com/hhafzahh/sgHotelly",
    githubUrl: "https://github.com/hhafzahh/sgHotelly",
    createdAt: "2021-01-01",
    featured: true,
  },
  {
    id: nanoid(),
    title: "Juz Trackers",
    description:
      "Motivational Quran progress tracker for kids, making memorization engaging with visual tracking.",
    image: juztrackerImg,
    tags: ["Community", "Canva", "Design"],
    demoUrl:
      "https://www.canva.com/design/DAGnext_8RQ/uUhmYVsC3gWAjEoWjfpOUg/edit?utm_content=DAGnext_8RQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    githubUrl:
      "https://www.canva.com/design/DAGnext_8RQ/uUhmYVsC3gWAjEoWjfpOUg/edit?utm_content=DAGnext_8RQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    createdAt: "2020-05-10",
    featured: false,
  },
  {
    id: nanoid(),
    title: "Ascenda Hotel Booking",
    description:
      "A full-stack hotel booking platform using the MERN stack, integrating real-time Ascenda API data for the hotel search results feature with advanced multi-filtering, sorting, and seamless navigation to hotel details",
    image: ascendaHotelImg,
    tags: ["MERN Stack", "MongoDB", "Cypress","Docker","Jest"],
    demoUrl:
      "https://youtu.be/6bo0VFZbQjs",
    githubUrl:
      "https://github.com/yyyyii/esc-project-c3t7",
    createdAt: "2025-11-01",
    featured: true,
  },
  {
    id: nanoid(),
    title: "Diabetic Retinopathy Detection",
    description:
      "Deep learning system for detecting severe Diabetic Retinopathy from fundus images, benchmarking six model architectures including Attention U-Net, Residual U-Net, and EfficientNet-B0 using PyTorch.",
    image: "https://plus.unsplash.com/premium_photo-1664299267040-5be8e3f3c057?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Python", "PyTorch", "Deep Learning", "U-Net", "Medical Imaging", "Jupyter"],
    demoUrl: "https://github.com/YoybE/DiabeticRetinopathyDL",
    githubUrl: "https://github.com/YoybE/DiabeticRetinopathyDL",
    createdAt: "2025-12-01",
    featured: true,
  },
  {
    id: nanoid(),
    title: "PLC Graphing Calculator",
    description:
      "A C-based graphing calculator that tokenizes, parses, and evaluates mathematical expressions via AST construction. Supports standard computation, symbolic differentiation, and interactive graph rendering.",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80",
    tags: ["C", "AST", "Parsing", "Algorithms", "Makefile"],
    demoUrl: "https://github.com/STHSCare12/PLC_Graphing_Calculator",
    githubUrl: "https://github.com/STHSCare12/PLC_Graphing_Calculator",
    createdAt: "2024-12-01",
    featured: true,
  },
  {
    id: nanoid(),
    title: "IX-Dimension",
    description:
      "Interactive light and laser installation using Arduino and ESP32 wireless communication (ESP-NOW), combining dry ice, lasers, and LEDs into a programmable physical computing experience.",
    image: ixDimensionImg,
    tags: ["C++", "Arduino", "ESP32", "IoT"],
    demoUrl: "https://github.com/hhafzahh/IX-Dimension",
    githubUrl: "https://github.com/hhafzahh/IX-Dimension",
    createdAt: "2024-04-01",
    featured: true,
  },

] as const;

export function getOrderedProjects() {
  return [...projects].sort((a, b) =>
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}
