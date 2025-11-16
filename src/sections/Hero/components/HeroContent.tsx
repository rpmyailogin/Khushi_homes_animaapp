import { HeroStats } from "@/sections/Hero/components/HeroStats";

export const HeroContent = () => {
  return (
    <div className="box-border caret-transparent max-w-full w-full mx-auto px-5 md:max-w-[1336px] before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27.2px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-public_sans after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27.2px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-public_sans">
      <div className="box-border caret-transparent">
        <h1 className="text-transparent text-5xl font-semibold bg-clip-text bg-[url('https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/67a09b154683945b0cf22d92_hero-02.jpg')] bg-no-repeat bg-size-[auto_200px] box-border caret-transparent leading-tight text-center uppercase bg-bottom pl-0 pt-3 md:text-[120px] md:bg-size-[1440px] md:leading-[95px] md:text-start md:pl-[168px] md:pt-5">
          Homes
        </h1>
        <div className="items-center box-border caret-transparent flex flex-col justify-between gap-y-10 mt-3 md:items-end md:flex-row md:gap-y-[normal] md:mt-1.5">
          <div className="items-center box-border caret-transparent flex flex-col justify-start max-w-none text-center w-full pl-0 md:items-start md:max-w-[65%] md:text-start md:pl-[56px]">
            <p className="text-sm box-border caret-transparent leading-[21px] text-center mb-[30px] md:text-base md:leading-[27.2px] md:text-start">
              From custom new builds to complete renovations and interior transformations—bringing quality craftsmanship and modern design to every project
            </p>
            <a
              href="/projects"
              className="text-white text-sm items-center bg-red-600 box-border caret-transparent gap-x-2.5 flex justify-center leading-[16.8px] max-w-full text-center px-[22px] py-3 md:text-start"
            >
              <div className="relative box-border caret-transparent text-center overflow-hidden md:text-start">
                <div className="box-border caret-transparent gap-x-1 flex text-center md:text-start">
                  Let's Build
                </div>
                <div className="absolute box-border caret-transparent gap-x-1 flex text-center md:text-start">
                  Let's Build
                </div>
              </div>
              <img
                src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c559d1989cb82e96c949e_15fec19f4179bbda8c7cdc30da4795c2_button-arrow.svg"
                alt="Arrow"
                className="box-border caret-transparent max-w-full text-center md:text-start"
              />
            </a>
          </div>
          <HeroStats />
        </div>
      </div>
    </div>
  );
};
