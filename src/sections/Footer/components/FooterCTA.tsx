import { useState, useRef } from 'react';
import { ContactModal } from '@/components/ContactModal';
import { supabase } from '@/lib/supabase';
import { isValidEmail, checkRateLimit } from '@/lib/security';

export const FooterCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const honeypotRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypotRef.current?.value) return;

    if (!isValidEmail(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }
    if (!checkRateLimit('footer-newsletter', 3, 600000)) {
      setMessage('Too many attempts. Please try again in a few minutes.');
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert([{
          email: email.trim(),
          name: name.trim() || null,
          preferences: {
            blog_updates: true,
            newsletters: true,
            offers: true
          }
        }]);

      if (error) {
        if (error.code === '23505') {
          setMessage('This email is already subscribed.');
        } else {
          throw error;
        }
      } else {
        setMessage('Successfully subscribed!');
        setEmail('');
        setName('');
      }
    } catch {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="items-start border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 box-border caret-transparent flex flex-col justify-between gap-y-6 pb-6 border-b-white/20 border-b sm:gap-y-8 sm:pb-8 md:items-start md:flex-row md:gap-x-10 md:gap-y-[normal] md:pb-10">
        <div className="items-start box-border caret-transparent flex flex-col justify-start max-w-none w-full md:max-w-[42%]">
          <h2 className="text-white text-xl box-border caret-transparent leading-[28px] mb-4 sm:text-[26px] sm:leading-[33.8px] sm:mb-5 md:text-[32px] md:leading-[42px]">
            Contact us today to discuss your next project
          </h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-white text-sm items-center bg-red-600 box-border caret-transparent gap-x-2.5 flex justify-center leading-[16.8px] max-w-full px-5 py-2.5 sm:px-[22px] sm:py-3 hover:bg-red-700 transition-colors touch-manipulation min-h-[44px]"
          >
            <div className="relative box-border caret-transparent overflow-hidden">
              <div className="box-border caret-transparent gap-x-1 flex">
                Collaborate Now
              </div>
              <div className="absolute box-border caret-transparent gap-x-1 flex">
                Collaborate Now
              </div>
            </div>
            <img
              src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c559d1989cb82e96c949e_15fec19f4179bbda8c7cdc30da4795c2_button-arrow.svg"
              alt="Arrow"
              className="box-border caret-transparent max-w-full"
            />
          </button>
        </div>

        <div className="box-border caret-transparent flex flex-col gap-y-6 w-full sm:gap-y-8 md:max-w-[50%]">
          <div className="items-center box-border caret-transparent gap-x-4 flex flex-wrap justify-start gap-y-4 sm:gap-x-[22px] sm:gap-y-[22px] md:flex-nowrap md:gap-y-[normal]">
            <a
              href="/projects"
              className="text-white text-sm items-center box-border caret-transparent gap-x-1.5 flex justify-start leading-[21px] max-w-full py-2 touch-manipulation"
            >
              <img
                src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c772f28d0cf7e15328a4c_ic-about.svg"
                alt="Icon"
                className="box-border caret-transparent max-h-4 max-w-4 min-h-4 min-w-4"
              />
              <div className="box-border caret-transparent">About us</div>
            </a>
            <a
              href="/projects"
              className="text-white text-sm items-center box-border caret-transparent gap-x-1.5 flex justify-start leading-[21px] max-w-full py-2 touch-manipulation"
            >
              <img
                src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c772f48e62cb358912407_ic-projects.svg"
                alt="Icon"
                className="box-border caret-transparent max-h-4 max-w-4 min-h-4 min-w-4"
              />
              <div className="box-border caret-transparent">Projects</div>
            </a>
            <a
              href="/services"
              className="text-white text-sm items-center box-border caret-transparent gap-x-1.5 flex justify-start leading-[21px] max-w-full py-2 touch-manipulation"
            >
              <img
                src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c772fbd9d9a04eda41714_ic-basic.svg"
                alt="Icon"
                className="box-border caret-transparent max-h-4 max-w-4 min-h-4 min-w-4"
              />
              <div className="box-border caret-transparent">Services</div>
            </a>
          </div>

          <div className="box-border caret-transparent w-full">
            <h3 className="text-white text-sm font-medium box-border caret-transparent leading-[21px] mb-3 sm:text-base sm:leading-[24px] sm:mb-4">
              Subscribe for latest updates and offers
            </h3>
            <form onSubmit={handleSubmit} className="box-border caret-transparent">
              <div className="absolute opacity-0 h-0 w-0 overflow-hidden" aria-hidden="true" tabIndex={-1}>
                <input ref={honeypotRef} type="text" name="company" autoComplete="off" tabIndex={-1} />
              </div>
              <div className="box-border caret-transparent grid grid-cols-1 gap-3 mb-3 sm:grid-cols-2">
                <input
                  type="text"
                  id="newsletter-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={100}
                  className="box-border caret-transparent w-full px-4 py-2.5 border border-solid border-white/20 focus:outline-none focus:border-white transition-colors bg-white text-sm"
                  placeholder="Your name"
                />

                <input
                  type="email"
                  id="newsletter-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  maxLength={254}
                  className="box-border caret-transparent w-full px-4 py-2.5 border border-solid border-white/20 focus:outline-none focus:border-white transition-colors bg-white text-sm"
                  placeholder="your@email.com"
                />
              </div>

              {message && (
                <div className={`box-border caret-transparent mb-3 p-2 text-xs ${message.includes('Error') || message.includes('wrong') ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                  {message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="text-white text-sm items-center box-border caret-transparent gap-x-2.5 inline-flex justify-center leading-[16.8px] bg-red-600 px-6 py-2.5 hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full mb-2 touch-manipulation min-h-[44px]"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
              </button>

              <p className="box-border caret-transparent text-xs text-white/60">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
