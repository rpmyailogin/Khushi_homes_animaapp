import { SectionHeader } from "@/components/SectionHeader";
import { TestimonialSlider } from "@/sections/TestimonialsSection/components/TestimonialSlider";

export const TestimonialsSection = () => {
  return (
    <section className="bg-black box-border caret-transparent overflow-hidden mb-[60px] pt-10 pb-20 md:mb-[150px] md:pt-[60px] md:pb-[135px]">
      <div className="box-border caret-transparent max-w-full w-full mx-auto px-5 md:max-w-[1336px] before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27.2px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-public_sans after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27.2px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-public_sans">
        <SectionHeader
          subtitle="Testimonials"
          title="Clients Review"
          variant="white"
        />
        <TestimonialSlider />
      </div>
    </section>
  );
};
