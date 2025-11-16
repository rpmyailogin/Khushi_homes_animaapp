import { SectionHeader } from "@/components/SectionHeader";

export const BlogsPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Building Smart: How Technology is Transforming Construction",
      category: "Technology",
      date: "Feb 11, 2025",
      author: "John Mitchell",
      image: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=800",
      excerpt: "Explore the latest technological innovations revolutionizing the construction industry, from AI-powered project management to drone surveying and 3D printing.",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Eco-Friendly Construction Materials You Should Know About",
      category: "Sustainability",
      date: "Feb 8, 2025",
      author: "Sarah Chen",
      image: "https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=800",
      excerpt: "Discover sustainable building materials that reduce environmental impact while maintaining structural integrity and aesthetic appeal.",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Adopting Lean Construction Practices for Maximum Efficiency",
      category: "Management",
      date: "Feb 5, 2025",
      author: "David Rodriguez",
      image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800",
      excerpt: "Learn how lean construction methodologies can streamline your projects, reduce waste, and improve overall project delivery timelines.",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Safety First: Modern Construction Site Safety Protocols",
      category: "Safety",
      date: "Feb 2, 2025",
      author: "Emily Watson",
      image: "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800",
      excerpt: "Understanding the latest safety standards and protocols that protect workers and ensure compliance with modern construction regulations.",
      readTime: "5 min read"
    },
    {
      id: 5,
      title: "The Future of Modular Construction",
      category: "Innovation",
      date: "Jan 29, 2025",
      author: "Michael Thompson",
      image: "https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg?auto=compress&cs=tinysrgb&w=800",
      excerpt: "How prefabricated and modular construction methods are changing the industry landscape with faster build times and cost efficiency.",
      readTime: "7 min read"
    },
    {
      id: 6,
      title: "Smart Building Integration: IoT in Modern Construction",
      category: "Technology",
      date: "Jan 26, 2025",
      author: "Lisa Anderson",
      image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800",
      excerpt: "Integrating Internet of Things devices into building infrastructure for enhanced automation, efficiency, and user experience.",
      readTime: "6 min read"
    },
    {
      id: 7,
      title: "Navigating Construction Permits and Regulations",
      category: "Compliance",
      date: "Jan 23, 2025",
      author: "Robert Kim",
      image: "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=800",
      excerpt: "A comprehensive guide to understanding and efficiently managing construction permits, zoning laws, and regulatory compliance.",
      readTime: "8 min read"
    },
    {
      id: 8,
      title: "Cost Management Strategies for Large-Scale Projects",
      category: "Finance",
      date: "Jan 20, 2025",
      author: "Jennifer Lee",
      image: "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=800",
      excerpt: "Proven strategies for keeping construction projects on budget while maintaining quality standards and meeting deadlines.",
      readTime: "5 min read"
    },
    {
      id: 9,
      title: "Sustainable Architecture: Designing for the Future",
      category: "Design",
      date: "Jan 17, 2025",
      author: "Alex Martinez",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      excerpt: "Exploring architectural trends that prioritize environmental responsibility without compromising on aesthetics or functionality.",
      readTime: "6 min read"
    }
  ];

  const categories = ["All", "Technology", "Sustainability", "Management", "Safety", "Innovation", "Compliance", "Finance", "Design"];

  return (
    <div className="box-border caret-transparent">
      <section className="bg-gray-100 box-border caret-transparent py-10 md:py-20">
        <div className="box-border caret-transparent max-w-full w-full mx-auto px-5 md:max-w-[1336px]">
          <SectionHeader subtitle="Insights & Updates" title="Our Blog" />
          <p className="box-border caret-transparent max-w-3xl mb-10">
            Stay informed with the latest trends, insights, and best practices in construction, engineering, and project management from industry experts.
          </p>
        </div>
      </section>

      <section className="box-border caret-transparent py-10 md:py-[60px]">
        <div className="box-border caret-transparent max-w-full w-full mx-auto px-5 md:max-w-[1336px]">
          <div className="box-border caret-transparent flex flex-wrap items-center gap-x-3 gap-y-3 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                className="text-sm bg-gray-100 box-border caret-transparent leading-[14px] px-4 py-2.5 border border-solid border-black/10 hover:bg-black hover:text-white transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="box-border caret-transparent grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-10 md:grid-cols-[1fr_1fr_1fr] md:gap-x-[30px] md:gap-y-[60px]">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="box-border caret-transparent flex flex-col border border-solid border-black/10 hover:bg-gray-100 hover:shadow-[rgba(0,0,0,0.06)_0px_30px_60px_0px] transition-all"
              >
                <div className="bg-gray-100 box-border caret-transparent overflow-hidden">
                  <img
                    src={post.image}
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
                      {post.date}
                    </div>
                  </div>
                  <h3 className="text-black text-lg font-medium box-border caret-transparent leading-[27px] hover:underline cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-sm box-border caret-transparent leading-[21px]">
                    {post.excerpt}
                  </p>
                  <div className="box-border caret-transparent flex items-center justify-between pt-4 border-t border-solid border-black/10 mt-auto">
                    <div className="text-xs box-border caret-transparent leading-[18px]">
                      By {post.author}
                    </div>
                    <div className="text-xs box-border caret-transparent leading-[18px]">
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black box-border caret-transparent py-10 md:py-[60px]">
        <div className="box-border caret-transparent max-w-full w-full mx-auto px-5 md:max-w-[1336px]">
          <div className="box-border caret-transparent text-center max-w-3xl mx-auto">
            <h3 className="text-white text-xl font-medium box-border caret-transparent leading-[30px] mb-5 md:text-2xl md:leading-[36px]">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-neutral-400 box-border caret-transparent mb-8">
              Get the latest construction insights, industry trends, and project updates delivered directly to your inbox.
            </p>
            <div className="box-border caret-transparent flex flex-col gap-y-4 max-w-xl mx-auto md:flex-row md:gap-x-4 md:gap-y-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="text-sm box-border caret-transparent flex-1 leading-[21px] px-4 py-3 border border-solid border-white/10 bg-white/5 text-white placeholder:text-neutral-400"
              />
              <button className="text-white text-sm items-center bg-white/10 box-border caret-transparent gap-x-2.5 flex justify-center leading-[16.8px] border px-[22px] py-3 border-solid border-white hover:bg-white hover:text-black transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
