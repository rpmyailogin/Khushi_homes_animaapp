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
    <div className="box-border caret-transparent mb-5">
      <div
        className={`${isWhiteVariant ? "text-white" : ""} text-sm items-center box-border caret-transparent gap-x-2 flex justify-start leading-[16.8px] uppercase mb-[5px]`}
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
        className={`${textColorClass} text-[28px] font-medium box-border caret-transparent leading-[42px] uppercase md:text-4xl md:leading-[54px]`}
      >
        {props.title}
      </h2>
    </div>
  );
};
