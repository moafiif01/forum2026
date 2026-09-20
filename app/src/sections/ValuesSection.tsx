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
    id: 'echanger',
    title: 'Échanger',
    subtitle: 'Dialogue de haut niveau',
    tagline: 'Idées · Expériences · Transformations',
    description: "Créer un espace de dialogue de haut niveau entre étudiants, industriels, experts, chercheurs et décideurs. Le Forum favorise la circulation des idées, le partage d'expériences et la compréhension des transformations qui redéfinissent aujourd'hui l'industrie et l'ingénierie.",
    quote: '',
    images: [
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80',
      'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&q=80',
    ],
  },
  {
    id: 'recruter',
    title: 'Recruter',
    subtitle: 'Mise en relation des talents',
    tagline: 'Stages · PFE · Opportunités',
    description: "Mettre en relation les entreprises avec des profils qualifiés à la recherche de stages, PFE et opportunités professionnelles. Le Forum constitue un espace privilégié pour rencontrer directement les talents, identifier des profils et créer de nouvelles opportunités de collaboration.",
    quote: '',
    images: [
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80',
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80',
    ],
  },
  {
    id: 'coconstruire',
    title: 'Co-Construire',
    subtitle: 'De nouvelles collaborations',
    tagline: 'Formation · Innovation · Recherche',
    description: "Faire émerger de nouvelles collaborations entre l'ENSAM Rabat et les entreprises autour des enjeux de formation, d'innovation, de recherche et de transfert technologique. L'objectif est de faire du dialogue Académie–Industrie un véritable levier de transformation durable. La première édition avait notamment permis d'identifier la recherche commune, le transfert technologique et l'adaptation des formations comme des axes structurants de collaboration.",
    quote: '',
    images: [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80',
    ],
  },
];

export default function ValuesSection() {
  const [activeTab, setActiveTab] = useState('echanger');
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
    <section className="relative bg-slate-50 section-padding">
      <div className="container-padding">
        <SectionHeader
          title="LES 3 PILIERS DU FORUM"
          subtitle="ÉCHANGER · RECRUTER · CO-CONSTRUIRE"
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
                  ? 'text-teal border-teal font-bold'
                  : 'text-navy/40 border-transparent hover:text-navy/70 font-medium'
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-100">
            {activeValue.images.map((img, i) => (
              <div key={i} className="relative h-48 md:h-64 overflow-hidden">
                <img
                  src={img}
                  alt={activeValue.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent" />
                {i === 0 && (
                  <div className="absolute bottom-4 left-4">
                    <h3 className="font-orbitron font-bold text-2xl md:text-3xl text-navy">
                      {activeValue.title}
                    </h3>
                    <p className="font-montserrat text-xs font-bold text-teal tracking-wider uppercase mt-1">
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
              <p className="font-montserrat text-xs font-bold text-teal tracking-[0.3em] uppercase mb-4">
                {activeValue.tagline}
              </p>
            )}
            <p className="font-montserrat text-sm md:text-base text-navy/80 font-medium leading-relaxed mb-6">
              {activeValue.description}
            </p>
            {activeValue.quote && (
              <p className="font-montserrat text-sm md:text-base text-navy/60 italic">
                {activeValue.quote}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
