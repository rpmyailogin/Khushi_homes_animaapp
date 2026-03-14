import logoSrc from "@/assets/Khushi_homes_logo.svg";

interface KhushiLogoProps {
  className?: string;
}

export const KhushiLogo = ({ className = "h-10 w-auto" }: KhushiLogoProps) => {
  return (
    <img
      src={logoSrc}
      alt="Khushi Homes"
      className={className}
    />
  );
};
