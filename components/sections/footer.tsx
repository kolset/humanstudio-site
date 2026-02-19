import { products } from "@/lib/products";

export function Footer() {
  return (
    <footer className="border-t border-[rgba(245,240,232,0.06)] px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          {/* Left */}
          <div>
            <p className="font-serif text-xl text-[#F5F0E8]">Human Studio</p>
            <p className="mt-2 text-sm text-[#6B6560]">Austin, TX</p>
          </div>

          {/* Product links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {products.map((product) => {
              const isExternal = product.url.startsWith("http");
              return (
                <a
                  key={product.name}
                  href={product.url}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="text-sm text-[#6B6560] transition-colors duration-300 hover:text-[#C4956A]"
                >
                  {product.name}
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex items-center justify-between border-t border-[rgba(245,240,232,0.04)] pt-8">
          <p className="text-xs text-[#6B6560]/60">
            &copy; {new Date().getFullYear()} Human Studio Austin LLC
          </p>
          <div className="mx-8 hidden h-px flex-1 bg-gradient-to-r from-transparent via-[rgba(245,240,232,0.04)] to-transparent sm:block" />
          <p className="text-xs text-[#6B6560]/60">Technology for humans.</p>
        </div>
      </div>
    </footer>
  );
}
