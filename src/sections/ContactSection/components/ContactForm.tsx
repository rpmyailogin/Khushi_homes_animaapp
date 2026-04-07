import { useState, useRef } from 'react';
import { supabase } from '@/lib/supabase';
import { isValidEmail, isValidPhone, isValidName, isValidMessage, checkRateLimit } from '@/lib/security';

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
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const honeypotRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setFieldErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypotRef.current?.value) {
      honeypotRef.current.value = '';
      return;
    }

    const errors: Record<string, string> = {};
    if (!isValidName(formData.name)) errors.name = 'Please enter your name (at least 2 characters)';
    if (!isValidEmail(formData.email)) errors.email = 'Please enter a valid email address';
    if (formData.phone && !isValidPhone(formData.phone)) errors.phone = 'Please enter a valid phone number';
    if (!isValidMessage(formData.message)) errors.message = 'Please enter a message (at least 3 characters)';

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setSubmitStatus('error');
      setErrorMessage('Please fix the highlighted fields below.');
      return;
    }
    setFieldErrors({});

    if (!checkRateLimit('contact-section', 3, 600000)) {
      setSubmitStatus('error');
      setErrorMessage('Too many submissions. Please try again in a few minutes.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([{
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim() || null,
          message: formData.message.trim(),
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
    } catch {
      setSubmitStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
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
          <div className="absolute opacity-0 h-0 w-0 overflow-hidden" aria-hidden="true" tabIndex={-1}>
            <input ref={honeypotRef} type="text" name="website" autoComplete="off" tabIndex={-1} />
          </div>
          <div className="box-border caret-transparent grid grid-cols-1 gap-y-4 w-full mb-6 sm:gap-y-5 sm:mb-[30px] md:gap-x-[30px] md:grid-cols-2 md:gap-y-10 md:mb-10">
            <div className="md:col-span-2">
              <input
                name="name"
                placeholder="Full Name*"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                maxLength={100}
                className={`text-sm box-border caret-transparent block leading-[21px] align-middle w-full border px-3 py-2 border-solid md:p-[15px] ${fieldErrors.name ? 'border-red-500' : 'border-zinc-300'}`}
              />
              {fieldErrors.name && <p className="text-red-600 text-xs mt-1">{fieldErrors.name}</p>}
            </div>
            <div>
              <input
                name="email"
                placeholder="Email* "
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                maxLength={254}
                className={`text-sm box-border caret-transparent block leading-[21px] align-middle w-full border px-3 py-2 border-solid md:p-[15px] ${fieldErrors.email ? 'border-red-500' : 'border-zinc-300'}`}
              />
              {fieldErrors.email && <p className="text-red-600 text-xs mt-1">{fieldErrors.email}</p>}
            </div>
            <div>
              <input
                name="phone"
                placeholder="Phone No"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                maxLength={20}
                className={`text-sm box-border caret-transparent block leading-[21px] align-middle w-full border px-3 py-2 border-solid md:p-[15px] ${fieldErrors.phone ? 'border-red-500' : 'border-zinc-300'}`}
              />
              {fieldErrors.phone && <p className="text-red-600 text-xs mt-1">{fieldErrors.phone}</p>}
            </div>
            <div className="md:col-span-2">
              <textarea
                placeholder="Write your message here* "
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                maxLength={5000}
                className={`text-sm box-border caret-transparent block leading-[21px] min-h-[140px] align-middle w-full px-3 py-2 border border-solid sm:min-h-[180px] md:p-3.5 ${fieldErrors.message ? 'border-red-500' : 'border-zinc-300'}`}
              ></textarea>
              {fieldErrors.message && <p className="text-red-600 text-xs mt-1">{fieldErrors.message}</p>}
            </div>
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
