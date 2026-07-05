import { createFileRoute } from "@tanstack/react-router";
import { Nav, SmoothScroll } from "@/components/site/experience";
import {
  AmbientBackground, Hero, Services, About, Portfolio, Process, Testimonials, Brands, Team, Contact, Footer,
} from "@/components/site/sections";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <SmoothScroll>
      <AmbientBackground />
      <Nav />
      <main className="relative">
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Process />
        <Testimonials />
        <Brands />
        <Team />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}

