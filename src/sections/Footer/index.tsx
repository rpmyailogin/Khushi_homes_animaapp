import { FooterCTA } from "@/sections/Footer/components/FooterCTA";
import { FooterLinks } from "@/sections/Footer/components/FooterLinks";

export const Footer = () => {
  return (
    <section className="bg-black box-border caret-transparent pb-5">
      <div className="box-border caret-transparent max-w-full w-full mx-auto px-5 md:max-w-[1336px] before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27.2px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-public_sans after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27.2px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-public_sans">
        <div className="box-border caret-transparent py-10 md:pt-[70px] md:pb-20">
          <FooterCTA />
          <FooterLinks />
        </div>
        <img
          src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c7a7ad25099b1cde3908a_footer-line.svg"
          alt="Foote Tag Line"
          className="box-border caret-transparent inline-block max-w-full"
        />
      </div>
    </section>
  );
};
