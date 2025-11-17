export const ImageGallery = () => {
  return (
    <div className="box-border caret-transparent flex gap-x-4 md:gap-x-5">
      <div className="relative bg-gray-100 box-border caret-transparent w-48 h-48 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/29672214/pexels-photo-29672214.jpeg"
          alt="About Image 1"
          className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
        />
      </div>
      <div className="relative bg-gray-100 box-border caret-transparent w-48 h-48 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
          alt="About Image 2"
          className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
        />
      </div>
    </div>
  );
};
