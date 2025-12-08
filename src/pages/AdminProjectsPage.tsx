import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { supabase } from '@/lib/supabase';

interface Project {
  id: string;
  title: string;
  slug: string;
  short_description: string;
  featured_image: string | null;
  project_type: string;
  location: string | null;
  is_published: boolean;
  is_featured: boolean;
  created_at: string;
}

export const AdminProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) throw error;
      setProjects(data || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return;

    setDeleting(id);
    try {
      const { error } = await supabase.from('projects').delete().eq('id', id);
      if (error) throw error;
      setProjects(projects.filter(project => project.id !== id));
    } catch (error: any) {
      alert('Error deleting project: ' + error.message);
    } finally {
      setDeleting(null);
    }
  };

  const togglePublish = async (id: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('projects')
        .update({ is_published: !currentStatus })
        .eq('id', id);

      if (error) throw error;
      fetchProjects();
    } catch (error: any) {
      alert('Error updating project: ' + error.message);
    }
  };

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-medium text-black mb-2">Projects</h1>
          <p className="text-zinc-600">Manage your portfolio projects</p>
        </div>
        <Link
          to="/admin/projects/new"
          className="px-6 py-3 bg-black text-white hover:bg-red-600 transition-colors"
        >
          + Add New Project
        </Link>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
        </div>
      ) : projects.length === 0 ? (
        <div className="bg-white border border-zinc-200 p-12 text-center">
          <p className="text-zinc-600 mb-4">No projects yet</p>
          <Link
            to="/admin/projects/new"
            className="inline-block px-6 py-3 bg-black text-white hover:bg-red-600 transition-colors"
          >
            Add Your First Project
          </Link>
        </div>
      ) : (
        <div className="bg-white border border-zinc-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-zinc-50 border-b border-zinc-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-zinc-600 uppercase tracking-wider">
                    Project
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-zinc-600 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-zinc-600 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-zinc-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-zinc-600 uppercase tracking-wider">
                    Featured
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-zinc-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                {projects.map((project) => (
                  <tr key={project.id} className="hover:bg-zinc-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {project.featured_image && (
                          <img
                            src={project.featured_image}
                            alt={project.title}
                            className="w-20 h-16 object-cover"
                          />
                        )}
                        <div>
                          <div className="font-medium text-black">{project.title}</div>
                          <div className="text-sm text-zinc-500">/{project.slug}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-zinc-600">{project.project_type}</td>
                    <td className="px-6 py-4 text-sm text-zinc-600">{project.location || '-'}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => togglePublish(project.id, project.is_published)}
                        className={`px-3 py-1 text-xs font-medium ${
                          project.is_published
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {project.is_published ? 'Published' : 'Draft'}
                      </button>
                    </td>
                    <td className="px-6 py-4 text-sm text-zinc-600">
                      {project.is_featured ? '⭐ Yes' : 'No'}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          to={`/admin/projects/edit/${project.id}`}
                          className="px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 border border-blue-200"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(project.id)}
                          disabled={deleting === project.id}
                          className="px-3 py-1 text-sm text-red-600 hover:bg-red-50 border border-red-200 disabled:opacity-50"
                        >
                          {deleting === project.id ? 'Deleting...' : 'Delete'}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};
