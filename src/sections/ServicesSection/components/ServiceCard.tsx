import { useState } from 'react';

export type ServiceCardProps = {
  title: string;
  iconUrl: string;
  description: string;
  serviceImageUrl: string;
  href: string;
};

export const ServiceCard = (props: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleInteraction = () => {
    if (window.matchMedia('(hover: none)').matches) {
      setIsHovered(!isHovered);
    }
  };

  return (
    <div role="listitem" className="box-border caret-transparent flex">
      <div
        className="relative box-border caret-transparent flex flex-col max-w-full w-full border border-solid border-black/10 overflow-hidden group transition-all duration-300 h-full touch-manipulation"
        style={{ backgroundColor: '#e6feff' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleInteraction}
        onTouchStart={handleInteraction}
      >
        <div className="box-border caret-transparent flex flex-col p-5 gap-y-4 sm:p-6 sm:gap-y-5 md:p-[34px] transition-colors duration-300 flex-grow" style={{ backgroundColor: '#e6feff' }}>
          <div className="items-center box-border caret-transparent gap-x-5 flex justify-between">
            <h4 className="text-black text-base box-border caret-transparent leading-[24px] sm:text-lg sm:leading-[27px] md:text-[22px] md:leading-[33px]">
              {props.title}
            </h4>
            <img
              src={props.iconUrl}
              alt="Service Icon"
              className="box-border caret-transparent max-h-8 max-w-8 min-h-8 min-w-8 sm:max-h-10 sm:max-w-10 sm:min-h-10 sm:min-w-10"
            />
          </div>
          <p className="box-border caret-transparent text-sm leading-relaxed sm:text-base">
            {props.description}
          </p>
        </div>
        <div className="bg-gray-100 box-border caret-transparent overflow-hidden mt-auto">
          <img
            src={props.serviceImageUrl}
            alt="Service Image"
            className="aspect-[auto_362_/_264] box-border caret-transparent inline-block h-auto max-h-[180px] max-w-full min-h-[180px] object-cover w-full transition-transform duration-500 group-hover:scale-105 sm:max-h-[210px] sm:min-h-[210px] md:max-h-[264px] md:min-h-[264px] md:h-[264px]"
          />
        </div>
        <div
          className={`absolute inset-0 bg-red-600/95 flex flex-col items-center justify-center p-5 sm:p-6 md:p-[34px] transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="text-center">
            <h4 className="text-white text-base box-border caret-transparent leading-[24px] mb-3 sm:text-lg sm:leading-[27px] sm:mb-4 md:text-[22px] md:leading-[33px]">
              {props.title}
            </h4>
            <p className="text-white text-sm box-border caret-transparent leading-relaxed sm:text-base">
              {props.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
