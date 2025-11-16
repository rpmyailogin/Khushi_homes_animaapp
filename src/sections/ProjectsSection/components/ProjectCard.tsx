export type ProjectCardProps = {
  href: string;
  imageUrl: string;
  imageAlt: string;
  location: string;
  title: string;
  description: string;
  buttonText: string;
  arrowIconUrl: string;
  arrowIconAlt: string;
  descriptionContainerWidth?: string;
};

export const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div role="listitem" className="box-border caret-transparent flex">
      <a
        href={props.href}
        className="relative items-stretch bg-gray-100 box-border caret-transparent flex flex-col justify-end max-w-full underline w-full overflow-hidden hover:no-underline"
      >
        <div className="box-border caret-transparent overflow-hidden">
          <img
            src={props.imageUrl}
            alt={props.imageAlt}
            className="aspect-[auto_416_/_570] box-border caret-transparent inline-block h-[570px] max-h-[400px] max-w-full min-h-[400px] object-cover w-full md:max-h-[570px] md:min-h-[570px]"
          />
        </div>
        <div className="absolute bg-gray-100 box-border caret-transparent flex flex-col gap-y-[30px] translate-y-[30px] px-5 py-4 bottom-[0%] inset-x-[0%] md:p-[30px]">
          <div className="box-border caret-transparent">
            <div className="text-sm box-border caret-transparent leading-[21px]">
              {props.location}
            </div>
            <h4 className="text-black text-lg box-border caret-transparent leading-[27px] mt-0.5 md:text-[22px] md:leading-[33px]">
              {props.title}
            </h4>
          </div>
          <div
            className={`box-border caret-transparent hidden h-0 min-h-0 min-w-0 overflow-hidden md:block md:min-h-[auto] md:min-w-[auto] ${props.descriptionContainerWidth || ""}`}
          >
            <p className="box-border caret-transparent mb-[30px]">
              {props.description}
            </p>
            <div className="text-white text-sm items-center box-border caret-transparent gap-x-2.5 flex justify-start leading-[16.8px]">
              <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
                {props.buttonText}
              </div>
              <img
                src={props.arrowIconUrl}
                alt={props.arrowIconAlt}
                className="box-border caret-transparent max-w-full min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"
              />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
