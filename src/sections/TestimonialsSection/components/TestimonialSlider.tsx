import { TestimonialCard } from "@/sections/TestimonialsSection/components/TestimonialCard";
import { SliderControls } from "@/sections/TestimonialsSection/components/SliderControls";
import { useState } from "react";

export const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      ariaLabel: "1 of 3",
      imageUrl: "https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679dc65105a4d2c8c9c5eda6_review-thumb-01.jpg",
      name: "Sarah & Michael Thompson",
      location: "Melbourne, AU",
      testimonial: "Khushi Homes turned our dream into reality. From the first design meeting to handing us the keys, their professionalism and attention to detail were outstanding. Worth every penny!"
    },
    {
      ariaLabel: "2 of 3",
      imageUrl: "https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679dc6510f65b043f431d66c_review-thumb-02.jpg",
      name: "Jennifer Lee",
      location: "Sydney, AU",
      testimonial: "After living with an outdated layout for years, Khushi Homes transformed our home into a modern sanctuary. The team was respectful, communicative, and incredibly skilled. Highly recommend!"
    },
    {
      ariaLabel: "3 of 3",
      imageUrl: "https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679dc65105a4d2c8c9c5eda1_review-thumb-03.jpg",
      name: "David Roberts",
      location: "Gold Coast, AU",
      testimonial: "The interior design team at Khushi Homes has an exceptional eye for detail. They helped us select finishes and create spaces that are both beautiful and functional. Outstanding work!"
    }
  ];

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      role="region"
      aria-label="carousel"
      className="relative box-border caret-transparent clear-both"
    >
      <div className="relative box-border caret-transparent overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="min-w-full flex justify-center">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
      <SliderControls variant="previous" onClick={handlePrevious} />
      <SliderControls variant="next" onClick={handleNext} />
      <SliderControls variant="dots" totalSlides={testimonials.length} currentSlide={currentSlide + 1} />
    </div>
  );
};
