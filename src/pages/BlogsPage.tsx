import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SectionHeader } from "@/components/SectionHeader";
import { supabase } from '@/lib/supabase';

interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  author: string;
  featured_image: string | null;
  published_at: string;
}

export const BlogsPage = () => {
  const [blogPosts, setBlogPosts] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [categories, setCategories] = useState<string[]>(["All"]);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Blogs - Khushi Homes";
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('is_published', true)
        .order('published_at', { ascending: false });

      if (error) throw error;

      setBlogPosts(data || []);

      const uniqueCategories = Array.from(new Set(data?.map(blog => blog.category) || []));
      setCategories(["All", ...uniqueCategories]);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const filteredBlogs = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter(blog => blog.category === selectedCategory);

  return (
    <div className="box-border caret-transparent">
      <section className="bg-gray-100 box-border caret-transparent py-8 md:py-12">
        <div className="box-border caret-transparent max-w-full w-full mx-auto px-5 md:max-w-[1336px]">
          <SectionHeader subtitle="Insights & Updates" title="Our Blog" />
          <p className="box-border caret-transparent max-w-3xl mb-6">
            Stay informed with the latest trends, insights, and best practices in construction, engineering, and project management from industry experts.
          </p>
        </div>
      </section>

      <section className="box-border caret-transparent py-10 md:py-[60px]">
        <div className="box-border caret-transparent max-w-full w-full mx-auto px-5 md:max-w-[1336px]">
          <div className="box-border caret-transparent mb-10">
            <h3 className="text-black text-xl font-medium box-border caret-transparent leading-[30px] mb-6">
              Latest Articles
            </h3>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
            </div>
          ) : (
            <>
              <div className="box-border caret-transparent flex flex-wrap items-center gap-x-3 gap-y-3 mb-10">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`text-sm box-border caret-transparent leading-[14px] px-4 py-2.5 border border-solid transition-colors ${
                      selectedCategory === category
                        ? 'bg-black text-white border-black'
                        : 'bg-gray-100 border-black/10 hover:bg-black hover:text-white'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {filteredBlogs.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-zinc-600">No blog posts found.</p>
                </div>
              ) : (
                <div className="box-border caret-transparent grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-10 sm:grid-cols-2 md:grid-cols-[1fr_1fr_1fr] md:gap-x-[30px] md:gap-y-[60px]">
                  {filteredBlogs.map((post) => (
                    <div
                      key={post.id}
                      onClick={() => navigate(`/blog/${post.slug}`)}
                      className="box-border caret-transparent flex flex-col border border-solid border-black/10 hover:shadow-[rgba(0,0,0,0.10)_0px_10px_40px_0px] transition-all cursor-pointer"
                    >
                      <div className="bg-gray-100 box-border caret-transparent overflow-hidden">
                        <img
                          src={post.featured_image || "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800"}
                          alt={post.title}
                          className="box-border caret-transparent inline-block max-h-[220px] max-w-full min-h-[220px] object-cover w-full hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="box-border caret-transparent p-5 md:p-[30px] flex flex-col gap-y-4">
                        <div className="box-border caret-transparent flex items-center gap-x-3.5">
                          <div className="text-sm bg-gray-100 box-border caret-transparent leading-[14px] px-2.5 py-[5px]">
                            {post.category}
                          </div>
                          <div className="text-xs bg-black/10 box-border caret-transparent h-6 leading-[18px] w-px"></div>
                          <div className="text-xs box-border caret-transparent leading-[18px]">
                            {formatDate(post.published_at)}
                          </div>
                        </div>
                        <h3 className="text-black text-lg font-medium box-border caret-transparent leading-[27px] hover:underline">
                          {post.title}
                        </h3>
                        <p className="text-sm box-border caret-transparent leading-[21px]">
                          {post.excerpt}
                        </p>
                        <div className="box-border caret-transparent flex items-center justify-between pt-4 border-t border-solid border-black/10 mt-auto">
                          <div className="text-xs box-border caret-transparent leading-[18px]">
                            By {post.author}
                          </div>
                          <span className="text-xs text-zinc-500 hover:text-black transition-colors">Read more →</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <section className="bg-gray-100 box-border caret-transparent py-10 md:py-[60px]">
        <div className="box-border caret-transparent max-w-full w-full mx-auto px-5 md:max-w-[1336px]">
          <div className="box-border caret-transparent text-center max-w-3xl mx-auto">
            <h3 className="text-black text-xl font-medium box-border caret-transparent leading-[30px] mb-5 md:text-2xl md:leading-[36px]">
              Join Our Community
            </h3>
            <p className="box-border caret-transparent mb-8">
              Connect with us to stay updated on the latest construction trends, expert tips, and exclusive insights from industry professionals.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
