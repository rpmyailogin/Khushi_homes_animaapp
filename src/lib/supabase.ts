import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type ContactSubmission = {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  project_type?: string;
};

export type NewsletterSubscription = {
  email: string;
  name?: string;
  preferences?: {
    blog_updates: boolean;
    newsletters: boolean;
    offers: boolean;
  };
};
