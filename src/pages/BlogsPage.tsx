import { SectionHeader } from "@/components/SectionHeader";

export const BlogsPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Building smart how technology is transforming construction",
      category: "Technology",
      date: "Feb 11, 2025",
      author: "John Mitchell",
      image: "https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/679cb63a5742e9506defbe20_blog-main-01.jpg",
      excerpt: "Discover how cutting-edge technology is revolutionizing the construction industry, from smart building materials to AI-powered project management systems. Learn about the latest innovations in construction technology including Building Information Modeling (BIM), drone surveying, 3D printing, and IoT-enabled equipment that are transforming how we design, plan, and execute construction projects.",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Eco-friendly construction materials you should know about",
      category: "Materials",
      date: "Feb 11, 2025",
      author: "Sarah Chen",
      image: "https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/679cb69863b614ca6c0adaf1_blog-thumb-07.jpg",
      excerpt: "Explore sustainable building materials that reduce environmental impact while maintaining structural integrity and aesthetic appeal. From recycled steel and bamboo to hempcrete and mycelium-based products, learn about innovative eco-friendly alternatives that are changing the construction landscape. Discover how these materials can help achieve green building certifications and reduce your project's carbon footprint.",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Adopting lean construction practices for maximum efficiency",
      category: "Efficiency",
      date: "Feb 11, 2025",
      author: "David Rodriguez",
      image: "https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/679cb6893d98ac6330958f1c_blog-thumb-06.jpg",
      excerpt: "Learn how lean construction methodologies can streamline your projects, reduce waste, and improve overall project delivery timelines. Understand the principles of Just-In-Time delivery, value stream mapping, and continuous improvement. Discover practical strategies for implementing lean practices in your construction workflow, from pre-construction planning to final handover, ensuring maximum efficiency and cost savings.",
      readTime: "6 min read"
    }
  ];

  const categories = ["All", "Technology", "Materials", "Efficiency"];

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

          <div className="box-border caret-transparent grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-10 sm:grid-cols-2 md:grid-cols-[1fr_1fr_1fr] md:gap-x-[30px] md:gap-y-[60px]">
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
