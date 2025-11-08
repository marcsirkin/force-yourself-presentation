"use client";

import "./globals.css";
import "../styles/glitch.css";
import Lenis from "@studio-freight/lenis";
import { ReactNode, useEffect } from "react";
import { Space_Grotesk, Rubik_Glitch } from "next/font/google";

const bodyFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
});

const glitchFont = Rubik_Glitch({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-glitch",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
});

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
    <html lang="en" className={`${bodyFont.variable} ${glitchFont.variable}`}>
      <body
        className={`${bodyFont.className} bg-black text-white antialiased overflow-x-hidden selection:bg-white selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}
