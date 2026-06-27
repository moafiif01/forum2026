import { useScrollReveal } from '@/hooks/useScrollReveal';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  glowColor?: 'pink' | 'cyan' | 'purple' | 'gold';
  className?: string;
}

export default function SectionHeader({ title, subtitle, glowColor = 'pink', className = '' }: SectionHeaderProps) {
  const ref = useScrollReveal<HTMLDivElement>();

  const glowClasses = {
    pink: 'glow-pink text-pink',
    cyan: 'glow-cyan text-cyan',
    purple: 'glow-purple text-purple',
    gold: 'glow-gold text-gold',
  };

  return (
    <div ref={ref} className={`text-center mb-12 md:mb-16 ${className}`}>
      <h2 className="font-orbitron font-bold text-xl md:text-2xl lg:text-3xl text-white tracking-[0.08em] mb-3">
        {title}
      </h2>
      <p className={`font-orbitron font-bold text-sm md:text-base lg:text-lg tracking-[0.15em] ${glowClasses[glowColor]}`}>
        {subtitle}
      </p>
    </div>
  );
}
