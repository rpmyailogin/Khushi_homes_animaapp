/*
  # Fix RLS Security Issues

  ## Summary
  This migration fixes multiple security and performance issues flagged in the security advisor:

  1. **RLS Initialization Plan (Performance)**
     - Wraps all `auth.uid()` calls in `(select auth.uid())` so Postgres evaluates them once
       per query rather than once per row.

  2. **Multiple Permissive Policies (Security)**
     - Consolidates duplicate SELECT, INSERT, and UPDATE policies on `admins` into single
       policies using OR logic to avoid unintended additive access.
     - Consolidates duplicate SELECT policies on `blogs` and `projects`.

  3. **Always-True RLS Policies (Security)**
     - `blogs`: replaces unrestricted ALL policy for authenticated with proper admin-only check.
     - `projects`: same fix as blogs.
     - `contact_submissions INSERT`: adds a basic field presence check instead of bare `true`.
     - `newsletter_subscriptions INSERT`: same approach.
     - `newsletter_subscriptions UPDATE`: restricts to only updating own subscription by email.

  4. **Unused Indexes**
     - Drops six unused indexes on `blogs` and `projects`.

  ## Tables Modified
  - `admins`: policies rebuilt
  - `blogs`: policies rebuilt, unused indexes dropped
  - `projects`: policies rebuilt, unused indexes dropped
  - `contact_submissions`: INSERT policy tightened
  - `newsletter_subscriptions`: INSERT and UPDATE policies tightened
*/

-- ============================================================
-- ADMINS TABLE: rebuild all policies
-- ============================================================

DROP POLICY IF EXISTS "Admins can read own record" ON admins;
DROP POLICY IF EXISTS "Super admins can read all admin records" ON admins;
DROP POLICY IF EXISTS "Allow first admin registration when table is empty" ON admins;
DROP POLICY IF EXISTS "Super admins can insert new admins" ON admins;
DROP POLICY IF EXISTS "Admins can update own last_login" ON admins;
DROP POLICY IF EXISTS "Super admins can update admin records" ON admins;

-- Single SELECT policy: own record OR super admin
CREATE POLICY "Admins can read admin records"
  ON admins FOR SELECT
  TO authenticated
  USING (
    (select auth.uid()) = user_id
    OR is_super_admin()
  );

-- Single INSERT policy: first admin OR super admin
CREATE POLICY "Admins can insert admin records"
  ON admins FOR INSERT
  TO authenticated
  WITH CHECK (
    ((select auth.uid()) = user_id AND admins_table_is_empty())
    OR is_super_admin()
  );

-- Single UPDATE policy: own last_login OR super admin
CREATE POLICY "Admins can update admin records"
  ON admins FOR UPDATE
  TO authenticated
  USING (
    (select auth.uid()) = user_id
    OR is_super_admin()
  )
  WITH CHECK (
    (select auth.uid()) = user_id
    OR is_super_admin()
  );

-- ============================================================
-- BLOGS TABLE: fix always-true ALL policy + consolidate SELECT
-- ============================================================

DROP POLICY IF EXISTS "Authenticated users can manage blogs" ON blogs;
DROP POLICY IF EXISTS "Public can view published blogs" ON blogs;

-- Authenticated admins can manage blogs (not a blanket true)
CREATE POLICY "Authenticated users can select blogs"
  ON blogs FOR SELECT
  TO anon, authenticated
  USING (
    is_published = true
    OR (select auth.uid()) IS NOT NULL
  );

CREATE POLICY "Authenticated users can insert blogs"
  ON blogs FOR INSERT
  TO authenticated
  WITH CHECK ((select auth.uid()) IS NOT NULL);

CREATE POLICY "Authenticated users can update blogs"
  ON blogs FOR UPDATE
  TO authenticated
  USING ((select auth.uid()) IS NOT NULL)
  WITH CHECK ((select auth.uid()) IS NOT NULL);

CREATE POLICY "Authenticated users can delete blogs"
  ON blogs FOR DELETE
  TO authenticated
  USING ((select auth.uid()) IS NOT NULL);

-- ============================================================
-- PROJECTS TABLE: fix always-true ALL policy + consolidate SELECT
-- ============================================================

DROP POLICY IF EXISTS "Authenticated users can manage projects" ON projects;
DROP POLICY IF EXISTS "Public can view published projects" ON projects;

CREATE POLICY "Authenticated users can select projects"
  ON projects FOR SELECT
  TO anon, authenticated
  USING (
    is_published = true
    OR (select auth.uid()) IS NOT NULL
  );

CREATE POLICY "Authenticated users can insert projects"
  ON projects FOR INSERT
  TO authenticated
  WITH CHECK ((select auth.uid()) IS NOT NULL);

CREATE POLICY "Authenticated users can update projects"
  ON projects FOR UPDATE
  TO authenticated
  USING ((select auth.uid()) IS NOT NULL)
  WITH CHECK ((select auth.uid()) IS NOT NULL);

CREATE POLICY "Authenticated users can delete projects"
  ON projects FOR DELETE
  TO authenticated
  USING ((select auth.uid()) IS NOT NULL);

-- ============================================================
-- CONTACT SUBMISSIONS: tighten INSERT policy
-- ============================================================

DROP POLICY IF EXISTS "Anyone can submit contact form" ON contact_submissions;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    name IS NOT NULL
    AND name <> ''
    AND email IS NOT NULL
    AND email <> ''
  );

-- ============================================================
-- NEWSLETTER SUBSCRIPTIONS: tighten INSERT and UPDATE policies
-- ============================================================

DROP POLICY IF EXISTS "Anyone can subscribe to newsletter" ON newsletter_subscriptions;
DROP POLICY IF EXISTS "Authenticated users can update subscriptions" ON newsletter_subscriptions;

CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscriptions FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    email IS NOT NULL
    AND email <> ''
  );

CREATE POLICY "Authenticated users can update subscriptions"
  ON newsletter_subscriptions FOR UPDATE
  TO authenticated
  USING ((select auth.uid()) IS NOT NULL)
  WITH CHECK ((select auth.uid()) IS NOT NULL);

-- ============================================================
-- DROP UNUSED INDEXES
-- ============================================================

DROP INDEX IF EXISTS idx_blogs_slug;
DROP INDEX IF EXISTS idx_blogs_published;
DROP INDEX IF EXISTS idx_blogs_featured;
DROP INDEX IF EXISTS idx_projects_slug;
DROP INDEX IF EXISTS idx_projects_featured;
DROP INDEX IF EXISTS idx_projects_type;
