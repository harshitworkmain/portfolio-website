"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

/* ────────────────────────────────────────────────────────
   Telemetry Boot Lines (auto-typed on first view)
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
   Command Handlers
   ──────────────────────────────────────────────────────── */

interface OutputLine {
  id: string;
  type: "command" | "output" | "error" | "success" | "header" | "boot";
  text: string;
}

const HELP_OUTPUT: OutputLine[] = [
  { id: "h1", type: "header", text: "╔══════════════════════════════════════════════════╗" },
  { id: "h2", type: "header", text: "║   HARSHIT_PORTFOLIO — System Diagnostics v2.0    ║" },
  { id: "h3", type: "header", text: "╚══════════════════════════════════════════════════╝" },
  { id: "h4", type: "output", text: "" },
  { id: "h5", type: "success", text: "  Available commands:" },
  { id: "h6", type: "output", text: "  ─────────────────────────────────────────────" },
  { id: "h7", type: "output", text: "  help               Show this help menu" },
  { id: "h8", type: "output", text: "  accuracy           ML model accuracy metrics" },
  { id: "h9", type: "output", text: "  perf | performance System latency benchmarks" },
  { id: "h10", type: "output", text: "  matrix             Technical skill categories" },
  { id: "h11", type: "output", text: "  navigate <page>    Go to projects/achievements/leadership/about" },
  { id: "h12", type: "output", text: "  search <query>     Search tech tags & projects" },
  { id: "h13", type: "output", text: "  clear              Clear terminal output" },
  { id: "h14", type: "output", text: "" },
  { id: "h15", type: "output", text: "  Type a command and press Enter ↵" },
];

const ACCURACY_OUTPUT: OutputLine[] = [
  { id: "a1", type: "header", text: "┌─── ML Pipeline Accuracy Report ───────────────────┐" },
  { id: "a2", type: "output", text: "│                                                    │" },
  { id: "a3", type: "success", text: "│  ▸ SPARC Sign Language (ISL+ASL)     92.4%  ██████▊│" },
  { id: "a4", type: "success", text: "│  ▸ Coastal LSTM Forecast             98.4%  ███████▏│" },
  { id: "a5", type: "output", text: "│  ▸ YOLOv8 Object Detection           94.1%  ██████▉│" },
  { id: "a6", type: "output", text: "│  ▸ MediaPipe Gesture Landmark         96.8%  ███████│" },
  { id: "a7", type: "output", text: "│                                                    │" },
  { id: "a8", type: "header", text: "└────────────────────────────────────────────────────┘" },
  { id: "a9", type: "success", text: "  ✓ All models within production thresholds" },
];

const PERF_OUTPUT: OutputLine[] = [
  { id: "p1", type: "header", text: "┌─── Latency & Performance Benchmarks ──────────────┐" },
  { id: "p2", type: "output", text: "│                                                    │" },
  { id: "p3", type: "output", text: "│  MODULE                          LATENCY    STATUS │" },
  { id: "p4", type: "output", text: "│  ─────────────────────────────────────────────────  │" },
  { id: "p5", type: "success", text: "│  ROS 2 cmd_vel motor             <50ms      ● OK   │" },
  { id: "p6", type: "success", text: "│  Edge YOLOv8 inference           12ms       ● OK   │" },
  { id: "p7", type: "output", text: "│  Vercel Edge first paint         <100ms     ● OK   │" },
  { id: "p8", type: "output", text: "│  Shared Memory (/dev/shm)        0ms        ● OK   │" },
  { id: "p9", type: "output", text: "│  ESP32 sensor polling            45ms       ● OK   │" },
  { id: "p10", type: "output", text: "│                                                    │" },
  { id: "p11", type: "header", text: "└────────────────────────────────────────────────────┘" },
  { id: "p12", type: "success", text: "  ✓ All systems within acceptable latency bounds" },
];

const MATRIX_OUTPUT: OutputLine[] = [
  { id: "m1", type: "header", text: "┌─── Technical Skill Matrix ─────────────────────────┐" },
  { id: "m2", type: "output", text: "│                                                     │" },
  { id: "m3", type: "success", text: "│  LANGUAGES        C · C++ · Python · Java · TS · JS │" },
  { id: "m4", type: "output", text: "│  ML FRAMEWORKS    PyTorch · TF · OpenCV · YOLOv8    │" },
  { id: "m5", type: "output", text: "│  ROBOTICS         ROS 2 · Gazebo · SLAM · Nav2      │" },
  { id: "m6", type: "output", text: "│  EMBEDDED         ESP32 · RPi · Arduino · LiDAR     │" },
  { id: "m7", type: "output", text: "│  WEB & CLOUD      Next.js · React · Node · Vercel   │" },
  { id: "m8", type: "output", text: "│  DATA & DB        Pandas · NumPy · PostgreSQL        │" },
  { id: "m9", type: "output", text: "│  DEVOPS           Git · Docker · Linux · Bash        │" },
  { id: "m10", type: "output", text: "│                                                     │" },
  { id: "m11", type: "header", text: "└─────────────────────────────────────────────────────┘" },
];

const SEARCH_DB = [
  { tag: "python", projects: ["SPARC", "STEMBOT", "Weather LSTM", "DrishtiGuide"] },
  { tag: "ros2", projects: ["STEMBOT"] },
  { tag: "computer vision", projects: ["SPARC", "DrishtiGuide"] },
  { tag: "yolov8", projects: ["DrishtiGuide"] },
  { tag: "mediapipe", projects: ["SPARC"] },
  { tag: "esp32", projects: ["TRIDENT", "STEMBOT"] },
  { tag: "react", projects: ["Portfolio Website", "GNOME Stocks"] },
  { tag: "next.js", projects: ["Portfolio Website"] },
  { tag: "nextjs", projects: ["Portfolio Website"] },
  { tag: "typescript", projects: ["Portfolio Website", "GNOME Stocks"] },
  { tag: "lstm", projects: ["Weather LSTM", "TRIDENT"] },
  { tag: "pytorch", projects: ["SPARC", "Weather LSTM"] },
  { tag: "tensorflow", projects: ["SPARC"] },
  { tag: "opencv", projects: ["SPARC", "DrishtiGuide"] },
  { tag: "arduino", projects: ["DrishtiGuide", "STEMBOT"] },
  { tag: "raspberry pi", projects: ["STEMBOT"] },
  { tag: "c++", projects: ["STEMBOT", "NeuroBridge"] },
  { tag: "java", projects: ["NeuroBridge"] },
  { tag: "machine learning", projects: ["SPARC", "Weather LSTM", "TRIDENT"] },
  { tag: "robotics", projects: ["STEMBOT", "Terrain Scout"] },
  { tag: "iot", projects: ["TRIDENT", "STEMBOT"] },
  { tag: "wearable", projects: ["TRIDENT"] },
  { tag: "drone", projects: ["DrishtiGuide"] },
  { tag: "sign language", projects: ["SPARC"] },
  { tag: "data analytics", projects: ["Weather LSTM", "GNOME Stocks"] },
];

const NAV_PAGES = ["projects", "achievements", "leadership", "about"];

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
   Terminal Line sub-component (boot sequence)
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
   Main Console Component — Interactive Shell
   ──────────────────────────────────────────────────────── */

export default function StatusConsole() {
  const router = useRouter();
  const [activeLine, setActiveLine] = useState(-1);
  const [isVisible, setIsVisible] = useState(false);
  const [bootDone, setBootDone] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [outputHistory, setOutputHistory] = useState<OutputLine[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const idCounter = useRef(0);

  const genId = () => `line-${++idCounter.current}`;

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

  // Stagger boot lines after visible
  useEffect(() => {
    if (!isVisible) return;
    let i = 0;
    const interval = setInterval(() => {
      setActiveLine(i);
      i++;
      if (i >= telemetryLines.length) {
        clearInterval(interval);
        // Wait for last line typewriter to finish before enabling input
        setTimeout(() => setBootDone(true), telemetryLines.length * 600 + 1200);
      }
    }, 600);
    return () => clearInterval(interval);
  }, [isVisible]);

  // Auto-scroll on new output
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [outputHistory, bootDone]);

  // Focus input when boot finishes
  useEffect(() => {
    if (bootDone && inputRef.current) {
      inputRef.current.focus();
    }
  }, [bootDone]);

  const appendOutput = useCallback((lines: OutputLine[]) => {
    setOutputHistory((prev) => [
      ...prev,
      ...lines.map((l) => ({ ...l, id: genId() })),
    ]);
  }, []);

  const handleCommand = useCallback(
    (rawCmd: string) => {
      const cmd = rawCmd.trim().toLowerCase();
      if (!cmd) return;

      // Log the command
      setCommandHistory((prev) => [...prev, rawCmd.trim()]);
      setHistoryIndex(-1);
      appendOutput([{ id: genId(), type: "command", text: `guest@harshit_portfolio:~$ ${rawCmd.trim()}` }]);

      // Parse
      const parts = cmd.split(/\s+/);
      const primary = parts[0];
      const args = parts.slice(1).join(" ");

      switch (primary) {
        case "help":
          appendOutput(HELP_OUTPUT);
          break;

        case "accuracy":
          appendOutput(ACCURACY_OUTPUT);
          break;

        case "perf":
        case "performance":
          appendOutput(PERF_OUTPUT);
          break;

        case "matrix":
          appendOutput(MATRIX_OUTPUT);
          break;

        case "navigate":
        case "nav":
        case "goto":
        case "cd": {
          const target = args.replace(/^\//, "");
          if (NAV_PAGES.includes(target)) {
            appendOutput([
              { id: genId(), type: "success", text: `  ✓ Navigating to /${target}...` },
            ]);
            setTimeout(() => router.push(`/${target}`), 600);
          } else {
            appendOutput([
              { id: genId(), type: "error", text: `  ✗ Unknown page: "${args || "(empty)"}"` },
              { id: genId(), type: "output", text: `  Available: ${NAV_PAGES.join(", ")}` },
            ]);
          }
          break;
        }

        case "search": {
          if (!args) {
            appendOutput([
              { id: genId(), type: "error", text: "  ✗ Usage: search <query>" },
              { id: genId(), type: "output", text: '  Example: search "python"' },
            ]);
            break;
          }
          const query = args.toLowerCase().replace(/['"]/g, "");
          const matches = SEARCH_DB.filter((entry) => entry.tag.includes(query));
          if (matches.length > 0) {
            appendOutput([
              { id: genId(), type: "header", text: `  ── Search results for "${query}" ──` },
              ...matches.map((m) => ({
                id: genId(),
                type: "output" as const,
                text: `  ${m.tag.toUpperCase().padEnd(22)} → ${m.projects.join(", ")}`,
              })),
              { id: genId(), type: "success", text: `  ✓ ${matches.length} tag(s) matched` },
            ]);
          } else {
            appendOutput([
              { id: genId(), type: "error", text: `  ✗ No results for "${query}"` },
            ]);
          }
          break;
        }

        case "clear":
          setOutputHistory([]);
          break;

        default:
          appendOutput([
            { id: genId(), type: "error", text: `  ✗ Command not found: "${primary}"` },
            { id: genId(), type: "output", text: '  Type "help" for available commands' },
          ]);
      }
    },
    [appendOutput, router]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(inputValue);
      setInputValue("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setInputValue(commandHistory[commandHistory.length - 1 - newIndex] || "");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInputValue(commandHistory[commandHistory.length - 1 - newIndex] || "");
      } else {
        setHistoryIndex(-1);
        setInputValue("");
      }
    }
  };

  const timestamp = new Date().toISOString().slice(0, 19).replace("T", " ");

  const getLineColor = (type: OutputLine["type"]) => {
    switch (type) {
      case "command": return "text-zinc-500";
      case "success": return "text-emerald-600";
      case "error": return "text-red-500";
      case "header": return "text-zinc-500";
      default: return "text-zinc-600";
    }
  };

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
      <div
        ref={scrollRef}
        className="p-3 sm:p-4 flex flex-col gap-1.5 max-h-[420px] overflow-y-auto overflow-x-hidden"
        onClick={() => inputRef.current?.focus()}
      >
        {/* Boot header */}
        <div className="font-mono text-[9px] sm:text-[10px] text-zinc-400 mb-2">
          <span className="text-zinc-500">$</span> diagnostics --run-all --format=compact
        </div>

        {/* Boot sequence */}
        {telemetryLines.map((line, i) => (
          <TerminalLine
            key={line.label}
            line={line}
            index={i}
            activeLine={activeLine}
          />
        ))}

        {/* Boot complete message */}
        {activeLine >= telemetryLines.length - 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="font-mono text-[9px] sm:text-[10px] text-zinc-400 mt-3 pt-2 border-t border-zinc-200"
          >
            <span className="text-emerald-500">✓</span> All systems operational — {telemetryLines.length} modules verified
          </motion.div>
        )}

        {/* Interactive prompt welcome */}
        <AnimatePresence>
          {bootDone && outputHistory.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="font-mono text-[9px] sm:text-[10px] text-zinc-400 mt-2 pt-2 border-t border-zinc-100"
            >
              <span className="text-sky-500">ℹ</span> Interactive shell ready — type <span className="text-zinc-600 font-semibold">help</span> to see available commands
            </motion.div>
          )}
        </AnimatePresence>

        {/* Command output history */}
        {outputHistory.map((line) => (
          <div
            key={line.id}
            className={`font-mono text-[9px] sm:text-[10px] md:text-[11px] leading-relaxed whitespace-pre-wrap break-words ${getLineColor(line.type)}`}
          >
            {line.text}
          </div>
        ))}

        {/* Active input prompt */}
        {bootDone && (
          <div className="flex items-center gap-0 font-mono text-[9px] sm:text-[10px] md:text-[11px] mt-1">
            <span className="text-emerald-500 shrink-0">guest@harshit_portfolio</span>
            <span className="text-zinc-400 shrink-0">:~$&nbsp;</span>
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              spellCheck={false}
              autoComplete="off"
              className="flex-1 bg-transparent border-none outline-none text-zinc-700 font-mono text-[9px] sm:text-[10px] md:text-[11px] caret-emerald-500 placeholder-zinc-300 min-w-0"
              placeholder="type a command..."
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}
