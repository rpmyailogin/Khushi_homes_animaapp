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

  return (
    <div role="listitem" className="box-border caret-transparent flex">
      <div
        className="relative box-border caret-transparent flex flex-col max-w-full w-full border border-solid border-black/10 overflow-hidden group transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="box-border caret-transparent flex flex-col p-5 md:p-[34px] gap-y-5 bg-white transition-colors duration-300 group-hover:bg-gray-50">
          <div className="items-center box-border caret-transparent gap-x-5 flex justify-between">
            <h4 className="text-black text-lg box-border caret-transparent leading-[27px] md:text-[22px] md:leading-[33px]">
              {props.title}
            </h4>
            <img
              src={props.iconUrl}
              alt="Service Icon"
              className="box-border caret-transparent max-h-10 max-w-10 min-h-10 min-w-10"
            />
          </div>
          <p className="box-border caret-transparent text-sm leading-relaxed">
            {props.description}
          </p>
        </div>
        <div className="bg-gray-100 box-border caret-transparent overflow-hidden">
          <img
            src={props.serviceImageUrl}
            alt="Service Image"
            className="aspect-[auto_362_/_264] box-border caret-transparent inline-block h-[264px] max-h-[210px] max-w-full min-h-[210px] object-cover w-full transition-transform duration-500 group-hover:scale-105 md:max-h-[264px] md:min-h-[264px]"
          />
        </div>
        <div
          className={`absolute inset-0 bg-red-600/95 flex flex-col items-center justify-center p-5 md:p-[34px] transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="text-center">
            <h4 className="text-white text-lg box-border caret-transparent leading-[27px] mb-4 md:text-[22px] md:leading-[33px]">
              {props.title}
            </h4>
            <p className="text-white text-sm box-border caret-transparent leading-relaxed">
              {props.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
