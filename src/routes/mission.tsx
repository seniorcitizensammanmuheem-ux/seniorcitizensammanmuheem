import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, XCircle, Handshake, HeartHandshake, HandHeart } from "lucide-react";
import { PageHero } from "./about";
import sunsetImg from "@/assets/elders-sunset.jpg";

export const Route = createFileRoute("/mission")({
  component: MissionPage,
  head: () => ({
    meta: [
      { title: "Our Mission — Senior Citizen Samman Muheem" },
      { name: "description", content: "Our dream of a society where every elder feels respected, supported and loved." },
    ],
  }),
});

function MissionPage() {
  return (
    <div>
      <PageHero title="Our Mission" subtitle="Building a society of dignity, sammaan and sahayog for every elder." />

      <section className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-display text-3xl font-bold text-navy">We dream of a society where:</h2>
          <ul className="mt-6 space-y-3">
            {[
              "No elderly person feels lonely",
              "No senior citizen feels helpless",
              "No elder feels disrespected",
              "Every child finds support in education",
              "Every daughter is married with dignity",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                <XCircle className="w-5 h-5 text-saffron flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-3xl font-bold text-navy">Together, we build a culture of:</h2>
          <div className="mt-6 grid grid-cols-3 gap-4">
            {[
              { icon: Handshake, label: "Humanity", color: "bg-saffron/15 text-saffron" },
              { icon: HeartHandshake, label: "Compassion", color: "bg-india-green/10 text-india-green" },
              { icon: HandHeart, label: "Care", color: "bg-navy/10 text-navy" },
            ].map((p) => (
              <div key={p.label} className="text-center p-5 rounded-2xl bg-card border border-border shadow-soft">
                <div className={`w-14 h-14 rounded-full mx-auto flex items-center justify-center ${p.color}`}>
                  <p.icon className="w-7 h-7" />
                </div>
                <div className="mt-3 font-semibold text-navy">{p.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-5 rounded-xl bg-india-green text-india-green-foreground">
            <div className="text-xs uppercase tracking-wider font-bold opacity-80 mb-2">Our Promise</div>
            <p className="text-lg font-display">Every action of ours adds a smile, a meal, a moment of dignity to someone's life.</p>
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <img src={sunsetImg} alt="Elder at sunset" width={1536} height={1024} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="container mx-auto px-4 relative text-center text-navy-foreground">
          <CheckCircle2 className="w-12 h-12 mx-auto text-saffron mb-4" />
          <p className="max-w-3xl mx-auto font-display text-2xl md:text-3xl italic">
            "Aapka sahyog, kisi ki zindagi sanvaar sakta hai."
          </p>
          <p className="mt-3 text-navy-foreground/80">Your support can transform someone's life.</p>
        </div>
      </section>
    </div>
  );
}
