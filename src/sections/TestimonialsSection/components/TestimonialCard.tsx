export type TestimonialCardProps = {
  ariaLabel: string;
  imageUrl: string;
  name: string;
  location: string;
  testimonial: string;
};

export const TestimonialCard = (props: TestimonialCardProps) => {
  return (
    <div
      aria-label={props.ariaLabel}
      role="group"
      className="relative box-border caret-transparent text-left w-full max-w-[420px] mx-auto px-5 md:px-0"
    >
      <div className="border-b-zinc-800 border-l-zinc-800 border-t-zinc-800 box-border caret-transparent flex flex-col gap-y-5 pr-0 border-r-white/10 border-r-0 md:gap-y-[25px] md:pr-[34px] md:border-r">
        <div className="text-neutral-400 items-center box-border caret-transparent gap-x-3 flex justify-start">
          <div className="bg-gray-100 box-border caret-transparent max-h-[60px] max-w-[60px] min-h-[60px] min-w-[60px] overflow-hidden rounded-[50%] md:max-h-[65px] md:max-w-[65px] md:min-h-[65px] md:min-w-[65px]">
            <img
              src={props.imageUrl}
              alt="Review Image"
              className="box-border caret-transparent inline-block max-h-[60px] max-w-full min-h-[60px] object-cover w-full md:max-h-[65px] md:min-h-[65px]"
            />
          </div>
          <div className="box-border caret-transparent">
            <div className="text-white box-border caret-transparent">
              {props.name}
            </div>
            <div className="text-sm box-border caret-transparent leading-[21px]">
              {props.location}
            </div>
          </div>
        </div>
        <p className="text-neutral-400 box-border caret-transparent">
          {props.testimonial}
        </p>
      </div>
    </div>
  );
};
