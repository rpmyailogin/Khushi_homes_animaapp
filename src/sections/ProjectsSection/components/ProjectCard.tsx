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

  return (
    <div role="listitem" className="box-border caret-transparent flex">
      <div
        className="relative items-stretch box-border caret-transparent flex flex-col justify-end max-w-full w-full overflow-hidden group cursor-pointer"
        style={{ backgroundColor: '#e6feff' }}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="box-border caret-transparent overflow-hidden">
          <img
            src={props.imageUrl}
            alt={props.imageAlt}
            className="aspect-[auto_416_/_570] box-border caret-transparent inline-block h-[570px] max-h-[400px] max-w-full min-h-[400px] object-cover w-full transition-transform duration-500 group-hover:scale-105 md:max-h-[570px] md:min-h-[570px]"
          />
        </div>
        <div
          className={`absolute box-border caret-transparent flex flex-col justify-center transition-all duration-500 ease-in-out px-5 py-4 inset-x-[0%] md:p-[30px] ${
            isExpanded
              ? 'bg-red-600 bottom-[0%] h-[50%]'
              : 'bg-white bottom-[0%] h-auto'
          }`}
        >
          <div className="box-border caret-transparent">
            <div className={`text-sm box-border caret-transparent leading-[21px] transition-colors duration-500 ${
              isExpanded ? 'text-white' : 'text-zinc-800'
            }`}>
              {props.location}
            </div>
            <h4 className={`text-lg box-border caret-transparent leading-[27px] mt-0.5 md:text-[22px] md:leading-[33px] transition-colors duration-500 ${
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
            <p className="text-white text-sm box-border caret-transparent mb-3 leading-relaxed">
              {props.description}
            </p>
            <p className="text-white text-sm box-border caret-transparent leading-relaxed">
              {props.details}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
