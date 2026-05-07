import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import CollegeCartLogo from "./CollegeCartLogo";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/why-us", label: "Why Us" },
  { to: "/franchise-process", label: "Franchise Process" },
  { to: "/support", label: "Support" },
] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-background transition-shadow ${scrolled ? "shadow-md border-b border-border-light" : ""}`}
    >
      <div className="container-main flex items-center justify-between h-16">
        <Link to="/">
          <CollegeCartLogo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-body-muted hover:text-navy transition-colors"
              activeProps={{ className: "text-sm font-medium text-navy font-bold" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn-pill">
            Apply Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-navy"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border-light pb-4">
          <nav className="container-main flex flex-col gap-3 pt-4">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm font-medium text-body-muted py-1"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact" className="btn-pill w-fit mt-2" onClick={() => setMobileOpen(false)}>
              Apply Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
