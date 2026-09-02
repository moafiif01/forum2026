import React from 'react';
import { cn } from '@/lib/utils';

interface GlassPillProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export default function GlassPill({ children, className, ...props }: GlassPillProps) {
  return (
    <span
      className={cn(
        "bg-black/40 backdrop-blur-[12px] border border-white/20 rounded-full px-6 py-3 inline-flex items-center justify-center font-bold font-orbitron tracking-wider text-white",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
