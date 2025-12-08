import { useState } from 'react';
import { supabase } from '@/lib/supabase';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
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
      const { error } = await supabase
        .from('contact_submissions')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          message: formData.message,
          project_type: formData.projectType,
          status: 'new'
        }]);

      if (error) throw error;

      setSubmitMessage('Thank you! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        projectType: 'new-home'
      });
      setTimeout(() => {
        onClose();
        setSubmitMessage('');
      }, 2000);
    } catch (error: any) {
      setSubmitMessage(error.message || 'Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white box-border caret-transparent max-w-2xl w-full max-h-[90vh] overflow-y-auto relative" onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 bg-white border-b border-solid border-black/10 px-8 py-6 flex items-center justify-between z-10">
          <h2 className="text-black text-xl font-medium box-border caret-transparent leading-[30px]">
            Get Started with Your Project
          </h2>
          <button
            onClick={onClose}
            className="text-black hover:text-red-600 transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8">
          <div className="box-border caret-transparent mb-6">
            <label htmlFor="modal-name" className="text-sm font-medium box-border caret-transparent block mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="modal-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="box-border caret-transparent w-full px-4 py-3 border border-solid border-black/10 focus:outline-none focus:border-black transition-colors"
              placeholder="John Smith"
            />
          </div>

          <div className="box-border caret-transparent mb-6">
            <label htmlFor="modal-email" className="text-sm font-medium box-border caret-transparent block mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="modal-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="box-border caret-transparent w-full px-4 py-3 border border-solid border-black/10 focus:outline-none focus:border-black transition-colors"
              placeholder="john@example.com"
            />
          </div>

          <div className="box-border caret-transparent mb-6">
            <label htmlFor="modal-phone" className="text-sm font-medium box-border caret-transparent block mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="modal-phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="box-border caret-transparent w-full px-4 py-3 border border-solid border-black/10 focus:outline-none focus:border-black transition-colors"
              placeholder="+61 XXX XXX XXX"
            />
          </div>

          <div className="box-border caret-transparent mb-6">
            <label htmlFor="modal-projectType" className="text-sm font-medium box-border caret-transparent block mb-2">
              Project Type *
            </label>
            <select
              id="modal-projectType"
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
            <label htmlFor="modal-message" className="text-sm font-medium box-border caret-transparent block mb-2">
              Message *
            </label>
            <textarea
              id="modal-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="box-border caret-transparent w-full px-4 py-3 border border-solid border-black/10 focus:outline-none focus:border-black transition-colors resize-none"
              placeholder="Tell us about your project..."
            />
          </div>

          {submitMessage && (
            <div className={`box-border caret-transparent mb-6 p-4 ${submitMessage.includes('Error') || submitMessage.includes('wrong') ? 'bg-red-50 text-red-800' : 'bg-green-50 text-green-800'}`}>
              {submitMessage}
            </div>
          )}

          <div className="box-border caret-transparent flex gap-x-4">
            <button
              type="button"
              onClick={onClose}
              className="text-black text-sm box-border caret-transparent flex-1 leading-[16.8px] border px-6 py-4 border-solid border-black/10 hover:bg-gray-100 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="text-white text-sm items-center box-border caret-transparent gap-x-2.5 inline-flex justify-center leading-[16.8px] bg-black px-6 py-4 hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-1"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <img
                src="https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/679c559d1989cb82e96c949e_15fec19f4179bbda8c7cdc30da4795c2_button-arrow.svg"
                alt="Arrow"
                className="box-border caret-transparent max-w-full"
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
