"use client";

import type { ReactNode } from "react";
import { useEffect, useLayoutEffect } from "react";
import { m, useAnimationControls, useReducedMotion } from "framer-motion";

type RevealProps = Readonly<{
  children: ReactNode;
  delay?: number;
  as?: "span" | "div";
  className?: string | undefined;
  contentClassName?: string | undefined;
}>;

const ease = [0.22, 1, 0.36, 1] as const;
const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

function classes(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function Reveal({
  children,
  delay = 0,
  as = "span",
  className,
  contentClassName,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const controls = useAnimationControls();
  const Mask = as;
  const Content = as === "div" ? m.div : m.span;

  useIsomorphicLayoutEffect(() => {
    if (shouldReduceMotion) {
      controls.set({ y: "0%" });
      return;
    }

    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    controls.set({ y: "110%" });

    const animationFrame = window.requestAnimationFrame(() => {
      void controls.start({
        y: "0%",
        transition: {
          delay,
          duration: 1.05,
          ease,
        },
      });
    });

    const fallback = window.setTimeout(
      () => {
        controls.set({ y: "0%" });
      },
      (delay + 1.25) * 1000,
    );

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(fallback);
    };
  }, [controls, delay, shouldReduceMotion]);

  useEffect(() => {
    if (shouldReduceMotion) {
      controls.set({ y: "0%" });
      return;
    }

    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    controls.set({ y: "110%" });

    const animationFrame = window.requestAnimationFrame(() => {
      void controls.start({
        y: "0%",
        transition: {
          delay,
          duration: 1.05,
          ease,
        },
      });
    });

    const fallback = window.setTimeout(
      () => {
        controls.set({ y: "0%" });
      },
      (delay + 1.25) * 1000,
    );

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(fallback);
    };
  }, [controls, delay, shouldReduceMotion]);

  return (
    <Mask className={classes("block overflow-hidden", className)}>
      <Content
        className={classes("block", contentClassName)}
        initial={false}
        animate={controls}
      >
        {children}
      </Content>
    </Mask>
  );
}
