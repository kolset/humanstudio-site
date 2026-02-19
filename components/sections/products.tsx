"use client";

import { Reveal } from "@/components/reveal";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";

export function Products() {
  return (
    <section className="relative px-6 py-32 md:py-48">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-sans text-[11px] font-medium tracking-[0.35em] uppercase text-[#C4956A]">
            What We Build
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3rem)] text-[#F5F0E8]">
            Five Products, One Mission
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <ProductCard
              key={product.name}
              product={product}
              delay={0.08 * i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
