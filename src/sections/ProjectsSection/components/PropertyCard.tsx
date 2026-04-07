import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Car, Maximize2, LandPlot } from 'lucide-react';

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

const formatProjectType = (type: string) =>
  type.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

export const PropertyCard = ({
  slug,
  title,
  location,
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
  const features = Array.isArray(property_features) ? property_features : [];

  return (
    <div
      className="flex flex-col border border-black/10 hover:shadow-[rgba(0,0,0,0.08)_0px_20px_50px_0px] transition-shadow duration-300 group"
      style={{ backgroundColor: '#e6feff' }}
    >
      <div className="relative overflow-hidden shrink-0">
        <img
          src={featured_image}
          alt={title}
          className="w-full h-[220px] object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-black text-white text-xs px-2.5 py-1">
          {formatProjectType(project_type)}
        </div>
        {completion_date && (
          <div className="absolute top-3 right-3 bg-white text-black text-xs px-2.5 py-1 border border-black/10">
            {new Date(completion_date).getFullYear()}
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-4">
        {location && (
          <div className="flex items-start gap-1 mb-1.5">
            <MapPin size={12} className="text-zinc-400 mt-0.5 shrink-0" />
            <span className="text-xs text-zinc-500 leading-relaxed line-clamp-1">{location}</span>
          </div>
        )}

        <h3 className="text-base font-medium text-black leading-snug mb-3 line-clamp-2">
          {title}
        </h3>

        <div className="grid grid-cols-2 gap-2 mb-3">
          {bedrooms && (
            <div className="flex items-center gap-1.5 bg-white/60 border border-black/5 px-2.5 py-2">
              <Bed size={14} className="text-zinc-500 shrink-0" />
              <div>
                <div className="text-[10px] text-zinc-400 uppercase tracking-wide leading-none mb-0.5">Bedrooms</div>
                <div className="text-sm font-medium text-black">{bedrooms}</div>
              </div>
            </div>
          )}
          {bathrooms && (
            <div className="flex items-center gap-1.5 bg-white/60 border border-black/5 px-2.5 py-2">
              <Bath size={14} className="text-zinc-500 shrink-0" />
              <div>
                <div className="text-[10px] text-zinc-400 uppercase tracking-wide leading-none mb-0.5">Bathrooms</div>
                <div className="text-sm font-medium text-black">{bathrooms}</div>
              </div>
            </div>
          )}
          {garage_spaces && (
            <div className="flex items-center gap-1.5 bg-white/60 border border-black/5 px-2.5 py-2">
              <Car size={14} className="text-zinc-500 shrink-0" />
              <div>
                <div className="text-[10px] text-zinc-400 uppercase tracking-wide leading-none mb-0.5">Garage</div>
                <div className="text-sm font-medium text-black">{garage_spaces}</div>
              </div>
            </div>
          )}
          {displayHomeSizeSqm && (
            <div className="flex items-center gap-1.5 bg-white/60 border border-black/5 px-2.5 py-2">
              <Maximize2 size={13} className="text-zinc-500 shrink-0" />
              <div>
                <div className="text-[10px] text-zinc-400 uppercase tracking-wide leading-none mb-0.5">Home Size</div>
                <div className="text-sm font-medium text-black">{displayHomeSizeSqm} m²</div>
              </div>
            </div>
          )}
          {land_size_sqm && (
            <div className="flex items-center gap-1.5 bg-white/60 border border-black/5 px-2.5 py-2">
              <LandPlot size={14} className="text-zinc-500 shrink-0" />
              <div>
                <div className="text-[10px] text-zinc-400 uppercase tracking-wide leading-none mb-0.5">Land Size</div>
                <div className="text-sm font-medium text-black">{land_size_sqm} m²</div>
              </div>
            </div>
          )}
          {budget_range && (
            <div className="flex items-center gap-1.5 bg-white/60 border border-black/5 px-2.5 py-2 col-span-1">
              <div>
                <div className="text-[10px] text-zinc-400 uppercase tracking-wide leading-none mb-0.5">Value</div>
                <div className="text-sm font-medium text-black">{budget_range}</div>
              </div>
            </div>
          )}
        </div>

        {features.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {features.slice(0, 3).map((feature, i) => (
              <span
                key={i}
                className="text-[10px] text-zinc-600 bg-black/5 px-2 py-0.5 leading-tight"
              >
                {feature}
              </span>
            ))}
            {features.length > 3 && (
              <span className="text-[10px] text-zinc-400 bg-black/5 px-2 py-0.5 leading-tight">
                +{features.length - 3} more
              </span>
            )}
          </div>
        )}

        <div className="mt-auto flex gap-2 pt-2">
          <Link
            to={`/projects/${slug}`}
            className="flex items-center justify-center flex-1 border border-black text-black text-xs px-4 py-2.5 hover:bg-black hover:text-white transition-colors"
          >
            See More
          </Link>
          <button
            onClick={onEnquire}
            className="flex items-center justify-center flex-1 bg-red-600 text-white text-xs px-4 py-2.5 hover:bg-red-700 transition-colors"
          >
            Enquire
          </button>
        </div>
      </div>
    </div>
  );
};
