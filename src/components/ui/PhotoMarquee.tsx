"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

/* ────────────────────────────────────────────────────────
   Photo Marquee — Infinite scrolling image tracks
   ──────────────────────────────────────────────────────── */

const track1 = [
  { src: "/images/projects/sparc/sparc-system.jpeg", alt: "SPARC Circuit System" },
  { src: "/images/projects/trident/trident-rov-dashboard.jpeg", alt: "TRIDENT Command Dashboard" },
  { src: "/images/projects/terrain-scout/technovation-terrain-scout-rover.jpeg", alt: "Terrain Scout Rover" },
  { src: "/images/projects/drishtiguide/drishtiguide-components.jpeg", alt: "DrishtiGuide Components" },
  { src: "/images/projects/general/rfid-scanner-project.jpeg", alt: "RFID Scanner Project" },
  { src: "/images/projects/general/drone.jpeg", alt: "Drone Quadcopter" },
  { src: "/images/projects/general/arduino-uno-q.jpeg", alt: "Arduino Testing" },
];

const track2 = [
  { src: "/images/achievements/sih/sih-final-me.jpeg", alt: "SIH Finals — Harshit with SPARC" },
  { src: "/images/achievements/sih/sih-final-teamPhoto.jpeg", alt: "SIH Grand Team Photo" },
  { src: "/images/achievements/technovation/technovation-me-with-trophy.jpeg", alt: "Technovation — Podium Trophy" },
  { src: "/images/achievements/innovate-x-impact/InnovateXImpact-winnerPhoto.jpeg", alt: "Innovate X Impact — Winner" },
  { src: "/images/achievements/bis/BIS-project-showcase.jpeg", alt: "BIS Project Showcase" },
  { src: "/images/achievements/general/me-posing-with-5-trophies.jpeg", alt: "Hardware Trophies Collection" },
  { src: "/images/leadership/namo-nirvana/college-special-team-showcase-grp-photo.jpeg", alt: "Namo Nirvana Team Photo" },
];

function MarqueeTrack({
  images,
  direction = "left",
  speed = 35,
}: {
  images: { src: string; alt: string }[];
  direction?: "left" | "right";
  speed?: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);

  useEffect(() => {
    if (trackRef.current) {
      // Measure width of one set of images
      setTrackWidth(trackRef.current.scrollWidth / 2);
    }
  }, []);

  // Duplicate images for seamless loop
  const allImages = [...images, ...images];

  return (
    <div className="overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <motion.div
        ref={trackRef}
        className="flex gap-4 will-change-transform"
        animate={{
          x: direction === "left" ? [0, -trackWidth] : [-trackWidth, 0],
        }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          },
        }}
      >
        {allImages.map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className="relative shrink-0 w-56 h-36 md:w-72 md:h-44 rounded-lg overflow-hidden border border-zinc-200 bg-zinc-100 group"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 224px, 288px"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Caption overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
              <span className="text-[9px] font-bold uppercase tracking-widest text-white/90 font-mono">
                {img.alt}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function PhotoMarquee() {
  return (
    <div className="flex flex-col gap-5">
      <MarqueeTrack images={track1} direction="left" speed={40} />
      <MarqueeTrack images={track2} direction="right" speed={45} />
    </div>
  );
}
