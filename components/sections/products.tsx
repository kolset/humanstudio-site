import { products } from "@/lib/products";
import ProductCard from "@/components/product-card";
import Reveal from "@/components/reveal";

export default function Products() {
  return (
    <section className="bg-black py-24 sm:py-32 md:py-40 px-6 sm:px-12 md:px-20">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2
            className="font-[family-name:var(--font-display)] text-offwhite leading-none tracking-wide mb-12 sm:mb-16"
            style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
          >
            PROJECTS
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {products.map((product, i) => (
            <Reveal key={product.number} delay={i * 100}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
