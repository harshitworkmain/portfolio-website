import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import BlackHoleCanvas from "@/components/canvas/BlackHoleCanvas";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harshit Singh | Portfolio",
  description:
    "B.Tech in Electronics & Computer Engineering — Robotics, Edge AI, Applied Computer Vision Developer Portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${plusJakarta.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col bg-white text-black selection:bg-black selection:text-white antialiased overflow-x-hidden">
        {/* Full-screen 3D interactive backdrop */}
        <BlackHoleCanvas />

        {/* Navigation Bar overlay */}
        <Navbar />

        {/* Dynamic page contents */}
        <main className="relative z-10 flex flex-col flex-1 pt-16">
          {children}
        </main>

        {/* Global Footer overlay */}
        <Footer />
      </body>
    </html>
  );
}
