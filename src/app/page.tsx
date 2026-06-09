"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { ArrowRight, Cpu, Activity, Compass, Mail, Send, Check, Brain, Server, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import PageTransition from "@/components/ui/PageTransition";
import TechMatrix from "@/components/ui/TechMatrix";
import StatusConsole from "@/components/ui/StatusConsole";

/* ────────────────────────────────────────────────────────
   VideoCard — reusable video preview + link component
   ──────────────────────────────────────────────────────── */

function VideoCard({
  src,
  title,
  subtitle,
  codeLink,
  demoLink,
  demoLabel,
}: {
  src: string;
  title: string;
  subtitle: string;
  codeLink: string;
  demoLink: string;
  demoLabel: string;
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

  return (
    <div className="video-card group relative rounded-lg overflow-hidden border border-zinc-200 bg-white/40 backdrop-blur-sm">
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
        {/* Play / Pause overlay */}
        <div className="video-overlay absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px]">
          <button
            onClick={toggle}
            className="h-14 w-14 rounded-full bg-white/90 border border-zinc-200 flex items-center justify-center shadow-lg transition-transform hover:scale-110"
            aria-label={paused ? "Play" : "Pause"}
          >
            {paused ? (
              <svg className="h-5 w-5 text-black ml-0.5" viewBox="0 0 24 24" fill="currentColor"><polygon points="6,3 20,12 6,21" /></svg>
            ) : (
              <svg className="h-5 w-5 text-black" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg>
            )}
          </button>
        </div>
      </div>
      <div className="p-5 flex flex-col gap-2">
        <h3 className="text-sm font-semibold tracking-wide text-black uppercase font-heading">
          {title}
        </h3>
        <p className="text-xs text-zinc-500 leading-relaxed">{subtitle}</p>
        <div className="flex gap-4 mt-2">
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] uppercase tracking-widest text-zinc-400 hover:text-black transition-colors flex items-center gap-1"
          >
            <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.16c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 016.02 0c2.28-1.55 3.28-1.23 3.28-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12.01 12.01 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            Code
          </a>
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] uppercase tracking-widest text-zinc-400 hover:text-black transition-colors flex items-center gap-1"
          >
            <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            {demoLabel}
          </a>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────
   Home Page
   ──────────────────────────────────────────────────────── */

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <PageTransition>
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 flex-1 flex flex-col">

        {/* ═══════════════════════════════════════════════
            SECTION 1 — Hero
           ═══════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
          {/* Left — Text */}
          <div className="md:col-span-3 flex flex-col items-start text-left gap-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-semibold tracking-widest text-zinc-500 border border-zinc-200 bg-white/60 backdrop-blur-sm uppercase"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
              Vellore Institute of Technology, Chennai
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl font-bold tracking-tight text-black sm:text-6xl uppercase font-heading"
            >
              Software Systems
              <span className="block text-zinc-400 font-light mt-1">Engineer & Applied AI Developer</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-sm md:text-base leading-8 text-zinc-500 font-light max-w-xl font-body"
            >
              Electronics and Computer Engineering undergraduate specializing in high-performance
              software engineering, applied AI/ML systems, data analytics pipelines, and edge computing solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Link
                href="/projects"
                className="group flex h-12 items-center justify-center gap-2 rounded bg-black px-6 text-xs uppercase tracking-widest text-white font-semibold transition-all duration-300 hover:bg-zinc-800"
              >
                Explore Projects
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/about"
                className="flex h-12 items-center justify-center rounded border border-zinc-200 bg-white/40 backdrop-blur-sm px-6 text-xs uppercase tracking-widest text-black transition-all duration-300 hover:border-zinc-400 hover:bg-white/70"
              >
                Read Profile
              </Link>
            </motion.div>
          </div>

          {/* Right — Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="md:col-span-2 flex justify-center"
          >
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-zinc-200 glass-panel shadow-lg">
              <Image
                src="/pfp.jpeg"
                alt="Harshit Singh"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
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
          <div className="glass-panel glass-panel-hover rounded-lg p-6 flex flex-col gap-3">
            <div className="h-8 w-8 rounded bg-zinc-100 flex items-center justify-center border border-zinc-200 text-black">
              <Cpu className="h-4 w-4" />
            </div>
            <div>
              <span className="block text-2xl font-bold tracking-tight text-black uppercase font-heading">92.4% Accuracy</span>
              <span className="block text-[10px] uppercase tracking-widest text-zinc-400 mt-1">Real-Time SPARC Sign Recognition</span>
            </div>
          </div>

          <div className="glass-panel glass-panel-hover rounded-lg p-6 flex flex-col gap-3">
            <div className="h-8 w-8 rounded bg-zinc-100 flex items-center justify-center border border-zinc-200 text-black">
              <Activity className="h-4 w-4" />
            </div>
            <div>
              <span className="block text-2xl font-bold tracking-tight text-black uppercase font-heading">Sub-50 ms</span>
              <span className="block text-[10px] uppercase tracking-widest text-zinc-400 mt-1">ROS 2 Control &amp; Motor Command Latency</span>
            </div>
          </div>

          <div className="glass-panel glass-panel-hover rounded-lg p-6 flex flex-col gap-3">
            <div className="h-8 w-8 rounded bg-zinc-100 flex items-center justify-center border border-zinc-200 text-black">
              <Compass className="h-4 w-4" />
            </div>
            <div>
              <span className="block text-2xl font-bold tracking-tight text-black uppercase font-heading">&gt;95% Uptime</span>
              <span className="block text-[10px] uppercase tracking-widest text-zinc-400 mt-1">TRIDENT Distributed Edge Telemetry</span>
            </div>
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════════
            SECTION 3 — Featured Demo Videos
           ═══════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <h2 className="text-xs uppercase tracking-widest text-zinc-400 mb-8 font-heading">Featured Demos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <VideoCard
              src="/videos/wearable-demo.mp4"
              title="TRIDENT — Wearable Ecosystem"
              subtitle="ESP32 multi-sensor wearable with real-time telemetry, fall detection, and heart-rate monitoring. Central command dashboard with probabilistic victim triage."
              codeLink="https://github.com/harshitworkmain/trident"
              demoLink="https://drive.google.com/file/d/1tUl8rAFmcdpX7BgRRWtE-QdVltjiZb7W/view?usp=sharing"
              demoLabel="Full Demo"
            />
            <VideoCard
              src="/videos/SPARC-preview.mp4"
              title="SPARC — Sign Language Recognition"
              subtitle="92.4% accuracy real-time gesture recognition pipeline supporting ISL and ASL with multimodal fusion — hand landmarks, facial emotion, and voice synthesis."
              codeLink="https://github.com/harshitworkmain/SPARC"
              demoLink="https://youtu.be/W2UOCENfXzg"
              demoLabel="Watch on YouTube"
            />
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════════
            SECTION 4 — Core Engineering Pillars
           ═══════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <h2 className="text-xs uppercase tracking-widest text-zinc-400 mb-8 font-heading flex items-center gap-2">
            <span className="h-px w-6 bg-zinc-300" />
            Core Engineering Pillars
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel glass-panel-hover rounded-lg p-6 flex flex-col gap-4">
              <div className="h-10 w-10 rounded bg-zinc-100 border border-zinc-200 flex items-center justify-center text-black">
                <Server className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-bold text-black uppercase tracking-wider font-heading">
                Embedded Intelligence & Middleware
              </h3>
              <p className="text-xs text-zinc-500 leading-relaxed font-body">
                ROS 2 robotic middleware, real-time sensor telemetry loops, ESP32 edge orchestration,
                and sub-50ms latency motor controllers for autonomous systems.
              </p>
            </div>

            <div className="glass-panel glass-panel-hover rounded-lg p-6 flex flex-col gap-4">
              <div className="h-10 w-10 rounded bg-zinc-100 border border-zinc-200 flex items-center justify-center text-black">
                <Brain className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-bold text-black uppercase tracking-wider font-heading">
                Applied ML & Analytics Platforms
              </h3>
              <p className="text-xs text-zinc-500 leading-relaxed font-body">
                Computer vision deployment (YOLOv8/MediaPipe), forecasting LSTMs, graph-based risk diffusion
                models, and real-time data analytics dashboards.
              </p>
            </div>

            <div className="glass-panel glass-panel-hover rounded-lg p-6 flex flex-col gap-4">
              <div className="h-10 w-10 rounded bg-zinc-100 border border-zinc-200 flex items-center justify-center text-black">
                <Code2 className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-bold text-black uppercase tracking-wider font-heading">
                Full-Stack Software Engineering
              </h3>
              <p className="text-xs text-zinc-500 leading-relaxed font-body">
                Performant React/Next.js client apps, Node.js REST APIs, shared-memory optimization,
                WebRTC teleconsultation, and database-backed community platforms.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════════
            SECTION 5 — Interactive Tech Stack Matrix
           ═══════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <h2 className="text-xs uppercase tracking-widest text-zinc-400 mb-8 font-heading flex items-center gap-2">
            <span className="h-px w-6 bg-zinc-300" />
            Technical Arsenal
          </h2>
          <TechMatrix />
        </motion.div>

        {/* ═══════════════════════════════════════════════
            SECTION 6 — System Status Console
           ═══════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <h2 className="text-xs uppercase tracking-widest text-zinc-400 mb-8 font-heading flex items-center gap-2">
            <span className="h-px w-6 bg-zinc-300" />
            System Diagnostics
          </h2>
          <StatusConsole />
        </motion.div>

        {/* ═══════════════════════════════════════════════
            SECTION 7 — Contact (merged from /contact)
           ═══════════════════════════════════════════════ */}
        <div id="contact" className="scroll-mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="mt-24 border-t border-zinc-200/60 pt-14"
          >
            <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl uppercase font-heading">
              Start a Conversation
            </h2>
            <p className="text-xs uppercase tracking-widest text-zinc-400 font-light mt-3">
              Drop an email or connect through professional networks
            </p>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 mt-12">
              {/* Left Column: Direct Links */}
              <div className="flex flex-col gap-8 justify-center">
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-4">
                    Connection Nodes
                  </h3>
                  <p className="text-xs text-zinc-500 font-light leading-relaxed max-w-md">
                    Whether you want to discuss ROS 2 stack optimization, computer vision pipelines, custom ESP32 wearables,
                    or full-stack ML integrations, reach out anytime.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  {/* Email */}
                  <a
                    href="mailto:harshit.workmain@gmail.com"
                    className="glass-panel p-4 rounded-lg border border-zinc-100 hover:border-zinc-300 transition-all duration-300 flex items-center gap-4"
                  >
                    <div className="h-8 w-8 rounded bg-zinc-100 flex items-center justify-center text-zinc-500">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="block text-[8px] uppercase tracking-widest text-zinc-400 font-bold">Email Direct</span>
                      <span className="text-xs font-semibold text-black">harshit.workmain@gmail.com</span>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/harshit-singh-3b8467300/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-panel p-4 rounded-lg border border-zinc-100 hover:border-zinc-300 transition-all duration-300 flex items-center gap-4"
                  >
                    <div className="h-8 w-8 rounded bg-zinc-100 flex items-center justify-center text-zinc-500">
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </div>
                    <div>
                      <span className="block text-[8px] uppercase tracking-widest text-zinc-400 font-bold">LinkedIn</span>
                      <span className="text-xs font-semibold text-black">linkedin.com/in/harshit-singh-3b8467300</span>
                    </div>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/harshitworkmain"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-panel p-4 rounded-lg border border-zinc-100 hover:border-zinc-300 transition-all duration-300 flex items-center gap-4"
                  >
                    <div className="h-8 w-8 rounded bg-zinc-100 flex items-center justify-center text-zinc-500">
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                      </svg>
                    </div>
                    <div>
                      <span className="block text-[8px] uppercase tracking-widest text-zinc-400 font-bold">GitHub Portfolio</span>
                      <span className="text-xs font-semibold text-black">github.com/harshitworkmain</span>
                    </div>
                  </a>

                  {/* X / Twitter */}
                  <a
                    href="https://x.com/HarshitSin22346"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-panel p-4 rounded-lg border border-zinc-100 hover:border-zinc-300 transition-all duration-300 flex items-center gap-4"
                  >
                    <div className="h-8 w-8 rounded bg-zinc-100 flex items-center justify-center text-zinc-500">
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </div>
                    <div>
                      <span className="block text-[8px] uppercase tracking-widest text-zinc-400 font-bold">X (Twitter)</span>
                      <span className="text-xs font-semibold text-black">x.com/HarshitSin22346</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="glass-panel p-8 rounded-lg border border-zinc-100">
                <h3 className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-6">
                  Transmission Portal
                </h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] uppercase tracking-widest text-zinc-400 font-bold">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Nicola Tesla"
                      className="w-full bg-zinc-50 border-b-2 border-zinc-200 rounded-none p-3 text-xs text-black placeholder-zinc-300 focus:outline-none focus:border-black transition-all duration-300"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] uppercase tracking-widest text-zinc-400 font-bold">Your Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. nicola@alternatecurrent.org"
                      className="w-full bg-zinc-50 border-b-2 border-zinc-200 rounded-none p-3 text-xs text-black placeholder-zinc-300 focus:outline-none focus:border-black transition-all duration-300"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] uppercase tracking-widest text-zinc-400 font-bold">Message Node</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Transmission contents..."
                      className="w-full bg-zinc-50 border-b-2 border-zinc-200 rounded-none p-3 text-xs text-black placeholder-zinc-300 focus:outline-none focus:border-black transition-all duration-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status !== "idle"}
                    className={`flex h-12 items-center justify-center gap-2 rounded text-xs uppercase tracking-widest font-semibold transition-all duration-300 w-full ${
                      status === "success"
                        ? "bg-black text-white"
                        : status === "sending"
                        ? "bg-zinc-200 text-zinc-400"
                        : "bg-black text-white hover:bg-zinc-800"
                    }`}
                  >
                    {status === "success" ? (
                      <>
                        <Check className="h-4 w-4" />
                        Sent Successfully
                      </>
                    ) : status === "sending" ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-3.5 w-3.5" />
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
    </PageTransition>
  );
}
