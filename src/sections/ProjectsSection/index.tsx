import { SectionHeader } from "@/components/SectionHeader";
import { ProjectGrid } from "@/sections/ProjectsSection/components/ProjectGrid";
import { ViewAllButton } from "@/components/ViewAllButton";

export const ProjectsSection = () => {
  return (
    <div className="box-border caret-transparent mb-[60px] md:mb-[150px]">
      <section className="box-border caret-transparent mb-[60px] md:mb-[150px]">
        <div className="box-border caret-transparent max-w-full w-full mx-auto px-5 md:max-w-[1336px] before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27.2px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-public_sans after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27.2px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-public_sans">
          <SectionHeader subtitle="Explore" title="Our Projects" />
          <div className="box-border caret-transparent">
            <ProjectGrid />
          </div>
          <ViewAllButton
            text="View All Projects"
            href="https://drill-template.webflow.io/projects"
          />
        </div>
      </section>
      <section className="bg-black box-border caret-transparent py-10 md:py-[60px]">
        <div className="box-border caret-transparent max-w-full w-full mx-auto px-5 md:max-w-[1336px] before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27.2px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-public_sans after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27.2px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-public_sans">
          <div className="items-start box-border caret-transparent gap-x-0 flex flex-col justify-between gap-y-5 md:gap-x-[140px] md:flex-row md:gap-y-0">
            <div className="text-white text-sm items-center box-border caret-transparent gap-x-2 flex justify-start leading-[16.8px] uppercase mb-[5px]">
              <div className="box-border caret-transparent gap-x-1 flex">
                <div className="bg-white/10 box-border caret-transparent max-h-1.5 max-w-1.5 min-h-1.5 min-w-1.5"></div>
                <div className="bg-white/10 box-border caret-transparent max-h-1.5 max-w-1.5 min-h-1.5 min-w-1.5"></div>
              </div>
              <div className="box-border caret-transparent">Explore</div>
            </div>
            <div className="box-border caret-transparent max-w-none w-full md:max-w-[80%]">
              <div className="box-border caret-transparent gap-x-3 flex mb-[25px] md:gap-x-5 md:mb-[30px]">
                <div className="relative bg-gray-100 box-border caret-transparent max-w-[250px] w-full overflow-hidden">
                  <img
                    src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/67a0915d116fb26586dc2f96_about-us-01.jpg"
                    alt="About Image"
                    className="box-border caret-transparent inline-block max-h-40 max-w-full min-h-40 object-cover w-full md:max-h-[250px] md:min-h-[250px]"
                  />
                  <div className="absolute bg-neutral-900 bottom-[-1%] box-border caret-transparent left-[-1%] right-[-1%] top-[-1%] translate-y-[-100.0%]"></div>
                </div>
                <div className="relative bg-gray-100 box-border caret-transparent max-w-[250px] w-full overflow-hidden">
                  <img
                    src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/67a0915d484acc07916249a8_about-us-02.jpg"
                    alt="About Image"
                    className="box-border caret-transparent inline-block max-h-40 max-w-full min-h-40 object-cover w-full md:max-h-[250px] md:min-h-[250px]"
                  />
                  <div className="absolute bg-neutral-900 bottom-[-1%] box-border caret-transparent left-[-1%] right-[-1%] top-[-1%] translate-y-[100.0%]"></div>
                </div>
              </div>
              <div className="items-start box-border caret-transparent flex flex-col justify-start">
                <p className="text-white text-lg box-border caret-transparent leading-[27px] mb-[30px] md:text-[28px] md:leading-[42px] md:mb-10">
                  Drill is not just a construction company we are builders of
                  dreams. With over 25 years of expertise, we’ve become leaders
                  in delivering high-quality, sustainable construction solutions
                  that push the boundaries of modern architecture.
                </p>
                <a
                  href="https://drill-template.webflow.io/about-us"
                  className="text-white text-sm items-center box-border caret-transparent gap-x-2.5 flex justify-center leading-[16.8px] max-w-full border px-[22px] py-3 border-solid border-white"
                >
                  <div className="relative box-border caret-transparent overflow-hidden">
                    <div className="box-border caret-transparent gap-x-1 flex">
                      About us
                    </div>
                    <div className="absolute box-border caret-transparent gap-x-1 flex">
                      About us
                    </div>
                  </div>
                  <img
                    src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c559d1989cb82e96c949e_15fec19f4179bbda8c7cdc30da4795c2_button-arrow.svg"
                    alt="Arrow"
                    className="box-border caret-transparent max-w-full"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 box-border caret-transparent mb-[60px] py-10 md:mb-[150px] md:py-[60px]">
        <div className="box-border caret-transparent max-w-full w-full mx-auto px-5 md:max-w-[1336px] before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27.2px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-public_sans after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27.2px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-public_sans">
          <SectionHeader subtitle="What We Do" title="Our Services" />
          <div className="box-border caret-transparent">
            <div
              role="list"
              className="box-border caret-transparent grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-10 md:grid-cols-[1fr_1fr_1fr]"
            >
              <div
                role="listitem"
                className="box-border caret-transparent flex"
              >
                <a
                  href="https://drill-template.webflow.io/services/structural-engineering"
                  className="relative box-border caret-transparent flex flex-col max-w-full gap-y-[30px] w-full border p-5 border-solid border-black/10 md:block md:flex-row md:gap-y-[normal] md:p-[34px] hover:bg-gray-100 hover:shadow-[rgba(0,0,0,0.06)_0px_30px_60px_0px]"
                >
                  <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] gap-y-60 md:min-h-0 md:min-w-0">
                    <div className="items-center box-border caret-transparent gap-x-5 flex justify-between">
                      <h4 className="text-black text-lg box-border caret-transparent leading-[27px] md:text-[22px] md:leading-[33px]">
                        Structural Engineering
                      </h4>
                      <img
                        src="https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/679dba1be9049fbc8805b173_ic-structural.svg"
                        alt="Service Icon"
                        className="box-border caret-transparent max-h-10 max-w-10 min-h-10 min-w-10"
                      />
                    </div>
                    <p className="box-border caret-transparent hidden min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
                      We provide expert engineering services to ensure your
                      project’s integrity and safety, from the foundation to the
                      roof.
                    </p>
                  </div>
                  <div className="static bg-gray-100 box-border caret-transparent min-h-[auto] min-w-[auto] bottom-[34px] inset-x-[34px] md:absolute md:min-h-0 md:min-w-0">
                    <img
                      src="https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/679dba1d3d27868b02647dfb_services-thumb-05.jpg"
                      alt="Service Image"
                      className="aspect-[auto_362_/_264] box-border caret-transparent inline-block h-[264px] max-h-[210px] max-w-full min-h-[210px] object-cover w-full md:max-h-[264px] md:min-h-[264px]"
                    />
                  </div>
                </a>
              </div>
              <div
                role="listitem"
                className="box-border caret-transparent flex"
              >
                <a
                  href="https://drill-template.webflow.io/services/general-contracting"
                  className="relative box-border caret-transparent flex flex-col max-w-full gap-y-[30px] w-full border p-5 border-solid border-black/10 md:block md:flex-row md:gap-y-[normal] md:p-[34px] hover:bg-gray-100 hover:shadow-[rgba(0,0,0,0.06)_0px_30px_60px_0px]"
                >
                  <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] gap-y-60 md:min-h-0 md:min-w-0">
                    <div className="items-center box-border caret-transparent gap-x-5 flex justify-between">
                      <h4 className="text-black text-lg box-border caret-transparent leading-[27px] md:text-[22px] md:leading-[33px]">
                        General Contracting
                      </h4>
                      <img
                        src="https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/679dba41441cc64868b978bd_ic-foundation.svg"
                        alt="Service Icon"
                        className="box-border caret-transparent max-h-10 max-w-10 min-h-10 min-w-10"
                      />
                    </div>
                    <p className="box-border caret-transparent hidden min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
                      Drill provides seamless project management by overseeing
                      procurement, subcontractors, and site coordination.
                    </p>
                  </div>
                  <div className="static bg-gray-100 box-border caret-transparent min-h-[auto] min-w-[auto] bottom-[34px] inset-x-[34px] md:absolute md:min-h-0 md:min-w-0">
                    <img
                      src="https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/679dba46477f30fd79c4ca4a_services-thumb-06.jpg"
                      alt="Service Image"
                      className="aspect-[auto_362_/_264] box-border caret-transparent inline-block h-[264px] max-h-[210px] max-w-full min-h-[210px] object-cover w-full md:max-h-[264px] md:min-h-[264px]"
                    />
                  </div>
                </a>
              </div>
              <div
                role="listitem"
                className="box-border caret-transparent flex"
              >
                <a
                  href="https://drill-template.webflow.io/services/commercial-construction"
                  className="relative box-border caret-transparent flex flex-col max-w-full gap-y-[30px] w-full border p-5 border-solid border-black/10 md:block md:flex-row md:gap-y-[normal] md:p-[34px] hover:bg-gray-100 hover:shadow-[rgba(0,0,0,0.06)_0px_30px_60px_0px]"
                >
                  <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] gap-y-60 md:min-h-0 md:min-w-0">
                    <div className="items-center box-border caret-transparent gap-x-5 flex justify-between">
                      <h4 className="text-black text-lg box-border caret-transparent leading-[27px] md:text-[22px] md:leading-[33px]">
                        Commercial Construction
                      </h4>
                      <img
                        src="https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/679db879eb37a230407186f4_ic-commercial.svg"
                        alt="Service Icon"
                        className="box-border caret-transparent max-h-10 max-w-10 min-h-10 min-w-10"
                      />
                    </div>
                    <p className="box-border caret-transparent hidden min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
                      We specialize in building office spaces, retail shops, and
                      multi-use commercial properties that meet modern business
                      needs.
                    </p>
                  </div>
                  <div className="static bg-gray-100 box-border caret-transparent min-h-[auto] min-w-[auto] bottom-[34px] inset-x-[34px] md:absolute md:min-h-0 md:min-w-0">
                    <img
                      src="https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/679db87dce7fe13ceb2a6e80_services-thumb-04.jpg"
                      alt="Service Image"
                      className="aspect-[auto_362_/_264] box-border caret-transparent inline-block h-[264px] max-h-[210px] max-w-full min-h-[210px] object-cover w-full md:max-h-[264px] md:min-h-[264px]"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <ViewAllButton
            text="View All Services"
            href="https://drill-template.webflow.io/services"
          />
        </div>
      </section>
      <section className="box-border caret-transparent mb-[60px] md:mb-[150px]">
        <div className="box-border caret-transparent max-w-full w-full mx-auto px-5 md:max-w-[1336px] before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27.2px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-public_sans after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27.2px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-public_sans">
          <div className="items-stretch box-border caret-transparent gap-x-0 flex flex-col justify-start gap-y-[25px] md:items-end md:gap-x-[60px] md:flex-row md:justify-between md:gap-y-[normal]">
            <div className="relative bg-gray-100 box-border caret-transparent max-w-none w-full overflow-hidden md:max-w-[40%]">
              <img
                src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/67a093f8484acc0791654dbc_why-choose-01.jpg"
                alt="Why Choose Image"
                className="aspect-[auto_518_/_557] box-border caret-transparent inline-block h-full max-w-full w-full"
              />
              <div className="absolute bg-gray-100 bottom-[-1%] box-border caret-transparent left-[-1%] right-[-1%] top-[-1%] translate-y-[-100.0%]"></div>
            </div>
            <div className="box-border caret-transparent flex flex-col max-w-none gap-y-[15px] w-full md:max-w-[60%] md:gap-y-[60px]">
              <div className="box-border caret-transparent">
                <h2 className="text-black text-xl font-medium box-border caret-transparent leading-[30px] mb-2.5 md:text-4xl md:leading-[54px]">
                  Expert Craftsmanship for Unmatched Construction Projects
                </h2>
                <p className="box-border caret-transparent">
                  Choosing Drill means working with a team that values quality,
                  efficiency, &amp; client satisfaction. From residential to
                  commercial projects, we deliver results that last, on time
                  &amp; within budget.
                </p>
              </div>
              <div className="box-border caret-transparent">
                <div className="items-start box-border caret-transparent gap-x-0 flex flex-col justify-start gap-y-2.5 mb-[15px] md:items-center md:gap-x-[30px] md:flex-row md:gap-y-[normal] md:mb-9">
                  <div className="text-black text-sm font-medium items-center box-border caret-transparent gap-x-2.5 flex justify-start leading-[21px] md:text-base md:leading-6">
                    <div className="text-sm bg-black/10 box-border caret-transparent leading-[21px] max-h-1.5 max-w-1.5 min-h-1.5 min-w-1.5 md:text-base md:leading-6"></div>
                    <div className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-6">
                      Comprehensive Services
                    </div>
                  </div>
                  <div className="text-black text-sm font-medium items-center box-border caret-transparent gap-x-2.5 flex justify-start leading-[21px] md:text-base md:leading-6">
                    <div className="text-sm bg-black/10 box-border caret-transparent leading-[21px] max-h-1.5 max-w-1.5 min-h-1.5 min-w-1.5 md:text-base md:leading-6"></div>
                    <div className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-6">
                      Transparent Processes
                    </div>
                  </div>
                  <div className="text-black text-sm font-medium items-center box-border caret-transparent gap-x-2.5 flex justify-start leading-[21px] md:text-base md:leading-6">
                    <div className="text-sm bg-black/10 box-border caret-transparent leading-[21px] max-h-1.5 max-w-1.5 min-h-1.5 min-w-1.5 md:text-base md:leading-6"></div>
                    <div className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-6">
                      Innovative Techniques
                    </div>
                  </div>
                </div>
                <div className="items-start box-border caret-transparent gap-x-[30px] flex flex-col justify-start md:items-stretch md:flex-row">
                  <div className="relative bg-gray-100 box-border caret-transparent hidden max-w-[35%] min-h-0 min-w-0 w-full overflow-hidden md:block md:min-h-[auto] md:min-w-[auto]">
                    <img
                      src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/67a095057fd16e142ced37ea_why-choose-02.jpg"
                      alt="WHy Choose Image"
                      className="aspect-[auto_251_/_256] box-border caret-transparent inline-block h-64 max-h-64 max-w-full min-h-64 object-cover w-full"
                    />
                    <div className="absolute bg-gray-100 bottom-[-1%] box-border caret-transparent left-[-1%] right-[-1%] top-[-1%] transform-none md:translate-y-[100.0%]"></div>
                  </div>
                  <div className="items-start box-border caret-transparent flex flex-col justify-start max-w-none gap-y-[30px] w-full md:max-w-[65%] md:gap-y-[60px]">
                    <p className="box-border caret-transparent">
                      Your vision is our priority. At Drill, we deliver tailored
                      solutions that align with your unique goals &amp; exceed
                      expectations.
                    </p>
                    <a
                      href="https://drill-template.webflow.io/contact-us"
                      className="text-black text-sm items-center box-border caret-transparent gap-x-2.5 flex justify-center leading-[16.8px] max-w-full border px-[22px] py-3 border-solid"
                    >
                      <div className="relative box-border caret-transparent overflow-hidden">
                        <div className="box-border caret-transparent gap-x-1 flex">
                          Contact us
                        </div>
                        <div className="absolute box-border caret-transparent gap-x-1 flex">
                          Contact us
                        </div>
                      </div>
                      <img
                        src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c726c1827c33928d75854_ic-black-arrow.svg"
                        alt="Arrow"
                        className="box-border caret-transparent max-w-full"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 box-border caret-transparent mb-[60px] py-[60px] md:mb-[150px]">
        <div className="box-border caret-transparent max-w-full w-full mx-auto px-5 md:max-w-[1336px] before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27.2px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-public_sans after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27.2px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-public_sans">
          <div className="border-b-zinc-800 border-l-zinc-800 border-r-zinc-800 box-border caret-transparent grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] border-t-black/10 border-t md:grid-cols-[1fr_1fr]">
            <div className="text-sm items-start border-l-zinc-800 border-t-zinc-800 box-border caret-transparent flex flex-col justify-between leading-[21px] gap-y-[30px] p-[25px] border-r-black/10 border-b-black/10 border-b border-r md:text-base md:leading-[27.2px] md:gap-y-10 md:p-[34px]">
              <div className="text-sm items-center box-border caret-transparent gap-x-2 flex justify-start leading-[16.8px] uppercase mb-[5px]">
                <div className="box-border caret-transparent gap-x-1 flex">
                  <div className="bg-black/10 box-border caret-transparent max-h-1.5 max-w-1.5 min-h-1.5 min-w-1.5"></div>
                  <div className="bg-black/10 box-border caret-transparent max-h-1.5 max-w-1.5 min-h-1.5 min-w-1.5"></div>
                </div>
                <div className="box-border caret-transparent">
                  By The Numbers
                </div>
              </div>
              <div className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-[27.2px]">
                <h3 className="text-black text-xl box-border caret-transparent leading-[30px] uppercase mb-1.5 md:text-[28px] md:leading-[42px]">
                  Facts &amp; Figures
                </h3>
                <p className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-[27.2px]">
                  Explore the figures that demonstrate our excellence in the
                  construction industry.
                </p>
              </div>
            </div>
            <div className="items-start bg-white border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 box-border caret-transparent flex flex-col justify-center px-[25px] py-[30px] border-b-black/10 border-b md:px-[34px] md:py-[60px]">
              <div className="text-black text-3xl font-medium box-border caret-transparent leading-[45px] mb-1 md:text-[58px] md:leading-[87px] md:mb-1.5">
                95%
              </div>
              <p className="text-sm box-border caret-transparent leading-[21px] max-w-none w-full md:text-base md:leading-[27.2px] md:max-w-[70%]">
                Proudly achieving 95% on-time project completion with excellent
                outcomes.
              </p>
            </div>
            <div className="items-start bg-white border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 box-border caret-transparent flex flex-col justify-center px-[25px] py-[30px] border-b-black/10 border-b md:px-[34px] md:py-[60px]">
              <div className="text-black text-3xl font-medium box-border caret-transparent leading-[45px] mb-1 md:text-[58px] md:leading-[87px] md:mb-1.5">
                350+
              </div>
              <p className="text-sm box-border caret-transparent leading-[21px] max-w-none w-full md:text-base md:leading-[27.2px] md:max-w-[70%]">
                Projects completed on time and within budget
              </p>
            </div>
            <div className="items-start bg-black border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 box-border caret-transparent flex flex-col justify-center px-[25px] py-[30px] border-b-black/10 border-b md:px-[34px] md:py-[60px]">
              <div className="text-white text-3xl font-medium box-border caret-transparent leading-[45px] mb-1 md:text-[58px] md:leading-[87px] md:mb-1.5">
                $200M+
              </div>
              <p className="text-neutral-400 text-sm box-border caret-transparent leading-[21px] max-w-none w-full md:text-base md:leading-[27.2px] md:max-w-[70%]">
                Successfully completed projects worth over $200M, covering
                residential, commercial, and infrastructure developments with
                top-notch quality.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="box-border caret-transparent mb-[60px] md:mb-[150px]">
        <div className="box-border caret-transparent max-w-full w-full mx-auto px-5 md:max-w-[1336px] before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27.2px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-public_sans after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27.2px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-public_sans">
          <SectionHeader subtitle="Our Blogs" title="Latest Articles" />
          <div className="box-border caret-transparent gap-x-0 flex flex-col gap-y-[30px] md:gap-x-[30px] md:flex-row md:gap-y-[normal]">
            <div className="box-border caret-transparent max-w-none w-full md:max-w-[50%]">
              <div className="box-border caret-transparent">
                <div role="list" className="box-border caret-transparent">
                  <div
                    role="listitem"
                    className="box-border caret-transparent flex"
                  >
                    <a
                      href="https://drill-template.webflow.io/blog-posts/building-smart-how-technology-is-transforming-construction"
                      className="box-border caret-transparent block max-w-full w-full"
                    >
                      <div className="bg-gray-100 box-border caret-transparent overflow-hidden">
                        <img
                          src="https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/679cb63a5742e9506defbe20_blog-main-01.jpg"
                          alt="Post Image"
                          className="aspect-[auto_633_/_492] box-border caret-transparent inline-block h-[492px] max-h-[220px] max-w-full min-h-[220px] object-cover w-full md:max-h-[492px] md:min-h-[492px]"
                        />
                      </div>
                      <div className="box-border caret-transparent border p-5 border-solid border-black/10 md:py-[30px]">
                        <div className="text-xs items-center box-border caret-transparent gap-x-3.5 flex justify-start leading-[18px] mb-[15px] md:text-sm md:leading-[21px]">
                          <div className="text-sm bg-gray-100 box-border caret-transparent leading-[14px] px-2.5 py-[5px]">
                            Technology
                          </div>
                          <div className="text-xs bg-black/10 box-border caret-transparent h-6 leading-[18px] w-px md:text-sm md:leading-[21px]"></div>
                          <div className="text-xs box-border caret-transparent leading-[18px] md:text-sm md:leading-[21px]">
                            Feb 11, 2025
                          </div>
                        </div>
                        <h4 className="text-black text-lg box-border caret-transparent leading-[27px] md:text-xl md:leading-[30px]">
                          Building smart how technology is transforming
                          construction
                        </h4>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border caret-transparent max-w-none w-full md:max-w-[50%]">
              <div className="box-border caret-transparent">
                <div
                  role="list"
                  className="box-border caret-transparent grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-[30px] md:gap-y-5"
                >
                  <div
                    role="listitem"
                    className="box-border caret-transparent flex"
                  >
                    <a
                      href="https://drill-template.webflow.io/blog-posts/eco-friendly-construction-materials-you-should-know-about"
                      className="box-border caret-transparent flex flex-col max-w-full w-full border border-solid border-black/10 md:flex-row hover:bg-gray-100"
                    >
                      <div className="bg-gray-100 box-border caret-transparent max-w-none w-full overflow-hidden md:max-w-[40%]">
                        <img
                          src="https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/679cb69863b614ca6c0adaf1_blog-thumb-07.jpg"
                          alt="Post Image"
                          className="box-border caret-transparent inline-block max-h-[250px] max-w-full min-h-[250px] object-cover w-full md:max-h-[300px] md:min-h-[300px]"
                        />
                      </div>
                      <div className="items-start box-border caret-transparent flex flex-col justify-between max-w-none gap-y-5 w-full p-[18px] md:max-w-[60%] md:p-[26px]">
                        <div className="box-border caret-transparent">
                          <div className="text-xs items-center box-border caret-transparent gap-x-3.5 flex justify-start leading-[18px] mb-[15px] md:text-sm md:leading-[21px]">
                            <div className="text-sm bg-gray-100 box-border caret-transparent leading-[14px] px-2.5 py-[5px]">
                              Materials
                            </div>
                            <div className="text-xs bg-black/10 box-border caret-transparent h-6 leading-[18px] w-px md:text-sm md:leading-[21px]"></div>
                            <div className="text-xs box-border caret-transparent leading-[18px] md:text-sm md:leading-[21px]">
                              Feb 11, 2025
                            </div>
                          </div>
                          <h5 className="text-black text-base font-medium box-border caret-transparent leading-6 md:text-lg md:font-normal md:leading-[27px]">
                            Eco-friendly construction materials you should know
                            about
                          </h5>
                        </div>
                        <div className="text-black text-sm items-center box-border caret-transparent gap-x-2.5 flex justify-start leading-[16.8px]">
                          <div className="box-border caret-transparent">
                            Read Articles
                          </div>
                          <img
                            src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c726c1827c33928d75854_ic-black-arrow.svg"
                            alt="Arrow"
                            className="box-border caret-transparent max-w-full"
                          />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    role="listitem"
                    className="box-border caret-transparent flex"
                  >
                    <a
                      href="https://drill-template.webflow.io/blog-posts/adopting-lean-construction-practices-for-maximum-efficiency"
                      className="box-border caret-transparent flex flex-col max-w-full w-full border border-solid border-black/10 md:flex-row hover:bg-gray-100"
                    >
                      <div className="bg-gray-100 box-border caret-transparent max-w-none w-full overflow-hidden md:max-w-[40%]">
                        <img
                          src="https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/679cb6893d98ac6330958f1c_blog-thumb-06.jpg"
                          alt="Post Image"
                          className="box-border caret-transparent inline-block max-h-[250px] max-w-full min-h-[250px] object-cover w-full md:max-h-[300px] md:min-h-[300px]"
                        />
                      </div>
                      <div className="items-start box-border caret-transparent flex flex-col justify-between max-w-none gap-y-5 w-full p-[18px] md:max-w-[60%] md:p-[26px]">
                        <div className="box-border caret-transparent">
                          <div className="text-xs items-center box-border caret-transparent gap-x-3.5 flex justify-start leading-[18px] mb-[15px] md:text-sm md:leading-[21px]">
                            <div className="text-sm bg-gray-100 box-border caret-transparent leading-[14px] px-2.5 py-[5px]">
                              Efficiency
                            </div>
                            <div className="text-xs bg-black/10 box-border caret-transparent h-6 leading-[18px] w-px md:text-sm md:leading-[21px]"></div>
                            <div className="text-xs box-border caret-transparent leading-[18px] md:text-sm md:leading-[21px]">
                              Feb 11, 2025
                            </div>
                          </div>
                          <h5 className="text-black text-base font-medium box-border caret-transparent leading-6 md:text-lg md:font-normal md:leading-[27px]">
                            Adopting lean construction practices for maximum
                            efficiency
                          </h5>
                        </div>
                        <div className="text-black text-sm items-center box-border caret-transparent gap-x-2.5 flex justify-start leading-[16.8px]">
                          <div className="box-border caret-transparent">
                            Read Articles
                          </div>
                          <img
                            src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c726c1827c33928d75854_ic-black-arrow.svg"
                            alt="Arrow"
                            className="box-border caret-transparent max-w-full"
                          />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ViewAllButton
            text="View All Blogs"
            href="https://drill-template.webflow.io/blogs"
          />
        </div>
      </section>
      <section className="bg-black box-border caret-transparent overflow-hidden mb-[60px] pt-10 pb-20 md:mb-[150px] md:pt-[60px] md:pb-[135px]">
        <div className="box-border caret-transparent max-w-full w-full mx-auto px-5 md:max-w-[1336px] before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27.2px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-public_sans after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27.2px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-public_sans">
          <SectionHeader
            subtitle="Testimonials"
            title="Clients Review"
            variant="white"
          />
          <div
            role="region"
            aria-label="carousel"
            className="relative box-border caret-transparent clear-both text-center"
          >
            <div className="relative box-border caret-transparent h-full text-nowrap w-auto z-[1] inset-x-0 md:w-[420px]">
              <div
                aria-label="1 of 6"
                role="group"
                className="relative box-border caret-transparent inline-block h-full max-w-none text-left align-top w-full mr-5 md:max-w-[420px] md:mr-[34px]"
              >
                <div className="border-b-zinc-800 border-l-zinc-800 border-t-zinc-800 box-border caret-transparent flex flex-col gap-y-5 pr-0 border-r-white/10 border-r-0 md:gap-y-[25px] md:pr-[34px] md:border-r">
                  <div className="text-neutral-400 items-center box-border caret-transparent gap-x-3 flex justify-start">
                    <div className="bg-gray-100 box-border caret-transparent max-h-[60px] max-w-[60px] min-h-[60px] min-w-[60px] overflow-hidden rounded-[50%] md:max-h-[65px] md:max-w-[65px] md:min-h-[65px] md:min-w-[65px]">
                      <img
                        src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679dc65105a4d2c8c9c5eda6_review-thumb-01.jpg"
                        alt="Review Image"
                        className="box-border caret-transparent inline-block max-h-[60px] max-w-full min-h-[60px] object-cover w-full md:max-h-[65px] md:min-h-[65px]"
                      />
                    </div>
                    <div className="box-border caret-transparent">
                      <div className="text-white box-border caret-transparent">
                        Darlene Robertson
                      </div>
                      <div className="text-sm box-border caret-transparent leading-[21px]">
                        New York,US
                      </div>
                    </div>
                  </div>
                  <p className="text-neutral-400 box-border caret-transparent">
                    Drill’s innovative approach and commitment to quality have
                    made them our go-to partner for all construction needs
                  </p>
                </div>
              </div>
              <div
                aria-label="2 of 6"
                role="group"
                className="relative box-border caret-transparent inline-block h-full max-w-none text-left align-top w-full mr-5 md:max-w-[420px] md:mr-[34px]"
              >
                <div className="border-b-zinc-800 border-l-zinc-800 border-t-zinc-800 box-border caret-transparent flex flex-col gap-y-5 pr-0 border-r-white/10 border-r-0 md:gap-y-[25px] md:pr-[34px] md:border-r">
                  <div className="text-neutral-400 items-center box-border caret-transparent gap-x-3 flex justify-start">
                    <div className="bg-gray-100 box-border caret-transparent max-h-[60px] max-w-[60px] min-h-[60px] min-w-[60px] overflow-hidden rounded-[50%] md:max-h-[65px] md:max-w-[65px] md:min-h-[65px] md:min-w-[65px]">
                      <img
                        src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679dc6510f65b043f431d66c_review-thumb-02.jpg"
                        alt="Review Image"
                        className="box-border caret-transparent inline-block max-h-[60px] max-w-full min-h-[60px] object-cover w-full md:max-h-[65px] md:min-h-[65px]"
                      />
                    </div>
                    <div className="box-border caret-transparent">
                      <div className="text-white box-border caret-transparent">
                        Savannah Nguyen
                      </div>
                      <div className="text-sm box-border caret-transparent leading-[21px]">
                        Toronto, US
                      </div>
                    </div>
                  </div>
                  <p className="text-neutral-400 box-border caret-transparent">
                    Working with Drill has been a delight. Their team’s
                    collaboration and expertise brought our designs to life
                    flawlessly.
                  </p>
                </div>
              </div>
              <div
                aria-label="3 of 6"
                role="group"
                className="relative box-border caret-transparent inline-block h-full max-w-none text-left align-top w-full mr-5 md:max-w-[420px] md:mr-[34px]"
              >
                <div className="border-b-zinc-800 border-l-zinc-800 border-t-zinc-800 box-border caret-transparent flex flex-col gap-y-5 pr-0 border-r-white/10 border-r-0 md:gap-y-[25px] md:pr-[34px] md:border-r">
                  <div className="text-neutral-400 items-center box-border caret-transparent gap-x-3 flex justify-start">
                    <div className="bg-gray-100 box-border caret-transparent max-h-[60px] max-w-[60px] min-h-[60px] min-w-[60px] overflow-hidden rounded-[50%] md:max-h-[65px] md:max-w-[65px] md:min-h-[65px] md:min-w-[65px]">
                      <img
                        src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679dc65105a4d2c8c9c5eda1_review-thumb-03.jpg"
                        alt="Review Image"
                        className="box-border caret-transparent inline-block max-h-[60px] max-w-full min-h-[60px] object-cover w-full md:max-h-[65px] md:min-h-[65px]"
                      />
                    </div>
                    <div className="box-border caret-transparent">
                      <div className="text-white box-border caret-transparent">
                        Kathryn Murphy
                      </div>
                      <div className="text-sm box-border caret-transparent leading-[21px]">
                        Dallas, US
                      </div>
                    </div>
                  </div>
                  <p className="text-neutral-400 box-border caret-transparent">
                    Drill collaborative approach ensured designs were
                    implemented with impeccable attention to detail. A pleasure
                    to work with!
                  </p>
                </div>
              </div>
              <div
                aria-label="4 of 6"
                role="group"
                className="relative box-border caret-transparent inline-block h-full max-w-none text-left align-top w-full mr-5 md:max-w-[420px] md:mr-[34px]"
              >
                <div className="border-b-zinc-800 border-l-zinc-800 border-t-zinc-800 box-border caret-transparent flex flex-col gap-y-5 pr-0 border-r-white/10 border-r-0 md:gap-y-[25px] md:pr-[34px] md:border-r">
                  <div className="text-neutral-400 items-center box-border caret-transparent gap-x-3 flex justify-start">
                    <div className="bg-gray-100 box-border caret-transparent max-h-[60px] max-w-[60px] min-h-[60px] min-w-[60px] overflow-hidden rounded-[50%] md:max-h-[65px] md:max-w-[65px] md:min-h-[65px] md:min-w-[65px]">
                      <img
                        src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679dc65188bb741fd81cde73_review-thumb-04.jpg"
                        alt="Review Image"
                        className="box-border caret-transparent inline-block max-h-[60px] max-w-full min-h-[60px] object-cover w-full md:max-h-[65px] md:min-h-[65px]"
                      />
                    </div>
                    <div className="box-border caret-transparent">
                      <div className="text-white box-border caret-transparent">
                        Brooklyn Simmons
                      </div>
                      <div className="text-sm box-border caret-transparent leading-[21px]">
                        Grorgia, US
                      </div>
                    </div>
                  </div>
                  <p className="text-neutral-400 box-border caret-transparent">
                    The team at Drill handled our commercial project with
                    precision and professionalism. Their results speak for
                    themselves.
                  </p>
                </div>
              </div>
              <div
                aria-label="5 of 6"
                role="group"
                className="relative box-border caret-transparent inline-block h-full max-w-none text-left align-top w-full mr-5 md:max-w-[420px] md:mr-[34px]"
              >
                <div className="border-b-zinc-800 border-l-zinc-800 border-t-zinc-800 box-border caret-transparent flex flex-col gap-y-5 pr-0 border-r-white/10 border-r-0 md:gap-y-[25px] md:pr-[34px] md:border-r">
                  <div className="text-neutral-400 items-center box-border caret-transparent gap-x-3 flex justify-start">
                    <div className="bg-gray-100 box-border caret-transparent max-h-[60px] max-w-[60px] min-h-[60px] min-w-[60px] overflow-hidden rounded-[50%] md:max-h-[65px] md:max-w-[65px] md:min-h-[65px] md:min-w-[65px]">
                      <img
                        src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679dc6510f65b043f431d698_review-thumb-05.jpg"
                        alt="Review Image"
                        className="box-border caret-transparent inline-block max-h-[60px] max-w-full min-h-[60px] object-cover w-full md:max-h-[65px] md:min-h-[65px]"
                      />
                    </div>
                    <div className="box-border caret-transparent">
                      <div className="text-white box-border caret-transparent">
                        Leslie Alexander
                      </div>
                      <div className="text-sm box-border caret-transparent leading-[21px]">
                        Florida, US
                      </div>
                    </div>
                  </div>
                  <p className="text-neutral-400 box-border caret-transparent">
                    Our new school building was completed ahead of schedule, and
                    the quality of work is exceptional. Thank you, Drill!
                  </p>
                </div>
              </div>
              <div
                aria-label="6 of 6"
                role="group"
                className="relative box-border caret-transparent inline-block h-full max-w-none text-left align-top w-full mr-5 md:max-w-[420px] md:mr-[34px]"
              >
                <div className="border-b-zinc-800 border-l-zinc-800 border-t-zinc-800 box-border caret-transparent flex flex-col gap-y-5 pr-0 border-r-white/10 border-r-0 md:gap-y-[25px] md:pr-[34px] md:border-r">
                  <div className="text-neutral-400 items-center box-border caret-transparent gap-x-3 flex justify-start">
                    <div className="bg-gray-100 box-border caret-transparent max-h-[60px] max-w-[60px] min-h-[60px] min-w-[60px] overflow-hidden rounded-[50%] md:max-h-[65px] md:max-w-[65px] md:min-h-[65px] md:min-w-[65px]">
                      <img
                        src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679dc65131228b3b1edd5069_review-thumb-06.jpg"
                        alt="Review Image"
                        className="box-border caret-transparent inline-block max-h-[60px] max-w-full min-h-[60px] object-cover w-full md:max-h-[65px] md:min-h-[65px]"
                      />
                    </div>
                    <div className="box-border caret-transparent">
                      <div className="text-white box-border caret-transparent">
                        Ronald Richards
                      </div>
                      <div className="text-sm box-border caret-transparent leading-[21px]">
                        Texas, US
                      </div>
                    </div>
                  </div>
                  <p className="text-neutral-400 box-border caret-transparent">
                    Drill created a luxurious and functional hotel space that
                    exceeded our expectations. The craftsmanship is impeccable.
                  </p>
                </div>
              </div>
            </div>
            <div
              role="button"
              aria-label="previous slide"
              className="absolute text-white text-[40px] items-center bottom-[-50px] box-border caret-transparent flex justify-center max-h-[34px] max-w-[34px] min-h-[34px] min-w-[34px] w-20 z-[3] border overflow-hidden m-auto rounded-[50%] border-solid border-white/10 right-11 md:-bottom-20 hover:border-white"
            >
              <img
                src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679dc7d74485cc2f9b298344_ic-left-slider-arrow.svg"
                alt="Arrow"
                className="box-border caret-transparent max-w-full"
              />
            </div>
            <div
              role="button"
              aria-label="next slide"
              className="absolute text-white text-[40px] items-center bottom-[-50px] box-border caret-transparent flex justify-center max-h-[34px] max-w-[34px] min-h-[34px] min-w-[34px] w-20 z-[4] border overflow-hidden m-auto rounded-[50%] border-solid border-white/10 right-[0%] md:-bottom-20 hover:border-white"
            >
              <img
                src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679dc7d740e2c8138247d4c2_ic-slider-arrow.svg"
                alt="Arrow"
                className="box-border caret-transparent max-w-full"
              />
            </div>
            <div className="absolute box-border caret-transparent hidden h-10 z-[2] m-auto pt-2.5 bottom-0 inset-x-0">
              <div
                aria-label="Show slide 1 of 6"
                role="button"
                className="relative bg-white box-border caret-transparent inline-block mb-2 mx-[3px] px-2 py-[3.2px] rounded-[100%]"
              >
                1
              </div>
              <div
                aria-label="Show slide 2 of 6"
                role="button"
                className="relative bg-white/40 box-border caret-transparent inline-block mb-2 mx-[3px] px-2 py-[3.2px] rounded-[100%]"
              >
                2
              </div>
              <div
                aria-label="Show slide 3 of 6"
                role="button"
                className="relative bg-white/40 box-border caret-transparent inline-block mb-2 mx-[3px] px-2 py-[3.2px] rounded-[100%]"
              >
                3
              </div>
              <div
                aria-label="Show slide 4 of 6"
                role="button"
                className="relative bg-white/40 box-border caret-transparent inline-block mb-2 mx-[3px] px-2 py-[3.2px] rounded-[100%]"
              >
                4
              </div>
              <div
                aria-label="Show slide 5 of 6"
                role="button"
                className="relative bg-white/40 box-border caret-transparent inline-block mb-2 mx-[3px] px-2 py-[3.2px] rounded-[100%]"
              >
                5
              </div>
              <div
                aria-label="Show slide 6 of 6"
                role="button"
                className="relative bg-white/40 box-border caret-transparent inline-block mb-2 mx-[3px] px-2 py-[3.2px] rounded-[100%]"
              >
                6
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="box-border caret-transparent mb-[60px] md:mb-[150px]">
        <div className="box-border caret-transparent max-w-full w-full mx-auto px-5 md:max-w-[1336px] before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27.2px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-public_sans after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27.2px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-public_sans">
          <SectionHeader subtitle="Contact us" title="Let's Connect" />
          <div className="items-center box-border caret-transparent gap-x-[60px] flex flex-col-reverse flex-wrap justify-start gap-y-10 md:flex-row md:flex-nowrap md:gap-y-[normal]">
            <div className="box-border caret-transparent flex flex-col max-w-none gap-y-3 w-full border p-[25px] border-solid border-black/10 md:max-w-[35%] md:p-[30px]">
              <div className="relative bg-gray-100 box-border caret-transparent overflow-hidden">
                <img
                  src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c9ebbb5ca924fedd34a68_contact.jpg"
                  alt="Contact Image"
                  className="box-border caret-transparent inline-block max-h-none max-w-full min-h-0 object-cover w-full md:max-h-[254px] md:min-h-[254px]"
                />
              </div>
              <div className="box-border caret-transparent flex flex-col gap-y-[15px] md:gap-y-[22px]">
                <div className="items-start border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 box-border caret-transparent flex flex-col justify-start pb-[15px] border-b-black/10 border-b md:pb-[22px]">
                  <div className="text-sm box-border caret-transparent leading-[21px]">
                    Send us an email
                  </div>
                  <a
                    href="mailto://info@example.com"
                    className="text-black text-base box-border caret-transparent block leading-6 mt-0.5 md:text-xl md:leading-[30px] hover:underline"
                  >
                    info@example.com
                  </a>
                </div>
                <div className="items-start border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 box-border caret-transparent flex flex-col justify-start pb-[15px] border-b-black/10 border-b md:pb-[22px]">
                  <div className="text-sm box-border caret-transparent leading-[21px]">
                    Give us a call
                  </div>
                  <a
                    href="tel://+(406)555-0120"
                    className="text-black text-base box-border caret-transparent block leading-6 mt-0.5 md:text-xl md:leading-[30px] hover:underline"
                  >
                    +(406) 555-0120
                  </a>
                </div>
                <div className="items-start box-border caret-transparent flex flex-col justify-start">
                  <div className="text-sm box-border caret-transparent leading-[21px]">
                    Address
                  </div>
                  <div className="text-black text-base box-border caret-transparent leading-6 md:text-xl md:leading-[30px]">
                    4517 Washington Ave. Manchester, Kentucky 39495
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border caret-transparent max-w-none w-full md:max-w-[65%]">
              <div className="box-border caret-transparent">
                <h3 className="text-black text-[22px] box-border caret-transparent leading-[33px] mb-2.5 md:text-[28px] md:leading-[42px]">
                  Send a message
                </h3>
                <p className="box-border caret-transparent">
                  Send us a message, and our team will get back to you promptly.
                  We’re here to provide guidance, answer your queries, and help
                  bring your vision to life.
                </p>
              </div>
              <div className="box-border caret-transparent mt-[30px] md:mt-10">
                <form
                  name="wf-form-Contact-Form"
                  aria-label="Contact Form"
                  className="items-end box-border caret-transparent flex flex-col justify-start"
                >
                  <div className="box-border caret-transparent gap-x-0 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-5 w-full mb-[30px] md:gap-x-[30px] md:grid-cols-[1fr_1fr] md:gap-y-10 md:mb-10">
                    <input
                      name="Name"
                      placeholder="Full Name*"
                      type="text"
                      className="text-sm box-border caret-transparent block col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] leading-[21px] align-middle w-full border px-3 py-2 border-solid border-black/10 md:col-end-[span_2] md:col-start-[span_2] md:p-[15px]"
                    />
                    <input
                      name="Email"
                      placeholder="Email* "
                      type="email"
                      className="text-sm box-border caret-transparent block leading-[21px] align-middle w-full border px-3 py-2 border-solid border-black/10 md:p-[15px]"
                    />
                    <input
                      name="Phone"
                      placeholder="Phone No"
                      type="tel"
                      className="text-sm box-border caret-transparent block leading-[21px] align-middle w-full border px-3 py-2 border-solid border-black/10 md:p-[15px]"
                    />
                    <textarea
                      placeholder="Write your message here* "
                      name="Message"
                      className="text-sm box-border caret-transparent block col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] leading-[21px] min-h-[180px] align-middle w-full px-3 py-2 border-black/10 md:col-end-[span_2] md:col-start-[span_2] md:p-3.5"
                    ></textarea>
                  </div>
                  <input
                    type="submit"
                    value="Submit Now"
                    className="text-black text-sm items-center bg-transparent bg-[url('https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c726c1827c33928d75854_ic-black-arrow.svg')] bg-no-repeat box-border caret-transparent gap-x-2.5 flex justify-center leading-[16.8px] text-center text-nowrap border bg-[position:112px_50%] pl-[22px] pr-12 py-3 border-solid border-black"
                  />
                  <div className="box-border caret-transparent">
                    <div className="box-border caret-transparent">
                      <iframe
                        src="cid://frame-8550966F8CD328E44E8F32DCEE025497@mhtml.blink"
                        title="Widget containing a Cloudflare security challenge"
                      ></iframe>
                    </div>
                  </div>
                </form>
                <div
                  role="region"
                  aria-label="Contact Form success"
                  className="text-white bg-red-600 box-border caret-transparent hidden text-center p-5"
                >
                  <div className="box-border caret-transparent">
                    Thank you! Your submission has been received!
                  </div>
                </div>
                <div
                  role="region"
                  aria-label="Contact Form failure"
                  className="bg-red-100 box-border caret-transparent hidden text-center mt-2.5 p-2.5"
                >
                  <div className="box-border caret-transparent">
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
