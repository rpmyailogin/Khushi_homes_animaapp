/*
  # Secure Trigger Configuration and Harden RLS Policies

  1. New Tables
    - `app_config` - Stores application configuration securely
      - `key` (text, primary key) - Configuration key name
      - `value` (text, not null) - Configuration value
      - `created_at` (timestamptz) - When the config was added

  2. Security
    - Enable RLS on `app_config` with NO public policies (only SECURITY DEFINER functions can read)
    - Update `notify_contact_submission` to read config from app_config instead of hardcoded values
    - Tighten projects SELECT policy so anon users can only see published projects

  3. Changes
    - Remove hardcoded secrets from the trigger function
    - Fix projects RLS: anon users should NOT see unpublished projects
*/

-- Create secure config table
CREATE TABLE IF NOT EXISTS app_config (
  key text PRIMARY KEY,
  value text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE app_config ENABLE ROW LEVEL SECURITY;

-- No public policies at all - only SECURITY DEFINER functions can access

-- Insert config values
INSERT INTO app_config (key, value) VALUES
  ('supabase_url', 'https://yeznlyebrnkcmkeyykne.supabase.co'),
  ('supabase_anon_key', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inllem5seWVicm5rY21rZXl5a25lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM4NzE4NjksImV4cCI6MjA3OTQ0Nzg2OX0.1zhPTd4J6lckRPqiiJqL31i6r5c9JNwFy8Ym3eH5a9s')
ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;

-- Recreate the trigger function to use app_config instead of hardcoded values
CREATE OR REPLACE FUNCTION notify_contact_submission()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  config_url text;
  config_key text;
BEGIN
  SELECT value INTO config_url FROM app_config WHERE key = 'supabase_url';
  SELECT value INTO config_key FROM app_config WHERE key = 'supabase_anon_key';

  IF config_url IS NULL OR config_key IS NULL THEN
    RAISE WARNING 'app_config missing supabase_url or supabase_anon_key';
    RETURN NEW;
  END IF;

  PERFORM net.http_post(
    url := config_url || '/functions/v1/notify-contact',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer ' || config_key
    ),
    body := jsonb_build_object('record', row_to_json(NEW))
  );

  RETURN NEW;
END;
$$;

-- Fix projects RLS: anon users should ONLY see published projects
-- Old policy let any authenticated user see all projects
DROP POLICY IF EXISTS "Authenticated users can select projects" ON projects;

CREATE POLICY "Anyone can view published projects"
  ON projects FOR SELECT
  TO anon
  USING (is_published = true);

CREATE POLICY "Active admins can view all projects"
  ON projects FOR SELECT
  TO authenticated
  USING (is_active_admin() OR is_published = true);
