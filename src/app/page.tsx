"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { ArrowRight, Cpu, Activity, Compass } from "lucide-react";
import { motion } from "framer-motion";
import PageTransition from "@/components/ui/PageTransition";

function VideoCard({
  src,
  title,
  subtitle,
  codeLink,
  driveLink,
}: {
  src: string;
  title: string;
  subtitle: string;
  codeLink: string;
  driveLink: string;
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
            href={driveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] uppercase tracking-widest text-zinc-400 hover:text-black transition-colors flex items-center gap-1"
          >
            <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            Full Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 flex-1 flex flex-col">
        {/* Hero Section — Two Column */}
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
              Engineering
              <span className="block text-zinc-400 font-light mt-1">Hardware-Backed AI</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-sm md:text-base leading-8 text-zinc-500 font-light max-w-xl font-body"
            >
              Electronics and Computer Engineering undergrad building highly optimized real-time edge pipelines,
              applied computer vision ecosystems, autonomous robotics middleware, and robust IoT platforms.
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

        {/* Quantified Metrics Grid */}
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

        {/* Featured Project Demos */}
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
              driveLink="https://drive.google.com/file/d/1tUl8rAFmcdpX7BgRRWtE-QdVltjiZb7W/view?usp=sharing"
            />
            <VideoCard
              src="/videos/SPARC.mp4"
              title="SPARC — Sign Language Recognition"
              subtitle="92.4% accuracy real-time gesture recognition pipeline supporting ISL and ASL with multimodal fusion — hand landmarks, facial emotion, and voice synthesis."
              codeLink="https://github.com/harshitworkmain/SPARC"
              driveLink="https://drive.google.com/file/d/118CLG9JfvNNn8UijlYk3M2-awfjBkGyW/view?usp=sharing"
            />
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
