"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

/* ────────────────────────────────────────────────────────
   Telemetry Data
   ──────────────────────────────────────────────────────── */

const telemetryLines = [
  { label: "AI/ML ENGINE", status: "NOMINAL", details: "YOLOv8 edge inference: 12ms | Device: CUDA (Jetson)", statusColor: "text-emerald-500" },
  { label: "DATA PIPELINE", status: "SYNCED", details: "Autoregressive LSTM model: 98.4% validation accuracy", statusColor: "text-emerald-500" },
  { label: "DATA ANALYTICS", status: "ACTIVE", details: "Graph diffusion model: Dijkstra bottlenecks resolved", statusColor: "text-sky-400" },
  { label: "ROS 2 JAZZY", status: "RUNNING", details: "Velocity control nodes active | Latency: 14ms | cmd_vel: 20Hz", statusColor: "text-emerald-500" },
  { label: "SWE CORE", status: "ONLINE", details: "Shared Memory Buffer (/dev/shm): 0ms write latency", statusColor: "text-emerald-500" },
  { label: "WEB APP", status: "OPTIMIZED", details: "Next.js App Server (Vercel Edge): Sub-100ms first paint", statusColor: "text-amber-400" },
];

/* ────────────────────────────────────────────────────────
   Typewriter hook
   ──────────────────────────────────────────────────────── */

function useTypewriter(text: string, speed: number, startDelay: number, active: boolean) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!active) return;
    setDisplayed("");
    setDone(false);

    const delayTimeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);

    return () => clearTimeout(delayTimeout);
  }, [text, speed, startDelay, active]);

  return { displayed, done };
}

/* ────────────────────────────────────────────────────────
   Terminal Line sub-component
   ──────────────────────────────────────────────────────── */

function TerminalLine({
  line,
  index,
  activeLine,
}: {
  line: typeof telemetryLines[0];
  index: number;
  activeLine: number;
}) {
  const isActive = activeLine >= index;
  const fullText = `[${line.label}] STATUS: ${line.status} — ${line.details}`;
  const { displayed, done } = useTypewriter(fullText, 12, index * 600, isActive);

  return (
    <div className="flex items-start gap-2 font-mono text-[11px] leading-relaxed">
      {/* Pulse beacon */}
      <span className="mt-1.5 shrink-0">
        {done ? (
          <motion.span
            className={`inline-block h-2 w-2 rounded-full ${line.statusColor.replace("text-", "bg-")}`}
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        ) : isActive ? (
          <span className="inline-block h-2 w-2 rounded-full bg-zinc-300" />
        ) : (
          <span className="inline-block h-2 w-2 rounded-full bg-zinc-200" />
        )}
      </span>

      {/* Text */}
      <span className={`${done ? "text-zinc-600" : "text-zinc-400"} transition-colors duration-300`}>
        {displayed}
        {isActive && !done && (
          <motion.span
            className="inline-block w-[6px] h-3.5 bg-zinc-500 ml-0.5 align-middle"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity }}
          />
        )}
      </span>
    </div>
  );
}

/* ────────────────────────────────────────────────────────
   Main Console Component
   ──────────────────────────────────────────────────────── */

export default function StatusConsole() {
  const [activeLine, setActiveLine] = useState(-1);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Intersection Observer to start animation when in viewport
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isVisible]);

  // Stagger lines after visible
  useEffect(() => {
    if (!isVisible) return;
    let i = 0;
    const interval = setInterval(() => {
      setActiveLine(i);
      i++;
      if (i >= telemetryLines.length) clearInterval(interval);
    }, 600);
    return () => clearInterval(interval);
  }, [isVisible]);

  const timestamp = new Date().toISOString().slice(0, 19).replace("T", " ");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="rounded-lg border border-zinc-200 bg-zinc-50/80 backdrop-blur-sm overflow-hidden"
    >
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-zinc-200 bg-white/60">
        <div className="flex items-center gap-2">
          <span className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>
          <span className="text-[9px] uppercase tracking-widest text-zinc-400 font-semibold ml-2">
            system diagnostics — harshit_portfolio
          </span>
        </div>
        <span className="text-[9px] font-mono text-zinc-400">{timestamp}</span>
      </div>

      {/* Console body */}
      <div className="p-4 flex flex-col gap-1.5">
        {/* Boot header */}
        <div className="font-mono text-[10px] text-zinc-400 mb-2">
          <span className="text-zinc-500">$</span> diagnostics --run-all --format=compact
        </div>

        {telemetryLines.map((line, i) => (
          <TerminalLine
            key={line.label}
            line={line}
            index={i}
            activeLine={activeLine}
          />
        ))}

        {/* Footer */}
        {activeLine >= telemetryLines.length - 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="font-mono text-[10px] text-zinc-400 mt-3 pt-2 border-t border-zinc-200"
          >
            <span className="text-emerald-500">✓</span> All systems operational — {telemetryLines.length} modules verified
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
