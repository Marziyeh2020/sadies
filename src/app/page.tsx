"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Identity from "@/components/Identity";
import Materials from "@/components/Materials";
import ToolsAtelier from "@/components/ToolsAtelier";
import Portfolio from "@/components/Portfolio";
import BeforeAfter from "@/components/BeforeAfter";
import Contact from "@/components/Contact";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://sadies.com",
    "name": "SADIES",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://sadies.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <main className="w-full overflow-x-hidden relative bg-black text-white selection:bg-white selection:text-black">
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
        {/* 1. Katman: Video (EN ALTTA) */}
        <video
          src="/asset/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* 2. Katman: Karartma */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* 3. Katman: Yazılar (EN ÜSTTE) */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center mt-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-light tracking-tighter uppercase leading-none"
          >
            SADIES
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
            className="mt-6 text-xs md:text-sm tracking-[0.4em] uppercase font-light text-white/80"
          >
            Tailored To Your Imagination
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 1.4 }}
            className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              href="/portfolio"
              className="px-10 py-3.5 border border-white text-white text-xs tracking-widest uppercase transition-colors hover:bg-white hover:text-black"
            >
              View Portfolio
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Chapter 02: IDENTITY */}
      <Identity />

      {/* Chapter 03: MATERIALS */}
      <Materials />

      {/* Chapter 04: TOOLS OF THE ATELIER */}
      <ToolsAtelier />

      {/* Chapter 05: PORTFOLIO & SERVICES */}
      <Portfolio />

      {/* Chapter 06: BEFORE & AFTER CASE STUDY */}
      <BeforeAfter />

      {/* Chapter 07: CONTACT & FOOTER */}
      <Contact />
    </main>
  );
}
