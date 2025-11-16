import { FeaturedBlogCard } from "@/sections/BlogSection/components/FeaturedBlogCard";
import { BlogList } from "@/sections/BlogSection/components/BlogList";

export const BlogGrid = () => {
  return (
    <div className="box-border caret-transparent gap-x-0 flex flex-col gap-y-[30px] md:gap-x-[30px] md:flex-row md:gap-y-[normal]">
      <FeaturedBlogCard />
      <BlogList />
    </div>
  );
};
