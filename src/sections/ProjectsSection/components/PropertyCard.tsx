import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Car, Maximize2 } from 'lucide-react';

export interface PropertyCardProps {
  slug: string;
  title: string;
  location: string | null;
  short_description: string;
  featured_image: string;
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
  onEnquire: () => void;
}

const sqftToSqm = (sqft: number) => Math.round(sqft * 0.0929);

const getYear = (date: string | null) => {
  if (!date) return null;
  return new Date(date).getFullYear();
};

const formatProjectType = (type: string) =>
  type.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

export const PropertyCard = ({
  slug,
  title,
  location,
  short_description,
  featured_image,
  project_type,
  completion_date,
  area_sqft,
  home_size_sqm,
  budget_range,
  bedrooms,
  bathrooms,
  garage_spaces,
  land_size_sqm,
  property_features,
  onEnquire,
}: PropertyCardProps) => {
  const displayHomeSizeSqm = home_size_sqm || (area_sqft ? sqftToSqm(area_sqft) : null);
  const hasStats = bedrooms || bathrooms || garage_spaces || displayHomeSizeSqm;
  const hasDetails = budget_range || displayHomeSizeSqm || land_size_sqm || completion_date;
  const features = Array.isArray(property_features) ? property_features : [];

  return (
    <div
      className="flex flex-col md:flex-row border border-black/10 hover:shadow-[rgba(0,0,0,0.08)_0px_20px_50px_0px] transition-shadow duration-300"
      style={{ backgroundColor: '#e6feff' }}
    >
      <div className="relative overflow-hidden md:w-[42%] lg:w-[44%] shrink-0">
        <img
          src={featured_image}
          alt={title}
          className="w-full h-[240px] md:h-full object-cover hover:scale-105 transition-transform duration-500"
          style={{ minHeight: '240px' }}
        />
        <div className="absolute top-3 left-3 bg-black text-white text-xs px-2.5 py-1">
          {formatProjectType(project_type)}
        </div>
        {completion_date && (
          <div className="absolute top-3 right-3 bg-white text-black text-xs px-2.5 py-1 border border-black/10">
            {getYear(completion_date)}
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-5 md:p-6">
        {location && (
          <div className="flex items-start gap-1.5 mb-2">
            <MapPin size={13} className="text-zinc-400 mt-0.5 shrink-0" />
            <span className="text-xs text-zinc-500 leading-relaxed">{location}</span>
          </div>
        )}

        <h3 className="text-lg font-medium text-black leading-snug mb-3 md:text-xl">
          {title}
        </h3>

        {hasStats && (
          <div className="flex items-center flex-wrap gap-x-5 gap-y-2 pb-4 mb-4 border-b border-black/10">
            {bedrooms && (
              <div className="flex items-center gap-1.5">
                <Bed size={15} className="text-zinc-500" />
                <span className="text-xs text-zinc-700 font-medium">{bedrooms} Bed</span>
              </div>
            )}
            {bathrooms && (
              <div className="flex items-center gap-1.5">
                <Bath size={15} className="text-zinc-500" />
                <span className="text-xs text-zinc-700 font-medium">{bathrooms} Bath</span>
              </div>
            )}
            {garage_spaces && (
              <div className="flex items-center gap-1.5">
                <Car size={15} className="text-zinc-500" />
                <span className="text-xs text-zinc-700 font-medium">{garage_spaces} Garage</span>
              </div>
            )}
            {displayHomeSizeSqm && (
              <div className="flex items-center gap-1.5">
                <Maximize2 size={14} className="text-zinc-500" />
                <span className="text-xs text-zinc-700 font-medium">{displayHomeSizeSqm} m²</span>
              </div>
            )}
          </div>
        )}

        <p className="text-sm text-zinc-600 leading-relaxed mb-4">
          {short_description}
        </p>

        {hasDetails && (
          <div className="grid grid-cols-2 gap-2 mb-4">
            {budget_range && (
              <div className="bg-white/70 border border-black/5 px-3 py-2.5">
                <span className="text-xs text-zinc-400 block mb-0.5 uppercase tracking-wide">Investment</span>
                <span className="text-sm font-medium text-black">{budget_range}</span>
              </div>
            )}
            {displayHomeSizeSqm && (
              <div className="bg-white/70 border border-black/5 px-3 py-2.5">
                <span className="text-xs text-zinc-400 block mb-0.5 uppercase tracking-wide">Home Size</span>
                <span className="text-sm font-medium text-black">{displayHomeSizeSqm} m²</span>
              </div>
            )}
            {land_size_sqm && (
              <div className="bg-white/70 border border-black/5 px-3 py-2.5">
                <span className="text-xs text-zinc-400 block mb-0.5 uppercase tracking-wide">Land Size</span>
                <span className="text-sm font-medium text-black">{land_size_sqm} m²</span>
              </div>
            )}
            {completion_date && (
              <div className="bg-white/70 border border-black/5 px-3 py-2.5">
                <span className="text-xs text-zinc-400 block mb-0.5 uppercase tracking-wide">Completed</span>
                <span className="text-sm font-medium text-black">{getYear(completion_date)}</span>
              </div>
            )}
          </div>
        )}

        {features.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {features.slice(0, 5).map((feature, i) => (
              <span
                key={i}
                className="text-xs text-zinc-600 bg-black/5 px-2.5 py-1 leading-tight"
              >
                {feature}
              </span>
            ))}
            {features.length > 5 && (
              <span className="text-xs text-zinc-400 bg-black/5 px-2.5 py-1 leading-tight">
                +{features.length - 5} more
              </span>
            )}
          </div>
        )}

        <div className="mt-auto flex flex-col sm:flex-row gap-2.5">
          <Link
            to={`/projects/${slug}`}
            className="flex items-center justify-center gap-2 flex-1 border border-black text-black text-sm px-5 py-3 hover:bg-black hover:text-white transition-colors"
          >
            See More
          </Link>
          <button
            onClick={onEnquire}
            className="flex items-center justify-center gap-2.5 flex-1 bg-red-600 text-white text-sm px-5 py-3 hover:bg-red-700 transition-colors"
          >
            <span>Enquire</span>
            <img
              src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c559d1989cb82e96c949e_15fec19f4179bbda8c7cdc30da4795c2_button-arrow.svg"
              alt=""
              className="max-w-full"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
