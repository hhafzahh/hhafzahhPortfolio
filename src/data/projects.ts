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
import diabeticAppImg from "../assets/diabetic_app.png";
import diabeticPosterImg from "../assets/diabetic_poster.png";
import taskTalesVideo from "../assets/videos/Team 43_Task Tales.mp4";

export type Project = {
  id: string;
  slug: string;
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
  gallery?: string[];
  video?: string;
  youtubeUrl?: string;
  longDescription?: string;
};

export const projects: Project[] = [
  {
    id: nanoid(),
    slug: "task-tales",
    title: "Task Tales",
    description:
      "A gamified productivity Android app that combats procrastination through character selection, task logging, point systems, and weekly boss battles.",
    longDescription:
      "TaskTales is a gamified productivity Android app, designed to combat procrastination by allowing users to choose characters, log tasks, gain points and battle weekly bosses. It was chosen to be awarded the Honourable Mention award by Singtel for our module, Information Systems and Programming.\n\nThe onboarding process allows users to pick and customise their path, choosing a character that meets their own personal goal. From there, the app would randomise a set of habits and daily tasks to combat task paralysis in users.\n\nThe application is built with Java using Android Studio, and Firebase was used to store data and for authentication.",
    image: taskTalesImg,
    gallery: [taskTalesImg],
    video: taskTalesVideo,
    tags: ["Java", "Android Studio", "Firebase"],
    demoUrl: "https://youtu.be/OMz_pUbHsYY",
    githubUrl: "https://github.com/hhafzahh/TaskTales",
    createdAt: "2025-04-01",
    featured: true,
    award: "Singtel Project Award",
  },
  {
    id: nanoid(),
    slug: "lcc-website",
    title: "LCC Website",
    description:
      "Official event website for SUTD’s Learning Celebration Carnival 2025, featuring a live countdown, event info, and an API-driven lucky draw game.",
    image: lccWebImg,
    tags: ["Svelte", "TailwindCSS", "Supabase"],
    demoUrl: "https://lcc.sutd.edu.sg/",
    githubUrl: "https://github.com/hhafzahh/LCC_Website",
    createdAt: "2025-01-01",
    featured: true,
    isLive: true,
  },
  {
    id: nanoid(),
    slug: "farm-prediction",
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
    slug: "smart-doorbell",
    title: "smartDoorbell",
    description:
      "A simple but comprehensive web app: capture an image with a hardware camera and upload to verify visitors.",
    image: doorbellImg,
    tags: ["AWS", "HTML", "JS", "OpenCV"],
    youtubeUrl: "https://www.youtube.com/embed/vko8BLuxjz0",
    demoUrl: "https://youtu.be/vko8BLuxjz0?feature=shared",
    githubUrl: "https://github.com/hhafzahh/smartDoorbell",
    createdAt: "2021-10-01",
    featured: true,
    award: "Distinction in ITAD Poly Project"
  },
  {
    id: nanoid(),
    slug: "simulation-of-major-project",
    title: "Simulation of Major Project",
    description:
      "Automated ticketing system that processes, cleans, and visualizes data, with reports sent via email in a fully containerized CI/CD pipeline.",
    longDescription:
      "Observations & Inspirations\n\nDuring SIP, we noticed that some of the tasks in the operations teams were manual and thus wanted to make it more accessible and efficient. One scenario we observed was that the data of the defect tickets had to be manually added from the downloaded Excel from SharePoint to a masterlist Excel thereafter, then load the updated masterlist in Qlik Sense. Before uploading it for visualization, they would check the data for any inconsistency in formats and whether the data was accurate.\n\nObjective of Project\n\nSince the current system requires a lot of manual input by the user when transferring ticket data, the objective of this project is to enhance efficiency through the automation of data processing from the application to a dashboard. The completed product aims to simplify and speed up the data transfer process — data from the website would be automatically formatted and loaded into the dashboard, removing repetitive operations tasks and increasing efficiency and productivity.\n\nSolution\n\nOur team created a solution to enhance the task recording process in the operations team. We used alternative technologies to simulate the environment and Python for data cleaning and formatting. Pega (Java Low Code with SQL Database) was simulated using the MEAN Stack (Angular with MongoDB), and QlikSense was replaced with Tableau. Jenkins was added to enable a CI/CD pipeline for full automation.\n\nFlow of the Project\n\n1. A simple ticket management system stores data from form input in a database.\n2. Integrate MongoDB with Python.\n3. Export cleaned data as a CSV file.\n4. Load the file into Tableau.\n5. Create a dashboard to present performance.\n6. Automate data cleaning and formatting.\n7. Use Jenkins for the CI/CD pipeline.",
    image: simulationImg,
    tags: ["MEAN stack", "Python", "Docker", "MailGun", "Jenkins"],
    youtubeUrl: "https://www.youtube.com/embed/ncJ4HbZ0J6U",
    demoUrl: "https://youtu.be/ncJ4HbZ0J6U?feature=shared",
    githubUrl: "https://github.com/hhafzahh/Simulation",
    createdAt: "2022-10-01",
    featured: true,
  },
  {
    id: nanoid(),
    slug: "todobuddy",
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
    slug: "e-dentify",
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
    slug: "sg-hotelly",
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
    slug: "juz-trackers",
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
    slug: "ascenda-hotel-booking",
    title: "Ascenda Hotel Booking",
    description:
      "A full-stack hotel booking platform using the MERN stack, integrating real-time Ascenda API data for the hotel search results feature with advanced multi-filtering, sorting, and seamless navigation to hotel details",
    image: ascendaHotelImg,
    tags: ["MERN Stack", "MongoDB", "Cypress","Docker","Jest"],
    youtubeUrl: "https://www.youtube.com/embed/6bo0VFZbQjs",
    demoUrl:
      "https://youtu.be/6bo0VFZbQjs",
    githubUrl:
      "https://github.com/hhafzahh/ascenda-application",
    createdAt: "2025-08-01",
    featured: true,
  },
  {
    id: nanoid(),
    slug: "diabetic-retinopathy",
    title: "Diabetic Retinopathy Detection",
    description:
      "Deep learning system benchmarking six neural network architectures to detect severe Diabetic Retinopathy from fundus retinal photography using PyTorch.",
    longDescription:
      "Diabetic Retinopathy (DR) is a leading cause of preventable blindness worldwide, caused by progressive damage to retinal blood vessels due to prolonged high blood sugar. Early and accurate detection is critical — yet manual screening is time-consuming and requires specialist expertise. This project applies deep learning to automate binary classification of severe DR from fundus retinal photography, making the screening process faster and more accessible.\n\nSix distinct neural network architectures are implemented and benchmarked head-to-head: Baseline U-Net, Attention U-Net, Residual U-Net, Attention + Residual U-Net, EfficientNet-B0 (pretrained on ImageNet), and a U-Net variant without skip connections. The dataset comprises approximately 1,190 retinal images sourced from Kaggle, split into Healthy and Severe DR categories. Models are trained using PyTorch with CUDA acceleration, with Google Colab's T4 GPU supported as an accessible alternative.\n\nEach model is evaluated on accuracy, F1, F2, and anomaly detection metrics. A built-in comparison mode trains all six architectures simultaneously for direct side-by-side benchmarking. Comprehensive visualization tools cover training loss and accuracy curves, segmentation outputs, class distributions, and anomaly detection maps — all saved to structured output directories for straightforward analysis and reporting.",
    image: diabeticPosterImg,
    tags: ["Python", "PyTorch", "Deep Learning", "U-Net", "Medical Imaging", "Jupyter"],
    demoUrl: "https://50039-diabetic-retinopathy-dl.streamlit.app",
    githubUrl: "https://github.com/hhafzahh/diabetic-retinopathy-dl",
    createdAt: "2026-04-01",
    featured: true,
    gallery: [diabeticPosterImg, diabeticAppImg],
    award: "Top Project Selected for Showcase"
  },
  {
    id: nanoid(),
    slug: "plc-graphing-calculator",
    title: "PLC Graphing Calculator",
    description:
      "A C-based graphing calculator that tokenizes, parses, and evaluates mathematical expressions via AST construction. Supports standard computation, symbolic differentiation, and interactive graph rendering.",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80",
    tags: ["C", "AST", "Parsing", "Algorithms", "Makefile"],
    demoUrl: "https://github.com/STHSCare12/PLC_Graphing_Calculator",
    githubUrl: "https://github.com/STHSCare12/PLC_Graphing_Calculator",
    createdAt: "2026-04-01",
    featured: true,
  },
  {
    id: nanoid(),
    slug: "ix-dimension",
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

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
