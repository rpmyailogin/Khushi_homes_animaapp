import { SectionHeader } from "@/components/SectionHeader";

export const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: "Structural Engineering",
      icon: "https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/679dba1be9049fbc8805b173_ic-structural.svg",
      image: "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Expert engineering services ensuring structural integrity, safety, and compliance from foundation to completion.",
      features: ["Foundation Design", "Load Analysis", "Seismic Engineering", "Material Testing"]
    },
    {
      id: 2,
      title: "General Contracting",
      icon: "https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/679dba41441cc64868b978bd_ic-foundation.svg",
      image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Comprehensive project management overseeing all aspects of construction from procurement to final delivery.",
      features: ["Project Coordination", "Subcontractor Management", "Quality Control", "Timeline Management"]
    },
    {
      id: 3,
      title: "Commercial Construction",
      icon: "https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/679db879eb37a230407186f4_ic-commercial.svg",
      image: "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Building office spaces, retail centers, and multi-use commercial properties that meet modern business needs.",
      features: ["Office Buildings", "Retail Spaces", "Mixed-Use Developments", "Tenant Improvements"]
    },
    {
      id: 4,
      title: "Residential Construction",
      icon: "https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/679dba1be9049fbc8805b173_ic-structural.svg",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Creating dream homes and residential communities with attention to detail and quality craftsmanship.",
      features: ["Custom Homes", "Multi-Family Units", "Renovations", "Interior Design"]
    },
    {
      id: 5,
      title: "Infrastructure Development",
      icon: "https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/679dba41441cc64868b978bd_ic-foundation.svg",
      image: "https://images.pexels.com/photos/290275/pexels-photo-290275.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Large-scale infrastructure projects including roads, bridges, and public facilities that serve communities.",
      features: ["Road Construction", "Bridge Engineering", "Public Facilities", "Utilities Installation"]
    },
    {
      id: 6,
      title: "Renovation & Remodeling",
      icon: "https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/679db879eb37a230407186f4_ic-commercial.svg",
      image: "https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Transforming existing spaces with modern upgrades while preserving architectural character and value.",
      features: ["Historic Restoration", "Modern Upgrades", "Space Optimization", "Energy Efficiency"]
    }
  ];

  return (
    <div className="box-border caret-transparent">
      <section className="bg-gray-100 box-border caret-transparent py-10 md:py-20">
        <div className="box-border caret-transparent max-w-full w-full mx-auto px-5 md:max-w-[1336px]">
          <SectionHeader subtitle="What We Do" title="Our Services" />
          <p className="box-border caret-transparent max-w-3xl mb-10">
            Comprehensive construction services tailored to meet your unique needs. From concept to completion, we deliver excellence at every stage of your project.
          </p>
        </div>
      </section>

      <section className="box-border caret-transparent py-10 md:py-[60px]">
        <div className="box-border caret-transparent max-w-full w-full mx-auto px-5 md:max-w-[1336px]">
          <div className="box-border caret-transparent grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-10 md:grid-cols-[1fr_1fr_1fr] md:gap-x-[30px] md:gap-y-[60px]">
            {services.map((service) => (
              <div
                key={service.id}
                className="relative box-border caret-transparent flex flex-col max-w-full w-full border border-solid border-black/10 hover:bg-gray-100 hover:shadow-[rgba(0,0,0,0.06)_0px_30px_60px_0px] transition-all"
              >
                <div className="box-border caret-transparent p-5 md:p-[34px]">
                  <div className="box-border caret-transparent flex items-center justify-between mb-5">
                    <h3 className="text-black text-lg box-border caret-transparent leading-[27px] md:text-[22px] md:leading-[33px]">
                      {service.title}
                    </h3>
                    <img
                      src={service.icon}
                      alt="Service Icon"
                      className="box-border caret-transparent max-h-10 max-w-10 min-h-10 min-w-10"
                    />
                  </div>
                  <p className="box-border caret-transparent mb-6">
                    {service.description}
                  </p>
                  <div className="box-border caret-transparent mb-6">
                    <h4 className="text-sm font-medium box-border caret-transparent leading-[21px] mb-3 uppercase">
                      Key Features
                    </h4>
                    <ul className="box-border caret-transparent flex flex-col gap-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="text-sm box-border caret-transparent leading-[21px] flex items-center gap-x-2">
                          <div className="bg-black/10 box-border caret-transparent max-h-1.5 max-w-1.5 min-h-1.5 min-w-1.5"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-gray-100 box-border caret-transparent mt-auto">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="box-border caret-transparent inline-block max-h-[200px] max-w-full min-h-[200px] object-cover w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 box-border caret-transparent py-10 md:py-[60px]">
        <div className="box-border caret-transparent max-w-full w-full mx-auto px-5 md:max-w-[1336px]">
          <div className="box-border caret-transparent max-w-4xl mx-auto text-center">
            <h3 className="text-black text-xl font-medium box-border caret-transparent leading-[30px] mb-5 md:text-2xl md:leading-[36px]">
              Why Choose Our Services?
            </h3>
            <p className="box-border caret-transparent mb-8">
              With over 25 years of experience, our team brings expertise, innovation, and dedication to every project. We combine cutting-edge technology with time-tested construction practices to deliver exceptional results.
            </p>
            <div className="box-border caret-transparent grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-5 md:grid-cols-[1fr_1fr_1fr] md:gap-x-10">
              <div className="box-border caret-transparent">
                <div className="text-black text-3xl font-medium box-border caret-transparent leading-[45px] mb-2">
                  350+
                </div>
                <p className="text-sm box-border caret-transparent leading-[21px]">
                  Projects Completed
                </p>
              </div>
              <div className="box-border caret-transparent">
                <div className="text-black text-3xl font-medium box-border caret-transparent leading-[45px] mb-2">
                  95%
                </div>
                <p className="text-sm box-border caret-transparent leading-[21px]">
                  On-Time Delivery
                </p>
              </div>
              <div className="box-border caret-transparent">
                <div className="text-black text-3xl font-medium box-border caret-transparent leading-[45px] mb-2">
                  25+
                </div>
                <p className="text-sm box-border caret-transparent leading-[21px]">
                  Years Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black box-border caret-transparent py-10 md:py-[60px]">
        <div className="box-border caret-transparent max-w-full w-full mx-auto px-5 md:max-w-[1336px]">
          <div className="box-border caret-transparent text-center max-w-3xl mx-auto">
            <h3 className="text-white text-xl font-medium box-border caret-transparent leading-[30px] mb-5 md:text-2xl md:leading-[36px]">
              Let's Discuss Your Project
            </h3>
            <p className="text-neutral-400 box-border caret-transparent mb-8">
              Contact us today to learn how our services can help bring your construction vision to life.
            </p>
            <a
              href="/contact"
              className="text-white text-sm items-center box-border caret-transparent gap-x-2.5 inline-flex justify-center leading-[16.8px] border px-[22px] py-3 border-solid border-white hover:bg-white hover:text-black transition-colors"
            >
              <div className="box-border caret-transparent">Get Started</div>
              <img
                src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c559d1989cb82e96c949e_15fec19f4179bbda8c7cdc30da4795c2_button-arrow.svg"
                alt="Arrow"
                className="box-border caret-transparent max-w-full"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
