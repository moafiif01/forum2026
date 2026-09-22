import GlassPill from '@/components/GlassPill';

export default function HeroSection() {  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden py-32">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src="/Forum Ensam Rabat.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-slate-50/70 to-slate-50" />
      </div>
      {/* Hero Content */}
      <div className="relative z-10 container-padding w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-teal/40 bg-teal/10 backdrop-blur-md mb-10 shadow-sm">
          <span className="font-montserrat text-xs font-bold text-teal tracking-[0.2em] uppercase">
            2ème Édition
          </span>
        </div>

        <h1 className="font-orbitron font-black text-4xl sm:text-5xl md:text-7xl lg:text-[6.5rem] tracking-tight leading-[1.1] mb-8">
          <span className="block text-navy mb-2">
            FORUM
          </span>
          <span className="block text-teal tracking-[0.02em]">
            ENSAM-RABAT
          </span>
        </h1>

        <p className="font-montserrat text-sm sm:text-base md:text-lg text-navy max-w-4xl mx-auto leading-relaxed tracking-wide mb-10 font-medium">
          La mutation du métier d'ingénieur à l'ère de l'IA :<br className="hidden md:block" /> Quelles stratégies académi-co-industrielles pour positionner le Maroc comme hub de l'innovation ?
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-6">
          <GlassPill>
            <span className="font-orbitron font-bold text-navy text-lg tracking-wider mr-3">11 - 12</span>
            <div className="h-4 w-[1px] bg-navy/30 mr-3"></div>
            <span className="font-montserrat text-sm text-teal font-semibold tracking-widest uppercase">Nov 2026</span>
          </GlassPill>
        </div>
      </div>
    </section>
  );
}
