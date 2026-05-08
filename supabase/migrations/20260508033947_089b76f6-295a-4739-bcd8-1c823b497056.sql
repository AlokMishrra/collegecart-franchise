
-- Create franchise applications table
CREATE TABLE public.franchise_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  whatsapp TEXT,
  email TEXT NOT NULL,
  linkedin TEXT,
  college_name TEXT NOT NULL,
  campus_location TEXT NOT NULL,
  state TEXT NOT NULL,
  num_hostels TEXT,
  student_strength TEXT,
  hostel_type TEXT,
  why_collegecart TEXT,
  team_experience TEXT,
  has_delivery_partners TEXT,
  starting_hostel TEXT,
  target_students TEXT,
  outside_delivery_allowed TEXT,
  existing_delivery_apps TEXT,
  launch_timeline TEXT,
  can_manage_daily TEXT,
  college_id_url TEXT,
  government_id_url TEXT,
  campus_photos_url TEXT,
  acknowledged BOOLEAN DEFAULT false
);

-- Create brochures table
CREATE TABLE public.brochures (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  file_name TEXT NOT NULL,
  file_url TEXT NOT NULL,
  uploaded_by UUID REFERENCES auth.users(id),
  is_active BOOLEAN NOT NULL DEFAULT true
);

-- Create user_roles table for admin
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.franchise_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.brochures ENABLE ROW LEVEL SECURITY;

-- Security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role
  )
$$;

-- RLS: Anyone can insert franchise applications (public form)
CREATE POLICY "Anyone can submit franchise application"
  ON public.franchise_applications FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- RLS: Only admins can view franchise applications
CREATE POLICY "Admins can view franchise applications"
  ON public.franchise_applications FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- RLS: Anyone can read active brochures
CREATE POLICY "Anyone can read active brochures"
  ON public.brochures FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

-- RLS: Only admins can insert/update brochures
CREATE POLICY "Admins can manage brochures"
  ON public.brochures FOR INSERT
  TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update brochures"
  ON public.brochures FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- RLS: user_roles - admins can read
CREATE POLICY "Users can read own roles"
  ON public.user_roles FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

-- Create storage bucket for brochures
INSERT INTO storage.buckets (id, name, public) VALUES ('brochures', 'brochures', true);

-- Storage policies
CREATE POLICY "Anyone can read brochures" ON storage.objects FOR SELECT TO anon, authenticated USING (bucket_id = 'brochures');
CREATE POLICY "Admins can upload brochures" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'brochures' AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can update brochures" ON storage.objects FOR UPDATE TO authenticated USING (bucket_id = 'brochures' AND public.has_role(auth.uid(), 'admin'));

-- Create storage bucket for application uploads
INSERT INTO storage.buckets (id, name, public) VALUES ('application-uploads', 'application-uploads', true);
CREATE POLICY "Anyone can upload application files" ON storage.objects FOR INSERT TO anon, authenticated WITH CHECK (bucket_id = 'application-uploads');
CREATE POLICY "Anyone can read application files" ON storage.objects FOR SELECT TO anon, authenticated USING (bucket_id = 'application-uploads');
