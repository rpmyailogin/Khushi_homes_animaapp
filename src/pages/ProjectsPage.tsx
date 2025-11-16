import { SectionHeader } from "@/components/SectionHeader";

export const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Downtown Corporate Tower",
      category: "Commercial",
      location: "New York, NY",
      value: "$45M",
      image: "https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "A 40-story state-of-the-art office building featuring sustainable design and modern amenities.",
      year: "2024",
      duration: "24 months"
    },
    {
      id: 2,
      title: "Riverside Residential Complex",
      category: "Residential",
      location: "Seattle, WA",
      value: "$32M",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Luxury apartment complex with 200 units, featuring panoramic water views and premium finishes.",
      year: "2023",
      duration: "18 months"
    },
    {
      id: 3,
      title: "Metro Infrastructure Project",
      category: "Infrastructure",
      location: "Boston, MA",
      value: "$120M",
      image: "https://images.pexels.com/photos/290275/pexels-photo-290275.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Comprehensive metro station renovation including accessibility upgrades and modern facilities.",
      year: "2024",
      duration: "36 months"
    },
    {
      id: 4,
      title: "Skyline Shopping Center",
      category: "Retail",
      location: "Los Angeles, CA",
      value: "$28M",
      image: "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Modern retail space spanning 150,000 sq ft with innovative architectural design.",
      year: "2023",
      duration: "16 months"
    },
    {
      id: 5,
      title: "University Science Building",
      category: "Education",
      location: "Austin, TX",
      value: "$52M",
      image: "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Advanced research facility with cutting-edge laboratories and collaborative learning spaces.",
      year: "2024",
      duration: "28 months"
    },
    {
      id: 6,
      title: "Greenfield Hospital Wing",
      category: "Healthcare",
      location: "Chicago, IL",
      value: "$68M",
      image: "https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "State-of-the-art medical facility expansion with advanced patient care technology.",
      year: "2023",
      duration: "30 months"
    }
  ];

  return (
    <div className="box-border caret-transparent">
      <section className="bg-gray-100 box-border caret-transparent py-10 md:py-20">
        <div className="box-border caret-transparent max-w-full w-full mx-auto px-5 md:max-w-[1336px]">
          <SectionHeader subtitle="Portfolio" title="Our Projects" />
          <p className="box-border caret-transparent max-w-3xl mb-10">
            Explore our diverse portfolio of completed projects spanning commercial, residential, infrastructure, and institutional developments. Each project showcases our commitment to quality, innovation, and client satisfaction.
          </p>
        </div>
      </section>

      <section className="box-border caret-transparent py-10 md:py-[60px]">
        <div className="box-border caret-transparent max-w-full w-full mx-auto px-5 md:max-w-[1336px]">
          <div className="box-border caret-transparent grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-10 md:grid-cols-[1fr_1fr] md:gap-x-[30px] md:gap-y-[60px]">
            {projects.map((project) => (
              <div key={project.id} className="box-border caret-transparent flex flex-col border border-solid border-black/10 hover:shadow-[rgba(0,0,0,0.06)_0px_30px_60px_0px] transition-shadow">
                <div className="bg-gray-100 box-border caret-transparent overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="box-border caret-transparent inline-block max-h-[300px] max-w-full min-h-[300px] object-cover w-full hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="box-border caret-transparent p-5 md:p-[30px] flex flex-col gap-y-4">
                  <div className="box-border caret-transparent flex items-center justify-between gap-x-3">
                    <div className="text-sm bg-gray-100 box-border caret-transparent leading-[14px] px-2.5 py-[5px]">
                      {project.category}
                    </div>
                    <div className="text-sm box-border caret-transparent leading-[21px]">
                      {project.year}
                    </div>
                  </div>
                  <h3 className="text-black text-xl font-medium box-border caret-transparent leading-[30px] md:text-2xl md:leading-[36px]">
                    {project.title}
                  </h3>
                  <p className="box-border caret-transparent">
                    {project.description}
                  </p>
                  <div className="box-border caret-transparent flex flex-col gap-y-2 pt-4 border-t border-solid border-black/10">
                    <div className="box-border caret-transparent flex justify-between">
                      <span className="text-sm box-border caret-transparent leading-[21px]">Location:</span>
                      <span className="text-sm font-medium box-border caret-transparent leading-[21px]">{project.location}</span>
                    </div>
                    <div className="box-border caret-transparent flex justify-between">
                      <span className="text-sm box-border caret-transparent leading-[21px]">Project Value:</span>
                      <span className="text-sm font-medium box-border caret-transparent leading-[21px]">{project.value}</span>
                    </div>
                    <div className="box-border caret-transparent flex justify-between">
                      <span className="text-sm box-border caret-transparent leading-[21px]">Duration:</span>
                      <span className="text-sm font-medium box-border caret-transparent leading-[21px]">{project.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black box-border caret-transparent py-10 md:py-[60px]">
        <div className="box-border caret-transparent max-w-full w-full mx-auto px-5 md:max-w-[1336px]">
          <div className="box-border caret-transparent text-center max-w-3xl mx-auto">
            <h3 className="text-white text-xl font-medium box-border caret-transparent leading-[30px] mb-5 md:text-2xl md:leading-[36px]">
              Ready to Start Your Project?
            </h3>
            <p className="text-neutral-400 box-border caret-transparent mb-8">
              Let's discuss how we can bring your vision to life with our expertise and commitment to excellence.
            </p>
            <a
              href="/contact"
              className="text-white text-sm items-center box-border caret-transparent gap-x-2.5 inline-flex justify-center leading-[16.8px] border px-[22px] py-3 border-solid border-white hover:bg-white hover:text-black transition-colors"
            >
              <div className="box-border caret-transparent">Contact Us</div>
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
