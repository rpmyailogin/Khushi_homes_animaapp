import { Linkedin, Twitter, Facebook } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Sunny Katyal",
    role: "Founder & CEO",
    bio: "Sunny Katyal is the visionary behind Khushi Homes, bringing over a decade of experience in residential construction and real estate development. His passion for creating exceptional living spaces and commitment to quality has established Khushi Homes as a trusted name in the industry. Under his leadership, the company has successfully delivered numerous projects that blend innovative design with functional excellence.",
    image: "/static/sunny-profile.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#"
    }
  },
  {
    name: "Samrita Sharma",
    role: "Head of Designs",
    bio: "Samrita Sharma leads the design division at Khushi Homes with her exceptional eye for detail and contemporary aesthetics. With extensive experience in architectural design and interior planning, she transforms client visions into stunning reality. Her innovative approach to space optimization and sustainable design principles ensures that every project reflects both beauty and functionality.",
    image: "/static/samrita-profile.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#"
    }
  },
  {
    name: "Ritesh Patel",
    role: "Customer Relation Manager",
    bio: "Ritesh Patel is the cornerstone of client satisfaction at Khushi Homes. With his exceptional communication skills and dedication to customer service, he ensures that every client's journey from consultation to project completion is seamless and enjoyable. His ability to understand client needs and provide personalized solutions has earned him the trust and appreciation of countless homeowners.",
    image: "/static/ritesh-profile.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#"
    }
  }
];

export const TeamSection = () => {
  return (
    <div className="w-full">
      <h2 className="text-white text-3xl md:text-4xl font-normal mb-12 text-center">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-zinc-900 box-border caret-transparent overflow-hidden transition-transform hover:scale-105 duration-300">
            <div className="aspect-square overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-white text-xl font-normal mb-1">{member.name}</h3>
              <p className="text-white/60 text-sm mb-4 uppercase tracking-wider">{member.role}</p>
              <p className="text-white/80 text-sm leading-relaxed mb-6">{member.bio}</p>
              <div className="flex gap-x-4">
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    className="text-white/60 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                )}
                {member.social.twitter && (
                  <a
                    href={member.social.twitter}
                    className="text-white/60 hover:text-white transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                )}
                {member.social.facebook && (
                  <a
                    href={member.social.facebook}
                    className="text-white/60 hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
