import { lazy, Suspense } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { AdminAuthProvider } from "@/contexts/AdminAuthContext";
import { ProtectedRoute } from "@/components/admin/ProtectedRoute";

const HomePage = lazy(() => import("@/pages/HomePage").then(m => ({ default: m.HomePage })));
const ProjectsPage = lazy(() => import("@/pages/ProjectsPage").then(m => ({ default: m.ProjectsPage })));
const ServicesPage = lazy(() => import("@/pages/ServicesPage").then(m => ({ default: m.ServicesPage })));
const RecentProjectsPage = lazy(() => import("@/pages/RecentProjectsPage").then(m => ({ default: m.RecentProjectsPage })));
const AboutUsPage = lazy(() => import("@/pages/AboutUsPage").then(m => ({ default: m.AboutUsPage })));
const ContactPage = lazy(() => import("@/pages/ContactPage").then(m => ({ default: m.ContactPage })));
const ProjectDetailPage = lazy(() => import("@/pages/ProjectDetailPage").then(m => ({ default: m.ProjectDetailPage })));
const AdminLoginPage = lazy(() => import("@/pages/AdminLoginPage").then(m => ({ default: m.AdminLoginPage })));
const AdminDashboard = lazy(() => import("@/pages/AdminDashboard").then(m => ({ default: m.AdminDashboard })));
const AdminProjectsPage = lazy(() => import("@/pages/AdminProjectsPage").then(m => ({ default: m.AdminProjectsPage })));
const AdminProjectEditor = lazy(() => import("@/pages/AdminProjectEditor").then(m => ({ default: m.AdminProjectEditor })));
const AdminContactsPage = lazy(() => import("@/pages/AdminContactsPage").then(m => ({ default: m.AdminContactsPage })));
const AdminNewsletterPage = lazy(() => import("@/pages/AdminNewsletterPage").then(m => ({ default: m.AdminNewsletterPage })));

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
  </div>
);

export const App = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <AdminAuthProvider>
      <div className="text-zinc-800 text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-[27.2px] list-outside list-disc min-h-full pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-public_sans">
        <ScrollToTop />
        {!isAdminRoute && <Navbar />}
        <main className={!isAdminRoute ? "pt-[60px]" : ""}>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:slug" element={<ProjectDetailPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/case-studies" element={<ProjectsPage />} />
              <Route path="/recent-projects" element={<RecentProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />

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
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </main>
        {!isAdminRoute && <Footer />}
        <div className="fixed box-border caret-transparent contents z-[2147483647] left-0 top-0">
          <div className="caret-transparent"></div>
        </div>
      </div>
    </AdminAuthProvider>
  );
};
