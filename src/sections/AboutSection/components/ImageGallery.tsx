export const ImageGallery = () => {
  return (
    <div className="box-border caret-transparent gap-x-3 flex mb-[25px] md:gap-x-5 md:mb-[30px]">
      <div className="relative bg-gray-100 box-border caret-transparent max-w-[250px] w-full overflow-hidden">
        <img
          src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/67a0915d116fb26586dc2f96_about-us-01.jpg"
          alt="About Image"
          className="box-border caret-transparent inline-block max-h-40 max-w-full min-h-40 object-cover w-full md:max-h-[250px] md:min-h-[250px]"
        />
        <div className="absolute bg-neutral-900 bottom-[-1%] box-border caret-transparent left-[-1%] right-[-1%] top-[-1%] translate-y-[-100.0%]"></div>
      </div>
      <div className="relative bg-gray-100 box-border caret-transparent max-w-[250px] w-full overflow-hidden">
        <img
          src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/67a0915d484acc07916249a8_about-us-02.jpg"
          alt="About Image"
          className="box-border caret-transparent inline-block max-h-40 max-w-full min-h-40 object-cover w-full md:max-h-[250px] md:min-h-[250px]"
        />
        <div className="absolute bg-neutral-900 bottom-[-1%] box-border caret-transparent left-[-1%] right-[-1%] top-[-1%] translate-y-[100.0%]"></div>
      </div>
    </div>
  );
};
