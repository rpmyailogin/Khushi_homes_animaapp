import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { supabase } from '@/lib/supabase';

interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featured_image: string | null;
  category: string;
  is_published: boolean;
  is_featured: boolean;
  created_at: string;
}

export const AdminBlogsPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  const fetchBlogs = async () => {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setBlogs(data || []);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog post?')) return;

    setDeleting(id);
    try {
      const { error } = await supabase.from('blogs').delete().eq('id', id);
      if (error) throw error;
      setBlogs(blogs.filter(blog => blog.id !== id));
    } catch (error: any) {
      alert('Error deleting blog: ' + error.message);
    } finally {
      setDeleting(null);
    }
  };

  const togglePublish = async (id: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('blogs')
        .update({ is_published: !currentStatus })
        .eq('id', id);

      if (error) throw error;
      fetchBlogs();
    } catch (error: any) {
      alert('Error updating blog: ' + error.message);
    }
  };

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-medium text-black mb-2">Blogs</h1>
          <p className="text-zinc-600">Manage your blog posts</p>
        </div>
        <Link
          to="/admin/blogs/new"
          className="px-6 py-3 bg-black text-white hover:bg-red-600 transition-colors"
        >
          + Create New Blog
        </Link>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
        </div>
      ) : blogs.length === 0 ? (
        <div className="bg-white border border-zinc-200 p-12 text-center">
          <p className="text-zinc-600 mb-4">No blog posts yet</p>
          <Link
            to="/admin/blogs/new"
            className="inline-block px-6 py-3 bg-black text-white hover:bg-red-600 transition-colors"
          >
            Create Your First Blog Post
          </Link>
        </div>
      ) : (
        <div className="bg-white border border-zinc-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-zinc-50 border-b border-zinc-200">
                <tr>
                  <th className="px-2 py-2 sm:px-4 sm:py-3 md:px-6 text-left text-xs font-medium text-zinc-600 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-2 py-2 sm:px-4 sm:py-3 md:px-6 hidden sm:table-cell text-left text-xs font-medium text-zinc-600 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-2 py-2 sm:px-4 sm:py-3 md:px-6 text-left text-xs font-medium text-zinc-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-2 py-2 sm:px-4 sm:py-3 md:px-6 hidden md:table-cell text-left text-xs font-medium text-zinc-600 uppercase tracking-wider">
                    Featured
                  </th>
                  <th className="px-2 py-2 sm:px-4 sm:py-3 md:px-6 hidden md:table-cell text-left text-xs font-medium text-zinc-600 uppercase tracking-wider">
                    Created
                  </th>
                  <th className="px-2 py-2 sm:px-4 sm:py-3 md:px-6 text-right text-xs font-medium text-zinc-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                {blogs.map((blog) => (
                  <tr key={blog.id} className="hover:bg-zinc-50">
                    <td className="px-2 py-3 sm:px-4 sm:py-4 md:px-6">
                      <div className="flex items-center gap-2 sm:gap-3">
                        {blog.featured_image && (
                          <img
                            src={blog.featured_image}
                            alt={blog.title}
                            className="w-12 h-8 sm:w-16 sm:h-10 object-cover hidden sm:block"
                          />
                        )}
                        <div>
                          <div className="font-medium text-black text-sm sm:text-base line-clamp-2">{blog.title}</div>
                          <div className="text-xs sm:text-sm text-zinc-500 hidden md:block">/{blog.slug}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-2 py-3 sm:px-4 sm:py-4 md:px-6 hidden sm:table-cell text-xs sm:text-sm text-zinc-600">{blog.category}</td>
                    <td className="px-2 py-3 sm:px-4 sm:py-4 md:px-6">
                      <button
                        onClick={() => togglePublish(blog.id, blog.is_published)}
                        className={`px-3 py-1 text-xs font-medium ${
                          blog.is_published
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {blog.is_published ? 'Published' : 'Draft'}
                      </button>
                    </td>
                    <td className="px-2 py-3 sm:px-4 sm:py-4 md:px-6 hidden md:table-cell text-xs sm:text-sm text-zinc-600">
                      {blog.is_featured ? '⭐ Yes' : 'No'}
                    </td>
                    <td className="px-2 py-3 sm:px-4 sm:py-4 md:px-6 hidden md:table-cell text-xs sm:text-sm text-zinc-600">
                      {new Date(blog.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-2 py-3 sm:px-4 sm:py-4 md:px-6 text-right">
                      <div className="flex items-center justify-end gap-1 sm:gap-2">
                        <Link
                          to={`/admin/blogs/edit/${blog.id}`}
                          className="px-2 py-1 text-xs sm:text-sm text-blue-600 hover:bg-blue-50 border border-blue-200"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(blog.id)}
                          disabled={deleting === blog.id}
                          className="px-2 py-1 text-xs sm:text-sm text-red-600 hover:bg-red-50 border border-red-200 disabled:opacity-50"
                        >
                          {deleting === blog.id ? 'Del...' : 'Delete'}
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
