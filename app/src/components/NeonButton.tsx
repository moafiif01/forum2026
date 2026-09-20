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
        "relative rounded-md font-orbitron font-bold tracking-wider overflow-hidden transition-all duration-300",
        glowColor === 'pink' && "bg-navy text-white hover:bg-navy/90 hover:shadow-soft",
        glowColor === 'cyan' && "bg-teal text-white hover:bg-teal/90 hover:shadow-soft",
        glowColor === 'purple' && "bg-accent-blue text-white hover:bg-accent-blue/90 hover:shadow-soft",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
