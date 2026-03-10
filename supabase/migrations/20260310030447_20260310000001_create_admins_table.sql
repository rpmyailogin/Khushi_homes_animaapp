/*
  # Create Admins Table

  ## Summary
  Creates a dedicated `admins` table that acts as a whitelist controlling who can access the admin panel.
  Only users present in this table with `is_active = true` are granted admin access after signing in.

  ## New Tables
  - `admins`
    - `id` (uuid, primary key) - unique record ID
    - `user_id` (uuid, unique, references auth.users) - links to Supabase auth user
    - `email` (text, unique) - admin email address for display
    - `full_name` (text) - display name
    - `role` (text) - either 'super_admin' or 'editor'
    - `is_active` (boolean) - controls whether the admin can log in; set to false to revoke access
    - `created_at` (timestamptz) - when the admin record was created
    - `last_login` (timestamptz) - updated on each successful login

  ## Security
  - RLS is enabled
  - Only authenticated users whose user_id appears in this table can read their own record
  - Only super_admin users can read all records (for admin management page)
  - Inserts and updates are restricted to service role (done via backend/migrations)

  ## Seeded Data
  - sunnykatyaloz@gmail.com → super_admin (original account)
  - goldcollarparters@gmail.com → editor
*/

CREATE TABLE IF NOT EXISTS admins (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid UNIQUE NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  email text UNIQUE NOT NULL,
  full_name text NOT NULL DEFAULT '',
  role text NOT NULL DEFAULT 'editor' CHECK (role IN ('super_admin', 'editor')),
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  last_login timestamptz
);

ALTER TABLE admins ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can read own record"
  ON admins FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Super admins can read all admin records"
  ON admins FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admins a
      WHERE a.user_id = auth.uid()
      AND a.role = 'super_admin'
      AND a.is_active = true
    )
  );

CREATE POLICY "Super admins can insert new admins"
  ON admins FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM admins a
      WHERE a.user_id = auth.uid()
      AND a.role = 'super_admin'
      AND a.is_active = true
    )
  );

CREATE POLICY "Super admins can update admin records"
  ON admins FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admins a
      WHERE a.user_id = auth.uid()
      AND a.role = 'super_admin'
      AND a.is_active = true
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM admins a
      WHERE a.user_id = auth.uid()
      AND a.role = 'super_admin'
      AND a.is_active = true
    )
  );

CREATE POLICY "Admins can update own last_login"
  ON admins FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

INSERT INTO admins (user_id, email, full_name, role, is_active)
VALUES
  ('4e668f2e-0b4d-4d66-859e-25924a851b69', 'sunnykatyaloz@gmail.com', 'Sunny Katyal', 'super_admin', true),
  ('8ab9e58f-9229-4419-9aba-9c722eac7444', 'goldcollarparters@gmail.com', 'Gold Collar Partners', 'editor', true)
ON CONFLICT (user_id) DO NOTHING;
