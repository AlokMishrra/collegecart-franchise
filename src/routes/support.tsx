// import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import Layout from "@/components/Layout";
import { useScrollReveal } from "@/components/useScrollReveal";
import { Plus, Minus } from "lucide-react";
import faqImg from "@/assets/faq-illustration.jpg";

/* Commented out for Vercel deploymentexport const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "FAQ — CollegeCart" },
      { name: "description", content: "Frequently asked questions about CollegeCart franchise." },
    ],
  }),
  component: SupportPage,
});*/

const faqs = [
  {
    q: "What is CollegeCart Franchise?",
    a: "CollegeCart Franchise allows you to run a campus delivery business under the CollegeCart brand, using our proven systems, technology, and support to serve students on your campus.",
  },
  {
    q: "How much investment is required?",
    a: "The initial investment is minimal and affordable. We keep setup costs low so that students and young entrepreneurs can get started without a heavy financial burden.",
  },
  {
    q: "What is the expected profit?",
    a: "Monthly profits typically range from ₹20,000 to ₹1,00,000+ depending on campus size and order volume. You keep 100% of the profit from your campus operations.",
  },
  {
    q: "Do I need previous experience?",
    a: "No prior business experience is needed. We provide complete training, onboarding, and ongoing support to help you succeed from day one.",
  },
  {
    q: "What support will I get?",
    a: "You get full access to our brand, technology platform, marketing materials, training programs, and a dedicated operations support team to guide you at every step.",
  },
];

function SupportPage() {
  const ref = useScrollReveal();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Layout>
      <section className="section-padding bg-background">
        <div ref={ref} className="container-main fade-in-up">
          <h1 className="section-heading text-center mb-12">Frequently Asked Questions</h1>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-[40%]">
              <img
                src={faqImg}
                alt="FAQ illustration"
                className="w-full max-w-sm mx-auto"
                width={512}
                height={512}
                loading="lazy"
              />
            </div>

            <div className="lg:w-[60%]">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-border-light">
                  <button
                    className="w-full flex items-center justify-between py-5 text-left"
                    onClick={() => setOpen(open === i ? null : i)}
                  >
                    <span className="font-bold text-navy text-sm pr-4">{faq.q}</span>
                    {open === i ? (
                      <Minus size={18} className="text-gold shrink-0" />
                    ) : (
                      <Plus size={18} className="text-gold shrink-0" />
                    )}
                  </button>
                  {open === i && (
                    <p className="pb-5 text-sm text-body-muted leading-relaxed">{faq.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

// Export for standard React Router
export default SupportPage;
