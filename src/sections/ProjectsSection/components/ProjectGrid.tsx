import { useEffect, useState } from 'react';
import { ProjectCard } from "@/sections/ProjectsSection/components/ProjectCard";
import { supabase } from '@/lib/supabase';

interface Project {
  id: string;
  slug: string;
  title: string;
  short_description: string;
  description: string;
  featured_image: string | null;
  location: string | null;
}

const fallbackProjects = [
  {
    id: 'fallback-1',
    title: "Melbourne Business Hub",
    location: "42 Collins Street, Melbourne VIC 3000",
    short_description: "Modern commercial development in the heart of Melbourne's CBD, featuring cutting-edge sustainable architecture.",
    description: "This 12-storey office complex showcases premium finishes, energy-efficient systems, and flexible workspaces designed for contemporary business needs. Completed in 2024 with a 6-star Green Star rating.",
    featured_image: "https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/67a04795c6255244602f2723_project-thumb-07.jpg"
  },
  {
    id: 'fallback-2',
    title: "Harbour View Residences",
    location: "156 George Street, Sydney NSW 2000",
    short_description: "Luxury waterfront apartments blending modern design with Sydney's iconic harbour landscape.",
    description: "A stunning 8-level residential building offering 32 premium apartments with harbour glimpses, rooftop terrace, and resort-style amenities. Features include designer kitchens, floor-to-ceiling glass, and smart home technology throughout.",
    featured_image: "https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/67a0476b96cf1a8864a59421_project-thumb-06.jpg"
  },
  {
    id: 'fallback-3',
    title: "Riverside Eco Apartments",
    location: "88 Wickham Terrace, Brisbane QLD 4000",
    short_description: "Sustainable living spaces designed for the environmentally conscious urban lifestyle in Brisbane's premium location.",
    description: "This award-winning development features 45 eco-friendly apartments with solar panels, rainwater harvesting, and native landscaping. Each residence includes high-quality finishes, spacious balconies, and access to a communal garden and wellness facilities.",
    featured_image: "https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/67a04742a2d0f48bd0a20ed4_project-thumb-05.jpg"
  }
];

export const ProjectGrid = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('is_published', true)
        .order('display_order', { ascending: true })
        .limit(3);

      if (error) throw error;

      if (data && data.length > 0) {
        setProjects(data);
      } else {
        setProjects(fallbackProjects);
      }
    } catch (error) {
      console.error('Error fetching projects:', error);
      setProjects(fallbackProjects);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
      </div>
    );
  }

  return (
    <div
      role="list"
      className="box-border caret-transparent flex flex-col gap-6"
    >
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          href="/projects"
          slug={project.slug}
          imageUrl={project.featured_image || "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200"}
          imageAlt={project.title}
          location={project.location || ""}
          title={project.title}
          description={project.short_description}
          details={project.description}
          buttonText="See More"
          arrowIconUrl="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c559d1989cb82e96c949e_15fec19f4179bbda8c7cdc30da4795c2_button-arrow.svg"
          arrowIconAlt="Arrow"
        />
      ))}
    </div>
  );
};
