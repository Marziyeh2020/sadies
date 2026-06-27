"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { id: 1, title: "Wedding & Bridal", image: "/asset/thread.png" },
  { id: 2, title: "Menswear Tailoring", image: "/asset/jeans-fabric.png" },
  { id: 3, title: "Evening Wear", image: "/asset/needle.png" },
  { id: 4, title: "Luxury Repairs", image: "/asset/hero-sewing-machine.png" },
  { id: 5, title: "Custom Fittings", image: "/asset/tools.png" },
];

export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full min-h-screen bg-black text-white py-32 overflow-hidden flex flex-col items-center justify-center">

      {/* Background Images for Hover state */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              key={hoveredIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.3, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={services[hoveredIndex].image}
                alt={services[hoveredIndex].title}
                fill
                className="object-cover grayscale" // Grayscale keeps the black-and-white editorial aesthetic
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="relative z-10 w-full flex flex-col items-center justify-center gap-6 md:gap-8 px-4">
        <h3 className="text-xs md:text-sm tracking-[0.4em] uppercase text-white/50 mb-8 md:mb-16">
          Our Expertise
        </h3>

        {services.map((service, idx) => (
          <motion.div
            key={service.id}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => setHoveredIndex(hoveredIndex === idx ? null : idx)}
            className="group cursor-none relative w-full text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-light tracking-tighter uppercase transition-colors duration-500 text-white/70 md:text-white/30 group-hover:text-white break-words">
              {service.title}
            </h2>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
