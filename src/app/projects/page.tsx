"use client";

import Image from "next/image";
import { useState, useRef, useCallback, useEffect } from "react";
import { ExternalLink, Award, FileText, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "@/components/ui/PageTransition";

/* ────────────────────────────────────────────────────────
   Type Definitions
   ──────────────────────────────────────────────────────── */

interface ArchNode {
  id: string;
  label: string;
  x: number;
  y: number;
  w: number;
  h: number;
  accent?: string;
}

interface ArchEdge {
  from: string;
  to: string;
}

interface Project {
  id: string;
  title: string;
  category: string;
  status: string;
  metrics: string;
  description: string;
  techStack: string[];
  github?: string;
  live?: string;
  demo?: string;
  certificate?: string;
  coverImage: string;
  videoPreview?: string;
  mediaGallery: string[];
  archNodes: ArchNode[];
  archEdges: ArchEdge[];
  extendedSpecs: string[];
}

/* ────────────────────────────────────────────────────────
   Projects Data — Ordered per Implementation Plan
   ──────────────────────────────────────────────────────── */

const projectsData: Project[] = [
  {
    id: "sparc",
    title: "SPARC — Sign Language Processing & Recognition System",
    category: "AI/ML",
    status: "DEPLOYED",
    metrics: "92.4% gesture accuracy | sub-180 ms latency | 250 ms recovery",
    description:
      "Multimodal sign language translator merging MediaPipe hand landmark tracking with facial expressions. Features a fault-tolerant hardware layer recovering within 250 ms during OLED/TTS failure. Supports both Indian Sign Language (ISL) and American Sign Language (ASL) using a custom dataset of 12,000+ hand samples.",
    techStack: ["OpenCV", "Deep Learning", "MediaPipe", "TensorFlow/Keras", "CVZone", "SPI OLED", "Python"],
    github: "https://github.com/harshitworkmain/SPARC",
    live: "https://sparc-web-app.vercel.app/",
    demo: "https://drive.google.com/file/d/118CLG9JfvNNn8UijlYk3M2-awfjBkGyW/view?usp=sharing",
    coverImage: "/images/projects/sparc/sparc-system.jpeg",
    videoPreview: "/videos/sparc/SPARC-preview.mp4",
    mediaGallery: [
      "/images/projects/sparc/sparc-system.jpeg",
      "/images/projects/sparc/sparc-logo.jpeg",
    ],
    archNodes: [
      { id: "cam", label: "Camera Feed", x: 10, y: 40, w: 120, h: 36 },
      { id: "mp", label: "MediaPipe Hub", x: 170, y: 20, w: 130, h: 36, accent: "#10b981" },
      { id: "emo", label: "Emotion CNN", x: 170, y: 64, w: 130, h: 36 },
      { id: "ml", label: "ML Classifier", x: 340, y: 40, w: 130, h: 36, accent: "#3b82f6" },
      { id: "sent", label: "Sentence Gen", x: 510, y: 20, w: 130, h: 36 },
      { id: "out", label: "OLED / TTS", x: 510, y: 64, w: 130, h: 36, accent: "#f59e0b" },
    ],
    archEdges: [
      { from: "cam", to: "mp" },
      { from: "cam", to: "emo" },
      { from: "mp", to: "ml" },
      { from: "emo", to: "ml" },
      { from: "ml", to: "sent" },
      { from: "ml", to: "out" },
    ],
    extendedSpecs: [
      "Real-time gesture pipeline trained on 12,000+ hand samples",
      "92.4% gesture recognition accuracy at 15-20 FPS",
      "End-to-end classification-to-voice latency under 180 ms",
      "Fault-tolerant architecture with 250 ms recovery on sensor failure",
      "Supports both ISL and ASL gesture dictionaries",
      "Multimodal fusion: hand landmarks + facial emotion recognition",
    ],
  },
  {
    id: "trident",
    title: "TRIDENT — Disaster Response & Rescue Ecosystem",
    category: "IoT/Embedded",
    status: "VALIDATED",
    metrics: "40% triage speed improvement | >95% telemetry uptime",
    description:
      "Distributed life-detection platform combining an ESP32 wearable sensor array, Flask command center, and custom Arduino underwater ROV validated through hydrodynamic CFD simulations. Implements priority-based victim triage (P1-P5) with real-time health telemetry.",
    techStack: ["ESP32", "MAX30102", "GSR", "NEO-6M GPS", "Flask", "Arduino", "CFD Modeling"],
    github: "https://github.com/harshitworkmain/trident",
    demo: "https://drive.google.com/file/d/1tUl8rAFmcdpX7BgRRWtE-QdVltjiZb7W/view?usp=sharing",
    coverImage: "/images/projects/trident/trident-rov-dashboard.jpeg",
    videoPreview: "/videos/wearable-demo.mp4",
    mediaGallery: [
      "/images/projects/trident/trident-rov-dashboard.jpeg",
      "/images/projects/trident/trident-team-debugging.jpeg",
      "/images/projects/trident/trident-team.jpeg",
    ],
    archNodes: [
      { id: "wear", label: "ESP32 Wearable", x: 10, y: 30, w: 140, h: 36, accent: "#10b981" },
      { id: "sens", label: "MAX30102 + IMU", x: 10, y: 74, w: 140, h: 36 },
      { id: "avg", label: "Weighted Avg", x: 190, y: 50, w: 130, h: 36 },
      { id: "flask", label: "Flask API", x: 360, y: 30, w: 120, h: 36, accent: "#3b82f6" },
      { id: "triage", label: "Triage P1-P5", x: 360, y: 74, w: 120, h: 36, accent: "#f59e0b" },
      { id: "rov", label: "Arduino ROV", x: 520, y: 50, w: 130, h: 36 },
    ],
    archEdges: [
      { from: "wear", to: "avg" },
      { from: "sens", to: "avg" },
      { from: "avg", to: "flask" },
      { from: "flask", to: "triage" },
      { from: "triage", to: "rov" },
    ],
    extendedSpecs: [
      "ESP32 multi-sensor wearable: MPU6050 fall detection, MAX30102 SpO₂/HR, GSR stress, GPS",
      "Flask orchestrator with >95% verified uptime",
      "Custom probabilistic scoring for P1-P5 victim triage",
      "40% reduction in manual triage times",
      "30% boost in rescue allocation accuracy",
      "Autonomous underwater ROV with 4 high-torque thrusters validated via CFD",
    ],
  },
  {
    id: "drishtiguide",
    title: "DrishtiGuide — Smart Assistive Navigation System",
    category: "IoT/Embedded",
    status: "ACTIVE",
    metrics: "sub-100 ms node response | ~60% obstacle event reduction",
    description:
      "Assistive spatial guidance cane transmitting sensor telemetry over low-latency ESP-NOW protocol to a tactile wrist array, backed by a Raspberry Pi 4 YOLOv8 edge vision gateway providing real-time voice scene synthesis.",
    techStack: ["ESP8266", "ESP32", "ESP-NOW", "Raspberry Pi 4", "YOLOv8", "OpenCV", "Haptic arrays"],
    github: "https://github.com/harshitworkmain/drishtiguide",
    coverImage: "/images/projects/drishtiguide/drishtiguide-components.jpeg",
    mediaGallery: [
      "/images/projects/drishtiguide/drishtiguide-components.jpeg",
      "/images/projects/drishtiguide/InnovateXImpact-teamPhoto1.jpeg",
    ],
    archNodes: [
      { id: "cane", label: "Smart Cane Node", x: 10, y: 30, w: 150, h: 36, accent: "#10b981" },
      { id: "ultra", label: "HC-SR04 (4m)", x: 10, y: 74, w: 150, h: 36 },
      { id: "espnow", label: "ESP-NOW Link", x: 200, y: 50, w: 130, h: 36 },
      { id: "wrist", label: "Haptic Wrist", x: 370, y: 30, w: 130, h: 36, accent: "#f59e0b" },
      { id: "ctrl", label: "ESP32 IMU/GPS", x: 370, y: 74, w: 130, h: 36 },
      { id: "rpi", label: "RPi4 + YOLOv8", x: 540, y: 50, w: 140, h: 36, accent: "#3b82f6" },
    ],
    archEdges: [
      { from: "cane", to: "espnow" },
      { from: "ultra", to: "cane" },
      { from: "espnow", to: "wrist" },
      { from: "espnow", to: "ctrl" },
      { from: "ctrl", to: "rpi" },
    ],
    extendedSpecs: [
      "ESP-NOW protocol for low-latency wireless communication",
      "HC-SR04 obstacle scanning up to 4m range",
      "5-level spatial haptic feedback grid on wristband",
      "ESP32 main controller: IMU fall detection + GPS geofencing",
      "Local web portal at 192.168.4.1/gps with sub-100 ms response",
      "Raspberry Pi 4 YOLOv8 edge vision reducing missed obstacles by ~60%",
    ],
  },
  {
    id: "weather-lstm",
    title: "Weather Risk AI & Flood Propagation Analyzer",
    category: "AI/ML",
    status: "ACTIVE",
    metrics: "Multivariate LSTM forecasting | Max-flow flood propagation graphs",
    description:
      "Deep learning forecaster coupled with directed urban network graphs to trace risk cascades. Utilizes NetworkX Dijkstra and Ford-Fulkerson algorithms to simulate urban infrastructure vulnerabilities under extreme weather.",
    techStack: ["Python", "Keras", "TensorFlow", "NetworkX", "Directed Graphs", "Typer CLI", "PyTest"],
    github: "https://github.com/harshitworkmain/weather-risk-ai-lstm",
    coverImage: "/images/projects/placeholders/weather-lstm-cover.jpeg",
    mediaGallery: [],
    archNodes: [
      { id: "api", label: "Weather API", x: 10, y: 40, w: 130, h: 36 },
      { id: "pre", label: "Preprocessor", x: 180, y: 40, w: 130, h: 36 },
      { id: "lstm", label: "LSTM Network", x: 350, y: 20, w: 140, h: 36, accent: "#3b82f6" },
      { id: "graph", label: "DiGraph Risk", x: 350, y: 64, w: 140, h: 36, accent: "#10b981" },
      { id: "dijk", label: "Dijkstra Path", x: 530, y: 20, w: 130, h: 36 },
      { id: "flow", label: "Max-Flow", x: 530, y: 64, w: 130, h: 36, accent: "#f59e0b" },
    ],
    archEdges: [
      { from: "api", to: "pre" },
      { from: "pre", to: "lstm" },
      { from: "pre", to: "graph" },
      { from: "graph", to: "dijk" },
      { from: "graph", to: "flow" },
    ],
    extendedSpecs: [
      "Autoregressive Multivariate LSTM (Keras/TensorFlow)",
      "Real-time weather API integrations for coastal anomalies",
      "Directed urban flood graphs using NetworkX DiGraphs",
      "Dijkstra's path planning for risk cascade tracing",
      "Ford-Fulkerson max-flow for infrastructure bottleneck analysis",
      "CLI orchestrator: Ingest → Preprocess → Train → Predict → Analyze",
    ],
  },
  {
    id: "terrain-scout",
    title: "Terrain Scout — Multi-Operational Defence Rover",
    category: "Robotics",
    status: "VALIDATED",
    metrics: "20+ Hz master-slave control | sub-150 ms perception | 3rd Place",
    description:
      "All-terrain rocker-bogie chassis operating a Raspberry Pi master and Arduino slave system. Implements ultrasonic, metal detection, and real-time edge threat perception. Ranked 3rd at Technovation 2025 (Kurukshetra '25).",
    techStack: ["Raspberry Pi", "Arduino Mega", "Rocker-Bogie Chassis", "Edge Vision", "Sensor Fusion"],
    certificate: "https://drive.google.com/file/d/1AkRdc0y1Qdw9cImu5395G5RwdB8vPJuo/view?usp=sharing",
    coverImage: "/images/projects/terrain-scout/technovation-terrain-scout-rover.jpeg",
    mediaGallery: [
      "/images/projects/terrain-scout/technovation-terrain-scout-rover.jpeg",
      "/images/projects/terrain-scout/technovation-terrain-scout-rover1.jpeg",
    ],
    archNodes: [
      { id: "rpi", label: "RPi Master", x: 10, y: 40, w: 130, h: 36, accent: "#10b981" },
      { id: "ard", label: "Arduino Slave", x: 180, y: 40, w: 140, h: 36 },
      { id: "ultra", label: "Ultrasonic Array", x: 360, y: 20, w: 150, h: 36 },
      { id: "metal", label: "Metal Detector", x: 360, y: 64, w: 150, h: 36 },
      { id: "cv", label: "Edge CV Threat", x: 550, y: 40, w: 140, h: 36, accent: "#3b82f6" },
    ],
    archEdges: [
      { from: "rpi", to: "ard" },
      { from: "ard", to: "ultra" },
      { from: "ard", to: "metal" },
      { from: "ultra", to: "cv" },
      { from: "metal", to: "cv" },
    ],
    extendedSpecs: [
      "Custom 6-wheel rocker-bogie chassis reducing instability by ~45%",
      "Raspberry Pi - Arduino master-slave at 20+ Hz",
      "Ultrasonic + metal detection sensor arrays",
      "Real-time edge CV threat classification",
      "Sub-150 ms perception latency",
      "~65% increase in field-threat detection accuracy",
    ],
  },
  {
    id: "stembot",
    title: "Stembot — Educational ROS 2 / Gazebo Robot",
    category: "Robotics",
    status: "COMPLETE",
    metrics: "2D LiDAR obstacle avoidance | SLAM mapping & EKF localization",
    description:
      "Educational robot platform using standard ROS 2 Python nodes, processing 2D LiDAR scan datasets at 10 Hz, implementing SLAM Toolbox spatial mapping and EKF odometry localisation in Gazebo simulation.",
    techStack: ["ROS 2 (Jazzy)", "Gazebo Sim", "SLAM Toolbox", "robot_localization", "LiDAR nodes", "Python"],
    github: "https://github.com/treedel/stembot",
    coverImage: "/images/projects/placeholders/stembot-cover.jpeg",
    videoPreview: "/videos/stembot/stembot-ros2.mp4",
    mediaGallery: [],
    archNodes: [
      { id: "lidar", label: "2D LiDAR /scan", x: 10, y: 40, w: 150, h: 36 },
      { id: "avoid", label: "Obstacle Avoider", x: 200, y: 20, w: 160, h: 36, accent: "#10b981" },
      { id: "loop", label: "Two-Point Looper", x: 200, y: 64, w: 160, h: 36 },
      { id: "ekf", label: "EKF Odometry", x: 400, y: 40, w: 140, h: 36, accent: "#3b82f6" },
      { id: "slam", label: "SLAM Toolbox", x: 580, y: 40, w: 130, h: 36, accent: "#f59e0b" },
    ],
    archEdges: [
      { from: "lidar", to: "avoid" },
      { from: "lidar", to: "loop" },
      { from: "avoid", to: "ekf" },
      { from: "loop", to: "ekf" },
      { from: "ekf", to: "slam" },
    ],
    extendedSpecs: [
      "Standard ROS 2 Jazzy Python nodes",
      "10 Hz LiDAR scan processing",
      "Reactive obstacle avoidance (obstacle_avoider)",
      "State manipulation via two_point_looper node",
      "EKF odometry via robot_localization package",
      "SLAM Toolbox for environment mapping",
    ],
  },
  {
    id: "gnome-stocks",
    title: "Dual-Module Stocks Suite for GNOME Shell",
    category: "Software/Systems",
    status: "COMPLETE",
    metrics: "Atomic RAM writes every 60s | GSettings panel extensions",
    description:
      "Ubuntu tracking suite polling Finnhub/Angel One REST & WebSockets, implementing atomic writes directly to RAM (/dev/shm) and hot-swapping display extension monitors under Wayland/X11.",
    techStack: ["Python", "GNOME Shell Extensions", "systemd", "Angel One API", "Finnhub API", "GSettings"],
    coverImage: "/images/projects/placeholders/gnome-stocks-cover.jpeg",
    mediaGallery: [],
    archNodes: [
      { id: "api", label: "Finnhub / Angel One", x: 10, y: 40, w: 170, h: 36 },
      { id: "daemon", label: "systemd Daemon", x: 220, y: 40, w: 150, h: 36, accent: "#10b981" },
      { id: "shm", label: "/dev/shm Write", x: 410, y: 20, w: 140, h: 36, accent: "#f59e0b" },
      { id: "ext", label: "GNOME Extension", x: 410, y: 64, w: 160, h: 36, accent: "#3b82f6" },
      { id: "panel", label: "System Panel", x: 610, y: 40, w: 130, h: 36 },
    ],
    archEdges: [
      { from: "api", to: "daemon" },
      { from: "daemon", to: "shm" },
      { from: "shm", to: "ext" },
      { from: "ext", to: "panel" },
    ],
    extendedSpecs: [
      "Background Python polling daemon via systemd",
      "Finnhub + Angel One SmartAPI via WebSockets + pyOTP",
      "Atomic writes to /dev/shm/gnome-stocks.json every 60s",
      "FileMonitor GNOME shell extension",
      "Scrolling stock tickers in system panel",
      "GSettings configuration + Wayland/X11 support",
    ],
  },
  {
    id: "neurobridge",
    title: "NeuroBridge AI — Full Autism Care Ecosystem",
    category: "AI/ML",
    status: "PRODUCTION-READY",
    metrics: "468 face landmarks | 4 Phaser 3 games | real-time TF.js filter",
    description:
      "Continuous remote care ecosystem featuring real-time eye-contact attention scoring using MediaPipe Face Mesh (468 landmarks), 4 custom Phaser 3 therapy games, clinical analytics dashboards with regression alerting, and a safe caregiver forum moderated via TensorFlow.js Toxicity Model.",
    techStack: ["React 19", "Tailwind 4", "Phaser 3", "Node.js 22", "Socket.IO", "MediaPipe", "SQLite"],
    github: "https://github.com/harshitworkmain/Neurobridge",
    live: "https://neurobridge-app.onrender.com",
    coverImage: "/images/projects/placeholders/neurobridge-cover.jpeg",
    mediaGallery: [],
    archNodes: [
      { id: "cam", label: "Camera / Webcam", x: 10, y: 40, w: 150, h: 36 },
      { id: "face", label: "Face Mesh 468", x: 200, y: 20, w: 140, h: 36, accent: "#10b981" },
      { id: "gaze", label: "Gaze Tracker", x: 200, y: 64, w: 140, h: 36 },
      { id: "score", label: "Attention Score", x: 380, y: 40, w: 150, h: 36, accent: "#3b82f6" },
      { id: "games", label: "Phaser 3 Games", x: 570, y: 20, w: 140, h: 36, accent: "#f59e0b" },
      { id: "dash", label: "Clinician Panel", x: 570, y: 64, w: 140, h: 36 },
    ],
    archEdges: [
      { from: "cam", to: "face" },
      { from: "cam", to: "gaze" },
      { from: "face", to: "score" },
      { from: "gaze", to: "score" },
      { from: "score", to: "games" },
      { from: "score", to: "dash" },
    ],
    extendedSpecs: [
      "MediaPipe Face Mesh (468 landmarks) for expression analysis",
      "Iris/nose-based gaze tracking for attention scoring",
      "4 custom Phaser 3 neurodevelopmental games",
      "Clinical analytics with regression alerting (React 19 + Recharts)",
      "Safe forum with real-time TensorFlow.js Toxicity Model",
      "WebRTC teleconsultation via Socket.IO signaling + TURN relay",
    ],
  },
];

const categories = ["All", "AI/ML", "Robotics", "IoT/Embedded", "Software/Systems"];

/* ────────────────────────────────────────────────────────
   SVG Architecture Diagram Component
   ──────────────────────────────────────────────────────── */

function ArchitectureDiagram({
  nodes,
  edges,
}: {
  nodes: ArchNode[];
  edges: ArchEdge[];
}) {
  const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));
  const svgW = 720;
  const svgH = 110;

  return (
    <svg
      viewBox={`0 0 ${svgW} ${svgH}`}
      className="w-full h-auto"
      fill="none"
    >
      {/* Grid background */}
      <defs>
        <pattern id="archGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width={svgW} height={svgH} fill="#1e1e2e" rx="8" />
      <rect width={svgW} height={svgH} fill="url(#archGrid)" rx="8" />

      {/* Edges */}
      {edges.map((e, i) => {
        const from = nodeMap[e.from];
        const to = nodeMap[e.to];
        if (!from || !to) return null;
        const x1 = from.x + from.w;
        const y1 = from.y + from.h / 2;
        const x2 = to.x;
        const y2 = to.y + to.h / 2;
        const mx = (x1 + x2) / 2;
        return (
          <g key={i}>
            <path
              d={`M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`}
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1.5"
              strokeDasharray="4 3"
              fill="none"
            />
            {/* Arrow head */}
            <circle cx={x2} cy={y2} r="3" fill="rgba(255,255,255,0.3)" />
          </g>
        );
      })}

      {/* Nodes */}
      {nodes.map((n) => (
        <g key={n.id}>
          <rect
            x={n.x}
            y={n.y}
            width={n.w}
            height={n.h}
            rx="6"
            fill="rgba(255,255,255,0.06)"
            stroke={n.accent || "rgba(255,255,255,0.15)"}
            strokeWidth="1"
          />
          {n.accent && (
            <rect
              x={n.x}
              y={n.y}
              width="3"
              height={n.h}
              rx="1.5"
              fill={n.accent}
              opacity="0.8"
            />
          )}
          <text
            x={n.x + n.w / 2}
            y={n.y + n.h / 2 + 1}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="rgba(255,255,255,0.85)"
            fontSize="10"
            fontFamily="monospace"
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

/* ────────────────────────────────────────────────────────
   Specs Modal Component
   ──────────────────────────────────────────────────────── */

function SpecsModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [activeTab, setActiveTab] = useState(0);
  const [galleryIdx, setGalleryIdx] = useState(0);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const tabs = ["Architecture", "Media", "Tech Arsenal"];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-[#1a1a2e] rounded-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <div>
            <div className="font-mono text-[9px] tracking-wider text-white/40 uppercase mb-1">
              [ ID: {project.id.toUpperCase()} | CLASS: {project.category} | STATUS: {project.status} ]
            </div>
            <h2 className="text-sm sm:text-base font-bold text-white tracking-tight">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <X className="h-4 w-4 text-white/70" />
          </button>
        </div>

        {/* Tab bar */}
        <div className="flex gap-1 px-5 pt-3 pb-1">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`px-4 py-2 rounded-t text-[10px] font-bold uppercase tracking-widest transition-all duration-200 ${
                activeTab === i
                  ? "bg-white/10 text-white border-b-2 border-white/50"
                  : "text-white/40 hover:text-white/60"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {activeTab === 0 && (
            <div className="space-y-5">
              <div>
                <h3 className="font-mono text-[10px] text-white/40 uppercase tracking-widest mb-3">
                  System Architecture Flow
                </h3>
                <ArchitectureDiagram
                  nodes={project.archNodes}
                  edges={project.archEdges}
                />
              </div>
              <div>
                <h3 className="font-mono text-[10px] text-white/40 uppercase tracking-widest mb-3">
                  Technical Specifications
                </h3>
                <ul className="space-y-2">
                  {project.extendedSpecs.map((spec, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs text-white/70 font-mono"
                    >
                      <span className="text-emerald-400 shrink-0 mt-0.5">▸</span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 1 && (
            <div className="space-y-4">
              {project.mediaGallery.length > 0 ? (
                <>
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-black/40">
                    <Image
                      src={project.mediaGallery[galleryIdx]}
                      alt={`${project.title} media`}
                      fill
                      sizes="(max-width: 768px) 90vw, 800px"
                      className="object-contain"
                    />
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {project.mediaGallery.map((src, i) => (
                      <button
                        key={src}
                        onClick={() => setGalleryIdx(i)}
                        className={`relative w-20 h-14 rounded overflow-hidden border-2 transition-all ${
                          i === galleryIdx
                            ? "border-white/60 ring-1 ring-white/30"
                            : "border-white/10 hover:border-white/30"
                        }`}
                      >
                        <Image
                          src={src}
                          alt={`Thumb ${i}`}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                  {project.videoPreview && (
                    <div className="mt-4">
                      <h3 className="font-mono text-[10px] text-white/40 uppercase tracking-widest mb-2">
                        Video Preview
                      </h3>
                      <video
                        src={project.videoPreview}
                        controls
                        muted
                        className="w-full rounded-lg"
                      />
                    </div>
                  )}
                </>
              ) : (
                <div className="flex items-center justify-center py-16">
                  <p className="font-mono text-xs text-white/30 uppercase tracking-widest">
                    Media assets pending — check back soon
                  </p>
                </div>
              )}
            </div>
          )}

          {activeTab === 2 && (
            <div className="space-y-4">
              <h3 className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
                Technical Arsenal — Resume-Synced Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded bg-white/8 border border-white/10 text-[11px] font-mono text-white/80 hover:bg-white/12 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 space-y-2">
                <h3 className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
                  Quick Links
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 rounded bg-white/8 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-white hover:bg-white/15 transition-all"
                    >
                      <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                      Source Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 rounded bg-white/8 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-white hover:bg-white/15 transition-all"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Live App
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 rounded bg-white/8 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-white hover:bg-white/15 transition-all"
                    >
                      <FileText className="h-3.5 w-3.5" />
                      Demo Video
                    </a>
                  )}
                  {project.certificate && (
                    <a
                      href={project.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 rounded bg-white/8 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-white hover:bg-white/15 transition-all"
                    >
                      <Award className="h-3.5 w-3.5" />
                      Certificate
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ────────────────────────────────────────────────────────
   Project Card Component
   ──────────────────────────────────────────────────────── */

function ProjectCard({
  project,
  onSelect,
}: {
  project: Project;
  onSelect: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="glass-panel glass-panel-hover rounded-lg overflow-hidden border border-zinc-200 flex flex-col cursor-pointer group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onSelect}
    >
      {/* Cover Media */}
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
        {/* Static cover image */}
        {!imgError ? (
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={`object-cover transition-all duration-700 ${
              isHovered && project.videoPreview ? "opacity-0 scale-105" : "opacity-100 group-hover:scale-105"
            }`}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-200 to-zinc-300 flex items-center justify-center">
            <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">
              [ COVER PENDING ]
            </span>
          </div>
        )}

        {/* Video overlay on hover */}
        {project.videoPreview && (
          <video
            ref={videoRef}
            src={project.videoPreview}
            muted
            loop
            playsInline
            preload="none"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
        )}

        {/* Status badge overlay */}
        <div className="absolute top-3 left-3 z-10">
          <span className="px-2 py-1 rounded bg-black/70 backdrop-blur-sm text-[9px] font-bold tracking-widest text-white uppercase">
            {project.status}
          </span>
        </div>

        {/* Video indicator */}
        {project.videoPreview && (
          <div className="absolute top-3 right-3 z-10">
            <span className="flex items-center gap-1 px-2 py-1 rounded bg-black/70 backdrop-blur-sm text-[9px] font-bold tracking-widest text-white/80 uppercase">
              <span className={`h-1.5 w-1.5 rounded-full ${isHovered ? "bg-red-500 animate-pulse" : "bg-white/50"}`} />
              {isHovered ? "LIVE" : "DEMO"}
            </span>
          </div>
        )}

        {/* Hover instruction */}
        <div className={`absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-end justify-center pb-3 ${isHovered && project.videoPreview ? "pointer-events-none" : ""}`}>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[9px] font-bold uppercase tracking-widest text-white bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded">
            Click to view specs
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col flex-1">
        {/* Telemetry header */}
        <div className="font-mono text-[8px] sm:text-[9px] tracking-wider text-zinc-400 uppercase mb-3">
          [ CLASS: {project.category} | IMPACT: {project.metrics} ]
        </div>

        {/* Title */}
        <h2 className="text-sm font-bold text-black uppercase mb-2 leading-tight tracking-wider font-heading">
          {project.title}
        </h2>

        {/* Description */}
        <p className="text-xs sm:text-sm text-zinc-700 font-normal leading-relaxed mb-4 flex-1 font-body">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[10px] font-semibold bg-zinc-100 border border-zinc-300 text-zinc-700 font-mono"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 5 && (
            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-zinc-100 border border-zinc-300 text-zinc-500 font-mono">
              +{project.techStack.length - 5}
            </span>
          )}
        </div>

        {/* Links Row */}
        <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-zinc-200">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-zinc-600 hover:text-black transition-colors duration-300"
            >
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
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
              onClick={(e) => e.stopPropagation()}
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
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-zinc-600 hover:text-black transition-colors duration-300"
            >
              <Award className="h-3.5 w-3.5" />
              Award
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

/* ────────────────────────────────────────────────────────
   Projects Page
   ──────────────────────────────────────────────────────── */

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projectsData.filter((project) =>
    activeCategory === "All" ? true : project.category === activeCategory
  );

  return (
    <PageTransition>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12 lg:px-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start gap-4 border-b border-zinc-200 pb-10"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black uppercase font-heading">
            Engineering Feats
          </h1>
          <p className="text-xs sm:text-sm text-zinc-600 font-medium uppercase tracking-widest">
            Hardware-backed AI, robotics ecosystems, and edge intelligence pipelines
          </p>
        </motion.div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center gap-2 mt-8 md:mt-10 justify-center sm:justify-start">
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
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Specs Modal */}
      <AnimatePresence>
        {selectedProject && (
          <SpecsModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
