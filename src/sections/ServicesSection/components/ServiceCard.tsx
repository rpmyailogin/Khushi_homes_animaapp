export type ServiceCardProps = {
  title: string;
  iconUrl: string;
  description: string;
  serviceImageUrl: string;
  href: string;
};

export const ServiceCard = (props: ServiceCardProps) => {
  return (
    <div role="listitem" className="box-border caret-transparent flex">
      <a
        href={props.href}
        className="relative box-border caret-transparent flex flex-col max-w-full gap-y-[30px] w-full border p-5 border-solid border-black/10 md:block md:flex-row md:gap-y-[normal] md:p-[34px] hover:bg-gray-100 hover:shadow-[rgba(0,0,0,0.06)_0px_30px_60px_0px]"
      >
        <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] gap-y-60 md:min-h-0 md:min-w-0">
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
          <p className="box-border caret-transparent hidden min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
            {props.description}
          </p>
        </div>
        <div className="static bg-gray-100 box-border caret-transparent min-h-[auto] min-w-[auto] bottom-[34px] inset-x-[34px] md:absolute md:min-h-0 md:min-w-0">
          <img
            src={props.serviceImageUrl}
            alt="Service Image"
            className="aspect-[auto_362_/_264] box-border caret-transparent inline-block h-[264px] max-h-[210px] max-w-full min-h-[210px] object-cover w-full md:max-h-[264px] md:min-h-[264px]"
          />
        </div>
      </a>
    </div>
  );
};
