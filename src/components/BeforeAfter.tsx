"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Motion values for smooth mouse tracking
  const mouseX = useMotionValue(50);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });

  // Create a polygon clip-path that updates dynamically
  const clipPath = useTransform(springX, (val) => `polygon(0 0, ${val}% 0, ${val}% 100%, 0 100%)`);

  // Create the left position for the slider handle
  const lineLeft = useTransform(springX, (val) => `${val}%`);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    mouseX.set(percent);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    mouseX.set(percent);
  };

  return (
    <section className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center py-20 px-4 md:px-12">

      <div className="w-full max-w-7xl flex flex-col gap-12 md:gap-16">

        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-light tracking-tighter uppercase leading-none">
            The Art of <br />
            <span className="text-white/40">Transformation.</span>
          </h2>
          <p className="max-w-sm text-xs md:text-sm font-light text-white/50 tracking-widest leading-relaxed uppercase">
            Witness the meticulous process from unrefined fabric to a tailored silhouette.{" "}
            <span className="hidden md:inline">Move your cursor to reveal.</span>
            <span className="md:hidden">Slide to reveal.</span>
          </p>
        </div>

        {/* Before / After Interactive Container */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onMouseLeave={() => mouseX.set(50)}
          onTouchEnd={() => mouseX.set(50)}
          className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden cursor-ew-resize"
        >
          {/* AFTER (Background Layer) */}
          <div className="absolute inset-0">
            <Image
              src="/asset/homeafter.png"
              alt="After Tailoring"
              fill
              className="object-cover"
            />
            <div className="absolute top-6 right-6 md:top-10 md:right-10 uppercase tracking-[0.4em] text-xs font-bold text-white mix-blend-difference z-20">
              After
            </div>
          </div>

          {/* BEFORE (Foreground Layer with Clip Path) */}
          <motion.div
            className="absolute inset-0 z-10"
            style={{ clipPath }}
          >
            <Image
              src="/asset/homebefore.png"
              alt="Before Tailoring"
              fill
              className="object-cover"
            />
            <div className="absolute top-6 left-6 md:top-10 md:left-10 uppercase tracking-[0.4em] text-xs font-bold text-white mix-blend-difference z-20">
              Before
            </div>
          </motion.div>

          {/* The Slider Line & Handle */}
          <motion.div
            className="absolute top-0 bottom-0 w-[1px] bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)] z-30 flex items-center justify-center -ml-[0.5px]"
            style={{ left: lineLeft }}
          >
            <div className="w-10 h-10 border border-white/50 rounded-full flex items-center justify-center bg-black/10 backdrop-blur-md">
              <div className="w-1.5 h-1.5 bg-white rounded-full" />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
