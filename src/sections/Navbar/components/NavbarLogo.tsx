import { Link } from "react-router-dom";
import { KhushiLogo } from "@/components/KhushiLogo";

export const NavbarLogo = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Link
      to="/"
      onClick={handleClick}
      className="box-border caret-transparent block max-w-full no-underline hover:no-underline"
    >
      <KhushiLogo className="h-10 w-auto" />
    </Link>
  );
};
