"use client";

import { useState } from "react";
import { Mail, Send, Check } from "lucide-react";
import PageTransition from "@/components/ui/PageTransition";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <PageTransition>
      <div className="mx-auto max-w-5xl px-6 py-12 lg:px-8 flex-1 flex flex-col justify-center">
        {/* Page Header */}
        <div className="flex flex-col items-start gap-4 border-b border-zinc-200 pb-12">
          <h1 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl uppercase">
            Start a Conversation
          </h1>
          <p className="text-xs uppercase tracking-widest text-zinc-400 font-light">
            Drop an email or connect through professional networks
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 mt-12">
          {/* Left Column: Direct Links */}
          <div className="flex flex-col gap-8 justify-center">
            <div>
              <h2 className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-4">
                Connection Nodes
              </h2>
              <p className="text-xs text-zinc-500 font-light leading-relaxed max-w-md">
                Whether you want to discuss ROS 2 robotics stack optimization, computer vision pipelines, custom ESP32 wearables,
                or full-stack ML integrations, reach out anytime.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {/* Email link */}
              <a
                href="mailto:harshit.workmain@gmail.com"
                className="glass-panel p-4 rounded-lg border border-zinc-100 hover:border-zinc-300 transition-all duration-300 flex items-center gap-4"
              >
                <div className="h-8 w-8 rounded bg-zinc-100 flex items-center justify-center text-zinc-500">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <span className="block text-[8px] uppercase tracking-widest text-zinc-400 font-bold">Email Direct</span>
                  <span className="text-xs font-semibold text-black">harshit.workmain@gmail.com</span>
                </div>
              </a>

              {/* LinkedIn Link */}
              <a
                href="https://www.linkedin.com/in/harshit-singh-3b8467300/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-4 rounded-lg border border-zinc-100 hover:border-zinc-300 transition-all duration-300 flex items-center gap-4"
              >
                <div className="h-8 w-8 rounded bg-zinc-100 flex items-center justify-center text-zinc-500">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div>
                  <span className="block text-[8px] uppercase tracking-widest text-zinc-400 font-bold">LinkedIn Channel</span>
                  <span className="text-xs font-semibold text-black">linkedin.com/in/harshit-singh-3b8467300</span>
                </div>
              </a>

              {/* GitHub Link */}
              <a
                href="https://github.com/harshitworkmain"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-4 rounded-lg border border-zinc-100 hover:border-zinc-300 transition-all duration-300 flex items-center gap-4"
              >
                <div className="h-8 w-8 rounded bg-zinc-100 flex items-center justify-center text-zinc-500">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                </div>
                <div>
                  <span className="block text-[8px] uppercase tracking-widest text-zinc-400 font-bold">GitHub Portfolio</span>
                  <span className="text-xs font-semibold text-black">github.com/harshitworkmain</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="glass-panel p-8 rounded-lg border border-zinc-100">
            <h2 className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-6">
              Transmission Portal
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="text-[9px] uppercase tracking-widest text-zinc-400 font-bold">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Nicola Tesla"
                  className="w-full bg-zinc-50 border-b-2 border-zinc-200 rounded-none p-3 text-xs text-black placeholder-zinc-300 focus:outline-none focus:border-black transition-all duration-300"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-[9px] uppercase tracking-widest text-zinc-400 font-bold">Your Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. nicola@alternatecurrent.org"
                  className="w-full bg-zinc-50 border-b-2 border-zinc-200 rounded-none p-3 text-xs text-black placeholder-zinc-300 focus:outline-none focus:border-black transition-all duration-300"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-[9px] uppercase tracking-widest text-zinc-400 font-bold">Message Node</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Transmission contents..."
                  className="w-full bg-zinc-50 border-b-2 border-zinc-200 rounded-none p-3 text-xs text-black placeholder-zinc-300 focus:outline-none focus:border-black transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status !== "idle"}
                className={`flex h-12 items-center justify-center gap-2 rounded text-xs uppercase tracking-widest font-semibold transition-all duration-300 w-full ${
                  status === "success"
                    ? "bg-black text-white"
                    : status === "sending"
                    ? "bg-zinc-200 text-zinc-400"
                    : "bg-black text-white hover:bg-zinc-800"
                }`}
              >
                {status === "success" ? (
                  <>
                    <Check className="h-4 w-4" />
                    Sent Successfully
                  </>
                ) : status === "sending" ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="h-3.5 w-3.5" />
                    Send Transmission
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
