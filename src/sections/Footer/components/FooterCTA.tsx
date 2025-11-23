import { useState } from 'react';
import { ContactModal } from '@/components/ContactModal';

export const FooterCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/rest/v1/newsletter_subscriptions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': import.meta.env.VITE_SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Prefer': 'resolution=merge-duplicates'
        },
        body: JSON.stringify({
          email,
          name: name || null,
          preferences: {
            blog_updates: true,
            newsletters: true,
            offers: true
          }
        })
      });

      if (response.ok) {
        setMessage('Successfully subscribed!');
        setEmail('');
        setName('');
      } else if (response.status === 409) {
        setMessage('This email is already subscribed.');
      } else {
        setMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setMessage('Error subscribing. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="items-start border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 box-border caret-transparent flex flex-col justify-between gap-y-10 pb-10 border-b-white/20 border-b md:items-center md:flex-row md:gap-y-[normal] md:pb-[50px]">
        <div className="items-start box-border caret-transparent flex flex-col justify-start max-w-none w-full md:max-w-[42%]">
          <h2 className="text-white text-[26px] box-border caret-transparent leading-[33.8px] mb-[30px] md:text-[40px] md:leading-[52px]">
            Contact us today to discuss your next project
          </h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-white text-sm items-center bg-red-600 box-border caret-transparent gap-x-2.5 flex justify-center leading-[16.8px] max-w-full px-[22px] py-3 hover:bg-red-700 transition-colors"
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

        <div className="items-center box-border caret-transparent gap-x-[22px] flex flex-wrap justify-start gap-y-[22px] md:flex-nowrap md:gap-y-[normal]">
          <a
            href="/projects"
            className="text-white text-sm items-center box-border caret-transparent gap-x-1.5 flex justify-start leading-[21px] max-w-full"
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
            className="text-white text-sm items-center box-border caret-transparent gap-x-1.5 flex justify-start leading-[21px] max-w-full"
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
            className="text-white text-sm items-center box-border caret-transparent gap-x-1.5 flex justify-start leading-[21px] max-w-full"
          >
            <img
              src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c772fbd9d9a04eda41714_ic-basic.svg"
              alt="Icon"
              className="box-border caret-transparent max-h-4 max-w-4 min-h-4 min-w-4"
            />
            <div className="box-border caret-transparent">Services</div>
          </a>
          <a
            href="/blogs"
            className="text-white text-sm items-center box-border caret-transparent gap-x-1.5 flex justify-start leading-[21px] max-w-full"
          >
            <img
              src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c772f4e9c2e629fc2ab34_ic-articles.svg"
              alt="Icon"
              className="box-border caret-transparent max-h-4 max-w-4 min-h-4 min-w-4"
            />
            <div className="box-border caret-transparent">Blogs</div>
          </a>
          <a
            href="/#testimonials"
            className="text-white text-sm items-center box-border caret-transparent gap-x-1.5 flex justify-start leading-[21px] max-w-full"
          >
            <img
              src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c772fcfa7a1910d8d983f_ic-review.svg"
              alt="Icon"
              className="box-border caret-transparent max-h-4 max-w-4 min-h-4 min-w-4"
            />
            <div className="box-border caret-transparent">Reviews</div>
          </a>
          <a
            href="/#contact"
            className="text-white text-sm items-center box-border caret-transparent gap-x-1.5 flex justify-start leading-[21px] max-w-full"
          >
            <img
              src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c772f3b1c191a1b6b7914_ic-faq.svg"
              alt="Icon"
              className="box-border caret-transparent max-h-4 max-w-4 min-h-4 min-w-4"
            />
            <div className="box-border caret-transparent">FAQ</div>
          </a>
        </div>
      </div>

      <div className="items-start border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 box-border caret-transparent flex flex-col justify-between gap-y-10 pt-10 pb-10 border-b-white/20 border-b md:items-start md:flex-row md:gap-x-10 md:gap-y-[normal] md:pb-[50px]">
        <div className="box-border caret-transparent w-full md:max-w-[380px]">
          <h3 className="text-white text-base font-medium box-border caret-transparent leading-[24px] mb-4">
            Subscribe for latest updates and offers
          </h3>
          <form onSubmit={handleSubmit} className="box-border caret-transparent">
            <div className="box-border caret-transparent grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-3 mb-3 md:grid-cols-[1fr_1fr]">
              <input
                type="text"
                id="newsletter-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="box-border caret-transparent w-full px-4 py-2.5 border border-solid border-white/20 focus:outline-none focus:border-white transition-colors bg-white text-sm"
                placeholder="Your name"
              />

              <input
                type="email"
                id="newsletter-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
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
              className="text-white text-sm items-center box-border caret-transparent gap-x-2.5 inline-flex justify-center leading-[16.8px] bg-red-600 px-6 py-2.5 hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full mb-2"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
            </button>

            <p className="box-border caret-transparent text-xs text-white/60">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
