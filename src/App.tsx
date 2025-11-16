import { Routes, Route } from "react-router-dom";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { HomePage } from "@/pages/HomePage";
import { ProjectsPage } from "@/pages/ProjectsPage";
import { ServicesPage } from "@/pages/ServicesPage";
import { BlogsPage } from "@/pages/BlogsPage";
import { CaseStudiesPage } from "@/pages/CaseStudiesPage";
import { RecentProjectsPage } from "@/pages/RecentProjectsPage";

export const App = () => {
  return (
    <div className="text-zinc-800 text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-[27.2px] list-outside list-disc min-h-full pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-public_sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/recent-projects" element={<RecentProjectsPage />} />
      </Routes>
      <Footer />
      <ScrollToTop />
      <div className="fixed box-border caret-transparent contents z-[2147483647] left-0 top-0">
        <div className="caret-transparent"></div>
      </div>
    </div>
  );
};
