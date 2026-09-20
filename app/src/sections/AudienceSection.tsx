import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeader from '@/components/SectionHeader';

gsap.registerPlugin(ScrollTrigger);

const audienceStats = [
  { value: '+20', label: 'Écoles et établissements' },
  { value: '18-25 ans', label: 'Tranche d\'âge' },
  { value: 'BAC+3 à BAC+5', label: 'Niveaux d\'études' },
  { value: 'Ingénieurs & Managers', label: 'Profils présents' },
  { value: 'Stage · PFE · Recrutement', label: 'Opportunités' },
];

export default function AudienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white py-20">
      <div className="container-padding">
        <SectionHeader
          title="NOTRE AUDIENCE"
          subtitle="Des talents, des décideurs et des acteurs de l'industrie"
          glowColor="pink"
        />

        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="font-montserrat text-navy/80 text-sm md:text-base leading-relaxed font-medium">
            Le Forum rassemble une audience composée de profils techniques et managériaux issus de grandes écoles et universités du Royaume.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {audienceStats.map((stat, index) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="glass-card bg-slate-50 p-6 flex flex-col items-center justify-center text-center rounded-xl border border-navy/10 hover:border-teal/30 hover:shadow-soft transition-all duration-300"
            >
              <h3 className="font-orbitron font-bold text-xl md:text-2xl text-teal mb-2">
                {stat.value}
              </h3>
              <p className="font-montserrat text-xs text-navy/70 font-bold uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
