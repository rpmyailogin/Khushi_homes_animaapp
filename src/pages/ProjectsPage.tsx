import { SectionHeader } from "@/components/SectionHeader";

export const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Modern Family Home - Melbourne",
      category: "New Build",
      location: "Melbourne, VIC",
      value: "$850,000",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "A stunning four-bedroom family home on a sloped block, featuring open-plan living, sustainable materials, and energy-efficient systems.",
      year: "2024",
      duration: "8 months"
    },
    {
      id: 2,
      title: "Heritage Home Renovation - Sydney",
      category: "Renovation",
      location: "Sydney, NSW",
      value: "$620,000",
      image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Complete interior transformation of a 1920s terrace home, preserving heritage features while integrating modern living spaces.",
      year: "2024",
      duration: "10 months"
    },
    {
      id: 3,
      title: "Coastal Rebuild - Gold Coast",
      category: "Rebuild",
      location: "Gold Coast, QLD",
      value: "$1.2M",
      image: "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Complete rebuild with elevated foundation, impact-resistant materials, and stunning indoor-outdoor flow maximizing beachfront location.",
      year: "2023",
      duration: "12 months"
    },
    {
      id: 4,
      title: "Contemporary Townhouse - Brisbane",
      category: "New Build",
      location: "Brisbane, QLD",
      value: "$680,000",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Sleek three-bedroom townhouse with modern finishes, private courtyard, and designer kitchen perfect for urban living.",
      year: "2024",
      duration: "7 months"
    },
    {
      id: 5,
      title: "Hamptons Style Estate - Perth",
      category: "New Build",
      location: "Perth, WA",
      value: "$1.5M",
      image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Luxurious five-bedroom Hamptons-inspired home featuring high ceilings, premium finishes, and resort-style outdoor entertaining area.",
      year: "2023",
      duration: "14 months"
    },
    {
      id: 6,
      title: "Mountain Retreat - Adelaide Hills",
      category: "New Build",
      location: "Adelaide, SA",
      value: "$920,000",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Architectural masterpiece nestled in the hills, featuring floor-to-ceiling windows, natural materials, and breathtaking valley views.",
      year: "2024",
      duration: "11 months"
    }
  ];

  return (
    <div className="box-border caret-transparent">
      <section className="bg-gray-100 box-border caret-transparent py-10 md:py-20">
        <div className="box-border caret-transparent max-w-full w-full mx-auto px-5 md:max-w-[1336px]">
          <SectionHeader subtitle="Portfolio" title="Our Projects" />
          <p className="box-border caret-transparent max-w-3xl mb-10">
            Explore our portfolio of beautifully crafted homes across Australia. From custom new builds to complete renovations, each project showcases our commitment to quality craftsmanship and modern design.
          </p>
        </div>
      </section>

      <section className="box-border caret-transparent py-10 md:py-[60px]">
        <div className="box-border caret-transparent max-w-full w-full mx-auto px-5 md:max-w-[1336px]">
          <div className="box-border caret-transparent grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-10 md:grid-cols-[1fr_1fr] md:gap-x-[30px] md:gap-y-[60px]">
            {projects.map((project) => (
              <div key={project.id} className="box-border caret-transparent flex flex-col border border-solid border-black/10 hover:shadow-[rgba(0,0,0,0.06)_0px_30px_60px_0px] transition-shadow" style={{ backgroundColor: '#e6feff' }}>
                <div className="box-border caret-transparent overflow-hidden" style={{ backgroundColor: '#e6feff' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="box-border caret-transparent inline-block max-h-[300px] max-w-full min-h-[300px] object-cover w-full hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="box-border caret-transparent p-5 md:p-[30px] flex flex-col gap-y-4" style={{ backgroundColor: '#e6feff' }}>
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
              Let's discuss how we can bring your dream home to life with our expertise and commitment to excellence.
            </p>
            <a
              href="/"
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
