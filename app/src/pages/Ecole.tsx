import { useScrollReveal } from '@/hooks/useScrollReveal';
import SectionHeader from '@/components/SectionHeader';
import { Settings, Box, Cpu, Cog, Zap, Factory, Plane, Brain, Activity } from 'lucide-react';

interface Filiere {
  title: string;
  options: string[];
  icon: React.ReactNode;
}

const filieres: Filiere[] = [
  {
    title: 'GÉNIE MÉCANIQUE',
    options: ['Conception, Fabrication, Modélisation', 'Industrie 4.0 & Fabrication Additive'],
    icon: <Cog size={32} />,
  },
  {
    title: 'GÉNIE ÉLECTRIQUE',
    options: ['Électrotechnique & Électronique', 'Automatisation & Systèmes Embarqués'],
    icon: <Zap size={32} />,
  },
  {
    title: 'GÉNIE ÉNERGÉTIQUE ET ENVIRONNEMENT',
    options: ['Performance Énergétique', 'Énergies Renouvelables & Décarbonation'],
    icon: <Factory size={32} />,
  },
  {
    title: 'MATHÉMATIQUES APPLIQUÉES ET GÉNIE INFORMATIQUE',
    options: ['Intelligence Artificielle', 'Cybersécurité & Systèmes d\'Information'],
    icon: <Cpu size={32} />,
  },
  {
    title: 'INGÉNIERIE DES TECHNOLOGIES DE LA SANTÉ',
    options: ['Technologies Médicales', 'Instrumentation Biomédicale'],
    icon: <Activity size={32} />,
  },
  {
    title: 'MANAGEMENT, COMMUNICATION ET CULTURE',
    options: ['Stratégie & Communication', 'Soft Skills & Enjeux Citoyens'],
    icon: <Brain size={32} />,
  },
];

export default function Ecole() {
  const descRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>({ children: true, stagger: 0.08 });

  return (
    <div className="relative min-h-screen bg-black">
      {/* Title */}
      <section className="pt-32 pb-12 bg-black text-center relative z-10">
        <h1 className="font-orbitron font-black text-3xl md:text-5xl lg:text-6xl text-purple glow-purple tracking-wide leading-tight">
          ÉCOLE NATIONALE SUPÉRIEURE
          <br />
          D'ARTS ET MÉTIERS
          <br />
          DE RABAT
        </h1>
      </section>

      {/* Hero Video */}
      <section className="relative min-h-[120vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/school_video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
        </div>
      </section>

      {/* Description */}
      <section className="section-padding">
        <div className="container-padding max-w-5xl mx-auto" ref={descRef}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-montserrat text-base md:text-lg text-white/70 leading-relaxed mb-6">
                L'École Nationale Supérieure d'Arts et Métiers de Rabat ({' '}
                <span className="text-white font-semibold">ENSAM Rabat</span>{' '}
                ) est une grande école publique d'ingénieurs, relevant de l'Université Mohammed V de Rabat. Elle a pour mission la formation d'ingénieurs d'État hautement qualifiés, capables de répondre aux enjeux technologiques, industriels et sociétaux contemporains.
              </p>
              <p className="font-montserrat text-base md:text-lg text-white/70 leading-relaxed">
                <span className="text-white font-semibold">ENSAM RABAT</span>{' '}
                propose 8 filières d'Ingénieur d'État couvrant un large spectre d'expertises, allant de la mécanique et l'aéronautique à l'intelligence artificielle et au génie biomédical.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-purple/20 bg-white">
              <div className="aspect-[4/3] flex items-center justify-center p-8">
                <img src="/logo_ensam.jpg" alt="ENSAM Rabat Logo" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filières d'Excellence */}
      <section className="section-padding relative">
        {/* Purple glow background */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at 50% 0%, rgba(156,39,176,0.08) 0%, transparent 50%),
                radial-gradient(ellipse at 80% 50%, rgba(0,100,200,0.05) 0%, transparent 40%)
              `,
            }}
          />
        </div>

        <div className="container-padding max-w-6xl mx-auto relative z-10">
          <SectionHeader
            title="DÉPARTEMENTS D'EXCELLENCE"
            subtitle="UNE ORGANISATION ACADÉMIQUE AUTOUR DE SIX DÉPARTEMENTS SPÉCIALISÉS"
            glowColor="purple"
          />

          <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filieres.map((filiere) => (
              <div
                key={filiere.title}
                className="bg-[#111] rounded-2xl p-6 md:p-8 border border-white/5 hover:border-purple/30 hover:shadow-[0_0_20px_rgba(156,39,176,0.1)] transition-all duration-300 flex flex-col min-h-[280px]"
              >
                <h3 className="font-montserrat font-bold text-sm text-white tracking-wider mb-4">
                  {filiere.title}
                </h3>
                
                {filiere.options.length > 0 && (
                  <ul className="space-y-2 flex-1">
                    {filiere.options.map((opt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-pink mt-2 shrink-0" />
                        <span className="font-montserrat text-xs text-white/60 leading-relaxed">
                          {opt}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-auto pt-6">
                  <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60">
                    {filiere.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
