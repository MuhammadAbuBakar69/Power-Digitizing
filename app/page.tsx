import { getSite } from "@/lib/tenant";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { Services } from "@/components/sections/services";
import { About } from "@/components/sections/about";
import { StatsCounter } from "@/components/sections/stats-counter";
import { UseCases } from "@/components/sections/use-cases";
import { Collections } from "@/components/sections/collections";
import { IndustryShowcase } from "@/components/sections/industry-showcase";
import { Portfolio } from "@/components/sections/portfolio";
import { Process } from "@/components/sections/process";
import { PromiseGrid } from "@/components/sections/promise-grid";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { CtaBanner } from "@/components/sections/cta-banner";

export default async function HomePage() {
  const site = await getSite();
  return (
    <>
      <Hero site={site} />
      <TrustBar site={site} />
      <About site={site} />
      <StatsCounter />
      <UseCases site={site} />
      <Services site={site} />
      <Collections site={site} />
      <IndustryShowcase />
      <Portfolio site={site} />
      <Process site={site} />
      <PromiseGrid site={site} />
      <WhyChooseUs />
      <Testimonials site={site} />
      <Faq site={site} />
      <CtaBanner site={site} />
    </>
  );
}
