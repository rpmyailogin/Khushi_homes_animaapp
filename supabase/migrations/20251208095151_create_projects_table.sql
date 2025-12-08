/*
  # Create projects table

  1. New Tables
    - `projects`
      - `id` (uuid, primary key) - Unique identifier for each project
      - `title` (text) - Project name/title
      - `slug` (text, unique) - URL-friendly version of title
      - `description` (text) - Detailed project description
      - `short_description` (text) - Brief description for cards
      - `featured_image` (text) - Main project image URL
      - `gallery_images` (jsonb) - Array of additional project images
      - `location` (text) - Project location
      - `project_type` (text) - Type (residential, commercial, renovation, etc.)
      - `completion_date` (date) - When project was completed
      - `area_sqft` (integer) - Project area in square feet
      - `budget_range` (text) - Budget range (optional)
      - `client_name` (text) - Client name (optional)
      - `is_featured` (boolean) - Whether to show as featured project
      - `is_published` (boolean) - Publication status
      - `display_order` (integer) - Order for displaying projects
      - `created_at` (timestamptz) - When the project was created
      - `updated_at` (timestamptz) - When the project was last updated
      - `created_by` (uuid) - Reference to admin user who created it

  2. Security
    - Enable RLS on `projects` table
    - Add policy for public read access to published projects
    - Add policy for authenticated admin users to manage projects

  3. Notes
    - Recommended image sizes:
      - Featured image: 1200x900px (4:3 ratio)
      - Gallery images: 1600x1200px (4:3 ratio) for best quality
    - Slug must be unique for clean URLs
    - Gallery images stored as JSONB array
    - Only published projects are visible to public
*/

CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text NOT NULL,
  short_description text NOT NULL,
  featured_image text,
  gallery_images jsonb DEFAULT '[]'::jsonb,
  location text,
  project_type text DEFAULT 'residential',
  completion_date date,
  area_sqft integer,
  budget_range text,
  client_name text,
  is_featured boolean DEFAULT false,
  is_published boolean DEFAULT false,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  created_by uuid
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view published projects"
  ON projects
  FOR SELECT
  TO anon, authenticated
  USING (is_published = true);

CREATE POLICY "Authenticated users can manage projects"
  ON projects
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_projects_slug ON projects(slug);
CREATE INDEX IF NOT EXISTS idx_projects_published ON projects(is_published, display_order);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(is_featured, is_published);
CREATE INDEX IF NOT EXISTS idx_projects_type ON projects(project_type, is_published);
