import { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
}

const stats: StatItem[] = [
  { value: 32, suffix: '', label: 'ANNÉES D\'EXISTENCE' },
  { value: 190, suffix: '', label: 'ENTREPRISES PARTICIPANTES' },
  { value: 90, suffix: '', label: 'PARTENAIRES MÉDIATIQUES' },
  { value: 20000, suffix: '', label: 'VISITEURS' },
  { value: 3.3, suffix: ' M', label: 'DIRHAMS DE CHIFFRE D\'AFFAIRES', decimals: 1 },
];

function AnimatedCounter({ target, suffix = '', decimals = 0, inView }: { target: number; suffix?: string; decimals?: number; inView: boolean }) {
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
    <section ref={sectionRef} className="relative bg-black py-16 md:py-24">
      <div className="container-padding">
        <div ref={titleRef} className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1">
            <p className="font-montserrat text-base text-white mb-1">
              Le <span className="font-bold">Forum EMI-Entreprises</span>
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

            <button className="mt-10 px-8 py-3 rounded-full border border-white/20 font-montserrat text-xs tracking-[0.2em] text-white/70 hover:border-white/40 hover:text-white transition-all duration-300">
              EN SAVOIR PLUS
            </button>
          </div>

          {/* Right - FE Logo */}
          <div className="lg:w-80 xl:w-96 flex items-center justify-center">
            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                  <linearGradient id="feGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fff" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#fff" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
                {/* F letter */}
                <rect x="20" y="20" width="80" height="160" rx="8" fill="none" stroke="url(#feGrad)" strokeWidth="6" />
                <line x1="40" y1="60" x2="80" y2="60" stroke="url(#feGrad)" strokeWidth="6" strokeLinecap="round" />
                <line x1="40" y1="100" x2="80" y2="100" stroke="url(#feGrad)" strokeWidth="6" strokeLinecap="round" />
                <line x1="40" y1="60" x2="40" y2="140" stroke="url(#feGrad)" strokeWidth="6" strokeLinecap="round" />
                {/* E letter */}
                <rect x="100" y="20" width="80" height="160" rx="8" fill="none" stroke="url(#feGrad)" strokeWidth="6" />
                <line x1="120" y1="60" x2="160" y2="60" stroke="url(#feGrad)" strokeWidth="6" strokeLinecap="round" />
                <line x1="120" y1="100" x2="160" y2="100" stroke="url(#feGrad)" strokeWidth="6" strokeLinecap="round" />
                <line x1="120" y1="140" x2="160" y2="140" stroke="url(#feGrad)" strokeWidth="6" strokeLinecap="round" />
                <line x1="120" y1="60" x2="120" y2="140" stroke="url(#feGrad)" strokeWidth="6" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
