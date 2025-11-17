export const AboutContent = () => {
  return (
    <div className="items-start box-border caret-transparent flex flex-col justify-start max-w-4xl">
      <p className="text-white text-lg box-border caret-transparent leading-[27px] mb-8 md:text-xl md:leading-[32px] md:mb-10">
        Khushi Homes specializes in delivering premium construction services throughout Australia, combining traditional craftsmanship with innovative building techniques. Our commitment to quality, transparency, and customer satisfaction has established us as a trusted partner for homeowners seeking exceptional results.
      </p>
      <a
        href="/"
        className="text-white text-sm items-center box-border caret-transparent gap-x-2.5 flex justify-center leading-[16.8px] max-w-full border px-[22px] py-3 border-solid border-white hover:bg-white hover:text-black transition-colors"
      >
        <div className="relative box-border caret-transparent overflow-hidden">
          <div className="box-border caret-transparent gap-x-1 flex">
            About us
          </div>
          <div className="absolute box-border caret-transparent gap-x-1 flex">
            About us
          </div>
        </div>
        <img
          src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c559d1989cb82e96c949e_15fec19f4179bbda8c7cdc30da4795c2_button-arrow.svg"
          alt="Arrow"
          className="box-border caret-transparent max-w-full"
        />
      </a>
    </div>
  );
};
