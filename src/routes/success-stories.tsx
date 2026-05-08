// import { createFileRoute } from "@tanstack/react-router";
import Layout from "@/components/Layout";
import { useScrollReveal } from "@/components/useScrollReveal";
import { Star, Quote } from "lucide-react";

/* Commented out for Vercel deploymentexport const Route = createFileRoute("/success-stories")({
  head: () => ({
    meta: [
      { title: "Success Stories — CollegeCart" },
      { name: "description", content: "Loved by students, trusted by partners. Read what CollegeCart franchisees say." },
    ],
  }),
  component: SuccessStoriesPage,
});*/

const testimonials = [
  {
    quote: "CollegeCart made life so easy. We get everything at our doorstep within 20 mins!",
    name: "Rohit Sharma",
    title: "Student, LPU",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote: "Great support, high profits and happy students. Best business decision!",
    name: "Ankit Verma",
    title: "Campus Partner, TIET",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote: "The system, the brand and the team — everything is just perfect.",
    name: "Siddharth Rao",
    title: "Campus Partner, RVCE",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  },
];

function SuccessStoriesPage() {
  const ref = useScrollReveal();

  return (
    <Layout>
      <section className="section-padding bg-muted">
        <div ref={ref} className="container-main fade-in-up text-center">
          <p className="section-label mb-3">SUCCESS STORIES</p>
          <h1 className="section-heading mb-12">Loved By Students. Trusted By Partners.</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="card-base text-left relative">
                <Quote size={28} className="text-gold/30 mb-3" />
                <p className="text-body-muted text-sm leading-relaxed mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                    width={40}
                    height={40}
                    loading="lazy"
                  />
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
    </Layout>
  );
}

// Export for standard React Router
export default SuccessStoriesPage;
