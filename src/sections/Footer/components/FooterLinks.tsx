import { FooterColumn } from "@/sections/Footer/components/FooterColumn";

export const FooterLinks = () => {
  return (
    <div className="items-start box-border caret-transparent flex flex-col justify-between gap-y-6 mt-6 sm:gap-y-8 sm:mt-8 md:flex-row md:gap-y-[normal] md:w-full">
      <div className="items-start box-border caret-transparent grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-8 md:gap-x-[140px] md:flex md:justify-between md:gap-y-[normal] md:w-full">
        <FooterColumn
          title="Follow us"
          links={[
            { href: "https://www.instagram.com/", text: "Instagram", external: true },
            { href: "https://www.facebook.com/", text: "Facebook", external: true },
            { href: "https://www.youtube.com/", text: "YouTube", external: true },
            { href: "http://x.com/", text: "Twitter", external: true },
          ]}
          variant=""
        />
        <FooterColumn
          variant=""
          title="Navigation"
          links={[
            { href: "/", text: "Home" },
            { href: "/about", text: "About Us" },
            { href: "/services", text: "Services" },
            { href: "/projects", text: "Projects" },
            { href: "/contact", text: "Contact" },
            { href: "/admin/login", text: "Admin" },
          ]}
        />
        <FooterColumn
          variant="contact"
          contactItems={[
            {
              label: "Send us an email",
              value: "info@khushihomes.com.au",
              href: "mailto:info@khushihomes.com.au",
            },
            {
              label: "Give us a call",
              value: "1300 KHUSHI",
              href: "tel:1300548744",
            },
          ]}
        />
      </div>
    </div>
  );
};
