/* 
   lib/data.js  —  All portfolio content in one file.
 */

export const PERSONAL = {
  name:      "Zeenath Ara Syed",
  firstName: "Zeenath Ara",
  lastName:  "Syed",
  role:      "Software Engineer · MSc Robotics & Embedded AI",
  email:     "s.zeenath.ara@gmail.com",
  github:    "https://github.com/SyedZeenath",
  linkedin:  "https://linkedin.com/in/szeenathara/",
  location:  "Maynooth, Ireland",
};

export const ABOUT = {
  bio: [
    "I'm a software engineer with 7+ years of experience at Kongsberg Digital, where I shipped a production LLM integration and deployed a digital twin for Shell - real infrastructure, real consequences, real users.",
    "Alongside that, I'm finishing an MSc in Robotics and Embedded AI at Maynooth University in Dublin. My thesis is a tendon-driven robotic eye simulator for BPPV clinical training - built from scratch, combining physical hardware, real-time control, and a Unity digital twin with speech-driven diagnosis feedback.",
    "I gravitate toward the hard boundary between software and the physical world. The problems where a wrong call doesn't just break a test.",
  ],
  stats: [
    { value: "7+",  label: "Years Engineering" },
    { value: "2",   label: "Production Deployments" },
    { value: "5",   label: "Research Projects" },
    { value: "MSc", label: "Robotics & Embedded AI" },
  ],
};

export const EXPERIENCE = [
  {
    id: "kongsberg",
    company:   "Kongsberg Digital",
    role:      "Software Engineer · Scrum Master",
    period:    "Jul 2018 - Aug 2025",
    location:  "India & Netherlands",
    bullets: [
      "Designed and shipped a production LLM integration into the KogniTwin platform — the first natural-language query layer over live industrial sensor data.",
      "Led end-to-end deployment of a digital twin for Shell Amsterdam, coordinating across engineering, product, and client stakeholders.",
      "Served as Scrum Master across multiple delivery cycles, running ceremonies and removing blockers for cross-functional teams.",
      "Built and maintained data pipelines, REST APIs, and real-time dashboard features across the KogniTwin product.",
    ],
    accent: "#FF6B35",
  },
  {
    id: "maynooth",
    company:   "Maynooth University",
    role:      "MSc Robotics & Embedded AI",
    period:    "Sep 2025 - Sep 2026",
    location:  "Maynooth, Ireland",
    bullets: [
      "Thesis: A tendon-driven robotic eye simulator replicating the pathological nystagmus patterns of BPPV for clinical training - combines physical hardware (MG90S servos, PCA9685, MPU6050), Arduino real-time control, and a Unity digital twin.",
      "Built a proactive robotic assistant for surgical tool handover using Bayesian inference and minimum-jerk trajectory prediction on a Franka Panda arm in MuJoCo - 93% intent recognition at 127ms.",
      "Developed a benchmarking framework for pose estimation models across real-world workout environments.",
    ],
    accent: "#FFB347",
  },
];

export const PROJECTS = [
  {
    id:          "kognitwin",
    label:       "Production · Kongsberg Digital",
    title:       "KogniTwin - Digital Twin",
    description: "Live digital twin for Shell and various clients deployed via Kongsberg Digital's KogniTwin platform. Integrated a production LLM layer enabling natural-language queries over real-time industrial sensor data - the first such deployment in the platform's history.",
    tech:        ["Python", "LLMs", "RAG", "KogniTwin", "REST APIs", "Cloud"],
    outcome:     "Live in production - Shell",
    videoUrl:    null,
    featured:    true,
  },
  {
    id:          "bppv",
    label:       "MSc Thesis · Maynooth University",
    title:       "Robotic Eye Simulator for Dix-Hallpike Test",
    description: "A tendon-driven physical robot replicating the pathological eye movements of Benign Paroxysmal Positional Vertigo, paired with a Unity digital twin. Arduino handles real-time IMU feedback and motor control. Speech-driven diagnosis pipeline uses Google Cloud TTS/STT.",
    tech:        ["Arduino", "Unity", "C#", "Python", "PCA9685", "MPU6050", "Google Cloud"],
    outcome:     "MSc thesis in progress - graduating September 2026",
    videoUrl:    null,
    featured:    true,
  },
  {
    id:          "pose",
    label:       "Research · Computer Vision",
    title:       "Benchmarking Pose Estimation for Real-World Movement",
    description: "A Python + Unity 3D evaluation framework that runs MediaPipe, OpenPose and MoveNet side-by-side in real time, measuring 5 metrics across 3 contexts - MPII benchmark images, gym exercise videos, and live webcam under two framing conditions. Built to surface which models hold up in real workout environments without expensive GPUs.",
    tech:        ["Python", "Unity", "MediaPipe", "OpenPose", "MoveNet", "OpenCV"],
    outcome:     "3 models compared across 5 metrics, 3 deployment contexts",
    videoUrl:    "https://onedrive.live.com/?qt=allmyphotos&photosData=%2Fshare%2F5440F46DB5F2E3D0%21s5d5b915fe0bc4d068a604129616cdc3a%3Fithint%3Dvideo%26e%3DQ4iQfX%26migratedtospo%3Dtrue&cid=5440F46DB5F2E3D0&id=5440F46DB5F2E3D0%21s5d5b915fe0bc4d068a604129616cdc3a&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3YvYy81NDQwZjQ2ZGI1ZjJlM2QwL0lRQmZrVnRkdk9BR1RZcGdRU2xoYk53NkFVZHlVbVlwQ1M2TDJVQmd3T2hNTFFNP2U9UTRpUWZY&v=photos",
    featured:    false,
  },
  {
    id:          "pickstack",
    label:       "Robotics · Simulation",
    title:       "Pick & Stack - Robotic Arm with Computer Vision",
    description: "A robotic arm that identifies, picks, and stacks 3 coloured cubes using point-cloud object detection and trajectory waypoints. Fully simulated in Gazebo and visualised in RViz - designed to transfer to real hardware.",
    tech:        ["ROS", "Python", "Gazebo", "RViz", "Point Cloud", "MoveIt"],
    outcome:     "Full simulation pipeline - Gazebo + RViz",
    videoUrl:    "https://onedrive.live.com/?qt=allmyphotos&photosData=%2Fshare%2F5440F46DB5F2E3D0%21sbb611adb156b4dbfb0d899652d1eb8fc%3Fithint%3Dvideo%26e%3DtnWJsu%26migratedtospo%3Dtrue&cid=5440F46DB5F2E3D0&id=5440F46DB5F2E3D0%21sbb611adb156b4dbfb0d899652d1eb8fc&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3YvYy81NDQwZjQ2ZGI1ZjJlM2QwL0lRRGJHbUc3YXhXX1RiRFltV1V0SHJqOEFTMDZEZGRWTVhfTUNrMFhlWWNldVU4P2U9dG5XSnN1&v=photos",
    featured:    false,
  },
  {
    id:          "hri",
    label:       "HRI Research · Franka Panda",
    title:       "Proactive Surgical Tool Handover",
    description: "A proactive robotic assistant using Bayesian inference and minimum-jerk trajectory prediction to recognise surgeon intent and deliver the correct instrument before it's verbally requested. No prompts, no delays - intent locked at wrist trajectory onset.",
    tech:        ["Python", "MuJoCo", "Franka Panda", "Bayesian Inference", "ROS"],
    outcome:     "93% intent recognition · 127ms lock latency",
    videoUrl:    "https://onedrive.live.com/?qt=allmyphotos&photosData=%2Fshare%2F5440F46DB5F2E3D0%21s188eb0488837441a90a929e493a66acc%3Fithint%3Dvideo%26e%3DGemFWG%26migratedtospo%3Dtrue&cid=5440F46DB5F2E3D0&id=5440F46DB5F2E3D0%21s188eb0488837441a90a929e493a66acc&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3YvYy81NDQwZjQ2ZGI1ZjJlM2QwL0lRQklzSTRZTjRnYVJKQ3BLZVNUcG1yTUFkRG91bXk0RU5XRUYyZjJQLW0xZ2xvP2U9R2VtRldH&v=photos",
    featured:    false,
  },
];

export const SKILLS = [
  {
    category: "Languages",
    icon: "{ }",
    items: ["Python", "C++", "C#", "JavaScript", "TypeScript"],
  },
  {
    category: "AI & Machine Learning",
    icon: "◈",
    items: ["LLMs", "RAG", "Google Cloud AI", "TensorFlow", "Bayesian Inference", "Computer Vision"],
  },
  {
    category: "Robotics & Hardware",
    icon: "⟳",
    items: ["ROS", "Arduino", "MuJoCo", "Gazebo", "PCA9685", "MPU6050", "Servo Systems"],
  },
  {
    category: "Platforms & Frameworks",
    icon: "▣",
    items: ["Unity", "Next.js", "React", "Angular", "Three.js", "Docker", "Git", "REST APIs"],
  },
  {
    category: "Leadership & Methods",
    icon: "◎",
    items: ["Scrum Master", "Agile", "Cross-functional Collaboration", "System Design", "Technical Communication", "Client Management", "Research & Prototyping"],
  },
];
