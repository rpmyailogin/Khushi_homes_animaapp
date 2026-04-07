import { Shield, Star, Heart, Users, Award, Chrome as Home } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: "Integrity & Transparency",
    description: "We believe in honest communication at every stage of your project. No hidden costs, no surprises — just clear, straightforward dealings that build lasting trust."
  },
  {
    icon: Star,
    title: "Uncompromising Quality",
    description: "From the materials we select to the craftsmanship we deliver, quality is never negotiated. Every detail matters, and we hold ourselves to the highest standards."
  },
  {
    icon: Heart,
    title: "Client-First Philosophy",
    description: "Your home is your sanctuary. We listen deeply to your vision and tailor every decision around your needs, lifestyle, and aspirations."
  },
  {
    icon: Users,
    title: "Community & Connection",
    description: "We are more than builders — we are community makers. We design spaces that bring families together and neighbourhoods to life."
  },
  {
    icon: Award,
    title: "Excellence in Delivery",
    description: "We are committed to on-time, on-budget delivery without cutting corners. Our track record speaks for itself — projects completed with pride."
  },
  {
    icon: Home,
    title: "Homes with Heart",
    description: "Every project we undertake is treated as if it were our own home. That personal investment shines through in every space we create."
  }
];

export const ValuesSection = () => {
  return (
    <div className="w-full">
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <p className="text-white/40 text-sm uppercase tracking-[0.2em] mb-4">Who We Are</p>
        <h2 className="text-white text-3xl md:text-5xl font-normal mb-6 leading-tight">
          Building Homes.<br />
          <span className="text-[#C9973A]">Building Futures.</span>
        </h2>
        <p className="text-white/70 text-base md:text-lg leading-relaxed">
          Khushi Homes was founded on a simple belief — every family deserves a home that reflects their dreams.
          Based in Melbourne, we specialise in custom home builds, renovations, and extensions that blend
          contemporary design with enduring quality. We are not just constructing buildings; we are crafting
          the places where memories are made, children grow, and lives unfold.
        </p>
      </div>

      <div className="bg-zinc-900/50 border border-white/5 p-8 md:p-12 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-[#C9973A] text-sm uppercase tracking-[0.2em] mb-3">Our Mission</p>
            <h3 className="text-white text-2xl md:text-3xl font-normal mb-4 leading-snug">
              Turning Your Vision Into a Place You Love Coming Home To
            </h3>
            <p className="text-white/70 leading-relaxed">
              At Khushi Homes, our mission is to deliver exceptional homes through a seamless,
              stress-free process. We combine architectural excellence with personalised service,
              ensuring every homeowner feels heard, supported, and thrilled with the outcome.
              We measure our success not just by the homes we build, but by the smiles on our clients' faces.
            </p>
          </div>
          <div className="border-l border-white/10 pl-8 md:pl-12">
            <p className="text-[#C9973A] text-sm uppercase tracking-[0.2em] mb-3">Our Vision</p>
            <h3 className="text-white text-2xl md:text-3xl font-normal mb-4 leading-snug">
              Setting the Standard for Residential Excellence in Australia
            </h3>
            <p className="text-white/70 leading-relaxed">
              We envision a future where every Australian family has access to a beautifully designed,
              thoughtfully built home. We strive to be the most trusted name in residential construction —
              known for our integrity, our craftsmanship, and our genuine care for the people we serve.
            </p>
          </div>
        </div>
      </div>

      <div>
        <p className="text-white/40 text-sm uppercase tracking-[0.2em] mb-4 text-center">What Drives Us</p>
        <h2 className="text-white text-2xl md:text-4xl font-normal mb-10 text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-zinc-900 border border-white/5 p-6 hover:border-[#C9973A]/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#C9973A]/10 flex items-center justify-center mb-5 group-hover:bg-[#C9973A]/20 transition-colors duration-300">
                  <Icon size={22} className="text-[#C9973A]" />
                </div>
                <h3 className="text-white text-lg font-normal mb-3">{value.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
