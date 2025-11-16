import { StatItem } from "@/sections/Hero/components/StatItem";

export const HeroStats = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-10 hidden flex-row flex-wrap auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto] justify-between max-w-none min-h-0 min-w-0 gap-y-5 w-full md:[align-items:normal] md:gap-x-[normal] md:flex md:flex-col md:flex-nowrap md:auto-cols-auto md:grid-cols-none md:grid-rows-none md:justify-normal md:max-w-[22%] md:min-h-[auto] md:min-w-[auto]">
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
