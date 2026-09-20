import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeader from '@/components/SectionHeader';
import NeonButton from '@/components/NeonButton';

gsap.registerPlugin(ScrollTrigger);

const dimensions = [
  { title: 'TALENTS', desc: "Créer des opportunités de rencontre entre les entreprises et les futurs ingénieurs." },
  { title: 'INNOVATION', desc: "Mettre en lumière les technologies, projets et expertises qui façonnent l'industrie de demain." },
  { title: 'EXPERTISE', desc: "Permettre le partage d'expériences et de connaissances entre professionnels, experts et étudiants." },
  { title: 'COOPÉRATION', desc: "Encourager les collaborations entre l'ENSAM Rabat et son écosystème industriel." },
  { title: 'EMPLOYABILITÉ', desc: "Favoriser l'accès aux stages, PFE et opportunités professionnelles." },
];

export default function PartnerLogosSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current && contentRef.current && imageRef.current) {
      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );
      
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white py-20 overflow-hidden">
      <div className="container-padding">
        <SectionHeader
          title="ILS NOUS ONT FAIT CONFIANCE"
          subtitle="Une communauté de partenaires engagés aux côtés de l'ENSAM Rabat"
          glowColor="pink"
        />

        <div className="max-w-6xl mx-auto mt-12 grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div ref={contentRef} className="space-y-8">
            <div>
              <h3 className="font-orbitron font-bold text-2xl text-navy mb-4">
                DES PARTENARIATS QUI CRÉENT DU LIEN
              </h3>
              <p className="font-montserrat text-navy/80 font-medium leading-relaxed mb-2">
                Notre démarche partenariale ne se limite pas à la présence d'une entreprise lors d'un événement.
              </p>
              <p className="font-montserrat text-navy/80 font-medium leading-relaxed">
                Elle vise à construire des relations durables autour de plusieurs dimensions :
              </p>
            </div>

            <div className="space-y-6">
              {dimensions.map((dim, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-2 h-2 rounded-full bg-teal mt-2 shrink-0 shadow-sm"></div>
                  <div>
                    <h4 className="font-orbitron font-bold text-sm text-teal tracking-wider mb-1">
                      {dim.title}
                    </h4>
                    <p className="font-montserrat text-sm text-navy/70 font-medium">
                      {dim.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-navy/10">
              <p className="font-montserrat text-sm text-navy/60 italic mb-8">
                Le dossier présente précisément le Forum comme un espace permettant de renforcer la relation avec l'école, la marque employeur, le sourcing de talents et la mise en valeur de l'expertise technique.
              </p>
              <NeonButton glowColor="pink" className="px-8 py-4">
                DEVENIR PARTENAIRE
              </NeonButton>
            </div>
          </div>

          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="absolute inset-0 bg-teal/10 blur-[100px] rounded-full" />
            <div className="relative glass-card rounded-2xl overflow-hidden border border-navy/10 shadow-sm p-2 bg-slate-50">
              <div className="relative rounded-xl overflow-hidden aspect-[4/5] md:aspect-[3/4]">
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent z-10" />
                <img 
                  src="/images/nousAfaitConfiance.jpeg" 
                  alt="Ils nous ont fait confiance" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
