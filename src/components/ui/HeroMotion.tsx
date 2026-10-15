"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ────────────────────────────────────────────────────────
   Track 1: Engineering Competency Roles (Apple TV 3D rotateX)
   ──────────────────────────────────────────────────────── */

const ROTATING_ROLES = [
  "Software Systems Engineer",
  "Predictive AI Architect",
  "Data Systems & Infrastructure Builder",
  "Assistive ML Developer",
];

/* ────────────────────────────────────────────────────────
   Track 2: Narrative Career Identity Lifecycle Beats
   ──────────────────────────────────────────────────────── */

const LIFECYCLE_BEATS = [
  { step: "01", text: "From raw data..." },
  { step: "02", text: "...to a model..." },
  { step: "03", text: "...solving underserved problems..." },
  { step: "04", text: "...to something deployed and working!" },
];

/**
 * Apple TV 3D Word Rotation (Style 4) — Dual-Track Design
 * Cycles through both engineering roles with 3D perspective depth
 * and features a synchronized dynamic lifecycle narrative ribbon.
 */
export function AppleTvWordRotator() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [beatIndex, setBeatIndex] = useState(0);

  useEffect(() => {
    const roleTimer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROTATING_ROLES.length);
    }, 2800);

    const beatTimer = setInterval(() => {
      setBeatIndex((prev) => (prev + 1) % LIFECYCLE_BEATS.length);
    }, 2800);

    return () => {
      clearInterval(roleTimer);
      clearInterval(beatTimer);
    };
  }, []);

  return (
    <div className="flex flex-col gap-3 w-full">
      {/* Track 1: Apple TV 3D Word Rotation for Engineering Roles */}
      <div className="relative h-9 sm:h-11 overflow-hidden [perspective:500px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={ROTATING_ROLES[roleIndex]}
            initial={{ opacity: 0, y: 26, rotateX: 85 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: -26, rotateX: -85 }}
            transition={{
              duration: 0.55,
              ease: [0.16, 1, 0.3, 1], // Apple-style spring cubic-bezier
            }}
            className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-950 uppercase font-heading select-none flex items-center gap-2.5"
          >
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)] shrink-0" />
            <span className="text-black bg-gradient-to-r from-black via-zinc-900 to-indigo-950 bg-clip-text text-transparent">
              {ROTATING_ROLES[roleIndex]}
            </span>
          </motion.div>
        </AnimatePresence>

        <noscript>
          <span className="text-xl font-bold text-black uppercase font-heading">
            Software Systems Engineer & Applied ML
          </span>
        </noscript>
      </div>

      {/* Track 2: Synchronized Dynamic Narrative Lifecycle Ribbon (Counter Removed) */}
      <div className="flex items-center gap-2.5 py-1 px-1 max-w-fit">
        <span className="w-2 h-2 rounded-full bg-indigo-600 animate-ping shrink-0" />
        <div className="relative h-7 overflow-hidden [perspective:400px] flex items-center min-w-[260px] sm:min-w-[340px]">
          <AnimatePresence mode="wait">
            <motion.span
              key={LIFECYCLE_BEATS[beatIndex].text}
              initial={{ opacity: 0, y: 14, rotateX: 60 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -14, rotateX: -60 }}
              transition={{
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-sm sm:text-base md:text-lg font-bold tracking-wide text-zinc-800 italic select-none"
            >
              &ldquo;{LIFECYCLE_BEATS[beatIndex].text}&rdquo;
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

/**
 * InkTitleReveal (Style 7 / Character Stagger)
 * Staggers in the letters of the hero title with a crisp ink-like spring reveal.
 */
export function InkTitleReveal({ text }: { text: string }) {
  const words = text.split(" ");

  return (
    <h1 className="text-4xl font-black tracking-tight text-black sm:text-6xl md:text-7xl uppercase font-heading leading-tight">
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap mr-3.5 last:mr-0">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={`${wordIndex}-${charIndex}`}
              initial={{ opacity: 0, y: 22, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.45,
                delay: 0.12 + (wordIndex * 6 + charIndex) * 0.025,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block bg-gradient-to-b from-black via-zinc-900 to-zinc-800 bg-clip-text text-transparent"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </h1>
  );
}

/**
 * HeroInstitutionPill (Style 12: Heartbeat Pulse Beacon + Glass Border Glow)
 * Double-thump heartbeat rhythm (lub-dub) with synchronized acoustic sonar rings.
 */
export function HeroInstitutionPill({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      whileHover={{ scale: 1.03 }}
      className="inline-flex items-center gap-3 rounded-full px-4 py-2 text-xs sm:text-sm font-bold tracking-wider text-zinc-900 border border-emerald-500/40 bg-white/90 backdrop-blur-md uppercase shadow-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:border-emerald-500"
    >
      {/* Heartbeat pulse beacon container */}
      <span className="relative flex h-3 w-3 items-center justify-center">
        {/* Acoustic ring breathing out */}
        <motion.span
          className="absolute h-full w-full rounded-full bg-emerald-400"
          animate={{
            scale: [1, 2.4, 2.6, 1],
            opacity: [0.85, 0, 0, 0.85],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.45, 0.55, 1],
          }}
        />
        {/* Core Heartbeat double-thump dot (Style 12: lub-dub) */}
        <motion.span
          className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600 shadow-[0_0_10px_rgba(16,185,129,0.9)]"
          animate={{
            scale: [1, 1.4, 1, 1.3, 1],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.18, 0.32, 0.48, 1],
          }}
        />
      </span>
      <span>{text}</span>
    </motion.div>
  );
}

/**
 * EditorialCurtainHeader (Style 28: Editorial Box Curtain)
 * Large, impactful architectural ink-wash curtain wipes across and retracts.
 */
export function EditorialCurtainHeader({
  title,
  subtitle,
  theme = "indigo",
  badgeText,
}: {
  title: string;
  subtitle?: string;
  theme?: ShimmerTheme;
  badgeText?: string;
}) {
  const beaconMap: Record<
    ShimmerTheme,
    { dot: string; ping: string; border: string; bg: string; text: string }
  > = {
    indigo: {
      dot: "bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.9)]",
      ping: "bg-indigo-400",
      border: "border-indigo-200",
      bg: "bg-indigo-50",
      text: "text-indigo-800",
    },
    emerald: {
      dot: "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.9)]",
      ping: "bg-emerald-400",
      border: "border-emerald-200",
      bg: "bg-emerald-50",
      text: "text-emerald-800",
    },
    amber: {
      dot: "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.9)]",
      ping: "bg-amber-400",
      border: "border-amber-200",
      bg: "bg-amber-50",
      text: "text-amber-800",
    },
    sapphire: {
      dot: "bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.9)]",
      ping: "bg-sky-400",
      border: "border-sky-200",
      bg: "bg-sky-50",
      text: "text-sky-800",
    },
    purple: {
      dot: "bg-purple-600 shadow-[0_0_8px_rgba(147,51,234,0.9)]",
      ping: "bg-fuchsia-400",
      border: "border-fuchsia-200",
      bg: "bg-fuchsia-50",
      text: "text-fuchsia-800",
    },
    cyan: {
      dot: "bg-teal-500 shadow-[0_0_8px_rgba(20,184,166,0.9)]",
      ping: "bg-cyan-400",
      border: "border-cyan-200",
      bg: "bg-cyan-50",
      text: "text-cyan-800",
    },
    gold: {
      dot: "bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.9)]",
      ping: "bg-amber-400",
      border: "border-amber-200",
      bg: "bg-amber-50",
      text: "text-amber-800",
    },
  };

  const activeTheme = theme || "indigo";
  const beacon = beaconMap[activeTheme];

  return (
    <div className="relative mb-10 max-w-fit">
      {/* Protected Frosted Glass Header Badge against 3D Canvas clipping */}
      <div className="inline-flex items-center gap-3.5 px-5 sm:px-6 py-2.5 sm:py-3 rounded-2xl border border-zinc-200/90 bg-white/95 backdrop-blur-md shadow-sm">
        <span className="relative flex h-3 w-3 items-center justify-center">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${beacon.ping}`}
          />
          <span className={`relative inline-flex rounded-full h-2 w-2 ${beacon.dot}`} />
        </span>
        <ShimmerTitle text={title} theme={activeTheme} size="lg" />
        {badgeText && (
          <span
            className={`hidden sm:inline-block text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${beacon.bg} ${beacon.text} ${beacon.border}`}
          >
            {badgeText}
          </span>
        )}
      </div>

      {subtitle && (
        <p className="text-sm sm:text-base font-semibold text-zinc-600 mt-2.5 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

/**
 * SplitTextReveal (Style 26: Split Text Reveal)
 * Smoothly shifts title on hover while sliding out a technical tag beneath.
 */
export function SplitTextReveal({
  title,
  tag,
  theme = "indigo",
  externalHover,
}: {
  title: string;
  tag: string;
  theme?: "indigo" | "emerald" | "amber" | "sapphire";
  externalHover?: boolean;
}) {
  const [localHover, setLocalHover] = useState(false);
  const isHovered = externalHover !== undefined ? externalHover : localHover;

  const themeMap = {
    indigo: {
      badge: "bg-indigo-50/95 text-indigo-950 border-indigo-200/90",
      dot: "bg-indigo-600 shadow-[0_0_6px_rgba(99,102,241,0.8)]",
      ping: "bg-indigo-400",
    },
    emerald: {
      badge: "bg-emerald-50/95 text-emerald-950 border-emerald-200/90",
      dot: "bg-emerald-600 shadow-[0_0_6px_rgba(16,185,129,0.8)]",
      ping: "bg-emerald-400",
    },
    amber: {
      badge: "bg-amber-50/95 text-amber-950 border-amber-200/90",
      dot: "bg-amber-600 shadow-[0_0_6px_rgba(245,158,11,0.8)]",
      ping: "bg-amber-400",
    },
    sapphire: {
      badge: "bg-sky-50/95 text-sky-950 border-sky-200/90",
      dot: "bg-sky-600 shadow-[0_0_6px_rgba(14,165,233,0.8)]",
      ping: "bg-sky-400",
    },
  };

  const currentTheme = themeMap[theme] || themeMap.indigo;

  return (
    <div
      onMouseEnter={() => setLocalHover(true)}
      onMouseLeave={() => setLocalHover(false)}
      className="cursor-default relative overflow-hidden"
    >
      {/* Primary Title */}
      <motion.h3
        animate={{ y: isHovered ? -2 : 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="text-lg sm:text-xl font-extrabold tracking-tight text-black uppercase font-heading group-hover/split:text-zinc-950"
      >
        {title}
      </motion.h3>

      {/* Engineering Tag Pill sliding out on hover (Style 26: Frosted Telemetry) */}
      <div className="h-6 overflow-hidden relative mt-1.5 flex items-center">
        <motion.div
          animate={{
            y: isHovered ? 0 : 20,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className={`inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md border text-[11px] font-mono font-bold uppercase tracking-wider shadow-2xs backdrop-blur-sm ${currentTheme.badge}`}
        >
          <span className="relative flex h-2 w-2 items-center justify-center">
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${currentTheme.ping}`}
            />
            <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${currentTheme.dot}`} />
          </span>
          <span>{tag}</span>
        </motion.div>
      </div>
    </div>
  );
}

/**
 * PillarCardTitle (Style 36: Breathe Variable Font)
 * Weight breathing oscillation with permitted accent gradients on hover.
 */
export function PillarCardTitle({
  title,
  accent = "indigo",
}: {
  title: string;
  accent?: "indigo" | "emerald" | "slate";
}) {
  const [isHovered, setIsHovered] = useState(false);

  const gradientClass =
    accent === "indigo"
      ? "from-indigo-600 via-blue-600 to-indigo-900"
      : accent === "emerald"
      ? "from-emerald-600 via-teal-600 to-emerald-900"
      : "from-violet-600 via-purple-600 to-slate-900";

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="cursor-default"
    >
      <motion.h3
        animate={{
          letterSpacing: isHovered ? "0.03em" : "-0.01em",
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.3 }}
        className={`text-lg sm:text-xl md:text-2xl tracking-wide uppercase font-heading transition-all duration-300 origin-left ${
          isHovered
            ? `font-black bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent drop-shadow-xs`
            : "font-extrabold text-black"
        }`}
      >
        {title}
      </motion.h3>
    </div>
  );
}

/**
 * ShimmerTitle (Style 19: Text Shadow Shimmer)
 * Dynamic fluid light beam sweeping across the uppercase headline
 * Supporting customizable color contrasts and thematic palettes.
 */
export type ShimmerTheme = "indigo" | "emerald" | "amber" | "sapphire" | "purple" | "cyan" | "gold";

export function ShimmerTitle({
  text,
  theme = "indigo",
  size = "lg",
  as: Component = "h2",
  className = "",
}: {
  text: string;
  theme?: ShimmerTheme;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  as?: "h1" | "h2" | "h3" | "h4" | "span" | "div";
  className?: string;
}) {
  const gradientMap: Record<ShimmerTheme, string> = {
    indigo: "from-zinc-950 via-indigo-500 via-purple-500 to-zinc-950",
    emerald: "from-zinc-950 via-emerald-500 via-teal-400 to-zinc-950",
    amber: "from-zinc-950 via-amber-500 via-orange-500 to-zinc-950",
    sapphire: "from-zinc-950 via-blue-600 via-sky-400 to-zinc-950",
    purple: "from-zinc-950 via-purple-600 via-fuchsia-500 to-zinc-950",
    cyan: "from-zinc-950 via-teal-500 via-cyan-400 to-zinc-950",
    gold: "from-zinc-950 via-amber-500 via-yellow-400 to-zinc-950",
  };

  const sizeClass =
    size === "xs"
      ? "text-sm sm:text-base"
      : size === "sm"
      ? "text-base sm:text-lg md:text-xl"
      : size === "md"
      ? "text-xl sm:text-2xl md:text-3xl"
      : size === "xl"
      ? "text-4xl sm:text-5xl md:text-6xl"
      : "text-2xl sm:text-3xl md:text-4xl";

  const MotionComponent = motion[Component as keyof typeof motion] as typeof motion.h2;

  return (
    <div className={`relative inline-block overflow-hidden ${className}`}>
      <MotionComponent
        className={`${sizeClass} font-black tracking-tight uppercase font-heading bg-gradient-to-r ${gradientMap[theme]} bg-[length:220%_auto] bg-clip-text text-transparent select-none drop-shadow-xs`}
        animate={{
          backgroundPosition: ["0% center", "220% center"],
        }}
        transition={{
          duration: 4.2,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {text}
      </MotionComponent>
    </div>
  );
}

/**
 * MetricDigitRoll (Style 30: Variable Font Weight Shift on Hover)
 * Enhances numerical metrics with an interactive typography response.
 */
export function MetricDigitRoll({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="cursor-default transition-all duration-300"
    >
      <span
        className={`block text-3xl sm:text-4xl tracking-tight text-black uppercase font-heading transition-all duration-300 ${
          isHovered
            ? "font-black tracking-normal text-indigo-950 scale-105"
            : "font-extrabold"
        }`}
      >
        {value}
      </span>
      <span className="block text-xs sm:text-sm uppercase tracking-wider text-zinc-600 font-bold mt-1.5">
        {label}
      </span>
    </div>
  );
}
