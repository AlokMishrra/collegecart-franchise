import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import Layout from "@/components/Layout";
import { useScrollReveal } from "@/components/useScrollReveal";
import { Phone, Mail, Globe } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Apply — CollegeCart" },
      { name: "description", content: "Get in touch with CollegeCart or apply for a franchise today." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const ref = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);

  return (
    <Layout>
      <section className="section-padding bg-background">
        <div ref={ref} className="container-main fade-in-up">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left */}
            <div className="lg:w-[55%]">
              <p className="section-label mb-3">GET IN TOUCH</p>
              <h1 className="section-heading mb-4">Let's Build Something Amazing Together</h1>
              <p className="text-body-muted leading-relaxed mb-8">
                Have questions? We're here to help you start your journey with CollegeCart.
              </p>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                    <Phone size={18} className="text-gold" />
                  </div>
                  <span className="text-sm font-medium text-navy">+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                    <Mail size={18} className="text-gold" />
                  </div>
                  <span className="text-sm font-medium text-navy">franchise@collegecart.in</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                    <Globe size={18} className="text-gold" />
                  </div>
                  <span className="text-sm font-medium text-navy">www.collegecart.in</span>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="lg:w-[45%]">
              <div className="card-base">
                <h2 className="font-bold text-navy text-xl mb-6">Apply For Franchise</h2>

                {submitted ? (
                  <div className="text-center py-8">
                    <p className="text-navy font-bold text-lg">Thank you!</p>
                    <p className="text-body-muted text-sm mt-2">We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form
                    className="space-y-4"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                  >
                    <input
                      type="text"
                      placeholder="Full Name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border-light text-sm focus:outline-none focus:border-gold transition-colors"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border-light text-sm focus:outline-none focus:border-gold transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border-light text-sm focus:outline-none focus:border-gold transition-colors"
                    />
                    <select
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border-light text-sm text-body-muted focus:outline-none focus:border-gold transition-colors"
                    >
                      <option value="">Select College / Location</option>
                      <option value="north">North India</option>
                      <option value="south">South India</option>
                      <option value="east">East India</option>
                      <option value="west">West India</option>
                      <option value="central">Central India</option>
                    </select>
                    <textarea
                      placeholder="Tell us about yourself"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-border-light text-sm resize-none focus:outline-none focus:border-gold transition-colors"
                    />
                    <button type="submit" className="btn-primary w-full">
                      Submit Application
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
