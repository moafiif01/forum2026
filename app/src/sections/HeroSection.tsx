import GlassPill from '@/components/GlassPill';

export default function HeroSection() {  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden py-32">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="sticky top-0 h-screen w-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center"
          >
            <source src="/Forum Ensam Rabat.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />
        </div>
      </div>
      {/* Hero Content */}
      <div className="relative z-10 container-padding w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-pink/40 bg-pink/10 backdrop-blur-md mb-10 shadow-glow-pink">
          <span className="font-montserrat text-xs font-bold text-pink tracking-[0.2em] uppercase">
            2ème Édition
          </span>
        </div>

        <h1 className="font-orbitron font-black text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] tracking-tight leading-[1.1] mb-8">
          <span className="text-transparent" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.9)' }}>
            FORUM
          </span>
          <br />
          <span className="text-pink glow-pink tracking-[0.02em]">
            ENSAM-RABAT
          </span>
        </h1>

        <p className="font-montserrat text-sm sm:text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed tracking-wide mb-10 drop-shadow-lg">
          L'INGÉNIEUR AU CŒUR DE LA TRANSFORMATION INDUSTRIELLE :<br className="hidden md:block" /> INNOVER POUR LE MAROC DE DEMAIN
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-6">
          <GlassPill>
            <span className="font-orbitron font-bold text-white text-lg tracking-wider mr-3">13 - 14</span>
            <div className="h-4 w-[1px] bg-white/30 mr-3"></div>
            <span className="font-montserrat text-sm text-pink font-semibold tracking-widest uppercase">Oct 2026</span>
          </GlassPill>
        </div>
      </div>
    </section>
  );
}
