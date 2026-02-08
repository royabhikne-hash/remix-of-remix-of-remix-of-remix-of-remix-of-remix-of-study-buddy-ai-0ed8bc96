-- Insert the admin account with bcrypt-hashed password
-- Password: kishanganj85510856708921kne
INSERT INTO public.admins (
  admin_id,
  name,
  password_hash,
  role,
  password_reset_required
) VALUES (
  '56708921eduimprovmentai',
  'Super Admin',
  '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/X4.u/l0.JHhnYHK2q',
  'super_admin',
  false
);