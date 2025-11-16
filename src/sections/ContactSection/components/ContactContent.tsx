import { ContactInfo } from "@/sections/ContactSection/components/ContactInfo";
import { ContactForm } from "@/sections/ContactSection/components/ContactForm";

export const ContactContent = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-[60px] flex flex-col-reverse flex-wrap justify-start gap-y-10 md:flex-row md:flex-nowrap md:gap-y-[normal]">
      <ContactInfo />
      <ContactForm />
    </div>
  );
};
