import { useEffect, useState } from 'react';
import { BlogCard } from "@/sections/BlogSection/components/BlogCard";
import { supabase } from '@/lib/supabase';

interface Blog {
  id: string;
  title: string;
  category: string;
  featured_image: string | null;
  published_at: string;
}

const fallbackBlogs: Blog[] = [
  {
    id: 'fallback-1',
    title: "Eco-friendly construction materials you should know about",
    category: "Materials",
    published_at: "2025-02-11T00:00:00Z",
    featured_image: "https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/679cb69863b614ca6c0adaf1_blog-thumb-07.jpg"
  },
  {
    id: 'fallback-2',
    title: "Adopting lean construction practices for maximum efficiency",
    category: "Efficiency",
    published_at: "2025-02-11T00:00:00Z",
    featured_image: "https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/679cb6893d98ac6330958f1c_blog-thumb-06.jpg"
  }
];

export const BlogList = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('is_published', true)
        .eq('is_featured', false)
        .order('published_at', { ascending: false })
        .limit(2);

      if (error) throw error;

      if (data && data.length > 0) {
        setBlogs(data);
      } else {
        setBlogs(fallbackBlogs);
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setBlogs(fallbackBlogs);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  if (loading) {
    return (
      <div className="box-border caret-transparent max-w-none w-full md:max-w-[50%]">
        <div className="flex items-center justify-center h-[492px]">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
        </div>
      </div>
    );
  }

  if (blogs.length === 0) {
    return null;
  }

  return (
    <div className="box-border caret-transparent max-w-none w-full md:max-w-[50%]">
      <div className="box-border caret-transparent">
        <div
          role="list"
          className="box-border caret-transparent grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-[30px] md:gap-y-5"
        >
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              href="/blogs"
              imageUrl={blog.featured_image || "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800"}
              imageAlt={blog.title}
              category={blog.category}
              date={formatDate(blog.published_at)}
              title={blog.title}
              linkText="Read More"
              arrowIconUrl="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c726c1827c33928d75854_ic-black-arrow.svg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
