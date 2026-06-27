import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const patronageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    
    if (patronageRef.current) {
      tl.fromTo(
        patronageRef.current,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );
    }
    
    if (titleRef.current) {
      tl.fromTo(
        titleRef.current.children,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' },
        '-=0.5'
      );
    }

    return () => { tl.kill(); };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1562774053-701939374585?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Royal Patronage */}
      <div 
        ref={patronageRef}
        className="relative z-10 text-center mt-20 mb-auto pt-8"
      >
        <p className="font-montserrat font-semibold text-xs md:text-sm text-gold tracking-[0.2em] mb-2 uppercase">
          Sous le haut patronage de Sa Majesté le Roi Mohammed VI que Dieu l'assiste
        </p>
        <p className="font-amiri text-lg md:text-xl text-gold tracking-[0.15em]" dir="rtl">
          تحت الرعاية السامية لصاحب الجلالة الملك محمد السادس نصره الله
        </p>
      </div>

      {/* Hero Content */}
      <div 
        ref={titleRef}
        className="relative z-10 container-padding mb-auto pb-32 max-w-3xl"
      >
        <h1 className="font-orbitron font-bold text-3xl md:text-5xl lg:text-6xl text-white tracking-wide mb-6 leading-tight">
          C'EST QUOI LE FORUM EMI-ENTREPRISES ?
        </h1>
        <p className="font-montserrat text-base md:text-lg text-white/80 leading-relaxed max-w-xl">
          Le plus grand salon de type étudiant entreprises au Maroc. Depuis 1994, chaque comité s'engage à
          porter encore plus haut le nom du Forum EMI-Entreprises. Et l'égide continue à se reproduire
        </p>
      </div>
    </section>
  );
}
