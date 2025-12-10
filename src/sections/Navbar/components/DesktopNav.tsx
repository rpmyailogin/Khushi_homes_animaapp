import { Link } from "react-router-dom";

export const DesktopNav = () => {
  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      role="navigation"
      className="relative items-center backdrop-blur-md bg-white/90 border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 box-border caret-transparent gap-x-[35px] hidden flex-col float-right justify-center min-h-0 min-w-0 p-5 border-b-black/10 border-b md:bg-transparent md:backdrop-blur-none md:border-b-zinc-800 md:flex md:flex-row md:min-h-[auto] md:min-w-[auto] md:p-0 md:border-b-0"
    >
      <Link
        to="/"
        onClick={handleHomeClick}
        className="relative text-black text-sm items-start box-border caret-transparent flex flex-col justify-start leading-[16.8px] max-w-full min-h-0 min-w-0 uppercase overflow-hidden py-3 md:[align-items:normal] md:justify-normal md:min-h-[auto] md:min-w-[auto] md:pt-0 md:pb-0.5"
      >
        <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          Home
        </div>
        <div className="absolute bg-black box-border caret-transparent h-px transform-none w-full bottom-[0%] inset-x-[0%] md:translate-x-[-110.0%]"></div>
      </Link>
      <Link
        to="/about"
        className="relative text-black text-sm items-start box-border caret-transparent flex flex-col justify-start leading-[16.8px] max-w-full min-h-0 min-w-0 uppercase overflow-hidden py-3 md:[align-items:normal] md:justify-normal md:min-h-[auto] md:min-w-[auto] md:pt-0 md:pb-0.5"
      >
        <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          About us
        </div>
        <div className="absolute bg-black box-border caret-transparent h-px transform-none w-full bottom-[0%] inset-x-[0%] md:translate-x-[-110.0%]"></div>
      </Link>
      <Link
        to="/services"
        className="relative text-black text-sm items-start box-border caret-transparent flex flex-col justify-start leading-[16.8px] max-w-full min-h-0 min-w-0 uppercase overflow-hidden py-3 md:[align-items:normal] md:justify-normal md:min-h-[auto] md:min-w-[auto] md:pt-0 md:pb-0.5"
      >
        <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          Services
        </div>
        <div className="absolute bg-black box-border caret-transparent h-px transform-none w-full bottom-[0%] inset-x-[0%] md:translate-x-[-110.0%]"></div>
      </Link>
      <Link
        to="/projects"
        className="relative text-black text-sm items-start box-border caret-transparent flex flex-col justify-start leading-[16.8px] max-w-full min-h-0 min-w-0 uppercase overflow-hidden py-3 md:[align-items:normal] md:justify-normal md:min-h-[auto] md:min-w-[auto] md:pt-0 md:pb-0.5"
      >
        <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          Projects
        </div>
        <div className="absolute bg-black box-border caret-transparent h-px transform-none w-full bottom-[0%] inset-x-[0%] md:translate-x-[-110.0%]"></div>
      </Link>
      <Link
        to="/blogs"
        className="relative text-black text-sm items-start box-border caret-transparent flex flex-col justify-start leading-[16.8px] max-w-full min-h-0 min-w-0 uppercase overflow-hidden py-3 md:[align-items:normal] md:justify-normal md:min-h-[auto] md:min-w-[auto] md:pt-0 md:pb-0.5"
      >
        <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          Blogs
        </div>
        <div className="absolute bg-black box-border caret-transparent h-px transform-none w-full bottom-[0%] inset-x-[0%] md:translate-x-[-110.0%]"></div>
      </Link>
      <Link
        to="/contact"
        className="relative text-black text-sm items-start box-border caret-transparent flex flex-col justify-start leading-[16.8px] max-w-full min-h-0 min-w-0 uppercase overflow-hidden py-3 md:[align-items:normal] md:justify-normal md:min-h-[auto] md:min-w-[auto] md:pt-0 md:pb-0.5"
      >
        <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          Contact
        </div>
        <div className="absolute bg-black box-border caret-transparent h-px transform-none w-full bottom-[0%] inset-x-[0%] md:translate-x-[-110.0%]"></div>
      </Link>
    </nav>
  );
};
