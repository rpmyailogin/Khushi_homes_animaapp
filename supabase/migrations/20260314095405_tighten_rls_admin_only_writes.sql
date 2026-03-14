/*
  # Tighten RLS Policies - Admin-Only Writes

  ## Summary
  This migration strengthens security by restricting write operations
  on blogs and projects to verified admins only, and adds missing
  DELETE policies for admin-managed tables.

  ## Changes

  1. **blogs** table
     - INSERT, UPDATE, DELETE: now restricted to users who exist in the
       admins table with is_active = true (was: any authenticated user)

  2. **projects** table
     - INSERT, UPDATE, DELETE: same admin-only restriction as blogs

  3. **contact_submissions** table
     - Added DELETE policy for active admins
     - Added SELECT policy for active admins (was: any authenticated)

  4. **newsletter_subscriptions** table
     - Added DELETE policy for active admins
     - Tightened SELECT to active admins only
     - Tightened UPDATE to active admins only

  5. **admins** table
     - Added DELETE policy for super_admin only

  ## Security Notes
  - All write policies now verify the user is an active admin via subquery
  - This prevents non-admin authenticated users from modifying content
  - Super admins can delete admin records (for user management)
*/

-- Helper: check if current user is an active admin
CREATE OR REPLACE FUNCTION is_active_admin()
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1 FROM admins
    WHERE user_id = (select auth.uid())
    AND is_active = true
  );
$$;

-- ============================================================
-- BLOGS: restrict writes to active admins
-- ============================================================

DROP POLICY IF EXISTS "Authenticated users can insert blogs" ON blogs;
DROP POLICY IF EXISTS "Authenticated users can update blogs" ON blogs;
DROP POLICY IF EXISTS "Authenticated users can delete blogs" ON blogs;

CREATE POLICY "Active admins can insert blogs"
  ON blogs FOR INSERT
  TO authenticated
  WITH CHECK (is_active_admin());

CREATE POLICY "Active admins can update blogs"
  ON blogs FOR UPDATE
  TO authenticated
  USING (is_active_admin())
  WITH CHECK (is_active_admin());

CREATE POLICY "Active admins can delete blogs"
  ON blogs FOR DELETE
  TO authenticated
  USING (is_active_admin());

-- ============================================================
-- PROJECTS: restrict writes to active admins
-- ============================================================

DROP POLICY IF EXISTS "Authenticated users can insert projects" ON projects;
DROP POLICY IF EXISTS "Authenticated users can update projects" ON projects;
DROP POLICY IF EXISTS "Authenticated users can delete projects" ON projects;

CREATE POLICY "Active admins can insert projects"
  ON projects FOR INSERT
  TO authenticated
  WITH CHECK (is_active_admin());

CREATE POLICY "Active admins can update projects"
  ON projects FOR UPDATE
  TO authenticated
  USING (is_active_admin())
  WITH CHECK (is_active_admin());

CREATE POLICY "Active admins can delete projects"
  ON projects FOR DELETE
  TO authenticated
  USING (is_active_admin());

-- ============================================================
-- CONTACT SUBMISSIONS: add admin-only SELECT and DELETE
-- ============================================================

DROP POLICY IF EXISTS "Authenticated users can view contact submissions" ON contact_submissions;

CREATE POLICY "Active admins can view contact submissions"
  ON contact_submissions FOR SELECT
  TO authenticated
  USING (is_active_admin());

CREATE POLICY "Active admins can delete contact submissions"
  ON contact_submissions FOR DELETE
  TO authenticated
  USING (is_active_admin());

-- ============================================================
-- NEWSLETTER SUBSCRIPTIONS: tighten SELECT, UPDATE, add DELETE
-- ============================================================

DROP POLICY IF EXISTS "Authenticated users can view subscriptions" ON newsletter_subscriptions;
DROP POLICY IF EXISTS "Authenticated users can update subscriptions" ON newsletter_subscriptions;

CREATE POLICY "Active admins can view subscriptions"
  ON newsletter_subscriptions FOR SELECT
  TO authenticated
  USING (is_active_admin());

CREATE POLICY "Active admins can update subscriptions"
  ON newsletter_subscriptions FOR UPDATE
  TO authenticated
  USING (is_active_admin())
  WITH CHECK (is_active_admin());

CREATE POLICY "Active admins can delete subscriptions"
  ON newsletter_subscriptions FOR DELETE
  TO authenticated
  USING (is_active_admin());

-- ============================================================
-- ADMINS: add DELETE for super_admin only
-- ============================================================

CREATE POLICY "Super admins can delete admin records"
  ON admins FOR DELETE
  TO authenticated
  USING (is_super_admin());
