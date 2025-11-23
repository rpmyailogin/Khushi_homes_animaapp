import { AboutHeroImage } from "@/sections/AboutHeroSection/components/AboutHeroImage";
import { AboutHeroContent } from "@/sections/AboutHeroSection/components/AboutHeroContent";

export const AboutHeroSection = () => {
  return (
    <section className="box-border caret-transparent overflow-hidden mb-[60px] md:mb-[150px]">
      <AboutHeroImage />
      <AboutHeroContent />
    </section>
  );
};
