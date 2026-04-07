import React from "react";
import logoSrc from "@/assets/Khushi_homes_logo.svg";

interface KhushiLogoProps {
  className?: string;
  style?: React.CSSProperties;
}

export const KhushiLogo = ({ className = "h-10 w-auto", style }: KhushiLogoProps) => {
  return (
    <img
      src={logoSrc}
      alt="Khushi Homes"
      className={className}
      style={{ objectFit: "contain", backgroundColor: "transparent", ...style }}
    />
  );
};
