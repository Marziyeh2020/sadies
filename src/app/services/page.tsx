"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
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

const categories = [
  {
    title: "Bridal & Wedding Alterations",
    items: ["Luxury wedding gowns", "Bridesmaid dresses", "Mother of the bride dresses", "Wedding veils", "Reception dresses", "Formal gowns", "Wedding accessories", "Perfect fitting before the big day."],
    image: "/asset/bridal.avif"
  },
  {
    title: "Menswear Tailoring",
    items: ["Business suits", "Tuxedos", "Jackets", "Blazers", "Dress shirts", "Suit pants", "Waistcoats", "Overcoats", "Formal tailoring", "Custom fitting"],
    image: "/asset/manswear.avif"
  },
  {
    title: "Women's Alterations",
    items: ["Evening dresses", "Cocktail dresses", "Skirts", "Blouses", "Jumpsuits", "Office wear", "Luxury designer clothing", "Everyday fashion", "Custom fitting"],
    image: "/asset/womanwear.avif"
  },
  {
    title: "Denim & Casual Wear",
    items: ["Jeans", "Denim jackets", "Cargo pants", "Hoodies", "T-shirts", "Shorts", "Everyday clothing", "Resize", "Repair", "Patch work", "Original stitching restoration"],
    image: "/asset/denim.avif"
  },
  {
    title: "Sportswear",
    items: ["Gym clothing", "Running apparel", "Cycling clothing", "Yoga outfits", "Tracksuits", "Performance wear", "Stretch fabric alterations", "Sports uniforms"],
    image: "/asset/sportwear.avif"
  },
  {
    title: "Outerwear",
    items: ["Winter coats", "Leather jackets", "Trench coats", "Raincoats", "Parkas", "Puffer jackets", "Wool coats", "Windbreakers", "Zipper replacement", "Lining repair", "Sleeve adjustment"],
    image: "/asset/outwear.avif"
  },
  {
    title: "Home Textiles",
    items: ["Curtains", "Tablecloths", "Cushion covers", "Pillow covers", "Blankets", "Comforters", "Duvets", "Quilts", "Bedding alterations", "Fabric restoration"],
    image: "/asset/hometextile.avif"
  },
  {
    title: "Repairs & Restoration",
    items: ["Broken zippers", "Buttons", "Tears", "Fabric holes", "Invisible repairs", "Hem repair", "Pocket repair", "Lining replacement", "Seam reinforcement", "Vintage clothing restoration", "Luxury garment restoration"],
    image: "/asset/repairs.avif"
  },
  {
    title: "Accessories",
    items: ["Handbags", "Fabric bags", "Backpacks", "Scarves", "Hats", "Belts", "Gloves", "Fabric accessories"],
    image: "/asset/accessories.avif"
  },
  {
    title: "Special Repairs",
    items: ["Soft toys", "Stuffed animals", "Fabric dolls", "School uniforms", "Baby clothing", "Costumes", "Dancewear", "Theatrical garments", "Historical garments", "Delicate fabrics"],
    image: "/asset/special.avif"
  }
];

const processSteps = [
  { id: "01", title: "Consultation" },
  { id: "02", title: "Precision Measurement" },
  { id: "03", title: "Expert Tailoring" },
  { id: "04", title: "Final Perfection" }
];

const stats = [
  { value: "20+", label: "Years of Experience" },
  { value: "Thousands", label: "Garments Perfected" },
  { value: "Luxury", label: "Attention to Detail" },
  { value: "Family", label: "Owned Atelier" }
];

function CategorySection({ category, index }: { category: any, index: number }) {
  const isBlack = index % 2 !== 0;
  const num = String(index + 1).padStart(2, "0");
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section 
      ref={ref}
      className={`relative w-full min-h-screen py-32 md:py-48 px-6 sm:px-12 md:px-24 overflow-hidden flex items-center ${isBlack ? 'bg-black text-white' : 'bg-white text-black'}`}
    >
      <div className="w-full max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        
        {/* Content Side */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={fadeIn}
          className={`lg:col-span-6 flex flex-col ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
        >
          <div className="mb-12">
            <span className={`text-[10px] md:text-xs tracking-[0.3em] uppercase ${isBlack ? 'text-white/40' : 'text-black/40'} block mb-6`}>
              {num}
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter uppercase leading-[0.85] mb-12">
              {category.title}
            </h2>
          </div>
          <ul className="space-y-4">
            {category.items.map((item: string, i: number) => (
              <motion.li 
                key={i} 
                variants={fadeIn}
                className={`text-lg md:text-xl font-light ${isBlack ? 'text-white/70' : 'text-black/70'} uppercase tracking-wider`}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Image Side */}
        <div className={`lg:col-span-6 h-[50vh] sm:h-[60vh] md:h-[80vh] w-full relative flex items-center justify-center ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
          <motion.div style={{ y }} className="relative w-full h-full">
            <Image 
              src={category.image} 
              alt={category.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={`object-contain grayscale transition-all duration-700 hover:scale-[1.03] hover:-translate-y-2 ${isBlack ? 'drop-shadow-[0_25px_50px_rgba(255,255,255,0.15)]' : 'drop-shadow-[0_25px_50px_rgba(0,0,0,0.3)]'}`}
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <main className="w-full relative bg-black text-white selection:bg-[#00FF66] selection:text-black">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 sm:px-12 md:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/asset/tools.png"
            alt="Atelier Tools"
            fill
            priority
            className="object-cover grayscale opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center"
        >
          <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#00FF66] mb-12 font-light">
            SADIES / SERVICES
          </p>
          <h1 className="text-[14vw] md:text-[12vw] font-light tracking-tighter uppercase leading-[0.85] mb-10">
            Services
          </h1>
          <p className="text-xl md:text-3xl lg:text-4xl font-light text-white/80 uppercase tracking-widest leading-relaxed">
            Every stitch. <br className="md:hidden" />
            Every fabric. <br className="md:hidden" />
            Every detail.
          </p>
        </motion.div>
      </section>

      {/* 2. Introduction */}
      <section className="w-full bg-white text-black py-40 md:py-56 px-6 sm:px-12 md:px-24 flex items-center justify-center text-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-light tracking-tighter uppercase leading-none mb-16">
            More than alterations.
          </h2>
          <p className="text-xl md:text-3xl font-light text-black/70 leading-relaxed mb-8">
            At SADIES, we don't simply repair garments. <br className="hidden md:block"/>
            We restore confidence, preserve memories and create the perfect fit.
          </p>
          <p className="text-lg md:text-2xl font-light text-black/50 uppercase tracking-widest">
            Every fabric deserves expert craftsmanship.
          </p>
        </motion.div>
      </section>

      {/* 3. Categories */}
      {categories.map((category, idx) => (
        <CategorySection key={idx} category={category} index={idx} />
      ))}

      {/* 4. Luxury Process Section */}
      <section className="w-full bg-white text-black py-32 md:py-48 px-6 sm:px-12 md:px-24">
        <div className="w-full max-w-screen-2xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="mb-24 md:mb-40"
          >
            <h2 className="text-6xl md:text-8xl font-light tracking-tighter uppercase">
              Our Process
            </h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8"
          >
            {processSteps.map((step, idx) => (
              <motion.div key={idx} variants={fadeIn} className="flex flex-col md:border-l md:border-black/20 md:pl-10">
                <span className="text-6xl md:text-8xl font-light text-black/10 tracking-tighter mb-8 leading-none">
                  {step.id}
                </span>
                <h3 className="text-2xl md:text-3xl font-light uppercase tracking-widest">
                  {step.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Why Choose SADIES */}
      <section className="w-full bg-[#0a0a0a] text-white py-32 md:py-48 px-6 sm:px-12 md:px-24">
        <div className="w-full max-w-screen-2xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 xl:gap-8 2xl:gap-16 text-center xl:text-left"
          >
            {stats.map((stat, idx) => (
              <motion.div key={idx} variants={fadeIn} className="flex flex-col items-center xl:items-start overflow-hidden">
                <span className="text-5xl md:text-6xl lg:text-7xl xl:text-4xl 2xl:text-5xl min-[1700px]:text-6xl font-light tracking-tighter uppercase mb-4 text-[#00FF66] break-words max-w-full">
                  {stat.value}
                </span>
                <h3 className="text-xs md:text-sm tracking-[0.2em] uppercase font-light text-white/70">
                  {stat.label}
                </h3>
              </motion.div>
            ))}
          </motion.div>
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
          <h2 className="text-5xl md:text-7xl lg:text-9xl font-light tracking-tighter uppercase leading-[0.9] max-w-5xl">
            Your garment deserves a second life.
          </h2>
        </motion.div>
      </section>

    </main>
  );
}
