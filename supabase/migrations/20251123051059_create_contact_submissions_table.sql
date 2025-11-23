/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Full name of the person submitting the form
      - `email` (text) - Email address for contact
      - `phone` (text, nullable) - Optional phone number
      - `subject` (text) - Subject of the inquiry
      - `message` (text) - Detailed message from the user
      - `project_type` (text) - Type of project (new-home, renovation, etc.)
      - `created_at` (timestamptz) - Timestamp when submission was created
      - `status` (text) - Status of the inquiry (new, contacted, closed)

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for anyone to insert contact submissions (public access)
    - Add policy for authenticated admin users to view all submissions

  3. Notes
    - This table stores all contact form submissions from the website
    - Public users can only insert, not read their own submissions
    - Admin access would require separate authentication setup
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text NOT NULL,
  message text NOT NULL,
  project_type text NOT NULL DEFAULT 'other',
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);
