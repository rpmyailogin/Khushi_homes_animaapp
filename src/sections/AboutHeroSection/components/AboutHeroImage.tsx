export const AboutHeroImage = () => {
  return (
    <div className="relative box-border caret-transparent">
      <div className="absolute box-border caret-transparent inset-0 flex items-center justify-center px-5">
        <p className="text-white text-sm md:text-lg text-center max-w-4xl bg-black/30 px-6 py-4 rounded-lg backdrop-blur-sm leading-relaxed">
          Khushi Homes specializes in delivering premium construction services throughout Australia, combining traditional craftsmanship with innovative building techniques. Our commitment to quality, transparency, and customer satisfaction has established us as a trusted partner for homeowners seeking exceptional results. With years of experience in residential and commercial construction, we bring expertise in custom home building, renovations, and architectural design. Our dedicated team of skilled professionals ensures every project is completed to the highest standards, on time and within budget. From initial consultation to final handover, we work closely with our clients to bring their vision to life while maintaining open communication throughout the entire construction process.
        </p>
      </div>
      <div className="absolute box-border caret-transparent bottom-[0%] inset-x-[0%]">
        <div className="box-border caret-transparent max-w-full w-full mx-auto px-5 md:max-w-[1336px] before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27.2px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-public_sans after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27.2px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-public_sans">
        <h1 className="text-white text-5xl font-semibold box-border caret-transparent leading-tight text-start uppercase translate-y-8 pl-5 md:text-[120px] md:leading-[95px] md:translate-y-4 md:pl-[56px] md:pt-8">
          Modern
        </h1>
        </div>
      </div>
      <img
        src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/67a09b154683945b0cf22d92_hero-02.jpg"
        alt="About Us Hero Image"
        className="aspect-[auto_1905_/_680] box-border caret-transparent inline-block h-[680px] max-h-[200px] max-w-full min-h-[200px] object-cover w-full md:max-h-[680px] md:min-h-[680px]"
      />
    </div>
  );
};
