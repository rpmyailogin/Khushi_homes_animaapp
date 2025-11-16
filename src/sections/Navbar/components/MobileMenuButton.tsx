export const MobileMenuButton = () => {
  return (
    <div
      aria-label="menu"
      role="button"
      className="relative text-2xl box-border caret-transparent block float-right min-h-[auto] min-w-[auto] p-0 md:hidden md:min-h-0 md:min-w-0 md:p-[18px]"
    >
      <div className="bg-black box-border caret-transparent h-px w-6"></div>
      <div className="bg-black box-border caret-transparent h-px w-6 my-1.5"></div>
      <div className="bg-black box-border caret-transparent h-px w-6"></div>
    </div>
  );
};
