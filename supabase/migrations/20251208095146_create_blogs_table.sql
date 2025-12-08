/*
  # Create blogs table

  1. New Tables
    - `blogs`
      - `id` (uuid, primary key) - Unique identifier for each blog post
      - `title` (text) - Blog post title
      - `slug` (text, unique) - URL-friendly version of title
      - `excerpt` (text) - Short description/summary of the blog
      - `content` (text) - Full blog post content
      - `featured_image` (text) - URL to the main featured image
      - `author` (text) - Author name
      - `category` (text) - Blog category (tips, guides, news, etc.)
      - `tags` (jsonb) - Array of tags for the blog post
      - `is_featured` (boolean) - Whether to show as featured blog
      - `is_published` (boolean) - Publication status
      - `published_at` (timestamptz) - When the blog was published
      - `created_at` (timestamptz) - When the blog was created
      - `updated_at` (timestamptz) - When the blog was last updated
      - `created_by` (uuid) - Reference to admin user who created it

  2. Security
    - Enable RLS on `blogs` table
    - Add policy for public read access to published blogs
    - Add policy for authenticated admin users to manage blogs

  3. Notes
    - Recommended image size: 1200x675px (16:9 ratio) for featured images
    - Slug must be unique for clean URLs
    - Tags stored as JSONB for flexibility
    - Only published blogs are visible to public
*/

CREATE TABLE IF NOT EXISTS blogs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  featured_image text,
  author text DEFAULT 'Khushi Homes',
  category text DEFAULT 'general',
  tags jsonb DEFAULT '[]'::jsonb,
  is_featured boolean DEFAULT false,
  is_published boolean DEFAULT false,
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  created_by uuid
);

ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view published blogs"
  ON blogs
  FOR SELECT
  TO anon, authenticated
  USING (is_published = true);

CREATE POLICY "Authenticated users can manage blogs"
  ON blogs
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_blogs_slug ON blogs(slug);
CREATE INDEX IF NOT EXISTS idx_blogs_published ON blogs(is_published, published_at DESC);
CREATE INDEX IF NOT EXISTS idx_blogs_featured ON blogs(is_featured, is_published);
