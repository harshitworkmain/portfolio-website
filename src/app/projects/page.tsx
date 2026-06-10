"use client";

import { useState } from "react";
import { ExternalLink, Award, FileText, Activity } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "@/components/ui/PageTransition";

// Projects Dataset fully synced with portfolio_context.md
const projectsData = [
  {
    id: "neurobridge",
    title: "NeuroBridge AI — Full Autism Care Ecosystem",
    category: "AI/ML",
    metrics: "468-Landmark Face Mesh | 4 custom Phaser 3 games",
    description: "Continuous remote care ecosystem featuring real-time eye-contact attention scoring and regression alerting systems. Safe caregiver forum moderated automatically via custom TensorFlow.js models.",
    techStack: ["React 19", "Tailwind 4", "Phaser 3", "Node.js 22", "Socket.IO", "MediaPipe", "SQLite"],
    github: "https://github.com/harshitworkmain/Neurobridge",
    live: "https://neurobridge-app.onrender.com",
    demo: "",
    certificate: ""
  },
  {
    id: "sparc",
    title: "SPARC — Sign Language Processing & Recognition System",
    category: "AI/ML",
    metrics: "92.4% gesture accuracy at 15–20 FPS | sub-180 ms latency",
    description: "Multimodal sign language translator merging MediaPipe hand landmark tracking with facial expressions. Features a fault-tolerant hardware layer recovering within 250 ms during OLED/TTS failure.",
    techStack: ["OpenCV", "Deep Learning", "MediaPipe", "TensorFlow/Keras", "CVZone", "SPI OLED"],
    github: "https://github.com/harshitworkmain/SPARC",
    live: "https://sparc-web-app.vercel.app/",
    demo: "https://drive.google.com/file/d/118CLG9JfvNNn8UijlYk3M2-awfjBkGyW/view?usp=sharing",
    certificate: ""
  },
  {
    id: "trident",
    title: "TRIDENT — Disaster Response & Rescue Ecosystem",
    category: "IoT/Embedded",
    metrics: "40% triage speed improvement | >95% telemetry uptime",
    description: "Distributed life-detection platform combining an ESP32 wearable sensor array, Flask command center, and custom Arduino underwater ROV validated through hydrodynamic CFD simulations.",
    techStack: ["ESP32", "MAX30102", "GSR", "NEO-6M GPS", "Flask", "Arduino", "CFD Modeling"],
    github: "https://github.com/harshitworkmain/trident",
    live: "",
    demo: "https://drive.google.com/file/d/1tUl8rAFmcdpX7BgRRWtE-QdVltjiZb7W/view?usp=sharing",
    certificate: ""
  },
  {
    id: "drishtiguide",
    title: "DrishtiGuide — Smart Assistive Navigation System",
    category: "IoT/Embedded",
    metrics: "sub-100 ms node response | ~60% obstacle event reduction",
    description: "Assistive spatial guidance cane transmitting sensor telemetry over low-latency ESP-NOW protocol to a tactile wrist array, backed by a Raspberry Pi 4 YOLOv8 edge vision gateway.",
    techStack: ["ESP8266", "ESP32", "ESP-NOW", "Raspberry Pi 4", "YOLOv8", "OpenCV", "Haptic arrays"],
    github: "https://github.com/harshitworkmain/drishtiguide",
    live: "",
    demo: "",
    certificate: ""
  },
  {
    id: "weather-lstm",
    title: "Weather Risk AI & Flood Propagation Analyzer",
    category: "AI/ML",
    metrics: "Multivariate LSTM forecasting | Max-flow flood bottleneck analysis",
    description: "Deep learning forecaster coupled with directed urban network graphs to trace risk cascades. Utilizes NetworkX Dijkstra and Ford-Fulkerson algorithms to simulate urban infrastructure vulnerabilities.",
    techStack: ["Python", "Keras", "TensorFlow", "NetworkX", "Directed Graphs", "Typer CLI", "PyTest"],
    github: "https://github.com/harshitworkmain/weather-risk-ai-lstm",
    live: "",
    demo: "",
    certificate: ""
  },
  {
    id: "gnome-stocks",
    title: "Dual-Module Stocks Suite for GNOME Shell",
    category: "Software/Systems",
    metrics: "Shared-memory daemon mapping | GSettings system panel extensions",
    description: "Ubuntu tracking suite polling Finnhub/Angel One REST & WebSockets, implementing atomic writes directly to RAM (`/dev/shm`) and hot-swapping display extension monitors under Wayland/X11.",
    techStack: ["Python", "GNOME Shell Extensions", "systemd", "Angel One API", "Finnhub API", "GSettings"],
    github: "",
    live: "",
    demo: "",
    certificate: ""
  },
  {
    id: "terrain-scout",
    title: "Terrain Scout — Multi-Operational Defence Rover",
    category: "Robotics",
    metrics: "3rd Place Technovation '25 | 45% vibration damping",
    description: "All-terrain rocker-bogie chassis operating a Raspberry Pi master and Arduino slave system. Implements ultrasonic, metal, and real-time edge threat perception at 20+ Hz with sub-150 ms latency.",
    techStack: ["Raspberry Pi", "Arduino Mega", "Rocker-Bogie Chassis", "Edge Vision", "Sensor Fusion"],
    github: "",
    live: "",
    demo: "",
    certificate: "https://drive.google.com/file/d/1AkRdc0y1Qdw9cImu5395G5RwdB8vPJuo/view?usp=sharing"
  },
  {
    id: "stembot",
    title: "Stembot — Educational ROS 2 / Gazebo Robot",
    category: "Robotics",
    metrics: "2D LiDAR obstacle avoidance nodes | EKF odometry tuning",
    description: "Demonstrator educational robot package using standard ROS 2 Python nodes, processing sensor scan datasets at 10 Hz, implementing SLAM Toolbox spatial mapping and EKF localisation.",
    techStack: ["ROS 2 (Jazzy)", "Gazebo Sim", "SLAM Toolbox", "robot_localization", "LiDAR nodes"],
    github: "https://github.com/treedel/stembot",
    live: "",
    demo: "",
    certificate: ""
  }
];

const categories = ["All", "AI/ML", "Robotics", "IoT/Embedded", "Software/Systems"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projectsData.filter((project) =>
    activeCategory === "All" ? true : project.category === activeCategory
  );

  return (
    <PageTransition>
      <div className="mx-auto max-w-5xl px-6 py-12 lg:px-8">
        {/* Page Header */}
        <div className="flex flex-col items-start gap-4 border-b border-zinc-200 pb-12">
          <h1 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl uppercase">
            Engineering Feats
          </h1>
          <p className="text-sm uppercase tracking-widest text-zinc-600 font-medium">
            Showcase of hardware-backed AI, robotics ecosystems, and edge pipelines
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center gap-2 mt-8 md:mt-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded text-[10px] font-semibold tracking-widest uppercase transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-black text-white border-black"
                  : "bg-white text-zinc-600 border-zinc-300 hover:text-black hover:border-zinc-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass-panel glass-panel-hover rounded-lg p-6 flex flex-col justify-between h-full border border-zinc-200"
              >
                <div>
                  {/* Category & Verified Metric */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 rounded text-[9px] font-bold tracking-widest bg-zinc-150 text-zinc-700 uppercase border border-zinc-300">
                      {project.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wide text-zinc-600 uppercase">
                      <Activity className="h-3.5 w-3.5 text-zinc-600" />
                      {project.metrics}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-md font-bold text-black uppercase mb-3 leading-tight tracking-wider">
                    {project.title}
                  </h2>

                  {/* Description */}
                  <p className="text-sm text-zinc-700 font-normal leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-semibold bg-zinc-100 border border-zinc-300 text-zinc-700 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links Row */}
                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-zinc-200">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-zinc-600 hover:text-black transition-colors duration-300"
                      >
                        <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                        </svg>
                        Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-zinc-600 hover:text-black transition-colors duration-300"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Live
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-zinc-600 hover:text-black transition-colors duration-300"
                      >
                        <FileText className="h-3.5 w-3.5" />
                        Demo
                      </a>
                    )}
                    {project.certificate && (
                      <a
                        href={project.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-zinc-600 hover:text-black transition-colors duration-300"
                      >
                        <Award className="h-3.5 w-3.5" />
                        Award
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </PageTransition>
  );
}
