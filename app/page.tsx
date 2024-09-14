import React from "react";
import Hero from "./components/Hero";
import About from "./components/about";
import ProjectComponent from "./components/project";
import ExperienceSection from "./components/experience";
import ContactSection from "./components/contact";

export default function page() {
  return (
    <>
      <Hero />
      <About />
      <ProjectComponent />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
