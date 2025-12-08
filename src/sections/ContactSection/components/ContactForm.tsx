import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          message: formData.message,
          project_type: 'other',
          status: 'new'
        }]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error: any) {
      setSubmitStatus('error');
      setErrorMessage(error.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="box-border caret-transparent max-w-none w-full md:max-w-[65%]">
      <div className="box-border caret-transparent">
        <h3 className="text-black text-lg box-border caret-transparent leading-[27px] mb-2 sm:text-[22px] sm:leading-[33px] sm:mb-2.5 md:text-[28px] md:leading-[42px]">
          Send a message
        </h3>
        <p className="box-border caret-transparent text-sm sm:text-base">
          Send us a message, and our team will get back to you promptly. We're
          here to provide guidance, answer your queries, and help bring your
          vision to life.
        </p>
      </div>
      <div className="box-border caret-transparent mt-6 sm:mt-[30px] md:mt-10">
        <form
          onSubmit={handleSubmit}
          name="wf-form-Contact-Form"
          aria-label="Contact Form"
          className="items-end box-border caret-transparent flex flex-col justify-start"
        >
          <div className="box-border caret-transparent grid grid-cols-1 gap-y-4 w-full mb-6 sm:gap-y-5 sm:mb-[30px] md:gap-x-[30px] md:grid-cols-2 md:gap-y-10 md:mb-10">
            <input
              name="name"
              placeholder="Full Name*"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="text-sm box-border caret-transparent block leading-[21px] align-middle w-full border px-3 py-2 border-solid border-zinc-300 md:col-span-2 md:p-[15px]"
            />
            <input
              name="email"
              placeholder="Email* "
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="text-sm box-border caret-transparent block leading-[21px] align-middle w-full border px-3 py-2 border-solid border-zinc-300 md:p-[15px]"
            />
            <input
              name="phone"
              placeholder="Phone No"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="text-sm box-border caret-transparent block leading-[21px] align-middle w-full border px-3 py-2 border-solid border-zinc-300 md:p-[15px]"
            />
            <textarea
              placeholder="Write your message here* "
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="text-sm box-border caret-transparent block leading-[21px] min-h-[140px] align-middle w-full px-3 py-2 border border-solid border-zinc-300 sm:min-h-[180px] md:col-span-2 md:p-3.5"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="text-black text-sm items-center bg-transparent bg-[url('https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c726c1827c33928d75854_ic-black-arrow.svg')] bg-no-repeat box-border caret-transparent gap-x-2.5 flex justify-center leading-[16.8px] text-center text-nowrap border bg-[position:90px_50%] pl-5 pr-10 py-2.5 sm:bg-[position:112px_50%] sm:pl-[22px] sm:pr-12 sm:py-3 border-solid border-black hover:bg-black hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Submit Now'}
          </button>
        </form>
        {submitStatus === 'success' && (
          <div
            role="region"
            aria-label="Contact Form success"
            className="text-white bg-green-600 box-border caret-transparent text-center p-5 mt-4"
          >
            <div className="box-border caret-transparent">
              Thank you! Your submission has been received!
            </div>
          </div>
        )}
        {submitStatus === 'error' && (
          <div
            role="region"
            aria-label="Contact Form failure"
            className="bg-red-100 text-red-800 box-border caret-transparent text-center mt-4 p-4"
          >
            <div className="box-border caret-transparent">
              {errorMessage || 'Oops! Something went wrong while submitting the form.'}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
