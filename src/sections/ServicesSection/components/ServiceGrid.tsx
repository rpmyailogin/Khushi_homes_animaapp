import { ServiceCard } from "@/sections/ServicesSection/components/ServiceCard";

export const ServiceGrid = () => {
  return (
    <div
      role="list"
      className="box-border caret-transparent grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-10 md:grid-cols-[1fr_1fr_1fr]"
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
        title="Interior Design & Styling"
        iconUrl="https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/679db879eb37a230407186f4_ic-commercial.svg"
        description="Create beautiful, functional living spaces with our expert interior design services. From selecting premium finishes to optimizing room layouts."
        serviceImageUrl="https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/679db87dce7fe13ceb2a6e80_services-thumb-04.jpg"
        href="/services"
      />
    </div>
  );
};
