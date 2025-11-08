"use client";

import "./globals.css";
import "../styles/glitch.css";
import { ReactNode } from "react";
import { Space_Grotesk, Rubik_Glitch } from "next/font/google";
import { LenisProvider } from "@/lib/lenis-context";

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
  return (
    <html lang="en" className={`${bodyFont.variable} ${glitchFont.variable}`}>
      <body
        className={`${bodyFont.className} bg-black text-white antialiased overflow-x-hidden selection:bg-white selection:text-black`}
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
