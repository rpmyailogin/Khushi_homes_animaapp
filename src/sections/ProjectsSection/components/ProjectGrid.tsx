import { ProjectCard } from "@/sections/ProjectsSection/components/ProjectCard";

export const ProjectGrid = () => {
  return (
    <div
      role="list"
      className="box-border caret-transparent gap-x-0 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-10 md:gap-x-6 md:grid-cols-[1fr_1fr_1fr] md:gap-y-[30px]"
    >
      <ProjectCard
        href="/"
        imageUrl="https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/67a04795c6255244602f2723_project-thumb-07.jpg"
        imageAlt="Project Image"
        location="California, USA"
        title="Aurora Business Park"
        description="Modern business hub catering to startups and established enterprises with state-of-the-art facilities."
        buttonText="View Project"
        arrowIconUrl="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c559d1989cb82e96c949e_15fec19f4179bbda8c7cdc30da4795c2_button-arrow.svg"
        arrowIconAlt="Arrow"
      />
      <ProjectCard
        href="/"
        imageUrl="https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/67a0476b96cf1a8864a59421_project-thumb-06.jpg"
        imageAlt="Project Image"
        location="New York, USA"
        title="Riverbend Eco Park"
        description="A green urban park designed to blend recreational spaces with environmental sustainability."
        buttonText="View Project"
        arrowIconUrl="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c559d1989cb82e96c949e_15fec19f4179bbda8c7cdc30da4795c2_button-arrow.svg"
        arrowIconAlt="Arrow"
        descriptionContainerWidth="w-[356px]"
      />
      <ProjectCard
        href="/"
        imageUrl="https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/67a04742a2d0f48bd0a20ed4_project-thumb-05.jpg"
        imageAlt="Project Image"
        location="New Jersey, USA"
        title="EcoNest Apartments"
        description="Sustainable apartment complex offering energy-efficient living spaces for urban families."
        buttonText="View Project"
        arrowIconUrl="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c559d1989cb82e96c949e_15fec19f4179bbda8c7cdc30da4795c2_button-arrow.svg"
        arrowIconAlt="Arrow"
      />
    </div>
  );
};
