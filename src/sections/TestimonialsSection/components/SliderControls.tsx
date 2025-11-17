export type SliderControlsProps = {
  variant: "previous" | "next" | "dots";
  totalSlides?: number;
  currentSlide?: number;
  onClick?: () => void;
};

export const SliderControls = (props: SliderControlsProps) => {
  if (props.variant === "previous") {
    return (
      <button
        onClick={props.onClick}
        aria-label="previous slide"
        className="absolute box-border caret-transparent m-auto text-white text-[40px] items-center top-1/2 -translate-y-1/2 flex justify-center max-h-[34px] max-w-[34px] min-h-[34px] min-w-[34px] w-20 z-[3] border overflow-hidden rounded-[50%] border-solid border-white/10 left-0 md:left-[-50px] hover:border-white cursor-pointer transition-all"
      >
        <img
          src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679dc7d74485cc2f9b298344_ic-left-slider-arrow.svg"
          alt="Arrow"
          className="box-border caret-transparent max-w-full"
        />
      </button>
    );
  }

  if (props.variant === "next") {
    return (
      <button
        onClick={props.onClick}
        aria-label="next slide"
        className="absolute box-border caret-transparent m-auto text-white text-[40px] items-center top-1/2 -translate-y-1/2 flex justify-center max-h-[34px] max-w-[34px] min-h-[34px] min-w-[34px] w-20 z-[4] border overflow-hidden rounded-[50%] border-solid border-white/10 right-0 md:right-[-50px] hover:border-white cursor-pointer transition-all"
      >
        <img
          src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679dc7d740e2c8138247d4c2_ic-slider-arrow.svg"
          alt="Arrow"
          className="box-border caret-transparent max-w-full"
        />
      </button>
    );
  }

  if (props.variant === "dots") {
    const totalSlides = props.totalSlides || 6;
    const currentSlide = props.currentSlide || 1;

    return (
      <div className="absolute box-border caret-transparent m-auto hidden h-10 z-[2] pt-2.5 bottom-0 inset-x-0">
        {Array.from({ length: totalSlides }, (_, index) => {
          const slideNumber = index + 1;
          const isActive = slideNumber === currentSlide;
          return (
            <div
              key={slideNumber}
              aria-label={`Show slide ${slideNumber} of ${totalSlides}`}
              role="button"
              className={
                isActive
                  ? "relative bg-white box-border caret-transparent inline-block mb-2 mx-[3px] px-2 py-[3.2px] rounded-[100%]"
                  : "relative bg-white/40 box-border caret-transparent inline-block mb-2 mx-[3px] px-2 py-[3.2px] rounded-[100%]"
              }
            >
              {slideNumber}
            </div>
          );
        })}
      </div>
    );
  }

  return null;
};
