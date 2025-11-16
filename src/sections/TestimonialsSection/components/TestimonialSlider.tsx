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
          ariaLabel="1 of 6"
          imageUrl="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679dc65105a4d2c8c9c5eda6_review-thumb-01.jpg"
          name="Darlene Robertson"
          location="New York,US"
          testimonial="Drill’s innovative approach and commitment to quality have made them our go-to partner for all construction needs"
        />
        <TestimonialCard
          ariaLabel="2 of 6"
          imageUrl="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679dc6510f65b043f431d66c_review-thumb-02.jpg"
          name="Savannah Nguyen"
          location="Toronto, US"
          testimonial="Working with Drill has been a delight. Their team’s collaboration and expertise brought our designs to life flawlessly."
        />
        <TestimonialCard
          ariaLabel="3 of 6"
          imageUrl="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679dc65105a4d2c8c9c5eda1_review-thumb-03.jpg"
          name="Kathryn Murphy"
          location="Dallas, US"
          testimonial="Drill collaborative approach ensured designs were implemented with impeccable attention to detail. A pleasure to work with!"
        />
        <TestimonialCard
          ariaLabel="4 of 6"
          imageUrl="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679dc65188bb741fd81cde73_review-thumb-04.jpg"
          name="Brooklyn Simmons"
          location="Grorgia, US"
          testimonial="The team at Drill handled our commercial project with precision and professionalism. Their results speak for themselves."
        />
        <TestimonialCard
          ariaLabel="5 of 6"
          imageUrl="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679dc6510f65b043f431d698_review-thumb-05.jpg"
          name="Leslie Alexander"
          location="Florida, US"
          testimonial="Our new school building was completed ahead of schedule, and the quality of work is exceptional. Thank you, Drill!"
        />
        <TestimonialCard
          ariaLabel="6 of 6"
          imageUrl="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679dc65131228b3b1edd5069_review-thumb-06.jpg"
          name="Ronald Richards"
          location="Texas, US"
          testimonial="Drill created a luxurious and functional hotel space that exceeded our expectations. The craftsmanship is impeccable."
        />
      </div>
      <SliderControls variant="previous" />
      <SliderControls variant="next" />
      <SliderControls variant="dots" totalSlides={6} currentSlide={1} />
    </div>
  );
};
