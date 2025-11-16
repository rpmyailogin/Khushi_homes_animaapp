import { BlogCard } from "@/sections/BlogSection/components/BlogCard";

export const BlogList = () => {
  return (
    <div className="box-border caret-transparent max-w-none w-full md:max-w-[50%]">
      <div className="box-border caret-transparent">
        <div
          role="list"
          className="box-border caret-transparent grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-[30px] md:gap-y-5"
        >
          <BlogCard
            href="https://drill-template.webflow.io/blog-posts/eco-friendly-construction-materials-you-should-know-about"
            imageUrl="https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/679cb69863b614ca6c0adaf1_blog-thumb-07.jpg"
            imageAlt="Post Image"
            category="Materials"
            date="Feb 11, 2025"
            title="Eco-friendly construction materials you should know about"
            linkText="Read Articles"
            arrowIconUrl="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c726c1827c33928d75854_ic-black-arrow.svg"
          />
          <BlogCard
            href="https://drill-template.webflow.io/blog-posts/adopting-lean-construction-practices-for-maximum-efficiency"
            imageUrl="https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/679cb6893d98ac6330958f1c_blog-thumb-06.jpg"
            imageAlt="Post Image"
            category="Efficiency"
            date="Feb 11, 2025"
            title="Adopting lean construction practices for maximum efficiency"
            linkText="Read Articles"
            arrowIconUrl="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c726c1827c33928d75854_ic-black-arrow.svg"
          />
        </div>
      </div>
    </div>
  );
};
