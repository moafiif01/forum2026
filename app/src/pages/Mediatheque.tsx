import { Download } from 'lucide-react';

export default function Mediatheque() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-black/80" />
        {/* Light rays */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 30% 50%, rgba(0,100,255,0.05) 0%, transparent 50%),
              radial-gradient(ellipse at 70% 30%, rgba(200,100,0,0.03) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen pt-20">
        <div className="container-padding text-center max-w-3xl">
          <h1 className="font-orbitron font-bold text-2xl md:text-4xl lg:text-5xl text-white tracking-wide leading-tight mb-4">
            ARCHIVE DE NOTRE HISTOIRE GLORIEUSE
          </h1>
          <h2 className="font-orbitron font-bold text-xl md:text-3xl lg:text-4xl text-white/90 tracking-wide leading-tight mb-12">
            PORTAIL SUR NOTRE FUTURE PROMETTEUR
          </h2>

          <button className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-white/5 border border-white/20 font-montserrat text-sm tracking-[0.15em] text-white/70 hover:bg-white/10 hover:border-white/30 hover:text-white transition-all duration-300 group">
            <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
            Télécharger La Revue Digitale
          </button>
        </div>
      </div>
    </div>
  );
}
