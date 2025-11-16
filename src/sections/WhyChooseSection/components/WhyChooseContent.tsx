import { FeatureList } from "@/sections/WhyChooseSection/components/FeatureList";
import { FeatureImage } from "@/sections/WhyChooseSection/components/FeatureImage";

export const WhyChooseContent = () => {
  return (
    <div className="box-border caret-transparent flex flex-col max-w-none gap-y-[15px] w-full md:max-w-[60%] md:gap-y-[60px]">
      <div className="box-border caret-transparent">
        <h2 className="text-black text-xl font-medium box-border caret-transparent leading-[30px] mb-2.5 md:text-4xl md:leading-[54px]">
          Expert Craftsmanship for Unmatched Construction Projects
        </h2>
        <p className="box-border caret-transparent">
          Choosing Khushi Homes means working with a team that values quality craftsmanship and client satisfaction. We deliver beautiful homes that last, on time and within budget.
        </p>
      </div>
      <div className="box-border caret-transparent">
        <FeatureList />
        <div className="items-start box-border caret-transparent gap-x-[30px] flex flex-col justify-start md:items-stretch md:flex-row">
          <FeatureImage />
          <div className="items-start box-border caret-transparent flex flex-col justify-start max-w-none gap-y-[30px] w-full md:max-w-[65%] md:gap-y-[60px]">
            <p className="box-border caret-transparent">
              Your vision is our priority. At Khushi Homes, we deliver tailored home solutions that align with your unique lifestyle and exceed expectations.
            </p>
            <a
              href="/"
              className="text-black text-sm items-center box-border caret-transparent gap-x-2.5 flex justify-center leading-[16.8px] max-w-full border px-[22px] py-3 border-solid"
            >
              <div className="relative box-border caret-transparent overflow-hidden">
                <div className="box-border caret-transparent gap-x-1 flex">
                  Contact us
                </div>
                <div className="absolute box-border caret-transparent gap-x-1 flex">
                  Contact us
                </div>
              </div>
              <img
                src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c726c1827c33928d75854_ic-black-arrow.svg"
                alt="Arrow"
                className="box-border caret-transparent max-w-full"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
