
/*
  # Remove temporary public upload policy

  Drops the temporary public INSERT policy that was created to allow
  uploading the project image via the anon key.
*/
DROP POLICY IF EXISTS "Temporary public upload" ON storage.objects;
