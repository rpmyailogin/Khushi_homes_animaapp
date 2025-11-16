export const FeaturedBlogCard = () => {
  return (
    <div className="box-border caret-transparent max-w-none w-full md:max-w-[50%]">
      <div className="box-border caret-transparent">
        <div role="list" className="box-border caret-transparent">
          <div role="listitem" className="box-border caret-transparent flex">
            <a
              href="https://drill-template.webflow.io/blog-posts/building-smart-how-technology-is-transforming-construction"
              className="box-border caret-transparent block max-w-full w-full"
            >
              <div className="bg-gray-100 box-border caret-transparent overflow-hidden">
                <img
                  src="https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/679cb63a5742e9506defbe20_blog-main-01.jpg"
                  alt="Post Image"
                  className="aspect-[auto_633_/_492] box-border caret-transparent inline-block h-[492px] max-h-[220px] max-w-full min-h-[220px] object-cover w-full md:max-h-[492px] md:min-h-[492px]"
                />
              </div>
              <div className="box-border caret-transparent border p-5 border-solid border-black/10 md:py-[30px]">
                <div className="text-xs items-center box-border caret-transparent gap-x-3.5 flex justify-start leading-[18px] mb-[15px] md:text-sm md:leading-[21px]">
                  <div className="text-sm bg-gray-100 box-border caret-transparent leading-[14px] px-2.5 py-[5px]">
                    Technology
                  </div>
                  <div className="text-xs bg-black/10 box-border caret-transparent h-6 leading-[18px] w-px md:text-sm md:leading-[21px]"></div>
                  <div className="text-xs box-border caret-transparent leading-[18px] md:text-sm md:leading-[21px]">
                    Feb 11, 2025
                  </div>
                </div>
                <h4 className="text-black text-lg box-border caret-transparent leading-[27px] md:text-xl md:leading-[30px]">
                  Building smart how technology is transforming construction
                </h4>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
