import { TestimonialCard } from "@/sections/TestimonialsSection/components/TestimonialCard";
import { SliderControls } from "@/sections/TestimonialsSection/components/SliderControls";

export const TestimonialSlider = () => {
  return (
    <div
      role="region"
      aria-label="carousel"
      className="relative box-border caret-transparent clear-both text-center"
    >
      <div className="relative box-border caret-transparent h-full text-nowrap w-auto z-[1] inset-x-0 md:w-[420px]">
        <TestimonialCard
          ariaLabel="1 of 3"
          imageUrl="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679dc65105a4d2c8c9c5eda6_review-thumb-01.jpg"
          name="Sarah & Michael Thompson"
          location="Melbourne, AU"
          testimonial="Khushi Homes turned our dream into reality. From the first design meeting to handing us the keys, their professionalism and attention to detail were outstanding. Worth every penny!"
        />
        <TestimonialCard
          ariaLabel="2 of 3"
          imageUrl="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679dc6510f65b043f431d66c_review-thumb-02.jpg"
          name="Jennifer Lee"
          location="Sydney, AU"
          testimonial="After living with an outdated layout for years, Khushi Homes transformed our home into a modern sanctuary. The team was respectful, communicative, and incredibly skilled. Highly recommend!"
        />
        <TestimonialCard
          ariaLabel="3 of 3"
          imageUrl="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679dc65105a4d2c8c9c5eda1_review-thumb-03.jpg"
          name="David Roberts"
          location="Gold Coast, AU"
          testimonial="The interior design team at Khushi Homes has an exceptional eye for detail. They helped us select finishes and create spaces that are both beautiful and functional. Outstanding work!"
        />
      </div>
      <SliderControls variant="previous" />
      <SliderControls variant="next" />
      <SliderControls variant="dots" totalSlides={3} currentSlide={1} />
    </div>
  );
};
