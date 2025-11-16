export const ContactForm = () => {
  return (
    <div className="box-border caret-transparent max-w-none w-full md:max-w-[65%]">
      <div className="box-border caret-transparent">
        <h3 className="text-black text-[22px] box-border caret-transparent leading-[33px] mb-2.5 md:text-[28px] md:leading-[42px]">
          Send a message
        </h3>
        <p className="box-border caret-transparent">
          Send us a message, and our team will get back to you promptly. We’re
          here to provide guidance, answer your queries, and help bring your
          vision to life.
        </p>
      </div>
      <div className="box-border caret-transparent mt-[30px] md:mt-10">
        <form
          name="wf-form-Contact-Form"
          aria-label="Contact Form"
          className="items-end box-border caret-transparent flex flex-col justify-start"
        >
          <div className="box-border caret-transparent gap-x-0 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-5 w-full mb-[30px] md:gap-x-[30px] md:grid-cols-[1fr_1fr] md:gap-y-10 md:mb-10">
            <input
              name="Name"
              placeholder="Full Name*"
              type="text"
              className="text-sm box-border caret-transparent block col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] leading-[21px] align-middle w-full border px-3 py-2 border-solid border-black/10 md:col-end-[span_2] md:col-start-[span_2] md:p-[15px]"
            />
            <input
              name="Email"
              placeholder="Email* "
              type="email"
              className="text-sm box-border caret-transparent block leading-[21px] align-middle w-full border px-3 py-2 border-solid border-black/10 md:p-[15px]"
            />
            <input
              name="Phone"
              placeholder="Phone No"
              type="tel"
              className="text-sm box-border caret-transparent block leading-[21px] align-middle w-full border px-3 py-2 border-solid border-black/10 md:p-[15px]"
            />
            <textarea
              placeholder="Write your message here* "
              name="Message"
              className="text-sm box-border caret-transparent block col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] leading-[21px] min-h-[180px] align-middle w-full px-3 py-2 border-black/10 md:col-end-[span_2] md:col-start-[span_2] md:p-3.5"
            ></textarea>
          </div>
          <input
            type="submit"
            value="Submit Now"
            className="text-black text-sm items-center bg-transparent bg-[url('https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c726c1827c33928d75854_ic-black-arrow.svg')] bg-no-repeat box-border caret-transparent gap-x-2.5 flex justify-center leading-[16.8px] text-center text-nowrap border bg-[position:112px_50%] pl-[22px] pr-12 py-3 border-solid border-black"
          />
          <div className="box-border caret-transparent">
            <div className="box-border caret-transparent">
              <iframe
                src="cid://frame-8550966F8CD328E44E8F32DCEE025497@mhtml.blink"
                title="Widget containing a Cloudflare security challenge"
              ></iframe>
            </div>
          </div>
        </form>
        <div
          role="region"
          aria-label="Contact Form success"
          className="text-white bg-red-600 box-border caret-transparent hidden text-center p-5"
        >
          <div className="box-border caret-transparent">
            Thank you! Your submission has been received!
          </div>
        </div>
        <div
          role="region"
          aria-label="Contact Form failure"
          className="bg-red-100 box-border caret-transparent hidden text-center mt-2.5 p-2.5"
        >
          <div className="box-border caret-transparent">
            Oops! Something went wrong while submitting the form.
          </div>
        </div>
      </div>
    </div>
  );
};
