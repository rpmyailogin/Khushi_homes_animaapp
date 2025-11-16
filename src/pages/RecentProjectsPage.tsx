import { SectionHeader } from "@/components/SectionHeader";

export const RecentProjectsPage = () => {
  const recentProjects = [
    {
      id: 1,
      title: "Skyline Business Center Phase 2",
      status: "In Progress",
      completion: 75,
      location: "Dallas, TX",
      category: "Commercial",
      startDate: "Jan 2024",
      expectedCompletion: "Jun 2025",
      image: "https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Expansion of the premier business complex with additional 120,000 sq ft of Class A office space.",
      highlights: ["Smart building integration", "LEED Gold target", "Rooftop amenity deck"]
    },
    {
      id: 2,
      title: "Harbor View Luxury Residences",
      status: "Recently Completed",
      completion: 100,
      location: "Miami, FL",
      category: "Residential",
      startDate: "Mar 2023",
      expectedCompletion: "Dec 2024",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Ultra-luxury waterfront condominiums featuring 180 units with panoramic ocean views.",
      highlights: ["Private marina access", "Concierge services", "Resort-style amenities"]
    },
    {
      id: 3,
      title: "Innovation District Tech Campus",
      status: "In Progress",
      completion: 60,
      location: "Austin, TX",
      category: "Commercial",
      startDate: "Aug 2023",
      expectedCompletion: "Oct 2025",
      image: "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Mixed-use technology campus with collaborative workspaces, restaurants, and retail.",
      highlights: ["5G infrastructure ready", "Electric vehicle charging", "Bike-friendly design"]
    },
    {
      id: 4,
      title: "Central Station Modernization",
      status: "In Progress",
      completion: 45,
      location: "Philadelphia, PA",
      category: "Infrastructure",
      startDate: "May 2024",
      expectedCompletion: "Dec 2026",
      image: "https://images.pexels.com/photos/290275/pexels-photo-290275.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Comprehensive upgrade of historic transit hub serving 50,000 daily passengers.",
      highlights: ["ADA compliant access", "Digital wayfinding", "Retail concourse renovation"]
    },
    {
      id: 5,
      title: "Wellness Medical Center",
      status: "Recently Completed",
      completion: 100,
      location: "Denver, CO",
      category: "Healthcare",
      startDate: "Jan 2023",
      expectedCompletion: "Nov 2024",
      image: "https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Integrated healthcare facility with outpatient services, diagnostic center, and wellness programs.",
      highlights: ["Healing garden spaces", "Advanced medical technology", "Patient-centered design"]
    },
    {
      id: 6,
      title: "Riverside Park Pedestrian Bridge",
      status: "In Progress",
      completion: 85,
      location: "Portland, OR",
      category: "Infrastructure",
      startDate: "Feb 2024",
      expectedCompletion: "Apr 2025",
      image: "https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Iconic cable-stayed bridge connecting downtown to riverfront park and trail system.",
      highlights: ["Architectural landmark", "Sustainable materials", "LED lighting features"]
    }
  ];

  return (
    <div className="box-border caret-transparent">
      <section className="bg-gray-100 box-border caret-transparent py-10 md:py-20">
        <div className="box-border caret-transparent max-w-full w-full mx-auto px-5 md:max-w-[1336px]">
          <SectionHeader subtitle="Currently Active" title="Recent Projects" />
          <p className="box-border caret-transparent max-w-3xl mb-10">
            Follow our latest construction projects from groundbreaking to completion. See real-time progress on our current developments and recently finished work.
          </p>
        </div>
      </section>

      <section className="box-border caret-transparent py-10 md:py-[60px]">
        <div className="box-border caret-transparent max-w-full w-full mx-auto px-5 md:max-w-[1336px]">
          <div className="box-border caret-transparent grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-10 md:grid-cols-[1fr_1fr] md:gap-x-[30px] md:gap-y-[60px]">
            {recentProjects.map((project) => (
              <div
                key={project.id}
                className="box-border caret-transparent flex flex-col border border-solid border-black/10 hover:shadow-[rgba(0,0,0,0.06)_0px_30px_60px_0px] transition-shadow"
              >
                <div className="relative bg-gray-100 box-border caret-transparent overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="box-border caret-transparent inline-block max-h-[280px] max-w-full min-h-[280px] object-cover w-full hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute top-5 right-5 text-xs font-medium box-border caret-transparent leading-[18px] px-3 py-1.5 ${
                    project.status === 'In Progress'
                      ? 'bg-black text-white'
                      : 'bg-white text-black border border-solid border-black/10'
                  }`}>
                    {project.status}
                  </div>
                </div>
                <div className="box-border caret-transparent p-5 md:p-[30px] flex flex-col gap-y-4">
                  <div className="box-border caret-transparent flex items-center gap-x-3">
                    <div className="text-sm bg-gray-100 box-border caret-transparent leading-[14px] px-2.5 py-[5px]">
                      {project.category}
                    </div>
                    <div className="text-sm box-border caret-transparent leading-[21px]">
                      {project.location}
                    </div>
                  </div>
                  <h3 className="text-black text-xl font-medium box-border caret-transparent leading-[30px]">
                    {project.title}
                  </h3>
                  <p className="text-sm box-border caret-transparent leading-[21px]">
                    {project.description}
                  </p>

                  <div className="box-border caret-transparent">
                    <div className="box-border caret-transparent flex justify-between mb-2">
                      <span className="text-xs font-medium box-border caret-transparent leading-[18px]">
                        Progress
                      </span>
                      <span className="text-xs font-medium box-border caret-transparent leading-[18px]">
                        {project.completion}%
                      </span>
                    </div>
                    <div className="bg-gray-100 box-border caret-transparent h-2 w-full overflow-hidden">
                      <div
                        className="bg-black box-border caret-transparent h-full transition-all"
                        style={{ width: `${project.completion}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="box-border caret-transparent">
                    <h4 className="text-sm font-medium box-border caret-transparent leading-[21px] mb-2">
                      Key Highlights
                    </h4>
                    <ul className="box-border caret-transparent flex flex-col gap-y-1.5">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-xs box-border caret-transparent leading-[18px] flex items-center gap-x-2">
                          <div className="bg-black/10 box-border caret-transparent max-h-1.5 max-w-1.5 min-h-1.5 min-w-1.5"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="box-border caret-transparent flex justify-between pt-4 border-t border-solid border-black/10 mt-auto">
                    <div className="box-border caret-transparent">
                      <div className="text-xs box-border caret-transparent leading-[18px] mb-0.5">
                        Start Date
                      </div>
                      <div className="text-sm font-medium box-border caret-transparent leading-[21px]">
                        {project.startDate}
                      </div>
                    </div>
                    <div className="box-border caret-transparent text-right">
                      <div className="text-xs box-border caret-transparent leading-[18px] mb-0.5">
                        Completion
                      </div>
                      <div className="text-sm font-medium box-border caret-transparent leading-[21px]">
                        {project.expectedCompletion}
                      </div>
                    </div>
                  </div>
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
              Project Updates & Transparency
            </h3>
            <p className="box-border caret-transparent mb-8">
              We believe in keeping our clients informed every step of the way. Each project receives regular updates, progress reports, and transparent communication throughout the construction process.
            </p>
            <div className="box-border caret-transparent grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-5 md:grid-cols-[1fr_1fr_1fr] md:gap-x-10">
              <div className="box-border caret-transparent">
                <div className="text-black text-3xl font-medium box-border caret-transparent leading-[45px] mb-2">
                  12
                </div>
                <p className="text-sm box-border caret-transparent leading-[21px]">
                  Active Projects
                </p>
              </div>
              <div className="box-border caret-transparent">
                <div className="text-black text-3xl font-medium box-border caret-transparent leading-[45px] mb-2">
                  $450M+
                </div>
                <p className="text-sm box-border caret-transparent leading-[21px]">
                  Current Pipeline Value
                </p>
              </div>
              <div className="box-border caret-transparent">
                <div className="text-black text-3xl font-medium box-border caret-transparent leading-[45px] mb-2">
                  2,500+
                </div>
                <p className="text-sm box-border caret-transparent leading-[21px]">
                  Team Members Working
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
              Join Our Growing Portfolio
            </h3>
            <p className="text-neutral-400 box-border caret-transparent mb-8">
              Ready to add your project to our list of success stories? Let's discuss how we can bring your vision to reality.
            </p>
            <a
              href="/contact"
              className="text-white text-sm items-center box-border caret-transparent gap-x-2.5 inline-flex justify-center leading-[16.8px] border px-[22px] py-3 border-solid border-white hover:bg-white hover:text-black transition-colors"
            >
              <div className="box-border caret-transparent">Get in Touch</div>
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
