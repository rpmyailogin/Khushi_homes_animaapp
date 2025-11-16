import { Link } from "react-router-dom";

export const NavbarLogo = () => {
  return (
    <Link
      to="/"
      className="box-border caret-transparent block max-w-full no-underline hover:no-underline"
    >
      <span className="text-black text-2xl font-semibold box-border caret-transparent">
        Khushi Homes
      </span>
    </Link>
  );
};
