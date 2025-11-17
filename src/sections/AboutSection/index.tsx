import { AboutContent } from "@/sections/AboutSection/components/AboutContent";

export const AboutSection = () => {
  return (
    <section className="bg-black box-border caret-transparent py-10 md:py-16">
      <div className="box-border caret-transparent max-w-full w-full mx-auto px-5 md:max-w-[1336px]">
        <div className="text-white text-sm items-center box-border caret-transparent gap-x-2 flex justify-start leading-[16.8px] uppercase mb-8">
          <div className="box-border caret-transparent gap-x-1 flex">
            <div className="bg-white/10 box-border caret-transparent max-h-1.5 max-w-1.5 min-h-1.5 min-w-1.5"></div>
            <div className="bg-white/10 box-border caret-transparent max-h-1.5 max-w-1.5 min-h-1.5 min-w-1.5"></div>
          </div>
          <div className="box-border caret-transparent">Explore</div>
        </div>

        <AboutContent />
      </div>
    </section>
  );
};
