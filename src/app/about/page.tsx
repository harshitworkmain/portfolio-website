"use client";

import Link from "next/link";
import {
  Award,
  Briefcase,
  GraduationCap,
  Trophy,
  ArrowRight,
  Database,
  Brain,
  Eye,
  Server,
  FileText,
  Compass,
  CheckCircle2,
} from "lucide-react";
import PageTransition from "@/components/ui/PageTransition";
import ScrollToTop from "@/components/ScrollToTop";

/* ────────────────────────────────────────────────────────
   Career Identity Skills Matrix Data (4-Phase Lifecycle)
   ──────────────────────────────────────────────────────── */

const SKILLS_LIFECYCLE = [
  {
    stage: "Stage 01",
    subtitle: "From raw data...",
    title: "Raw Data & Ingestion Pipelines",
    icon: Database,
    accent: "text-emerald-700 bg-emerald-50 border-emerald-200",
    description:
      "Telemetry extraction, sensor streams (3,600 pts/sec), shared-memory buffers (/dev/shm), and relational schema engineering.",
    technologies: [
      "Python",
      "PostgreSQL",
      "SQLite",
      "Time-Series Telemetry",
      "ETL Pipelines",
      "Data Cleaning & Outlier Rejection",
      "Pandas & NumPy",
      "In-Memory Caching (/dev/shm)",
      "High-Frequency Sensor Streams",
      "Schema Design",
    ],
  },
  {
    stage: "Stage 02",
    subtitle: "...to a model...",
    title: "Statistical Modeling & Predictive ML",
    icon: Brain,
    accent: "text-indigo-700 bg-indigo-50 border-indigo-200",
    description:
      "Deep recurrent architectures, graph propagation networks, stochastic state estimation, and multi-criteria risk triage.",
    technologies: [
      "PyTorch",
      "Scikit-Learn",
      "Stacked LSTM Networks",
      "Time-Series Forecasting",
      "Extended Kalman Filter (EKF)",
      "NetworkX Graph Diffusion",
      "Edmonds-Karp Max-Flow",
      "Statistical Validation",
      "MCDA Risk Scoring",
      "Regression Analysis",
    ],
  },
  {
    stage: "Stage 03",
    subtitle: "...solving underserved problems...",
    title: "Perception & Edge Intelligence",
    icon: Eye,
    accent: "text-amber-700 bg-amber-50 border-amber-200",
    description:
      "Sub-50ms vision pipelines, 3D landmark mesh extraction, in-browser client inference, and LiDAR range filtering.",
    technologies: [
      "OpenCV",
      "YOLOv8 Edge Vision",
      "MediaPipe Face Mesh (468 3D landmarks)",
      "TensorFlow.js (NLP Toxicity)",
      "In-Browser WebGL Inference",
      "LiDAR 2D Range-Slicing (<50ms)",
      "Real-Time Gesture Recognition (92.4%)",
      "Multimodal Sensor Fusion",
      "Feature Vectorization (99.97% cut)",
    ],
  },
  {
    stage: "Stage 04",
    subtitle: "...to something deployed and working!",
    title: "Production Software & Deployed Systems",
    icon: Server,
    accent: "text-zinc-800 bg-zinc-100 border-zinc-300",
    description:
      "High-availability client interfaces, containerized microservices, high-throughput REST APIs, and Linux runtime orchestration.",
    technologies: [
      "Next.js 16 (App Router)",
      "React 19 & TypeScript",
      "Node.js & Express 5",
      "Flask & Gunicorn WSGI",
      "RESTful APIs (70+ endpoints)",
      "Docker (CPU-only image tuning)",
      "WebRTC & Socket.IO Telemetry",
      "Linux / Ubuntu Server Environments",
      "GitHub Actions (CI/CD)",
      "Tailwind CSS v4 & Framer Motion",
    ],
  },
];

export default function About() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-5xl px-6 py-12 lg:px-8">

        {/* ═══════════════════════════════════════════════
            Header
           ═══════════════════════════════════════════════ */}
        <div className="flex flex-col items-start gap-3 border-b border-zinc-200 pb-10">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-bold tracking-widest text-zinc-700 border border-zinc-300 bg-zinc-50 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Engineering Profile &amp; Career Identity
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-black sm:text-5xl uppercase font-heading">
            Data Science &amp; Applied ML Systems
          </h1>
          <p className="text-sm uppercase tracking-widest text-zinc-600 font-medium">
            Bridging raw data, predictive machine learning, and deployed software architecture
          </p>
        </div>

        {/* ═══════════════════════════════════════════════
            Top Identity Block — Verbatim Statements
           ═══════════════════════════════════════════════ */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Core Identity */}
          <div className="glass-panel p-6 rounded-xl border border-zinc-200 flex flex-col justify-between shadow-sm">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 font-mono">
                01 / CORE IDENTITY
              </span>
              <p className="text-sm font-medium text-black mt-3 leading-relaxed italic">
                &ldquo;I build software systems and back them with applied machine learning. My work usually starts with a real problem and goes from raw data to a model to something deployed that people can actually use.&rdquo;
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-zinc-200 text-[10px] font-bold uppercase tracking-widest text-emerald-700 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              End-to-End Execution
            </div>
          </div>

          {/* What Drives Me */}
          <div className="glass-panel p-6 rounded-xl border border-zinc-200 flex flex-col justify-between shadow-sm">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 font-mono">
                02 / WHAT DRIVES ME
              </span>
              <p className="text-sm font-medium text-black mt-3 leading-relaxed italic">
                &ldquo;Building for people who are underserved &mdash; assistive tech, disaster response, clinical screening &mdash; and taking an idea from raw data to something deployed and working.&rdquo;
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-zinc-200 text-[10px] font-bold uppercase tracking-widest text-indigo-700 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" />
              High-Impact Problem Spaces
            </div>
          </div>

          {/* Role Targeting */}
          <div className="glass-panel p-6 rounded-xl border border-zinc-200 flex flex-col justify-between shadow-sm">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 font-mono">
                03 / DIRECTION &amp; ROLES
              </span>
              <p className="text-sm font-medium text-black mt-3 leading-relaxed italic">
                &ldquo;I&apos;m looking for data science roles, with data analysis and data engineering work alongside, and I&apos;m open to software engineering roles where applied ML is part of the job. Feel free to reach out.&rdquo;
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-zinc-200">
              <a
                href="mailto:harshit.workmain@gmail.com"
                className="text-[10px] font-bold uppercase tracking-widest text-black hover:text-zinc-600 transition-colors flex items-center gap-1.5"
              >
                Connect Direct <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            Quick-Access Navigation Pills
           ═══════════════════════════════════════════════ */}
        <div className="mt-8 flex flex-wrap gap-2.5 items-center justify-start py-3 border-y border-zinc-200/80">
          <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 font-mono mr-2">
            Explore Details:
          </span>
          <Link
            href="/internship"
            className="px-3 py-1.5 rounded-lg border border-zinc-200 bg-white text-xs font-semibold uppercase tracking-wider text-black hover:bg-zinc-100 hover:border-zinc-300 transition-all flex items-center gap-1.5 shadow-xs"
          >
            <Briefcase className="w-3.5 h-3.5 text-emerald-600" />
            STEMTEC Robotics Case Study
          </Link>
          <Link
            href="/resume"
            className="px-3 py-1.5 rounded-lg border border-zinc-200 bg-white text-xs font-semibold uppercase tracking-wider text-black hover:bg-zinc-100 hover:border-zinc-300 transition-all flex items-center gap-1.5 shadow-xs"
          >
            <FileText className="w-3.5 h-3.5 text-indigo-600" />
            Official Resume (PDF)
          </Link>
          <Link
            href="/projects"
            className="px-3 py-1.5 rounded-lg border border-zinc-200 bg-white text-xs font-semibold uppercase tracking-wider text-black hover:bg-zinc-100 hover:border-zinc-300 transition-all flex items-center gap-1.5 shadow-xs"
          >
            Project Portfolio
          </Link>
          <Link
            href="/achievements"
            className="px-3 py-1.5 rounded-lg border border-zinc-200 bg-white text-xs font-semibold uppercase tracking-wider text-black hover:bg-zinc-100 hover:border-zinc-300 transition-all flex items-center gap-1.5 shadow-xs"
          >
            Achievements &amp; Honors
          </Link>
          <Link
            href="/leadership"
            className="px-3 py-1.5 rounded-lg border border-zinc-200 bg-white text-xs font-semibold uppercase tracking-wider text-black hover:bg-zinc-100 hover:border-zinc-300 transition-all flex items-center gap-1.5 shadow-xs"
          >
            Leadership &amp; Interests
          </Link>
        </div>

        {/* ═══════════════════════════════════════════════
            Career-Identity Skills Matrix (Lifecycle-Based)
           ═══════════════════════════════════════════════ */}
        <div className="mt-16">
          <div className="flex flex-col gap-1 mb-8">
            <h2 className="text-xl font-bold uppercase tracking-tight text-black font-heading flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-black" />
              Technical Capabilities Matrix
            </h2>
            <p className="text-xs uppercase tracking-widest text-zinc-600 font-medium">
              Mapped directly along the 4 phases of my engineering lifecycle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILLS_LIFECYCLE.map((stage) => {
              const Icon = stage.icon;
              return (
                <div
                  key={stage.stage}
                  className="glass-panel glass-panel-hover rounded-xl p-6 border border-zinc-200 flex flex-col justify-between shadow-xs"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500">
                        {stage.stage} &middot; <span className="italic">{stage.subtitle}</span>
                      </span>
                      <div className={`p-1.5 rounded-md border ${stage.accent}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-black uppercase tracking-tight font-heading">
                      {stage.title}
                    </h3>
                    <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                      {stage.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-5">
                      {stage.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-zinc-100 text-zinc-800 border border-zinc-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            Layout Split: Experience & Education / Honors
           ═══════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 mt-16 pt-12 border-t border-zinc-200">
          
          {/* Left Column: Education & Context */}
          <div className="lg:col-span-1 flex flex-col gap-10">
            {/* Education Timeline */}
            <div>
              <h2 className="text-xs uppercase tracking-widest text-zinc-700 font-extrabold mb-6 flex items-center gap-2 font-heading">
                <GraduationCap className="h-4 w-4 text-black" />
                Education
              </h2>
              <div className="flex flex-col gap-6 pl-3 border-l-2 border-zinc-200">
                <div>
                  <span className="block text-[10px] uppercase font-semibold text-zinc-600 font-mono">2023 – 2027</span>
                  <span className="block text-xs font-bold text-black uppercase mt-1">B.Tech ECE (Undergrad)</span>
                  <span className="block text-[11px] text-zinc-700 font-normal mt-0.5">Vellore Institute of Technology, Chennai</span>
                  <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-bold bg-zinc-150 border border-zinc-300 text-zinc-800">
                    CGPA: 8.07 / 10.0
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-semibold text-zinc-600 font-mono">2022 – 2023</span>
                  <span className="block text-xs font-bold text-black uppercase mt-1">Senior Secondary (Class XII)</span>
                  <span className="block text-[11px] text-zinc-700 font-normal mt-0.5">New Era School, Ghaziabad</span>
                  <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-bold bg-zinc-150 border border-zinc-300 text-zinc-800">
                    87.2% Score
                  </span>
                </div>
              </div>
            </div>

            {/* Core Competency Highlights */}
            <div className="glass-panel p-5 rounded-lg border border-zinc-200">
              <h3 className="text-xs font-bold uppercase tracking-wider text-black font-heading mb-3">
                Key Engineering Focus
              </h3>
              <ul className="text-xs text-zinc-700 space-y-2 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">&bull;</span>
                  <span>Time-series state estimation (EKF telemetry at 15 Hz)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold">&bull;</span>
                  <span>Multivariate LSTM forecasting &amp; flood diffusion graphs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">&bull;</span>
                  <span>Real-time computer vision (OpenCV, YOLOv8, MediaPipe)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-600 font-bold">&bull;</span>
                  <span>Full-stack web systems (Next.js, Node.js, Express, Docker)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Experience & Awards */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            {/* Experience */}
            <div>
              <h2 className="text-xs uppercase tracking-widest text-zinc-700 font-extrabold mb-6 flex items-center gap-2 font-heading">
                <Briefcase className="h-4 w-4 text-black" />
                Industry Experience &amp; Leadership
              </h2>
              <div className="flex flex-col gap-8">
                
                {/* STEMTEC AI & Robotics */}
                <div className="glass-panel rounded-xl p-6 border border-zinc-200 shadow-xs">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                    <div>
                      <h3 className="text-sm font-bold text-black uppercase font-heading">
                        AI &amp; Robotics Intern &mdash; Indoor Autonomous Mobile Robot
                      </h3>
                      <span className="block text-xs text-zinc-600 mt-0.5 font-medium">
                        STEMTEC AI &amp; Robotics Pvt. Ltd. &middot; Chennai, IN
                      </span>
                    </div>
                    <span className="px-2.5 py-1 rounded text-[9px] font-mono font-bold tracking-widest bg-emerald-50 border border-emerald-200 text-emerald-800 uppercase">
                      Jul 2025 – Aug 2025
                    </span>
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 my-3">
                    {["Python", "Time-Series Analysis", "Extended Kalman Filter", "LiDAR Processing", "Sensor Fusion", "Statistical Validation", "ROS2", "Robotics"].map((skill) => (
                      <span key={skill} className="px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-100 text-zinc-800 border border-zinc-200">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-zinc-700 font-normal leading-relaxed mt-2">
                    Worked on the software stack of an indoor autonomous mobile robot, mostly on the sensor validation and data analysis side rather than pure hardware work. I ran time series error analysis on Extended Kalman Filter telemetry at 15 Hz against raw encoder logs across repeated ground truth trials, which brought mean spatial error down 60 percent and angular error down about 69 percent. Also worked with high frequency LiDAR data, close to 3,600 points a second, to validate a filtering approach for obstacle detection, getting it to 95 percent accuracy across 20 stress test trials while keeping latency under 50ms. A good chunk of the work was really about designing solid test trials and making sure the numbers I was reporting actually held up under scrutiny.
                  </p>

                  <div className="mt-5 pt-4 border-t border-zinc-200 flex flex-wrap items-center gap-4">
                    <Link
                      href="/internship"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-black text-white text-xs font-semibold uppercase tracking-wider hover:bg-zinc-800 transition-colors"
                    >
                      <ArrowRight className="h-3.5 w-3.5" />
                      Read Full Deep-Dive Case Study
                    </Link>
                    <a
                      href="https://drive.google.com/file/d/1tlTXqB9SfdCe-Xos92JxB9dEDdrS36nc/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-zinc-600 hover:text-black transition-colors"
                    >
                      <Trophy className="h-3.5 w-3.5 text-emerald-600" />
                      View Certificate
                    </a>
                  </div>
                </div>

                {/* Team Namo Nirvana */}
                <div className="glass-panel rounded-xl p-6 border border-zinc-200 shadow-xs">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                    <div>
                      <h3 className="text-sm font-bold text-black uppercase font-heading">
                        Deputy Operations Lead
                      </h3>
                      <span className="block text-xs text-zinc-600 mt-0.5 font-medium">
                        Team Namo Nirvana (Special Autonomous Robotics Unit)
                      </span>
                    </div>
                    <span className="px-2.5 py-1 rounded text-[9px] font-mono font-bold tracking-widest bg-zinc-150 border border-zinc-300 text-zinc-700 uppercase">
                      Jan 2025 – Present
                    </span>
                  </div>
                  <ul className="text-sm text-zinc-700 font-normal leading-relaxed flex flex-col gap-2 list-disc pl-4 mt-2">
                    <li>Co-directed a 100+ member systems engineering, software, and controls crew across national university engineering competitions.</li>
                    <li>Boosted semester coordination times by 35% across 5-6 target national competitions.</li>
                    <li>Structured corporate sponsorships, software telemetry stacks, and parts sourcing pipelines.</li>
                  </ul>
                  <div className="mt-5 pt-4 border-t border-zinc-200 flex items-center gap-4">
                    <Link
                      href="/leadership"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-black hover:text-zinc-600 transition-colors"
                    >
                      <ArrowRight className="h-3.5 w-3.5" />
                      Leadership &amp; Interests Page
                    </Link>
                    <a
                      href="https://drive.google.com/file/d/13dByHnoyORd2wqy27hb_piQI_UBVmwLd/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-zinc-600 hover:text-black transition-colors"
                    >
                      <Trophy className="h-3.5 w-3.5" />
                      View Appreciation Letter
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Honors & Awards */}
            <div>
              <h2 className="text-xs uppercase tracking-widest text-zinc-700 font-extrabold mb-6 flex items-center gap-2 font-heading">
                <Award className="h-4 w-4 text-black" />
                Selected Honors &amp; Recognitions
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* SIH */}
                <div className="glass-panel p-5 rounded-lg border border-zinc-200 flex flex-col justify-between">
                  <div>
                    <span className="block text-[9px] font-bold uppercase text-zinc-650 font-mono">Qualifiers</span>
                    <h4 className="text-xs font-bold text-black uppercase mt-1 leading-tight font-heading">
                      SIH&apos;25 National Finalist
                    </h4>
                    <p className="text-xs text-zinc-700 font-normal mt-2 leading-relaxed">
                      Ranked Top 5 out of 500+ competing teams globally at the Smart India Hackathon for SPARC (Sign Language Processing &amp; Recognition System).
                    </p>
                  </div>
                  <a
                    href="https://drive.google.com/file/d/1Vy3qPMbipSNLYGE3GdyYMsqRPwHSYtPD/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-zinc-600 hover:text-black transition-colors duration-300 mt-4"
                  >
                    SIH Certificate <ArrowRight className="w-3 h-3" />
                  </a>
                </div>

                {/* Technovation */}
                <div className="glass-panel p-5 rounded-lg border border-zinc-200 flex flex-col justify-between">
                  <div>
                    <span className="block text-[9px] font-bold uppercase text-zinc-650 font-mono">3rd Place</span>
                    <h4 className="text-xs font-bold text-black uppercase mt-1 leading-tight font-heading">
                      Technovation 2025
                    </h4>
                    <p className="text-xs text-zinc-700 font-normal mt-2 leading-relaxed">
                      CEG Guindy Kurukshetra &apos;25. Awarded ₹15,000 for Terrain Scout all-terrain autonomous perception rover.
                    </p>
                  </div>
                  <a
                    href="https://drive.google.com/file/d/1AkRdc0y1Qdw9cImu5395G5RwdB8vPJuo/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-zinc-600 hover:text-black transition-colors duration-300 mt-4"
                  >
                    Tech Certificate <ArrowRight className="w-3 h-3" />
                  </a>
                </div>

                {/* V-NEST */}
                <div className="glass-panel p-5 rounded-lg border border-zinc-200 flex flex-col justify-between">
                  <div>
                    <span className="block text-[9px] font-bold uppercase text-zinc-650 font-mono">1st Place</span>
                    <h4 className="text-xs font-bold text-black uppercase mt-1 leading-tight font-heading">
                      Innovate X Impact
                    </h4>
                    <p className="text-xs text-zinc-700 font-normal mt-2 leading-relaxed">
                      V-NEST Business Incubator Winner. High-impact pitch for edge robotics startup, awarded ₹5,000.
                    </p>
                  </div>
                </div>

                {/* NCC */}
                <div className="glass-panel p-5 rounded-lg border border-zinc-200 flex flex-col justify-between">
                  <div>
                    <span className="block text-[9px] font-bold uppercase text-zinc-650 font-mono">Corporal</span>
                    <h4 className="text-xs font-bold text-black uppercase mt-1 leading-tight font-heading">
                      NCC Leadership
                    </h4>
                    <p className="text-xs text-zinc-700 font-normal mt-2 leading-relaxed">
                      1 Tamil Nadu Battalion NCC. Promoted to Corporal. Triple Honors at camp: Marching, Cultural &amp; Co.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
      <ScrollToTop />
    </PageTransition>
  );
}
