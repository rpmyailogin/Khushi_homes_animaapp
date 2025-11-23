import { StatItem } from "@/sections/Hero/components/StatItem";

export const HeroStats = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-6 grid grid-cols-1 gap-y-4 w-full sm:grid-cols-2 sm:gap-x-8 sm:gap-y-5 md:flex md:flex-col md:gap-x-[normal] md:gap-y-[normal] md:max-w-[22%] md:auto-cols-auto md:grid-cols-none">
      <StatItem
        iconUrl="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/67a0a7b2e0b78706efab8784_ic-experience.svg"
        description="Delivering quality construction solutions since day one."
      />
      <StatItem
        iconUrl="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/67a0a7b2f6709117f7115775_ic-successful project.svg"
        description="Proven track record of excellence across diverse industries."
      />
      <StatItem
        iconUrl="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/67a0a7b26d47f38c42694376_ic-scaling.svg"
        description="Innovating to push boundaries in modern construction."
      />
    </div>
  );
};
