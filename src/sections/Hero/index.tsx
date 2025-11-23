import { HeroImage } from "@/sections/Hero/components/HeroImage";
import { HeroContent } from "@/sections/Hero/components/HeroContent";

export const Hero = () => {
  return (
    <section className="box-border caret-transparent overflow-hidden mb-10 sm:mb-12 md:mb-[150px]">
      <HeroImage />
      <HeroContent />
    </section>
  );
};
