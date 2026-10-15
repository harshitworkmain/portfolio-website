"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

/* ────────────────────────────────────────────────────────
   Photo Marquee — Infinite scrolling image tracks
   with glassmorphic caption slides on hover
   ──────────────────────────────────────────────────────── */

interface MarqueeItem {
  src: string;
  alt: string;
  category: string;
}

const track1: MarqueeItem[] = [
  { src: "/images/projects/sparc/sparc-system.jpeg", alt: "SPARC Embedded System", category: "Edge Vision & ML" },
  { src: "/images/projects/trident/trident-rov-dashboard.jpeg", alt: "TRIDENT Command Dashboard", category: "Predictive AI Systems" },
  { src: "/images/projects/terrain-scout/technovation-terrain-scout-rover.jpeg", alt: "Terrain Scout Rover", category: "Autonomous Robotics" },
  { src: "/images/projects/drishtiguide/drishtiguide-components.jpeg", alt: "DrishtiGuide Components", category: "Assistive ML Wearable" },
  { src: "/images/projects/general/rfid-scanner-project.jpeg", alt: "RFID Scanner Telemetry", category: "Sensor Integration" },
  { src: "/images/projects/general/drone.jpeg", alt: "Aerial Perception Drone", category: "Autonomous Systems" },
  { src: "/images/projects/general/arduino-uno-q.jpeg", alt: "Telemetry Bench Testing", category: "Signal Validation" },
];

const track2: MarqueeItem[] = [
  { src: "/images/achievements/sih/sih-final-me.jpeg", alt: "SIH Finals — SPARC Showcase", category: "Smart India Hackathon" },
  { src: "/images/achievements/sih/sih-final-teamPhoto.jpeg", alt: "SIH Grand Team Photo", category: "National Finalist" },
  { src: "/images/achievements/technovation/technovation-me-with-trophy.jpeg", alt: "Technovation Trophy", category: "1st Prize Winner" },
  { src: "/images/achievements/innovate-x-impact/InnovateXImpact-winnerPhoto.jpeg", alt: "Innovate X Impact", category: "Winner — AI Category" },
  { src: "/images/achievements/bis/BIS-project-showcase.jpeg", alt: "Bureau of Indian Standards", category: "National Project Expo" },
  { src: "/images/achievements/general/me-posing-with-5-trophies.jpeg", alt: "Engineering Honors", category: "Competition Record" },
  { src: "/images/leadership/namo-nirvana/college-special-team-showcase-grp-photo.jpeg", alt: "Namo Nirvana Team", category: "Technical Leadership" },
];

function MarqueeTrack({
  images,
  direction = "left",
  speed = 35,
}: {
  images: MarqueeItem[];
  direction?: "left" | "right";
  speed?: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (trackRef.current) {
      setTrackWidth(trackRef.current.scrollWidth / 2);
    }
  }, []);

  const allImages = [...images, ...images];

  return (
    <div
      className="overflow-hidden relative group/track"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

      <motion.div
        ref={trackRef}
        className="flex gap-4 will-change-transform py-2"
        animate={{
          x: direction === "left" ? [0, -trackWidth] : [-trackWidth, 0],
        }}
        transition={{
          x: {
            duration: isPaused ? 0 : speed,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          },
        }}
      >
        {allImages.map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className="relative shrink-0 w-64 h-40 md:w-80 md:h-48 rounded-xl overflow-hidden border border-zinc-200 bg-zinc-100 group shadow-xs transition-all duration-500 hover:border-zinc-400 hover:shadow-lg"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 256px, 320px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
            />

            {/* Dark gradient base on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Glassmorphic Caption Slide Pill (Upward translation on hover) */}
            <div className="absolute inset-x-3 bottom-3 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out z-20">
              <div className="rounded-lg bg-white/90 backdrop-blur-md border border-white/80 px-3 py-2 shadow-lg flex flex-col gap-0.5">
                <span className="text-[8px] font-mono font-bold uppercase tracking-widest text-indigo-700">
                  {img.category}
                </span>
                <span className="text-xs font-bold text-black uppercase tracking-tight font-heading truncate">
                  {img.alt}
                </span>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function PhotoMarquee() {
  return (
    <div className="flex flex-col gap-4">
      <MarqueeTrack images={track1} direction="left" speed={40} />
      <MarqueeTrack images={track2} direction="right" speed={46} />
    </div>
  );
}
