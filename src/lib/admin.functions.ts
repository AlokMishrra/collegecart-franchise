import { createServerFn } from "@tanstack/react-start";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

export const seedAdmin = createServerFn({ method: "POST" }).handler(async () => {
  const email = "alok@collegecarts.in";
  const password = "alok0909";

  // Check if user already exists
  const { data: existingUsers } = await supabaseAdmin.auth.admin.listUsers();
  const existing = existingUsers?.users?.find((u) => u.email === email);

  if (existing) {
    // Ensure role exists
    const { data: role } = await supabaseAdmin
      .from("user_roles")
      .select("id")
      .eq("user_id", existing.id)
      .eq("role", "admin")
      .maybeSingle();

    if (!role) {
      await supabaseAdmin.from("user_roles").insert({ user_id: existing.id, role: "admin" });
    }
    return { success: true, message: "Admin already exists" };
  }

  // Create user
  const { data: newUser, error } = await supabaseAdmin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  });

  if (error) throw new Error(error.message);

  // Assign admin role
  await supabaseAdmin.from("user_roles").insert({
    user_id: newUser.user.id,
    role: "admin",
  });

  return { success: true, message: "Admin created" };
});

export const getApplications = createServerFn({ method: "GET" }).handler(async () => {
  const { data, error } = await supabaseAdmin
    .from("franchise_applications")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return data;
});

export const getBrochures = createServerFn({ method: "GET" }).handler(async () => {
  const { data, error } = await supabaseAdmin
    .from("brochures")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return data;
});

export const addBrochure = createServerFn({ method: "POST" })
  .inputValidator((data: { file_name: string; file_url: string; uploaded_by: string }) => data)
  .handler(async ({ data }) => {
    // Deactivate all existing brochures
    await supabaseAdmin.from("brochures").update({ is_active: false }).eq("is_active", true);

    const { error } = await supabaseAdmin.from("brochures").insert({
      file_name: data.file_name,
      file_url: data.file_url,
      uploaded_by: data.uploaded_by,
      is_active: true,
    });

    if (error) throw new Error(error.message);
    return { success: true };
  });

export const getActiveBrochure = createServerFn({ method: "GET" }).handler(async () => {
  const { data, error } = await supabaseAdmin
    .from("brochures")
    .select("*")
    .eq("is_active", true)
    .maybeSingle();

  if (error) throw new Error(error.message);
  return data;
});
