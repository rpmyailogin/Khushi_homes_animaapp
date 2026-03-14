/*
  # Fix Duplicate Policy and Mutable Search Path

  1. **contact_submissions**
     - Drop the old permissive "Authenticated users can view submissions" policy
       which uses USING (true) and conflicts with the stricter
       "Active admins can view contact submissions" policy
     - This removes the security gap where any authenticated user could read
       all contact submissions

  2. **is_active_admin() function**
     - Recreate with an immutable search_path set to 'public'
     - Prevents search_path manipulation attacks on SECURITY DEFINER function
*/

DROP POLICY IF EXISTS "Authenticated users can view submissions" ON contact_submissions;

CREATE OR REPLACE FUNCTION is_active_admin()
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
STABLE
SET search_path = 'public'
AS $$
  SELECT EXISTS (
    SELECT 1 FROM admins
    WHERE user_id = (SELECT auth.uid())
    AND is_active = true
  );
$$;
