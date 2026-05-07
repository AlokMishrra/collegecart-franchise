import { createFileRoute } from "@tanstack/react-router";
import Layout from "@/components/Layout";
import { useScrollReveal } from "@/components/useScrollReveal";
import { BarChart3, Building2, Banknote, Percent, Headphones, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/why-us")({
  head: () => ({
    meta: [
      { title: "Why CollegeCart — Partner With Us" },
      { name: "description", content: "Proven business model, high demand, low investment and full support — discover why CollegeCart is the best campus franchise." },
    ],
  }),
  component: WhyUsPage,
});

const features = [
  { icon: BarChart3, title: "Proven Business Model", desc: "Tested and successful in multiple campuses." },
  { icon: Building2, title: "High Demand", desc: "Daily orders for essentials, snacks & more." },
  { icon: Banknote, title: "Low Investment", desc: "Start with minimal investment and low risk." },
  { icon: Percent, title: "High Profit Margin", desc: "Attractive margins with recurring orders." },
  { icon: Headphones, title: "Full Support", desc: "Training, technology and operations support." },
  { icon: ArrowUpRight, title: "Scalable & Sustainable", desc: "Grow to multiple campuses with our support." },
];

function WhyUsPage() {
  const ref = useScrollReveal();

  return (
    <Layout>
      <section className="section-padding bg-muted">
        <div ref={ref} className="container-main fade-in-up text-center">
          <p className="section-label mb-3">WHY COLLEGECART</p>
          <h1 className="section-heading mb-12">Why Partner With Us?</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
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
    </Layout>
  );
}
