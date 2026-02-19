import Reveal from "@/components/reveal";

export default function Philosophy() {
  return (
    <section className="bg-black py-24 sm:py-32 md:py-40 px-6 sm:px-12 md:px-20">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <hr className="rule mb-12 sm:mb-16" />
        </Reveal>

        <Reveal delay={100}>
          <blockquote
            className="font-[family-name:var(--font-display)] text-offwhite leading-[1.05] tracking-wide"
            style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
          >
            WE DON&rsquo;T BUILD APPS.
            <br />
            WE BUILD FOR HUMANS.
            <br />
            <span className="text-midgray">
              TOOLS THAT MAKE PEOPLE
              <br />
              MORE ALIVE.
            </span>
          </blockquote>
        </Reveal>

        <Reveal delay={200}>
          <p className="text-midgray text-base sm:text-lg md:text-xl max-w-2xl mt-10 sm:mt-14 leading-relaxed">
            Human Studio is a product studio in Austin, Texas. We make software,
            communities, and experiences that serve the human.
            No dark patterns. No engagement traps. Just things worth using.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <hr className="rule mt-12 sm:mt-16" />
        </Reveal>
      </div>
    </section>
  );
}
