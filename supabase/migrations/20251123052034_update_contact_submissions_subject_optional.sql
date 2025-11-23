/*
  # Update contact submissions table - Make subject field optional

  1. Changes
    - Make the `subject` column nullable in the `contact_submissions` table
    - This allows users to submit forms without requiring a subject field

  2. Notes
    - Existing data remains unchanged
    - Forms will no longer require subject input
*/

DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'subject'
  ) THEN
    ALTER TABLE contact_submissions ALTER COLUMN subject DROP NOT NULL;
  END IF;
END $$;
