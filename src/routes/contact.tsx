import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Mail, HandHeart, Megaphone, Heart, Users } from "lucide-react";
import { PageHero } from "./about";
import { EnquiryForm } from "@/components/EnquiryForm";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Senior Citizen Samman Muheem" },
      { name: "description", content: "Reach Senior Citizen Samman Muheem in Delhi NCR & Faridabad. Volunteer, donate, or partner with us." },
    ],
  }),
});

function ContactPage() {
  return (
    <div>
      <PageHero title="Get In Touch" subtitle="Join hands with us — Sammaan, Sahayog, Shiksha, Seva." />

      <section className="container mx-auto px-4 py-16 grid md:grid-cols-3 gap-5">
        {[
          { icon: Phone, label: "Call Us", value: "+91 88822 37024", href: "tel:8882237024" },
          { icon: Mail, label: "Email", value: "connect@sammanmuheem.org", href: "mailto:connect@sammanmuheem.org" },
          { icon: MapPin, label: "Serving", value: "Delhi NCR & Faridabad" },
        ].map((c) => (
          <div key={c.label} className="p-6 rounded-2xl bg-card border border-border text-center shadow-soft">
            <div className="w-12 h-12 mx-auto rounded-xl bg-saffron/15 flex items-center justify-center">
              <c.icon className="w-6 h-6 text-saffron" />
            </div>
            <div className="mt-3 text-xs uppercase tracking-wider text-muted-foreground font-semibold">{c.label}</div>
            {c.href ? (
              <a href={c.href} className="mt-1 block font-semibold text-navy hover:text-india-green">{c.value}</a>
            ) : (
              <div className="mt-1 font-semibold text-navy">{c.value}</div>
            )}
          </div>
        ))}
      </section>

      <section className="container mx-auto px-4 pb-16 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="font-display text-3xl font-bold text-navy">How you can join</h2>
          <div className="mt-6 space-y-3">
            {[
              { icon: HandHeart, title: "Support Us", text: "Donate ration kits, medicines or financial support." },
              { icon: Users, title: "Volunteer With Us", text: "Give your time and become part of the change." },
              { icon: Megaphone, title: "Spread Awareness", text: "Share our mission with friends and family." },
              { icon: Heart, title: "Respect & Care for Elders", text: "Begin at home — every small act counts." },
            ].map((it) => (
              <div key={it.title} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                <div className="w-11 h-11 rounded-lg bg-india-green/10 flex items-center justify-center flex-shrink-0">
                  <it.icon className="w-5 h-5 text-india-green" />
                </div>
                <div>
                  <div className="font-semibold text-navy">{it.title}</div>
                  <div className="text-sm text-muted-foreground">{it.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <EnquiryForm />
      </section>

      <section className="bg-tricolor-h py-2" />
      <section className="bg-cream py-12 text-center">
        <p className="font-display text-xl text-navy italic">"Together we can make every elder feel valued."</p>
      </section>
    </div>
  );
}
