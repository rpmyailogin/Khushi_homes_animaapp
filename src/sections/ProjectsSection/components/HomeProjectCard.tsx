import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Car, Maximize2 } from 'lucide-react';

interface HomeProjectCardProps {
  slug: string;
  title: string;
  location: string | null;
  featured_image: string;
  project_type: string;
  completion_date: string | null;
  home_size_sqm: number | null;
  area_sqft: number | null;
  bedrooms: number | null;
  bathrooms: number | null;
  garage_spaces: number | null;
  land_size_sqm: number | null;
  budget_range: string | null;
}

const sqftToSqm = (sqft: number) => Math.round(sqft * 0.0929);

const formatType = (type: string) =>
  type.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

export const HomeProjectCard = ({
  slug,
  title,
  location,
  featured_image,
  project_type,
  completion_date,
  home_size_sqm,
  area_sqft,
  bedrooms,
  bathrooms,
  garage_spaces,
  budget_range,
}: HomeProjectCardProps) => {
  const sizeSqm = home_size_sqm || (area_sqft ? sqftToSqm(area_sqft) : null);

  const metrics = [
    bedrooms ? { icon: <Bed size={13} />, value: bedrooms, label: 'Beds' } : null,
    bathrooms ? { icon: <Bath size={13} />, value: bathrooms, label: 'Baths' } : null,
    garage_spaces ? { icon: <Car size={13} />, value: garage_spaces, label: 'Garage' } : null,
    sizeSqm ? { icon: <Maximize2 size={12} />, value: `${sizeSqm} m²`, label: 'Size' } : null,
  ].filter(Boolean) as { icon: React.ReactNode; value: string | number; label: string }[];

  return (
    <Link
      to={`/projects/${slug}`}
      className="group flex flex-col overflow-hidden bg-white border border-black/8 hover:shadow-lg transition-all duration-300"
    >
      <div className="relative overflow-hidden">
        <img
          src={featured_image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="w-full h-[246px] object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="bg-white/95 text-black text-[10px] font-medium uppercase tracking-wider px-2.5 py-1">
            {formatType(project_type)}
          </span>
        </div>
        {completion_date && (
          <div className="absolute top-3 right-3">
            <span className="bg-black/70 text-white text-[10px] px-2.5 py-1">
              {new Date(completion_date).getFullYear()}
            </span>
          </div>
        )}
        {budget_range && (
          <div className="absolute bottom-3 right-3">
            <span className="bg-white/95 text-black text-xs font-semibold px-3 py-1">
              {budget_range}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-5">
        {location && (
          <div className="flex items-center gap-1 mb-2">
            <MapPin size={11} className="text-zinc-400 shrink-0" />
            <span className="text-xs text-zinc-400 line-clamp-1">{location}</span>
          </div>
        )}

        <h3 className="text-[15px] font-semibold text-black leading-snug mb-4 group-hover:text-zinc-700 transition-colors">
          {title}
        </h3>

        {metrics.length > 0 && (
          <div className="flex items-center gap-4 pt-4 border-t border-black/8">
            {metrics.map((m, i) => (
              <div key={i} className="flex items-center gap-1.5 text-zinc-500">
                <span className="text-zinc-400">{m.icon}</span>
                <span className="text-xs font-medium text-black">{m.value}</span>
                <span className="text-[10px] text-zinc-400">{m.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};
