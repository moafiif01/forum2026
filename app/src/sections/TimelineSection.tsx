import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import { useScrollReveal } from '@/hooks/useScrollReveal';

const timelineData = [
  {
    year: 1994,
    title: 'CRÉATION DU FORUM EMI-ENTREPRISES',
    description: 'Création du premier Forum de type école-entreprises au Maroc',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
  },
  {
    year: 1999,
    title: 'EXPANSION NATIONALE',
    description: 'Le Forum s\'affirme comme le rendez-vous incontournable du recrutement au Maroc',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80',
  },
  {
    year: 2019,
    title: 'INNOVATION & CROISSANCE',
    description: 'Record de participation avec plus de 180 entreprises et 15 000 visiteurs',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
  },
  {
    year: 2021,
    title: 'PREMIÈRE ÉDITION VIRTUELLE',
    description: 'Première édition totalement digitale en partenariat avec la plateforme Seekube.',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80',
  },
  {
    year: 2024,
    title: 'XXXIÈME ÉDITION',
    description: 'L\'élan du renouveau et de l\'excellence',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80',
  },
  {
    year: 2026,
    title: 'UNE ÉDITION D\'EXCEPTION',
    description: 'On se donne rendez-vous les 20 et 21 Mai 2026.',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80',
  },
];

export default function TimelineSection() {
  const [activeYear, setActiveYear] = useState(1994);
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const revealRef = useScrollReveal<HTMLDivElement>({ y: 40, duration: 1, children: true, stagger: 0.2 });
  const activeData = timelineData.find((d) => d.year === activeYear) || timelineData[0];

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, [activeYear]);

  useEffect(() => {
    if (!sectionRef.current) return;
    
    // Pin the section and update active year based on scroll progress
    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 15%', // Pin slightly below top to accommodate navbar
      end: '+=2000',    // Scroll distance for the animation
      pin: true,
      onUpdate: (self) => {
        let index = Math.floor(self.progress * timelineData.length);
        if (index >= timelineData.length) index = timelineData.length - 1;
        
        setActiveYear((prev) => {
          const nextYear = timelineData[index].year;
          return prev !== nextYear ? nextYear : prev;
        });
      }
    });

    return () => st.kill();
  }, []);

  const handleYearClick = (index: number, year: number) => {
    setActiveYear(year);
    if (sectionRef.current) {
      const st = ScrollTrigger.getAll().find((t) => t.vars.trigger === sectionRef.current && t.vars.pin);
      if (st) {
        const distance = st.end - st.start;
        const targetScroll = st.start + (index / timelineData.length) * distance + (distance / timelineData.length / 2);
        window.scrollTo({ top: targetScroll, behavior: 'smooth' });
      }
    }
  };

  return (
    <section ref={sectionRef} className="relative bg-black section-padding">
      <div ref={revealRef} className="container-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-xl md:text-2xl text-white tracking-[0.08em] mb-3">
            UN PASSÉ GLORIEUX ...
          </h2>
          <p className="font-orbitron font-bold text-sm md:text-base text-pink glow-pink tracking-[0.15em]">
            UN AVENIR PLUS RADIEUX
          </p>
        </div>

        {/* Timeline */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 max-w-5xl mx-auto">
          {/* Timeline Dots */}
          <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-0 lg:w-32 shrink-0">
            <div className="relative flex lg:flex-col items-center">
              {/* Vertical Line */}
              <div className="absolute left-1/2 lg:left-1/2 top-0 bottom-0 w-px bg-white/20 -translate-x-1/2 hidden lg:block" />
              
              {timelineData.map((item) => (
                <div key={item.year} className="relative z-10 flex lg:flex-row items-center gap-3 lg:gap-4 lg:py-4">
                  <button
                    onClick={() => handleYearClick(timelineData.indexOf(item), item.year)}
                    className={`relative w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 shrink-0 ${
                      activeYear === item.year
                        ? 'border-pink bg-pink shadow-[0_0_15px_rgba(255,20,147,0.5)]'
                        : 'border-white/30 bg-black hover:border-white/50'
                    }`}
                  >
                    <span className={`font-orbitron text-xs lg:text-sm font-bold ${
                      activeYear === item.year ? 'text-white' : 'text-white/50'
                    }`}>
                      {item.year}
                    </span>
                  </button>
                  {/* Mobile year label */}
                  <span className="lg:hidden font-montserrat text-sm text-white/60">
                    {item.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Content Card */}
          <div
            ref={contentRef}
            className="flex-1 glass-card rounded-2xl overflow-hidden"
          >
            <div className="flex flex-col md:flex-row">
              <div className="p-6 md:p-8 flex-1">
                <span className="font-orbitron font-bold text-4xl md:text-5xl text-pink glow-pink">
                  {activeData.year}
                </span>
                <h3 className="font-orbitron font-bold text-lg md:text-xl text-white mt-4 mb-3 tracking-wide">
                  {activeData.title}
                </h3>
                <p className="font-montserrat text-sm md:text-base text-white/70 leading-relaxed">
                  {activeData.description}
                </p>
              </div>
              <div className="md:w-72 lg:w-80 h-48 md:h-auto shrink-0">
                <img
                  src={activeData.image}
                  alt={activeData.title}
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
