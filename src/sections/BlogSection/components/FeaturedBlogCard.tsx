import { useState } from 'react';

export const FeaturedBlogCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="box-border caret-transparent max-w-none w-full md:max-w-[50%]">
      <div className="box-border caret-transparent">
        <div role="list" className="box-border caret-transparent">
          <div role="listitem" className="box-border caret-transparent flex">
            <div
              className="relative items-stretch bg-gray-100 box-border caret-transparent flex flex-col justify-end max-w-full w-full overflow-hidden group cursor-pointer"
              onMouseEnter={() => setIsExpanded(true)}
              onMouseLeave={() => setIsExpanded(false)}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <div className="box-border caret-transparent overflow-hidden">
                <img
                  src="https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/679cb63a5742e9506defbe20_blog-main-01.jpg"
                  alt="Post Image"
                  className="aspect-[auto_633_/_492] box-border caret-transparent inline-block h-[492px] max-h-[220px] max-w-full min-h-[220px] object-cover w-full transition-transform duration-500 group-hover:scale-105 md:max-h-[492px] md:min-h-[492px]"
                />
              </div>
              <div
                className={`absolute box-border caret-transparent flex flex-col justify-center transition-all duration-500 ease-in-out px-5 py-4 inset-x-[0%] md:py-[30px] ${
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
                      Technology
                    </div>
                    <div className={`text-xs box-border caret-transparent h-6 leading-[18px] w-px transition-colors duration-500 md:text-sm md:leading-[21px] ${
                      isExpanded ? 'bg-white/30' : 'bg-black/10'
                    }`}></div>
                    <div className={`text-xs box-border caret-transparent leading-[18px] transition-colors duration-500 md:text-sm md:leading-[21px] ${
                      isExpanded ? 'text-white' : 'text-zinc-800'
                    }`}>
                      Feb 11, 2025
                    </div>
                  </div>
                  <h4 className={`text-lg box-border caret-transparent leading-[27px] transition-colors duration-500 md:text-xl md:leading-[30px] ${
                    isExpanded ? 'text-white' : 'text-black'
                  }`}>
                    Building smart how technology is transforming construction
                  </h4>
                </div>
                <div
                  className={`box-border caret-transparent transition-all duration-500 overflow-hidden ${
                    isExpanded
                      ? 'opacity-100 max-h-[500px] mt-4'
                      : 'opacity-0 max-h-0 mt-0'
                  }`}
                >
                  <p className="text-white text-sm box-border caret-transparent leading-relaxed">
                    Discover how cutting-edge technology is revolutionizing the construction industry, from smart building materials to AI-powered project management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
