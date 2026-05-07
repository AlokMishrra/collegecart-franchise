import { createFileRoute, Link } from "@tanstack/react-router";
import { ShoppingBag, TrendingUp, Shield, Headphones, Download } from "lucide-react";
import Layout from "@/components/Layout";
import { useScrollReveal } from "@/components/useScrollReveal";
import heroImg from "@/assets/hero-student.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CollegeCart — Build A Profitable Campus Business" },
      { name: "description", content: "Join CollegeCart Franchise and bring smart convenience to students while building a high-growth business on your campus." },
    ],
  }),
  component: HomePage,
});

const stats = [
  { icon: ShoppingBag, title: "High Demand", sub: "On Every Campus" },
  { icon: TrendingUp, title: "Low Investment", sub: "High Returns" },
  { icon: Shield, title: "Proven Business", sub: "Model" },
  { icon: Headphones, title: "Full Support", sub: "& Training" },
];

function HomePage() {
  const heroRef = useScrollReveal();
  const statsRef = useScrollReveal();

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-background">
        <div ref={heroRef} className="container-main fade-in-up py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-10">
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
              <Link to="/contact" className="btn-primary">Apply For Franchise</Link>
              <button className="btn-secondary inline-flex items-center gap-2">
                <Download size={16} /> Download Brochure
              </button>
            </div>
          </div>
          <div className="lg:w-[40%]">
            <img
              src={heroImg}
              alt="CollegeCart delivery partner with grocery bags"
              className="rounded-2xl shadow-lg w-full max-w-md mx-auto"
              width={640}
              height={720}
            />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section ref={statsRef} className="bg-navy fade-in-up">
        <div className="container-main py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
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
    </Layout>
  );
}
