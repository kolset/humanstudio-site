import Reveal from "@/components/reveal";

export default function Founder() {
  return (
    <section className="photo-section min-h-[80vh]">
      {/* Background image */}
      <div className="photo-section-bg">
        <img
          src="/studio-bg.jpg"
          alt=""
          role="presentation"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark overlay */}
      <div
        className="photo-section-overlay"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.3) 100%)",
        }}
      />

      {/* Content */}
      <div className="photo-section-content px-6 sm:px-12 md:px-20 py-24 sm:py-32">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-offwhite/50 text-sm tracking-[0.3em] uppercase mb-4">
              Founder
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2
              className="font-[family-name:var(--font-display)] text-offwhite leading-[0.9] tracking-wide"
              style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}
            >
              TJ KOLSET
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-offwhite/70 text-base sm:text-lg md:text-xl max-w-lg mt-8 leading-relaxed">
              Founder, CTO, board member, angel investor. I make things for
              humans. Based in Austin, Texas — originally from Norway.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="flex gap-8 mt-8">
              <a
                href="https://www.linkedin.com/in/torsteinj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-offwhite/50 hover:text-offwhite text-sm tracking-[0.2em] uppercase transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com/tkolset"
                target="_blank"
                rel="noopener noreferrer"
                className="text-offwhite/50 hover:text-offwhite text-sm tracking-[0.2em] uppercase transition-colors"
              >
                X / Twitter
              </a>
              <a
                href="mailto:torstein.kolset@gmail.com"
                className="text-offwhite/50 hover:text-offwhite text-sm tracking-[0.2em] uppercase transition-colors"
              >
                Email
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
