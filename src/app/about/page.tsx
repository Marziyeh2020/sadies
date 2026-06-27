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
      staggerChildren: 0.2
    }
  }
};

const teamMembers = [
  {
    name: "Sara Hass",
    role: "Art Curator",
    image: "/asset/sara.avif"
  },
  {
    name: "Mahdi Haydari",
    role: "Business and Operations Director",
    image: "/asset/mahdi.avif"
  },
  {
    name: "Leyla Haydari",
    role: "Artist Director",
    image: "/asset/leila.avif"
  },
  {
    name: "Raziye Haydari",
    role: "Exhibitions and Events Coordinator",
    image: "/asset/raziyeh.avif"
  }
];

export default function AboutPage() {
  return (
    <main className="w-full relative bg-black text-white selection:bg-[#00FF66] selection:text-black">
      
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 sm:px-12 md:px-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="w-full max-w-7xl mx-auto flex flex-col items-center text-center mt-20"
        >
          <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#00FF66] mb-12 font-light">
            SADIES / ABOUT
          </p>
          <h1 className="text-[12vw] md:text-[9vw] font-light tracking-tighter uppercase leading-[0.85] mb-10">
            Our Story
          </h1>
          <p className="max-w-2xl text-lg md:text-2xl font-light text-white/80 leading-relaxed">
            Family-owned tailoring, crafted with precision for over 20 years.
          </p>
        </motion.div>
      </section>

      {/* 2. Story Section */}
      <section className="w-full bg-white text-black py-32 md:py-48 px-6 sm:px-12 md:px-24">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="md:col-span-6 flex items-center"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter leading-[0.95] uppercase">
              “Tailoring is our <span className="text-black/50 italic">family</span> tradition.”
            </h2>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="md:col-span-6 flex flex-col justify-center space-y-10 text-base md:text-lg lg:text-xl font-light text-black/80 leading-relaxed"
          >
            <p>
              At Sadie’s Alterations, tailoring is not just our business — it’s our family tradition. For over 20 years, we have been a proud, family-owned and operated shop, passing down the art of tailoring from one generation to the next. Each family member brings their unique skill set and attention to detail, ensuring that every stitch reflects our commitment to excellence.
            </p>
            <p>
              At the heart of Sadie’s Alterations is the belief that great service starts with family. From the moment you walk through our doors, you’ll notice the difference: a warm, welcoming environment where every customer is treated with care and respect. We know that trust is earned, and for over two decades, we’ve built that trust by providing impeccable tailoring services with a personal touch.
            </p>
            <p>
              Our family-run shop ensures that every garment we handle receives the attention and precision it deserves. Whether you need a quick fix or a complete alteration, our team works collaboratively to meet your needs with efficiency, quality, and professionalism.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. Family Atelier Section */}
      <section className="w-full bg-black text-white py-40 md:py-56 px-6 sm:px-12 md:px-24 flex items-center justify-center text-center border-t border-white/10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tighter leading-[0.85] uppercase mb-16">
            Every stitch <br className="hidden md:block"/> carries our name.
          </h2>
          <p className="max-w-2xl mx-auto text-lg md:text-2xl font-light text-white/60 leading-relaxed">
            We handle each piece as if it were our own. Trust, care, and a deeply personal service form the foundation of our atelier. When you leave your garments with us, you are leaving them with family.
          </p>
        </motion.div>
      </section>

      {/* 4. Team Section */}
      <section className="w-full bg-[#0a0a0a] text-white py-32 md:py-48 px-6 sm:px-12 md:px-24">
        <div className="w-full max-w-screen-2xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="flex justify-between items-end mb-24 md:mb-32"
          >
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter uppercase">
              Meet the Family
            </h2>
            <div className="hidden md:block w-32 h-[1px] bg-[#00FF66] mb-4"></div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
          >
            {teamMembers.map((member, idx) => (
              <motion.div key={idx} variants={fadeIn} className="group cursor-none">
                <div className="relative w-full aspect-[3/4] overflow-hidden mb-8 bg-neutral-900">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover grayscale transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
                  />
                </div>
                <div className="relative">
                  <h3 className="text-2xl md:text-3xl font-light tracking-tight uppercase mb-2">
                    {member.name}
                  </h3>
                  <p className="text-[#00FF66] text-sm uppercase tracking-widest font-light">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Values Section */}
      <section className="w-full bg-white text-black py-32 md:py-48 px-6 sm:px-12 md:px-24">
        <div className="w-full max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 border-t border-black pt-20"
          >
            <motion.div variants={fadeIn} className="flex flex-col">
              <span className="text-[10px] tracking-[0.2em] uppercase text-black/40 mb-8">01</span>
              <h3 className="text-3xl md:text-4xl font-light uppercase tracking-tight mb-6">Precision</h3>
              <p className="text-lg text-black/70 font-light leading-relaxed">
                Every measurement matters.
              </p>
            </motion.div>
            <motion.div variants={fadeIn} className="flex flex-col md:border-l md:border-black/20 md:pl-12">
              <span className="text-[10px] tracking-[0.2em] uppercase text-black/40 mb-8">02</span>
              <h3 className="text-3xl md:text-4xl font-light uppercase tracking-tight mb-6">Care</h3>
              <p className="text-lg text-black/70 font-light leading-relaxed">
                Every customer is treated personally.
              </p>
            </motion.div>
            <motion.div variants={fadeIn} className="flex flex-col md:border-l md:border-black/20 md:pl-12">
              <span className="text-[10px] tracking-[0.2em] uppercase text-black/40 mb-8">03</span>
              <h3 className="text-3xl md:text-4xl font-light uppercase tracking-tight mb-6">Tradition</h3>
              <p className="text-lg text-black/70 font-light leading-relaxed">
                Over 20 years of family craftsmanship.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="w-full bg-black text-white py-40 md:py-56 px-6 sm:px-12 md:px-24 flex flex-col items-center justify-center text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="flex flex-col items-center"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter uppercase leading-[0.9] max-w-4xl">
            Ready for a garment that fits perfectly?
          </h2>
        </motion.div>
      </section>

    </main>
  );
}
