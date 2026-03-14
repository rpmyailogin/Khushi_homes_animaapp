
/*
  # Remove temporary public upload policy for Meadow Crescent image
*/
DROP POLICY IF EXISTS "Temporary public upload meadow" ON storage.objects;
