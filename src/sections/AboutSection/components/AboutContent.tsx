export const AboutContent = () => {
  return (
    <div className="items-start box-border caret-transparent flex flex-col justify-start">
      <p className="text-white text-lg box-border caret-transparent leading-[27px] mb-[30px] md:text-[28px] md:leading-[42px] md:mb-10">
        Drill is not just a construction company we are builders of dreams. With
        over 25 years of expertise, we’ve become leaders in delivering
        high-quality, sustainable construction solutions that push the
        boundaries of modern architecture.
      </p>
      <a
        href="https://drill-template.webflow.io/about-us"
        className="text-white text-sm items-center box-border caret-transparent gap-x-2.5 flex justify-center leading-[16.8px] max-w-full border px-[22px] py-3 border-solid border-white"
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
