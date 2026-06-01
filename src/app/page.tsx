import { Hero } from "@/components/hero/hero";
import { EditorialMarquee } from "@/components/home/editorial-marquee";
import { HeroSheetTransition } from "@/components/home/hero-sheet-transition";
import { HowItStarts } from "@/components/how-it-starts";
import { WhatWeDo } from "@/components/what-we-do/what-we-do";

export default function Home() {
  return (
    <main aria-label="Linear Studio homepage">
      <HeroSheetTransition hero={<Hero />} sheet={<WhatWeDo />} />
      <EditorialMarquee />
      <HowItStarts />
    </main>
  );
}
