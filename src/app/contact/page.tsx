"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function ContactPage() {
  return (
    <main className="w-full relative bg-black text-white selection:bg-[#00FF66] selection:text-black">
      
      {/* 1. Hero Section */}
      <section className="w-full min-h-screen bg-black pt-32 pb-20 px-6 sm:px-12 md:px-24 flex items-center">
        <div className="w-full max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Content (Left) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 mt-12 lg:mt-0"
          >
            <h1 className="text-[18vw] sm:text-[15vw] lg:text-[8vw] xl:text-[9vw] font-light tracking-tighter uppercase leading-[0.85] mb-8">
              Let's Talk.
            </h1>
            <p className="text-sm md:text-lg lg:text-xl font-light text-white/80 uppercase tracking-widest max-w-lg">
              Every great garment begins with a conversation.
            </p>
          </motion.div>

          {/* Hero Image (Right) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="relative w-full h-[50vh] lg:h-[75vh] order-1 lg:order-2"
          >
            <Image
              src="/asset/contact.png"
              alt="Contact SADIES"
              fill
              priority
              className="object-contain object-center lg:object-right grayscale opacity-90"
            />
          </motion.div>

        </div>
      </section>

      {/* 2. Main Layout (Centered Contact Info) */}
      <section className="w-full bg-white text-black py-32 md:py-48 px-6 sm:px-12 md:px-24">
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col items-center w-full"
          >
            <motion.h2 variants={fadeIn} className="text-6xl md:text-8xl font-light tracking-tighter uppercase mb-20 text-center">
              Get In <br /> Touch
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 w-full text-center md:text-left">
              <motion.div variants={fadeIn} className="flex flex-col items-center md:items-start">
                <span className="text-[10px] tracking-[0.2em] uppercase text-black/40 mb-4">Email</span>
                <a href="mailto:info@sadiesalteration.com" className="group relative text-xl md:text-3xl font-light cursor-none">
                  info@sadiesalteration.com
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-700 group-hover:w-full"></span>
                </a>
              </motion.div>

              <motion.div variants={fadeIn} className="flex flex-col items-center md:items-start">
                <span className="text-[10px] tracking-[0.2em] uppercase text-black/40 mb-4">Instagram</span>
                <a href="https://instagram.com/sadies_alteration" target="_blank" rel="noopener noreferrer" className="group relative text-xl md:text-3xl font-light cursor-none">
                  @sadies_alteration
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-700 group-hover:w-full"></span>
                </a>
              </motion.div>

              <motion.div variants={fadeIn} className="flex flex-col items-center md:items-start">
                <span className="text-[10px] tracking-[0.2em] uppercase text-black/40 mb-4">Telephone</span>
                <a href="tel:+13147279976" className="group relative text-xl md:text-3xl font-light cursor-none">
                  +1 (314) 727-9976
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-700 group-hover:w-full"></span>
                </a>
              </motion.div>

              <motion.div variants={fadeIn} className="flex flex-col items-center md:items-start">
                <span className="text-[10px] tracking-[0.2em] uppercase text-black/40 mb-4">Address</span>
                <a href="https://maps.google.com/?q=7612+WYDOWN.+CLAYTON,MO.+63105" target="_blank" rel="noopener noreferrer" className="group relative text-xl md:text-3xl font-light cursor-none text-center md:text-left">
                  7612 WYDOWN.<br/>CLAYTON, MO. 63105
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-700 group-hover:w-full"></span>
                </a>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. CTA Section */}
      <section className="w-full bg-[#0a0a0a] text-white py-40 md:py-56 px-6 sm:px-12 md:px-24 flex flex-col items-center justify-center text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tighter uppercase leading-[1.1] max-w-4xl">
            Every stitch begins with a conversation.
          </h2>
        </motion.div>
      </section>

      {/* 4. Footer */}
      <footer className="w-full bg-black text-white border-t border-white/10 py-16 px-6 sm:px-12 md:px-24">
        <div className="w-full max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
          
          {/* Logo */}
          <div className="relative w-40 h-10">
            <Image 
              src="/asset/whitelogo.png" 
              alt="SADIES" 
              fill 
              className="object-contain object-center md:object-left" 
            />
          </div>

          {/* Minimal Links & Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 text-[10px] md:text-xs uppercase tracking-[0.2em] font-light text-white/60">
            <a href="mailto:info@sadiesalteration.com" className="hover:text-white transition-colors cursor-none">info@sadiesalteration.com</a>
            <a href="https://instagram.com/sadies_alteration" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors cursor-none">Instagram</a>
            <span>© {new Date().getFullYear()} SADIES</span>
          </div>

        </div>
      </footer>

    </main>
  );
}
