import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  glowColor?: 'pink' | 'cyan' | 'purple';
  asChild?: boolean;
}

export default function NeonButton({ children, className, glowColor = 'pink', ...props }: NeonButtonProps) {
  return (
    <Button
      className={cn(
        "relative rounded-none border font-orbitron font-bold tracking-wider overflow-hidden transition-all duration-300",
        glowColor === 'pink' && "border-pink bg-pink/10 text-white hover:bg-pink/20 hover:shadow-glow-pink",
        glowColor === 'cyan' && "border-cyan bg-cyan/10 text-white hover:bg-cyan/20 hover:shadow-glow-cyan",
        glowColor === 'purple' && "border-purple bg-purple/10 text-white hover:bg-purple/20 hover:shadow-[0_0_20px_rgba(156,39,176,0.3)]",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
