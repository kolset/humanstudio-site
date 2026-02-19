"use client";

import { Reveal } from "@/components/reveal";

const INNER_NODES = [45, 135, 225, 315];
const OUTER_NODES = [0, 72, 144, 216, 288];

export function Community() {
  return (
    <section className="relative overflow-hidden px-6 py-32 md:py-48">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(196, 149, 106, 0.05) 0%, transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center">
          {/* Concentric circle visualization */}
          <Reveal>
            <div className="relative mb-20 h-[280px] w-[280px] sm:h-[340px] sm:w-[340px] md:h-[400px] md:w-[400px]">
              {/* Rings */}
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="absolute rounded-full border"
                  style={{
                    inset: `${i * 38 + 12}px`,
                    borderColor: `rgba(196, 149, 106, ${0.05 + (3 - i) * 0.035})`,
                  }}
                />
              ))}

              {/* Center glow */}
              <div
                className="absolute rounded-full"
                style={{
                  inset: "32%",
                  background:
                    "radial-gradient(circle, rgba(196, 149, 106, 0.12) 0%, transparent 70%)",
                }}
              />

              {/* Center dot */}
              <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C4956A]/60" />

              {/* Inner ring nodes */}
              {INNER_NODES.map((deg) => (
                <div
                  key={deg}
                  className="absolute h-1.5 w-1.5 rounded-full bg-[#C4956A]/30"
                  style={{
                    left: `${50 + 28 * Math.cos((deg * Math.PI) / 180)}%`,
                    top: `${50 + 28 * Math.sin((deg * Math.PI) / 180)}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                />
              ))}

              {/* Outer ring nodes */}
              {OUTER_NODES.map((deg) => (
                <div
                  key={`o-${deg}`}
                  className="absolute h-1 w-1 rounded-full bg-[#C4956A]/15"
                  style={{
                    left: `${50 + 42 * Math.cos((deg * Math.PI) / 180)}%`,
                    top: `${50 + 42 * Math.sin((deg * Math.PI) / 180)}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                />
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="font-sans text-[11px] font-medium tracking-[0.35em] uppercase text-[#C4956A]">
              Our Foundation
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <h2 className="mt-6 font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.15] text-[#F5F0E8]">
              Community is our DNA
            </h2>
          </Reveal>

          <Reveal delay={0.35}>
            <p className="mx-auto mt-8 max-w-xl text-[17px] leading-[1.75] text-[#B8B0A2]">
              Every product we build grows from community insight. We
              don&apos;t design in isolation&nbsp;&mdash; we listen, build, and
              iterate alongside the people who use our tools. Community
              isn&apos;t a feature. It&apos;s the architecture.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
