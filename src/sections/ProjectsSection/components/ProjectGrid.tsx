import { useEffect, useState } from 'react';
import { ProjectCard } from "@/sections/ProjectsSection/components/ProjectCard";
import { supabase } from '@/lib/supabase';

interface Project {
  id: string;
  title: string;
  short_description: string;
  description: string;
  featured_image: string | null;
  location: string | null;
}

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
      setProjects(data || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
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

  if (projects.length === 0) {
    return null;
  }

  return (
    <div
      role="list"
      className="box-border caret-transparent grid grid-cols-1 gap-y-8 sm:gap-y-10 md:grid-cols-2 md:gap-x-6 md:gap-y-[30px] lg:grid-cols-3"
    >
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          href="/projects"
          imageUrl={project.featured_image || "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200"}
          imageAlt={project.title}
          location={project.location || ""}
          title={project.title}
          description={project.short_description}
          details={project.description}
          buttonText="View Project"
          arrowIconUrl="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c559d1989cb82e96c949e_15fec19f4179bbda8c7cdc30da4795c2_button-arrow.svg"
          arrowIconAlt="Arrow"
        />
      ))}
    </div>
  );
};
