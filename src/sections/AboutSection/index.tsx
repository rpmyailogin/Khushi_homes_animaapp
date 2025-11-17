import { AboutContent } from "@/sections/AboutSection/components/AboutContent";
import { ImageGallery } from "@/sections/AboutSection/components/ImageGallery";

export const AboutSection = () => {
  return (
    <section className="bg-black box-border caret-transparent py-10 md:py-16">
      <div className="box-border caret-transparent max-w-full w-full mx-auto px-5 md:max-w-[1336px]">
        <div className="items-start box-border caret-transparent gap-x-10 md:gap-x-[60px] flex flex-col md:flex-row justify-start">
          <div className="flex-1 w-full md:w-auto">
            <div className="text-white text-sm items-center box-border caret-transparent gap-x-2 flex justify-start leading-[16.8px] uppercase mb-8">
              <div className="box-border caret-transparent gap-x-1 flex">
                <div className="bg-white/10 box-border caret-transparent max-h-1.5 max-w-1.5 min-h-1.5 min-w-1.5"></div>
                <div className="bg-white/10 box-border caret-transparent max-h-1.5 max-w-1.5 min-h-1.5 min-w-1.5"></div>
              </div>
              <div className="box-border caret-transparent">Explore</div>
            </div>

            <AboutContent />
          </div>

          <div className="w-full md:w-80 lg:w-96 mt-8 md:mt-0">
            <ImageGallery />
          </div>
        </div>
      </div>
    </section>
  );
};
