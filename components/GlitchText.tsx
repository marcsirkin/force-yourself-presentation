"use client";

import { PropsWithChildren } from "react";

export default function GlitchText({ children }: PropsWithChildren) {
  return <span className="glitch" data-glitch={children}>{children}</span>;
}
