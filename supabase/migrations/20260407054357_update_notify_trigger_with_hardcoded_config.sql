/*
  # Update Contact Notification Trigger with Project Config

  Updates the notify_contact_submission function to use the project's
  Supabase URL and anon key directly, enabling the trigger to call
  the notify-contact edge function when a new contact form is submitted.
*/

CREATE OR REPLACE FUNCTION notify_contact_submission()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  PERFORM net.http_post(
    url := 'https://yeznlyebrnkcmkeyykne.supabase.co/functions/v1/notify-contact',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inllem5seWVicm5rY21rZXl5a25lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM4NzE4NjksImV4cCI6MjA3OTQ0Nzg2OX0.1zhPTd4J6lckRPqiiJqL31i6r5c9JNwFy8Ym3eH5a9s'
    ),
    body := jsonb_build_object('record', row_to_json(NEW))
  );

  RETURN NEW;
END;
$$;
