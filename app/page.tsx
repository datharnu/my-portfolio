import React from "react";

import About from "./components/about";
import ProjectComponent from "./components/project";
import ExperienceSection from "./components/experience";
import ContactSection from "./components/contact";
import { Hero } from "./components/Hero";

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
