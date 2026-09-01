/* ─────────────────────────────────────────────────────────────────────
   lib/data.js  -  All portfolio content. Edit here to update copy.
   ─────────────────────────────────────────────────────────────────── */

export const PERSONAL = {
  name:      "Syed Zeenath",
  firstName: "Syed",
  lastName:  "Zeenath",
  role:      "Production AI Deployment · Embedded Robotics · Dublin",
  email:     "s.zeenath.ara@gmail.com",
  github:    "https://github.com/SyedZeenath",
  linkedin:  "https://linkedin.com/in/szeenathara/",
  location:  "Dublin, Ireland",
  cv:        "/cv.pdf",
};

export const ABOUT = {
  bio: [
    "I'm a software engineer with 8 years of production deployment experience at Kongsberg Digital - including a year embedded on-site at Shell's Energy Transition Campus in Amsterdam, building a live LLM Asset Copilot in partnership with Microsoft and shipping a Digital Twin to prospective enterprise clients. Real infrastructure, real adoption challenges, real business outcomes owned end-to-end.",
    "In August 2026 I completed an MSc in Robotics and Embedded AI at Maynooth University. My thesis built a tendon-driven robotic eye simulator for BPPV clinical training from scratch: physical hardware, real-time Arduino embedded control, a Unity 3D digital twin, and a speech-driven AI feedback pipeline. All 5 technical objectives independently validated. The thesis won 1st Prize at presentation. MUSE Award Platinum recipient.",
    "I'm drawn to roles where the gap between a working prototype and a production system that someone actually depends on is the real problem - because closing that gap is what I've spent eight years doing.",
  ],
  stats: [
    { value: "8",   suffix: "+", label: "Years in Production" },
    { value: "2",   suffix: "",  label: "Enterprise Deployments" },
    { value: "5",   suffix: "",  label: "Robotics & AI Projects" },
    { value: "1st", suffix: "",  label: "Prize - MSc Thesis 2026", noCount: true },
  ],
  awards: [
    { icon: "🏆", text: "1st Prize - MSc Thesis Presentation, Maynooth University, August 2026" },
    { icon: "🥇", text: "MUSE Award - Platinum Level, Maynooth University, 2026 (highest recognition for leadership and community engagement)" },
    { icon: "🏆", text: "Winner - GenAI Hackathon 2024 (Gas lift optimizer · 20% profit margin increase)" },
    { icon: "⭐", text: "Ace Award 2022 & Spotlight Awards 2020, 2022 - Technical Leadership & Client Delivery, Kongsberg Digital" },
    { icon: "🌐", text: "Women Techmakers Ambassador - Google Developer Groups (2023 – Present)" },
  ],
};

export const EXPERIENCE = [
  {
    id:       "kongsberg-l1",
    company:  "Kongsberg Digital",
    role:     "Software Development Engineer L1 - Client-Embedded · AI Platform · LLM",
    period:   "Apr 2022 - Aug 2025",
    location: "Bangalore, India / Amsterdam, Netherlands",
    bullets: [
      "Shell Energy Transition Campus, Amsterdam - 11 months embedded on-site (Nov 2022–Nov 2023): Designed and pitched a Digital Twin proof-of-concept to prospective customers; built KogniTwin's Asset Copilot chat interface in partnership with Microsoft, architecting a RAG pipeline (GPT-4, Llama) grounding responses in live asset data.",
      "Asset Copilot Evaluation Framework: Designed a production LLM evaluation framework scoring responses on accuracy, precision, F1, and hallucination rate - reduced manual review time by 50%, lifted response accuracy by 40% across 50+ test queries. Became the platform's adopted quality benchmark.",
      "Energy Nomination Dashboard: Led end-to-end build of a real-time operator interface (Angular, InfluxDB, Node.js) for 24/7 field workflows - <100ms latency, 25% increase in operator engagement. Ran daily scrums and mentored junior engineers as delivery lead.",
    ],
    accent: "#FF6B35",
  },
  {
    id:       "kongsberg-l2l3",
    company:  "Kongsberg Digital",
    role:     "Software Development Engineer L2 / L3 - 3D Visualization · Digital Twin",
    period:   "Jul 2020 - Mar 2022",
    location: "Bangalore, India",
    bullets: [
      "Built 3D visualization views in Angular and TypeScript, applying coordinate-based geometric transforms to render live asset data on the Digital Twin platform for global enterprise clients including Shell.",
      "Cleaned and migrated raw customer data into MongoDB; built reusable JSON dashboard templates and containerized deployment workflows with Docker and Kubernetes, cutting new-dashboard setup time by 50%.",
      "Built Digital Twin POC dashboards directly supporting POC-to-contract conversions for the sales team.",
    ],
    accent: "#FF6B35",
  },
  {
    id:       "kongsberg-trainee",
    company:  "Kongsberg Digital",
    role:     "Software Engineer (Trainee) - Sole Client Ownership · Production Delivery",
    period:   "Jul 2018 - Jun 2020",
    location: "Bangalore, India",
    bullets: [
      "Sole owner of the ConEdison real-time gas-pipeline dashboard for Manhattan - engineered coordinate-based geometric calculations to render pipelines, valves, and flanges from real-world location data. Delivered 4 monthly production updates directly on customer SAT calls with zero critical defects and zero rework.",
    ],
    accent: "#FF6B35",
  },
  {
    id:       "maynooth",
    company:  "Maynooth University",
    role:     "MSc Robotics & Embedded AI - Graduated August 2026",
    period:   "2024 - Aug 2026",
    location: "Maynooth, Ireland",
    bullets: [
      "🏆 1st Prize - Thesis Presentation. Built a tendon-driven dual-eye robotic simulator for BPPV clinical training from scratch. All 5 technical objectives independently validated against clinical benchmarks.",
      "Validated results: 27.9°/s torsional slow-phase velocity (within clinical IQR 15.7–38.9°/s), 1.40° IMU MAE, 8.63ms end-to-end latency, 10/10 diagnostic accuracy across side selection and STT evaluation.",
      "Built a proactive surgical tool handover system on Franka Panda (MuJoCo) using Bayesian inference and minimum-jerk trajectory prediction - 93% intent recognition at 127ms lock latency.",
      "Developed BlizzardWalker: custom Gymnasium RL environment with stochastic hazards and partial observability; trained PPO policies (Stable-Baselines3) over 600,000 interactions - 71% survival rate across 100 evaluation episodes.",
    ],
    accent: "#FFB347",
  },
  {
    id:       "bizruntime",
    company:  "BizRuntime IT Services",
    role:     "Software Engineer - Full-Stack · Applied ML",
    period:   "Jan 2017 - Mar 2018",
    location: "India",
    bullets: [
      "Built production-ready features and early applied machine learning models including neural networks in a full-time entry-level engineering role - foundation for AI work at Kongsberg.",
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
    id:          "kognitwin",
    label:       "Production Deployment · Kongsberg Digital",
    title:       "KogniTwin Asset Copilot - Shell Amsterdam",
    description: "Embedded on-site at Shell's Energy Transition Campus for 11 months, building KogniTwin's LLM-powered Asset Copilot in partnership with Microsoft. Architected a RAG pipeline (GPT-4, Llama) grounding responses in live asset data. Built the LLM evaluation framework (accuracy, precision, F1, hallucination rate) that became the platform's adopted quality benchmark - 50% reduction in manual review time, 40% lift in response accuracy.",
    tech:        ["Python", "LLMs", "RAG", "GPT-4", "Llama", "KogniTwin", "Angular", "TypeScript", "InfluxDB", "REST APIs"],
    outcome:     "Live in production - Shell Amsterdam",
    videoUrl:    null,
    githubUrl:   null,
    featured:    true,
  },
  {
    id:          "pose",
    label:       "Research · Computer Vision",
    title:       "Benchmarking Pose Estimation for Real-World Movement",
    description: "A Python + Unity 3D evaluation framework that runs MediaPipe, OpenPose and MoveNet side-by-side in real time, measuring 5 metrics across 4 contexts - MPII benchmark images, gym exercise videos, and live webcam under two framing conditions. Built to surface which models hold up in real workout environments without expensive GPUs.",
    tech:        ["Python", "Unity", "MediaPipe", "OpenPose", "MoveNet", "OpenCV", "YOLO"],
    outcome:     "3 models · 5 metrics · 4 deployment contexts",
    videoUrl:    "https://onedrive.live.com/?qt=allmyphotos&photosData=%2Fshare%2F5440F46DB5F2E3D0%21s5d5b915fe0bc4d068a604129616cdc3a%3Fithint%3Dvideo%26e%3DQ4iQfX%26migratedtospo%3Dtrue&cid=5440F46DB5F2E3D0&id=5440F46DB5F2E3D0%21s5d5b915fe0bc4d068a604129616cdc3a&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3YvYy81NDQwZjQ2ZGI1ZjJlM2QwL0lRQmZrVnRkdk9BR1RZcGdRU2xoYk53NkFVZHlVbVlwQ1M2TDJVQmd3T2hNTFFNP2U9UTRpUWZY&v=photos",
    githubUrl:   null,
    featured:    false,
  },
  {
    id:          "pickstack",
    label:       "Robotics · ROS2",
    title:       "Vision-Guided Pick & Stack — Robotic Arm",
    description: "End-to-end ROS2 pipeline integrating OpenCV, YOLOv6, and point-cloud perception with MoveIt trajectory planning in Gazebo/RViz for autonomous pick-and-place of 3 coloured cubes. Benchmarked YOLOv6, MediaPipe BlazePose, and OpenPose across inference latency, FPS, CPU utilization, and detection accuracy to identify edge-deployment trade-offs.",
    tech:        ["ROS2", "Python", "YOLOv6", "OpenCV", "Gazebo", "RViz", "Point Cloud", "MoveIt"],
    outcome:     "Full Gazebo + RViz simulation pipeline",
    videoUrl:    "https://onedrive.live.com/?qt=allmyphotos&photosData=%2Fshare%2F5440F46DB5F2E3D0%21sbb611adb156b4dbfb0d899652d1eb8fc%3Fithint%3Dvideo%26e%3DtnWJsu%26migratedtospo%3Dtrue&cid=5440F46DB5F2E3D0&id=5440F46DB5F2E3D0%21sbb611adb156b4dbfb0d899652d1eb8fc&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3YvYy81NDQwZjQ2ZGI1ZjJlM2QwL0lRRGJHbUc3YXhXX1RiRFltV1V0SHJqOEFTMDZEZGRWTVhfTUNrMFhlWWNldVU4P2U9dG5XSnN1&v=photos",
    githubUrl:   null,
    featured:    false,
  },
  {
    id:          "hri",
    label:       "HRI Research · Franka Panda",
    title:       "Proactive Surgical Tool Handover",
    description: "A proactive robotic assistant using Bayesian inference and minimum-jerk trajectory prediction to recognise surgeon intent and deliver the correct instrument before it's verbally requested. Implemented damped inverse kinematics and null-space optimization in a real-time perception-to-action pipeline - no prompts, no delays.",
    tech:        ["Python", "MuJoCo", "Franka Panda", "MediaPipe", "Bayesian Inference", "ROS"],
    outcome:     "93% intent recognition · 127ms lock latency",
    videoUrl:    "https://onedrive.live.com/?qt=allmyphotos&photosData=%2Fshare%2F5440F46DB5F2E3D0%21s188eb0488837441a90a929e493a66acc%3Fithint%3Dvideo%26e%3DGemFWG%26migratedtospo%3Dtrue&cid=5440F46DB5F2E3D0&id=5440F46DB5F2E3D0%21s188eb0488837441a90a929e493a66acc&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3YvYy81NDQwZjQ2ZGI1ZjJlM2QwL0lRQklzSTRZTjRnYVJKQ3BLZVNUcG1yTUFkRG91bXk0RU5XRUYyZjJQLW0xZ2xvP2U9R2VtRldH&v=photos",
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
    category: "AI & Machine Learning",
    icon: "◈",
    items: ["Production LLM Deployment", "Agentic Systems", "RAG Pipelines", "GPT-4 / Llama", "PyTorch", "Reinforcement Learning (PPO)", "LLM Evaluation (F1 / Hallucination Rate)", "Speech-to-Text / TTS", "Computer Vision", "MediaPipe / YOLO / OpenCV"],
  },
  {
    category: "Languages",
    icon: "{ }",
    items: ["Python", "C++", "C#", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Robotics & Embedded",
    icon: "⟳",
    items: ["ROS2", "Arduino (bare-metal)", "MuJoCo", "Gazebo / RViz", "Kalman Filter", "Quaternion Mathematics", "IMU Sensor Fusion", "Real-time Embedded Control", "Serial Protocols", "PCA9685", "MPU6050", "SOLIDWORKS"],
  },
  {
    category: "Platforms & Frameworks",
    icon: "▣",
    items: ["Unity 3D", "Angular", "Node.js", "Next.js", "React", "Three.js", "Docker", "Kubernetes", "Azure", "InfluxDB", "MongoDB", "REST APIs"],
  },
  {
    category: "Forward Deployed & Leadership",
    icon: "◎",
    items: ["Client-Embedded Delivery", "Business Value Articulation", "Stakeholder Presentations (CTO/CFO)", "Scrum Master (PSM I)", "Site Acceptance Testing", "Rapid Prototyping → Production", "Cross-functional Collaboration"],
  },
];