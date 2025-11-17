import { ServiceCard } from "@/sections/ServicesSection/components/ServiceCard";

export const ServiceGrid = () => {
  return (
    <div
      role="list"
      className="box-border caret-transparent grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-10 md:grid-cols-[1fr_1fr] md:gap-x-0"
    >
      <ServiceCard
        title="New Home Construction"
        iconUrl="https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/679dba1be9049fbc8805b173_ic-structural.svg"
        description="Transform your vision into reality with custom-designed homes built to Australian standards. Our experienced team manages every phase from design through to final handover."
        serviceImageUrl="https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/679dba1d3d27868b02647dfb_services-thumb-05.jpg"
        href="/services"
      />
      <ServiceCard
        title="Home Rebuilds & Renovations"
        iconUrl="https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/679dba41441cc64868b978bd_ic-foundation.svg"
        description="Breathe new life into your existing property with comprehensive rebuild services. We deliver seamless renovations that enhance both function and value."
        serviceImageUrl="https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/679dba46477f30fd79c4ca4a_services-thumb-06.jpg"
        href="/services"
      />
      <ServiceCard
        title="Outdoor Living Spaces"
        iconUrl="https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/679dba1be9049fbc8805b173_ic-structural.svg"
        description="Extend your living area with stunning outdoor entertainment zones. We design and build decks, patios, and alfresco areas perfect for Australian lifestyle."
        serviceImageUrl="https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/679dba1d3d27868b02647dfb_services-thumb-05.jpg"
        href="/services"
      />
      <ServiceCard
        title="Project Management"
        iconUrl="https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/679dba41441cc64868b978bd_ic-foundation.svg"
        description="Complete oversight and coordination of your construction project. We handle scheduling, quality control, and compliance to ensure on-time delivery."
        serviceImageUrl="https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/679dba46477f30fd79c4ca4a_services-thumb-06.jpg"
        href="/services"
      />
    </div>
  );
};
