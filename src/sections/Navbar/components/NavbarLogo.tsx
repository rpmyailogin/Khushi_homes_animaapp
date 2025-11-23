import { Link } from "react-router-dom";

export const NavbarLogo = () => {
  return (
    <Link
      to="/"
      className="box-border caret-transparent block max-w-full no-underline hover:no-underline"
    >
      <img
        src="/static/dgdhd.jpg"
        alt="Khushi Homes"
        className="h-10 w-auto"
      />
    </Link>
  );
};
