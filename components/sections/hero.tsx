"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
      {/* Warm radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(196, 149, 106, 0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 text-center">
        {/* Location tag */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          className="font-sans text-[11px] font-medium tracking-[0.35em] uppercase text-[#C4956A]"
        >
          Austin, Texas
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="mt-10 font-serif text-[clamp(3.2rem,13vw,11rem)] font-normal leading-[0.88] tracking-[0.06em] text-[#F5F0E8]"
        >
          HUMAN
          <br />
          STUDIO
        </motion.h1>

        {/* Accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
          className="mx-auto mt-12 h-px w-20 origin-center bg-[#C4956A]/40"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: [0.25, 0.4, 0.25, 1] }}
          className="mx-auto mt-10 max-w-md font-sans text-[17px] leading-relaxed text-[#B8B0A2]"
        >
          Technology that makes a positive difference for humans.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="absolute bottom-14 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-px bg-gradient-to-b from-[#C4956A]/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
