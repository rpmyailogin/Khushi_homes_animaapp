export const SocialLinks = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-4 flex justify-end md:gap-x-[25px]">
      <div className="box-border caret-transparent hidden min-h-0 min-w-0 md:flex md:min-h-[auto] md:min-w-[auto]">
        <a
          href="http://x.com/"
          className="items-center box-border caret-transparent flex justify-center max-h-[30px] max-w-[30px] min-h-[30px] min-w-[30px] underline hover:no-underline"
        >
          <img
            src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c533fc466e9c9e3675d60_twitter.svg"
            alt="Social Icon"
            className="box-border caret-transparent max-w-full min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"
          />
        </a>
        <a
          href="https://www.instagram.com/"
          className="items-center box-border caret-transparent flex justify-center max-h-[30px] max-w-[30px] min-h-[30px] min-w-[30px] underline hover:no-underline"
        >
          <img
            src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c533edd83c2c460e44f5a_insta.svg"
            alt="Social Icon"
            className="box-border caret-transparent max-w-full min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"
          />
        </a>
        <a
          href="https://www.linkedin.com/"
          className="items-center box-border caret-transparent flex justify-center max-h-[30px] max-w-[30px] min-h-[30px] min-w-[30px] underline hover:no-underline"
        >
          <img
            src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c533efd2f81997cf9a25d_linkdin.svg"
            alt="Social Icon"
            className="box-border caret-transparent max-w-full min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"
          />
        </a>
      </div>
      <div
        aria-label="menu"
        role="button"
        className="relative text-2xl box-border caret-transparent block float-right min-h-[auto] min-w-[auto] p-0 md:hidden md:min-h-0 md:min-w-0 md:p-[18px]"
      >
        <div className="bg-black box-border caret-transparent h-px w-6"></div>
        <div className="bg-black box-border caret-transparent h-px w-6 my-1.5"></div>
        <div className="bg-black box-border caret-transparent h-px w-6"></div>
      </div>
    </div>
  );
};
