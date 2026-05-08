// import { createFileRoute } from "@tanstack/react-router";
import Layout from "@/components/Layout";
import { useScrollReveal } from "@/components/useScrollReveal";
import { Smartphone, ShoppingBag, Truck, CheckCircle, Smile, Clock, Shield, Users, ArrowRight } from "lucide-react";

/* Commented out for Vercel deploymentexport const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — CollegeCart" },
      { name: "description", content: "Simple. Smart. Seamless. See how CollegeCart campus delivery works in 5 easy steps." },
    ],
  }),
  component: HowItWorksPage,
});*/

const steps = [
  { icon: Smartphone, num: "1", title: "Order", desc: "Students place order via app or WhatsApp" },
  { icon: ShoppingBag, num: "2", title: "Confirm", desc: "We confirm & assign the order" },
  { icon: Truck, num: "3", title: "Deliver", desc: "Delivery partner picks & delivers fast" },
  { icon: CheckCircle, num: "4", title: "Receive", desc: "Student receives order at doorstep" },
  { icon: Smile, num: "5", title: "Happy", desc: "Happy students, repeat orders" },
];

const highlights = [
  { icon: Clock, title: "20-30 mins", sub: "Average Delivery Time" },
  { icon: Shield, title: "Inside Campus", sub: "Safe & Secure Delivery" },
  { icon: Users, title: "Trusted By", sub: "Thousands of Students" },
];

function HowItWorksPage() {
  const ref = useScrollReveal();
  const barRef = useScrollReveal();

  return (
    <Layout>
      <section className="section-padding bg-background">
        <div ref={ref} className="container-main fade-in-up text-center">
          <p className="section-label mb-3">HOW IT WORKS</p>
          <h1 className="section-heading mb-12">Simple. Smart. Seamless.</h1>

          <div className="flex flex-col lg:flex-row items-start justify-center gap-4 lg:gap-0">
            {steps.map((s, i) => (
              <div key={s.num} className="flex items-center">
                <div className="flex flex-col items-center text-center w-40">
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-3">
                    <s.icon size={28} className="text-gold" />
                  </div>
                  <p className="font-bold text-navy text-sm">{s.num}. {s.title}</p>
                  <p className="text-xs text-body-muted mt-1 leading-relaxed">{s.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <ArrowRight size={24} className="text-gold hidden lg:block mx-2 mt-[-2rem]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={barRef} className="bg-navy fade-in-up">
        <div className="container-main py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((h) => (
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
    </Layout>
  );
}

// Export for standard React Router
export default HowItWorksPage;
