import { createFileRoute } from "@tanstack/react-router";
import { Heart, Target, Eye, Award } from "lucide-react";
import heroImg from "@/assets/hero-elders.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Senior Citizen Samman Muheem" },
      { name: "description", content: "Learn about our journey, vision, and the values that drive Senior Citizen Samman Muheem." },
    ],
  }),
});

function AboutPage() {
  return (
    <div>
      <PageHero title="Who We Are" subtitle="A movement rooted in संस्कार, built on seva." />

      <section className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        <img src={heroImg} alt="Elders" width={1536} height={1024} loading="lazy" className="rounded-2xl shadow-elevated w-full h-[460px] object-cover" />
        <div>
          <h2 className="font-display text-3xl font-bold text-navy">Our Story</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Respecting elders is not just a tradition — it is our संस्कार. With this vision we proudly serve as
            <strong className="text-india-green"> Senior Citizen Samman Muheem</strong>, a mission dedicated to Care, Respect, Support and Dignity.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            For many years our team has been serving humanity through seva activities. In <strong className="text-saffron">2023</strong> we officially registered our NGO,
            though we have continuously worked for elderly care and operated old age home services in <strong>Sangam Vihar, Delhi</strong>.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
          {[
            { icon: Eye, title: "Our Vision", text: "A society where no elder feels lonely, helpless or disrespected." },
            { icon: Target, title: "Our Mission", text: "Deliver care, dignity, and seva to every senior citizen in need." },
            { icon: Award, title: "Our Values", text: "Respect • Care • Dignity • Humanity — guiding every action." },
          ].map((c) => (
            <div key={c.title} className="bg-card p-7 rounded-2xl border border-border shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-india-green/10 flex items-center justify-center mb-4">
                <c.icon className="w-6 h-6 text-india-green" />
              </div>
              <div className="font-display text-xl font-bold text-navy">{c.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 text-center">
        <Heart className="w-10 h-10 text-saffron mx-auto fill-saffron" />
        <p className="mt-4 max-w-2xl mx-auto font-display text-2xl text-navy italic">
          "Swasth Bujurg, Desh ka Gaurav — Sukhi Bujurg, Samaj ka Garv."
        </p>
      </section>
    </div>
  );
}

export function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="relative bg-gradient-to-br from-cream via-background to-accent/40 border-b border-border">
      <div className="absolute top-0 left-0 right-0 h-1 bg-tricolor-h" />
      <div className="container mx-auto px-4 py-16 md:py-20 text-center">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.15em] bg-india-green/10 text-india-green">
          <span className="w-1.5 h-1.5 rounded-full bg-saffron" /> Samman Muheem
        </span>
        <h1 className="mt-4 font-display text-4xl md:text-5xl font-bold text-navy">{title}</h1>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
      </div>
    </section>
  );
}
