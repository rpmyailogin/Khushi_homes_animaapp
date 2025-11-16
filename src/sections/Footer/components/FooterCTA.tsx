export const FooterCTA = () => {
  return (
    <div className="items-start border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 box-border caret-transparent flex flex-col justify-between gap-y-10 pb-10 border-b-white/20 border-b md:items-center md:flex-row md:gap-y-[normal] md:pb-[50px]">
      <div className="items-start box-border caret-transparent flex flex-col justify-start max-w-none w-full md:max-w-[42%]">
        <h2 className="text-white text-[26px] box-border caret-transparent leading-[33.8px] mb-[30px] md:text-[40px] md:leading-[52px]">
          Contact us today to discuss your next project
        </h2>
        <a
          href="/"
          className="text-white text-sm items-center bg-red-600 box-border caret-transparent gap-x-2.5 flex justify-center leading-[16.8px] max-w-full px-[22px] py-3"
        >
          <div className="relative box-border caret-transparent overflow-hidden">
            <div className="box-border caret-transparent gap-x-1 flex">
              Collaborate Now
            </div>
            <div className="absolute box-border caret-transparent gap-x-1 flex">
              Collaborate Now
            </div>
          </div>
          <img
            src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c559d1989cb82e96c949e_15fec19f4179bbda8c7cdc30da4795c2_button-arrow.svg"
            alt="Arrow"
            className="box-border caret-transparent max-w-full"
          />
        </a>
      </div>
      <div className="items-center box-border caret-transparent gap-x-[22px] flex flex-wrap justify-start gap-y-[22px] md:flex-nowrap md:gap-y-[normal]">
        <a
          href="/"
          className="text-white text-sm items-center box-border caret-transparent gap-x-1.5 flex justify-start leading-[21px] max-w-full"
        >
          <img
            src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c772f28d0cf7e15328a4c_ic-about.svg"
            alt="Icon"
            className="box-border caret-transparent max-h-4 max-w-4 min-h-4 min-w-4"
          />
          <div className="box-border caret-transparent">About us</div>
        </a>
        <a
          href="/"
          className="text-white text-sm items-center box-border caret-transparent gap-x-1.5 flex justify-start leading-[21px] max-w-full"
        >
          <img
            src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c772f48e62cb358912407_ic-projects.svg"
            alt="Icon"
            className="box-border caret-transparent max-h-4 max-w-4 min-h-4 min-w-4"
          />
          <div className="box-border caret-transparent">Projects</div>
        </a>
        <a
          href="/"
          className="text-white text-sm items-center box-border caret-transparent gap-x-1.5 flex justify-start leading-[21px] max-w-full"
        >
          <img
            src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c772fbd9d9a04eda41714_ic-basic.svg"
            alt="Icon"
            className="box-border caret-transparent max-h-4 max-w-4 min-h-4 min-w-4"
          />
          <div className="box-border caret-transparent">Services</div>
        </a>
        <a
          href="/"
          className="text-white text-sm items-center box-border caret-transparent gap-x-1.5 flex justify-start leading-[21px] max-w-full"
        >
          <img
            src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c772f4e9c2e629fc2ab34_ic-articles.svg"
            alt="Icon"
            className="box-border caret-transparent max-h-4 max-w-4 min-h-4 min-w-4"
          />
          <div className="box-border caret-transparent">Blogs</div>
        </a>
        <a
          href="/"
          className="text-white text-sm items-center box-border caret-transparent gap-x-1.5 flex justify-start leading-[21px] max-w-full"
        >
          <img
            src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c772fcfa7a1910d8d983f_ic-review.svg"
            alt="Icon"
            className="box-border caret-transparent max-h-4 max-w-4 min-h-4 min-w-4"
          />
          <div className="box-border caret-transparent">Reviews</div>
        </a>
        <a
          href="/"
          className="text-white text-sm items-center box-border caret-transparent gap-x-1.5 flex justify-start leading-[21px] max-w-full"
        >
          <img
            src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c772f3b1c191a1b6b7914_ic-faq.svg"
            alt="Icon"
            className="box-border caret-transparent max-h-4 max-w-4 min-h-4 min-w-4"
          />
          <div className="box-border caret-transparent">FAQ</div>
        </a>
      </div>
    </div>
  );
};
