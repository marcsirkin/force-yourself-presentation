"use client";

interface GlitchTextProps {
  children: string;
}

export default function GlitchText({ children }: GlitchTextProps) {
  return (
    <span className="glitch" data-glitch={children}>
      {children}
    </span>
  );
}
