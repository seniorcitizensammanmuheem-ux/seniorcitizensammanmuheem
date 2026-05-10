import { Link } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/mission", label: "Mission" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="h-1 bg-tricolor-h" />
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Senior Citizen Samman Muheem logo" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
          <div className="leading-tight">
            <div className="font-display text-base sm:text-lg font-bold text-navy">Senior Citizen</div>
            <div className="text-[11px] sm:text-xs font-semibold tracking-wider text-india-green uppercase">Samman Muheem</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-india-green transition-colors rounded-md"
              activeProps={{ className: "px-4 py-2 text-sm font-semibold text-india-green bg-accent rounded-md" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://wa.me/918882237024?text=Namaste!%20I'd%20like%20to%20support%20Senior%20Citizen%20Samman%20Muheem."
            target="_blank"
            rel="noopener"
            className="ml-3 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-india-green text-india-green-foreground font-semibold text-sm shadow-soft hover:opacity-90 transition"
          >
            <Phone className="w-4 h-4" /> WhatsApp Us
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md hover:bg-accent" aria-label="Menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-3 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-accent text-sm font-medium"
                activeProps={{ className: "px-3 py-2 rounded-md bg-accent text-india-green font-semibold text-sm" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <a href="tel:8882237024" className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-saffron text-saffron-foreground font-semibold text-sm">
              <Phone className="w-4 h-4" /> 8882237024
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
