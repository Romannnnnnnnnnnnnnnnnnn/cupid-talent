import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/site-shell";
import { Hero } from "@/components/home/hero";
import { MarqueeBanner } from "@/components/home/marquee-banner";
import { Pillars } from "@/components/home/promise";
import { Values } from "@/components/home/values";
import { Split } from "@/components/home/split";
import { Services } from "@/components/home/services";
import { Method } from "@/components/home/method";
import { Recognition } from "@/components/home/recognition";
import { Testimonials } from "@/components/home/testimonials";
import { Team } from "@/components/home/team";
import { Cta } from "@/components/home/cta";
import { marqueeCta, marqueePrimary, marqueeSecondary } from "@/lib/content";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <SiteShell>
      <Hero />
      <MarqueeBanner items={marqueePrimary} />
      <Pillars />
      <Values />
      <MarqueeBanner items={marqueeSecondary} variant="paper" reverse />
      <Split />
      <Services />
      <Method />
      <Recognition />
      <Testimonials />
      <Team />
      <MarqueeBanner items={marqueeCta} />
      <Cta />
    </SiteShell>
  );
}
