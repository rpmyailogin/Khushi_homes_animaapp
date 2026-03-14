import { useState, useEffect } from 'react';
import { SectionHeader } from "@/components/SectionHeader";
import { ContactModal } from '@/components/ContactModal';
import { PropertyCard } from '@/sections/ProjectsSection/components/PropertyCard';
import { supabase } from '@/lib/supabase';

interface Project {
  id: string;
  slug: string;
  title: string;
  short_description: string;
  featured_image: string | null;
  project_type: string;
  location: string | null;
  budget_range: string | null;
  completion_date: string | null;
  area_sqft: number | null;
  home_size_sqm: number | null;
  bedrooms: number | null;
  bathrooms: number | null;
  garage_spaces: number | null;
  land_size_sqm: number | null;
  property_features: string[] | null;
}

export const ProjectsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Projects - Khushi Homes";
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('is_published', true)
        .order('display_order', { ascending: true });

      if (error) throw error;
      setProjects(data || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="box-border caret-transparent">
      <section className="bg-gray-100 box-border caret-transparent py-10 md:py-20">
        <div className="box-border caret-transparent max-w-full w-full mx-auto px-5 md:max-w-[1336px]">
          <SectionHeader subtitle="Portfolio" title="Our Projects" />
          <p className="box-border caret-transparent max-w-3xl mb-10">
            Explore our portfolio of beautifully crafted homes across Melbourne. From custom new builds to complete renovations, each project showcases our commitment to quality craftsmanship and modern design.
          </p>
        </div>
      </section>

      <section className="box-border caret-transparent py-10 md:py-[60px]" style={{ backgroundColor: '#e6feff' }}>
        <div className="box-border caret-transparent max-w-full w-full mx-auto px-5 md:max-w-[1336px]">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
            </div>
          ) : projects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-zinc-600">No projects available at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {projects.map((project) => (
                <PropertyCard
                  key={project.id}
                  slug={project.slug}
                  title={project.title}
                  location={project.location}
                  short_description={project.short_description}
                  featured_image={
                    project.featured_image ||
                    'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200'
                  }
                  project_type={project.project_type}
                  completion_date={project.completion_date}
                  area_sqft={project.area_sqft}
                  home_size_sqm={project.home_size_sqm}
                  budget_range={project.budget_range}
                  bedrooms={project.bedrooms}
                  bathrooms={project.bathrooms}
                  garage_spaces={project.garage_spaces}
                  land_size_sqm={project.land_size_sqm}
                  property_features={project.property_features || []}
                  onEnquire={() => setIsModalOpen(true)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-black box-border caret-transparent py-10 md:py-[60px]">
        <div className="box-border caret-transparent max-w-full w-full mx-auto px-5 md:max-w-[1336px]">
          <div className="box-border caret-transparent text-center max-w-3xl mx-auto">
            <h3 className="text-white text-xl font-medium box-border caret-transparent leading-[30px] mb-5 md:text-2xl md:leading-[36px]">
              Ready to Start Your Project?
            </h3>
            <p className="text-neutral-400 box-border caret-transparent mb-8">
              Let's discuss how we can bring your dream home to life with our expertise and commitment to excellence.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-white text-sm items-center box-border caret-transparent gap-x-2.5 inline-flex justify-center leading-[16.8px] border px-[22px] py-3 border-solid border-white hover:bg-white hover:text-black transition-colors"
            >
              <div className="box-border caret-transparent">Contact Us</div>
              <img
                src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c559d1989cb82e96c949e_15fec19f4179bbda8c7cdc30da4795c2_button-arrow.svg"
                alt="Arrow"
                className="box-border caret-transparent max-w-full"
              />
            </button>
          </div>
        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};
