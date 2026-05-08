-- Add DELETE policy for brochures so admins can delete them
CREATE POLICY "Admins can delete brochures"
  ON public.brochures FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- Add DELETE policy for storage objects so admins can delete brochure files
CREATE POLICY "Admins can delete brochures" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'brochures' AND public.has_role(auth.uid(), 'admin'));

-- Also add SELECT policy for admins to see all brochures (not just active ones)
CREATE POLICY "Admins can read all brochures"
  ON public.brochures FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));
