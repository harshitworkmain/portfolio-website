"use client";

import React from "react";
import Link from "next/link";
import {
  Download,
  ExternalLink,
  FileText,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Award,
  Terminal,
} from "lucide-react";

export default function ResumePage() {
  const resumeFile = "/resume.pdf";

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      {/* Header & Navigation Breadcrumb */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-zinc-900 transition-colors mb-3 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>RETURN TO PORTFOLIO</span>
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900">
            Curriculum Vitae & Technical Credentials
          </h1>
          <p className="mt-1 text-sm sm:text-base text-zinc-600 max-w-3xl">
            Complete academic background, industry experience, applied machine learning systems, and verified project metrics.
          </p>
        </div>

        {/* Global Quick Action Buttons */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={resumeFile}
            download="Harshit_Singh_Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900 text-white text-xs sm:text-sm font-medium hover:bg-zinc-800 transition-all shadow-sm hover:shadow"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </a>
          <a
            href={resumeFile}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-zinc-300 bg-white text-zinc-700 text-xs sm:text-sm font-medium hover:bg-zinc-50 hover:text-zinc-900 transition-all shadow-sm"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Open in Tab</span>
          </a>
        </div>
      </div>

      {/* Metadata Banner */}
      <div className="mb-6 p-4 sm:p-5 rounded-xl border border-zinc-200 bg-zinc-50/80 backdrop-blur-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center p-1 rounded-md bg-emerald-100 text-emerald-700">
            <Sparkles className="w-3.5 h-3.5" />
          </span>
          <span className="text-xs sm:text-sm font-bold text-zinc-900">
            Harshit Singh &mdash; Software Systems Engineer &amp; Applied AI Developer
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-zinc-500">
          <span className="flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-zinc-400" />
            <span>ATS LaTeX Machine Readable</span>
          </span>
          <span className="hidden sm:inline-block text-zinc-300">•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Verified 2025/2026 Metrics</span>
          </span>
        </div>
      </div>

      {/* Embedded Document Viewer Container */}
      <div className="rounded-xl border border-zinc-300 bg-white shadow-sm overflow-hidden flex flex-col h-[840px] relative mb-12">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-zinc-200 bg-zinc-100/70 text-xs font-mono text-zinc-600">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            <span className="font-semibold text-zinc-800">resume.pdf</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={resumeFile}
              download="Harshit_Singh_Resume.pdf"
              className="text-zinc-600 hover:text-zinc-900 flex items-center gap-1 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span>
            </a>
            <a
              href={resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-zinc-900 flex items-center gap-1 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Fullscreen</span>
            </a>
          </div>
        </div>

        {/* The PDF Viewer IFrame with Mobile Fallback */}
        <div className="flex-1 w-full h-full relative bg-zinc-100">
          <iframe
            src={`${resumeFile}#view=FitH`}
            title="Harshit Singh Resume"
            className="w-full h-full border-0"
          />

          {/* Mobile Fallback Overlay (in case browser blocks inline PDF iframe) */}
          <div className="md:hidden absolute inset-0 bg-white/95 backdrop-blur-sm p-6 flex flex-col items-center justify-center text-center pointer-events-none">
            <FileText className="w-12 h-12 text-zinc-400 mb-3" />
            <h3 className="text-base font-bold text-zinc-900 mb-1">Mobile PDF Viewer</h3>
            <p className="text-xs text-zinc-600 mb-4 max-w-xs">
              If your mobile browser does not render inline PDF documents, tap below to open or download directly.
            </p>
            <div className="pointer-events-auto flex items-center gap-3">
              <a
                href={resumeFile}
                download="Harshit_Singh_Resume.pdf"
                className="px-4 py-2 rounded-lg bg-zinc-900 text-white text-xs font-medium shadow"
              >
                Download PDF
              </a>
              <a
                href={resumeFile}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg border border-zinc-300 bg-white text-zinc-800 text-xs font-medium shadow"
              >
                Open in Browser
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Supplemental Highlights & Verified Credentials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-5 rounded-xl border border-zinc-200 bg-white shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-4 h-4 text-emerald-600" />
            <h3 className="text-sm font-bold text-zinc-900">Education & Academic Record</h3>
          </div>
          <p className="text-xs text-zinc-600 leading-relaxed">
            <strong>Vellore Institute of Technology, Chennai</strong> (2023–2027)
            <br />
            B.Tech in Electronics & Computer Engineering | CGPA: <strong className="text-zinc-900">7.97</strong>
            <br />
            New Era School (CBSE) | Class XII: <strong>87.16%</strong> | Class X: <strong>89.83%</strong>
          </p>
        </div>

        <div className="p-5 rounded-xl border border-zinc-200 bg-white shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Terminal className="w-4 h-4 text-sky-600" />
            <h3 className="text-sm font-bold text-zinc-900">Industry Internship (STEMTEC)</h3>
          </div>
          <p className="text-xs text-zinc-600 leading-relaxed">
            <strong>AI & Robotics Intern — Autonomous Mobile Robotics</strong>
            <br />
            Jul 2025 – Aug 2025 | Chennai, India
            <br />
            15 Hz EKF cutting drift by 60% (spatial) and 69.2% (angular). 10 Hz LiDAR with 95% collision-free navigation.
            <br />
            <Link href="/internship" className="text-zinc-900 font-semibold underline mt-1 inline-block">
              Explore STEMTEC Deep-Dive →
            </Link>
          </p>
        </div>

        <div className="p-5 rounded-xl border border-zinc-200 bg-white shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <h3 className="text-sm font-bold text-zinc-900">Key Honors & Distinctions</h3>
          </div>
          <p className="text-xs text-zinc-600 leading-relaxed">
            • <strong>Smart India Hackathon 2025</strong>: Top 5 National Finalist (500+ teams)
            <br />
            • <strong>Technovation 2025 (Anna Univ.)</strong>: 3rd Place / 2nd Runner Up (50+ teams)
            <br />
            • <strong>Innovate X Impact (V-NEST)</strong>: 1st Place Winner (35 teams)
            <br />
            • <strong>Team Namo Nirvana</strong>: Deputy Operations Lead (100+ members, 35% efficiency boost)
          </p>
        </div>
      </div>
    </div>
  );
}
