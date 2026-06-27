"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
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
    transition: { staggerChildren: 0.15 }
  }
};

// Types
type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  imageBefore: string;
  imageAfter: string;
};

// Dummy Data
const categories = ['All'];

const projects: Project[] = [
  { id: 1, title: 'Wedding Dress Restoration', category: 'Bridal', description: 'Invisible zipper replacement and silhouette refinement.', imageBefore: '/asset/bridalbefore.png', imageAfter: '/asset/bridalafter.png' },
  { id: 2, title: 'Vintage Suit Modernization', category: 'Menswear', description: 'Complete recut of a 1980s blazer for a sharper, modern fit.', imageBefore: '/asset/vintagebefore.png', imageAfter: '/asset/vintageafter.png' },
  { id: 3, title: 'Torn Denim Repair', category: 'Repairs', description: 'Seamless darning and structural reinforcement of distressed denim.', imageBefore: '/asset/denimbefore.png', imageAfter: '/asset/denimafter.png' },
  { id: 4, title: 'Evening Gown Hemming', category: 'Evening Wear', description: 'Complex multi-layered chiffon hem adjusted for perfect floor clearance.', imageBefore: '/asset/eveningbefore.png', imageAfter: '/asset/eveningafter.png' },
  { id: 5, title: 'Leather Jacket Tapering', category: 'Leather', description: 'Side seam adjustments on heavy leather while preserving original topstitching.', imageBefore: '/asset/leatherbefore.png', imageAfter: '/asset/leatherafter.png' },
  { id: 6, title: 'Athletic Wear Resizing', category: 'Sportswear', description: 'Four-way stretch fabric taken in without compromising seam elasticity.', imageBefore: '/asset/sportbefore.png', imageAfter: '/asset/sportafter.png' },
  { id: 7, title: 'Custom Drapery Hem', category: 'Home Textiles', description: 'Precision hemming of silk curtains to hover exactly 1/4 inch above the floor.', imageBefore: '/asset/curtainbefore.png', imageAfter: '/asset/curtainafter.png' },
  { id: 8, title: 'Bespoke Trouser Construction', category: 'Custom Tailoring', description: 'From scratch: High-waisted wool trousers crafted to exact measurements.', imageBefore: '/asset/customebefore.png', imageAfter: '/asset/customeafter.png' },
];

// Fallback Image Component
const PortfolioImage = ({ src, alt, className }: { src: string, alt: string, className: string }) => {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`flex flex-col items-center justify-center bg-[#111] border border-white/5 ${className}`}>
        <span className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-light">Awaiting</span>
        <span className="text-[10px] text-[#00FF66]/50 uppercase tracking-[0.3em] font-light mt-1">Archive</span>
      </div>
    );
  }

  return <Image src={src} alt={alt} fill className={className} onError={() => setError(true)} unoptimized />;
};

// Animated Counter Component
const AnimatedCounter = ({ value, label }: { value: number, label: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex flex-col items-center xl:items-start">
      <span className="text-5xl md:text-7xl font-light tracking-tighter uppercase mb-4 text-[#00FF66]">
        {count}{label.includes('%') ? '%' : '+'}
      </span>
      <h3 className="text-xs md:text-sm tracking-[0.2em] uppercase font-light text-white/70 text-center xl:text-left">
        {label.replace('%', '').replace('+', '')}
      </h3>
    </div>
  );
};


export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeProjectId, setActiveProjectId] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <main className="w-full relative bg-black text-white selection:bg-[#00FF66] selection:text-black">

      {/* 1. Hero Section */}
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <video
          src="/asset/portfolio.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 grayscale opacity-70"
        />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative z-20 flex flex-col items-center justify-center text-center px-6 mt-16"
        >
          <h1 className="text-[14vw] md:text-[10vw] font-light tracking-tighter uppercase leading-[0.85] mb-8">
            Our Portfolio
          </h1>
          <p className="text-sm md:text-lg lg:text-xl font-light text-white/80 uppercase tracking-widest max-w-2xl">
            Every alteration tells a story.<br />
            <span className="text-[#00FF66]">See how craftsmanship transforms garments.</span>
          </p>
        </motion.div>
      </section>

      {/* 2. Introduction */}
      <section className="w-full bg-white text-black py-32 px-6 sm:px-12 md:px-24 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="max-w-4xl mx-auto flex flex-col gap-8"
        >
          <p className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight leading-snug">
            Our work ranges from luxury tailoring and bridal alterations to menswear, repairs and restoration.
          </p>
          <p className="text-sm md:text-base uppercase tracking-[0.2em] text-black/50">
            Every garment is treated individually with precision, craftsmanship and care.
          </p>
        </motion.div>
      </section>

      {/* 3. Filters & Gallery */}
      <section className="w-full bg-[#050505] text-white py-24 md:py-40 px-4 sm:px-8 md:px-16 lg:px-24 min-h-screen">

        {/* Filters */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="w-full max-w-screen-2xl mx-auto flex flex-wrap justify-center gap-4 md:gap-8 mb-24"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[10px] md:text-xs uppercase tracking-[0.2em] transition-all duration-500 pb-2 border-b ${activeCategory === cat
                  ? 'border-[#00FF66] text-[#00FF66]'
                  : 'border-transparent text-white/50 hover:text-white'
                }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <div className="w-full max-w-screen-2xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {filteredProjects.map((project, idx) => {
            const isActive = activeProjectId === project.id;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: (idx % 3) * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="break-inside-avoid flex flex-col select-none"
              >
                <div
                  onClick={() => setActiveProjectId(isActive ? null : project.id)}
                  className="relative w-full aspect-[4/5] overflow-hidden group cursor-crosshair bg-[#0a0a0a] mb-6"
                >

                  {/* After Image (Base) */}
                  <PortfolioImage
                    src={project.imageAfter}
                    alt={`${project.title} After`}
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ${
                      isActive ? "scale-105" : "group-hover:scale-105"
                    }`}
                  />

                  {/* Before Image (Top Layer, fades out) */}
                  <div
                    className={`absolute inset-0 w-full h-full z-10 transition-opacity duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isActive ? "opacity-0 pointer-events-none" : "group-hover:opacity-0"
                    }`}
                  >
                    <PortfolioImage
                      src={project.imageBefore}
                      alt={`${project.title} Before`}
                      className="absolute inset-0 w-full h-full object-cover grayscale opacity-90"
                    />
                    <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-white">Before</div>
                  </div>

                  {/* After Badge (Fades in) */}
                  <div
                    className={`absolute top-4 left-4 bg-[#00FF66] px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-black transition-opacity duration-1000 z-20 ${
                      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    After
                  </div>
                </div>

                <div className="flex flex-col gap-2 pr-4">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-[#00FF66]">{project.category}</span>
                  <h3 className="text-xl md:text-2xl font-light tracking-tight">{project.title}</h3>
                  <p className="text-sm font-light text-white/50 leading-relaxed mt-2">{project.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 4. Featured Project */}
      <section className="w-full h-screen relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <PortfolioImage
          src="/portfolio/featured-wedding.jpg"
          alt="Featured Project"
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 z-0"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="relative z-20 max-w-4xl mx-auto text-center px-6 flex flex-col items-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[#00FF66] mb-6">Featured Transformation</span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tighter uppercase mb-8">
            Luxury Wedding Dress Restoration
          </h2>
          <p className="text-sm md:text-base font-light text-white/80 max-w-2xl leading-relaxed">
            Over 40 hours of meticulous hand-stitching went into rescuing this heirloom gown. French lace was carefully reconstructed, and the silhouette modernized to fit perfectly for a new generation.
          </p>
        </motion.div>
      </section>

      {/* 5. Statistics */}
      <section className="w-full bg-[#111] text-white py-32 px-6 sm:px-12 md:px-24">
        <div className="w-full max-w-screen-2xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-16 text-center lg:text-left">
          <AnimatedCounter value={20} label="Years Experience" />
          <AnimatedCounter value={5000} label="Garments Altered+" />
          <AnimatedCounter value={98} label="Returning Clients%" />
          <AnimatedCounter value={100} label="Hand Finished%" />
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="w-full bg-black text-white py-40 md:py-56 px-6 sm:px-12 md:px-24 flex flex-col items-center justify-center text-center border-t border-white/10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tighter uppercase leading-[1.1] max-w-4xl">
            Ready to transform your garments?
          </h2>
        </motion.div>
      </section>

      {/* Footer minimal */}
      <footer className="w-full bg-black text-white border-t border-white/10 py-16 px-6 sm:px-12 md:px-24">
        <div className="w-full max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
          <div className="relative w-40 h-10">
            <Image src="/asset/whitelogo.png" alt="SADIES" fill className="object-contain object-center md:object-left" />
          </div>
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
