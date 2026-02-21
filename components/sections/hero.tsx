import Reveal from "@/components/reveal";

export default function Hero() {
  return (
    <section className="photo-section min-h-screen">
      {/* Background video */}
      <div className="photo-section-bg">
        <video
          src="/hero-bg.mp4"
          poster="/hero-bg.jpg"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient overlay — heavy at bottom for text legibility */}
      <div
        className="photo-section-overlay"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      {/* Content */}
      <div className="photo-section-content flex flex-col items-center justify-end min-h-screen pb-16 sm:pb-24 px-4">
        <Reveal>
          <h1
            className="hero-title font-[family-name:var(--font-display)] text-offwhite text-center leading-[0.85] tracking-[0.04em]"
            style={{ fontSize: "15vw" }}
          >
            ALIVE
            <br />
            STUDIO
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-offwhite/70 text-lg sm:text-xl md:text-2xl text-center mt-6 tracking-[0.15em] uppercase font-light">
            Build for humans — Austin, TX
          </p>
        </Reveal>
      </div>
    </section>
  );
}
