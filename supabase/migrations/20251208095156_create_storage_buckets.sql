/*
  # Create Storage Buckets for Images

  1. Storage Buckets
    - `blog-images` - For blog post images
    - `project-images` - For project images

  2. Security
    - Public read access for all images
    - Authenticated users can upload images
    - File size limits and type restrictions

  3. Notes
    - Recommended formats: JPEG, PNG, WebP
    - Max file size: 5MB per image
    - Images are publicly accessible once uploaded
*/

INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES 
  ('blog-images', 'blog-images', true, 5242880, ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/webp']),
  ('project-images', 'project-images', true, 5242880, ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/webp'])
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Public can view images"
  ON storage.objects
  FOR SELECT
  TO public
  USING (bucket_id IN ('blog-images', 'project-images'));

CREATE POLICY "Authenticated users can upload images"
  ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id IN ('blog-images', 'project-images'));

CREATE POLICY "Authenticated users can update images"
  ON storage.objects
  FOR UPDATE
  TO authenticated
  USING (bucket_id IN ('blog-images', 'project-images'));

CREATE POLICY "Authenticated users can delete images"
  ON storage.objects
  FOR DELETE
  TO authenticated
  USING (bucket_id IN ('blog-images', 'project-images'));
