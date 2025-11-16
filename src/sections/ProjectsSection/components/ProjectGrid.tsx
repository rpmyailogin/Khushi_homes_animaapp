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
        location="42 Collins Street, Melbourne VIC 3000"
        title="Melbourne Business Hub"
        description="Modern commercial development in the heart of Melbourne's CBD, featuring cutting-edge sustainable architecture."
        details="This 12-storey office complex showcases premium finishes, energy-efficient systems, and flexible workspaces designed for contemporary business needs. Completed in 2024 with a 6-star Green Star rating."
        buttonText="View Project"
        arrowIconUrl="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c559d1989cb82e96c949e_15fec19f4179bbda8c7cdc30da4795c2_button-arrow.svg"
        arrowIconAlt="Arrow"
      />
      <ProjectCard
        href="/"
        imageUrl="https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/67a0476b96cf1a8864a59421_project-thumb-06.jpg"
        imageAlt="Project Image"
        location="156 George Street, Sydney NSW 2000"
        title="Harbour View Residences"
        description="Luxury waterfront apartments blending modern design with Sydney's iconic harbour landscape."
        details="A stunning 8-level residential building offering 32 premium apartments with harbour glimpses, rooftop terrace, and resort-style amenities. Features include designer kitchens, floor-to-ceiling glass, and smart home technology throughout."
        buttonText="View Project"
        arrowIconUrl="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c559d1989cb82e96c949e_15fec19f4179bbda8c7cdc30da4795c2_button-arrow.svg"
        arrowIconAlt="Arrow"
        descriptionContainerWidth="w-[356px]"
      />
      <ProjectCard
        href="/"
        imageUrl="https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/67a04742a2d0f48bd0a20ed4_project-thumb-05.jpg"
        imageAlt="Project Image"
        location="88 Wickham Terrace, Brisbane QLD 4000"
        title="Riverside Eco Apartments"
        description="Sustainable living spaces designed for the environmentally conscious urban lifestyle in Brisbane's premium location."
        details="This award-winning development features 45 eco-friendly apartments with solar panels, rainwater harvesting, and native landscaping. Each residence includes high-quality finishes, spacious balconies, and access to a communal garden and wellness facilities."
        buttonText="View Project"
        arrowIconUrl="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c559d1989cb82e96c949e_15fec19f4179bbda8c7cdc30da4795c2_button-arrow.svg"
        arrowIconAlt="Arrow"
      />
    </div>
  );
};
