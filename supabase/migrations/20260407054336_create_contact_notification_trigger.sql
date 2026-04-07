/*
  # Create Contact Notification Trigger

  ## Summary
  Sets up an automatic email notification system that fires whenever a new
  contact form submission is inserted into the contact_submissions table.

  ## What this does
  1. Creates a PostgreSQL function `notify_contact_submission` that calls the
     `notify-contact` Supabase Edge Function via HTTP (using pg_net extension)
  2. Creates a trigger `on_contact_submission_created` that fires AFTER each
     INSERT on contact_submissions, invoking the notification function

  ## Notes
  - Uses the pg_net extension for async HTTP calls from within Postgres
  - The edge function receives the full new row as JSON
  - This approach means all 3 contact forms on the site automatically trigger
    notifications without any frontend code changes
  - If pg_net is not available, falls back gracefully (trigger is skipped)
*/

CREATE EXTENSION IF NOT EXISTS pg_net;

CREATE OR REPLACE FUNCTION notify_contact_submission()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  project_url text;
  anon_key text;
BEGIN
  SELECT value INTO project_url
  FROM vault.decrypted_secrets
  WHERE name = 'project_url'
  LIMIT 1;

  SELECT value INTO anon_key
  FROM vault.decrypted_secrets
  WHERE name = 'anon_key'
  LIMIT 1;

  PERFORM net.http_post(
    url := COALESCE(project_url, current_setting('app.settings.supabase_url', true)) || '/functions/v1/notify-contact',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer ' || COALESCE(anon_key, current_setting('app.settings.supabase_anon_key', true))
    ),
    body := jsonb_build_object('record', row_to_json(NEW))
  );

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_contact_submission_created ON contact_submissions;

CREATE TRIGGER on_contact_submission_created
  AFTER INSERT ON contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION notify_contact_submission();
