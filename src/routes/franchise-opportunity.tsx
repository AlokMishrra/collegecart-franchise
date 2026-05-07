import { createFileRoute, Link } from "@tanstack/react-router";
import Layout from "@/components/Layout";
import { useScrollReveal } from "@/components/useScrollReveal";
import { Users, Gift, Coins, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/franchise-opportunity")({
  head: () => ({
    meta: [
      { title: "Franchise Opportunity — CollegeCart" },
      { name: "description", content: "Own a successful campus business with CollegeCart's proven franchise system." },
    ],
  }),
  component: FranchiseOpportunityPage,
});

const columns = [
  {
    icon: Users,
    title: "Who Can Apply?",
    items: ["Students", "Recent Graduates", "Entrepreneurs", "Anyone Passionate About Business"],
  },
  {
    icon: Gift,
    title: "What You Get?",
    items: ["Brand & System Access", "Training & Onboarding", "Technology & App", "Marketing Support", "Ongoing Guidance"],
  },
  {
    icon: Coins,
    title: "Investment",
    items: ["Low Initial Investment", "Affordable Setup Cost", "No Hidden Charges", "High Returns"],
  },
  {
    icon: TrendingUp,
    title: "Earnings Potential",
    items: ["Monthly Profit ₹20,000 - ₹1,00,000+", "Get 100% of the Profit In Your Campus"],
  },
];

function FranchiseOpportunityPage() {
  const ref = useScrollReveal();
  const ctaRef = useScrollReveal();

  return (
    <Layout>
      <section className="section-padding bg-background">
        <div ref={ref} className="container-main fade-in-up text-center">
          <p className="section-label mb-3">FRANCHISE OPPORTUNITY</p>
          <h1 className="section-heading mb-3">Own A Successful Campus Business</h1>
          <p className="text-body-muted max-w-2xl mx-auto mb-12">
            Become a CollegeCart Campus Partner and build a profitable business with our proven system.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {columns.map((c) => (
              <div key={c.title} className="card-base">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <c.icon size={24} className="text-gold" />
                </div>
                <h3 className="font-bold text-navy mb-3">{c.title}</h3>
                <ul className="space-y-2">
                  {c.items.map((item) => (
                    <li key={item} className="text-sm text-body-muted flex items-start gap-2">
                      <span className="text-gold mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={ctaRef} className="fade-in-up">
        <div className="container-main pb-16">
          <div className="bg-navy rounded-2xl px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-navy-foreground font-bold text-lg text-center md:text-left">
              Ready to start your entrepreneurial journey?
            </p>
            <Link to="/contact" className="btn-primary shrink-0">Apply Now</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
