"use client";

import { Reveal } from "@/components/reveal";

export function Philosophy() {
  return (
    <section className="relative px-6 py-32 md:py-48">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="font-serif text-[clamp(1.9rem,4.5vw,3.5rem)] leading-[1.18] text-[#F5F0E8]">
            We build technology for the people who use it&nbsp;&mdash; not the
            metrics that measure it.
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-16 h-px w-16 bg-[#C4956A]/30" />
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-12 max-w-2xl text-[17px] leading-[1.75] text-[#B8B0A2]">
            We believe the best products are built within communities, not for
            them. Every product we ship starts with humans and ends with humans.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="mt-6 max-w-2xl text-[17px] leading-[1.75] text-[#B8B0A2]">
            Five products. One studio. A single belief that technology should
            serve the humans who use it&nbsp;&mdash; helping them grow, connect,
            create, and become who they want to be.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
