export default function HeroSection() {

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Forum Ensam Rabat.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
      </div>
      {/* Hero Content */}
      <div className="relative z-10 container-padding w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
        <div className="inline-block px-4 py-1.5 rounded-full border border-pink/30 bg-pink/10 backdrop-blur-md mb-8">
          <span className="font-montserrat text-[10px] sm:text-xs font-semibold text-pink tracking-[0.2em] uppercase">
            2ème Édition
          </span>
        </div>

        <h1 className="font-orbitron font-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white tracking-[0.05em] leading-[1.1] mb-6 drop-shadow-2xl">
          FORUM <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-pink to-gold glow-pink">
            ENSAM-RABAT
          </span>
        </h1>

        <p className="font-montserrat text-sm sm:text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed tracking-wide mb-10 drop-shadow-lg">
          L'INGÉNIEUR AU CŒUR DE LA TRANSFORMATION INDUSTRIELLE :<br className="hidden md:block" /> INNOVER POUR LE MAROC DE DEMAIN
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 bg-black/40 backdrop-blur-md">
            <span className="font-orbitron font-bold text-white text-lg tracking-wider">13 - 14</span>
            <div className="h-4 w-[1px] bg-white/30"></div>
            <span className="font-montserrat text-sm text-pink font-semibold tracking-widest uppercase">Oct 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}
