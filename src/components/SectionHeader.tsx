export type SectionHeaderProps = {
  subtitle: string;
  title: string;
  variant?: string;
};

export const SectionHeader = (props: SectionHeaderProps) => {
  const isWhiteVariant = props.variant === "white";
  const textColorClass = isWhiteVariant ? "text-white" : "text-black";
  const decoratorClass = isWhiteVariant ? "bg-white/10" : "bg-black/10";

  return (
    <div className="box-border caret-transparent mb-4 sm:mb-5">
      <div
        className={`${isWhiteVariant ? "text-white" : ""} text-sm items-center box-border caret-transparent gap-x-2 flex justify-start leading-[18px] uppercase mb-1 sm:text-base sm:leading-[21.6px] sm:mb-[5px] md:text-lg`}
      >
        <div className="box-border caret-transparent gap-x-1 flex">
          <div
            className={`box-border caret-transparent max-h-1.5 max-w-1.5 min-h-1.5 min-w-1.5 ${decoratorClass}`}
          ></div>
          <div
            className={`box-border caret-transparent max-h-1.5 max-w-1.5 min-h-1.5 min-w-1.5 ${decoratorClass}`}
          ></div>
        </div>
        <div className="box-border caret-transparent">{props.subtitle}</div>
      </div>
      <h2
        className={`${textColorClass} text-xl font-medium box-border caret-transparent leading-[30px] uppercase sm:text-[28px] sm:leading-[42px] md:text-4xl md:leading-[54px]`}
      >
        {props.title}
      </h2>
    </div>
  );
};
