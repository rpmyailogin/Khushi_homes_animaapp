import { NavbarContent } from "@/sections/Navbar/components/NavbarContent";

export const NavbarContainer = () => {
  return (
    <div
      role="banner"
      className="relative border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 box-border caret-transparent z-[1000] py-2 border-b-black/10 border-b before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27.2px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-public_sans after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27.2px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-public_sans"
    >
      <NavbarContent />
      <div className="absolute box-border caret-transparent hidden w-full overflow-hidden top-full inset-x-0"></div>
    </div>
  );
};
