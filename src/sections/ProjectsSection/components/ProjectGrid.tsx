import { useEffect, useState } from 'react';
import { HomeProjectCard } from "@/sections/ProjectsSection/components/HomeProjectCard";
import { supabase } from '@/lib/supabase';

const PROJECT_IMAGE_OVERRIDES: Record<string, string> = {
  '7-meadow-cres-mount-waverley-vic-3149': '/7_Meadow_Crescent_Mount_Waverly.jpeg',
  '66-heathfield-rise-box-hill-north-vic-3129': '/66_Heathfield_Rise_Boxhill.jpeg',
};

interface Project {
  id: string;
  slug: string;
  title: string;
  short_description: string;
  description: string;
  featured_image: string | null;
  location: string | null;
  project_type: string;
  completion_date: string | null;
  area_sqft: number | null;
  home_size_sqm: number | null;
  budget_range: string | null;
  bedrooms: number | null;
  bathrooms: number | null;
  garage_spaces: number | null;
  land_size_sqm: number | null;
  property_features: string[];
}

const fallbackProjects: Project[] = [
  {
    id: 'fallback-1',
    slug: 'melbourne-business-hub',
    title: "Melbourne Business Hub",
    location: "42 Collins Street, Melbourne VIC 3000",
    short_description: "Modern commercial development in the heart of Melbourne's CBD.",
    description: "",
    featured_image: "https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/67a04795c6255244602f2723_project-thumb-07.jpg",
    project_type: "commercial",
    completion_date: "2024-01-01",
    area_sqft: null,
    home_size_sqm: 450,
    budget_range: "$1.2M",
    bedrooms: 4,
    bathrooms: 3,
    garage_spaces: 2,
    land_size_sqm: 600,
    property_features: ["Smart Home", "Solar Panels"],
  },
  {
    id: 'fallback-2',
    slug: 'harbour-view-residences',
    title: "Harbour View Residences",
    location: "156 George Street, Sydney NSW 2000",
    short_description: "Luxury waterfront apartments blending modern design with Sydney's iconic harbour landscape.",
    description: "",
    featured_image: "https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/67a0476b96cf1a8864a59421_project-thumb-06.jpg",
    project_type: "residential",
    completion_date: "2023-06-01",
    area_sqft: null,
    home_size_sqm: 380,
    budget_range: "$950K",
    bedrooms: 3,
    bathrooms: 2,
    garage_spaces: 1,
    land_size_sqm: 500,
    property_features: ["Harbour Views", "Rooftop Terrace"],
  },
  {
    id: 'fallback-3',
    slug: 'riverside-eco-apartments',
    title: "Riverside Eco Apartments",
    location: "88 Wickham Terrace, Brisbane QLD 4000",
    short_description: "Sustainable living spaces designed for the environmentally conscious urban lifestyle.",
    description: "",
    featured_image: "https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/67a04742a2d0f48bd0a20ed4_project-thumb-05.jpg",
    project_type: "residential",
    completion_date: "2023-11-01",
    area_sqft: null,
    home_size_sqm: 310,
    budget_range: "$780K",
    bedrooms: 2,
    bathrooms: 2,
    garage_spaces: 1,
    land_size_sqm: 420,
    property_features: ["Eco-Friendly", "Rainwater Harvesting"],
  },
  {
    id: 'fallback-4',
    slug: 'southbank-luxury-homes',
    title: "Southbank Luxury Homes",
    location: "12 Riverside Drive, Melbourne VIC 3006",
    short_description: "Premium riverside homes with stunning views and world-class finishes.",
    description: "",
    featured_image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
    project_type: "residential",
    completion_date: "2024-03-01",
    area_sqft: null,
    home_size_sqm: 520,
    budget_range: "$1.5M",
    bedrooms: 5,
    bathrooms: 4,
    garage_spaces: 3,
    land_size_sqm: 700,
    property_features: ["River Views", "Pool"],
  },
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
        .limit(4);

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
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <HomeProjectCard
            key={project.id}
            slug={project.slug}
            title={project.title}
            location={project.location}
            featured_image={PROJECT_IMAGE_OVERRIDES[project.slug] || project.featured_image || "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200"}
            project_type={project.project_type || 'residential'}
            completion_date={project.completion_date}
            home_size_sqm={project.home_size_sqm}
            area_sqft={project.area_sqft}
            bedrooms={project.bedrooms}
            bathrooms={project.bathrooms}
            garage_spaces={project.garage_spaces}
            land_size_sqm={project.land_size_sqm}
            budget_range={project.budget_range}
          />
        ))}
    </div>
  );
};
