import { Mail, Linkedin, Phone } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  position: string;
  description: string;
  email?: string;
  phone?: string;
  linkedin?: string;
  image: string;
}

export const TeamMember = ({ name, position, description, email, phone, linkedin, image }: TeamMemberProps) => {
  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden group hover:bg-zinc-800 transition-colors">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-white text-xl font-semibold mb-1">{name}</h3>
        <p className="text-amber-500 text-sm font-medium mb-3 uppercase tracking-wide">{position}</p>
        <p className="text-gray-300 text-sm leading-relaxed mb-4">{description}</p>

        <div className="flex gap-3">
          {email && (
            <a
              href={`mailto:${email}`}
              className="bg-white/10 p-2 rounded hover:bg-amber-500 transition-colors group/icon"
              aria-label={`Email ${name}`}
            >
              <Mail className="w-4 h-4 text-white" />
            </a>
          )}
          {phone && (
            <a
              href={`tel:${phone}`}
              className="bg-white/10 p-2 rounded hover:bg-amber-500 transition-colors group/icon"
              aria-label={`Call ${name}`}
            >
              <Phone className="w-4 h-4 text-white" />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-2 rounded hover:bg-amber-500 transition-colors group/icon"
              aria-label={`${name}'s LinkedIn`}
            >
              <Linkedin className="w-4 h-4 text-white" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
