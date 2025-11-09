"use client";

import { ReactNode, createContext, useContext, useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";

// Use the instance type of the Lenis class for the context value
type LenisInstance = InstanceType<typeof Lenis>;

const LenisContext = createContext<LenisInstance | null>(null);

export function LenisProvider({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<LenisInstance | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const instance = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1.2,
    });

    setLenis(instance);

    const raf = (time: number) => {
      // guard in case instance was destroyed
      try {
        instance.raf(time);
      } catch (e) {
        // ignore errors during teardown
      }
      frameRef.current = requestAnimationFrame(raf);
    };

    frameRef.current = requestAnimationFrame(raf);

    return () => {
      if (frameRef.current != null) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
      try {
        instance.destroy();
      } catch (e) {
        // ignore destroy errors
      }
      setLenis(null);
    };
  }, []);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}

export function useLenis(): LenisInstance | null {
  return useContext(LenisContext);
}
