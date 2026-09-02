import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glowColor?: 'pink' | 'cyan' | 'purple' | 'none';
}

export default function GlassCard({ children, className, glowColor = 'none', ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "bg-white/[0.03] backdrop-blur-[20px] border border-white/[0.08] rounded-xl transition-all duration-300 text-white",
        glowColor === 'pink' && "hover:border-pink/50 hover:shadow-glow-pink",
        glowColor === 'cyan' && "hover:border-cyan/50 hover:shadow-glow-cyan",
        glowColor === 'purple' && "hover:border-purple/50 hover:shadow-[0_0_20px_rgba(156,39,176,0.3)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
