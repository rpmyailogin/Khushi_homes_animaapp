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
  return (
    <div role="listitem" className="box-border caret-transparent flex">
      <a
        href={props.href}
        className="box-border caret-transparent flex flex-col max-w-full w-full border border-solid border-black/10 md:flex-row hover:bg-gray-100"
      >
        <div className="bg-gray-100 box-border caret-transparent max-w-none w-full overflow-hidden md:max-w-[40%]">
          <img
            src={props.imageUrl}
            alt={props.imageAlt}
            className="box-border caret-transparent inline-block max-h-[250px] max-w-full min-h-[250px] object-cover w-full md:max-h-[300px] md:min-h-[300px]"
          />
        </div>
        <div className="items-start box-border caret-transparent flex flex-col justify-between max-w-none gap-y-5 w-full p-[18px] md:max-w-[60%] md:p-[26px]">
          <div className="box-border caret-transparent">
            <div className="text-xs items-center box-border caret-transparent gap-x-3.5 flex justify-start leading-[18px] mb-[15px] md:text-sm md:leading-[21px]">
              <div className="text-sm bg-gray-100 box-border caret-transparent leading-[14px] px-2.5 py-[5px]">
                {props.category}
              </div>
              <div className="text-xs bg-black/10 box-border caret-transparent h-6 leading-[18px] w-px md:text-sm md:leading-[21px]"></div>
              <div className="text-xs box-border caret-transparent leading-[18px] md:text-sm md:leading-[21px]">
                {props.date}
              </div>
            </div>
            <h5 className="text-black text-base font-medium box-border caret-transparent leading-6 md:text-lg md:font-normal md:leading-[27px]">
              {props.title}
            </h5>
          </div>
          <div className="text-black text-sm items-center box-border caret-transparent gap-x-2.5 flex justify-start leading-[16.8px]">
            <div className="box-border caret-transparent">{props.linkText}</div>
            <img
              src={props.arrowIconUrl}
              alt="Arrow"
              className="box-border caret-transparent max-w-full"
            />
          </div>
        </div>
      </a>
    </div>
  );
};
