"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center py-32 px-4 md:px-12 relative overflow-hidden">

      {/* Background Subtle Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.04)_0%,_transparent_70%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 w-full max-w-6xl flex flex-col items-center text-center gap-24 md:gap-32"
      >

        {/* The Quote */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tighter leading-tight italic font-serif text-white/80">
            "We don't alter clothes. <br className="hidden md:block" />
            We alter the way you carry yourself."
          </h2>
        </div>

        {/* Final CTA */}
        <div className="flex flex-col items-center gap-16">
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-light tracking-tighter uppercase leading-none max-w-5xl">
            Let's Create Something That Fits You <span className="font-serif italic text-white/40 lowercase tracking-normal">perfectly.</span>
          </h2>
        </div>

      </motion.div>

      {/* Minimal Footer */}
      <footer className="absolute bottom-8 left-0 right-0 px-4 flex flex-col md:flex-row justify-between items-center gap-6 text-[0.6rem] md:text-[0.65rem] uppercase tracking-widest text-white/40">
        <span className="text-center">© {new Date().getFullYear()} SADIES</span>
        <span className="hidden md:block">Luxury Tailoring Atelier</span>
        <div className="flex gap-6 justify-center">
          <Link href="/instagram" className="hover:text-white transition-colors">Instagram</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
        </div>
      </footer>
    </section>
  );
}
