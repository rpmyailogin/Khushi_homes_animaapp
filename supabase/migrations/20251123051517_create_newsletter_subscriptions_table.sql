/*
  # Create newsletter subscriptions table

  1. New Tables
    - `newsletter_subscriptions`
      - `id` (uuid, primary key) - Unique identifier for each subscription
      - `email` (text, unique) - Email address of the subscriber
      - `name` (text, nullable) - Optional name of the subscriber
      - `subscribed_at` (timestamptz) - Timestamp when user subscribed
      - `is_active` (boolean) - Whether subscription is active
      - `preferences` (jsonb) - JSON object for subscription preferences (blog updates, offers, etc.)

  2. Security
    - Enable RLS on `newsletter_subscriptions` table
    - Add policy for anyone to subscribe (public access)
    - Add policy for authenticated admin users to view all subscriptions

  3. Notes
    - Email must be unique to prevent duplicate subscriptions
    - is_active defaults to true
    - preferences stores what the user wants to receive
*/

CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  name text,
  subscribed_at timestamptz DEFAULT now(),
  is_active boolean DEFAULT true,
  preferences jsonb DEFAULT '{"blog_updates": true, "newsletters": true, "offers": true}'::jsonb
);

ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscriptions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view subscriptions"
  ON newsletter_subscriptions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update subscriptions"
  ON newsletter_subscriptions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
