import React from 'react';
import { cn } from '@/lib/utils';

interface GlassPillProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export default function GlassPill({ children, className, ...props }: GlassPillProps) {
  return (
    <span
      className={cn(
        "bg-white/90 backdrop-blur-[12px] border border-navy/10 rounded-full px-6 py-3 inline-flex items-center justify-center font-bold font-orbitron tracking-wider text-navy shadow-sm",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
