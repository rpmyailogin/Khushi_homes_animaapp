import { FooterColumn } from "@/sections/Footer/components/FooterColumn";

export const FooterLinks = () => {
  return (
    <div className="items-start box-border caret-transparent flex flex-col justify-between gap-y-8 mt-8 sm:gap-y-10 sm:mt-10 md:flex-row md:gap-y-[normal] md:w-full">
      <div className="items-start box-border caret-transparent grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-8 md:gap-x-[140px] md:flex md:justify-between md:gap-y-[normal] md:w-full">
        <FooterColumn
          title="Follow us"
          links={[
            { href: "https://www.instagram.com/", text: "Instagram" },
            { href: "https://www.facebook.com/", text: "Facebook" },
            { href: "https://www.youtube.com/", text: "YouTube" },
            { href: "http://x.com/", text: "Twitter" },
          ]}
          variant=""
        />
        <FooterColumn
          variant=""
          title="Resources"
          links={[
            {
              href: "/",
              text: "Style Guide",
            },
            {
              href: "/",
              text: "Privacy Policy",
            },
            {
              href: "/",
              text: "Terms & Conditions",
            },
            {
              href: "/",
              text: "License",
            },
          ]}
        />
        <FooterColumn
          variant="contact"
          contactItems={[
            {
              label: "Send us an email",
              value: "info@example.com",
              href: "mailto://info@example.com",
            },
            {
              label: "Give us a call",
              value: "+(406) 555-0120",
              href: "tel://+(406)555-0120",
            },
          ]}
        />
      </div>
    </div>
  );
};
