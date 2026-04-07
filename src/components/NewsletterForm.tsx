import { useState, useRef } from 'react';
import { supabase } from '@/lib/supabase';
import { isValidEmail, checkRateLimit } from '@/lib/security';

export const NewsletterForm = () => {
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
    if (!checkRateLimit('newsletter-form', 3, 600000)) {
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
          setMessage('This email is already subscribed to our newsletter.');
        } else {
          throw error;
        }
      } else {
        setMessage('Successfully subscribed! Thank you for joining our newsletter.');
        setEmail('');
        setName('');
      }
    } catch {
      setMessage('Error subscribing. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="box-border caret-transparent">
      <div className="box-border caret-transparent mb-6">
        <h3 className="text-white text-xl font-medium box-border caret-transparent leading-[30px] mb-3">
          Subscribe to Our Newsletter
        </h3>
        <p className="box-border caret-transparent text-sm leading-relaxed text-white/80">
          Get the latest blog updates, construction tips, and exclusive offers delivered to your inbox.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="box-border caret-transparent">
        <div className="absolute opacity-0 h-0 w-0 overflow-hidden" aria-hidden="true" tabIndex={-1}>
          <input ref={honeypotRef} type="text" name="company" autoComplete="off" tabIndex={-1} />
        </div>
        <div className="box-border caret-transparent grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-4 mb-4 md:grid-cols-[1fr_1fr]">
          <div className="box-border caret-transparent">
            <label htmlFor="newsletter-name" className="text-sm font-medium box-border caret-transparent block mb-2 text-white">
              Name (Optional)
            </label>
            <input
              type="text"
              id="newsletter-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={100}
              className="box-border w-full px-4 py-3 border border-solid border-white/20 focus:outline-none focus:border-white transition-colors bg-white"
              placeholder="Your name"
            />
          </div>

          <div className="box-border caret-transparent">
            <label htmlFor="newsletter-email" className="text-sm font-medium box-border caret-transparent block mb-2 text-white">
              Email Address *
            </label>
            <input
              type="email"
              id="newsletter-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              maxLength={254}
              className="box-border w-full px-4 py-3 border border-solid border-white/20 focus:outline-none focus:border-white transition-colors bg-white"
              placeholder="your@email.com"
            />
          </div>
        </div>

        {message && (
          <div className={`box-border caret-transparent mb-4 p-3 text-sm ${message.includes('Error') || message.includes('valid') || message.includes('Too many') ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
            {message}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="text-white text-sm items-center box-border caret-transparent gap-x-2.5 inline-flex justify-center leading-[16.8px] bg-red-600 px-6 py-3 hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full"
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
        </button>

        <p className="box-border caret-transparent text-xs mt-3 text-center text-white/60">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </form>
    </div>
  );
};
