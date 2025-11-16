export type StatItemProps = {
  iconUrl: string;
  description: string;
};

export const StatItem = (props: StatItemProps) => {
  return (
    <div className="items-center box-border caret-transparent gap-x-3 flex justify-start min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
      <div className="items-center box-border caret-transparent flex justify-center max-h-[45px] max-w-[45px] min-h-[45px] min-w-[45px] border rounded-[50%] border-solid">
        <img
          src={props.iconUrl}
          alt="Icon"
          className="box-border caret-transparent max-w-full min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"
        />
      </div>
      <p className="text-sm box-border caret-transparent leading-[21px] min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
        {props.description}
      </p>
    </div>
  );
};
