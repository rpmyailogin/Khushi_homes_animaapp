/*
  # Allow First Admin Registration

  ## Summary
  Adds an INSERT policy to the admins table that permits creating the very first
  admin account when no admins exist yet. This enables the initial setup flow
  on the login page without requiring an existing super admin.

  ## Changes
  - New INSERT policy: "Allow first admin registration when table is empty"
    - Only fires when the admins table has zero rows
    - Requires the inserting user's auth.uid() matches the user_id being inserted
    - Once any admin exists, this policy no longer grants access
*/

CREATE POLICY "Allow first admin registration when table is empty"
  ON admins
  FOR INSERT
  TO authenticated
  WITH CHECK (
    auth.uid() = user_id
    AND NOT EXISTS (SELECT 1 FROM admins)
  );
