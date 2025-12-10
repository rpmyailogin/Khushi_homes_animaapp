import { useEffect } from "react";
import { AboutHeroSection } from "@/sections/AboutHeroSection";
import { AboutTeamSection } from "@/sections/AboutTeamSection";

export const AboutUsPage = () => {
  useEffect(() => {
    document.title = "About Us - Khushi Homes";
  }, []);

  return (
    <>
      <AboutHeroSection />
      <AboutTeamSection />
    </>
  );
};
