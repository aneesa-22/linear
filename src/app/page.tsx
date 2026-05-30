import { Hero } from "@/components/hero/hero";
import { HowWeWork } from "@/components/how-we-work";
import { WhatWeDo } from "@/components/what-we-do/what-we-do";

export default function Home() {
  return (
    <main aria-label="Linear Studio homepage">
      <Hero />
      <HowWeWork />
      <WhatWeDo />
    </main>
  );
}
