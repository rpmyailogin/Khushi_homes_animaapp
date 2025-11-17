import { Link } from "react-router-dom";

export const NavbarLogo = () => {
  return (
    <Link
      to="/"
      className="box-border caret-transparent block max-w-full no-underline hover:no-underline"
    >
      <img
        src="/static/Gemini_Generated_Image_4ql4vd4ql4vd4ql4.png"
        alt="Khushi Homes"
        className="h-10 w-auto"
      />
    </Link>
  );
};
