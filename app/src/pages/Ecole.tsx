import { useScrollReveal } from '@/hooks/useScrollReveal';
import SectionHeader from '@/components/SectionHeader';
import { Settings, Box, Cpu, Building2, Cog, Zap, Factory, Antenna, Mountain } from 'lucide-react';

interface Filiere {
  title: string;
  options: string[];
  icon: React.ReactNode;
}

const filieres: Filiere[] = [
  {
    title: 'GÉNIE INDUSTRIEL',
    options: ['INGENIERIE DES OPÉRATIONS ET DE LA LOGISTIQUE (IOL)', 'INGENIERIE DES PROJETS (IP)'],
    icon: <Settings size={32} />,
  },
  {
    title: 'GÉNIE MODÉLISATION INFORMATIQUE ET SCIENTIFIQUE (MIS)',
    options: [],
    icon: <Box size={32} />,
  },
  {
    title: 'GÉNIE INFORMATIQUE ET DIGITALISATION (ID)',
    options: ['SIGL : SYSTEMES D\'INFORMATIONS ET GENIE LOGICIEL', 'SCYBER : SYSTEMES ET CYBERSECURITE', 'IADATA: INTELLIGENCE ARTIFICIELLE ET DATA'],
    icon: <Cpu size={32} />,
  },
  {
    title: 'GÉNIE CIVIL',
    options: ['BATIMENTS PONTS ET CHAUSSÉES', 'HYDRAULIQUE', 'INFRASTRUCTURES DE TRANSPORT ET MOBILITÉ', 'ENVIRONNEMENT'],
    icon: <Building2 size={32} />,
  },
  {
    title: 'GÉNIE MÉCANIQUE',
    options: ['CONCEPTION ET PRODUCTION INDUSTRIELLE', 'INDUSTRIE AÉRONAUTIQUE', 'AUTOMOBILE'],
    icon: <Cog size={32} />,
  },
  {
    title: 'GÉNIE ÉLECTRIQUE',
    options: ['ÉLECTROTECHNIQUE ET ÉLECTRONIQUE DE PUISSANCE', 'AUTOMATISME ET INFORMATIQUE INDUSTRIELLE'],
    icon: <Zap size={32} />,
  },
  {
    title: 'GÉNIE DES PROCÉDÉS INDUSTRIELS (PI)',
    options: [],
    icon: <Factory size={32} />,
  },
  {
    title: 'GÉNIE RÉSEAUX ET TÉLÉCOMMUNICATIONS (RT)',
    options: [],
    icon: <Antenna size={32} />,
  },
  {
    title: 'GÉNIE MINÉRAL',
    options: ['HYDROGÉOLOGIE ET GÉOLOGIE DE L\'INGENIEUR'],
    icon: <Mountain size={32} />,
  },
];

export default function Ecole() {
  const descRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>({ children: true, stagger: 0.08 });

  return (
    <div className="relative min-h-screen bg-black">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1562774053-701939374585?w=1920&q=80')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        </div>
        
        <div className="relative z-10 text-center container-padding pt-24">
          <h1 className="font-orbitron font-black text-3xl md:text-5xl lg:text-6xl text-purple glow-purple tracking-wide leading-tight">
            L'ÉCOLE MOHAMMADIA
            <br />
            D'INGÉNIEURS
          </h1>
        </div>
      </section>

      {/* Description */}
      <section className="section-padding">
        <div className="container-padding max-w-5xl mx-auto" ref={descRef}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-montserrat text-base md:text-lg text-white/70 leading-relaxed mb-6">
                Créée en 1959 par Sa Majesté le Roi Mohammed V, que Dieu ait son âme,{' '}
                <span className="text-white font-semibold">L'École Mohammadia d'Ingénieurs</span>{' '}
                est la première grande école d'Ingénieurs au Maroc. Au fil des années,
                l'EMI a su demeurer l'École de référence au Maroc grâce à la qualité de la formation qui
                y est dispensée et aussi grâce au niveau de la recherche qui y est menée.
              </p>
              <p className="font-montserrat text-base md:text-lg text-white/70 leading-relaxed">
                <span className="text-white font-semibold">L'ÉCOLE MOHAMMADIA D'INGÉNIEURS</span>{' '}
                met à la disposition de ses étudiants 19 options réparties sur 9 filières englobant un large panel de domaines d'Ingénierie.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-purple/20">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#0a0010] to-[#001510] flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple/20 to-pink/20 border border-purple/30 flex items-center justify-center">
                  <span className="font-orbitron font-bold text-4xl text-purple/60">EMI</span>
                </div>
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
            title="FILIÈRES D'EXCELLENCE"
            subtitle="UNE DIVERSITÉ DE CHOIX POUR FACONNER VOTRE AVENIR DANS L'INGENIERIE"
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
