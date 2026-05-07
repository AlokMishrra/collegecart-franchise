import { createFileRoute } from "@tanstack/react-router";
import Layout from "@/components/Layout";
import { useScrollReveal } from "@/components/useScrollReveal";

export const Route = createFileRoute("/franchise-process")({
  head: () => ({
    meta: [
      { title: "Franchise Process — CollegeCart" },
      { name: "description", content: "Your journey with CollegeCart in 5 simple steps from application to launch." },
    ],
  }),
  component: FranchiseProcessPage,
});

const steps = [
  { num: "01", title: "Apply Now", desc: "Submit your application online" },
  { num: "02", title: "Initial Discussion", desc: "We connect & understand your campus" },
  { num: "03", title: "Approval", desc: "We review & approve your application" },
  { num: "04", title: "Onboarding", desc: "Training & setup for your campus launch" },
  { num: "05", title: "Launch", desc: "Start operations & grow your business" },
];

function FranchiseProcessPage() {
  const ref = useScrollReveal();

  return (
    <Layout>
      <section className="section-padding bg-background">
        <div ref={ref} className="container-main fade-in-up text-center">
          <p className="section-label mb-3">FRANCHISE PROCESS</p>
          <h1 className="section-heading mb-16">Your Journey With Us</h1>

          {/* Timeline */}
          <div className="relative">
            {/* Horizontal line */}
            <div className="hidden lg:block absolute top-6 left-[10%] right-[10%] h-0.5 bg-border-light" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-4">
              {steps.map((s, i) => (
                <div key={s.num} className="flex flex-col items-center relative">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm z-10 ${i === 0 ? "bg-gold text-white" : "bg-muted text-navy border-2 border-border-light"}`}>
                    {s.num}
                  </div>
                  <h3 className="font-bold text-navy mt-4 text-sm">{s.title}</h3>
                  <p className="text-xs text-body-muted mt-1 max-w-[160px] leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
