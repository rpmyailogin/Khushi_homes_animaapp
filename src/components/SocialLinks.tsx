export const SocialLinks = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-4 flex justify-end md:gap-x-[25px]">
      <div className="box-border caret-transparent flex min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
        <a
          href="http://x.com/"
          className="items-center box-border caret-transparent flex justify-center p-2 touch-manipulation hover:bg-black/5 rounded transition-colors"
          aria-label="Twitter"
        >
          <img
            src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c533fc466e9c9e3675d60_twitter.svg"
            alt="Twitter"
            className="box-border caret-transparent max-w-[20px] max-h-[20px] md:max-w-[24px] md:max-h-[24px]"
          />
        </a>
        <a
          href="https://www.instagram.com/"
          className="items-center box-border caret-transparent flex justify-center p-2 touch-manipulation hover:bg-black/5 rounded transition-colors"
          aria-label="Instagram"
        >
          <img
            src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c533edd83c2c460e44f5a_insta.svg"
            alt="Instagram"
            className="box-border caret-transparent max-w-[20px] max-h-[20px] md:max-w-[24px] md:max-h-[24px]"
          />
        </a>
        <a
          href="https://www.linkedin.com/"
          className="items-center box-border caret-transparent flex justify-center p-2 touch-manipulation hover:bg-black/5 rounded transition-colors"
          aria-label="LinkedIn"
        >
          <img
            src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c533efd2f81997cf9a25d_linkdin.svg"
            alt="LinkedIn"
            className="box-border caret-transparent max-w-[20px] max-h-[20px] md:max-w-[24px] md:max-h-[24px]"
          />
        </a>
      </div>
    </div>
  );
};
