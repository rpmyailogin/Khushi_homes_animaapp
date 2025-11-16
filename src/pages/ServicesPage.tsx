import { SectionHeader } from "@/components/SectionHeader";

export const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: "New Home Construction",
      icon: "https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/679dba1be9049fbc8805b173_ic-structural.svg",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Transform your vision into reality with custom-designed homes built to Australian standards. Our experienced team manages every phase from initial design consultation through to final handover, ensuring your new home reflects your lifestyle and exceeds expectations.",
      features: ["Custom Design Consultation", "Australian Standards Compliance", "Full Project Management", "Quality Craftsmanship"]
    },
    {
      id: 2,
      title: "Home Rebuilds & Renovations",
      icon: "https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/679dba41441cc64868b978bd_ic-foundation.svg",
      image: "https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Breathe new life into your existing property with comprehensive rebuild services. Whether you're expanding your space, modernizing outdated features, or completely reimagining your home's layout, we deliver seamless renovations that enhance both function and value.",
      features: ["Complete Rebuilds", "Kitchen & Bathroom Renovations", "Extensions & Additions", "Heritage Restoration"]
    },
    {
      id: 3,
      title: "Interior Design & Styling",
      icon: "https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/679db879eb37a230407186f4_ic-commercial.svg",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Create beautiful, functional living spaces with our expert interior design services. From selecting premium finishes and fixtures to optimizing room layouts, our design team ensures every detail aligns with your aesthetic preferences and practical needs.",
      features: ["Space Planning", "Material Selection", "Color Consultation", "Custom Joinery Design"]
    },
    {
      id: 4,
      title: "Project Management & Consultation",
      icon: "https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/679dba1be9049fbc8805b173_ic-structural.svg",
      image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Navigate your construction journey with confidence through our comprehensive project management services. We coordinate all trades, handle permits and compliance, maintain transparent communication, and deliver projects on time and within budget.",
      features: ["Trade Coordination", "Permit Management", "Budget Control", "Timeline Management"]
    }
  ];

  return (
    <div className="box-border caret-transparent">
      <section className="bg-gray-100 box-border caret-transparent py-10 md:py-20">
        <div className="box-border caret-transparent max-w-full w-full mx-auto px-5 md:max-w-[1336px]">
          <SectionHeader subtitle="What We Do" title="Our Services" />
          <p className="box-border caret-transparent max-w-3xl mb-10">
            Comprehensive construction services tailored to your needs. From concept to completion, we deliver excellence at every stage of your home building or renovation project.
          </p>
        </div>
      </section>

      <section className="box-border caret-transparent py-10 md:py-[60px]">
        <div className="box-border caret-transparent max-w-full w-full mx-auto px-5 md:max-w-[1336px]">
          <div className="box-border caret-transparent grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-10 md:grid-cols-[1fr_1fr] md:gap-x-[30px] md:gap-y-[60px]">
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
              Why Choose Khushi Homes?
            </h3>
            <p className="box-border caret-transparent mb-8">
              With comprehensive experience in home construction and renovation, our team brings technical expertise and creative solutions to every project across Australia.
            </p>
            <div className="box-border caret-transparent grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-5 md:grid-cols-[1fr_1fr_1fr] md:gap-x-10">
              <div className="box-border caret-transparent">
                <div className="text-black text-3xl font-medium box-border caret-transparent leading-[45px] mb-2">
                  250+
                </div>
                <p className="text-sm box-border caret-transparent leading-[21px]">
                  Homes Completed
                </p>
              </div>
              <div className="box-border caret-transparent">
                <div className="text-black text-3xl font-medium box-border caret-transparent leading-[45px] mb-2">
                  98%
                </div>
                <p className="text-sm box-border caret-transparent leading-[21px]">
                  Client Satisfaction
                </p>
              </div>
              <div className="box-border caret-transparent">
                <div className="text-black text-3xl font-medium box-border caret-transparent leading-[45px] mb-2">
                  15+
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
              Contact us today to learn how our services can help bring your dream home to life.
            </p>
            <a
              href="/"
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
