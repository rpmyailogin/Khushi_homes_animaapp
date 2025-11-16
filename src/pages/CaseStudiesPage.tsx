import { SectionHeader } from "@/components/SectionHeader";

export const CaseStudiesPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Downtown Tech Hub Transformation",
      client: "TechCorp Solutions",
      location: "San Francisco, CA",
      category: "Commercial",
      challenge: "Converting a historic warehouse into a modern tech office while preserving architectural heritage",
      solution: "Integrated smart building systems with heritage conservation, creating 85,000 sq ft of premium office space",
      results: ["30% energy efficiency improvement", "LEED Platinum certification", "Completed 2 weeks ahead of schedule", "15% under budget"],
      image: "https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg?auto=compress&cs=tinysrgb&w=800",
      timeline: "18 months",
      budget: "$42M"
    },
    {
      id: 2,
      title: "Sustainable Residential Community",
      client: "GreenLiving Developers",
      location: "Portland, OR",
      category: "Residential",
      challenge: "Building an eco-friendly residential complex with net-zero energy consumption on a tight urban site",
      solution: "Implemented solar arrays, geothermal heating, rainwater harvesting, and advanced insulation systems",
      results: ["100% renewable energy powered", "40% water usage reduction", "Award-winning sustainable design", "Zero waste to landfill during construction"],
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      timeline: "22 months",
      budget: "$38M"
    },
    {
      id: 3,
      title: "Metro Transit Hub Modernization",
      client: "City Transportation Authority",
      location: "Chicago, IL",
      category: "Infrastructure",
      challenge: "Upgrading aging metro station infrastructure while maintaining 24/7 operations and passenger service",
      solution: "Phased construction approach with night work schedules, modular components, and temporary facilities",
      results: ["Zero service interruptions", "50% increase in passenger capacity", "Enhanced accessibility features", "Integrated multi-modal transport connections"],
      image: "https://images.pexels.com/photos/290275/pexels-photo-290275.jpeg?auto=compress&cs=tinysrgb&w=800",
      timeline: "36 months",
      budget: "$125M"
    },
    {
      id: 4,
      title: "Medical Research Facility Excellence",
      client: "University Medical Center",
      location: "Boston, MA",
      category: "Healthcare",
      challenge: "Creating state-of-the-art research labs with specialized biosafety requirements and advanced HVAC systems",
      solution: "Designed and built BSL-3 certified laboratories with redundant mechanical systems and contamination controls",
      results: ["BSL-3 certification achieved", "99.99% uptime for critical systems", "Flexible lab spaces for future adaptation", "Accelerated research capabilities"],
      image: "https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=800",
      timeline: "28 months",
      budget: "$67M"
    }
  ];

  return (
    <div className="box-border caret-transparent">
      <section className="bg-gray-100 box-border caret-transparent py-10 md:py-20">
        <div className="box-border caret-transparent max-w-full w-full mx-auto px-5 md:max-w-[1336px]">
          <SectionHeader subtitle="Success Stories" title="Case Studies" />
          <p className="box-border caret-transparent max-w-3xl mb-10">
            Explore in-depth analyses of our most challenging and rewarding projects. See how we turn complex construction challenges into successful outcomes.
          </p>
        </div>
      </section>

      <section className="box-border caret-transparent py-10 md:py-[60px]">
        <div className="box-border caret-transparent max-w-full w-full mx-auto px-5 md:max-w-[1336px]">
          <div className="box-border caret-transparent flex flex-col gap-y-[60px]">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className={`box-border caret-transparent flex flex-col gap-y-[30px] border border-solid border-black/10 p-5 md:p-[40px] hover:shadow-[rgba(0,0,0,0.06)_0px_30px_60px_0px] transition-shadow ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="box-border caret-transparent flex-1">
                  <div className="bg-gray-100 box-border caret-transparent overflow-hidden h-full">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="box-border caret-transparent inline-block max-h-[400px] max-w-full min-h-[300px] object-cover w-full md:min-h-[400px] hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="box-border caret-transparent flex-1 flex flex-col gap-y-5">
                  <div className="box-border caret-transparent">
                    <div className="text-sm bg-gray-100 box-border caret-transparent leading-[14px] px-2.5 py-[5px] inline-block mb-4">
                      {study.category}
                    </div>
                    <h3 className="text-black text-xl font-medium box-border caret-transparent leading-[30px] mb-2 md:text-2xl md:leading-[36px]">
                      {study.title}
                    </h3>
                    <div className="text-sm box-border caret-transparent leading-[21px] mb-4">
                      Client: {study.client} | Location: {study.location}
                    </div>
                  </div>

                  <div className="box-border caret-transparent">
                    <h4 className="text-base font-medium box-border caret-transparent leading-6 mb-2">
                      The Challenge
                    </h4>
                    <p className="text-sm box-border caret-transparent leading-[21px]">
                      {study.challenge}
                    </p>
                  </div>

                  <div className="box-border caret-transparent">
                    <h4 className="text-base font-medium box-border caret-transparent leading-6 mb-2">
                      Our Solution
                    </h4>
                    <p className="text-sm box-border caret-transparent leading-[21px]">
                      {study.solution}
                    </p>
                  </div>

                  <div className="box-border caret-transparent">
                    <h4 className="text-base font-medium box-border caret-transparent leading-6 mb-3">
                      Key Results
                    </h4>
                    <ul className="box-border caret-transparent flex flex-col gap-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="text-sm box-border caret-transparent leading-[21px] flex items-start gap-x-2">
                          <div className="bg-black/10 box-border caret-transparent max-h-1.5 max-w-1.5 min-h-1.5 min-w-1.5 mt-1.5"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="box-border caret-transparent flex gap-x-8 pt-5 border-t border-solid border-black/10">
                    <div className="box-border caret-transparent">
                      <div className="text-xs box-border caret-transparent leading-[18px] mb-1 uppercase">
                        Timeline
                      </div>
                      <div className="text-base font-medium box-border caret-transparent leading-6">
                        {study.timeline}
                      </div>
                    </div>
                    <div className="box-border caret-transparent">
                      <div className="text-xs box-border caret-transparent leading-[18px] mb-1 uppercase">
                        Budget
                      </div>
                      <div className="text-base font-medium box-border caret-transparent leading-6">
                        {study.budget}
                      </div>
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
              Your Project Could Be Our Next Success Story
            </h3>
            <p className="text-neutral-400 box-border caret-transparent mb-8">
              Let's collaborate to turn your construction challenges into achievements that exceed expectations.
            </p>
            <a
              href="/contact"
              className="text-white text-sm items-center box-border caret-transparent gap-x-2.5 inline-flex justify-center leading-[16.8px] border px-[22px] py-3 border-solid border-white hover:bg-white hover:text-black transition-colors"
            >
              <div className="box-border caret-transparent">Start Your Project</div>
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
