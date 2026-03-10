/*
  # Add home_size_sqm column to projects

  1. Changes
    - Add `home_size_sqm` (integer) column — represents the built home/floor size in square metres
    - This is separate from `land_size_sqm` (land area)
    - Nullable for backward compatibility

  2. Notes
    - The existing `area_sqft` column remains for backward compatibility but the admin
      form will now use `home_size_sqm` directly to avoid unit conversion errors.
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'projects' AND column_name = 'home_size_sqm'
  ) THEN
    ALTER TABLE projects ADD COLUMN home_size_sqm integer;
  END IF;
END $$;
