"use client";

import type { ReactNode } from "react";
import { domAnimation, LazyMotion, MotionConfig } from "framer-motion";

type MotionProviderProps = Readonly<{
  children: ReactNode;
}>;

export function MotionProvider({ children }: MotionProviderProps) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
