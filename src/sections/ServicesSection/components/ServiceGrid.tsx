import { ServiceCard } from "@/sections/ServicesSection/components/ServiceCard";

export const ServiceGrid = () => {
  return (
    <div
      role="list"
      className="box-border caret-transparent grid grid-cols-1 gap-y-8 sm:gap-y-10 md:grid-cols-2 md:gap-x-0"
    >
      <ServiceCard
        title="New Home Construction"
        iconUrl="https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/679dba1be9049fbc8805b173_ic-structural.svg"
        description="Transform your vision into reality with custom-designed homes built to Australian standards. Our experienced team manages every phase from design through to final handover."
        serviceImageUrl="https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800"
        href="/services"
      />
      <ServiceCard
        title="Home Rebuilds & Renovations"
        iconUrl="https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/679dba41441cc64868b978bd_ic-foundation.svg"
        description="Breathe new life into your existing property with comprehensive rebuild services. We deliver seamless renovations that enhance both function and value."
        serviceImageUrl="https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=800"
        href="/services"
      />
      <ServiceCard
        title="Outdoor Living Spaces"
        iconUrl="https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/679dba1be9049fbc8805b173_ic-structural.svg"
        description="Extend your living area with stunning outdoor entertainment zones. We design and build decks, patios, and alfresco areas perfect for Australian lifestyle."
        serviceImageUrl="https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800"
        href="/services"
      />
      <ServiceCard
        title="Project Management"
        iconUrl="https://cdn.prod.website-files.com/679b74f316932fb3b1e01c07/679dba41441cc64868b978bd_ic-foundation.svg"
        description="Complete oversight and coordination of your construction project. We handle scheduling, quality control, and compliance to ensure on-time delivery."
        serviceImageUrl="https://images.pexels.com/photos/3862135/pexels-photo-3862135.jpeg?auto=compress&cs=tinysrgb&w=800"
        href="/services"
      />
    </div>
  );
};
