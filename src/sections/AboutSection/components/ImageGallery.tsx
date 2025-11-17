export const ImageGallery = () => {
  return (
    <div className="box-border caret-transparent flex flex-col gap-y-4 md:gap-y-5">
      <div className="relative bg-gray-100 box-border caret-transparent w-full overflow-hidden">
        <img
          src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/67a0915d116fb26586dc2f96_about-us-01.jpg"
          alt="About Image"
          className="box-border caret-transparent inline-block h-64 max-w-full object-cover w-full md:h-80"
        />
        <div className="absolute bg-neutral-900 bottom-[-1%] box-border caret-transparent left-[-1%] right-[-1%] top-[-1%] translate-y-[-100.0%]"></div>
      </div>
      <div className="relative bg-gray-100 box-border caret-transparent w-full overflow-hidden">
        <img
          src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/67a0915d484acc07916249a8_about-us-02.jpg"
          alt="About Image"
          className="box-border caret-transparent inline-block h-48 max-w-full object-cover w-full md:h-60"
        />
        <div className="absolute bg-neutral-900 bottom-[-1%] box-border caret-transparent left-[-1%] right-[-1%] top-[-1%] translate-y-[100.0%]"></div>
      </div>
    </div>
  );
};
