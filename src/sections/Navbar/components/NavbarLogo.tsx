import { Link } from "react-router-dom";

export const NavbarLogo = () => {
  return (
    <Link
      to="/"
      className="box-border caret-transparent block max-w-full no-underline hover:no-underline"
    >
      <svg
        viewBox="0 0 220 40"
        className="h-10 w-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* House Icon */}
        <path
          d="M8 20L16 12L24 20V32H20V24H12V32H8V20Z"
          fill="#8B4513"
        />
        <circle cx="18" cy="18" r="1.5" fill="#DAA520"/>
        <path
          d="M21 13L23 11V8H21V13Z"
          fill="#8B4513"
        />

        {/* KHUSHI HOMES Text */}
        <text
          x="30"
          y="26"
          fontFamily="Georgia, serif"
          fontSize="18"
          fontWeight="600"
          fill="#2C1810"
          letterSpacing="1"
        >
          KHUSHI HOMES
        </text>

        {/* Decorative leaf */}
        <path
          d="M210 18C210 18 212 16 214 18C216 20 214 22 212 22C210 22 210 20 210 18Z"
          fill="#6B8E23"
        />
      </svg>
    </Link>
  );
};
