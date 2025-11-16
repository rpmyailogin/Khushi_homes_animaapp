import { ServiceCard } from "@/sections/ServicesSection/components/ServiceCard";

export const ServiceGrid = () => {
  return (
    <div
      role="list"
      className="box-border caret-transparent grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-10 md:grid-cols-[1fr_1fr_1fr]"
    >
      <ServiceCard
        title="Structural Engineering"
        iconUrl="https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/679dba1be9049fbc8805b173_ic-structural.svg"
        description="We provide expert engineering services to ensure your project’s integrity and safety, from the foundation to the roof."
        serviceImageUrl="https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/679dba1d3d27868b02647dfb_services-thumb-05.jpg"
        href="https://drill-template.webflow.io/services/structural-engineering"
      />
      <ServiceCard
        title="General Contracting"
        iconUrl="https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/679dba41441cc64868b978bd_ic-foundation.svg"
        description="Drill provides seamless project management by overseeing procurement, subcontractors, and site coordination."
        serviceImageUrl="https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/679dba46477f30fd79c4ca4a_services-thumb-06.jpg"
        href="https://drill-template.webflow.io/services/general-contracting"
      />
      <ServiceCard
        title="Commercial Construction"
        iconUrl="https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/679db879eb37a230407186f4_ic-commercial.svg"
        description="We specialize in building office spaces, retail shops, and multi-use commercial properties that meet modern business needs."
        serviceImageUrl="https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/679db87dce7fe13ceb2a6e80_services-thumb-04.jpg"
        href="https://drill-template.webflow.io/services/commercial-construction"
      />
    </div>
  );
};
