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
      const elements = contentRef.current.querySelectorAll('.animate-element');
      const img = contentRef.current.querySelector('.animate-img');
      
      gsap.fromTo(
        elements,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: 'power2.out' }
      );
      
      if (img) {
        gsap.fromTo(
          img,
          { scale: 1.1, opacity: 0.8 },
          { scale: 1, opacity: 1, duration: 0.7, ease: 'power2.out' }
        );
      }
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
    <section ref={sectionRef} className="relative bg-black pt-0 pb-20 lg:pb-32">
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
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 w-full max-w-[1300px] mx-auto justify-center items-center">
          {/* Timeline Dots */}
          <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-0 shrink-0 overflow-x-auto no-scrollbar pb-4 lg:pb-0 w-full lg:w-auto">
            <div className="relative flex lg:flex-col items-center lg:items-start min-w-max lg:min-w-0 px-4 lg:px-0">
              {/* Vertical Line */}
              <div className="absolute left-2.5 top-8 bottom-8 w-[2px] bg-white/30 hidden lg:block" />
              
              {/* Dynamic progress line */}
              <div 
                className="absolute left-2.5 top-8 w-[2px] bg-pink shadow-[0_0_15px_rgba(255,20,147,0.8)] hidden lg:block transition-all duration-700 ease-out rounded-full" 
                style={{ height: `calc(${(timelineData.findIndex(d => d.year === activeYear) / (timelineData.length - 1)) * 100}% - 3rem)` }}
              />
              
              {timelineData.map((item, index) => {
                const isActive = activeYear === item.year;
                const isCompleted = timelineData.findIndex(d => d.year === activeYear) > index;
                
                return (
                  <div 
                    key={item.year} 
                    className="relative z-10 flex flex-col lg:flex-row items-center gap-2 lg:gap-6 lg:py-6 cursor-pointer group"
                    onClick={() => handleYearClick(index, item.year)}
                  >
                    <div className="w-5 h-5 flex items-center justify-center shrink-0">
                      <div
                        className={`relative w-4 h-4 lg:w-5 lg:h-5 rounded-full border-2 transition-all duration-300 ${
                          isActive
                            ? 'border-pink bg-pink shadow-[0_0_15px_rgba(255,20,147,0.8)] scale-[1.3]'
                            : isCompleted
                            ? 'border-pink bg-[#0a0010] group-hover:scale-110'
                            : 'border-white/30 bg-[#0a0010] group-hover:scale-110 group-hover:border-white/50'
                        }`}
                      />
                    </div>
                    <span className={`font-orbitron text-sm lg:text-xl transition-colors duration-300 whitespace-nowrap ${
                      isActive ? 'text-pink font-bold' : 'text-white/60'
                    }`}>
                      {item.year}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Content Card */}
          <div
            ref={contentRef}
            className="w-full flex-1 max-w-6xl glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-pink/30 hover:shadow-[0_0_30px_rgba(255,20,147,0.15)] transition-all duration-500"
          >
            <div className="flex flex-col md:flex-row h-full">
              <div className="p-8 md:p-10 flex-1 flex flex-col justify-center relative z-20 bg-black/40 backdrop-blur-sm">
                <span className="animate-element font-orbitron font-black text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-pink to-purple glow-pink mb-2 inline-block">
                  {activeData.year}
                </span>
                <h3 className="animate-element font-orbitron font-bold text-xl md:text-2xl text-white mt-4 mb-4 tracking-wide uppercase">
                  {activeData.title}
                </h3>
                <p className="animate-element font-montserrat text-base md:text-lg text-white/80 leading-relaxed">
                  {activeData.description}
                </p>
              </div>
              <div className="md:w-[45%] lg:w-1/2 h-64 md:h-auto shrink-0 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent z-10 hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 md:hidden" />
                <img
                  src={activeData.image}
                  alt={activeData.title}
                  className="animate-img w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
