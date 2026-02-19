import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  const inner = (
    <div className="product-card p-6 sm:p-8 flex flex-col gap-4 h-full">
      <div className="flex items-start justify-between">
        <span className="product-number font-[family-name:var(--font-display)] text-5xl sm:text-6xl leading-none text-midgray">
          {product.number}
        </span>
        <span className="product-tag text-xs tracking-[0.2em] uppercase border border-offwhite/30 px-3 py-1 text-midgray">
          {product.tag}
        </span>
      </div>
      <h3 className="product-name font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-offwhite leading-none tracking-wide">
        {product.name}
      </h3>
      <p className="product-desc text-midgray text-sm sm:text-base leading-relaxed mt-auto">
        {product.description}
      </p>
    </div>
  );

  if (product.url && product.url !== "#") {
    return (
      <a
        href={product.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {inner}
      </a>
    );
  }

  return inner;
}
