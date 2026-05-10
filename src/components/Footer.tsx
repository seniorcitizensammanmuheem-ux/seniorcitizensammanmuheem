import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="mt-20 bg-navy text-navy-foreground">
      <div className="h-1 bg-tricolor-h" />
      <div className="container mx-auto px-4 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-lg bg-cream flex items-center justify-center p-1">
              <img src={logo} alt="Senior Citizen Samman Muheem logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="font-display text-lg font-bold">Senior Citizen Samman Muheem</div>
              <div className="text-xs text-navy-foreground/70 uppercase tracking-wider">Respect • Care • Dignity • Humanity</div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm text-navy-foreground/80 leading-relaxed">
            "Swasth Bujurg, Desh ka Gaurav — Sukhi Bujurg, Samaj ka Garv." A registered NGO
            dedicated to honouring our elders and serving every citizen in need.
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold mb-3 text-saffron">Explore</div>
          <ul className="space-y-2 text-sm text-navy-foreground/80">
            <li><Link to="/about" className="hover:text-saffron">About Us</Link></li>
            <li><Link to="/services" className="hover:text-saffron">Our Services</Link></li>
            <li><Link to="/mission" className="hover:text-saffron">Our Mission</Link></li>
            <li><Link to="/contact" className="hover:text-saffron">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold mb-3 text-saffron">Reach Us</div>
          <ul className="space-y-3 text-sm text-navy-foreground/80">
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-india-green" /> Sangam Vihar, Delhi NCR & Faridabad</li>
            <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 text-india-green" /> +91 88822 37024</li>
            <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 text-india-green" /> connect@sammanmuheem.org</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 text-xs text-navy-foreground/60 flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Senior Citizen Samman Muheem. Registered 2023.</span>
          <span>Sammaan • Sahayog • Shiksha • Seva</span>
        </div>
      </div>
    </footer>
  );
}
