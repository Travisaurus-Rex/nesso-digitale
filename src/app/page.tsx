import Header from "./components/ui/header/Header";
import Hero from "./components/sections/hero/Hero";
import About from "./components/sections/about/About";
import Service from "./components/sections/service/Service";
import ProjectShowcase from "./components/sections/project-showcase/ProjectShowcase";
import Features from "./components/sections/features/Features";
import Transformation from "./components/sections/transformation/Transformation";
import CTA from "./components/sections/cta/CTA";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Service />
      <ProjectShowcase />
      <Features />
      <Transformation />
      <CTA />
    </>
  );
}
