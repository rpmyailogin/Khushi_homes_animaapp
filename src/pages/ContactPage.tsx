import { useState, useEffect } from 'react';
import { SectionHeader } from '@/components/SectionHeader';

export const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact Us - Khushi Homes";
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    projectType: 'new-home'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/rest/v1/contact_submissions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': import.meta.env.VITE_SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitMessage('Thank you for contacting us! We will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          projectType: 'new-home'
        });
      } else {
        setSubmitMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="box-border caret-transparent">
      <section className="bg-gray-100 box-border caret-transparent py-10 md:py-20">
        <div className="box-border caret-transparent max-w-full w-full mx-auto px-5 md:max-w-[1336px]">
          <SectionHeader subtitle="Get in Touch" title="Contact Us" />
          <p className="box-border caret-transparent max-w-3xl">
            Have a project in mind? We'd love to hear from you. Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="box-border caret-transparent py-10 md:py-20">
        <div className="box-border caret-transparent max-w-full w-full mx-auto px-5 md:max-w-[1336px]">
          <div className="box-border caret-transparent grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-10 sm:grid-cols-1 md:grid-cols-[1fr_1fr] md:gap-x-[60px]">
            <div className="box-border caret-transparent">
              <h3 className="text-black text-xl font-medium box-border caret-transparent leading-[30px] mb-6 md:text-2xl md:leading-[36px]">
                Let's Build Something Great Together
              </h3>
              <p className="box-border caret-transparent mb-8 leading-relaxed">
                Whether you're planning a new home, renovation, or need expert consultation, we're here to help bring your vision to life. Our experienced team is ready to discuss your project requirements and provide tailored solutions.
              </p>

              <div className="box-border caret-transparent flex flex-col gap-y-6">
                <div className="box-border caret-transparent flex items-start gap-x-4">
                  <div className="bg-cyan-100 box-border caret-transparent min-w-12 min-h-12 max-w-12 max-h-12 flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-black font-medium box-border caret-transparent mb-1">Phone</h4>
                    <a href="tel:+61406996223" className="box-border caret-transparent text-sm block hover:underline">+61 0406 996 223</a>
                    <a href="tel:+61424238507" className="box-border caret-transparent text-sm block hover:underline">+61 0424238507</a>
                  </div>
                </div>

                <div className="box-border caret-transparent flex items-start gap-x-4">
                  <div className="bg-cyan-100 box-border caret-transparent min-w-12 min-h-12 max-w-12 max-h-12 flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-black font-medium box-border caret-transparent mb-1">Email</h4>
                    <a href="mailto:info@khushihomes.com.au" className="box-border caret-transparent text-sm hover:underline">info@khushihomes.com.au</a>
                  </div>
                </div>

                <div className="box-border caret-transparent flex items-start gap-x-4">
                  <div className="bg-cyan-100 box-border caret-transparent min-w-12 min-h-12 max-w-12 max-h-12 flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-black font-medium box-border caret-transparent mb-1">Location</h4>
                    <p className="box-border caret-transparent text-sm">440 Docklands Drive Docklands 3008</p>
                  </div>
                </div>

                <div className="box-border caret-transparent flex items-start gap-x-4">
                  <div className="bg-cyan-100 box-border caret-transparent min-w-12 min-h-12 max-w-12 max-h-12 flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-black font-medium box-border caret-transparent mb-1">Business Hours</h4>
                    <p className="box-border caret-transparent text-sm">Mon - Fri: 8:00 AM - 6:00 PM</p>
                    <p className="box-border caret-transparent text-sm">Sat: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="box-border caret-transparent">
              <form onSubmit={handleSubmit} className="bg-white box-border caret-transparent p-8 border border-solid border-black/10">
                <div className="box-border caret-transparent mb-6">
                  <label htmlFor="name" className="text-sm font-medium box-border caret-transparent block mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="box-border caret-transparent w-full px-4 py-3 border border-solid border-black/10 focus:outline-none focus:border-black transition-colors"
                    placeholder="John Smith"
                  />
                </div>

                <div className="box-border caret-transparent mb-6">
                  <label htmlFor="email" className="text-sm font-medium box-border caret-transparent block mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="box-border caret-transparent w-full px-4 py-3 border border-solid border-black/10 focus:outline-none focus:border-black transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="box-border caret-transparent mb-6">
                  <label htmlFor="phone" className="text-sm font-medium box-border caret-transparent block mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="box-border caret-transparent w-full px-4 py-3 border border-solid border-black/10 focus:outline-none focus:border-black transition-colors"
                    placeholder="+61 XXX XXX XXX"
                  />
                </div>

                <div className="box-border caret-transparent mb-6">
                  <label htmlFor="projectType" className="text-sm font-medium box-border caret-transparent block mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="box-border caret-transparent w-full px-4 py-3 border border-solid border-black/10 focus:outline-none focus:border-black transition-colors bg-white"
                  >
                    <option value="new-home">New Home Construction</option>
                    <option value="renovation">Home Renovation</option>
                    <option value="rebuild">Home Rebuild</option>
                    <option value="interior-design">Interior Design</option>
                    <option value="consultation">Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="box-border caret-transparent mb-6">
                  <label htmlFor="message" className="text-sm font-medium box-border caret-transparent block mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="box-border caret-transparent w-full px-4 py-3 border border-solid border-black/10 focus:outline-none focus:border-black transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {submitMessage && (
                  <div className={`box-border caret-transparent mb-6 p-4 ${submitMessage.includes('Error') || submitMessage.includes('wrong') ? 'bg-red-50 text-red-800' : 'bg-green-50 text-green-800'}`}>
                    {submitMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="text-white text-sm items-center box-border caret-transparent gap-x-2.5 inline-flex justify-center leading-[16.8px] bg-black px-8 py-4 hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <img
                    src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c559d1989cb82e96c949e_15fec19f4179bbda8c7cdc30da4795c2_button-arrow.svg"
                    alt="Arrow"
                    className="box-border caret-transparent max-w-full"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 box-border caret-transparent py-10 md:py-[60px]">
        <div className="box-border caret-transparent max-w-full w-full mx-auto px-5 md:max-w-[1336px]">
          <div className="box-border caret-transparent max-w-4xl mx-auto text-center">
            <h3 className="text-black text-xl font-medium box-border caret-transparent leading-[30px] mb-5 md:text-2xl md:leading-[36px]">
              What Happens Next?
            </h3>
            <div className="box-border caret-transparent grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-6 md:grid-cols-[1fr_1fr_1fr] md:gap-x-8">
              <div className="box-border caret-transparent">
                <div className="text-red-600 text-3xl font-medium box-border caret-transparent leading-[45px] mb-3">
                  01
                </div>
                <h4 className="text-black font-medium box-border caret-transparent mb-2">
                  Initial Response
                </h4>
                <p className="box-border caret-transparent text-sm leading-relaxed">
                  We'll review your inquiry and reach out within 24 hours to discuss your project.
                </p>
              </div>
              <div className="box-border caret-transparent">
                <div className="text-red-600 text-3xl font-medium box-border caret-transparent leading-[45px] mb-3">
                  02
                </div>
                <h4 className="text-black font-medium box-border caret-transparent mb-2">
                  Consultation
                </h4>
                <p className="box-border caret-transparent text-sm leading-relaxed">
                  Schedule a free consultation to explore your vision and project requirements.
                </p>
              </div>
              <div className="box-border caret-transparent">
                <div className="text-red-600 text-3xl font-medium box-border caret-transparent leading-[45px] mb-3">
                  03
                </div>
                <h4 className="text-black font-medium box-border caret-transparent mb-2">
                  Proposal
                </h4>
                <p className="box-border caret-transparent text-sm leading-relaxed">
                  Receive a detailed proposal with timeline and cost estimates for your project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
