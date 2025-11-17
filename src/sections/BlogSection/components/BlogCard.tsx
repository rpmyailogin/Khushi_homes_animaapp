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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div role="listitem" className="box-border caret-transparent flex">
      <a
        href={props.href}
        className="relative items-stretch bg-white border border-gray-200 box-border caret-transparent flex flex-row max-w-full w-full overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex-1 box-border caret-transparent p-6 md:p-8 flex flex-col justify-center">
          <div className="text-xs items-center box-border caret-transparent gap-x-3.5 flex justify-start leading-[18px] mb-4 md:text-sm md:leading-[21px]">
            <div className="text-sm box-border caret-transparent leading-[14px] px-2.5 py-[5px] bg-gray-100 text-zinc-800">
              {props.category}
            </div>
            <div className="text-xs box-border caret-transparent h-6 leading-[18px] w-px bg-black/10 md:text-sm md:leading-[21px]"></div>
            <div className="text-xs box-border caret-transparent leading-[18px] text-zinc-800 md:text-sm md:leading-[21px]">
              {props.date}
            </div>
          </div>
          <h5 className="text-lg font-normal box-border caret-transparent leading-[27px] text-black mb-6 md:text-xl md:leading-[30px]">
            {props.title}
          </h5>
          <div className="text-sm items-center box-border caret-transparent gap-x-2.5 flex justify-start leading-[16.8px] text-zinc-800">
            <div className="box-border caret-transparent">{props.linkText}</div>
            <img
              src={props.arrowIconUrl}
              alt="Arrow"
              className={`box-border caret-transparent max-w-full transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}
            />
          </div>
        </div>
        <div className="w-[40%] box-border caret-transparent overflow-hidden flex-shrink-0">
          <img
            src={props.imageUrl}
            alt={props.imageAlt}
            className="box-border caret-transparent h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </a>
    </div>
  );
};
