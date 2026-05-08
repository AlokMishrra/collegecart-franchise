import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { getApplications, getBrochures, addBrochure, seedAdmin } from "@/lib/admin.functions";
import {
  LogOut, Upload, FileText, Users, Eye, ChevronDown, ChevronUp, RefreshCw,
} from "lucide-react";

export const Route = createFileRoute("/admin/dashboard")({
  component: AdminDashboard,
});

type Application = {
  id: string;
  created_at: string;
  full_name: string;
  phone: string;
  whatsapp: string | null;
  email: string;
  linkedin: string | null;
  college_name: string;
  campus_location: string;
  state: string;
  num_hostels: string | null;
  student_strength: string | null;
  hostel_type: string | null;
  why_collegecart: string | null;
  team_experience: string | null;
  has_delivery_partners: string | null;
  starting_hostel: string | null;
  target_students: string | null;
  outside_delivery_allowed: string | null;
  existing_delivery_apps: string | null;
  launch_timeline: string | null;
  can_manage_daily: string | null;
  college_id_url: string | null;
  government_id_url: string | null;
  campus_photos_url: string | null;
  acknowledged: boolean | null;
};

type Brochure = {
  id: string;
  created_at: string;
  file_name: string;
  file_url: string;
  is_active: boolean;
};

function AdminDashboard() {
  const navigate = useNavigate();
  const [tab, setTab] = useState<"applications" | "brochures">("applications");
  const [applications, setApplications] = useState<Application[]>([]);
  const [brochures, setBrochures] = useState<Brochure[]>([]);
  const [expandedApp, setExpandedApp] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [userId, setUserId] = useState<string>("");
  const [loading, setLoading] = useState(true);

  const checkAuth = useCallback(async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { navigate({ to: "/admin" }); return; }
    setUserId(user.id);

    const { data: roles } = await supabase.from("user_roles").select("role").eq("user_id", user.id);
    if (!roles?.some((r) => r.role === "admin")) {
      await supabase.auth.signOut();
      navigate({ to: "/admin" });
    }
  }, [navigate]);

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const [apps, brocs] = await Promise.all([getApplications(), getBrochures()]);
      setApplications(apps);
      setBrochures(brocs);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    // Seed admin on first load
    seedAdmin().catch(() => {});
    checkAuth().then(loadData);
  }, [checkAuth, loadData]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate({ to: "/admin" });
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);

    const fileName = `${Date.now()}-${file.name}`;
    const { error: uploadError } = await supabase.storage.from("brochures").upload(fileName, file);
    if (uploadError) { alert("Upload failed: " + uploadError.message); setUploading(false); return; }

    const { data: urlData } = supabase.storage.from("brochures").getPublicUrl(fileName);

    await addBrochure({ data: { file_name: file.name, file_url: urlData.publicUrl, uploaded_by: userId } });
    await loadData();
    setUploading(false);
  };

  return (
    <div className="min-h-screen bg-muted">
      {/* Header */}
      <header className="bg-navy text-navy-foreground">
        <div className="container-main flex items-center justify-between h-16">
          <h1 className="font-bold text-lg">CollegeCart Admin</h1>
          <button onClick={handleLogout} className="flex items-center gap-2 text-sm text-white/80 hover:text-white">
            <LogOut size={16} /> Logout
          </button>
        </div>
      </header>

      <div className="container-main py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="card-base text-center">
            <Users size={28} className="text-gold mx-auto mb-2" />
            <p className="text-2xl font-extrabold text-navy">{applications.length}</p>
            <p className="text-sm text-body-muted">Applications</p>
          </div>
          <div className="card-base text-center">
            <FileText size={28} className="text-gold mx-auto mb-2" />
            <p className="text-2xl font-extrabold text-navy">{brochures.length}</p>
            <p className="text-sm text-body-muted">Brochures</p>
          </div>
          <div className="card-base text-center">
            <Eye size={28} className="text-gold mx-auto mb-2" />
            <p className="text-2xl font-extrabold text-navy">{brochures.filter(b => b.is_active).length}</p>
            <p className="text-sm text-body-muted">Active Brochure</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setTab("applications")}
            className={`px-4 py-2 rounded-lg font-bold text-sm ${tab === "applications" ? "bg-navy text-white" : "bg-white text-navy border border-border-light"}`}
          >
            Applications
          </button>
          <button
            onClick={() => setTab("brochures")}
            className={`px-4 py-2 rounded-lg font-bold text-sm ${tab === "brochures" ? "bg-navy text-white" : "bg-white text-navy border border-border-light"}`}
          >
            Brochures
          </button>
          <button onClick={loadData} className="ml-auto px-3 py-2 rounded-lg bg-white border border-border-light text-navy">
            <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
          </button>
        </div>

        {/* Applications Tab */}
        {tab === "applications" && (
          <div className="space-y-3">
            {applications.length === 0 && !loading && (
              <div className="card-base text-center py-12">
                <p className="text-body-muted">No applications yet</p>
              </div>
            )}
            {applications.map((app) => (
              <div key={app.id} className="card-base !p-0 overflow-hidden">
                <button
                  onClick={() => setExpandedApp(expandedApp === app.id ? null : app.id)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <div>
                    <p className="font-bold text-navy">{app.full_name}</p>
                    <p className="text-xs text-body-muted">{app.college_name} — {app.state} — {new Date(app.created_at).toLocaleDateString()}</p>
                  </div>
                  {expandedApp === app.id ? <ChevronUp size={18} className="text-body-muted" /> : <ChevronDown size={18} className="text-body-muted" />}
                </button>
                {expandedApp === app.id && (
                  <div className="px-4 pb-4 border-t border-border-light pt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <Field label="Phone" value={app.phone} />
                    <Field label="WhatsApp" value={app.whatsapp} />
                    <Field label="Email" value={app.email} />
                    <Field label="LinkedIn" value={app.linkedin} />
                    <Field label="College" value={app.college_name} />
                    <Field label="Location" value={app.campus_location} />
                    <Field label="State" value={app.state} />
                    <Field label="Hostels" value={app.num_hostels} />
                    <Field label="Student Strength" value={app.student_strength} />
                    <Field label="Hostel Type" value={app.hostel_type} />
                    <Field label="Why CollegeCart?" value={app.why_collegecart} />
                    <Field label="Team Experience" value={app.team_experience} />
                    <Field label="Has Delivery Partners" value={app.has_delivery_partners} />
                    <Field label="Starting Hostel" value={app.starting_hostel} />
                    <Field label="Target Students" value={app.target_students} />
                    <Field label="Outside Delivery Allowed" value={app.outside_delivery_allowed} />
                    <Field label="Existing Delivery Apps" value={app.existing_delivery_apps} />
                    <Field label="Launch Timeline" value={app.launch_timeline} />
                    <Field label="Can Manage Daily" value={app.can_manage_daily} />
                    {app.college_id_url && <Field label="College ID" value={<a href={app.college_id_url} target="_blank" rel="noreferrer" className="text-gold underline">View</a>} />}
                    {app.government_id_url && <Field label="Government ID" value={<a href={app.government_id_url} target="_blank" rel="noreferrer" className="text-gold underline">View</a>} />}
                    {app.campus_photos_url && <Field label="Campus Photos" value={<a href={app.campus_photos_url} target="_blank" rel="noreferrer" className="text-gold underline">View</a>} />}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Brochures Tab */}
        {tab === "brochures" && (
          <div>
            <div className="card-base mb-4">
              <h3 className="font-bold text-navy mb-3">Upload New Brochure</h3>
              <p className="text-sm text-body-muted mb-3">Upload a PDF brochure. The new brochure will become the active download for visitors.</p>
              <label className="btn-primary inline-flex items-center gap-2 cursor-pointer">
                <Upload size={16} />
                {uploading ? "Uploading..." : "Choose File"}
                <input type="file" accept=".pdf,.doc,.docx" onChange={handleUpload} className="hidden" disabled={uploading} />
              </label>
            </div>
            <div className="space-y-3">
              {brochures.map((b) => (
                <div key={b.id} className="card-base flex items-center justify-between">
                  <div>
                    <p className="font-bold text-navy text-sm">{b.file_name}</p>
                    <p className="text-xs text-body-muted">{new Date(b.created_at).toLocaleDateString()}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    {b.is_active && <span className="text-xs bg-gold/10 text-gold font-bold px-2 py-1 rounded">Active</span>}
                    <a href={b.file_url} target="_blank" rel="noreferrer" className="text-gold text-sm font-bold">Download</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: React.ReactNode }) {
  if (!value) return null;
  return (
    <div>
      <p className="text-body-muted text-xs">{label}</p>
      <p className="text-navy font-medium">{typeof value === "string" ? value : value}</p>
    </div>
  );
}
