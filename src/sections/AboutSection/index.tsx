import { ImageGallery } from "@/sections/AboutSection/components/ImageGallery";
import { AboutContent } from "@/sections/AboutSection/components/AboutContent";

export const AboutSection = () => {
  return (
    <section className="bg-black box-border caret-transparent py-10 md:py-[60px]">
      <div className="box-border caret-transparent max-w-full w-full mx-auto px-5 md:max-w-[1336px] before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27.2px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-public_sans after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27.2px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-public_sans">
        <div className="items-start box-border caret-transparent gap-x-0 flex flex-col justify-between gap-y-5 md:gap-x-[60px] md:flex-row md:gap-y-0">
          <div className="flex flex-col box-border caret-transparent w-full md:w-auto md:flex-shrink-0">
            <div className="text-white text-sm items-center box-border caret-transparent gap-x-2 flex justify-start leading-[16.8px] uppercase mb-[5px]">
              <div className="box-border caret-transparent gap-x-1 flex">
                <div className="bg-white/10 box-border caret-transparent max-h-1.5 max-w-1.5 min-h-1.5 min-w-1.5"></div>
                <div className="bg-white/10 box-border caret-transparent max-h-1.5 max-w-1.5 min-h-1.5 min-w-1.5"></div>
              </div>
              <div className="box-border caret-transparent">Explore</div>
            </div>
            <div className="relative bg-gray-100 box-border caret-transparent w-full overflow-hidden md:w-[500px] lg:w-[600px]">
              <img
                src="https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Construction crane"
                className="box-border caret-transparent inline-block w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="box-border caret-transparent max-w-none w-full">
            <ImageGallery />
            <AboutContent />
          </div>
        </div>
      </div>
    </section>
  );
};
