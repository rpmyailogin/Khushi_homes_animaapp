
/*
  # Temporarily allow public uploads to project-images bucket
  Adds a public INSERT policy for uploading the Meadow Crescent project image.
*/
CREATE POLICY "Temporary public upload meadow"
  ON storage.objects
  FOR INSERT
  TO public
  WITH CHECK (bucket_id = 'project-images');
