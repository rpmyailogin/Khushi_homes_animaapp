import { TeamMember } from './TeamMember';

const teamMembers = [
  {
    name: "Rajesh Kumar",
    position: "Founder & CEO",
    description: "With over 20 years of experience in construction, Rajesh founded Khushi Homes with a vision to create modern living spaces that blend innovation with traditional craftsmanship and ethical business practices.",
    email: "rajesh@khushihomes.com.au",
    phone: "+61 400 000 001",
    linkedin: "https://linkedin.com/in/rajesh-kumar",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Sarah Mitchell",
    position: "Head of Design",
    description: "Sarah brings architectural excellence to every project, ensuring that each Khushi home reflects both aesthetic beauty and functional innovation while maintaining sustainable design principles.",
    email: "sarah@khushihomes.com.au",
    phone: "+61 400 000 002",
    linkedin: "https://linkedin.com/in/sarah-mitchell",
    image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Priya Sharma",
    position: "Client Relations Manager",
    description: "Priya ensures transparent communication and exceptional customer service, building lasting relationships with clients based on trust, honesty, and a shared vision for their dream homes.",
    email: "priya@khushihomes.com.au",
    phone: "+61 400 000 004",
    linkedin: "https://linkedin.com/in/priya-sharma",
    image: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

export const TeamSection = () => {
  return (
    <div className="mt-16">
      <div className="mb-10">
        <div className="flex items-center gap-x-2 mb-4">
          <div className="flex gap-x-1">
            <div className="bg-white/10 h-1.5 w-1.5"></div>
            <div className="bg-white/10 h-1.5 w-1.5"></div>
          </div>
          <span className="text-white text-sm uppercase tracking-wide">Our Team</span>
        </div>
        <h2 className="text-white text-4xl md:text-5xl font-semibold mb-4">
          Meet the People Behind Khushi Homes
        </h2>
        <p className="text-gray-300 text-lg max-w-3xl leading-relaxed">
          Our dedicated team of professionals brings together decades of experience,
          unwavering commitment to quality, and a shared passion for creating homes
          that embody modern design and real ethics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};
