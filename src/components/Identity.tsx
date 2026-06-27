"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Identity() {
  return (
    <section className="relative w-full h-[120vh] bg-white text-black flex items-center justify-center overflow-hidden">
      
      {/* Fingerprint + Needle Reveal */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 0.6, scale: 1.05 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="relative w-[70vw] md:w-[40vw] h-[70vw] md:h-[40vw]">
          <Image
            src="/asset/needle.png"
            alt="Needle and Fingerprint"
            fill
            className="object-contain"
          />
        </div>
      </motion.div>

      {/* Editorial Typography */}
      <div className="relative z-10 flex flex-col items-center text-center gap-8 md:gap-12 px-4 md:px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl md:text-5xl lg:text-7xl font-light tracking-tighter uppercase leading-none"
        >
          Every garment
          <br/>
          <span className="text-black/50">has a story.</span>
        </motion.h2>
        
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl md:text-5xl lg:text-7xl font-light tracking-tighter uppercase leading-none"
        >
          Every stitch
          <br/>
          <span className="text-black/50">leaves a signature.</span>
        </motion.h2>
      </div>
      
    </section>
  );
}
