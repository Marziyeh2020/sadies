"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ToolsAtelier() {
  return (
    <section className="relative w-full min-h-screen bg-zinc-950 text-white flex flex-col md:flex-row items-center justify-center overflow-hidden py-20 px-8">

      {/* Floating Image Composition */}
      <div className="relative w-full md:w-1/2 h-[40vh] md:h-[80vh] flex items-center justify-center">
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-full max-w-[600px] h-full hover:scale-105 transition-transform duration-700 ease-out cursor-none"
        >
          <Image
            src="/asset/tools.png"
            alt="Atelier Tools"
            fill
            className="object-contain"
          />
        </motion.div>
      </div>

      {/* Typography */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-full md:w-1/2 flex flex-col items-start justify-center gap-6 mt-12 md:mt-0 px-4 md:px-16"
      >
        <h3 className="text-xs md:text-sm tracking-[0.4em] uppercase text-white/50">
          Tools of the Atelier
        </h3>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter leading-tight">
          Craftsmanship is an <br />
          <span className="opacity-80">unspoken language.</span>
        </h2>
        <div className="w-12 h-[1px] bg-white/30 my-4" />
        <p className="max-w-md text-white/60 font-light leading-relaxed text-sm md:text-base">
          The finest garments are born from precision. Every shear, every measure, every chalk mark is guided by decades of mastery. We honor the tradition of bespoke tailoring, ensuring that every detail is perfectly executed to fit your imagination.
        </p>
      </motion.div>

    </section>
  );
}
