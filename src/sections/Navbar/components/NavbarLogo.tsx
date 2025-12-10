import { Link } from "react-router-dom";

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
      <img
        src="/Khushi_homes_logo.svg"
        alt="Khushi Homes"
        className="h-10 w-auto"
      />
    </Link>
  );
};
