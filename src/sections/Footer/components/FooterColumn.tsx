export type FooterColumnProps = {
  title?: string;
  links?: Array<{
    href: string;
    text: string;
  }>;
  contactItems?: Array<{
    label: string;
    value: string;
    href: string;
  }>;
  variant: string;
};

export const FooterColumn = (props: FooterColumnProps) => {
  if (props.variant === "contact") {
    return (
      <div className="text-neutral-400 items-start box-border caret-transparent flex flex-col justify-start gap-y-[15px] md:gap-y-[22px]">
        {props.contactItems?.map((item, index) => (
          <div className="box-border caret-transparent" key={index}>
            <div className="text-sm box-border caret-transparent leading-[21px]">
              {item.label}
            </div>
            <a
              href={item.href}
              className="text-white text-base box-border caret-transparent flex leading-6 mt-0.5 md:text-xl md:leading-[30px] hover:underline"
            >
              {item.value}
            </a>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="box-border caret-transparent">
      <div className="text-white text-sm box-border caret-transparent leading-[21px] mb-[15px]">
        {props.title}
      </div>
      <div className="items-start box-border caret-transparent flex flex-col justify-start gap-y-1">
        {props.links?.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="text-neutral-400 text-sm box-border caret-transparent block leading-[21px] hover:text-white hover:border-white"
          >
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
};
