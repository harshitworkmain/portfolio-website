"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Cpu,
  Navigation2,
  Activity,
  Layers,
  ShieldCheck,
  Award,
  Video,
  X,
  Maximize2,
} from "lucide-react";

const STEMBOT_IMAGES = [
  {
    src: "/images/projects/stembot/Dashboard-CV-Pipeline.png",
    title: "Dashboard + CV Pipeline",
    caption: "Local dashboard showing live camera feed, obstacle/person detection and face detection results",
  },
  {
    src: "/images/projects/stembot/ROS-2-Gazebo-Patrol-Simulation.png",
    title: "ROS 2 Gazebo Patrol Simulation",
    caption: "ROS 2 Gazebo simulation showing the rover performing autonomous patrol movement in a warehouse environment",
  },
  {
    src: "/images/projects/stembot/RViz-LiDAR-Initial-Motion.png",
    title: "RViz LiDAR — Initial Motion",
    caption: "RViz visualization of initial rover motion with 2D LiDAR point-cloud based navigation",
  },
  {
    src: "/images/projects/stembot/RViz-LiDAR-Turning-Motion.png",
    title: "RViz LiDAR — Turning Motion",
    caption: "RViz visualization showing LiDAR-based obstacle avoidance and turning during patrol",
  },
];

export default function InternshipPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      {/* Breadcrumb & Navigation */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-zinc-900 transition-colors mb-6 group"
      >
        <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
        <span>RETURN TO PORTFOLIO</span>
      </Link>

      {/* Hero Header */}
      <div className="p-6 sm:p-8 rounded-2xl border border-zinc-200 bg-zinc-50/80 backdrop-blur-sm shadow-sm mb-12">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-2.5 py-1 rounded-md text-xs font-mono uppercase bg-emerald-100 text-emerald-800 font-semibold border border-emerald-200">
                Industry Internship
              </span>
              <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-200 text-zinc-700">
                Jul 2025 – Aug 2025
              </span>
              <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-200 text-zinc-700">
                Chennai, India
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900">
              STEMTEC AI &amp; Robotics Pvt. Ltd.
            </h1>
            <p className="text-lg sm:text-xl font-medium text-zinc-700 mt-1">
              AI &amp; Robotics Intern &mdash; Indoor Autonomous Mobile Robot
            </p>
            <p className="text-sm sm:text-base text-zinc-600 mt-2 max-w-3xl leading-relaxed">
              Worked on the software stack of an indoor autonomous mobile robot, mostly on the sensor validation and data analysis side rather than pure hardware work. I ran time series error analysis on Extended Kalman Filter telemetry at 15 Hz against raw encoder logs across repeated ground truth trials, which brought mean spatial error down 60 percent and angular error down about 69 percent. Also worked with high frequency LiDAR data, close to 3,600 points a second, to validate a filtering approach for obstacle detection, getting it to 95 percent accuracy across 20 stress test trials while keeping latency under 50ms. A good chunk of the work was really about designing solid test trials and making sure the numbers I was reporting actually held up under scrutiny.
            </p>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap lg:flex-col gap-3 shrink-0">
            <a
              href="https://github.com/harshitworkmain/stembot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900 text-white text-xs sm:text-sm font-medium hover:bg-zinc-800 transition-all shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              <span>GitHub Repository</span>
            </a>
            <a
              href="https://drive.google.com/file/d/1tlTXqB9SfdCe-Xos92JxB9dEDdrS36nc/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-zinc-300 bg-white text-zinc-700 text-xs sm:text-sm font-medium hover:bg-zinc-50 hover:text-zinc-900 transition-all shadow-sm"
            >
              <Award className="w-4 h-4 text-emerald-600" />
              <span>Internship Certificate</span>
            </a>
            <a
              href="https://drive.google.com/file/d/1g_K5tW--0rHPUu9vNNgsUUIIDRPlXzcQ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-zinc-300 bg-white text-zinc-700 text-xs sm:text-sm font-medium hover:bg-zinc-50 hover:text-zinc-900 transition-all shadow-sm"
            >
              <Video className="w-4 h-4 text-sky-600" />
              <span>Gazebo & RViz Simulation</span>
            </a>
          </div>
        </div>
      </div>

      {/* Verified Quantitative Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        <div className="p-5 rounded-xl border border-zinc-200 bg-white shadow-sm">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-2">
            <span>SPATIAL DRIFT REDUCTION</span>
            <Activity className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="text-3xl font-extrabold text-zinc-900">60.0%</div>
          <p className="text-xs text-zinc-600 mt-1">
            Mean spatial drift cut from <strong>0.45 m → 0.18 m</strong> across 10 m ground-truth trials via 15 Hz EKF.
          </p>
        </div>

        <div className="p-5 rounded-xl border border-zinc-200 bg-white shadow-sm">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-2">
            <span>ANGULAR ERROR MITIGATION</span>
            <Navigation2 className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="text-3xl font-extrabold text-zinc-900">69.2%</div>
          <p className="text-xs text-zinc-600 mt-1">
            Rotational yaw orientation error reduced from <strong>7.8° → 2.4°</strong> fusing IMU + encoder odometry.
          </p>
        </div>

        <div className="p-5 rounded-xl border border-zinc-200 bg-white shadow-sm">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-2">
            <span>NAVIGATION SUCCESS</span>
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="text-3xl font-extrabold text-zinc-900">95.0%</div>
          <p className="text-xs text-zinc-600 mt-1">
            Collision-free obstacle traversal across 20 randomized physical stress tests (19/20 successful passes).
          </p>
        </div>

        <div className="p-5 rounded-xl border border-zinc-200 bg-white shadow-sm">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-2">
            <span>TELEMETRY THROUGHPUT</span>
            <Cpu className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="text-3xl font-extrabold text-zinc-900">&lt;50 ms</div>
          <p className="text-xs text-zinc-600 mt-1">
            Sub-50 ms end-to-end control latency ingesting <strong>~3,600 LiDAR points/sec</strong> at 10 Hz frequency.
          </p>
        </div>
      </div>

      {/* Video Demonstration Grid */}
      <div className="mb-14">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-zinc-900">Hardware & Simulation Video Feeds</h2>
            <p className="text-sm text-zinc-600">
              Live recordings from physical chassis validation trials and ROS 2 simulation suites.
            </p>
          </div>
        </div>

        {/* Single-Column Sequential Video Demonstration Showcase */}
        <div className="flex flex-col gap-10">
          {/* Video 1: ROS 2 Gazebo & RViz Simulation Suite (16:9 Landscape Full Width) */}
          <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm flex flex-col w-full">
            <div className="p-4 sm:p-5 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/40">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500 shadow-[0_0_8px_rgba(14,165,233,0.8)]" />
                </span>
                <span className="text-sm font-mono font-bold text-zinc-900 tracking-tight">
                  ROS 2 Jazzy — SLAM &amp; Autonomous Navigation
                </span>
                <span className="hidden sm:inline-block text-[10px] font-mono font-bold uppercase tracking-wider text-sky-800 bg-sky-50 border border-sky-200 px-2 py-0.5 rounded-md">
                  16:9 HD Simulation
                </span>
              </div>
              <a
                href="https://drive.google.com/file/d/1g_K5tW--0rHPUu9vNNgsUUIIDRPlXzcQ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-sky-600 hover:text-sky-800 flex items-center gap-1 font-bold"
              >
                <span>Open in Drive</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="w-full aspect-video bg-black relative flex items-center justify-center">
              <video
                controls
                preload="metadata"
                className="w-full h-full object-contain"
                src="/videos/stembot/stembot-ros2.mp4"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="p-4 sm:p-5 text-xs sm:text-sm text-zinc-700 bg-zinc-50/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-zinc-100">
              <span className="font-medium">
                RViz 2 scan visualization showcasing real-time costmap inflation, 2D LiDAR /scan filtering, and dynamic trajectory computation.
              </span>
              <a
                href="https://drive.google.com/file/d/1g_K5tW--0rHPUu9vNNgsUUIIDRPlXzcQ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-3 py-1.5 rounded-lg bg-sky-50 text-sky-700 border border-sky-200 text-xs font-bold hover:bg-sky-100 transition-colors inline-flex items-center gap-1.5 self-start sm:self-auto"
              >
                <span>View Full HD on Drive</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Video 2: Working Hardware Demo (Centered Theater Frame) */}
          <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm flex flex-col w-full">
            <div className="p-4 sm:p-5 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/40">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                </span>
                <span className="text-sm font-mono font-bold text-zinc-900 tracking-tight">
                  Physical Chassis — Working Demonstration
                </span>
                <span className="hidden sm:inline-block text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
                  On-Chassis Telemetry
                </span>
              </div>
              <span className="text-[11px] font-mono font-semibold text-zinc-500">Lab Corridor Trial</span>
            </div>
            <div className="w-full bg-zinc-950 flex items-center justify-center py-8 px-4">
              <div className="w-full max-w-sm aspect-[9/16] max-h-[580px] rounded-2xl overflow-hidden shadow-2xl bg-black border border-zinc-800">
                <video
                  controls
                  preload="metadata"
                  className="w-full h-full object-contain"
                  src="/videos/stembot/stembot-working-demo.mp4"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="p-4 sm:p-5 text-xs sm:text-sm text-zinc-700 bg-zinc-50/70 border-t border-zinc-100 font-medium">
              Differential-drive physical bot traversing lab corridors with active LiDAR safety cutoff engaged and 15 Hz Extended Kalman Filter state telemetry.
            </div>
          </div>
        </div>
      </div>

      {/* Architectural Node Specifications */}
      <div className="mb-14">
        <h2 className="text-2xl font-bold text-zinc-900 mb-2">ROS 2 Software Architecture</h2>
        <p className="text-sm text-zinc-600 mb-6">
          Modular publisher/subscriber nodes implemented in Python 3 under the ROS 2 Jazzy framework.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-zinc-200 bg-white shadow-sm flex flex-col">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 font-bold mb-3">
              <Cpu className="w-4 h-4" />
              <span>robot_localization (EKF)</span>
            </div>
            <h3 className="text-base font-bold text-zinc-900 mb-2">State-Space Estimation</h3>
            <p className="text-xs text-zinc-600 leading-relaxed flex-1">
              Fuses asynchronous 50 Hz wheel encoder odometry (<code className="text-zinc-800 bg-zinc-100 px-1 py-0.5 rounded">/odom</code>) with 30 Hz 6-DOF IMU acceleration and gyro telemetry (<code className="text-zinc-800 bg-zinc-100 px-1 py-0.5 rounded">/imu/data</code>). The continuous Extended Kalman Filter suppresses cumulative wheel slip drift by 60% on low-friction flooring.
            </p>
            <div className="mt-4 pt-3 border-t border-zinc-100 font-mono text-[11px] text-zinc-500">
              Frequency: 15 Hz • TF: odom → base_link
            </div>
          </div>

          <div className="p-6 rounded-xl border border-zinc-200 bg-white shadow-sm flex flex-col">
            <div className="flex items-center gap-2 text-xs font-mono text-sky-700 font-bold mb-3">
              <Navigation2 className="w-4 h-4" />
              <span>obstacle_avoider Node</span>
            </div>
            <h3 className="text-base font-bold text-zinc-900 mb-2">Frontal Sector Slicing</h3>
            <p className="text-xs text-zinc-600 leading-relaxed flex-1">
              Subscribes to 360° 2D LiDAR range data on <code className="text-zinc-800 bg-zinc-100 px-1 py-0.5 rounded">/scan</code>. Employs circular modulo array-indexing to isolate a 60° forward cone (±30° from bore). If range minimum falls below the 0.75 m safety threshold, an emergency angular override is injected into the velocity multiplexer.
            </p>
            <div className="mt-4 pt-3 border-t border-zinc-100 font-mono text-[11px] text-zinc-500">
              Latency: &lt;50 ms • Range Threshold: 0.75 m
            </div>
          </div>

          <div className="p-6 rounded-xl border border-zinc-200 bg-white shadow-sm flex flex-col">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-700 font-bold mb-3">
              <Layers className="w-4 h-4" />
              <span>two_point_looper Node</span>
            </div>
            <h3 className="text-base font-bold text-zinc-900 mb-2">Patrol Trajectory Loop</h3>
            <p className="text-xs text-zinc-600 leading-relaxed flex-1">
              Maintains timed autonomous patrol cycles between predefined coordinate waypoints. Publishes linear and angular velocity commands to <code className="text-zinc-800 bg-zinc-100 px-1 py-0.5 rounded">/cmd_vel</code> at 0.4 m/s nominal traverse velocity with smooth ramp deceleration curves on waypoint approach.
            </p>
            <div className="mt-4 pt-3 border-t border-zinc-100 font-mono text-[11px] text-zinc-500">
              Traverse Speed: 0.4 m/s • Timer Rate: 10 Hz
            </div>
          </div>
        </div>
      </div>

      {/* Benchmark Matrix: Physical vs Simulation */}
      <div className="mb-14">
        <h2 className="text-2xl font-bold text-zinc-900 mb-2">Physical Hardware vs Gazebo Benchmark</h2>
        <p className="text-sm text-zinc-600 mb-6">
          Telemetry comparison between digital twin simulation runs and physical laboratory hardware trials.
        </p>

        <div className="rounded-xl border border-zinc-200 overflow-hidden shadow-sm bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-zinc-100/80 text-zinc-700 font-mono text-xs uppercase border-b border-zinc-200">
                <tr>
                  <th className="py-3.5 px-4 font-semibold">Evaluation Metric</th>
                  <th className="py-3.5 px-4 font-semibold">Raw Baseline (No Filter)</th>
                  <th className="py-3.5 px-4 font-semibold">Gazebo Simulation</th>
                  <th className="py-3.5 px-4 font-semibold">Physical Robot Chassis</th>
                  <th className="py-3.5 px-4 font-semibold text-emerald-700">Net Improvement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 text-zinc-700">
                <tr className="hover:bg-zinc-50/50">
                  <td className="py-3 px-4 font-medium text-zinc-900">Mean Spatial Drift (10m)</td>
                  <td className="py-3 px-4 font-mono text-red-600">0.45 m</td>
                  <td className="py-3 px-4 font-mono">0.08 m</td>
                  <td className="py-3 px-4 font-mono font-bold text-zinc-900">0.18 m</td>
                  <td className="py-3 px-4 font-mono text-emerald-600 font-bold">-60.0% drift</td>
                </tr>
                <tr className="hover:bg-zinc-50/50">
                  <td className="py-3 px-4 font-medium text-zinc-900">Angular Heading Error</td>
                  <td className="py-3 px-4 font-mono text-red-600">7.8°</td>
                  <td className="py-3 px-4 font-mono">1.1°</td>
                  <td className="py-3 px-4 font-mono font-bold text-zinc-900">2.4°</td>
                  <td className="py-3 px-4 font-mono text-emerald-600 font-bold">-69.2% error</td>
                </tr>
                <tr className="hover:bg-zinc-50/50">
                  <td className="py-3 px-4 font-medium text-zinc-900">Obstacle Avoidance Rate</td>
                  <td className="py-3 px-4 font-mono text-red-600">65% (13/20)</td>
                  <td className="py-3 px-4 font-mono">100% (20/20)</td>
                  <td className="py-3 px-4 font-mono font-bold text-zinc-900">95% (19/20)</td>
                  <td className="py-3 px-4 font-mono text-emerald-600 font-bold">+30.0% success</td>
                </tr>
                <tr className="hover:bg-zinc-50/50">
                  <td className="py-3 px-4 font-medium text-zinc-900">End-to-End Latency</td>
                  <td className="py-3 px-4 font-mono">110 ms</td>
                  <td className="py-3 px-4 font-mono">22 ms</td>
                  <td className="py-3 px-4 font-mono font-bold text-zinc-900">46 ms</td>
                  <td className="py-3 px-4 font-mono text-emerald-600 font-bold">Sub-50 ms target</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Diagnostic & Telemetry Screenshot Gallery */}
      <div>
        <h2 className="text-2xl font-bold text-zinc-900 mb-2">Telemetry & Simulation Evidence</h2>
        <p className="text-sm text-zinc-600 mb-6">
          Click any screen capture below to inspect full-resolution ROS 2 graphs, costmaps, and terminal telemetry.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STEMBOT_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedImage(img.src)}
              className="group cursor-pointer rounded-xl border border-zinc-200 bg-white overflow-hidden shadow-sm flex flex-col"
            >
              <div className="relative aspect-video bg-zinc-100 overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <Maximize2 className="w-5 h-5 drop-shadow" />
                </div>
              </div>
              <div className="p-3 text-[11px] leading-snug">
                <div className="font-semibold text-zinc-900 mb-1">{img.title}</div>
                <div className="text-zinc-600 line-clamp-2">{img.caption}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm p-4 flex items-center justify-center cursor-zoom-out"
          >
            <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="relative w-full h-full">
                <Image
                  src={selectedImage}
                  alt="Telemetry Fullscreen View"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
