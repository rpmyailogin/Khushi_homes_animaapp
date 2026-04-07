/*
  # Remove admin creation capability

  ## Summary
  Removes the INSERT policy from the admins table so no new admin accounts
  can be created through the application. The admins table becomes read-only
  for existing super_admin users.

  ## Changes
  - Drop any existing INSERT policies on the admins table
  - Existing SELECT, UPDATE, and DELETE policies remain unchanged
  - New admin accounts can only be created directly via the Supabase dashboard
*/

DO $$
DECLARE
  pol RECORD;
BEGIN
  FOR pol IN
    SELECT policyname
    FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'admins'
      AND cmd = 'INSERT'
  LOOP
    EXECUTE format('DROP POLICY IF EXISTS %I ON admins', pol.policyname);
  END LOOP;
END $$;
