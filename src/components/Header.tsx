import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import CollegeCartLogo from "./CollegeCartLogo";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#why-us", label: "Why Us" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#earnings", label: "Earnings" },
  { href: "#support", label: "FAQ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = useCallback((href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-background transition-shadow ${scrolled ? "shadow-md border-b border-border-light" : ""}`}>
      <div className="container-main flex items-center justify-between h-16">
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo("#home"); }}>
          <CollegeCartLogo />
        </a>
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={(e) => { e.preventDefault(); scrollTo(l.href); }} className="text-sm font-medium text-body-muted hover:text-navy transition-colors cursor-pointer">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }} className="btn-pill">Apply Now</a>
        </div>
        <button className="lg:hidden text-navy" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border-light pb-4">
          <nav className="container-main flex flex-col gap-3 pt-4">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={(e) => { e.preventDefault(); scrollTo(l.href); }} className="text-sm font-medium text-body-muted py-1 cursor-pointer">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }} className="btn-pill w-fit mt-2">Apply Now</a>
          </nav>
        </div>
      )}
    </header>
  );
}
