import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

interface Blog {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  featured_image: string | null;
  published_at: string;
}

export const FeaturedBlogCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedBlog();
  }, []);

  const fetchFeaturedBlog = async () => {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('is_published', true)
        .eq('is_featured', true)
        .order('published_at', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (error) throw error;
      setBlog(data);
    } catch (error) {
      console.error('Error fetching featured blog:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="box-border caret-transparent max-w-none w-full md:max-w-[50%]">
        <div className="bg-gray-100 h-[492px] flex items-center justify-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return null;
  }

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="box-border caret-transparent max-w-none w-full md:max-w-[50%]">
      <div className="box-border caret-transparent">
        <div role="list" className="box-border caret-transparent">
          <div role="listitem" className="box-border caret-transparent flex">
            <div
              className="relative items-stretch bg-gray-100 box-border caret-transparent flex flex-col justify-end max-w-full w-full overflow-hidden group cursor-pointer"
              onMouseEnter={() => setIsExpanded(true)}
              onMouseLeave={() => setIsExpanded(false)}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <div className="box-border caret-transparent overflow-hidden">
                <img
                  src={blog.featured_image || "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200"}
                  alt={blog.title}
                  className="aspect-[auto_633_/_492] box-border caret-transparent inline-block h-[492px] max-h-[220px] max-w-full min-h-[220px] object-cover w-full transition-transform duration-500 group-hover:scale-105 md:max-h-[492px] md:min-h-[492px]"
                />
              </div>
              <div
                className={`absolute box-border caret-transparent flex flex-col justify-center transition-all duration-500 ease-in-out px-5 py-4 inset-x-[0%] md:py-[30px] ${
                  isExpanded
                    ? 'bg-red-600 bottom-[0%] h-[50%]'
                    : 'bg-white bottom-[0%] h-auto'
                }`}
              >
                <div className="box-border caret-transparent">
                  <div className={`text-xs items-center box-border caret-transparent gap-x-3.5 flex justify-start leading-[18px] mb-[15px] transition-colors duration-500 md:text-sm md:leading-[21px] ${
                    isExpanded ? 'opacity-90' : ''
                  }`}>
                    <div className={`text-sm box-border caret-transparent leading-[14px] px-2.5 py-[5px] transition-colors duration-500 ${
                      isExpanded ? 'bg-white/20 text-white' : 'bg-gray-100'
                    }`}>
                      {blog.category}
                    </div>
                    <div className={`text-xs box-border caret-transparent h-6 leading-[18px] w-px transition-colors duration-500 md:text-sm md:leading-[21px] ${
                      isExpanded ? 'bg-white/30' : 'bg-black/10'
                    }`}></div>
                    <div className={`text-xs box-border caret-transparent leading-[18px] transition-colors duration-500 md:text-sm md:leading-[21px] ${
                      isExpanded ? 'text-white' : 'text-zinc-800'
                    }`}>
                      {formatDate(blog.published_at)}
                    </div>
                  </div>
                  <h4 className={`text-lg box-border caret-transparent leading-[27px] transition-colors duration-500 md:text-xl md:leading-[30px] ${
                    isExpanded ? 'text-white' : 'text-black'
                  }`}>
                    {blog.title}
                  </h4>
                </div>
                <div
                  className={`box-border caret-transparent transition-all duration-500 overflow-hidden ${
                    isExpanded
                      ? 'opacity-100 max-h-[500px] mt-4'
                      : 'opacity-0 max-h-0 mt-0'
                  }`}
                >
                  <p className="text-white text-sm box-border caret-transparent leading-relaxed">
                    {blog.excerpt}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
