import { AboutContent } from "@/sections/AboutSection/components/AboutContent";
import { ImageGallery } from "@/sections/AboutSection/components/ImageGallery";

export const AboutSection = () => {
  return (
    <section className="bg-black box-border caret-transparent py-6 md:py-16">
      <div className="box-border caret-transparent max-w-full w-full mx-auto px-5 md:max-w-[1336px]">
        <div className="flex items-start gap-x-16 mb-5 md:mb-10">
          <div className="text-white text-sm items-center box-border caret-transparent gap-x-2 flex justify-start leading-[16.8px] uppercase flex-shrink-0">
            <div className="box-border caret-transparent gap-x-1 flex">
              <div className="bg-white/10 box-border caret-transparent max-h-1.5 max-w-1.5 min-h-1.5 min-w-1.5"></div>
              <div className="bg-white/10 box-border caret-transparent max-h-1.5 max-w-1.5 min-h-1.5 min-w-1.5"></div>
            </div>
            <div className="box-border caret-transparent">Explore</div>
          </div>

          <ImageGallery />
        </div>

        <div className="ml-0 md:ml-[170px]">
          <AboutContent />
        </div>
      </div>
    </section>
  );
};
