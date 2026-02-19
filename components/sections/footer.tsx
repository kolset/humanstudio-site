export default function Footer() {
  return (
    <footer className="bg-black border-t border-offwhite/10 py-12 sm:py-16 px-6 sm:px-12 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="font-[family-name:var(--font-display)] text-offwhite text-2xl tracking-wider">
            HUMAN STUDIO
          </p>
          <p className="text-midgray text-sm mt-1">Austin, Texas</p>
        </div>
        <div className="flex gap-8">
          <a
            href="https://www.linkedin.com/in/torsteinj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-midgray hover:text-offwhite text-xs tracking-[0.2em] uppercase transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/tkolset"
            target="_blank"
            rel="noopener noreferrer"
            className="text-midgray hover:text-offwhite text-xs tracking-[0.2em] uppercase transition-colors"
          >
            X
          </a>
          <a
            href="mailto:torstein.kolset@gmail.com"
            className="text-midgray hover:text-offwhite text-xs tracking-[0.2em] uppercase transition-colors"
          >
            Email
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-10">
        <hr className="rule-thin" />
        <p className="text-midgray/50 text-xs mt-6 tracking-wider">
          &copy; {new Date().getFullYear()} Human Studio Austin. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
