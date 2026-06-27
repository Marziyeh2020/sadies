"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Materials() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    if (isMobile) return;

    const section = sectionRef.current;
    const container = containerRef.current;

    if (!section || !container) return;

    // Horizontal Scroll Animation (Desktop only)
    gsap.to(container, {
      xPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1,
        end: () => "+=" + window.innerWidth,
      },
    });
  }, { scope: wrapperRef });

  // Add mobile layout CSS directly via responsive classes
  return (
    <div ref={wrapperRef}>
      <section ref={sectionRef} className="relative w-full md:h-screen bg-black text-white overflow-hidden">
        {/* Container changes from flex w-[200vw] on desktop to flex-col w-full on mobile */}
        <div 
          ref={containerRef} 
          className="flex flex-col md:flex-row w-full md:w-[200vw] h-auto md:h-full"
        >
          {/* Slide 1 */}
          <div className="w-full md:w-screen h-[50vh] md:h-full flex items-center justify-center relative">
            <div className="absolute inset-0 z-0 opacity-40">
              <Image
                src="/asset/thread.png"
                alt="Luxury Threads"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="z-10 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light tracking-tight uppercase leading-none mix-blend-difference text-center max-w-[90vw] md:max-w-[80vw]">
              The details nobody sees
            </h2>
          </div>
          
          {/* Slide 2 */}
          <div className="w-full md:w-screen h-[50vh] md:h-full flex items-center justify-center bg-zinc-950 px-4">
            <h2 className="z-10 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light tracking-tight uppercase leading-none text-center max-w-[90vw] md:max-w-[80vw]">
              define the result.
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}
