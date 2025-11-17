import { useState } from 'react';

export type BlogCardProps = {
  href: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  date: string;
  title: string;
  linkText: string;
  arrowIconUrl: string;
};

export const BlogCard = (props: BlogCardProps) => {
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
            src={props.imageUrl}
            alt={props.imageAlt}
            className="box-border caret-transparent inline-block max-h-[250px] max-w-full min-h-[250px] object-cover w-full transition-transform duration-500 group-hover:scale-105 md:max-h-[300px] md:min-h-[300px]"
          />
        </div>
        <div
          className={`absolute box-border caret-transparent flex flex-col justify-center transition-all duration-500 ease-in-out px-5 py-4 inset-x-[0%] md:p-[26px] ${
            isExpanded
              ? 'bg-red-600 bottom-[0%] h-[50%]'
              : 'bg-white bottom-[0%] h-auto'
          }`}
        >
          <div className="box-border caret-transparent">
            <div className={`text-xs items-center box-border caret-transparent gap-x-3.5 flex justify-start leading-[18px] mb-[15px] transition-colors duration-500 md:text-sm md:leading-[21px] ${
              isExpanded ? 'opacity-90' : ''
            }`}>
              <div className={`text-sm box-border caret-transparent leading-[14px] px-2.5 py-[5px] transition-colors duration-500 ${
                isExpanded ? 'bg-white/20 text-white' : 'bg-gray-100'
              }`}>
                {props.category}
              </div>
              <div className={`text-xs box-border caret-transparent h-6 leading-[18px] w-px transition-colors duration-500 md:text-sm md:leading-[21px] ${
                isExpanded ? 'bg-white/30' : 'bg-black/10'
              }`}></div>
              <div className={`text-xs box-border caret-transparent leading-[18px] transition-colors duration-500 md:text-sm md:leading-[21px] ${
                isExpanded ? 'text-white' : 'text-zinc-800'
              }`}>
                {props.date}
              </div>
            </div>
            <h5 className={`text-base font-medium box-border caret-transparent leading-6 transition-colors duration-500 md:text-lg md:font-normal md:leading-[27px] ${
              isExpanded ? 'text-white' : 'text-black'
            }`}>
              {props.title}
            </h5>
          </div>
          <div
            className={`box-border caret-transparent transition-all duration-500 overflow-hidden ${
              isExpanded
                ? 'opacity-100 max-h-[500px] mt-4'
                : 'opacity-0 max-h-0 mt-0'
            }`}
          >
            <div className="text-white text-sm items-center box-border caret-transparent gap-x-2.5 flex justify-start leading-[16.8px]">
              <div className="box-border caret-transparent">{props.linkText}</div>
              <img
                src={props.arrowIconUrl}
                alt="Arrow"
                className="box-border caret-transparent max-w-full brightness-0 invert"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
