export const HeroImage = () => {
  return (
    <div className="relative box-border caret-transparent">
      <div className="absolute box-border caret-transparent bottom-[0%] inset-x-[0%]">
        <div className="box-border caret-transparent max-w-full w-full mx-auto px-5 md:max-w-[1336px] before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27.2px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-public_sans after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27.2px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-public_sans">
        <h1 className="text-white text-5xl font-semibold box-border caret-transparent leading-tight text-center uppercase translate-y-4 md:text-[120px] md:leading-[95px] md:text-start md:pl-[28px] md:translate-y-12">
          Khushi
        </h1>
        </div>
      </div>
      <img
        src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/67a09b154683945b0cf22d92_hero-02.jpg"
        alt="Hero Image"
        className="aspect-[auto_1905_/_680] box-border caret-transparent inline-block h-[680px] max-h-[200px] max-w-full min-h-[200px] object-cover w-full md:max-h-[680px] md:min-h-[680px]"
      />
    </div>
  );
};
