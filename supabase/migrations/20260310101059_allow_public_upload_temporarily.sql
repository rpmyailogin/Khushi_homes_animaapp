
/*
  # Temporarily allow public uploads to project-images bucket

  Adds a public INSERT policy so we can upload the project image via the anon key.
  This will be removed in the next migration.
*/
CREATE POLICY "Temporary public upload"
  ON storage.objects
  FOR INSERT
  TO public
  WITH CHECK (bucket_id = 'project-images');
