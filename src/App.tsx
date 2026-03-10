import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { HomePage } from "@/pages/HomePage";
import { ProjectsPage } from "@/pages/ProjectsPage";
import { ServicesPage } from "@/pages/ServicesPage";
import { BlogsPage } from "@/pages/BlogsPage";
import { RecentProjectsPage } from "@/pages/RecentProjectsPage";
import { AboutUsPage } from "@/pages/AboutUsPage";
import { ContactPage } from "@/pages/ContactPage";
import { AdminAuthProvider } from "@/contexts/AdminAuthContext";
import { ProtectedRoute } from "@/components/admin/ProtectedRoute";
import { AdminLoginPage } from "@/pages/AdminLoginPage";
import { AdminDashboard } from "@/pages/AdminDashboard";
import { AdminBlogsPage } from "@/pages/AdminBlogsPage";
import { AdminBlogEditor } from "@/pages/AdminBlogEditor";
import { AdminProjectsPage } from "@/pages/AdminProjectsPage";
import { AdminProjectEditor } from "@/pages/AdminProjectEditor";
import { AdminContactsPage } from "@/pages/AdminContactsPage";
import { AdminNewsletterPage } from "@/pages/AdminNewsletterPage";
import { AdminAdminsPage } from "@/pages/AdminAdminsPage";
import UnderConstruction from "@/components/UnderConstruction";

export const App = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  const isUnderConstruction = import.meta.env.VITE_UNDER_CONSTRUCTION === 'true';

  return (
    <AdminAuthProvider>
      <div className="text-zinc-800 text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-[27.2px] list-outside list-disc min-h-full pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-public_sans">
        <ScrollToTop />
        {!isAdminRoute && !isUnderConstruction && <Navbar />}
        <main className={!isAdminRoute && !isUnderConstruction ? "pt-[60px]" : ""}>
          <Routes>
            <Route path="/" element={isUnderConstruction ? <UnderConstruction /> : <HomePage />} />
            <Route path="/about" element={isUnderConstruction ? <UnderConstruction /> : <AboutUsPage />} />
            <Route path="/projects" element={isUnderConstruction ? <UnderConstruction /> : <ProjectsPage />} />
            <Route path="/services" element={isUnderConstruction ? <UnderConstruction /> : <ServicesPage />} />
            <Route path="/blogs" element={isUnderConstruction ? <UnderConstruction /> : <BlogsPage />} />
            <Route path="/case-studies" element={isUnderConstruction ? <UnderConstruction /> : <ProjectsPage />} />
            <Route path="/recent-projects" element={isUnderConstruction ? <UnderConstruction /> : <RecentProjectsPage />} />
            <Route path="/contact" element={isUnderConstruction ? <UnderConstruction /> : <ContactPage />} />

            <Route path="/admin/login" element={<AdminLoginPage />} />
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/blogs"
              element={
                <ProtectedRoute>
                  <AdminBlogsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/blogs/new"
              element={
                <ProtectedRoute>
                  <AdminBlogEditor />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/blogs/edit/:id"
              element={
                <ProtectedRoute>
                  <AdminBlogEditor />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/projects"
              element={
                <ProtectedRoute>
                  <AdminProjectsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/projects/new"
              element={
                <ProtectedRoute>
                  <AdminProjectEditor />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/projects/edit/:id"
              element={
                <ProtectedRoute>
                  <AdminProjectEditor />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/contacts"
              element={
                <ProtectedRoute>
                  <AdminContactsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/newsletter"
              element={
                <ProtectedRoute>
                  <AdminNewsletterPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/admins"
              element={
                <ProtectedRoute>
                  <AdminAdminsPage />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        {!isAdminRoute && !isUnderConstruction && <Footer />}
        <div className="fixed box-border caret-transparent contents z-[2147483647] left-0 top-0">
          <div className="caret-transparent"></div>
        </div>
      </div>
    </AdminAuthProvider>
  );
};
