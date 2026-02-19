import Reveal from "@/components/reveal";

export default function Community() {
  return (
    <section className="photo-section min-h-[80vh]">
      {/* Background image */}
      <div className="photo-section-bg">
        <img
          src="/community-bg.jpg"
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
            "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.8) 100%)",
        }}
      />

      {/* Content */}
      <div className="photo-section-content px-6 sm:px-12 md:px-20 py-24 sm:py-32">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2
              className="font-[family-name:var(--font-display)] text-offwhite leading-[0.9] tracking-wide"
              style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}
            >
              COMMUNITY
              <br />
              IS OUR DNA
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-offwhite/70 text-base sm:text-lg md:text-xl max-w-xl mt-8 leading-relaxed">
              Every product we build starts with people. Not users, not
              customers — humans. We believe the best things are built by
              communities, not corporations.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
