/*
  # Fix First Admin Registration Policy - Remove Infinite Recursion

  ## Summary
  The previous policy caused infinite recursion because it queried the admins
  table from within an admins INSERT policy. This migration:

  1. Drops the recursive policy
  2. Creates a security definer function that safely checks if admins table is empty
  3. Re-creates the INSERT policy using that function to avoid recursion
*/

DROP POLICY IF EXISTS "Allow first admin registration when table is empty" ON admins;

CREATE OR REPLACE FUNCTION public.admins_table_is_empty()
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT NOT EXISTS (SELECT 1 FROM public.admins LIMIT 1);
$$;

CREATE POLICY "Allow first admin registration when table is empty"
  ON admins
  FOR INSERT
  TO authenticated
  WITH CHECK (
    auth.uid() = user_id
    AND public.admins_table_is_empty()
  );
