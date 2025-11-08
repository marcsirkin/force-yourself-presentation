"use client";

import "./globals.css";
import "../styles/glitch.css";
import Lenis from "@studio-freight/lenis";
import { ReactNode, useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1.2,
    });

    let animationFrame: number;

    const raf = (time: number) => {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    };

    animationFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrame);
      lenis.destroy();
    };
  }, []);

  return (
    <html lang="en">
      <body className="bg-black text-white antialiased overflow-x-hidden selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
