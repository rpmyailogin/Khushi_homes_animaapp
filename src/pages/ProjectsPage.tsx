import { useState, useEffect } from 'react';
import { SectionHeader } from "@/components/SectionHeader";
import { ContactModal } from '@/components/ContactModal';
import { supabase } from '@/lib/supabase';

interface Project {
  id: string;
  title: string;
  short_description: string;
  featured_image: string | null;
  project_type: string;
  location: string | null;
  budget_range: string | null;
  completion_date: string | null;
  area_sqft: number | null;
}

export const ProjectsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
        .order('display_order', { ascending: true });

      if (error) throw error;
      setProjects(data || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const getYear = (date: string | null) => {
    if (!date) return 'N/A';
    return new Date(date).getFullYear().toString();
  };

  const calculateDuration = (completionDate: string | null) => {
    if (!completionDate) return 'N/A';
    return 'Completed';
  };

  return (
    <div className="box-border caret-transparent">
      <section className="bg-gray-100 box-border caret-transparent py-10 md:py-20">
        <div className="box-border caret-transparent max-w-full w-full mx-auto px-5 md:max-w-[1336px]">
          <SectionHeader subtitle="Portfolio" title="Our Projects" />
          <p className="box-border caret-transparent max-w-3xl mb-10">
            Explore our portfolio of beautifully crafted homes across Australia. From custom new builds to complete renovations, each project showcases our commitment to quality craftsmanship and modern design.
          </p>
        </div>
      </section>

      <section className="box-border caret-transparent py-10 md:py-[60px]">
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
            <div className="box-border caret-transparent grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-10 sm:grid-cols-2 md:gap-x-[30px] md:gap-y-[60px]">
              {projects.map((project) => (
                <div key={project.id} className="box-border caret-transparent flex flex-col border border-solid border-black/10 hover:shadow-[rgba(0,0,0,0.06)_0px_30px_60px_0px] transition-shadow" style={{ backgroundColor: '#e6feff' }}>
                  <div className="box-border caret-transparent overflow-hidden" style={{ backgroundColor: '#e6feff' }}>
                    <img
                      src={project.featured_image || "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800"}
                      alt={project.title}
                      className="box-border caret-transparent inline-block max-h-[300px] max-w-full min-h-[300px] object-cover w-full hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="box-border caret-transparent p-5 md:p-[30px] flex flex-col gap-y-4" style={{ backgroundColor: '#e6feff' }}>
                    <div className="box-border caret-transparent flex items-center justify-between gap-x-3">
                      <div className="text-sm bg-gray-100 box-border caret-transparent leading-[14px] px-2.5 py-[5px]">
                        {project.project_type}
                      </div>
                      <div className="text-sm box-border caret-transparent leading-[21px]">
                        {getYear(project.completion_date)}
                      </div>
                    </div>
                    <h3 className="text-black text-xl font-medium box-border caret-transparent leading-[30px] md:text-2xl md:leading-[36px]">
                      {project.title}
                    </h3>
                    <p className="box-border caret-transparent">
                      {project.short_description}
                    </p>
                    <div className="box-border caret-transparent flex flex-col gap-y-2 pt-4 border-t border-solid border-black/10">
                      {project.location && (
                        <div className="box-border caret-transparent flex justify-between">
                          <span className="text-sm box-border caret-transparent leading-[21px]">Location:</span>
                          <span className="text-sm font-medium box-border caret-transparent leading-[21px]">{project.location}</span>
                        </div>
                      )}
                      {project.budget_range && (
                        <div className="box-border caret-transparent flex justify-between">
                          <span className="text-sm box-border caret-transparent leading-[21px]">Project Value:</span>
                          <span className="text-sm font-medium box-border caret-transparent leading-[21px]">{project.budget_range}</span>
                        </div>
                      )}
                      {project.area_sqft && (
                        <div className="box-border caret-transparent flex justify-between">
                          <span className="text-sm box-border caret-transparent leading-[21px]">Area:</span>
                          <span className="text-sm font-medium box-border caret-transparent leading-[21px]">{project.area_sqft} sq ft</span>
                        </div>
                      )}
                      {project.completion_date && (
                        <div className="box-border caret-transparent flex justify-between">
                          <span className="text-sm box-border caret-transparent leading-[21px]">Status:</span>
                          <span className="text-sm font-medium box-border caret-transparent leading-[21px]">{calculateDuration(project.completion_date)}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
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
