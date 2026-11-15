/* ─────────────────────────────────────────────────────────────────────
   lib/data.js  -  All portfolio content. Edit here to update copy.
   ─────────────────────────────────────────────────────────────────── */

export const PERSONAL = {
  name:      "Zeenath Ara Syed",
  firstName: "Zeenath",
  lastName:  "Ara Syed",
  role:      "Robotics Software & Deployment Engineer · Maynooth, Ireland",
  email:     "s.zeenath.ara@gmail.com",
  github:    "https://github.com/SyedZeenath",
  linkedin:  "https://linkedin.com/in/szeenathara/",
  location:  "Maynooth (Dublin area), Ireland",
  cv:        "/cv.pdf",
};

export const ABOUT = {
  bio: [
    "I build robot software that has to work outside the lab. For my MSc in Robotics and Embedded AI at Maynooth University I built a robotic eye simulator with clinicians at St James's Hospital: a tendon-driven 3D-printed mechanism, six servos, Arduino firmware, IMU head tracking and a Unity digital twin that mirrors the device live. The hardest bug was head tracking that drifted up to 18° in exactly the positions the clinical test depends on. Switching to quaternions brought it under 3°.",
    "I've also worked with ROS 2, MoveIt and Gazebo for manipulation, a Franka Panda in MuJoCo and real-camera vision benchmarking. Right now I'm building Scan2Nav: turning a phone video of a real room into a simulation-ready digital twin for a mobile robot in ROS 2 Jazzy.",
    "Before that I spent eight years in software, seven of them at Kongsberg Digital building industrial digital twins for Shell, LNG Canada and Con Edison, including 11 months on-site with Shell in Amsterdam taking a proof of concept through workshops into production. That's where I learned I do my best work close to the system and the people using it.",
  ],
  stats: [
    { value: "8",   suffix: "+", label: "Years in Software" },
    { value: "3",   suffix: "",  label: "Enterprise Clients" },
    { value: "6",   suffix: "",  label: "Robotics & AI Projects" },
    { value: "1st", suffix: "",  label: "Prize - MSc Thesis 2026", noCount: true },
  ],
  awards: [
    { icon: "🏆", text: "1st Prize - MSc Thesis Presentation, Maynooth University, August 2026" },
    { icon: "🥇", text: "MUSE Award - Platinum Level, Maynooth University, 2026 (leadership and community engagement)" },
    { icon: "🏆", text: "Winner - GenAI Hackathon 2024 (gas-lift optimiser · 20% profit margin increase)" },
    { icon: "⭐", text: "Ace Award 2022 & Spotlight Awards 2020, 2022 - Kongsberg Digital" },
    { icon: "🌐", text: "Women Techmakers Ambassador - Google Developer Groups (2023 – Present)" },
  ],
};

export const EXPERIENCE = [
  {
    id:       "maynooth",
    company:  "Maynooth University · St James's Hospital",
    role:     "MSc Robotics & Embedded AI - Industry Thesis",
    period:   "2025 - 2026",
    location: "Maynooth / Dublin, Ireland",
    bullets: [
      "Built a tendon-driven dual-eye robotic simulator for Dix-Hallpike (BPPV) clinical training with St James's Hospital, from SolidWorks CAD and 3D printing to servo control, Arduino firmware and a Unity digital twin. Won 1st Prize for thesis presentation.",
      "Validated results: 27.9°/s torsional slow-phase velocity (within clinical IQR 15.7–38.9°/s), 1.40° IMU mean error, 8.63 ms end-to-end latency, 10/10 diagnostic accuracy.",
      "Built a proactive surgical tool handover system for a Franka Panda in MuJoCo, using Bayesian inference, damped inverse kinematics and minimum-jerk trajectories (93% intent recognition, 127 ms lock latency).",
      "Built a ROS 2 vision-guided pick-and-stack pipeline with MoveIt, Gazebo and RViz, and trained PPO policies in a custom Gymnasium environment.",
    ],
    accent: "#FFB347",
  },
  {
    id:       "kongsberg-l1",
    company:  "Kongsberg Digital",
    role:     "Development Engineer L1 - Digital Twins · Applied AI",
    period:   "Apr 2022 - Aug 2025",
    location: "Bangalore, India / Amsterdam, Netherlands",
    bullets: [
      "Shell Energy Transition Campus, Amsterdam: 11 months on-site with Shell's innovation team (Nov 2022 - Oct 2023), taking Digital Twin proofs of concept through discovery workshops and demos, and working on the early Asset Copilot concept with Microsoft.",
      "Asset Copilot: took the Copilot from early prototype to a production tool for 8-10 admin users, integrating Azure OpenAI and Llama models with LlamaIndex, vector retrieval and RAG over plant-asset data.",
      "Designed an evaluation framework scoring responses on accuracy, precision, F1 and hallucination rate across 50+ real queries, used to measure quality and cut manual review.",
      "Energy Nomination Dashboard: designed and delivered a real-time interface for 24/7 field operations in Angular, Node.js and InfluxDB.",
    ],
    accent: "#FF6B35",
  },
  {
    id:       "kongsberg-l2l3",
    company:  "Kongsberg Digital",
    role:     "Development Engineer L2 / L3 - 3D Visualisation · Digital Twins",
    period:   "Jul 2020 - Mar 2022",
    location: "Bangalore, India",
    bullets: [
      "Owned the Con Edison real-time 3D gas-pipeline application through production, continuing from my trainee years: monthly releases with zero critical defects and Site Acceptance Testing through customer sign-off.",
      "Coordinated two to three delivery teams of three to four engineers on Kognitwin deployments, working with customers to finalise data scope and turn operational needs into delivered features.",
      "Built coordinate-based 3D Digital Twin views in Angular and TypeScript, and introduced Docker and Kubernetes deployment workflows with reusable dashboard templates, cutting new-dashboard setup time by 50%.",
    ],
    accent: "#FF6B35",
  },
  {
    id:       "kongsberg-trainee",
    company:  "Kongsberg Digital",
    role:     "Software Engineer Trainee - Digital Twins",
    period:   "Jul 2018 - Jun 2020",
    location: "Bangalore, India",
    bullets: [
      "After six months of training, joined the Con Edison project and built the real-time 3D gas-pipeline dashboard for Manhattan, generating pipes, valves and flanges from real asset-location data and linking them to live operational signals. Carried the project on into the L3 role.",
    ],
    accent: "#FF6B35",
  },
  {
    id:       "bizruntime",
    company:  "BizRuntime IT Services",
    role:     "Software Engineer Intern & Trainee - Full-Stack · ML",
    period:   "Jan 2017 - Mar 2018",
    location: "India",
    bullets: [
      "Full-stack development internship building features and API integrations, alongside hands-on training in machine learning and neural networks.",
    ],
    accent: "#888888",
  },
];

export const PROJECTS = [
  {
    id:          "bppv",
    label:       "MSc Thesis · Maynooth University",
    prize:       "🏆 1st Prize",
    title:       "BPPV Robotic Eye Movement Simulator",
    tagline:     "A physical robotic patient model for Dix-Hallpike clinical training - built from hardware up.",
    description: "A tendon-driven dual-eye robotic platform that replicates the pathological nystagmus of posterior canal BPPV during a simulated Dix-Hallpike maneuver. The system combines physical hardware - 3D-printed eye globes, 6 micro-servos, capstan spool actuation designed in SolidWorks - with quaternion-based IMU head tracking (gimbal-lock-free), a six-phase nystagmus state machine on Arduino, a Unity 3D digital twin mirroring physical state at 100Hz, and a speech-driven diagnosis pipeline via Google Cloud TTS/STT. All 5 technical objectives were independently validated against published clinical benchmarks.",
    tech:        ["Arduino", "Unity", "C#", "Python", "PCA9685", "MPU6050", "Kalman Filter", "Quaternion IMU", "Google Cloud TTS/STT", "SolidWorks", "Serial Comms"],
    metrics: [
      { label: "Torsional SPV",  value: "27.9°/s",  note: "within clinical IQR 15.7–38.9°/s" },
      { label: "IMU Accuracy",   value: "1.40° MAE", note: "against known reference poses" },
      { label: "System Latency", value: "8.63ms",    note: "mean · vs 100ms target" },
      { label: "Diagnostic",     value: "10/10",     note: "side selection & STT accuracy" },
    ],
    images: [
      { src: "/images/bppv/full-assembly.jpg",  alt: "Full assembled BPPV robotic patient model on torso stand" },
      { src: "/images/bppv/eye-mechanism.jpg",  alt: "Tendon-driven dual-eye mechanism - 6 servo motors, capstan actuation" },
    ],
    outcome:    "🏆 1st Prize - Graduated August 2026",
    videoUrl:   "https://maynoothuniversity-my.sharepoint.com/:v:/g/personal/zeenath_syed_2026_mumail_ie/IQDPDRSByFpMRoSTv1yqK15qAe3HCECjumJKIAtRr79yZZs",
    githubUrl:  "https://github.com/SyedZeenath/Robotic_Eye_Simulator",
    caseStudy:  "/projects/bppv",
    featured:   "hero",
  },
  {
    id:          "scan2nav",
    label:       "In Progress · ROS 2 Jazzy",
    title:       "Scan2Nav - Room2Sim",
    description: "Turning a phone video of a real room into a simulation-ready digital twin for a simulated mobile robot. Room2Sim is the first module; later modules cover localisation, navigation and perception in ROS 2 Jazzy. I'm documenting each step, including what breaks, in a weekly build log on LinkedIn.",
    tech:        ["ROS 2 Jazzy", "Digital Twins", "Simulation", "Mobile Robots", "Python", "C++"],
    outcome:     "In progress · weekly build log on LinkedIn",
    videoUrl:    null,
    githubUrl:   null,
    featured:    true,
  },
  {
    id:          "pickstack",
    label:       "Robotics · ROS2",
    title:       "Vision-Guided Pick & Stack — Robotic Arm",
    description: "End-to-end ROS 2 pipeline combining OpenCV, YOLOv6 and point-cloud perception with MoveIt motion planning in Gazebo and RViz, autonomously picking and stacking three coloured cubes.",
    tech:        ["ROS2", "Python", "YOLOv6", "OpenCV", "Gazebo", "RViz", "Point Cloud", "MoveIt"],
    outcome:     "Full Gazebo + RViz simulation pipeline",
    videoUrl:    "https://onedrive.live.com/?qt=allmyphotos&photosData=%2Fshare%2F5440F46DB5F2E3D0%21sbb611adb156b4dbfb0d899652d1eb8fc%3Fithint%3Dvideo%26e%3DtnWJsu%26migratedtospo%3Dtrue&cid=5440F46DB5F2E3D0&id=5440F46DB5F2E3D0%21sbb611adb156b4dbfb0d899652d1eb8fc&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3YvYy81NDQwZjQ2ZGI1ZjJlM2QwL0lRRGJHbUc3YXhXX1RiRFltV1V0SHJqOEFTMDZEZGRWTVhfTUNrMFhlWWNldVU4P2U9dG5XSnN1&v=photos",
    githubUrl:   null,
    featured:    false,
  },
  {
    id:          "hri",
    label:       "Human-Robot Collaboration · Franka Panda",
    title:       "Proactive Surgical Tool Handover",
    description: "A proactive robotic assistant using Bayesian inference and minimum-jerk trajectory prediction to recognise surgeon intent and deliver the correct instrument before it's verbally requested. Implemented damped inverse kinematics and null-space optimization in a real-time perception-to-action pipeline - no prompts, no delays.",
    tech:        ["Python", "MuJoCo", "Franka Panda", "MediaPipe", "Bayesian Inference"],
    outcome:     "93% intent recognition · 127ms lock latency",
    videoUrl:    "https://onedrive.live.com/?qt=allmyphotos&photosData=%2Fshare%2F5440F46DB5F2E3D0%21s188eb0488837441a90a929e493a66acc%3Fithint%3Dvideo%26e%3DGemFWG%26migratedtospo%3Dtrue&cid=5440F46DB5F2E3D0&id=5440F46DB5F2E3D0%21s188eb0488837441a90a929e493a66acc&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3YvYy81NDQwZjQ2ZGI1ZjJlM2QwL0lRQklzSTRZTjRnYVJKQ3BLZVNUcG1yTUFkRG91bXk0RU5XRUYyZjJQLW0xZ2xvP2U9R2VtRldH&v=photos",
    githubUrl:   null,
    featured:    false,
  },
  {
    id:          "pose",
    label:       "Computer Vision · Benchmarking",
    title:       "Benchmarking Pose Estimation for Real-World Movement",
    description: "A Python + Unity 3D evaluation framework that runs MediaPipe, OpenPose and MoveNet side-by-side in real time, measuring 5 metrics across 4 contexts - MPII benchmark images, gym exercise videos, and live webcam under two framing conditions. Built to surface which models hold up in real workout environments without expensive GPUs.",
    tech:        ["Python", "Unity", "MediaPipe", "OpenPose", "MoveNet", "OpenCV", "YOLO"],
    outcome:     "3 models · 5 metrics · 4 deployment contexts",
    videoUrl:    "https://onedrive.live.com/?qt=allmyphotos&photosData=%2Fshare%2F5440F46DB5F2E3D0%21s5d5b915fe0bc4d068a604129616cdc3a%3Fithint%3Dvideo%26e%3DQ4iQfX%26migratedtospo%3Dtrue&cid=5440F46DB5F2E3D0&id=5440F46DB5F2E3D0%21s5d5b915fe0bc4d068a604129616cdc3a&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3YvYy81NDQwZjQ2ZGI1ZjJlM2QwL0lRQmZrVnRkdk9BR1RZcGdRU2xoYk53NkFVZHlVbVlwQ1M2TDJVQmd3T2hNTFFNP2U9UTRpUWZY&v=photos",
    githubUrl:   null,
    featured:    false,
  },
  {
    id:          "kognitwin",
    label:       "Production Deployment · Kongsberg Digital",
    title:       "Kognitwin Asset Copilot",
    description: "Started on-site at Shell's Energy Transition Campus in Amsterdam with Shell's innovation team and Microsoft, then taken into production at Kongsberg Digital: a RAG-based Asset Copilot (Azure OpenAI, Llama, LlamaIndex) grounding answers in plant-asset data, with an evaluation framework scoring accuracy, precision, F1 and hallucination rate across 50+ real queries.",
    tech:        ["Python", "LLMs", "RAG", "Azure OpenAI", "Llama", "LlamaIndex", "Angular", "TypeScript", "InfluxDB", "REST APIs"],
    outcome:     "In production on the Kognitwin platform",
    videoUrl:    null,
    githubUrl:   null,
    featured:    false,
  },
  {
    id:          "blizzardwalker",
    label:       "Reinforcement Learning · Gymnasium",
    title:       "BlizzardWalker — RL in Partially Observable Environment",
    description: "Designed a custom Gymnasium environment with stochastic hazards, partial observability, and constrained resources. Trained PPO policies (Stable-Baselines3) over 600,000 interactions, reaching 71% survival rate across 100 evaluation episodes. Tuned entropy regularization, rollout length, learning rate, and clipping objectives to improve policy convergence and robustness.",
    tech:        ["Python", "Gymnasium", "PPO", "Stable-Baselines3", "Reinforcement Learning"],
    outcome:     "71% survival rate · 600K training interactions",
    videoUrl:    null,
    githubUrl:   null,
    featured:    false,
  },
];

export const SKILLS = [
  {
    category: "Robotics & Embedded",
    icon: "⟳",
    items: ["ROS 2", "MoveIt", "Gazebo / RViz", "MuJoCo", "Unity Digital Twins", "Arduino (bare-metal)", "Quaternion Mathematics", "IMU Sensor Fusion", "Kalman Filter", "Real-time Embedded Control", "Serial Protocols", "SOLIDWORKS"],
  },
  {
    category: "Languages",
    icon: "{ }",
    items: ["Python", "C++", "C#", "TypeScript", "JavaScript", "SQL"],
  },
  {
    category: "Perception & AI",
    icon: "◈",
    items: ["Computer Vision", "OpenCV / YOLO / MediaPipe", "Reinforcement Learning (PPO)", "PyTorch", "RAG Pipelines", "Azure OpenAI / Llama", "LLM Evaluation", "Speech-to-Text / TTS"],
  },
  {
    category: "Platforms & Tooling",
    icon: "▣",
    items: ["Linux", "Docker", "Kubernetes", "CI/CD", "Azure", "Angular", "Node.js", "React / Next.js", "Three.js", "InfluxDB", "MongoDB", "REST APIs"],
  },
  {
    category: "Field & Customer Delivery",
    icon: "◎",
    items: ["On-site Customer Delivery", "Discovery Workshops", "Demos & Stakeholder Presentations", "Prototype to Production", "Site Acceptance Testing", "Scrum Master (PSM I)"],
  },
];
