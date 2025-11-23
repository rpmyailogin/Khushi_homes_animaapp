import { NavbarLogo } from "@/sections/Navbar/components/NavbarLogo";
import { DesktopNav } from "@/sections/Navbar/components/DesktopNav";
import { MobileNav } from "@/sections/Navbar/components/MobileNav";
import { SocialLinks } from "@/components/SocialLinks";
import { useLocation } from "react-router-dom";

export const NavbarContent = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  return (
    <div className="box-border caret-transparent max-w-full w-full mx-auto px-5 md:max-w-[1336px] before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27.2px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-public_sans after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27.2px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-public_sans">
      <div className="items-center box-border caret-transparent flex justify-between">
        <NavbarLogo />
        <DesktopNav />
        <div className="flex items-center gap-x-4">
          <div className={isAboutPage ? "hidden md:block" : ""}>
            <SocialLinks />
          </div>
          <MobileNav />
        </div>
      </div>
    </div>
  );
};
