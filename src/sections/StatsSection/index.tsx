import { StatsCard } from "@/sections/StatsSection/components/StatsCard";

export const StatsSection = () => {
  return (
    <section className="bg-gray-100 box-border caret-transparent mb-[60px] py-[60px] md:mb-[150px]">
      <div className="box-border caret-transparent max-w-full w-full mx-auto px-5 md:max-w-[1336px] before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27.2px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-public_sans after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27.2px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-public_sans">
        <div className="border-b-zinc-800 border-l-zinc-800 border-r-zinc-800 box-border caret-transparent grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] border-t-black/10 border-t md:grid-cols-[1fr_1fr]">
          <StatsCard
            variant="header"
            badge="By The Numbers"
            title="Facts & Figures"
            description="Explore the figures that demonstrate our excellence in the construction industry."
          />
          <StatsCard
            variant="bg-white border-r-zinc-800 justify-center px-[25px] py-[30px] md:px-[34px] md:py-[60px]"
            statValue="95%"
            statDescription="Proudly achieving 95% on-time project completion with excellent outcomes."
          />
          <StatsCard
            variant="bg-white border-r-zinc-800 justify-center px-[25px] py-[30px] md:px-[34px] md:py-[60px]"
            statValue="350+"
            statDescription="Projects completed on time and within budget"
          />
          <StatsCard
            variant="bg-black border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 justify-center px-[25px] py-[30px]"
            statValue="$200M+"
            statDescription="Successfully completed projects worth over $200M, covering residential, commercial, and infrastructure developments with top-notch quality."
          />
        </div>
      </div>
    </section>
  );
};
