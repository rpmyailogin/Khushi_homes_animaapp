import { useState } from 'react';

export type ServiceCardProps = {
  title: string;
  iconUrl: string;
  description: string;
  serviceImageUrl: string;
  href: string;
};

export const ServiceCard = (props: ServiceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div role="listitem" className="box-border caret-transparent flex">
      <div
        className="relative items-stretch bg-gray-100 box-border caret-transparent flex flex-col justify-end max-w-full w-full overflow-hidden group cursor-pointer"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="box-border caret-transparent overflow-hidden">
          <img
            src={props.serviceImageUrl}
            alt="Service Image"
            className="aspect-[auto_362_/_264] box-border caret-transparent inline-block h-[264px] max-h-[210px] max-w-full min-h-[210px] object-cover w-full transition-transform duration-500 group-hover:scale-105 md:max-h-[264px] md:min-h-[264px]"
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
            <div className="items-center box-border caret-transparent gap-x-5 flex justify-between mb-2">
              <h4 className={`text-lg box-border caret-transparent leading-[27px] transition-colors duration-500 md:text-[22px] md:leading-[33px] ${
                isExpanded ? 'text-white' : 'text-black'
              }`}>
                {props.title}
              </h4>
              <img
                src={props.iconUrl}
                alt="Service Icon"
                className={`box-border caret-transparent max-h-10 max-w-10 min-h-10 min-w-10 transition-all duration-500 ${
                  isExpanded ? 'brightness-0 invert' : ''
                }`}
              />
            </div>
          </div>
          <div
            className={`box-border caret-transparent transition-all duration-500 overflow-hidden ${
              isExpanded
                ? 'opacity-100 max-h-[500px] mt-4'
                : 'opacity-0 max-h-0 mt-0'
            }`}
          >
            <p className="text-white text-sm box-border caret-transparent leading-relaxed">
              {props.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
