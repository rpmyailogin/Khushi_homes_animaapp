import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { supabase } from '@/lib/supabase';

export const AdminDashboard = () => {
  const [stats, setStats] = useState({
    projects: 0,
    contacts: 0,
    newsletters: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Dashboard - Khushi Homes Admin";
    const fetchStats = async () => {
      try {
        const [projectsResult, contactsResult, newslettersResult] = await Promise.all([
          supabase.from('projects').select('*', { count: 'exact', head: true }),
          supabase.from('contact_submissions').select('*', { count: 'exact', head: true }),
          supabase.from('newsletter_subscriptions').select('*', { count: 'exact', head: true }),
        ]);

        setStats({
          projects: projectsResult.count || 0,
          contacts: contactsResult.count || 0,
          newsletters: newslettersResult.count || 0,
        });
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const cards = [
    { title: 'Total Projects', value: stats.projects, icon: '🏗️', link: '/admin/projects', color: 'bg-green-50 border-green-200' },
    { title: 'Contact Submissions', value: stats.contacts, icon: '📧', link: '/admin/contacts', color: 'bg-yellow-50 border-yellow-200' },
    { title: 'Newsletter Subscribers', value: stats.newsletters, icon: '📮', link: '/admin/newsletter', color: 'bg-blue-50 border-blue-200' },
  ];

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-medium text-black mb-2">Dashboard</h1>
        <p className="text-zinc-600">Welcome to Khushi Homes admin panel</p>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <Link
              key={card.title}
              to={card.link}
              className={`${card.color} border p-6 hover:shadow-lg transition-shadow`}
            >
              <div className="text-3xl mb-2">{card.icon}</div>
              <h3 className="text-sm font-medium text-zinc-600 mb-1">{card.title}</h3>
              <p className="text-3xl font-bold text-black">{card.value}</p>
            </Link>
          ))}
        </div>
      )}

      <div className="mt-8 bg-white border border-zinc-200 p-6">
        <h2 className="text-xl font-medium text-black mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<Link
            to="/admin/projects"
            className="flex items-center justify-between p-4 border border-zinc-200 hover:bg-zinc-50 transition-colors"
          >
            <span className="font-medium">Add New Project</span>
            <span>→</span>
          </Link>
          <Link
            to="/admin/contacts"
            className="flex items-center justify-between p-4 border border-zinc-200 hover:bg-zinc-50 transition-colors"
          >
            <span className="font-medium">View Contact Submissions</span>
            <span>→</span>
          </Link>
          <Link
            to="/admin/newsletter"
            className="flex items-center justify-between p-4 border border-zinc-200 hover:bg-zinc-50 transition-colors"
          >
            <span className="font-medium">Manage Newsletter Subscribers</span>
            <span>→</span>
          </Link>
        </div>
      </div>

      <div className="mt-6 bg-blue-50 border border-blue-200 p-6">
        <h3 className="text-lg font-medium text-black mb-2">📐 Image Size Guidelines</h3>
        <div className="space-y-2 text-sm text-zinc-700">
<p><strong>Project Featured Images:</strong> 1200×900px (4:3 ratio)</p>
          <p><strong>Project Gallery Images:</strong> 1600×1200px (4:3 ratio)</p>
          <p className="text-xs text-zinc-600 mt-3">Recommended formats: JPEG, PNG, WebP • Max file size: 5MB</p>
        </div>
      </div>
    </AdminLayout>
  );
};
