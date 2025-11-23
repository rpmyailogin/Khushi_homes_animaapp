import { AboutContent } from "@/sections/AboutSection/components/AboutContent";
import { TeamSection } from "@/sections/AboutSection/components/TeamSection";

export const AboutSection = () => {
  return (
    <section className="bg-black box-border caret-transparent py-6 md:py-16">
      <div className="box-border caret-transparent max-w-full w-full mx-auto px-5 md:max-w-[1336px]">
        <div className="ml-0 md:ml-[170px]">
          <AboutContent />
        </div>

        <TeamSection />
      </div>
    </section>
  );
};
