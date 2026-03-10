import { Link } from 'react-router-dom';

export type ProjectCardProps = {
  href: string;
  slug?: string;
  imageUrl: string;
  imageAlt: string;
  location: string;
  title: string;
  description: string;
  details: string;
  buttonText: string;
  arrowIconUrl: string;
  arrowIconAlt: string;
  descriptionContainerWidth?: string;
};

export const ProjectCard = (props: ProjectCardProps) => {
  const detailLink = props.slug ? `/projects/${props.slug}` : props.href;

  return (
    <div role="listitem" className="box-border caret-transparent flex">
      <div
        className="relative box-border caret-transparent flex flex-col md:flex-row max-w-full w-full overflow-hidden group border border-black/10 hover:shadow-[rgba(0,0,0,0.08)_0px_20px_50px_0px] transition-shadow duration-300"
        style={{ backgroundColor: '#e6feff' }}
      >
        <div className="relative overflow-hidden md:w-[48%] shrink-0">
          <img
            src={props.imageUrl}
            alt={props.imageAlt}
            className="w-full h-[220px] md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
            style={{ minHeight: '220px' }}
          />
        </div>

        <div className="flex flex-col justify-between p-5 md:p-7 flex-1">
          <div>
            <div className="text-xs text-zinc-500 leading-[18px] mb-1">
              {props.location}
            </div>
            <h4 className="text-base font-medium text-black leading-snug mt-0.5 md:text-[20px]">
              {props.title}
            </h4>
            <p className="text-sm text-zinc-600 leading-relaxed mt-3 line-clamp-4">
              {props.description}
            </p>
          </div>

          <div className="mt-5">
            <Link
              to={detailLink}
              className="flex items-center justify-center gap-2 w-full border border-black text-black text-sm px-5 py-2.5 hover:bg-black hover:text-white transition-colors"
            >
              See More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
