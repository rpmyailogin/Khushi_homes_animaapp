import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { AboutSection } from "@/sections/AboutSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { WhyChooseSection } from "@/sections/WhyChooseSection";
import { StatsSection } from "@/sections/StatsSection";
import { BlogSection } from "@/sections/BlogSection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";
import { ContactSection } from "@/sections/ContactSection";
import { Footer } from "@/sections/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

export const App = () => {
  return (
    <div className="text-zinc-800 text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-[27.2px] list-outside list-disc min-h-full pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-public_sans">
      <Navbar />
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <StatsSection />
      <BlogSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
      <div className="fixed box-border caret-transparent contents z-[2147483647] left-0 top-0">
        <div className="caret-transparent"></div>
      </div>
    </div>
  );
};
