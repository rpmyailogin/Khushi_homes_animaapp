/*
  # Restore Missing Admin Row

  ## Summary
  Re-inserts the admin record for sunnykatyaloz@gmail.com which was accidentally deleted.

  ## Changes
  - Inserts a row into the `admins` table for the existing Supabase Auth user
    with user_id = 4e668f2e-0b4d-4d66-859e-25924a851b69
  - Role: super_admin
  - is_active: true

  ## Notes
  - The auth.users record still exists; only the admins whitelist row was missing
  - This restores login access for sunnykatyaloz@gmail.com
*/

INSERT INTO admins (user_id, email, full_name, role, is_active)
VALUES (
  '4e668f2e-0b4d-4d66-859e-25924a851b69',
  'sunnykatyaloz@gmail.com',
  'Sunny Katyal',
  'super_admin',
  true
)
ON CONFLICT (user_id) DO UPDATE SET
  is_active = true,
  role = 'super_admin';
