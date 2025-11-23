import { useState } from 'react';

export const NewsletterForm = () => {
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
        setMessage('Successfully subscribed! Thank you for joining our newsletter.');
        setEmail('');
        setName('');
      } else if (response.status === 409) {
        setMessage('This email is already subscribed to our newsletter.');
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
    <div className="bg-white box-border caret-transparent p-8 border border-solid border-black/10">
      <div className="box-border caret-transparent mb-6">
        <h3 className="text-black text-xl font-medium box-border caret-transparent leading-[30px] mb-3">
          Subscribe to Our Newsletter
        </h3>
        <p className="box-border caret-transparent text-sm leading-relaxed">
          Get the latest blog updates, construction tips, and exclusive offers delivered to your inbox.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="box-border caret-transparent">
        <div className="box-border caret-transparent mb-4">
          <label htmlFor="newsletter-name" className="text-sm font-medium box-border caret-transparent block mb-2">
            Name (Optional)
          </label>
          <input
            type="text"
            id="newsletter-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="box-border caret-transparent w-full px-4 py-3 border border-solid border-black/10 focus:outline-none focus:border-black transition-colors"
            placeholder="Your name"
          />
        </div>

        <div className="box-border caret-transparent mb-4">
          <label htmlFor="newsletter-email" className="text-sm font-medium box-border caret-transparent block mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="newsletter-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="box-border caret-transparent w-full px-4 py-3 border border-solid border-black/10 focus:outline-none focus:border-black transition-colors"
            placeholder="your@email.com"
          />
        </div>

        {message && (
          <div className={`box-border caret-transparent mb-4 p-3 text-sm ${message.includes('Error') || message.includes('wrong') ? 'bg-red-50 text-red-800' : 'bg-green-50 text-green-800'}`}>
            {message}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="text-white text-sm items-center box-border caret-transparent gap-x-2.5 inline-flex justify-center leading-[16.8px] bg-black px-6 py-3 hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full"
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
        </button>

        <p className="box-border caret-transparent text-xs mt-3 text-center text-gray-500">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </form>
    </div>
  );
};
