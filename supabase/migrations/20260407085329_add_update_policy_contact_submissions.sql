/*
  # Add UPDATE policy for contact_submissions

  ## Problem
  The contact_submissions table had SELECT, INSERT, and DELETE policies for admins,
  but no UPDATE policy. This meant admin users could not change the status of a
  contact submission (new → contacted → closed) — the update would be silently
  blocked by RLS.

  ## Changes
  - Adds UPDATE policy on contact_submissions restricted to active admins only
  - Admins can update any field (e.g. status) on any submission
*/

CREATE POLICY "Active admins can update contact submissions"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (is_active_admin())
  WITH CHECK (is_active_admin());
