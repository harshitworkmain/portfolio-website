"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Terminal, Code2, CheckCircle2, Play, CornerDownLeft } from "lucide-react";

/* ────────────────────────────────────────────────────────
   Style 24: IDE Code Stream Telemetry Lines
   Syntax-tokenized realistic streaming code lines
   ──────────────────────────────────────────────────────── */

interface CodeStreamLine {
  num: string;
  code: string;
  highlightToken?: string;
  tokenClass?: string;
  badge?: string;
  badgeClass?: string;
}

const IDE_CODE_LINES: CodeStreamLine[] = [
  {
    num: "01",
    code: "import torch, cv2, ros2_telemetry, ekf_filter",
    highlightToken: "import",
    tokenClass: "text-purple-600 font-bold",
    badge: "[MODULES LOADED]",
    badgeClass: "text-zinc-500 bg-zinc-100",
  },
  {
    num: "02",
    code: "async def verify_applied_ml_pipeline():",
    highlightToken: "async def",
    tokenClass: "text-blue-600 font-bold",
  },
  {
    num: "03",
    code: '  buffer = await shm.open("/dev/shm/telemetry", rate="15Hz")',
    highlightToken: "await",
    tokenClass: "text-purple-600 font-bold",
    badge: "[0ms WRITE LATENCY]",
    badgeClass: "text-emerald-700 bg-emerald-50 border border-emerald-200",
  },
  {
    num: "04",
    code: "  ekf.validate(stream=raw_encoder_logs, trials=20)",
    highlightToken: "ekf.validate",
    tokenClass: "text-amber-700 font-semibold",
    badge: "[SPATIAL DRIFT -60%]",
    badgeClass: "text-emerald-700 bg-emerald-50 border border-emerald-200",
  },
  {
    num: "05",
    code: "  lidar.filter_pointcloud(rate=3600_pts_sec, max_latency=50)",
    highlightToken: "lidar.filter",
    tokenClass: "text-cyan-700 font-semibold",
    badge: "[95% ACCURACY]",
    badgeClass: "text-emerald-700 bg-emerald-50 border border-emerald-200",
  },
  {
    num: "06",
    code: "  sparc_model.eval(dataset=12000_samples, mode='multimodal')",
    highlightToken: "sparc_model",
    tokenClass: "text-indigo-700 font-semibold",
    badge: "[92.4% VAL ACC]",
    badgeClass: "text-indigo-700 bg-indigo-50 border border-indigo-200",
  },
  {
    num: "07",
    code: '  return {"status": 200, "pipeline": "READY_FOR_DEPLOYMENT"}',
    highlightToken: "return",
    tokenClass: "text-purple-600 font-bold",
    badge: "[STATUS: 200 OK]",
    badgeClass: "text-emerald-800 bg-emerald-100 border border-emerald-300 font-bold",
  },
];

/* ────────────────────────────────────────────────────────
   Interactive Shell Types & Database
   ──────────────────────────────────────────────────────── */

interface OutputLine {
  id: string;
  type: "command" | "output" | "error" | "success" | "header" | "boot";
  text: string;
}

const HELP_OUTPUT: OutputLine[] = [
  { id: "h1", type: "header", text: "┌── System Diagnostics & Interactive CLI v2.0 ──────┐" },
  { id: "h2", type: "success", text: "  Commands available:" },
  { id: "h3", type: "output", text: "  • metrics     - Accuracy & model benchmarks" },
  { id: "h4", type: "output", text: "  • perf        - System latency & hardware metrics" },
  { id: "h5", type: "output", text: "  • stack       - Technical capabilities breakdown" },
  { id: "h6", type: "output", text: "  • navigate    - Jump to /projects, /about, /internship" },
  { id: "h7", type: "output", text: "  • clear       - Reset terminal buffer" },
  { id: "h8", type: "header", text: "└───────────────────────────────────────────────────┘" },
];

const METRICS_OUTPUT: OutputLine[] = [
  { id: "m1", type: "header", text: "┌── Verified Model & System Metrics ────────────────┐" },
  { id: "m2", type: "success", text: "  ✓ SPARC Gesture Recognition:  92.4% Accuracy (12k samples)" },
  { id: "m3", type: "success", text: "  ✓ Weather LSTM Forecasting:   98.4% Validation Accuracy" },
  { id: "m4", type: "success", text: "  ✓ STEMTEC 15 Hz EKF:          -60.0% Spatial / -69.2% Angular Error" },
  { id: "m5", type: "success", text: "  ✓ High-Frequency LiDAR:       95.0% Collision-Free Detection" },
  { id: "m6", type: "success", text: "  ✓ TRIDENT Live Routing:       >95.0% System Telemetry Uptime" },
  { id: "m7", type: "header", text: "└───────────────────────────────────────────────────┘" },
];

const PERF_OUTPUT: OutputLine[] = [
  { id: "p1", type: "header", text: "┌── Low-Latency Execution Benchmarks ───────────────┐" },
  { id: "p2", type: "output", text: "  • Edge YOLOv8 Inference:    12ms  (Jetson Nano / WebGL)" },
  { id: "p3", type: "output", text: "  • Shared-Memory Buffer:      0ms   (/dev/shm zero-copy)" },
  { id: "p4", type: "output", text: "  • ROS 2 Telemetry Loop:      15Hz  (3,600 LiDAR pts/sec)" },
  { id: "p5", type: "output", text: "  • First Contentful Paint:   <100ms (Next.js 16 Webpack)" },
  { id: "p6", type: "header", text: "└───────────────────────────────────────────────────┘" },
];

/* ────────────────────────────────────────────────────────
   Main IDE Code Stream Terminal Component
   ──────────────────────────────────────────────────────── */

export default function StatusConsole() {
  const router = useRouter();
  const [activeLineIdx, setActiveLineIdx] = useState(-1);
  const [typedLines, setTypedLines] = useState<number[]>([]);
  const [bootFinished, setBootFinished] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [outputHistory, setOutputHistory] = useState<OutputLine[]>([]);
  const [timestamp, setTimestamp] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"code" | "shell">("code");

  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const idCounter = useRef(0);

  const genId = () => `line-${++idCounter.current}`;

  // Hydration-safe client timestamp
  useEffect(() => {
    setTimestamp(new Date().toISOString().slice(0, 19).replace("T", " "));
  }, []);

  // Viewport trigger for Style 24 IDE Code Stream typewriter
  useEffect(() => {
    const el = terminalRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && activeLineIdx === -1) {
          startCodeStream();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [activeLineIdx]);

  const startCodeStream = () => {
    let current = 0;
    const interval = setInterval(() => {
      setActiveLineIdx(current);
      setTypedLines((prev) => [...prev, current]);
      current++;
      if (current >= IDE_CODE_LINES.length) {
        clearInterval(interval);
        setTimeout(() => setBootFinished(true), 600);
      }
    }, 450);
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const raw = inputValue.trim();
    if (!raw) return;

    const cmd = raw.toLowerCase();
    setInputValue("");

    const newOutputs: OutputLine[] = [
      { id: genId(), type: "command", text: `$ ${raw}` },
    ];

    if (cmd === "help") {
      newOutputs.push(...HELP_OUTPUT);
    } else if (cmd === "metrics" || cmd === "accuracy") {
      newOutputs.push(...METRICS_OUTPUT);
    } else if (cmd === "perf" || cmd === "performance") {
      newOutputs.push(...PERF_OUTPUT);
    } else if (cmd === "clear") {
      setOutputHistory([]);
      return;
    } else if (cmd.startsWith("navigate") || cmd.startsWith("goto")) {
      const parts = cmd.split(" ");
      const dest = parts[1] || "projects";
      newOutputs.push({
        id: genId(),
        type: "success",
        text: `  ✓ Navigating to /${dest}...`,
      });
      setTimeout(() => router.push(`/${dest}`), 600);
    } else {
      newOutputs.push({
        id: genId(),
        type: "error",
        text: `  ✗ Command not recognized: "${raw}". Type 'help' for available commands.`,
      });
    }

    setOutputHistory((prev) => [...prev, ...newOutputs]);
    setTimeout(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    }, 50);
  };

  return (
    <div
      ref={terminalRef}
      className="rounded-xl border border-zinc-200/90 bg-white shadow-lg overflow-hidden flex flex-col font-mono text-xs max-w-4xl mx-auto"
    >
      {/* ────────────────────────────────────────────────────────
          IDE Top Bar & Tabs (Style 24)
          ──────────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-100/80 border-b border-zinc-200 select-none">
        {/* Window dots & Active File Tab */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          </div>

          <div className="flex items-center gap-1 ml-2">
            <button
              onClick={() => setActiveTab("code")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded text-[10px] uppercase font-bold tracking-wider transition-colors ${
                activeTab === "code"
                  ? "bg-white text-black shadow-xs border border-zinc-200"
                  : "text-zinc-500 hover:text-black"
              }`}
            >
              <Code2 className="w-3.5 h-3.5 text-blue-600" />
              telemetry_pipeline.py
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-1" />
            </button>

            <button
              onClick={() => setActiveTab("shell")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded text-[10px] uppercase font-bold tracking-wider transition-colors ${
                activeTab === "shell"
                  ? "bg-white text-black shadow-xs border border-zinc-200"
                  : "text-zinc-500 hover:text-black"
              }`}
            >
              <Terminal className="w-3.5 h-3.5 text-indigo-600" />
              interactive_cli.sh
            </button>
          </div>
        </div>

        {/* Live Timestamp & Status */}
        <div className="flex items-center gap-2 text-[10px] text-zinc-500">
          <span className="hidden sm:inline-block font-mono text-zinc-400">
            {timestamp || "LIVE TELEMETRY"}
          </span>
          <span className="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold border border-emerald-200 text-[9px] uppercase tracking-wider">
            15 Hz SYNC
          </span>
        </div>
      </div>

      {/* ────────────────────────────────────────────────────────
          Terminal Body: Code Stream or Interactive Shell
          ──────────────────────────────────────────────────────── */}
      <div
        ref={scrollRef}
        className="p-4 sm:p-6 bg-zinc-950 text-zinc-200 min-h-[300px] max-h-[420px] overflow-y-auto"
        onClick={() => inputRef.current?.focus()}
      >
        {activeTab === "code" ? (
          <div className="flex flex-col gap-2">
            {IDE_CODE_LINES.map((line, idx) => {
              const isTyped = typedLines.includes(idx);
              const isCurrent = activeLineIdx === idx;

              return (
                <div
                  key={line.num}
                  className={`flex items-center gap-3 transition-opacity duration-300 ${
                    isTyped ? "opacity-100" : "opacity-20"
                  }`}
                >
                  {/* IDE Gutter Line Number */}
                  <span className="w-8 text-right text-zinc-500 font-mono select-none text-xs sm:text-sm border-r border-zinc-800 pr-3">
                    {line.num}
                  </span>

                  {/* Code Line Content */}
                  <div className="flex items-center gap-3.5 flex-wrap flex-1 min-w-0">
                    <span className="font-mono text-sm sm:text-[15px] text-zinc-200 leading-relaxed">
                      {line.code}
                    </span>

                    {/* Blinking Caret on Active Typing Line */}
                    {isCurrent && (
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity }}
                        className="w-2.5 h-4.5 bg-emerald-400 inline-block align-middle shadow-[0_0_8px_rgba(16,185,129,0.9)]"
                      />
                    )}

                    {/* Inline Status Badge */}
                    {isTyped && line.badge && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className={`text-[10px] sm:text-xs font-mono px-2.5 py-1 rounded-md font-bold uppercase tracking-wider ml-auto shadow-sm ${
                          line.badgeClass || "text-zinc-400 bg-zinc-900"
                        }`}
                      >
                        {line.badge}
                      </motion.span>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Quick-Action Bar once code stream completes */}
            {bootFinished && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 pt-4 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3 text-xs"
              >
                <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>All 7 telemetry streams nominal (15 Hz)</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="text-zinc-400 text-xs uppercase tracking-wider font-semibold">Quick Commands:</span>
                  <button
                    onClick={() => {
                      setActiveTab("shell");
                      setInputValue("metrics");
                    }}
                    className="px-3 py-1.5 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-100 text-xs font-mono font-semibold transition-colors border border-zinc-700"
                  >
                    metrics
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab("shell");
                      setInputValue("perf");
                    }}
                    className="px-3 py-1.5 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-100 text-xs font-mono font-semibold transition-colors border border-zinc-700"
                  >
                    perf
                  </button>
                  <button
                    onClick={() => setActiveTab("shell")}
                    className="px-3 py-1.5 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-mono font-bold transition-colors flex items-center gap-1.5 shadow-sm"
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    Open Shell
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        ) : (
          /* Interactive Shell View */
          <div className="flex flex-col gap-2.5">
            <div className="text-zinc-400 text-xs sm:text-sm mb-2 font-mono">
              Type <span className="text-emerald-400 font-bold">&apos;metrics&apos;</span>, <span className="text-emerald-400 font-bold">&apos;perf&apos;</span>, or <span className="text-emerald-400 font-bold">&apos;help&apos;</span> to interact with the runtime.
            </div>

            {outputHistory.map((item) => (
              <div
                key={item.id}
                className={`font-mono text-xs sm:text-sm leading-relaxed ${
                  item.type === "command"
                    ? "text-zinc-300 font-bold"
                    : item.type === "success"
                    ? "text-emerald-400 font-semibold"
                    : item.type === "error"
                    ? "text-red-400"
                    : item.type === "header"
                    ? "text-indigo-300 font-bold"
                    : "text-zinc-300"
                }`}
              >
                {item.text}
              </div>
            ))}

            {/* Interactive Shell Prompt with Blinking Caret */}
            <form onSubmit={handleCommand} className="flex items-center gap-2.5 mt-3 pt-3 border-t border-zinc-800">
              <span className="text-emerald-400 font-bold select-none text-xs sm:text-sm font-mono">
                harshit@portfolio:~$
              </span>
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="type 'metrics' or 'help'..."
                className="flex-1 bg-transparent text-white font-mono text-xs sm:text-sm outline-none border-none placeholder-zinc-600"
                autoFocus
              />
              <button
                type="submit"
                className="text-zinc-400 hover:text-white p-1 transition-colors"
                aria-label="Run command"
              >
                <CornerDownLeft className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
