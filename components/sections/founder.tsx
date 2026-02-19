"use client";

import { Reveal } from "@/components/reveal";

export function Founder() {
  return (
    <section className="relative px-6 py-32 md:py-48">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-start gap-12 md:flex-row md:items-center md:gap-20">
          {/* Photo placeholder */}
          <Reveal direction="left">
            <div className="relative h-44 w-44 flex-shrink-0 overflow-hidden rounded-full border border-[rgba(196,149,106,0.12)]">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 40% 35%, #1a1816 0%, #0e0d0c 100%)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-3xl text-[#C4956A]/25">
                  TK
                </span>
              </div>
            </div>
          </Reveal>

          {/* Text */}
          <div>
            <Reveal delay={0.1}>
              <p className="font-sans text-[11px] font-medium tracking-[0.35em] uppercase text-[#C4956A]">
                Founder
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <h2 className="mt-3 font-serif text-[clamp(1.8rem,3vw,2.5rem)] text-[#F5F0E8]">
                TJ Kolset
              </h2>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="mt-1.5 text-[13px] text-[#6B6560]">Austin, TX</p>
            </Reveal>

            <Reveal delay={0.35}>
              <p className="mt-6 max-w-lg text-[17px] leading-[1.75] text-[#B8B0A2]">
                Builder, not just founder. Obsessed with the intersection of
                technology and human potential. Building five products
                simultaneously because the best ideas don&apos;t wait in line.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
