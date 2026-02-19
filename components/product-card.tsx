"use client";

import { motion } from "framer-motion";
import type { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
  delay?: number;
}

export function ProductCard({ product, delay = 0 }: ProductCardProps) {
  const isExternal = product.url.startsWith("http");

  return (
    <motion.a
      href={product.url}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] }}
      whileHover={{ y: -4 }}
      className="group relative block rounded-2xl border border-[rgba(245,240,232,0.06)] bg-[#111111] p-8 transition-colors duration-500 hover:border-[rgba(196,149,106,0.2)] hover:bg-[#141414]"
    >
      {/* Top accent line on hover */}
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#C4956A]/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Index */}
      <span className="font-sans text-[11px] tracking-[0.2em] text-[#6B6560]">
        {product.index}
      </span>

      {/* Name */}
      <h3 className="mt-5 font-serif text-[22px] text-[#F5F0E8]">
        {product.name}
      </h3>

      {/* Tagline */}
      <p className="mt-2 text-[15px] leading-relaxed text-[#B8B0A2]">
        {product.tagline}
      </p>

      {/* Arrow indicator */}
      <div className="mt-6 flex items-center gap-2 text-[13px] text-[#C4956A] opacity-0 transition-all duration-500 group-hover:opacity-100">
        <span>Explore</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          className="transition-transform duration-300 group-hover:translate-x-0.5"
        >
          <path
            d="M3 8h10M9 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </motion.a>
  );
}
