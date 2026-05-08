// import { createFileRoute } from "@tanstack/react-router";
import Layout from "@/components/Layout";
import { useScrollReveal } from "@/components/useScrollReveal";
import aboutImg from "@/assets/about-team.jpg";

/* Commented out for Vercel deploymentexport const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — CollegeCart" },
      { name: "description", content: "CollegeCart is India's fastest growing campus convenience delivery platform." },
    ],
  }),
  component: AboutPage,
});*/

const stats = [
  { value: "25+", label: "Campuses" },
  { value: "50,000+", label: "Happy Students" },
  { value: "300+", label: "Student Partners" },
  { value: "4.8★", label: "Average Rating" },
];

function AboutPage() {
  const ref = useScrollReveal();
  const statsRef = useScrollReveal();

  return (
    <Layout>
      <section className="section-padding bg-background">
        <div ref={ref} className="container-main fade-in-up">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <p className="section-label mb-3">ABOUT US</p>
              <h1 className="section-heading mb-6">We Make Campus Life Easier</h1>
              <p className="text-body-muted leading-relaxed mb-4">
                CollegeCart is India's fastest growing campus convenience delivery platform. We operate exclusively within campuses, serving hostel students with daily essentials, snacks, stationery and more — delivered fast, reliably and safely.
              </p>
              <p className="text-body-muted leading-relaxed">
                Our mission is to build a student-powered network that combines convenience, employment and entrepreneurship.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img
                src={aboutImg}
                alt="CollegeCart team on campus"
                className="rounded-2xl shadow-lg w-full"
                width={640}
                height={512}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section ref={statsRef} className="fade-in-up bg-muted">
        <div className="container-main py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <div key={s.label} className={`${i < stats.length - 1 ? "lg:border-r lg:border-border-light" : ""}`}>
                <p className="text-3xl font-extrabold text-navy">{s.value}</p>
                <p className="text-sm text-body-muted mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

// Export for standard React Router
export default AboutPage;
