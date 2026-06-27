"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Mobil Safari'de çökmeyi ve touch event kilitlenmesini engellemek için kontrol:
    if (typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0)) {
      setIsTouchDevice(true);
      return;
    }
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  // Generate an array for our thread segments
  const threadSegments = Array.from({ length: 8 });

  if (isTouchDevice) return null;

  return (
    <>
      {/* Needle point (head of the thread) */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      />

      {/* Thread tail with delayed spring motion */}
      {threadSegments.map((_, i) => (
        <motion.div
          key={i}
          className="fixed top-0 left-0 w-[2px] h-[2px] bg-white pointer-events-none z-[9998] mix-blend-difference"
          animate={{
            x: mousePosition.x - 1,
            y: mousePosition.y - 1,
          }}
          transition={{
            type: "spring",
            stiffness: 300 - (i * 30), // Less stiffness = more delay
            damping: 30 + (i * 2), // More damping = smoother drag
            mass: 0.1 + (i * 0.05) // Heavier segments at the end
          }}
        />
      ))}
    </>
  );
}
