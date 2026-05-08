-- Add government_id_type column to franchise_applications table
ALTER TABLE public.franchise_applications 
ADD COLUMN government_id_type TEXT;
