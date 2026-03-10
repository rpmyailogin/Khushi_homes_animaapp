import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabase';

interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  tags: string[];
  featured_image: string | null;
  published_at: string;
  is_featured: boolean;
}

export const BlogDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (slug) fetchBlog(slug);
  }, [slug]);

  const fetchBlog = async (blogSlug: string) => {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('slug', blogSlug)
        .eq('is_published', true)
        .maybeSingle();

      if (error) throw error;
      if (!data) {
        setNotFound(true);
        return;
      }
      setBlog(data as Blog);
      document.title = `${data.title} - Khushi Homes`;
    } catch {
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="inline-block animate-spin rounded-full h-10 w-10 border-b-2 border-black"></div>
      </div>
    );
  }

  if (notFound || !blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-medium text-black">Blog post not found</h1>
        <button onClick={() => navigate('/blogs')} className="px-6 py-3 bg-black text-white hover:bg-zinc-800 transition-colors text-sm">
          Back to Blogs
        </button>
      </div>
    );
  }

  return (
    <div className="box-border caret-transparent">
      {blog.featured_image && (
        <div className="w-full h-[320px] md:h-[480px] overflow-hidden">
          <img
            src={blog.featured_image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="max-w-[860px] mx-auto px-5 py-10 md:py-16">
        <button
          onClick={() => navigate('/blogs')}
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-black transition-colors mb-8"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Blogs
        </button>

        <div className="flex items-center gap-3 mb-5">
          <span className="text-sm bg-gray-100 px-2.5 py-1 text-zinc-700">{blog.category}</span>
          <span className="text-xs text-zinc-400">|</span>
          <span className="text-sm text-zinc-500">{formatDate(blog.published_at)}</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-medium text-black leading-tight mb-4">
          {blog.title}
        </h1>

        <p className="text-zinc-500 text-base mb-8">By {blog.author}</p>

        {blog.excerpt && (
          <p className="text-lg text-zinc-600 leading-relaxed border-l-4 border-black pl-5 mb-10 italic">
            {blog.excerpt}
          </p>
        )}

        <div
          className="prose-blog"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {blog.tags && blog.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-zinc-100 flex flex-wrap gap-2">
            {blog.tags.map((tag, i) => (
              <span key={i} className="text-xs px-3 py-1.5 bg-gray-100 text-zinc-600">
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
