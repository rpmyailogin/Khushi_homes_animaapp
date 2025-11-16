export type StatsCardProps = {
  variant: string;
  badge?: string;
  title?: string;
  description?: string;
  statValue?: string;
  statDescription?: string;
};

export const StatsCard = (props: StatsCardProps) => {
  if (props.variant === "header") {
    return (
      <div className="items-start border-l-zinc-800 border-t-zinc-800 box-border caret-transparent flex flex-col border-b-black/10 border-b text-sm justify-between leading-[21px] gap-y-[30px] p-[25px] border-r-black/10 border-r md:text-base md:leading-[27.2px] md:gap-y-10 md:p-[34px]">
        <div className="box-border caret-transparent text-sm items-center gap-x-2 flex justify-start leading-[16.8px] uppercase mb-[5px]">
          <div className="box-border caret-transparent gap-x-1 flex">
            <div className="bg-black/10 box-border caret-transparent max-h-1.5 max-w-1.5 min-h-1.5 min-w-1.5"></div>
            <div className="bg-black/10 box-border caret-transparent max-h-1.5 max-w-1.5 min-h-1.5 min-w-1.5"></div>
          </div>
          <div className="box-border caret-transparent">{props.badge}</div>
        </div>
        <div className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-[27.2px]">
          <h3 className="text-black text-xl box-border caret-transparent leading-[30px] uppercase mb-1.5 md:text-[28px] md:leading-[42px]">
            {props.title}
          </h3>
          <p className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-[27.2px]">
            {props.description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`items-start border-l-zinc-800 border-t-zinc-800 box-border caret-transparent flex flex-col border-b-black/10 border-b ${props.variant}`}
    >
      <div
        className={`box-border caret-transparent ${props.variant === "bg-white border-r-zinc-800 justify-center px-[25px] py-[30px] md:px-[34px] md:py-[60px]" ? "text-black text-3xl font-medium leading-[45px] mb-1 md:text-[58px] md:leading-[87px] md:mb-1.5" : "text-white text-3xl font-medium leading-[45px] mb-1 md:text-[58px] md:leading-[87px] md:mb-1.5"}`}
      >
        {props.statValue}
      </div>
      <p
        className={`${props.variant === "bg-black border-r-zinc-800 justify-center px-[25px] py-[30px] md:px-[34px] md:py-[60px]" ? "text-neutral-400" : ""} text-sm box-border caret-transparent leading-[21px] max-w-none w-full md:text-base md:leading-[27.2px] md:max-w-[70%]`}
      >
        {props.statDescription}
      </p>
    </div>
  );
};
