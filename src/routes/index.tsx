import { createFileRoute } from '@tanstack/react-router'
// import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ShoppingBag, TrendingUp, Shield, Headphones, Download,
  Smartphone, Truck, CheckCircle, Smile, Clock, Users, ArrowRight,
  BarChart3, Building2, Banknote, Percent, ArrowUpRight,
  Gift, Coins,
  Star, Quote,
  Plus, Minus,
  Phone, Mail, Globe, Upload, Rocket,
  GraduationCap, UserCheck, Home as HomeIcon, Megaphone, Briefcase, Heart,
  DollarSign, Package, Handshake, BarChart, Zap, BookOpen,
  Layers, Settings, Target, Award,
} from "lucide-react";
import Layout from "@/components/Layout";
import { useScrollReveal } from "@/components/useScrollReveal";
import { supabase } from "@/integrations/supabase/client";
import { getActiveBrochure } from "@/lib/admin.functions";
import heroImg from "@/assets/hero-student.jpg";
import aboutImg from "@/assets/about-team.jpg";
import faqImg from "@/assets/faq-illustration.jpg";

/* Commented out for Vercel deployment
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CollegeCart Franchise Opportunity | Start Campus Delivery Business Without Investment" },
      { name: "description", content: "Start your own CollegeCart franchise in your college campus with zero investment. Build a profitable student delivery business and earn up to ₹1 lakh/month with full support, technology, and operations from CollegeCart." },
      { name: "keywords", content: "college franchise opportunity, student startup business, campus delivery franchise, hostel delivery business, student business opportunity, zero investment franchise india, campus startup idea, earn money in college, college delivery app, hostel grocery delivery, college entrepreneurship, student franchise model, collegecart franchise" },
      { property: "og:title", content: "CollegeCart Franchise Opportunity | Start Campus Delivery Business Without Investment" },
      { property: "og:description", content: "Start your own CollegeCart franchise in your college campus with zero investment. Build a profitable student delivery business and earn up to ₹1 lakh/month." },
    ],
  }),
  component: HomePage,
});
*/

/* ─── Section: Hero ─── */
function HeroSection() {
  const ref = useScrollReveal();
  const [brochureUrl, setBrochureUrl] = useState<string | null>(null);

  useEffect(() => {
    getActiveBrochure().then((b) => {
      if (b) setBrochureUrl(b.file_url);
    }).catch(() => {});
  }, []);

  return (
    <section id="home" className="bg-background">
      <div ref={ref} className="container-main fade-in-up py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-[60%]">
          <span className="inline-block bg-navy/10 text-navy text-xs font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-wide">
            Zero Investment Franchise Opportunity
          </span>
          <h1 className="text-4xl lg:text-5xl xl:text-[3.4rem] font-extrabold text-navy leading-tight">
            Start Your Own Campus<br />Business With<br />CollegeCart
          </h1>
          <p className="mt-5 text-body-muted text-base leading-relaxed max-w-lg">
            Build a profitable student delivery business inside your college campus with CollegeCart. No franchise fee, no royalty, no experience needed. Earn up to ₹1,00,000/month by solving daily student needs through fast hostel delivery.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm text-navy font-medium">
            <span className="flex items-center gap-1"><CheckCircle size={16} className="text-gold" /> Zero Investment</span>
            <span className="flex items-center gap-1"><CheckCircle size={16} className="text-gold" /> 100% Campus Profit</span>
            <span className="flex items-center gap-1"><CheckCircle size={16} className="text-gold" /> Full Operational Support</span>
            <span className="flex items-center gap-1"><CheckCircle size={16} className="text-gold" /> Student-Led Business Model</span>
          </div>
          <div className="mt-7 flex flex-wrap gap-4">
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }} className="btn-primary">Apply For Free Franchise</a>
            {brochureUrl ? (
              <a href={brochureUrl} target="_blank" rel="noreferrer" className="btn-secondary inline-flex items-center gap-2">
                <Download size={16} /> Download Franchise Brochure
              </a>
            ) : (
              <button className="btn-secondary inline-flex items-center gap-2" disabled>
                <Download size={16} /> Download Franchise Brochure
              </button>
            )}
          </div>
        </div>
        <div className="lg:w-[40%]">
          <img src={heroImg} alt="CollegeCart delivery partner with grocery bags" className="rounded-2xl shadow-lg w-full max-w-md mx-auto" width={640} height={720} />
        </div>
      </div>
    </section>
  );
}

/* ─── Stats Bar ─── */
const heroStats = [
  { icon: ShoppingBag, title: "5+", sub: "Active Campuses" },
  { icon: Users, title: "5000+", sub: "Students Served" },
  { icon: Truck, title: "300+", sub: "Campus Delivery Partners" },
  { icon: Star, title: "4.8★", sub: "Student Satisfaction Rating" },
];

function StatsBar() {
  const ref = useScrollReveal();
  return (
    <section ref={ref} className="bg-navy fade-in-up">
      <div className="container-main py-8">
        <p className="text-center text-white/60 text-xs uppercase tracking-widest mb-6">Campus Business Built For Students</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {heroStats.map((s) => (
            <div key={s.sub} className="flex flex-col items-center text-navy-foreground text-center">
              <s.icon size={32} className="text-gold mb-2" />
              <p className="font-extrabold text-2xl lg:text-3xl mb-1">{s.title}</p>
              <p className="text-xs lg:text-sm text-white/70 leading-tight">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section: About ─── */
function AboutSection() {
  const ref = useScrollReveal();
  return (
    <section id="about" className="section-padding bg-background">
      <div ref={ref} className="container-main fade-in-up">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <p className="section-label mb-3">ABOUT US</p>
            <h2 className="section-heading mb-6">Revolutionizing Campus Convenience</h2>
            <p className="text-body-muted leading-relaxed mb-4">
              CollegeCart is India's growing campus-first delivery platform designed exclusively for hostel students and university campuses.
            </p>
            <p className="text-body-muted leading-relaxed mb-4">
              We help students get snacks, groceries, stationery, personal care products, medicines, and daily essentials delivered directly to their hostel rooms in minutes.
            </p>
            <p className="text-body-muted leading-relaxed font-semibold mb-3">Our mission is simple:</p>
            <ul className="space-y-2 text-sm text-body-muted">
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-gold mt-0.5 shrink-0" /> Make campus life easier</li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-gold mt-0.5 shrink-0" /> Create student entrepreneurship opportunities</li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-gold mt-0.5 shrink-0" /> Build hyperlocal delivery networks inside campuses</li>
            </ul>
            <p className="text-body-muted leading-relaxed mt-4">
              Unlike traditional delivery apps, CollegeCart operates specifically for college ecosystems — making deliveries faster, safer, and more student-friendly.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img src={aboutImg} alt="CollegeCart team on campus" className="rounded-2xl shadow-lg w-full" width={640} height={512} loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section: Why Us ─── */
const whyFeatures = [
  { icon: Banknote, title: "Zero Investment Model", desc: "No franchise fee. No royalty charges. Start your campus business without heavy capital." },
  { icon: TrendingUp, title: "Earn Up To ₹1 Lakh/Month", desc: "Generate recurring monthly income through hostel orders and repeat customers." },
  { icon: Building2, title: "Exclusive Campus Opportunity", desc: "Operate inside your campus and build a student-focused delivery ecosystem." },
  { icon: ShoppingBag, title: "Proven Demand", desc: "Students order essentials every day — snacks, groceries, stationery, beverages, and more." },
  { icon: Headphones, title: "Full Training & Support", desc: "Operations, Marketing, Team building, Delivery setup, Technology usage." },
  { icon: ArrowUpRight, title: "Scalable Business", desc: "Start with one hostel and expand across your campus or multiple campuses." },
];

function WhyUsSection() {
  const ref = useScrollReveal();
  return (
    <section id="why-us" className="section-padding bg-muted">
      <div ref={ref} className="container-main fade-in-up text-center">
        <p className="section-label mb-3">WHY COLLEGECART</p>
        <h2 className="section-heading mb-12">Why Start A CollegeCart Franchise?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyFeatures.map((f) => (
            <div key={f.title} className="card-base text-left">
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                <f.icon size={24} className="text-gold" />
              </div>
              <h3 className="font-bold text-navy text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-body-muted leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section: How It Works ─── */
const howSteps = [
  { icon: Smartphone, num: "1", title: "Apply", desc: "Submit your franchise application online." },
  { icon: Shield, num: "2", title: "Verification", desc: "Our team reviews your campus and connects with you." },
  { icon: BookOpen, num: "3", title: "Onboarding", desc: "Get trained on operations, app usage, and order management." },
  { icon: Rocket, num: "4", title: "Launch", desc: "Start accepting student orders on your campus." },
  { icon: TrendingUp, num: "5", title: "Grow", desc: "Expand hostel coverage, increase delivery volume, and scale earnings." },
];
const howHighlights = [
  { icon: Clock, title: "20-30 mins", sub: "Average Delivery Time" },
  { icon: Shield, title: "Inside Campus", sub: "Safe & Secure Delivery" },
  { icon: Users, title: "Trusted By", sub: "Thousands of Students" },
];

function HowItWorksSection() {
  const ref = useScrollReveal();
  const barRef = useScrollReveal();
  return (
    <>
      <section id="how-it-works" className="section-padding bg-background">
        <div ref={ref} className="container-main fade-in-up text-center">
          <p className="section-label mb-3">HOW IT WORKS</p>
          <h2 className="section-heading mb-12">Simple Business Model</h2>
          <div className="flex flex-row items-start justify-start lg:justify-center gap-6 lg:gap-0 overflow-x-auto pb-4 lg:pb-0">
            {howSteps.map((s, i) => (
              <div key={s.num} className="flex items-center shrink-0">
                <div className="flex flex-col items-center text-center w-32 lg:w-40">
                  <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-gold/10 flex items-center justify-center mb-3">
                    <s.icon size={24} className="text-gold lg:hidden" />
                    <s.icon size={28} className="text-gold hidden lg:block" />
                  </div>
                  <p className="font-bold text-navy text-xs lg:text-sm">{s.num}. {s.title}</p>
                  <p className="text-[10px] lg:text-xs text-body-muted mt-1 leading-relaxed">{s.desc}</p>
                </div>
                {i < howSteps.length - 1 && <ArrowRight size={20} className="text-gold mx-1 lg:mx-2 mt-[-2rem] shrink-0" />}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section ref={barRef} className="bg-navy fade-in-up">
        <div className="container-main py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {howHighlights.map((h) => (
              <div key={h.title} className="flex items-center gap-3 text-navy-foreground justify-center">
                <h.icon size={28} className="text-gold shrink-0" />
                <div>
                  <p className="font-bold text-sm">{h.title}</p>
                  <p className="text-xs text-white/70">{h.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ─── Section: Earnings ─── */
const earningTiers = [
  { stage: "Beginner Stage", desc: "1 Hostel + Small Team", earnings: "₹15,000 – ₹30,000", color: "bg-gold/10" },
  { stage: "Growth Stage", desc: "Multiple Hostels + Active Marketing", earnings: "₹40,000 – ₹70,000", color: "bg-gold/20" },
  { stage: "Scale Stage", desc: "Full Campus Operations", earnings: "₹1,00,000+", color: "bg-gold/30" },
];
const revenueSources = ["Delivery Margin", "Product Margin", "Campus Partnerships", "Brand Promotions", "Subscription Plans", "Student Events & Promotions"];

function EarningsSection() {
  const ref = useScrollReveal();
  return (
    <section id="earnings" className="section-padding bg-background">
      <div ref={ref} className="container-main fade-in-up text-center">
        <p className="section-label mb-3">EARNINGS</p>
        <h2 className="section-heading mb-12">How Much Can You Earn?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {earningTiers.map((t) => (
            <div key={t.stage} className="card-base text-center">
              <div className={`w-16 h-16 rounded-full ${t.color} flex items-center justify-center mx-auto mb-4`}>
                <DollarSign size={28} className="text-gold" />
              </div>
              <h3 className="font-bold text-navy text-lg mb-1">{t.stage}</h3>
              <p className="text-sm text-body-muted mb-3">{t.desc}</p>
              <p className="text-xs text-body-muted">Potential Monthly Earnings:</p>
              <p className="text-2xl font-extrabold text-gold">{t.earnings}</p>
            </div>
          ))}
        </div>
        <div className="card-base max-w-xl mx-auto">
          <h3 className="font-bold text-navy text-lg mb-4">Revenue Sources</h3>
          <div className="grid grid-cols-2 gap-2">
            {revenueSources.map((s) => (
              <p key={s} className="text-sm text-body-muted flex items-center gap-2"><span className="text-gold">•</span>{s}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section: Benefits ─── */
const benefits = [
  "Full Access To CollegeCart Brand", "Order Management System", "Delivery Management Dashboard",
  "Marketing Materials & Templates", "Student Growth Strategies", "Technical Support",
  "Business Guidance", "Inventory Management Support", "Campus Launch Strategy", "Operational Training",
];

function BenefitsSection() {
  const ref = useScrollReveal();
  return (
    <section id="benefits" className="section-padding bg-muted">
      <div ref={ref} className="container-main fade-in-up text-center">
        <p className="section-label mb-3">FRANCHISE BENEFITS</p>
        <h2 className="section-heading mb-12">What You Get With CollegeCart</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {benefits.map((b) => (
            <div key={b} className="card-base !py-4 flex items-center gap-3 text-left">
              <CheckCircle size={20} className="text-gold shrink-0" />
              <p className="text-sm font-medium text-navy">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section: Who Can Apply ─── */
const applicants = [
  { icon: GraduationCap, label: "College Students" },
  { icon: Rocket, label: "Student Entrepreneurs" },
  { icon: HomeIcon, label: "Hostel Residents" },
  { icon: Megaphone, label: "Campus Influencers" },
  { icon: UserCheck, label: "Recent Graduates" },
  { icon: Briefcase, label: "Local Entrepreneurs" },
  { icon: Heart, label: "Student Communities" },
];

function WhoCanApplySection() {
  const ref = useScrollReveal();
  return (
    <section id="who-can-apply" className="section-padding bg-background">
      <div ref={ref} className="container-main fade-in-up text-center">
        <p className="section-label mb-3">WHO CAN APPLY</p>
        <h2 className="section-heading mb-4">Who Can Become A Campus Partner?</h2>
        <p className="text-body-muted mb-12">No prior business experience required.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {applicants.map((a) => (
            <div key={a.label} className="card-base flex flex-col items-center text-center !py-6">
              <a.icon size={28} className="text-gold mb-2" />
              <p className="text-sm font-bold text-navy">{a.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section: FAQ / Support ─── */
const faqs = [
  { q: "Is CollegeCart franchise really free?", a: "Yes. There is no franchise fee or royalty. We grow together with campus partners." },
  { q: "How much can I earn?", a: "Earnings depend on campus size, operations, and order volume. Active partners can potentially earn up to ₹1 lakh/month." },
  { q: "Do I need previous business experience?", a: "No. We provide complete training and operational support." },
  { q: "How fast can I start?", a: "Most campuses can launch within 7–14 days after approval." },
  { q: "What support will I receive?", a: "Technology, operations guidance, onboarding, marketing strategies, and ongoing support." },
];

function SupportSection() {
  const ref = useScrollReveal();
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="support" className="section-padding bg-muted">
      <div ref={ref} className="container-main fade-in-up">
        <h2 className="section-heading text-center mb-12">Frequently Asked Questions</h2>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-[40%]">
            <img src={faqImg} alt="FAQ illustration" className="w-full max-w-sm mx-auto" width={512} height={512} loading="lazy" />
          </div>
          <div className="lg:w-[60%]">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-border-light">
                <button className="w-full flex items-center justify-between py-5 text-left" onClick={() => setOpen(open === i ? null : i)}>
                  <span className="font-bold text-navy text-sm pr-4">{faq.q}</span>
                  {open === i ? <Minus size={18} className="text-gold shrink-0" /> : <Plus size={18} className="text-gold shrink-0" />}
                </button>
                {open === i && <p className="pb-5 text-sm text-body-muted leading-relaxed">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section: Final CTA ─── */
function FinalCTASection() {
  const ref = useScrollReveal();
  return (
    <section className="section-padding bg-navy">
      <div ref={ref} className="container-main fade-in-up text-center text-navy-foreground">
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">Ready To Build Your Campus Business?</h2>
        <p className="text-white/70 max-w-2xl mx-auto mb-4">
          Join India's growing student entrepreneurship movement with CollegeCart.
        </p>
        <p className="text-white/70 max-w-2xl mx-auto mb-8">
          Launch your own campus delivery business with zero investment and unlimited growth potential.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }} className="btn-primary">Apply Now</a>
          <a href="tel:+917248316506" className="btn-secondary !border-white !text-navy hover:!bg-white/90">Talk To Our Team</a>
        </div>
      </div>
    </section>
  );
}

/* ─── Section: Contact / Application Form ─── */
const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat",
  "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh",
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
  "Uttarakhand", "West Bengal", "Delhi", "Chandigarh",
];

function ContactSection() {
  const ref = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [govIdType, setGovIdType] = useState("");
  const [currentStep, setCurrentStep] = useState(1);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const fd = new FormData(form);

    // Optimistic UI - show success immediately for better UX
    // The actual submission happens in background
    setTimeout(() => {
      setSubmitted(true);
      setSubmitting(false);
    }, 500); // Show success after 500ms for smooth transition

    try {
      // Upload files
      let collegeIdUrl = "";
      let govIdUrl = "";
      let campusPhotosUrl = "";

      const collegeId = (form.elements.namedItem("college_id") as HTMLInputElement)?.files?.[0];
      const govId = (form.elements.namedItem("government_id") as HTMLInputElement)?.files?.[0];
      const campusPhotos = (form.elements.namedItem("campus_photos") as HTMLInputElement)?.files?.[0];

      if (collegeId) {
        const name = `${Date.now()}-college-${collegeId.name}`;
        await supabase.storage.from("application-uploads").upload(name, collegeId);
        collegeIdUrl = supabase.storage.from("application-uploads").getPublicUrl(name).data.publicUrl;
      }
      if (govId) {
        const name = `${Date.now()}-gov-${govId.name}`;
        await supabase.storage.from("application-uploads").upload(name, govId);
        govIdUrl = supabase.storage.from("application-uploads").getPublicUrl(name).data.publicUrl;
      }
      if (campusPhotos) {
        const name = `${Date.now()}-campus-${campusPhotos.name}`;
        await supabase.storage.from("application-uploads").upload(name, campusPhotos);
        campusPhotosUrl = supabase.storage.from("application-uploads").getPublicUrl(name).data.publicUrl;
      }

      const { error: insertError } = await supabase.from("franchise_applications").insert({
        full_name: fd.get("full_name") as string,
        phone: fd.get("phone") as string,
        whatsapp: fd.get("whatsapp") as string || null,
        email: fd.get("email") as string,
        linkedin: fd.get("linkedin") as string || null,
        college_name: fd.get("college_name") as string,
        campus_location: fd.get("campus_location") as string,
        state: fd.get("state") as string,
        num_hostels: fd.get("num_hostels") as string || null,
        student_strength: fd.get("student_strength") as string || null,
        hostel_type: fd.get("hostel_type") as string || null,
        why_collegecart: fd.get("why_collegecart") as string || null,
        team_experience: fd.get("team_experience") as string || null,
        has_delivery_partners: fd.get("has_delivery_partners") as string || null,
        starting_hostel: fd.get("starting_hostel") as string || null,
        target_students: fd.get("target_students") as string || null,
        outside_delivery_allowed: fd.get("outside_delivery_allowed") as string || null,
        existing_delivery_apps: fd.get("existing_delivery_apps") as string || null,
        launch_timeline: fd.get("launch_timeline") as string || null,
        can_manage_daily: fd.get("can_manage_daily") as string || null,
        government_id_type: govIdType || null,
        college_id_url: collegeIdUrl || null,
        government_id_url: govIdUrl || null,
        campus_photos_url: campusPhotosUrl || null,
        acknowledged: fd.get("acknowledged") === "on",
      });

      if (insertError) {
        console.error("Supabase insert error:", insertError);
        // If there's an error, revert the optimistic UI
        setSubmitted(false);
        setSubmitting(false);
        setError(insertError.message || "Failed to submit application. Please try again.");
      }
      // Success case is already handled by optimistic UI above
    } catch (err: any) {
      console.error("Form submission error:", err);
      // Revert optimistic UI on error
      setSubmitted(false);
      setSubmitting(false);
      setError(err.message || "Something went wrong. Please try again.");
    }
  };

  const validateStep1 = () => {
    const form = document.querySelector('form') as HTMLFormElement;
    if (!form) return false;
    
    const fullName = (form.elements.namedItem("full_name") as HTMLInputElement)?.value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value;
    const whatsapp = (form.elements.namedItem("whatsapp") as HTMLInputElement)?.value;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    
    if (!fullName || !phone || !email) {
      setError("Please fill all required fields marked with *");
      return false;
    }

    // Validate phone number (Indian format: 10 digits, starting with 6-9)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      setError("Please enter a valid 10-digit Indian mobile number (starting with 6, 7, 8, or 9)");
      return false;
    }

    // Check for sequential or repeated digits
    if (/^(\d)\1{9}$/.test(phone) || /^(0123456789|1234567890|9876543210)$/.test(phone)) {
      setError("Please enter a valid mobile number (not sequential or repeated digits)");
      return false;
    }

    // Validate WhatsApp if provided
    if (whatsapp && !phoneRegex.test(whatsapp)) {
      setError("Please enter a valid 10-digit WhatsApp number");
      return false;
    }
    
    setError("");
    return true;
  };

  const validateStep2 = () => {
    const form = document.querySelector('form') as HTMLFormElement;
    if (!form) return false;
    
    const collegeName = (form.elements.namedItem("college_name") as HTMLInputElement)?.value;
    const campusLocation = (form.elements.namedItem("campus_location") as HTMLInputElement)?.value;
    const state = (form.elements.namedItem("state") as HTMLSelectElement)?.value;
    
    if (!collegeName || !campusLocation || !state) {
      setError("Please fill all required fields marked with *");
      return false;
    }

    // Basic city-state validation (you can expand this with a comprehensive list)
    const cityStateMap: { [key: string]: string[] } = {
      "Maharashtra": ["mumbai", "pune", "nagpur", "nashik", "aurangabad", "thane", "solapur"],
      "Delhi": ["delhi", "new delhi"],
      "Karnataka": ["bangalore", "bengaluru", "mysore", "mangalore", "hubli"],
      "Tamil Nadu": ["chennai", "coimbatore", "madurai", "salem", "tiruchirappalli", "trichy"],
      "Uttar Pradesh": ["lucknow", "kanpur", "agra", "varanasi", "meerut", "allahabad", "prayagraj", "noida", "ghaziabad"],
      "West Bengal": ["kolkata", "howrah", "durgapur", "siliguri"],
      "Gujarat": ["ahmedabad", "surat", "vadodara", "rajkot", "bhavnagar"],
      "Rajasthan": ["jaipur", "jodhpur", "udaipur", "kota", "ajmer"],
      "Telangana": ["hyderabad", "warangal", "nizamabad"],
      "Andhra Pradesh": ["visakhapatnam", "vijayawada", "guntur", "tirupati"],
      "Kerala": ["thiruvananthapuram", "kochi", "kozhikode", "thrissur"],
      "Madhya Pradesh": ["bhopal", "indore", "gwalior", "jabalpur"],
      "Punjab": ["chandigarh", "ludhiana", "amritsar", "jalandhar"],
      "Haryana": ["gurgaon", "gurugram", "faridabad", "panipat"],
    };

    const cityLower = campusLocation.toLowerCase().trim();
    const stateCities = cityStateMap[state];
    
    if (stateCities) {
      const cityFound = stateCities.some(city => cityLower.includes(city) || city.includes(cityLower));
      if (!cityFound && campusLocation.length > 3) {
        setError(`Please verify: "${campusLocation}" doesn't seem to be in ${state}. If correct, you can proceed.`);
        // Don't return false - just warn, allow to proceed
      }
    }
    
    setError("");
    return true;
  };

  const validateStep3 = () => {
    const form = document.querySelector('form') as HTMLFormElement;
    if (!form) return false;
    
    const teamExperience = (form.elements.namedItem("team_experience") as HTMLSelectElement)?.value;
    const hasDeliveryPartners = (form.elements.namedItem("has_delivery_partners") as HTMLSelectElement)?.value;
    const outsideDelivery = (form.elements.namedItem("outside_delivery_allowed") as HTMLSelectElement)?.value;
    const existingApps = (form.elements.namedItem("existing_delivery_apps") as HTMLSelectElement)?.value;
    const launchTimeline = (form.elements.namedItem("launch_timeline") as HTMLSelectElement)?.value;
    const canManageDaily = (form.elements.namedItem("can_manage_daily") as HTMLSelectElement)?.value;
    const acknowledged = (form.elements.namedItem("acknowledged") as HTMLInputElement)?.checked;
    
    if (!teamExperience || !hasDeliveryPartners || !outsideDelivery || !existingApps || !launchTimeline || !canManageDaily) {
      setError("Please answer all questions before submitting");
      return false;
    }
    
    if (!acknowledged) {
      setError("Please acknowledge the partnership terms");
      return false;
    }
    
    setError("");
    return true;
  };

  const handleNextStep = (nextStep: number) => {
    if (nextStep === 2 && !validateStep1()) {
      return;
    }
    if (nextStep === 3 && !validateStep2()) {
      return;
    }
    setCurrentStep(nextStep);
    window.scrollTo({ top: document.getElementById("contact")?.offsetTop || 0, behavior: "smooth" });
  };

  const inputClass = "w-full px-4 py-3 rounded-lg border border-border-light text-sm focus:outline-none focus:border-gold transition-colors";

  return (
    <section id="contact" className="section-padding bg-background">
      <div ref={ref} className="container-main fade-in-up">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-[40%]">
            <p className="section-label mb-3">GET IN TOUCH</p>
            <h2 className="section-heading mb-4">Let's Build Something Amazing Together</h2>
            <p className="text-body-muted leading-relaxed mb-8">Have questions? We're here to help you start your journey with CollegeCart.</p>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center"><Phone size={18} className="text-gold" /></div>
                <span className="text-sm font-medium text-navy">+91 7248316506</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center"><Mail size={18} className="text-gold" /></div>
                <span className="text-sm font-medium text-navy">franchise@collegecarts.in</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center"><Globe size={18} className="text-gold" /></div>
                <span className="text-sm font-medium text-navy">www.collegecarts.in</span>
              </div>
            </div>
          </div>
          <div className="lg:w-[60%]">
            <div className="card-base">
              <h3 className="font-bold text-navy text-xl mb-6">Apply For Campus Franchise</h3>
              
              {/* Step Indicator */}
              {!submitted && (
                <div className="mb-8">
                  <div className="flex items-center justify-between">
                    {[1, 2, 3].map((step) => (
                      <div key={step} className="flex items-center flex-1">
                        <div className="flex flex-col items-center flex-1">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${currentStep >= step ? 'bg-gold text-white' : 'bg-muted text-body-muted'}`}>
                            {step}
                          </div>
                          <p className="text-xs mt-2 font-medium text-navy">
                            {step === 1 ? 'Personal' : step === 2 ? 'College' : 'Business'}
                          </p>
                        </div>
                        {step < 3 && (
                          <div className={`h-0.5 flex-1 ${currentStep > step ? 'bg-gold' : 'bg-border-light'}`} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {submitted ? (
                <div className="text-center py-12">
                  <Rocket size={48} className="text-gold mx-auto mb-4" />
                  <p className="text-navy font-bold text-lg">Application Submitted!</p>
                  <p className="text-body-muted text-sm mt-2">Thank you! We'll get back to you within 24-48 hours.</p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={(e) => {
                  e.preventDefault();
                  if (currentStep === 3 && validateStep3()) {
                    handleSubmit(e);
                  }
                }}>
                  {error && (
                    <div className="text-destructive text-sm bg-destructive/10 p-3 rounded-lg border border-destructive/20">
                      <p className="font-semibold">⚠️ {error}</p>
                    </div>
                  )}

                  {/* Step 1: Personal Information */}
                  <div className="space-y-4" style={{ display: currentStep === 1 ? 'block' : 'none' }}>
                    <h4 className="font-bold text-navy text-sm mb-3 border-b border-border-light pb-2">Personal Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input name="full_name" placeholder="Full Name *" required={currentStep === 1} className={inputClass} />
                      <input 
                        name="phone" 
                        type="tel" 
                        placeholder="Phone Number *" 
                        required={currentStep === 1} 
                        pattern="[6-9][0-9]{9}"
                        maxLength={10}
                        title="Enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9"
                        className={inputClass} 
                      />
                      <input 
                        name="whatsapp" 
                        type="tel" 
                        placeholder="WhatsApp Number" 
                        pattern="[6-9][0-9]{9}"
                        maxLength={10}
                        title="Enter a valid 10-digit mobile number"
                        className={inputClass} 
                      />
                      <input name="email" type="email" placeholder="Email Address *" required={currentStep === 1} className={inputClass} />
                    </div>
                    <input name="linkedin" placeholder="LinkedIn Profile (Optional)" className={inputClass} />
                    
                    <button 
                      type="button" 
                      onClick={() => handleNextStep(2)} 
                      className="btn-primary w-full"
                    >
                      Next: College Details
                    </button>
                  </div>

                  {/* Step 2: College Details */}
                  <div className="space-y-4" style={{ display: currentStep === 2 ? 'block' : 'none' }}>
                    <h4 className="font-bold text-navy text-sm mb-3 border-b border-border-light pb-2">College Details</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input name="college_name" placeholder="College/University Name *" required={currentStep === 2} className={inputClass} />
                      <input name="campus_location" placeholder="Campus Location *" required={currentStep === 2} className={inputClass} />
                      <select name="state" required={currentStep === 2} className={`${inputClass} text-body-muted`}>
                        <option value="">Select State *</option>
                        {indianStates.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                      <input name="num_hostels" placeholder="Number of Hostels" className={inputClass} />
                      <input name="student_strength" placeholder="Approx Student Strength" className={inputClass} />
                      <select name="hostel_type" className={`${inputClass} text-body-muted`}>
                        <option value="">Hostel Type</option>
                        <option value="Boys Hostel">Boys Hostel</option>
                        <option value="Girls Hostel">Girls Hostel</option>
                        <option value="Both">Both</option>
                      </select>
                    </div>

                    {/* Upload Documents */}
                    <div className="space-y-4 pt-4">
                      <h5 className="font-semibold text-navy text-sm">Upload Documents</h5>
                      
                      <div>
                        <label className="text-sm font-medium text-navy block mb-2">College ID</label>
                        <input name="college_id" type="file" accept="image/*,.pdf" className="text-sm w-full border border-border-light rounded-lg px-3 py-2 focus:outline-none focus:border-gold" />
                      </div>

                      <div>
                        <label className="text-sm font-medium text-navy block mb-2">Government ID</label>
                        <select 
                          value={govIdType} 
                          onChange={(e) => setGovIdType(e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-border-light text-sm focus:outline-none focus:border-gold mb-3"
                        >
                          <option value="">Select ID Type</option>
                          <option value="Aadhaar Card">Aadhaar Card</option>
                          <option value="PAN Card">PAN Card</option>
                          <option value="Voter ID">Voter ID</option>
                          <option value="Driving License">Driving License</option>
                          <option value="Passport">Passport</option>
                        </select>
                        
                        {govIdType && (
                          <div className="mt-2">
                            <input 
                              name="government_id" 
                              type="file" 
                              accept="image/*,.pdf" 
                              className="text-sm w-full border border-border-light rounded-lg px-3 py-2 focus:outline-none focus:border-gold" 
                            />
                            <p className="text-xs text-body-muted mt-1">Upload your {govIdType}</p>
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="text-sm font-medium text-navy block mb-2">Campus Photos (Optional)</label>
                        <input name="campus_photos" type="file" accept="image/*" className="text-sm w-full border border-border-light rounded-lg px-3 py-2 focus:outline-none focus:border-gold" />
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <button 
                        type="button" 
                        onClick={() => setCurrentStep(1)} 
                        className="btn-secondary flex-1"
                      >
                        Back
                      </button>
                      <button 
                        type="button" 
                        onClick={() => handleNextStep(3)} 
                        className="btn-primary flex-1"
                      >
                        Next: Business Details
                      </button>
                    </div>
                  </div>

                  {/* Step 3: Business & Operational Details */}
                  <div className="space-y-4" style={{ display: currentStep === 3 ? 'block' : 'none' }}>
                    <h4 className="font-bold text-navy text-sm mb-3 border-b border-border-light pb-2">Business & Operational Details</h4>
                    
                    <textarea name="why_collegecart" rows={3} placeholder="Why do you want to start CollegeCart?" className={`${inputClass} resize-none`} />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input name="starting_hostel" placeholder="Which hostel do you want to start from?" className={inputClass} />
                      <input name="target_students" placeholder="Estimated students you can target" className={inputClass} />
                    </div>

                    {/* Questions in 2 columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Team Experience */}
                      <div className="border border-border-light rounded-lg">
                        <div className="px-4 py-3 bg-muted/30">
                          <p className="text-sm font-medium text-navy">Have you handled any team before?</p>
                        </div>
                        <div className="px-4 py-3">
                          <select name="team_experience" required={currentStep === 3} className="w-full px-3 py-2 rounded border border-border-light text-sm focus:outline-none focus:border-gold">
                            <option value="">Select your answer</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </div>

                      {/* Delivery Partners */}
                      <div className="border border-border-light rounded-lg">
                        <div className="px-4 py-3 bg-muted/30">
                          <p className="text-sm font-medium text-navy">Do you have delivery partners/team?</p>
                        </div>
                        <div className="px-4 py-3">
                          <select name="has_delivery_partners" required={currentStep === 3} className="w-full px-3 py-2 rounded border border-border-light text-sm focus:outline-none focus:border-gold">
                            <option value="">Select your answer</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </div>

                      {/* Outside Deliveries */}
                      <div className="border border-border-light rounded-lg">
                        <div className="px-4 py-3 bg-muted/30">
                          <p className="text-sm font-medium text-navy">Outside deliveries allowed in campus?</p>
                        </div>
                        <div className="px-4 py-3">
                          <select name="outside_delivery_allowed" required={currentStep === 3} className="w-full px-3 py-2 rounded border border-border-light text-sm focus:outline-none focus:border-gold">
                            <option value="">Select your answer</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            <option value="Not Sure">Not Sure</option>
                          </select>
                        </div>
                      </div>

                      {/* Existing Apps */}
                      <div className="border border-border-light rounded-lg">
                        <div className="px-4 py-3 bg-muted/30">
                          <p className="text-sm font-medium text-navy">Existing delivery apps inside campus?</p>
                        </div>
                        <div className="px-4 py-3">
                          <select name="existing_delivery_apps" required={currentStep === 3} className="w-full px-3 py-2 rounded border border-border-light text-sm focus:outline-none focus:border-gold">
                            <option value="">Select your answer</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            <option value="Not Sure">Not Sure</option>
                          </select>
                        </div>
                      </div>

                      {/* Launch Timeline */}
                      <div className="border border-border-light rounded-lg">
                        <div className="px-4 py-3 bg-muted/30">
                          <p className="text-sm font-medium text-navy">Preferred launch timeline</p>
                        </div>
                        <div className="px-4 py-3">
                          <select name="launch_timeline" required={currentStep === 3} className="w-full px-3 py-2 rounded border border-border-light text-sm focus:outline-none focus:border-gold">
                            <option value="">Select your answer</option>
                            <option value="Immediately">Immediately</option>
                            <option value="Within 1 Week">Within 1 Week</option>
                            <option value="Within 2 Weeks">Within 2 Weeks</option>
                            <option value="Within 1 Month">Within 1 Month</option>
                          </select>
                        </div>
                      </div>

                      {/* Daily Operations */}
                      <div className="border border-border-light rounded-lg">
                        <div className="px-4 py-3 bg-muted/30">
                          <p className="text-sm font-medium text-navy">Can you manage daily operations?</p>
                        </div>
                        <div className="px-4 py-3">
                          <select name="can_manage_daily" required={currentStep === 3} className="w-full px-3 py-2 rounded border border-border-light text-sm focus:outline-none focus:border-gold">
                            <option value="">Select your answer</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            <option value="With Help">With Help</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Acknowledgement */}
                    <label className="flex items-start gap-2 text-sm text-body-muted cursor-pointer">
                      <input name="acknowledged" type="checkbox" required={currentStep === 3} className="mt-1 accent-gold" />
                      I understand this is an independent campus partnership opportunity.
                    </label>

                    <div className="flex gap-3">
                      <button 
                        type="button" 
                        onClick={() => setCurrentStep(2)} 
                        className="btn-secondary flex-1"
                      >
                        Back
                      </button>
                      <button type="submit" disabled={submitting} className="btn-primary flex-1">
                        {submitting ? "Submitting..." : "Apply For Free Franchise"}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Main Page ─── */
function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <WhyUsSection />
      <HowItWorksSection />
      <EarningsSection />
      <BenefitsSection />
      <WhoCanApplySection />
      <SupportSection />
      <FinalCTASection />
      <ContactSection />
    </Layout>
  );
}


// Export for standard React Router
export default HomePage;
