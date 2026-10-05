import { getSite } from "@/lib/tenant";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { Services } from "@/components/sections/services";
import { About } from "@/components/sections/about";
import { Portfolio } from "@/components/sections/portfolio";
import { Faq } from "@/components/sections/faq";
import { ContactCta } from "@/components/sections/contact-cta";
import { UseCases } from "@/components/sections/use-cases";
import { Collections } from "@/components/sections/collections";
import { Process } from "@/components/sections/process";
import { PromiseGrid } from "@/components/sections/promise-grid";
import { Testimonials } from "@/components/sections/testimonials";

export default async function HomePage() {
  const site = await getSite();
  return (
    <>
      <Hero site={site} />
      <TrustBar site={site} />
      <About site={site} />
      <UseCases site={site} />
      <Services site={site} />
      <Collections site={site} />
      <Portfolio site={site} />
      <Process site={site} />
      <PromiseGrid site={site} />
      <Testimonials site={site} />
      <Faq site={site} />
      <ContactCta site={site} />
    </>
  );
}
