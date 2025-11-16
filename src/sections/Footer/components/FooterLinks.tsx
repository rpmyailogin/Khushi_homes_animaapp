import { FooterColumn } from "@/sections/Footer/components/FooterColumn";

export const FooterLinks = () => {
  return (
    <div className="items-start box-border caret-transparent flex flex-col justify-between gap-y-10 mt-10 md:flex-row md:gap-y-[normal]">
      <div className="items-start box-border caret-transparent gap-x-[55px] grid auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto] justify-between gap-y-[30px] md:gap-x-[140px] md:flex md:auto-cols-auto md:grid-cols-none md:grid-rows-none md:justify-start md:gap-y-[normal]">
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
              href: "https://drill-template.webflow.io/template-info/style-guide",
              text: "Style Guide",
            },
            {
              href: "https://drill-template.webflow.io/privacy-policy",
              text: "Privacy Policy",
            },
            {
              href: "https://drill-template.webflow.io/terms-conditions",
              text: "Terms & Conditions",
            },
            {
              href: "https://drill-template.webflow.io/template-info/licensing",
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
      <div className="text-neutral-400 text-sm box-border caret-transparent leading-[21px]">
        Designed by{" "}
        <a
          href="https://nixar.io/"
          className="box-border caret-transparent hover:text-white hover:border-white"
        >
          Nixar.
        </a>
        Powered by{" "}
        <a
          href="https://webflow.com/"
          className="box-border caret-transparent hover:text-white hover:border-white"
        >
          Webflow.
        </a>
      </div>
    </div>
  );
};
