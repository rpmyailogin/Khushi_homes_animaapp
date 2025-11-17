export const ImageGallery = () => {
  return (
    <div className="box-border caret-transparent flex gap-x-4 md:gap-x-5">
      <div className="relative bg-gray-100 box-border caret-transparent w-48 h-48 overflow-hidden">
        <img
          src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/67a0915d484acc07916249a8_about-us-02.jpg"
          alt="About Image 1"
          className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
        />
      </div>
      <div className="relative bg-gray-100 box-border caret-transparent w-48 h-48 overflow-hidden">
        <img
          src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/67a0915d79eeea9dd5fc58aa_about-us-01.jpg"
          alt="About Image 2"
          className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
          loading="eager"
        />
      </div>
    </div>
  );
};
