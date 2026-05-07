import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import CollegeCartLogo from "./CollegeCartLogo";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={`#${href}`}
      onClick={(e) => { e.preventDefault(); scrollTo(href); }}
      className="hover:text-gold transition-colors cursor-pointer"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container-main section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 */}
          <div>
            <CollegeCartLogo className="!text-2xl [&>span:first-child]:text-white" />
            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              India's Leading Campus Convenience Delivery Platform
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-bold mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><FooterLink href="home">Home</FooterLink></li>
              <li><FooterLink href="about">About Us</FooterLink></li>
              <li><FooterLink href="how-it-works">How It Works</FooterLink></li>
              <li><FooterLink href="franchise-opportunity">Franchise Opportunity</FooterLink></li>
              <li><FooterLink href="why-us">Why CollegeCart</FooterLink></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-bold mb-4 text-sm">Franchise</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><FooterLink href="franchise-opportunity">Franchise Opportunity</FooterLink></li>
              <li><FooterLink href="franchise-process">Franchise Process</FooterLink></li>
              <li><FooterLink href="contact">Apply Now</FooterLink></li>
            </ul>
            <h4 className="font-bold mb-3 mt-6 text-sm">Support</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><FooterLink href="support">FAQ</FooterLink></li>
              <li><FooterLink href="contact">Contact Us</FooterLink></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-bold mb-4 text-sm">Follow Us</h4>
            <div className="flex gap-3 mb-6">
              <a href="#" className="w-9 h-9 rounded-full bg-gold flex items-center justify-center hover:scale-110 transition-transform" aria-label="Facebook"><Facebook size={16} /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-gold flex items-center justify-center hover:scale-110 transition-transform" aria-label="Instagram"><Instagram size={16} /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-gold flex items-center justify-center hover:scale-110 transition-transform" aria-label="LinkedIn"><Linkedin size={16} /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-gold flex items-center justify-center hover:scale-110 transition-transform" aria-label="YouTube"><Youtube size={16} /></a>
            </div>
            <h4 className="font-bold mb-3 text-sm">Stay Updated</h4>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-3 py-2 rounded-l-md text-sm text-foreground bg-white/10 border border-white/20 placeholder:text-white/40 focus:outline-none focus:border-gold"
              />
              <button type="submit" className="bg-gold text-white font-bold text-sm px-4 py-2 rounded-r-md hover:bg-gold/90 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/50">
        © 2024 CollegeCart. All rights reserved.
      </div>
    </footer>
  );
}
