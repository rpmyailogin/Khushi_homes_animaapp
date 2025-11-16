export type ViewAllButtonProps = {
  text: string;
  href: string;
};

export const ViewAllButton = (props: ViewAllButtonProps) => {
  return (
    <div className="items-center box-border caret-transparent gap-x-5 flex flex-wrap justify-end gap-y-5 mt-10 md:flex-nowrap md:gap-y-[normal]">
      <a
        href={props.href}
        className="text-black text-sm items-center box-border caret-transparent gap-x-2.5 flex justify-center leading-[16.8px] max-w-full border px-[22px] py-3 border-solid"
      >
        <div className="relative box-border caret-transparent overflow-hidden">
          <div className="box-border caret-transparent gap-x-1 flex">
            {props.text}
          </div>
          <div className="absolute box-border caret-transparent gap-x-1 flex">
            {props.text}
          </div>
        </div>
        <img
          src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c726c1827c33928d75854_ic-black-arrow.svg"
          alt="Arrow"
          className="box-border caret-transparent max-w-full"
        />
      </a>
    </div>
  );
};
