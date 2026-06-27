import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import SectionHeader from '@/components/SectionHeader';

interface ValueTab {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  quote: string;
  images: string[];
}

const valuesData: ValueTab[] = [
  {
    id: 'serment',
    title: 'Serment',
    subtitle: 'Un engagement profond',
    tagline: '',
    description: "Avant même que le Forum EMI-Entreprises ne prenne vie, il y a eu un moment silencieux, solennel, où chaque membre de ce comité a choisi de donner plus que son temps et ses compétences. Il a donné sa parole. Ce serment tacite, prononcé dans l'exigence et la confiance mutuelle, est le ciment invisible qui transforme un groupe d'individus d'exception en une alliance indéfectible. Car ce qui unit ce comité n'est pas une simple collaboration, c'est un engagement profond, forgé comme on forge l'acier : dans la pression, dans la chaleur, et dans la volonté commune de ne jamais faillir.",
    quote: '',
    images: [
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80',
      'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&q=80',
    ],
  },
  {
    id: 'elite',
    title: 'Élite',
    subtitle: 'Un cercle que l\'on mérite, jamais que l\'on choisit',
    tagline: 'Un standard · Une exigence · Un héritage',
    description: "Le Forum EMI-Entreprises n'est pas le fruit du hasard. Il naît d'un comité qui refuse l'ordinaire, qui repousse chaque limite, qui grave chaque édition dans la mémoire collective. Être ici, c'est appartenir à un cercle où l'exigence est la seule monnaie qui compte.",
    quote: '« L\'excellence n\'est pas un point d\'arrivée. C\'est un standard de départ. »',
    images: [
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80',
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80',
    ],
  },
  {
    id: 'prestige',
    title: 'Prestige',
    subtitle: 'Une empreinte indélébile',
    tagline: 'Chaque détail · Chaque instant · Une signature',
    description: "Le prestige ne se proclame pas, il se ressent. Dans chaque détail orchestré, chaque rencontre pensée, chaque instant vécu au sein du Forum EMI-Entreprises, il y a une promesse : celle de laisser une empreinte indélébile sur ceux qui ont eu le privilège d'y être.",
    quote: '« Le luxe, c\'est quand le moindre détail porte une signature. »',
    images: [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80',
    ],
  },
];

export default function ValuesSection() {
  const [activeTab, setActiveTab] = useState('serment');
  const contentRef = useRef<HTMLDivElement>(null);
  const activeValue = valuesData.find((v) => v.id === activeTab) || valuesData[0];

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, [activeTab]);

  return (
    <section className="relative bg-black section-padding">
      <div className="container-padding">
        <SectionHeader
          title="NOS VALEURS"
          subtitle="LE SOCLE DE NOTRE LÉGENDE"
          glowColor="pink"
        />

        {/* Tabs */}
        <div className="flex items-center justify-center gap-6 md:gap-10 mb-10">
          {valuesData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`font-montserrat text-xs md:text-sm tracking-[0.2em] uppercase transition-all duration-300 pb-2 border-b-2 ${
                activeTab === tab.id
                  ? 'text-gold border-gold'
                  : 'text-white/40 border-transparent hover:text-white/60'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          className="glass-card rounded-2xl overflow-hidden"
        >
          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            {activeValue.images.map((img, i) => (
              <div key={i} className="relative h-48 md:h-64 overflow-hidden">
                <img
                  src={img}
                  alt={activeValue.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {i === 0 && (
                  <div className="absolute bottom-4 left-4">
                    <h3 className="font-orbitron font-bold text-2xl md:text-3xl text-gold">
                      {activeValue.title}
                    </h3>
                    <p className="font-montserrat text-xs text-white/60 tracking-wider uppercase mt-1">
                      {activeValue.subtitle}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Text Content */}
          <div className="p-6 md:p-10">
            {activeValue.tagline && (
              <p className="font-montserrat text-xs text-white/50 tracking-[0.3em] uppercase mb-4">
                {activeValue.tagline}
              </p>
            )}
            <p className="font-montserrat text-sm md:text-base text-white/70 leading-relaxed mb-6">
              {activeValue.description}
            </p>
            {activeValue.quote && (
              <p className="font-montserrat text-sm md:text-base text-white/50 italic">
                {activeValue.quote}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
