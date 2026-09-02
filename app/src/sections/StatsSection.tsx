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
  { value: 2000, prefix: '+', label: 'VISITEURS (ÉDITION 2024)' },
  { value: 52, suffix: '', label: 'ENTREPRISES PARTENAIRES' },
  { value: 200, prefix: '~', label: 'RECRUTEURS SUR SITE' },
  { value: 18, prefix: '+', label: 'PERSONNALITÉS OFFICIELLES' },
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
    <section ref={sectionRef} className="relative bg-black section-padding">
      <div className="container-padding">
        <div ref={titleRef} className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1">
            <p className="font-montserrat text-base text-white mb-1">
              Le <span className="font-bold">Forum ENSAM-Rabat</span>
            </p>
            <p className="font-montserrat text-base text-white/70 mb-10">
              <span className="font-bold text-white">Plus grand</span> Forum<br />
              de type École-Entreprises<br />
              <span className="font-bold text-white">au Maroc</span>
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="font-orbitron font-bold text-3xl md:text-4xl lg:text-5xl text-cyan glow-cyan mb-1">
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                      decimals={stat.decimals || 0}
                      inView={inView}
                    />
                  </div>
                  <div className="font-montserrat text-[10px] md:text-xs text-white/50 tracking-[0.2em] uppercase">
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
                className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
