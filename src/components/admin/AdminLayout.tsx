import { ReactNode } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAdminAuth } from '@/contexts/AdminAuthContext';
import { KhushiLogo } from '@/components/KhushiLogo';

interface AdminLayoutProps {
  children: ReactNode;
}

export const AdminLayout = ({ children }: AdminLayoutProps) => {
  const { signOut, user, isSuperAdmin } = useAdminAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/admin/login');
  };

  const navItems = [
    { path: '/admin/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/admin/blogs', label: 'Blogs', icon: '📝' },
    { path: '/admin/projects', label: 'Projects', icon: '🏗️' },
    { path: '/admin/contacts', label: 'Contacts', icon: '📧' },
    { path: '/admin/newsletter', label: 'Newsletter', icon: '📮' },
    ...(isSuperAdmin ? [{ path: '/admin/admins', label: 'Admins', icon: '👤' }] : []),
  ];

  return (
    <div className="min-h-screen bg-zinc-50">
      <nav className="bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link to="/" className="flex items-center gap-2">
                <KhushiLogo className="h-8" />
                <span className="text-sm font-medium text-zinc-600">Admin</span>
              </Link>
              <div className="hidden md:flex gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'bg-black text-white'
                        : 'text-zinc-700 hover:bg-zinc-100'
                    }`}
                  >
                    <span className="mr-2">{item.icon}</span>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-zinc-600 hidden sm:block">{user?.email}</span>
              <button
                onClick={handleSignOut}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="md:hidden bg-white border-b border-zinc-200">
        <div className="px-4 py-2 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-4 py-2 text-sm font-medium transition-colors ${
                location.pathname === item.path
                  ? 'bg-black text-white'
                  : 'text-zinc-700 hover:bg-zinc-100'
              }`}
            >
              <span className="mr-2">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
};
