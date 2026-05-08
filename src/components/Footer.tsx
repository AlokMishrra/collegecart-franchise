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
    <a href={`#${href}`} onClick={(e) => { e.preventDefault(); scrollTo(href); }} className="hover:text-gold transition-colors cursor-pointer">
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container-main section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <CollegeCartLogo className="!text-2xl [&>span:first-child]:text-white" />
            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              CollegeCart is India's campus-focused student delivery platform helping hostel students get groceries, snacks, stationery, beverages, and essentials delivered fast inside campuses. Our franchise model empowers students to become entrepreneurs.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><FooterLink href="home">Home</FooterLink></li>
              <li><FooterLink href="about">About Us</FooterLink></li>
              <li><FooterLink href="how-it-works">How It Works</FooterLink></li>
              <li><FooterLink href="why-us">Why CollegeCart</FooterLink></li>
              <li><FooterLink href="earnings">Earnings</FooterLink></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm">Franchise</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><FooterLink href="benefits">Franchise Benefits</FooterLink></li>
              <li><FooterLink href="who-can-apply">Who Can Apply</FooterLink></li>
              <li><FooterLink href="contact">Apply Now</FooterLink></li>
            </ul>
            <h4 className="font-bold mb-3 mt-6 text-sm">Support</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><FooterLink href="support">FAQ</FooterLink></li>
              <li><FooterLink href="contact">Contact Us</FooterLink></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm">Contact</h4>
            <div className="space-y-2 text-sm text-white/70 mb-6">
              <p>📞 +91 7248316506</p>
              <p>📧 franchise@collegecarts.in</p>
              <p>🌐 www.collegecarts.in</p>
            </div>
            <h4 className="font-bold mb-3 text-sm">Follow Us</h4>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-gold flex items-center justify-center hover:scale-110 transition-transform" aria-label="Facebook"><Facebook size={16} /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-gold flex items-center justify-center hover:scale-110 transition-transform" aria-label="Instagram"><Instagram size={16} /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-gold flex items-center justify-center hover:scale-110 transition-transform" aria-label="LinkedIn"><Linkedin size={16} /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-gold flex items-center justify-center hover:scale-110 transition-transform" aria-label="YouTube"><Youtube size={16} /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/50">
        © {new Date().getFullYear()} CollegeCart. All rights reserved.
      </div>
    </footer>
  );
}
