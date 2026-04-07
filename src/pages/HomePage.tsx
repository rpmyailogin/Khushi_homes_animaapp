import { useEffect } from "react";
import { Hero } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { AboutSection } from "@/sections/AboutSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { WhyChooseSection } from "@/sections/WhyChooseSection";
import { StatsSection } from "@/sections/StatsSection";
import { BlogSection } from "@/sections/BlogSection";
import { ContactSection } from "@/sections/ContactSection";

export const HomePage = () => {
  useEffect(() => {
    document.title = "Khushi Homes - Building Dreams in Melbourne";
  }, []);

  return (
    <>
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <StatsSection />
      <BlogSection />
      <ContactSection />
    </>
  );
};
