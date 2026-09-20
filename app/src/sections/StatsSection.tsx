import { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import NeonButton from '@/components/NeonButton';

interface StatItem {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  decimals?: number;
}

const stats: StatItem[] = [
  { value: 2000, prefix: '+', label: 'VISITEURS' },
  { value: 52, suffix: '', label: 'ENTREPRISES PARTENAIRES' },
  { value: 200, prefix: '~', label: 'RECRUTEURS SUR SITE' },
  { value: 18, prefix: '+', label: 'PERSONNALITÉS OFFICIELLES' },
  { value: 13000, prefix: '+', label: 'VUES SUR LES RÉSEAUX SOCIAUX' },
  { value: 500, prefix: '+', label: 'CV COLLECTÉS' },
];

function AnimatedCounter({ target, suffix = '', prefix = '', decimals = 0, inView }: { target: number; suffix?: string; prefix?: string; decimals?: number; inView: boolean }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      
      countRef.current = eased * target;
      setCount(Number(countRef.current.toFixed(decimals)));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, target, decimals]);

  return (
    <span>
      {prefix}
      {decimals > 0 ? count.toFixed(decimals) : count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const titleRef = useScrollReveal<HTMLDivElement>();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white section-padding">
      <div className="container-padding">
        <div ref={titleRef} className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1">
            <p className="font-montserrat text-base text-navy mb-1">
              <span className="font-bold text-xl uppercase text-teal">L'ÉDITION 2024 EN CHIFFRES</span>
            </p>
            <p className="font-montserrat text-sm md:text-base text-navy/70 mb-10 font-medium">
              Des chiffres qui témoignent de la capacité du Forum à mobiliser l’écosystème industriel et académique.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="font-orbitron font-bold text-3xl md:text-4xl lg:text-5xl text-navy mb-1">
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                      decimals={stat.decimals || 0}
                      inView={inView}
                    />
                  </div>
                  <div className="font-montserrat text-[10px] md:text-xs text-teal font-bold tracking-[0.2em] uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <NeonButton glowColor="cyan" className="mt-10 px-8 py-6 tracking-[0.2em]">
              EN SAVOIR PLUS
            </NeonButton>
          </div>

          {/* Right - FE Logo */}
          <div className="lg:w-80 xl:w-96 flex items-center justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <img 
                src="/forum%20logo%20white.png" 
                alt="Forum ENSAM-Rabat Logo" 
                className="w-full h-full object-contain invert opacity-90" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
