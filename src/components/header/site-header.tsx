import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { AnimatedButton } from "@/components/ui/animated-button";

export function SiteHeader() {
  return (
    <header className="text-charcoal fixed inset-x-0 top-0 z-20 px-[clamp(1.25rem,6vw,4.5rem)] py-6 text-[15px] font-semibold tracking-normal sm:py-7">
      <Reveal as="div" delay={0.05}>
        <nav
          aria-label="Primary navigation"
          className="flex items-center justify-between gap-6"
        >
          <Link
            href="/"
            className="hover:text-cobalt focus-visible:text-cobalt active:text-cobalt transition-colors duration-300 ease-out"
            aria-label="Linear Studio home"
          >
            linear studio
          </Link>

          <div className="hidden items-center gap-[clamp(1rem,3vw,3.25rem)] md:flex">
            <a
              href="#services"
              className="hover:text-cobalt focus-visible:text-cobalt active:text-cobalt inline-flex transition-colors duration-300 ease-out"
            >
              Services
            </a>
            <AnimatedButton label="Let’s talk" />
          </div>

          <button
            type="button"
            className="text-charcoal hover:text-cobalt focus-visible:text-cobalt active:text-cobalt inline-flex h-11 w-11 items-center justify-center transition-colors duration-300 ease-out md:hidden"
            aria-label="Open menu"
          >
            <span className="flex w-7 flex-col gap-1.5" aria-hidden="true">
              <span className="h-0.5 w-full bg-current" />
              <span className="h-0.5 w-full bg-current" />
              <span className="h-0.5 w-full bg-current" />
            </span>
          </button>
        </nav>
      </Reveal>
    </header>
  );
}
