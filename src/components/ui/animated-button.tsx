"use client";

import { m } from "framer-motion";

type AnimatedButtonProps = Readonly<{
  label: string;
}>;

const textVariants = {
  initial: { y: "0%" },
  hover: { y: "-100%" },
};

const incomingTextVariants = {
  initial: { y: "100%" },
  hover: { y: "0%" },
};

const arrowOutVariants = {
  initial: { x: 0, y: 0, opacity: 1 },
  hover: { x: 12, y: -12, opacity: 0 },
};

const arrowInVariants = {
  initial: { x: -12, opacity: 0 },
  hover: { x: 0, opacity: 1 },
};

export function AnimatedButton({ label }: AnimatedButtonProps) {
  return (
    <m.button
      type="button"
      className="group border-charcoal bg-ivory text-charcoal hover:border-cobalt hover:bg-cobalt hover:text-ivory focus-visible:border-cobalt focus-visible:bg-cobalt focus-visible:text-ivory active:border-cobalt active:bg-cobalt active:text-ivory inline-flex h-11 items-center gap-2 overflow-hidden rounded-full border px-5 text-[15px] font-semibold transition-colors duration-300 ease-out"
      initial="initial"
      whileHover="hover"
      whileTap="hover"
      whileFocus="hover"
      aria-label={label}
    >
      <span className="relative block h-[1.1em] overflow-hidden leading-none">
        <m.span
          className="block"
          variants={textVariants}
          transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
        >
          {label}
        </m.span>
        <m.span
          className="absolute inset-0 block"
          variants={incomingTextVariants}
          transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          {label}
        </m.span>
      </span>

      <span className="relative block h-[1em] w-[1em] overflow-hidden leading-none">
        <m.span
          className="absolute inset-0 block"
          variants={arrowOutVariants}
          transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          ↗
        </m.span>
        <m.span
          className="absolute inset-0 block"
          variants={arrowInVariants}
          transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          →
        </m.span>
      </span>
    </m.button>
  );
}
