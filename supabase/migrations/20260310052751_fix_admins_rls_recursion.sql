/*
  # Fix infinite recursion in admins table RLS policies

  ## Problem
  The existing "Super admins can read/insert/update" policies query the admins
  table itself to check if the current user is a super admin. This causes infinite
  recursion because the SELECT on admins triggers the SELECT policy again.

  ## Solution
  1. Drop all existing recursive policies
  2. Create a SECURITY DEFINER helper function that checks super admin status
     by bypassing RLS (runs as the definer, not the caller)
  3. Recreate all policies using this helper function
  4. Fix the admins_table_is_empty function to also use SECURITY DEFINER

  ## Changes
  - Replaces admins_table_is_empty with a SECURITY DEFINER version
  - Adds is_super_admin() SECURITY DEFINER helper function
  - Drops and recreates all admins RLS policies without recursion
*/

-- Drop all existing policies on admins table
DROP POLICY IF EXISTS "Admins can read own record" ON admins;
DROP POLICY IF EXISTS "Admins can update own last_login" ON admins;
DROP POLICY IF EXISTS "Allow first admin registration when table is empty" ON admins;
DROP POLICY IF EXISTS "Super admins can insert new admins" ON admins;
DROP POLICY IF EXISTS "Super admins can read all admin records" ON admins;
DROP POLICY IF EXISTS "Super admins can update admin records" ON admins;

-- Recreate admins_table_is_empty as SECURITY DEFINER to bypass RLS
CREATE OR REPLACE FUNCTION admins_table_is_empty()
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT NOT EXISTS (SELECT 1 FROM public.admins LIMIT 1);
$$;

-- Create a SECURITY DEFINER function to check super admin status (avoids recursion)
CREATE OR REPLACE FUNCTION is_super_admin()
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.admins
    WHERE user_id = auth.uid()
      AND role = 'super_admin'
      AND is_active = true
  );
$$;

-- SELECT: own record
CREATE POLICY "Admins can read own record"
  ON admins FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- SELECT: super admins can read all records (uses SECURITY DEFINER function)
CREATE POLICY "Super admins can read all admin records"
  ON admins FOR SELECT
  TO authenticated
  USING (is_super_admin());

-- INSERT: first admin when table is empty
CREATE POLICY "Allow first admin registration when table is empty"
  ON admins FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id AND admins_table_is_empty());

-- INSERT: super admins can add more admins
CREATE POLICY "Super admins can insert new admins"
  ON admins FOR INSERT
  TO authenticated
  WITH CHECK (is_super_admin());

-- UPDATE: own record (for last_login etc.)
CREATE POLICY "Admins can update own last_login"
  ON admins FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- UPDATE: super admins can update any record
CREATE POLICY "Super admins can update admin records"
  ON admins FOR UPDATE
  TO authenticated
  USING (is_super_admin())
  WITH CHECK (is_super_admin());
