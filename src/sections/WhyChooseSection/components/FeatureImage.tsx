export const FeatureImage = () => {
  return (
    <div className="relative bg-gray-100 box-border caret-transparent hidden max-w-[35%] min-h-0 min-w-0 w-full overflow-hidden md:block md:min-h-[auto] md:min-w-[auto]">
      <img
        src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/67a095057fd16e142ced37ea_why-choose-02.jpg"
        alt="WHy Choose Image"
        className="aspect-[auto_251_/_256] box-border caret-transparent inline-block h-64 max-h-64 max-w-full min-h-64 object-cover w-full"
      />
      <div className="absolute bg-gray-100 bottom-[-1%] box-border caret-transparent left-[-1%] right-[-1%] top-[-1%] transform-none md:translate-y-[100.0%]"></div>
    </div>
  );
};
