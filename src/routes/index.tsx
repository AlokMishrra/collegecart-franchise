import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ShoppingBag, TrendingUp, Shield, Headphones, Download,
  Smartphone, Truck, CheckCircle, Smile, Clock, Users, ArrowRight,
  BarChart3, Building2, Banknote, Percent, ArrowUpRight,
  Gift, Coins,
  Star, Quote,
  Plus, Minus,
  Phone, Mail, Globe,
} from "lucide-react";
import Layout from "@/components/Layout";
import { useScrollReveal } from "@/components/useScrollReveal";
import heroImg from "@/assets/hero-student.jpg";
import aboutImg from "@/assets/about-team.jpg";
import faqImg from "@/assets/faq-illustration.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CollegeCart — Build A Profitable Campus Business" },
      { name: "description", content: "Join CollegeCart Franchise and bring smart convenience to students while building a high-growth business on your campus." },
    ],
  }),
  component: HomePage,
});

/* ─── Section: Hero ─── */
function HeroSection() {
  const ref = useScrollReveal();
  return (
    <section id="home" className="bg-background">
      <div ref={ref} className="container-main fade-in-up py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-[60%]">
          <span className="inline-block bg-navy/10 text-navy text-xs font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-wide">
            Campus Franchise Opportunity
          </span>
          <h1 className="text-4xl lg:text-5xl xl:text-[3.4rem] font-extrabold text-navy leading-tight">
            Build A Profitable<br />Business On Your<br />Campus
          </h1>
          <p className="mt-5 text-body-muted text-base leading-relaxed max-w-lg">
            Join CollegeCart Franchise and bring smart convenience to students while building a high-growth business.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }} className="btn-primary">Apply For Franchise</a>
            <button className="btn-secondary inline-flex items-center gap-2">
              <Download size={16} /> Download Brochure
            </button>
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
  { icon: ShoppingBag, title: "High Demand", sub: "On Every Campus" },
  { icon: TrendingUp, title: "Low Investment", sub: "High Returns" },
  { icon: Shield, title: "Proven Business", sub: "Model" },
  { icon: Headphones, title: "Full Support", sub: "& Training" },
];

function StatsBar() {
  const ref = useScrollReveal();
  return (
    <section ref={ref} className="bg-navy fade-in-up">
      <div className="container-main py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {heroStats.map((s) => (
            <div key={s.title} className="flex items-center gap-3 text-navy-foreground">
              <s.icon size={28} className="text-gold shrink-0" />
              <div>
                <p className="font-bold text-sm">{s.title}</p>
                <p className="text-xs text-white/70">{s.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section: About ─── */
const aboutStats = [
  { value: "25+", label: "Campuses" },
  { value: "50,000+", label: "Happy Students" },
  { value: "300+", label: "Student Partners" },
  { value: "4.8★", label: "Average Rating" },
];

function AboutSection() {
  const ref = useScrollReveal();
  const statsRef = useScrollReveal();
  return (
    <>
      <section id="about" className="section-padding bg-background">
        <div ref={ref} className="container-main fade-in-up">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <p className="section-label mb-3">ABOUT US</p>
              <h2 className="section-heading mb-6">We Make Campus Life Easier</h2>
              <p className="text-body-muted leading-relaxed mb-4">
                CollegeCart is India's fastest growing campus convenience delivery platform. We operate exclusively within campuses, serving hostel students with daily essentials, snacks, stationery and more — delivered fast, reliably and safely.
              </p>
              <p className="text-body-muted leading-relaxed">
                Our mission is to build a student-powered network that combines convenience, employment and entrepreneurship.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img src={aboutImg} alt="CollegeCart team on campus" className="rounded-2xl shadow-lg w-full" width={640} height={512} loading="lazy" />
            </div>
          </div>
        </div>
      </section>
      <section ref={statsRef} className="fade-in-up bg-muted">
        <div className="container-main py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {aboutStats.map((s, i) => (
              <div key={s.label} className={i < aboutStats.length - 1 ? "lg:border-r lg:border-border-light" : ""}>
                <p className="text-3xl font-extrabold text-navy">{s.value}</p>
                <p className="text-sm text-body-muted mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ─── Section: How It Works ─── */
const howSteps = [
  { icon: Smartphone, num: "1", title: "Order", desc: "Students place order via app or WhatsApp" },
  { icon: ShoppingBag, num: "2", title: "Confirm", desc: "We confirm & assign the order" },
  { icon: Truck, num: "3", title: "Deliver", desc: "Delivery partner picks & delivers fast" },
  { icon: CheckCircle, num: "4", title: "Receive", desc: "Student receives order at doorstep" },
  { icon: Smile, num: "5", title: "Happy", desc: "Happy students, repeat orders" },
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
          <h2 className="section-heading mb-12">Simple. Smart. Seamless.</h2>
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

/* ─── Section: Why Us ─── */
const whyFeatures = [
  { icon: BarChart3, title: "Proven Business Model", desc: "Tested and successful in multiple campuses." },
  { icon: Building2, title: "High Demand", desc: "Daily orders for essentials, snacks & more." },
  { icon: Banknote, title: "Low Investment", desc: "Start with minimal investment and low risk." },
  { icon: Percent, title: "High Profit Margin", desc: "Attractive margins with recurring orders." },
  { icon: Headphones, title: "Full Support", desc: "Training, technology and operations support." },
  { icon: ArrowUpRight, title: "Scalable & Sustainable", desc: "Grow to multiple campuses with our support." },
];

function WhyUsSection() {
  const ref = useScrollReveal();
  return (
    <section id="why-us" className="section-padding bg-muted">
      <div ref={ref} className="container-main fade-in-up text-center">
        <p className="section-label mb-3">WHY COLLEGECART</p>
        <h2 className="section-heading mb-12">Why Partner With Us?</h2>
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

/* ─── Section: Franchise Opportunity ─── */
const franchiseCols = [
  { icon: Users, title: "Who Can Apply?", items: ["Students", "Recent Graduates", "Entrepreneurs", "Anyone Passionate About Business"] },
  { icon: Gift, title: "What You Get?", items: ["Brand & System Access", "Training & Onboarding", "Technology & App", "Marketing Support", "Ongoing Guidance"] },
  { icon: Coins, title: "Investment", items: ["Low Initial Investment", "Affordable Setup Cost", "No Hidden Charges", "High Returns"] },
  { icon: TrendingUp, title: "Earnings Potential", items: ["Monthly Profit ₹20,000 - ₹1,00,000+", "Get 100% of the Profit In Your Campus"] },
];

function FranchiseOpportunitySection() {
  const ref = useScrollReveal();
  return (
    <section id="franchise-opportunity" className="section-padding bg-background">
      <div ref={ref} className="container-main fade-in-up text-center">
        <p className="section-label mb-3">FRANCHISE OPPORTUNITY</p>
        <h2 className="section-heading mb-3">Own A Successful Campus Business</h2>
        <p className="text-body-muted max-w-2xl mx-auto mb-12">Become a CollegeCart Campus Partner and build a profitable business with our proven system.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {franchiseCols.map((c) => (
            <div key={c.title} className="card-base">
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                <c.icon size={24} className="text-gold" />
              </div>
              <h3 className="font-bold text-navy mb-3">{c.title}</h3>
              <ul className="space-y-2">
                {c.items.map((item) => (
                  <li key={item} className="text-sm text-body-muted flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="bg-navy rounded-2xl px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4 mt-12">
          <p className="text-navy-foreground font-bold text-lg text-center md:text-left">Ready to start your entrepreneurial journey?</p>
          <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }} className="btn-primary shrink-0">Apply Now</a>
        </div>
      </div>
    </section>
  );
}

/* ─── Section: Franchise Process ─── */
const processSteps = [
  { num: "01", title: "Apply Now", desc: "Submit your application online" },
  { num: "02", title: "Initial Discussion", desc: "We connect & understand your campus" },
  { num: "03", title: "Approval", desc: "We review & approve your application" },
  { num: "04", title: "Onboarding", desc: "Training & setup for your campus launch" },
  { num: "05", title: "Launch", desc: "Start operations & grow your business" },
];

function FranchiseProcessSection() {
  const ref = useScrollReveal();
  return (
    <section id="franchise-process" className="section-padding bg-muted">
      <div ref={ref} className="container-main fade-in-up text-center">
        <p className="section-label mb-3">FRANCHISE PROCESS</p>
        <h2 className="section-heading mb-16">Your Journey With Us</h2>
        <div className="relative">
          <div className="hidden lg:block absolute top-6 left-[10%] right-[10%] h-0.5 bg-border-light" />
          <div className="flex flex-row items-start justify-start lg:justify-center gap-6 lg:gap-4 overflow-x-auto pb-4 lg:pb-0">
            {processSteps.map((s, i) => (
              <div key={s.num} className="flex flex-col items-center relative shrink-0 w-28 lg:w-auto">
                <div className={`w-11 h-11 lg:w-12 lg:h-12 rounded-full flex items-center justify-center font-bold text-xs lg:text-sm z-10 ${i === 0 ? "bg-gold text-white" : "bg-white text-navy border-2 border-border-light"}`}>
                  {s.num}
                </div>
                <h3 className="font-bold text-navy mt-3 lg:mt-4 text-xs lg:text-sm">{s.title}</h3>
                <p className="text-[10px] lg:text-xs text-body-muted mt-1 max-w-[120px] lg:max-w-[160px] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section: Success Stories ─── */
const testimonials = [
  { quote: "CollegeCart made life so easy. We get everything at our doorstep within 20 mins!", name: "Rohit Sharma", title: "Student, LPU", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face" },
  { quote: "Great support, high profits and happy students. Best business decision!", name: "Ankit Verma", title: "Campus Partner, TIET", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" },
  { quote: "The system, the brand and the team — everything is just perfect.", name: "Siddharth Rao", title: "Campus Partner, RVCE", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face" },
];

function SuccessStoriesSection() {
  const ref = useScrollReveal();
  return (
    <section id="success-stories" className="section-padding bg-background">
      <div ref={ref} className="container-main fade-in-up text-center">
        <p className="section-label mb-3">SUCCESS STORIES</p>
        <h2 className="section-heading mb-12">Loved By Students. Trusted By Partners.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="card-base text-left relative">
              <Quote size={28} className="text-gold/30 mb-3" />
              <p className="text-body-muted text-sm leading-relaxed mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" width={40} height={40} loading="lazy" />
                <div>
                  <p className="font-bold text-navy text-sm">{t.name}</p>
                  <p className="text-xs text-body-muted">{t.title}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mt-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-gold fill-gold" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section: FAQ / Support ─── */
const faqs = [
  { q: "What is CollegeCart Franchise?", a: "CollegeCart Franchise allows you to run a campus delivery business under the CollegeCart brand, using our proven systems, technology, and support to serve students on your campus." },
  { q: "How much investment is required?", a: "The initial investment is minimal and affordable. We keep setup costs low so that students and young entrepreneurs can get started without a heavy financial burden." },
  { q: "What is the expected profit?", a: "Monthly profits typically range from ₹20,000 to ₹1,00,000+ depending on campus size and order volume. You keep 100% of the profit from your campus operations." },
  { q: "Do I need previous experience?", a: "No prior business experience is needed. We provide complete training, onboarding, and ongoing support to help you succeed from day one." },
  { q: "What support will I get?", a: "You get full access to our brand, technology platform, marketing materials, training programs, and a dedicated operations support team to guide you at every step." },
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

/* ─── Section: Contact ─── */
function ContactSection() {
  const ref = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="contact" className="section-padding bg-background">
      <div ref={ref} className="container-main fade-in-up">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-[55%]">
            <p className="section-label mb-3">GET IN TOUCH</p>
            <h2 className="section-heading mb-4">Let's Build Something Amazing Together</h2>
            <p className="text-body-muted leading-relaxed mb-8">Have questions? We're here to help you start your journey with CollegeCart.</p>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center"><Phone size={18} className="text-gold" /></div>
                <span className="text-sm font-medium text-navy">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center"><Mail size={18} className="text-gold" /></div>
                <span className="text-sm font-medium text-navy">franchise@collegecart.in</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center"><Globe size={18} className="text-gold" /></div>
                <span className="text-sm font-medium text-navy">www.collegecart.in</span>
              </div>
            </div>
          </div>
          <div className="lg:w-[45%]">
            <div className="card-base">
              <h3 className="font-bold text-navy text-xl mb-6">Apply For Franchise</h3>
              {submitted ? (
                <div className="text-center py-8">
                  <p className="text-navy font-bold text-lg">Thank you!</p>
                  <p className="text-body-muted text-sm mt-2">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                  <input type="text" placeholder="Full Name" required className="w-full px-4 py-3 rounded-lg border border-border-light text-sm focus:outline-none focus:border-gold transition-colors" />
                  <input type="tel" placeholder="Phone Number" required className="w-full px-4 py-3 rounded-lg border border-border-light text-sm focus:outline-none focus:border-gold transition-colors" />
                  <input type="email" placeholder="Email Address" required className="w-full px-4 py-3 rounded-lg border border-border-light text-sm focus:outline-none focus:border-gold transition-colors" />
                  <select required className="w-full px-4 py-3 rounded-lg border border-border-light text-sm text-body-muted focus:outline-none focus:border-gold transition-colors">
                    <option value="">Select College / Location</option>
                    <option value="north">North India</option>
                    <option value="south">South India</option>
                    <option value="east">East India</option>
                    <option value="west">West India</option>
                    <option value="central">Central India</option>
                  </select>
                  <textarea placeholder="Tell us about yourself" rows={4} className="w-full px-4 py-3 rounded-lg border border-border-light text-sm resize-none focus:outline-none focus:border-gold transition-colors" />
                  <button type="submit" className="btn-primary w-full">Submit Application</button>
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
      <HowItWorksSection />
      <WhyUsSection />
      <FranchiseOpportunitySection />
      <FranchiseProcessSection />
      <SuccessStoriesSection />
      <SupportSection />
      <ContactSection />
    </Layout>
  );
}
