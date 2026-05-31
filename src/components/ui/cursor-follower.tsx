"use client";

import { useEffect, useRef, useState } from "react";

const ease = 0.16;

function supportsFinePointer() {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

export function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const hasMovedRef = useRef(false);
  const [hasMoved, setHasMoved] = useState(false);

  useEffect(() => {
    if (
      !supportsFinePointer() ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    function handlePointerMove(event: PointerEvent) {
      targetRef.current = { x: event.clientX, y: event.clientY };

      if (!hasMovedRef.current) {
        hasMovedRef.current = true;
        currentRef.current = { x: event.clientX, y: event.clientY };
        setHasMoved(true);
      }
    }

    function tick() {
      const current = currentRef.current;
      const target = targetRef.current;

      current.x += (target.x - current.x) * ease;
      current.y += (target.y - current.y) * ease;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%)`;
      }

      frameRef.current = window.requestAnimationFrame(tick);
    }

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    frameRef.current = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="bg-cobalt pointer-events-none fixed top-0 left-0 z-50 h-3 w-3 rounded-full opacity-0 transition-opacity duration-300 ease-out data-[visible=true]:opacity-100"
      data-visible={hasMoved ? "true" : undefined}
      aria-hidden="true"
    />
  );
}
