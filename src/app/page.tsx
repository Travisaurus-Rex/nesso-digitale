import Image from "next/image";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Service from "./components/service/Service";
import ProjectShowcase from "./components/project-showcase/ProjectShowcase";
import Features from "./components/features/Features";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Service />
      <ProjectShowcase />
      <Features />
    </>
  );
}
