export const ContactInfo = () => {
  return (
    <div className="box-border caret-transparent flex flex-col max-w-none gap-y-3 w-full border p-[25px] border-solid border-black/10 md:max-w-[35%] md:p-[30px]">
      <div className="relative bg-gray-100 box-border caret-transparent overflow-hidden">
        <img
          src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c9ebbb5ca924fedd34a68_contact.jpg"
          alt="Contact Image"
          className="box-border caret-transparent inline-block max-h-none max-w-full min-h-0 object-cover w-full md:max-h-[254px] md:min-h-[254px]"
        />
      </div>
      <div className="box-border caret-transparent flex flex-col gap-y-[15px] md:gap-y-[22px]">
        <div className="items-start border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 box-border caret-transparent flex flex-col justify-start pb-[15px] border-b-black/10 border-b md:pb-[22px]">
          <div className="text-sm box-border caret-transparent leading-[21px]">
            Send us an email
          </div>
          <a
            href="mailto://info@example.com"
            className="text-black text-base box-border caret-transparent block leading-6 mt-0.5 md:text-xl md:leading-[30px] hover:underline"
          >
            info@example.com
          </a>
        </div>
        <div className="items-start border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 box-border caret-transparent flex flex-col justify-start pb-[15px] border-b-black/10 border-b md:pb-[22px]">
          <div className="text-sm box-border caret-transparent leading-[21px]">
            Give us a call
          </div>
          <a
            href="tel://+(406)555-0120"
            className="text-black text-base box-border caret-transparent block leading-6 mt-0.5 md:text-xl md:leading-[30px] hover:underline"
          >
            +(406) 555-0120
          </a>
        </div>
        <div className="items-start box-border caret-transparent flex flex-col justify-start">
          <div className="text-sm box-border caret-transparent leading-[21px]">
            Address
          </div>
          <div className="text-black text-base box-border caret-transparent leading-6 md:text-xl md:leading-[30px]">
            4517 Washington Ave. Manchester, Kentucky 39495
          </div>
        </div>
      </div>
    </div>
  );
};
