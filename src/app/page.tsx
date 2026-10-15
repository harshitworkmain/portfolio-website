"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { ArrowRight, Cpu, Activity, Compass, Mail, Send, Check, Brain, Server, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "@/components/ui/PageTransition";
import ScrollToTop from "@/components/ScrollToTop";
import TechMatrix from "@/components/ui/TechMatrix";
import StatusConsole from "@/components/ui/StatusConsole";
import PhotoMarquee from "@/components/ui/PhotoMarquee";
import {
  AppleTvWordRotator,
  InkTitleReveal,
  MetricDigitRoll,
  HeroInstitutionPill,
  EditorialCurtainHeader,
  SplitTextReveal,
  PillarCardTitle,
  ShimmerTitle,
  type ShimmerTheme,
} from "@/components/ui/HeroMotion";

/* ────────────────────────────────────────────────────────
   VideoCard — Reusable preview with Style 26 Split Text
   and radiating breathing pulse play overlay
   ──────────────────────────────────────────────────────── */

function VideoCard({
  src,
  title,
  tag,
  subtitle,
  codeLink,
  demoLink,
  demoLabel,
  theme = "indigo",
}: {
  src: string;
  title: string;
  tag: string;
  subtitle: string;
  codeLink: string;
  demoLink: string;
  demoLabel: string;
  theme?: "indigo" | "emerald" | "amber" | "sapphire";
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);
  const [isCardHovered, setIsCardHovered] = useState(false);

  const toggle = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPaused(false);
    } else {
      videoRef.current.pause();
      setPaused(true);
    }
  };

  return (
    <div
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
      className="video-card group relative rounded-xl overflow-hidden border border-zinc-200 bg-white/70 backdrop-blur-sm shadow-xs transition-all duration-300 hover:shadow-lg hover:border-zinc-300"
    >
      <div className="relative aspect-video bg-zinc-100">
        <video
          ref={videoRef}
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
        {/* Play / Pause overlay with radiating breathing pulse ring */}
        <div className="video-overlay absolute inset-0 flex items-center justify-center bg-black/25 backdrop-blur-[2px]">
          <div className="relative flex items-center justify-center">
            {/* Concentric Breathing Pulse Ring */}
            <motion.span
              className="absolute -inset-2 rounded-full border-2 border-white/70 pointer-events-none"
              animate={{
                scale: [1, 1.35, 1],
                opacity: [0.7, 0.1, 0.7],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <button
              onClick={toggle}
              className="h-14 w-14 rounded-full bg-white/95 border border-zinc-200 flex items-center justify-center shadow-xl transition-transform hover:scale-110 relative z-10"
              aria-label={paused ? "Play" : "Pause"}
            >
              {paused ? (
                <svg className="h-5 w-5 text-black ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="6,3 20,12 6,21" />
                </svg>
              ) : (
                <svg className="h-5 w-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="4" width="4" height="16" />
                  <rect x="14" y="4" width="4" height="16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col gap-3.5">
        {/* Style 26: Split Text Reveal with Non-redundant Technical Tag */}
        <SplitTextReveal title={title} tag={tag} theme={theme} externalHover={isCardHovered} />

        <p className="text-sm sm:text-base text-zinc-800 leading-relaxed font-normal">{subtitle}</p>

        {/* Action Links with animated underline slide-out on hover */}
        <div className="flex gap-6 mt-1 pt-3.5 border-t border-zinc-100">
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link text-xs font-bold uppercase tracking-widest text-zinc-800 hover:text-black transition-colors flex items-center gap-2 relative py-0.5"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.16c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 016.02 0c2.28-1.55 3.28-1.23 3.28-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12.01 12.01 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            Code
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover/link:w-full" />
          </a>

          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link text-xs font-bold uppercase tracking-widest text-indigo-700 hover:text-indigo-950 transition-colors flex items-center gap-2 relative py-0.5"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            {demoLabel}
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-indigo-700 transition-all duration-300 group-hover/link:w-full" />
          </a>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────
   StembotCard — High-precision telemetry player for STEMBOT
   ──────────────────────────────────────────────────────── */

function StembotCard({
  src,
  stationBadge,
  stationType,
  title,
  metricBadge,
  metricBadgeTheme = "amber",
  description,
  theme = "amber",
  isPortrait = false,
}: {
  src: string;
  stationBadge: string;
  stationType: string;
  title: string;
  metricBadge: string;
  metricBadgeTheme?: "amber" | "cyan" | "emerald" | "gold";
  description: string;
  theme?: ShimmerTheme;
  isPortrait?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);

  const toggle = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPaused(false);
    } else {
      videoRef.current.pause();
      setPaused(true);
    }
  };

  const badgeColorMap = {
    amber: "bg-amber-50 text-amber-900 border-amber-200",
    cyan: "bg-cyan-50 text-cyan-950 border-cyan-200",
    emerald: "bg-emerald-50 text-emerald-950 border-emerald-200",
    gold: "bg-yellow-50 text-amber-900 border-amber-300",
  };

  return (
    <div className="rounded-2xl border border-zinc-200/90 bg-white/95 backdrop-blur-md shadow-xs overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:shadow-md hover:border-zinc-300">
      {/* Station Top Bar */}
      <div className="p-4 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/50">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2 items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
          </span>
          <span className="text-xs font-mono font-bold text-zinc-800 tracking-tight">
            {stationBadge}
          </span>
        </div>
        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-500 bg-white border border-zinc-200 px-2 py-0.5 rounded">
          {stationType}
        </span>
      </div>

      {/* Video Viewport — Equal Height & Proportions */}
      <div
        className="relative aspect-video bg-zinc-950 flex items-center justify-center cursor-pointer overflow-hidden"
        onClick={toggle}
      >
        <video
          ref={videoRef}
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className={
            isPortrait
              ? "h-full max-w-[200px] object-cover rounded-xl shadow-2xl border border-zinc-800 my-1"
              : "h-full w-full object-cover"
          }
        />

        {/* Play/Pause indicator on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-black/20 backdrop-blur-[1px]">
          <div className="h-12 w-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
            {paused ? (
              <svg className="h-4 w-4 text-black ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="6,3 20,12 6,21" />
              </svg>
            ) : (
              <svg className="h-4 w-4 text-black" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            )}
          </div>
        </div>
      </div>

      {/* Details & Metrics */}
      <div className="p-5 flex flex-col gap-2.5 bg-white">
        <ShimmerTitle text={title} theme={theme} size="sm" as="h4" />
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`text-xs font-mono font-bold uppercase tracking-wide px-2.5 py-1 rounded-md border ${badgeColorMap[metricBadgeTheme]}`}
          >
            {metricBadge}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-medium font-body pt-1 border-t border-zinc-100">
          {description}
        </p>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────
   HeroAvatar — Profile photo with hover cross-fade
   ──────────────────────────────────────────────────────── */

function HeroAvatar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="flex flex-col items-center lg:items-end gap-3.5"
    >
      {/* Top-Right Quadrant Status Pill */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-white/95 backdrop-blur-md shadow-xs text-[11px] font-mono font-bold text-zinc-900 uppercase tracking-wider">
        <span className="relative flex h-2 w-2 items-center justify-center">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.9)]" />
        </span>
        <span>Available • Applied ML &amp; Systems</span>
      </div>

      <div
        className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-60 lg:h-60 rounded-full overflow-hidden border-2 border-zinc-200/90 bg-white shadow-xl cursor-pointer group hover:shadow-2xl hover:border-zinc-300 transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsHovered((prev) => !prev)}
      >
        {/* Professional photo (default on landing) */}
        <AnimatePresence>
          {!isHovered && (
            <motion.div
              key="professional"
              initial={{ opacity: 0, rotateY: 90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: -90 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src="/images/about/profile/IMG_2916.png"
                alt="Harshit Singh — Professional"
                fill
                sizes="(max-width: 640px) 192px, (max-width: 1024px) 224px, 256px"
                className="object-cover"
                priority
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Casual photo (on hover) */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              key="casual"
              initial={{ opacity: 0, rotateY: 90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: -90 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src="/pfp.jpeg"
                alt="Harshit Singh"
                fill
                sizes="(max-width: 640px) 192px, (max-width: 1024px) 224px, 256px"
                className="object-cover"
                priority
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Subtle ring glow on hover */}
        <div className="absolute inset-0 rounded-full border border-black/10 group-hover:border-black/30 transition-colors pointer-events-none" />
      </div>

      <div className="text-[11px] font-mono font-medium text-zinc-500 tracking-wide text-center lg:text-right">
        Tap or hover to flip
      </div>
    </motion.div>
  );
}

/* ────────────────────────────────────────────────────────
   Home Page
   ──────────────────────────────────────────────────────── */

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) return;
    setStatus("sending");
    setStatusMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        setStatusMessage("Transmission received. I will be in touch shortly.");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => {
          setStatus("idle");
          setStatusMessage("");
        }, 5000);
      } else {
        setStatus("error");
        setStatusMessage(data.error || "Delivery failed. Please email direct at harshit.workmain@gmail.com.");
        setTimeout(() => setStatus("idle"), 6000);
      }
    } catch (err) {
      setStatus("error");
      setStatusMessage("Network error. Please reach out directly to harshit.workmain@gmail.com.");
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  return (
    <PageTransition>
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 flex-1 flex flex-col">

        {/* ═══════════════════════════════════════════════
            SECTION 1 — Hero
           ═══════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left — Text */}
          <div className="lg:col-span-7 flex flex-col items-start text-left gap-6">
            {/* Style 12: Heartbeat Pulse Beacon + Glass Glow */}
            <HeroInstitutionPill text="Vellore Institute of Technology, Chennai" />

            <div className="w-full">
              <InkTitleReveal text="Data Science & Applied ML" />
              <div className="mt-3">
                <AppleTvWordRotator />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col gap-4 max-w-2xl font-body p-6 sm:p-7 rounded-2xl border border-zinc-200/90 bg-white/95 backdrop-blur-md shadow-xs"
            >
              <p className="text-base sm:text-lg md:text-[18px] text-zinc-950 font-semibold leading-relaxed">
                &ldquo;I build software systems and back them with applied machine learning. My work usually starts with a real problem and goes from raw data to a model to something deployed that people can actually use.&rdquo;
              </p>
              <p className="text-sm sm:text-base md:text-[16px] text-zinc-800 font-medium leading-relaxed border-t border-zinc-200/80 pt-3.5">
                &ldquo;What drives me: building for people who are underserved &mdash; assistive tech, disaster response, clinical screening &mdash; and taking an idea from raw data to something deployed and working.&rdquo;
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Link
                href="/projects"
                className="group flex h-12 items-center justify-center gap-2 rounded bg-black px-6 text-xs uppercase tracking-widest text-white font-semibold transition-all duration-300 hover:bg-zinc-800 shadow-xs"
              >
                Explore Projects
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/about"
                className="flex h-12 items-center justify-center rounded border border-zinc-200 bg-white/50 backdrop-blur-sm px-6 text-xs uppercase tracking-widest text-black font-semibold transition-all duration-300 hover:border-zinc-400 hover:bg-white/80"
              >
                Read Profile
              </Link>
            </motion.div>
          </div>

          {/* Right — Profile Photo Elevated to Top-Right Quadrant */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-start self-start pt-2 lg:pt-3">
            <HeroAvatar />
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            SECTION 2 — Quantified Metrics
           ═══════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-3 mt-20 border-t border-zinc-200/60 pt-14"
        >
          <div className="glass-panel glass-panel-hover rounded-xl p-6 flex flex-col gap-3 border border-zinc-200">
            <div className="h-8 w-8 rounded bg-zinc-100 flex items-center justify-center border border-zinc-250 text-black">
              <Cpu className="h-4 w-4" />
            </div>
            <MetricDigitRoll
              value="92.4% Accuracy"
              label="Real-Time SPARC Sign Recognition (12K Samples)"
            />
          </div>

          <div className="glass-panel glass-panel-hover rounded-xl p-6 flex flex-col gap-3 border border-zinc-200">
            <div className="h-8 w-8 rounded bg-zinc-100 flex items-center justify-center border border-zinc-250 text-black">
              <Activity className="h-4 w-4" />
            </div>
            <MetricDigitRoll
              value="98.4% Val Acc"
              label="Coastal LSTM Flood & Microclimate Forecast"
            />
          </div>

          <div className="glass-panel glass-panel-hover rounded-xl p-6 flex flex-col gap-3 border border-zinc-200">
            <div className="h-8 w-8 rounded bg-zinc-100 flex items-center justify-center border border-zinc-250 text-black">
              <Compass className="h-4 w-4" />
            </div>
            <MetricDigitRoll
              value=">95% Uptime"
              label="TRIDENT Distributed Telemetry & Risk Routing"
            />
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════════
            SECTION 3 — Featured Demo Videos (Style 28 + 26)
           ═══════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          {/* Section 3 Header: Style 19 Electric Indigo Shimmer */}
          <EditorialCurtainHeader
            title="Featured Demos"
            subtitle="Interactive previews of predictive models & edge perception loops"
            theme="indigo"
            badgeText="Live Previews"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <VideoCard
              src="/videos/wearable-demo.mp4"
              title="TRIDENT — Predictive AI & Command Center"
              tag="Live Telemetry & 12-Node Risk Routing"
              theme="indigo"
              subtitle="Stacked PyTorch LSTM microclimate forecasting, NetworkX graph diffusion risk routing, and real-time P1-P5 victim triage telemetry under sub-50ms latency."
              codeLink="https://github.com/harshitworkmain/trident"
              demoLink="https://drive.google.com/file/d/1tUl8rAFmcdpX7BgRRWtE-QdVltjiZb7W/view?usp=sharing"
              demoLabel="Full Demo"
            />
            <VideoCard
              src="/videos/sparc/SPARC-preview.mp4"
              title="SPARC — Sign Language Recognition"
              tag="Multimodal 3D Mesh & Voice Synthesis"
              theme="emerald"
              subtitle="92.4% accuracy real-time gesture recognition pipeline supporting ISL and ASL with multimodal fusion — hand landmarks, facial emotion, and voice synthesis."
              codeLink="https://github.com/harshitworkmain/SPARC"
              demoLink="https://youtu.be/W2UOCENfXzg"
              demoLabel="Watch on YouTube"
            />
          </div>

          {/* STEMBOT Autonomous Mobile Robot Telemetry Consoles (Simulation + Physical Test) */}
          <div className="mt-16">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-amber-200/90 shadow-xs mb-8">
              <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.9)]" />
              </span>
              <ShimmerTitle
                text="STEMBOT — Indoor Autonomous Mobile Robot Console"
                theme="amber"
                size="sm"
                as="h3"
              />
              <span className="hidden sm:inline-block text-[10px] font-mono font-bold uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md">
                15 Hz EKF • ROS 2 Jazzy
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Station Alpha: Digital Twin Simulation in Gazebo & RViz 2 */}
              <StembotCard
                src="/videos/stembot/stembot-ros2.mp4"
                stationBadge="STATION ALPHA // DIGITAL TWIN"
                stationType="ROS 2 Jazzy • RViz 2 & Gazebo"
                title="ROS 2 Jazzy — Digital Twin Simulation"
                metricBadge="LiDAR Perception Loop • 3,600 pts/sec stream"
                metricBadgeTheme="cyan"
                description="High-fidelity Gazebo simulation with RViz 2 costmap inflation, 2D LiDAR /scan filtering, and dynamic Nav2 obstacle traversal with 95% collision-free passing."
                theme="cyan"
                isPortrait={false}
              />

              {/* Station Beta: Physical Chassis Validation on Hardware */}
              <StembotCard
                src="/videos/stembot/stembot-working-demo.mp4"
                stationBadge="STATION BETA // PHYSICAL VALIDATION"
                stationType="On-Chassis Sensor Fusion"
                title="Indoor Autonomous Mobile Robot — Physical Chassis"
                metricBadge="15 Hz EKF • 60% Spatial Drift Cut & 69.2% Angular Error Reduction"
                metricBadgeTheme="gold"
                description="Live corridor testing validating extended Kalman filter (EKF) state estimation fusing wheel encoders and 6-DOF IMU under real-world kinematic floor slip."
                theme="amber"
                isPortrait={true}
              />
            </div>
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════════
            SECTION 4 — Infinite Photo Marquee
           ═══════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          {/* Section 4 Header: Style 19 Shimmer + Frosted Glass Protection against Black Hole */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-3.5 px-5 sm:px-6 py-2.5 sm:py-3 rounded-2xl border border-zinc-200/90 bg-white/95 backdrop-blur-md shadow-sm">
              <span className="relative flex h-3 w-3 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600 shadow-[0_0_8px_rgba(16,185,129,0.9)]" />
              </span>
              <ShimmerTitle text="Project & Competition Gallery" theme="emerald" size="md" />
              <span className="hidden sm:inline-block text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
                16 Captures
              </span>
            </div>
            <p className="text-sm sm:text-base font-semibold text-zinc-600 mt-2.5">
              Live captures from robotics testing, national hackathons, and edge ML deployments
            </p>
          </div>
          <PhotoMarquee />
        </motion.div>

        {/* ═══════════════════════════════════════════════
            SECTION 5 — Core Engineering Pillars (Style 36)
           ═══════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <EditorialCurtainHeader
            title="Core Engineering Pillars"
            subtitle="The three foundational disciplines backing my systems"
            theme="sapphire"
            badgeText="3 Pillars"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Pillar 1 */}
            <div className="glass-panel glass-panel-hover rounded-2xl p-7 flex flex-col gap-4 border border-zinc-200 bg-white/85 backdrop-blur-sm group shadow-xs">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="h-12 w-12 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 shadow-2xs"
              >
                <Brain className="h-6 w-6" />
              </motion.div>
              <PillarCardTitle title="Data Science & Predictive Modeling" accent="indigo" />
              <p className="text-base text-zinc-800 leading-relaxed font-normal font-body">
                Autoregressive multivariate LSTMs, directed graph risk diffusion (NetworkX), Scikit-Learn
                classification pipelines, and multi-criteria decision analysis (MCDA) for triage.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="glass-panel glass-panel-hover rounded-2xl p-7 flex flex-col gap-4 border border-zinc-200 bg-white/85 backdrop-blur-sm group shadow-xs">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="h-12 w-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shadow-2xs"
              >
                <Server className="h-6 w-6" />
              </motion.div>
              <PillarCardTitle title="Applied ML & Computer Vision" accent="emerald" />
              <p className="text-base text-zinc-800 leading-relaxed font-normal font-body">
                Real-time gesture pipelines (92.4% accuracy), MediaPipe 468 landmark face meshes,
                in-browser WebGL inference, and high-frequency LiDAR perception streams.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="glass-panel glass-panel-hover rounded-2xl p-7 flex flex-col gap-4 border border-zinc-200 bg-white/85 backdrop-blur-sm group shadow-xs">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="h-12 w-12 rounded-xl bg-zinc-100 border border-zinc-300 flex items-center justify-center text-zinc-900 shadow-2xs"
              >
                <Code2 className="h-6 w-6" />
              </motion.div>
              <PillarCardTitle title="Software & Data Systems Engineering" accent="slate" />
              <p className="text-base text-zinc-800 leading-relaxed font-normal font-body">
                Full-stack Next.js/React applications, Node.js RESTful APIs (70+ endpoints), shared-memory
                optimizations (<code className="text-xs bg-zinc-100 px-1 py-0.5 rounded font-mono">/dev/shm</code>), and Dockerized backend microservices.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════════
            SECTION 6 — Interactive Tech Stack Matrix (Style 37)
           ═══════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <EditorialCurtainHeader
            title="Technical Arsenal"
            subtitle="Verified technical stack organized across four engineering lifecycle stages"
            theme="purple"
            badgeText="4 Stages"
          />
          <TechMatrix />
        </motion.div>

        {/* ═══════════════════════════════════════════════
            SECTION 7 — System Status Console (Style 24)
           ═══════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <EditorialCurtainHeader
            title="System Diagnostics"
            subtitle="Style 24 IDE Code Stream & interactive telemetry shell"
            theme="cyan"
            badgeText="Telemetry Live"
          />
          <StatusConsole />
        </motion.div>

        {/* ═══════════════════════════════════════════════
            SECTION 8 — Contact (Style 19 Shimmer + Active Borders)
           ═══════════════════════════════════════════════ */}
        <div id="contact" className="scroll-mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="mt-24 border-t border-zinc-200 pt-14"
          >
            {/* Style 19: Text Shadow Shimmer */}
            <ShimmerTitle text="Start a Conversation" />
            <p className="text-base sm:text-lg text-zinc-700 font-semibold mt-3">
              Drop an email or connect through professional networks
            </p>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 mt-12">
              {/* Left Column: Direct Links */}
              <div className="flex flex-col gap-8 justify-center">
                <div>
                  <h3 className="text-sm sm:text-base uppercase tracking-wider text-black font-extrabold mb-3">
                    Connection Nodes
                  </h3>
                  <p className="text-base text-zinc-800 font-medium leading-relaxed max-w-md">
                    Whether you want to discuss predictive ML models, time-series forecasting, data engineering pipelines,
                    or software systems architecture, reach out anytime.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  {/* Email */}
                  <a
                    href="mailto:harshit.workmain@gmail.com"
                    className="glass-panel p-5 rounded-2xl border border-zinc-200 bg-white/90 backdrop-blur-md hover:border-indigo-400 hover:shadow-md transition-all duration-300 flex items-center gap-4 group"
                  >
                    <div className="h-10 w-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-800 group-hover:scale-105 transition-transform">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase tracking-widest text-zinc-600 font-mono font-bold">Email Direct</span>
                      <span className="text-sm font-bold text-black">harshit.workmain@gmail.com</span>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/harshit-singh-3b8467300/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-panel p-5 rounded-2xl border border-zinc-200 bg-white/90 backdrop-blur-md hover:border-indigo-400 hover:shadow-md transition-all duration-300 flex items-center gap-4 group"
                  >
                    <div className="h-10 w-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-800 group-hover:scale-105 transition-transform">
                      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase tracking-widest text-zinc-600 font-mono font-bold">LinkedIn</span>
                      <span className="text-sm font-bold text-black">linkedin.com/in/harshit-singh-3b8467300</span>
                    </div>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/harshitworkmain"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-panel p-5 rounded-2xl border border-zinc-200 bg-white/90 backdrop-blur-md hover:border-indigo-400 hover:shadow-md transition-all duration-300 flex items-center gap-4 group"
                  >
                    <div className="h-10 w-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-800 group-hover:scale-105 transition-transform">
                      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                      </svg>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase tracking-widest text-zinc-600 font-mono font-bold">GitHub Portfolio</span>
                      <span className="text-sm font-bold text-black">github.com/harshitworkmain</span>
                    </div>
                  </a>

                  {/* X / Twitter */}
                  <a
                    href="https://x.com/HarshitSin22346"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-panel p-5 rounded-2xl border border-zinc-200 bg-white/90 backdrop-blur-md hover:border-indigo-400 hover:shadow-md transition-all duration-300 flex items-center gap-4 group"
                  >
                    <div className="h-10 w-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-800 group-hover:scale-105 transition-transform">
                      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase tracking-widest text-zinc-600 font-mono font-bold">X (Twitter)</span>
                      <span className="text-sm font-bold text-black">x.com/HarshitSin22346</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right Column: Contact Form with Active Border Line Expansion */}
              <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-zinc-200/90 bg-white/95 backdrop-blur-md shadow-md">
                <h3 className="text-sm sm:text-base uppercase tracking-wider text-black font-extrabold mb-6">
                  Transmission Portal
                </h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {/* Your Name */}
                  <div className="flex flex-col gap-2 group/field">
                    <label className="text-xs uppercase tracking-wider text-zinc-700 font-extrabold">
                      Your Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Nicola Tesla"
                        className="w-full bg-zinc-50 border-b border-zinc-300 rounded-none p-3.5 text-sm text-black placeholder-zinc-400 focus:outline-none transition-all duration-300"
                      />
                      {/* Active border line expansion (scaleX: 0 -> 1 on focus) */}
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black scale-x-0 transition-transform duration-300 ease-out origin-left group-focus-within/field:scale-x-100 pointer-events-none" />
                    </div>
                  </div>

                  {/* Your Email */}
                  <div className="flex flex-col gap-2 group/field">
                    <label className="text-xs uppercase tracking-wider text-zinc-700 font-extrabold">
                      Your Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. nicola@alternatecurrent.org"
                        className="w-full bg-zinc-50 border-b border-zinc-300 rounded-none p-3.5 text-sm text-black placeholder-zinc-400 focus:outline-none transition-all duration-300"
                      />
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black scale-x-0 transition-transform duration-300 ease-out origin-left group-focus-within/field:scale-x-100 pointer-events-none" />
                    </div>
                  </div>

                  {/* Transmission Subject */}
                  <div className="flex flex-col gap-2 group/field">
                    <label className="text-xs uppercase tracking-wider text-zinc-700 font-extrabold">
                      Transmission Subject
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Applied ML Collaboration / Engineering Role"
                        className="w-full bg-zinc-50 border-b border-zinc-300 rounded-none p-3.5 text-sm text-black placeholder-zinc-400 focus:outline-none transition-all duration-300"
                      />
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black scale-x-0 transition-transform duration-300 ease-out origin-left group-focus-within/field:scale-x-100 pointer-events-none" />
                    </div>
                  </div>

                  {/* Message Node */}
                  <div className="flex flex-col gap-2 group/field">
                    <label className="text-xs uppercase tracking-wider text-zinc-700 font-extrabold">
                      Message Node
                    </label>
                    <div className="relative">
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Transmission contents..."
                        className="w-full bg-zinc-50 border-b border-zinc-300 rounded-none p-3.5 text-sm text-black placeholder-zinc-400 focus:outline-none transition-all duration-300 resize-none"
                      />
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black scale-x-0 transition-transform duration-300 ease-out origin-left group-focus-within/field:scale-x-100 pointer-events-none" />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status !== "idle"}
                    className={`flex h-14 items-center justify-center gap-2.5 rounded-xl text-xs sm:text-sm uppercase tracking-widest font-extrabold transition-all duration-300 w-full shadow-md ${
                      status === "success"
                        ? "bg-emerald-600 text-white"
                        : status === "sending"
                        ? "bg-zinc-300 text-zinc-600"
                        : "bg-black text-white hover:bg-zinc-800"
                    }`}
                  >
                    {status === "success" ? (
                      <>
                        <Check className="h-5 w-5" />
                        Sent Successfully
                      </>
                    ) : status === "sending" ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Transmission
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
      <ScrollToTop />
    </PageTransition>
  );
}
