// Client-side versions of admin functions for Vercel deployment
import { supabase } from "@/integrations/supabase/client";

// Note: These are simplified client-side versions
// For production, these should be proper API routes with authentication

export const seedAdmin = async () => {
  // This would need to be an API route in production
  console.warn("seedAdmin not available in client-side mode");
  return { success: false, message: "Not available in client mode" };
};

export const getApplications = async () => {
  // This would need proper authentication in production
  const { data, error } = await supabase
    .from("franchise_applications")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return data;
};

export const getBrochures = async () => {
  const { data, error } = await supabase
    .from("brochures")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return data;
};

export const addBrochure = async (brochureData: { file_name: string; file_url: string; uploaded_by: string }) => {
  // Deactivate all existing brochures
  const { error: updateError } = await supabase
    .from("brochures")
    .update({ is_active: false })
    .eq("is_active", true);

  if (updateError) throw new Error(updateError.message);

  const { error } = await supabase.from("brochures").insert({
    file_name: brochureData.file_name,
    file_url: brochureData.file_url,
    uploaded_by: brochureData.uploaded_by,
    is_active: true,
  });

  if (error) throw new Error(error.message);
  return { success: true };
};

export const deleteBrochure = async (brochureId: string, fileUrl: string) => {
  // Extract file name from URL
  const fileName = fileUrl.split('/').pop();
  
  // Delete from storage
  if (fileName) {
    const { error: storageError } = await supabase.storage
      .from("brochures")
      .remove([fileName]);
    
    if (storageError) console.error("Storage delete error:", storageError);
  }

  // Delete from database
  const { error } = await supabase
    .from("brochures")
    .delete()
    .eq("id", brochureId);

  if (error) throw new Error(error.message);
  return { success: true };
};

export const getActiveBrochure = async () => {
  const { data, error } = await supabase
    .from("brochures")
    .select("*")
    .eq("is_active", true)
    .maybeSingle();

  if (error) throw new Error(error.message);
  return data;
};
