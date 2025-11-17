import { Link } from "react-router-dom";

export const DesktopNav = () => {
  return (
    <nav
      role="navigation"
      className="relative items-center bg-white border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 box-border caret-transparent gap-x-[35px] hidden flex-col float-right justify-center min-h-0 min-w-0 p-5 border-b-black/10 border-b md:bg-transparent md:border-b-zinc-800 md:flex md:flex-row md:min-h-[auto] md:min-w-[auto] md:p-0 md:border-b-0"
    >
      <Link
        to="/"
        className="relative text-black text-sm items-start box-border caret-transparent flex flex-col justify-start leading-[16.8px] max-w-full min-h-0 min-w-0 uppercase overflow-hidden py-3 md:[align-items:normal] md:justify-normal md:min-h-[auto] md:min-w-[auto] md:pt-0 md:pb-0.5"
      >
        <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          Home
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
        to="/services"
        className="relative text-black text-sm items-start box-border caret-transparent flex flex-col justify-start leading-[16.8px] max-w-full min-h-0 min-w-0 uppercase overflow-hidden py-3 md:[align-items:normal] md:justify-normal md:min-h-[auto] md:min-w-[auto] md:pt-0 md:pb-0.5"
      >
        <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          Services
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
      <div className="relative items-start box-border caret-transparent flex flex-col justify-between max-w-[1336px] min-h-0 min-w-0 text-left z-[900] mx-0 py-3 md:[align-items:normal] md:block md:flex-row md:justify-normal md:min-h-[auto] md:min-w-[auto] md:mx-auto md:py-0">
        <div
          role="button"
          className="relative text-black text-sm items-center box-border caret-transparent gap-x-2 flex justify-between leading-[14px] uppercase text-nowrap align-top w-full mx-0 pb-0.5 md:justify-center md:w-auto md:mx-auto"
        >
          <div className="box-border caret-transparent min-h-0 min-w-0 text-nowrap md:min-h-[auto] md:min-w-[auto]">
            More
          </div>
        </div>
        <nav className="absolute bg-zinc-300 box-border caret-transparent hidden min-w-full pt-[15px] md:pt-6">
          <div className="items-stretch bg-gray-100 box-border caret-transparent flex flex-col justify-start min-w-[200px] gap-y-5 pt-4 pb-[15px] px-4 rounded-[10px] border-b-0 border-x-0 border-black/10 md:p-5 md:rounded-none md:border-b md:border-l md:border-r">
            <Link
              to="/case-studies"
              className="text-black text-sm font-medium items-center box-border caret-transparent gap-x-2 flex justify-start leading-[14px] max-w-full"
            >
              <div className="bg-black box-border caret-transparent h-px w-0"></div>
              <div className="box-border caret-transparent">Case Studies</div>
            </Link>
            <Link
              to="/recent-projects"
              className="text-black text-sm font-medium items-center box-border caret-transparent gap-x-2 flex justify-start leading-[14px] max-w-full"
            >
              <div className="bg-black box-border caret-transparent h-px w-0"></div>
              <div className="box-border caret-transparent">Recent Projects</div>
            </Link>
          </div>
        </nav>
      </div>
    </nav>
  );
};
