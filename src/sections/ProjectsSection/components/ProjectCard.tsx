import { useState } from 'react';

export type ProjectCardProps = {
  href: string;
  imageUrl: string;
  imageAlt: string;
  location: string;
  title: string;
  description: string;
  details: string;
  buttonText: string;
  arrowIconUrl: string;
  arrowIconAlt: string;
  descriptionContainerWidth?: string;
};

export const ProjectCard = (props: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleInteraction = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div role="listitem" className="box-border caret-transparent flex">
      <div
        className="relative items-stretch box-border caret-transparent flex flex-col justify-end max-w-full w-full overflow-hidden group cursor-pointer touch-manipulation"
        style={{ backgroundColor: '#e6feff' }}
        onMouseEnter={() => !window.matchMedia('(hover: none)').matches && setIsExpanded(true)}
        onMouseLeave={() => !window.matchMedia('(hover: none)').matches && setIsExpanded(false)}
        onClick={handleInteraction}
      >
        <div className="box-border caret-transparent overflow-hidden">
          <img
            src={props.imageUrl}
            alt={props.imageAlt}
            className="aspect-[auto_416_/_570] box-border caret-transparent inline-block h-auto max-h-[300px] max-w-full min-h-[300px] object-cover w-full transition-transform duration-500 group-hover:scale-105 sm:max-h-[400px] sm:min-h-[400px] md:max-h-[570px] md:min-h-[570px] md:h-[570px]"
          />
        </div>
        <div
          className={`absolute box-border caret-transparent flex flex-col justify-center transition-all duration-500 ease-in-out px-4 py-3 inset-x-[0%] sm:px-5 sm:py-4 md:p-[30px] ${
            isExpanded
              ? 'bg-red-600 bottom-[0%] h-[50%]'
              : 'bottom-[0%] h-auto'
          }`}
          style={!isExpanded ? { backgroundColor: '#e6feff' } : {}}
        >
          <div className="box-border caret-transparent">
            <div className={`text-xs box-border caret-transparent leading-[18px] sm:text-sm sm:leading-[21px] transition-colors duration-500 ${
              isExpanded ? 'text-white' : 'text-zinc-800'
            }`}>
              {props.location}
            </div>
            <h4 className={`text-base box-border caret-transparent leading-[24px] mt-0.5 sm:text-lg sm:leading-[27px] md:text-[22px] md:leading-[33px] transition-colors duration-500 ${
              isExpanded ? 'text-white' : 'text-black'
            }`}>
              {props.title}
            </h4>
          </div>
          <div
            className={`box-border caret-transparent transition-all duration-500 overflow-hidden ${
              isExpanded
                ? 'opacity-100 max-h-[500px] mt-4'
                : 'opacity-0 max-h-0 mt-0'
            }`}
          >
            <p className="text-white text-xs box-border caret-transparent mb-2 leading-relaxed sm:text-sm sm:mb-3">
              {props.description}
            </p>
            <p className="text-white text-xs box-border caret-transparent leading-relaxed sm:text-sm">
              {props.details}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
