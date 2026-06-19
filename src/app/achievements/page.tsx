"use client";

import Image from "next/image";
import { useRef, useState, useEffect, useCallback, useMemo } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import PageTransition from "@/components/ui/PageTransition";

/* ────────────────────────────────────────────────────────
   Achievement Data — Chronological: Latest → Oldest
   ──────────────────────────────────────────────────────── */

interface Achievement {
  hash: string;
  scope: string;
  status: string;
  rank: string;
  tag: string;
  title: string;
  description: string;
  projectBuilt: string;
  credential: string;
  credentialLabel: string;
  images: string[];
  date: string;
  linkedinUrl?: string;
}

const achievements: Achievement[] = [
  {
    hash: "SIH-2025",
    scope: "NATIONAL",
    status: "TOP_5",
    rank: "National Finalist",
    tag: "TOP 5 / 500+ TEAMS",
    title: "Smart India Hackathon 2025 — Hardware Edition",
    description:
      "Advanced to Top 50 out of 864 teams in internal qualifiers. Ranked in the Top 5 out of 500+ competing teams nationally for the primary problem statement to compete at the National Grand Finale.",
    projectBuilt: "SPARC",
    credential:
      "https://drive.google.com/file/d/1Vy3qPMbipSNLYGE3GdyYMsqRPwHSYtPD/view?usp=sharing",
    credentialLabel: "SIH'25 Certificate",
    date: "Dec 8 - 12, 2025",
    linkedinUrl:
      "https://www.linkedin.com/posts/samriddhi-ganguly-2b173929a_sih2025-smartindiahackathon-indiansignlanguage-ugcPost-7409916818678775808-g_VX?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEz0R3wBI3e4H3rmOGoUq9S8zerUqdPc9Zg",
    images: [
      "/images/achievements/sih/sih-final-teamPhoto.jpeg",
      "/images/projects/sparc/sparc-system.jpeg",
      "/images/achievements/sih/sih-final-team-photo.jpeg",
      "/images/achievements/sih/sih-final-team-photo1.jpeg",
      "/images/achievements/sih/sih-final-team-photo2.jpeg",
      "/images/achievements/sih/sih-final-team-jury.jpeg",
      "/images/achievements/sih/sih-final-jury-review.jpeg",
      "/images/achievements/sih/sih-final-industrial-experts-review.jpeg",
      "/images/achievements/sih/sih-final-industrial-experts-review2.jpeg",
      "/images/achievements/sih/sih-final-innovation-officer-ministry-of-education-review.jpeg",
      "/images/achievements/sih/sih-final-innovation-officer-ministry-of-education-review1.jpeg",
    ],
  },
  {
    hash: "VITISH-25",
    scope: "INSTITUTIONAL",
    status: "TOP_100",
    rank: "Top 100 / 864 Teams",
    tag: "SIH INTERNAL FINALIST",
    title: "VITISH'25 Internal Hackathon (SIH 2025)",
    description:
      "Advanced to the top 100 out of 864 teams in the SIH Internal Hackathon round, presenting TRIDENT – Tactical Rescue Interface for Disaster Events & Nautical Threats. Developed a unified emergency rescue ecosystem spanning a smart wearable for health telemetry, a central command dashboard for prioritised victim triage (Levels 1–5), and an autonomous rescue underwater ROV validated via CFD simulation.",
    projectBuilt: "TRIDENT",
    credential: "",
    credentialLabel: "",
    date: "Sept 26 - 27, 2025",
    linkedinUrl:
      "https://www.linkedin.com/posts/harshit-singh-3b8467300_vitish25-trident-innovation-activity-7386495735090798592-ISqh?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEz0R3wBI3e4H3rmOGoUq9S8zerUqdPc9Zg",
    images: [
      "/images/achievements/vitish25/trident-teamPhoto.jpeg",
      "/images/projects/trident/trident-rov-dashboard.jpeg",
      "/images/achievements/vitish25/trident-team-debugging.jpeg",
    ],
  },
  {
    hash: "IXI-25",
    scope: "INSTITUTIONAL",
    status: "1ST_PLACE",
    rank: "1st Place",
    tag: "₹5,000 CASH PRIZE",
    title: "Innovate X Impact — V-NEST Business Incubator",
    description:
      "Won 1st Place out of 35 competing startup pitches at V-NEST, the official business incubator of VIT Chennai, demonstrating applied AI/IoT concepts with clear product-market fit.",
    projectBuilt: "DrishtiGuide",
    credential: "",
    credentialLabel: "",
    date: "Mar 13, 2025",
    linkedinUrl:
      "https://www.linkedin.com/posts/namo-nirvana_innovateximpact2025-teamdrishtiguide-teamterrainscout-ugcPost-7319078445013970944-EIk7?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEz0R3wBI3e4H3rmOGoUq9S8zerUqdPc9Zg",
    images: [
      "/images/achievements/innovate-x-impact/InnovateXImpact-teamPhoto.jpeg",
      "/images/projects/drishtiguide/drishtiguide-components.jpeg",
      "/images/achievements/innovate-x-impact/InnovateXImpact-winnerPhoto.jpeg",
      "/images/achievements/innovate-x-impact/InnovateXImpact-teamPhoto1.jpeg",
    ],
  },
  {
    hash: "BIS-25",
    scope: "INSTITUTIONAL",
    status: "EXHIBITED",
    rank: "Exhibitor",
    tag: "TERRAIN SCOUT DISPLAY",
    title: "BIS Project Showcase — VIT Chennai",
    description:
      "Presented the Terrain Scout Rover project at the Bureau of Indian Standards (BIS) Project Showcase held at VIT Chennai, showcasing its ability to navigate and scout challenging terrains with high precision.",
    projectBuilt: "Terrain Scout Rover",
    credential: "",
    credentialLabel: "",
    date: "Mar 11, 2025",
    linkedinUrl:
      "https://www.linkedin.com/posts/namo-nirvana_namonirvana-bisshowcase-terrainscout-ugcPost-7317814904881602560-8oUv?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEz0R3wBI3e4H3rmOGoUq9S8zerUqdPc9Zg",
    images: [
      "/images/achievements/bis/BIS-project-showcase.jpeg",
      "/images/projects/terrain-scout/technovation-terrain-scout-rover1.jpeg",
      "/images/achievements/bis/BIS-showcase-projects.jpeg",
      "/images/achievements/bis/BIS-showcase.jpeg",
    ],
  },
  {
    hash: "TECHNO-25",
    scope: "NATIONAL",
    status: "3RD_PLACE",
    rank: "3rd Place",
    tag: "₹15,000 CASH PRIZE",
    title: "Technovation 2025 — Kurukshetra '25",
    description:
      "Ranked 2nd Runner Up out of 50+ elite hardware teams presenting the Terrain Scout Rover project at CEG Guindy, Anna University. Awarded a cash prize of ₹15,000.",
    projectBuilt: "Terrain Scout Rover",
    credential:
      "https://drive.google.com/file/d/1AkRdc0y1Qdw9cImu5395G5RwdB8vPJuo/view?usp=sharing",
    credentialLabel: "Technovation Certificate",
    linkedinUrl:
      "https://www.linkedin.com/posts/technovation25-innovation-teamnamonirvana-ugcPost-7299144269548728320-Sk7x/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEz0R3wBI3e4H3rmOGoUq9S8zerUqdPc9Zg",
    date: "Feb 21, 2025",
    images: [
      "/images/achievements/technovation/technovation-teamPhoto.jpeg",
      "/images/projects/terrain-scout/technovation-terrain-scout-rover.jpeg",
      "/images/achievements/technovation/technovation-me-with-trophy.jpeg",
      "/images/achievements/technovation/technovation-onPodium-prize.jpeg",
    ],
  },
];

/* ────────────────────────────────────────────────────────
   Lightbox Modal
   ──────────────────────────────────────────────────────── */

function Lightbox({
  images,
  initialIndex,
  onClose,
}: {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}) {
  const [active, setActive] = useState(initialIndex);

  const prev = useCallback(
    () => setActive((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );
  const next = useCallback(
    () => setActive((i) => (i + 1) % images.length),
    [images.length]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        aria-label="Close"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Counter */}
      <div className="absolute top-5 left-5 text-white/60 text-xs font-mono tracking-widest">
        {active + 1} / {images.length}
      </div>

      {/* Main image */}
      <div
        className="relative w-[90vw] max-w-4xl aspect-[4/3] rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0"
          >
            <Image
              src={images[active]}
              alt={`Photo ${active + 1}`}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </motion.div>
        </AnimatePresence>

        {/* Arrow buttons */}
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          aria-label="Previous"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          aria-label="Next"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
      </div>

      {/* Thumbnail tray */}
      <div
        className="mt-4 flex gap-2 overflow-x-auto max-w-[90vw] pb-2 px-2"
        onClick={(e) => e.stopPropagation()}
      >
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setActive(i)}
            className={`relative shrink-0 w-16 h-12 rounded overflow-hidden border-2 transition-all duration-200 ${
              i === active
                ? "border-white scale-105"
                : "border-white/20 opacity-60 hover:opacity-100"
            }`}
          >
            <Image src={src} alt={`Thumb ${i + 1}`} fill sizes="64px" className="object-cover" />
          </button>
        ))}
      </div>
    </motion.div>
  );
}

/* ────────────────────────────────────────────────────────
   Inline Media Gallery — featured image + thumbnail strip
   ──────────────────────────────────────────────────────── */

function MediaGallery({ images }: { images: string[] }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxStart, setLightboxStart] = useState(0);

  const MAX_THUMBS = 4;
  const visibleThumbs = images.slice(0, MAX_THUMBS);
  const overflow = images.length - MAX_THUMBS;

  const openLightbox = (idx: number) => {
    setLightboxStart(idx);
    setLightboxOpen(true);
  };

  return (
    <>
      {/* Featured image */}
      <div
        className="relative w-full aspect-[16/10] rounded-lg overflow-hidden bg-zinc-100 cursor-pointer group"
        onClick={() => openLightbox(activeIdx)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Image
              src={images[activeIdx]}
              alt="Featured"
              fill
              sizes="(max-width: 768px) 90vw, 500px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
        </AnimatePresence>
        {/* Expand icon on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="h-10 w-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg">
              <svg className="h-4 w-4 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" />
                <line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnail strip */}
      <div className="flex gap-2 mt-2">
        {visibleThumbs.map((src, i) => {
          const isLast = i === MAX_THUMBS - 1 && overflow > 0;
          return (
            <button
              key={src}
              onClick={() => (isLast ? openLightbox(i) : setActiveIdx(i))}
              className={`relative shrink-0 w-16 h-12 sm:w-20 sm:h-14 rounded overflow-hidden border transition-all duration-200 ${
                i === activeIdx
                  ? "border-black ring-1 ring-black/20"
                  : "border-zinc-200 hover:border-zinc-400"
              }`}
            >
              <Image src={src} alt={`Thumb ${i + 1}`} fill sizes="80px" className="object-cover" />
              {isLast && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold font-mono">+{overflow}</span>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Lightbox portal */}
      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            images={images}
            initialIndex={lightboxStart}
            onClose={() => setLightboxOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

/* ────────────────────────────────────────────────────────
   Card Content
   ──────────────────────────────────────────────────────── */

function CardContent({ item }: { item: Achievement }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="glass-panel glass-panel-hover rounded-lg overflow-hidden border border-zinc-200"
    >
      {/* Telemetry header with date */}
      <div className="px-4 py-2.5 border-b border-zinc-200 bg-zinc-50/60 flex flex-wrap justify-between items-center gap-2">
        <div className="font-mono text-[8px] sm:text-[9px] tracking-wider text-zinc-400 uppercase">
          [ HASH: {item.hash} | SCOPE: {item.scope} | STATUS: {item.status} ]
        </div>
        <div className="font-mono text-[8px] sm:text-[9px] tracking-wider text-zinc-500 font-semibold uppercase">
          [ DATE: {item.date} ]
        </div>
      </div>

      {/* Media gallery */}
      <div className="p-4">
        <MediaGallery images={item.images} />
      </div>

      {/* Content body */}
      <div className="px-4 pb-4 flex flex-col gap-3">
        {/* Rank badge */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded bg-black px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
            {item.rank}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">
            {item.tag}
          </span>
        </div>

        <h3 className="text-sm sm:text-base font-semibold text-black tracking-tight font-heading">
          {item.title}
        </h3>

        <p className="text-xs sm:text-sm text-zinc-700 font-normal leading-relaxed font-body">
          {item.description}
        </p>

        {/* Project badge */}
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-500">
          <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
          Project: <span className="font-semibold text-zinc-700">{item.projectBuilt}</span>
        </div>

        {item.credential && (
          <a
            href={item.credential}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-1 text-[10px] font-bold uppercase tracking-widest text-zinc-600 hover:text-black transition-colors"
          >
            <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 15l-2 5l1-3h2l1 3l-2-5z" /><circle cx="12" cy="9" r="6" /></svg>
            {item.credentialLabel}
          </a>
        )}

        {/* LinkedIn Post Link */}
        {item.linkedinUrl && (
          <a
            href={item.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-3 px-3.5 py-2 rounded text-[10px] font-bold uppercase tracking-widest bg-zinc-100 hover:bg-black hover:text-white border border-zinc-300 text-zinc-700 transition-all duration-300 w-fit"
          >
            <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            View Post on LinkedIn
          </a>
        )}
      </div>
    </motion.div>
  );
}

/* ────────────────────────────────────────────────────────
   Timeline Card — Hybrid Alternating Layout
   ──────────────────────────────────────────────────────── */

const WAVE_AMPLITUDE = 40;

function TimelineCard({
  item,
  index,
}: {
  item: Achievement;
  index: number;
}) {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative w-full">
      {/* ── Desktop Layout (md+): 3-column grid ── */}
      <div className="hidden md:grid grid-cols-[1fr_240px_1fr] items-start">
        {/* Left column */}
        <div>
          {isLeft ? <CardContent item={item} /> : null}
        </div>

        {/* Center node column — dots positioned on the wave peaks */}
        <div className="relative flex items-start justify-center h-full pt-8">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{
              position: "absolute",
              left: `${isLeft ? 50 + WAVE_AMPLITUDE : 50 - WAVE_AMPLITUDE}%`,
              top: "28px",
              transform: "translate(-50%, -50%)",
            }}
            className="z-20 h-4 w-4 rounded-full bg-black border-4 border-white shadow-md"
          >
            <span className="absolute inset-0 rounded-full bg-black/30 animate-ping" />
          </motion.div>
        </div>

        {/* Right column */}
        <div>
          {!isLeft ? <CardContent item={item} /> : null}
        </div>
      </div>

      {/* ── Mobile Layout (below md): Hybrid alternating offset ── */}
      <div className="md:hidden relative w-full">
        {/* Mobile wavy node — absolute positioned in center */}
        <div className="absolute left-1/2 -translate-x-1/2 top-4 w-[80px] h-8 pointer-events-none z-20">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{
              position: "absolute",
              left: `${isLeft ? 50 + WAVE_AMPLITUDE : 50 - WAVE_AMPLITUDE}%`,
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
            className="h-3.5 w-3.5 rounded-full bg-black border-[3px] border-white shadow-md pointer-events-auto"
          >
            <span className="absolute inset-0 rounded-full bg-black/30 animate-ping" />
          </motion.div>
        </div>

        {/* Card content — alternates left/right */}
        <div
          className={`w-[85%] pt-10 pb-4 ${
            isLeft ? "mr-auto pr-1" : "ml-auto pl-1"
          }`}
        >
          <CardContent item={item} />
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────
   Achievements Page — Wavy Telemetry Waveform Timeline
   ──────────────────────────────────────────────────────── */

export default function AchievementsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pathHeight, setPathHeight] = useState(1000);

  /* Dynamically measure the timeline container height */
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setPathHeight(entry.contentRect.height);
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  /* Generate the wavy sine-wave SVG path */
  const numItems = achievements.length;
  const pathD = useMemo(() => {
    const segmentHeight = pathHeight / numItems;
    const stepsPerSegment = 40;
    const totalSteps = numItems * stepsPerSegment;
    const parts: string[] = [`M 50 0`];

    for (let step = 1; step <= totalSteps; step++) {
      const y = (step / totalSteps) * pathHeight;
      const x = 50 + WAVE_AMPLITUDE * Math.sin((Math.PI * y) / segmentHeight);
      parts.push(`L ${x.toFixed(2)} ${y.toFixed(1)}`);
    }
    return parts.join(" ");
  }, [pathHeight, numItems]);

  /* Scroll-linked progress */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end 85%"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <PageTransition>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black uppercase font-heading">
            Achievements
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-zinc-600 font-medium uppercase tracking-widest">
            Hackathons, Tech Competitions & National Recognition
          </p>
          <div className="mt-6 border-b border-zinc-200" />
        </motion.div>

        {/* Timeline container */}
        <div ref={containerRef} className="mt-14 relative">
          {/* ── Wavy SVG Timeline Axis (centered) ── */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[120px] md:w-[240px] pointer-events-none z-10">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox={`0 0 100 ${pathHeight}`}
              preserveAspectRatio="none"
              fill="none"
            >
              {/* Background dashed path */}
              <path
                d={pathD}
                stroke="#e4e4e7"
                strokeWidth="1.5"
                strokeDasharray="6 4"
                fill="none"
              />
              {/* Animated scroll-progress path */}
              <motion.path
                d={pathD}
                stroke="black"
                strokeWidth="2"
                fill="none"
                style={{ pathLength: smoothProgress }}
              />
            </svg>
          </div>

          {/* ── Cards ── */}
          <div className="flex flex-col gap-8 md:gap-16 relative z-[11]">
            {achievements.map((item, i) => (
              <TimelineCard key={item.hash} item={item} index={i} />
            ))}
          </div>

          {/* Terminal end node */}
          <div className="flex justify-center mt-8 relative z-[12]">
            <div className="h-3 w-3 rounded-full bg-zinc-300 border-4 border-white shadow" />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
