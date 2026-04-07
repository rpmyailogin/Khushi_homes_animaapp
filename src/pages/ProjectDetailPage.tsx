import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Bed, Bath, Car, Maximize2, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { ContactModal } from '@/components/ContactModal';
import { supabase } from '@/lib/supabase';

interface Project {
  id: string;
  title: string;
  slug: string;
  short_description: string;
  description: string;
  featured_image: string | null;
  gallery_images: string[] | null;
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

const sqftToSqm = (sqft: number) => Math.round(sqft * 0.0929);

const getYear = (date: string | null) => {
  if (!date) return null;
  return new Date(date).getFullYear();
};

const formatProjectType = (type: string) =>
  type.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

export const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (slug) fetchProject();
  }, [slug]);

  const fetchProject = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .maybeSingle();

      if (error) throw error;
      if (data) {
        setProject(data);
        document.title = `${data.title} - Khushi Homes`;
      }
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-5">
        <p className="text-zinc-600 mb-4">Project not found.</p>
        <button
          onClick={() => navigate('/projects')}
          className="flex items-center gap-2 text-sm text-black hover:text-red-600 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </button>
      </div>
    );
  }

  const featuredImage = project.featured_image;
  const allImages = [
    ...(featuredImage ? [featuredImage] : []),
    ...(Array.isArray(project.gallery_images) ? project.gallery_images : []),
  ].filter(Boolean);

  const displayHomeSizeSqm = project.home_size_sqm || (project.area_sqft ? sqftToSqm(project.area_sqft) : null);
  const features = Array.isArray(project.property_features) ? project.property_features : [];

  const prevImage = () => setActiveImageIndex(i => (i === 0 ? allImages.length - 1 : i - 1));
  const nextImage = () => setActiveImageIndex(i => (i === allImages.length - 1 ? 0 : i + 1));

  return (
    <div className="box-border caret-transparent" style={{ backgroundColor: '#e6feff' }}>
      <div className="max-w-full w-full mx-auto px-5 md:max-w-[1336px] py-8 md:py-12">
        <button
          onClick={() => navigate('/projects')}
          className="flex items-center gap-2 text-sm text-zinc-600 hover:text-black transition-colors mb-8"
        >
          <ArrowLeft size={15} />
          Back to Projects
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="flex flex-col gap-3">
            <div className="relative overflow-hidden bg-zinc-100" style={{ aspectRatio: '16/10' }}>
              {allImages.length > 0 ? (
                <img
                  src={allImages[activeImageIndex]}
                  alt={project.title}
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-zinc-400">No image</div>
              )}

              {allImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black text-white w-9 h-9 flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black text-white w-9 h-9 flex items-center justify-center transition-colors"
                  >
                    <ChevronRight size={18} />
                  </button>
                  <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2.5 py-1">
                    {activeImageIndex + 1} / {allImages.length}
                  </div>
                </>
              )}
            </div>

            {allImages.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {allImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIndex(i)}
                    className={`overflow-hidden border-2 transition-colors ${
                      activeImageIndex === i ? 'border-black' : 'border-transparent'
                    }`}
                    style={{ aspectRatio: '4/3' }}
                  >
                    <img src={img} alt={`View ${i + 1}`} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-black text-white text-xs px-2.5 py-1">
                {formatProjectType(project.project_type)}
              </span>
              {project.completion_date && (
                <span className="bg-white text-black text-xs px-2.5 py-1 border border-black/10">
                  {getYear(project.completion_date)}
                </span>
              )}
            </div>

            {project.location && (
              <div className="flex items-start gap-1.5 mb-2">
                <MapPin size={13} className="text-zinc-400 mt-0.5 shrink-0" />
                <span className="text-xs text-zinc-500">{project.location}</span>
              </div>
            )}

            <h1 className="text-2xl font-medium text-black leading-snug mb-4 md:text-3xl">
              {project.title}
            </h1>

            {(project.bedrooms || project.bathrooms || project.garage_spaces || displayHomeSizeSqm) && (
              <div className="flex items-center flex-wrap gap-x-6 gap-y-2 pb-4 mb-4 border-b border-black/10">
                {project.bedrooms && (
                  <div className="flex items-center gap-1.5">
                    <Bed size={16} className="text-zinc-500" />
                    <span className="text-sm text-zinc-700 font-medium">{project.bedrooms} Bed</span>
                  </div>
                )}
                {project.bathrooms && (
                  <div className="flex items-center gap-1.5">
                    <Bath size={16} className="text-zinc-500" />
                    <span className="text-sm text-zinc-700 font-medium">{project.bathrooms} Bath</span>
                  </div>
                )}
                {project.garage_spaces && (
                  <div className="flex items-center gap-1.5">
                    <Car size={16} className="text-zinc-500" />
                    <span className="text-sm text-zinc-700 font-medium">{project.garage_spaces} Garage</span>
                  </div>
                )}
                {displayHomeSizeSqm && (
                  <div className="flex items-center gap-1.5">
                    <Maximize2 size={15} className="text-zinc-500" />
                    <span className="text-sm text-zinc-700 font-medium">{displayHomeSizeSqm} m²</span>
                  </div>
                )}
              </div>
            )}

            <p className="text-sm text-zinc-600 leading-relaxed mb-5">
              {project.short_description}
            </p>

            {(project.budget_range || displayHomeSizeSqm || project.land_size_sqm || project.completion_date) && (
              <div className="grid grid-cols-2 gap-2.5 mb-5">
                {project.budget_range && (
                  <div className="bg-white border border-black/5 px-3 py-2.5">
                    <span className="text-xs text-zinc-400 block mb-0.5 uppercase tracking-wide">Investment</span>
                    <span className="text-sm font-medium text-black">{project.budget_range}</span>
                  </div>
                )}
                {displayHomeSizeSqm && (
                  <div className="bg-white border border-black/5 px-3 py-2.5">
                    <span className="text-xs text-zinc-400 block mb-0.5 uppercase tracking-wide">Home Size</span>
                    <span className="text-sm font-medium text-black">{displayHomeSizeSqm} m²</span>
                  </div>
                )}
                {project.land_size_sqm && (
                  <div className="bg-white border border-black/5 px-3 py-2.5">
                    <span className="text-xs text-zinc-400 block mb-0.5 uppercase tracking-wide">Land Size</span>
                    <span className="text-sm font-medium text-black">{project.land_size_sqm} m²</span>
                  </div>
                )}
                {project.completion_date && (
                  <div className="bg-white border border-black/5 px-3 py-2.5">
                    <span className="text-xs text-zinc-400 block mb-0.5 uppercase tracking-wide">Completed</span>
                    <span className="text-sm font-medium text-black">{getYear(project.completion_date)}</span>
                  </div>
                )}
              </div>
            )}

            {features.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-6">
                {features.map((feature, i) => (
                  <span
                    key={i}
                    className="text-xs text-zinc-600 bg-black/5 px-2.5 py-1 leading-tight"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            )}

            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center gap-2.5 w-full bg-red-600 text-white text-sm px-5 py-3.5 hover:bg-red-700 transition-colors mt-auto"
            >
              <span>Enquire About This Property</span>
              <img
                src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c559d1989cb82e96c949e_15fec19f4179bbda8c7cdc30da4795c2_button-arrow.svg"
                alt=""
                className="max-w-full"
              />
            </button>
          </div>
        </div>

        {project.description && project.description !== project.short_description && (
          <div className="mt-10 md:mt-14 border-t border-black/10 pt-8">
            <h2 className="text-xl font-medium text-black mb-4">About This Project</h2>
            <p className="text-sm text-zinc-600 leading-relaxed max-w-4xl whitespace-pre-line">
              {project.description}
            </p>
          </div>
        )}
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};
