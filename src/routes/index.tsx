import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, HandHeart, Users, Shield, ShoppingBag, Pill, Accessibility, Home, Megaphone, Scale, UsersRound, MapPin, ArrowRight, Quote } from "lucide-react";
import heroImg from "@/assets/hero-elders.jpg";
import sunsetImg from "@/assets/elders-sunset.jpg";
import sevaImg from "@/assets/seva-ration.jpg";
import oldAgeImg from "@/assets/old-age-home.jpg";
import awarenessImg from "@/assets/awareness.jpg";
import handsImg from "@/assets/hands-care.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Senior Citizen Samman Muheem — Respect, Care, Dignity" },
      { name: "description", content: "An NGO honouring our elders through ration seva, medical aid, old age home support, and awareness. Serving Delhi NCR & Faridabad." },
    ],
  }),
});

function Index() {
  return (
    <div>
      <Hero />
      <WhoWeAre />
      <Journey />
      <Services />
      <OldAgeHome />
      <Awareness />
      <Belief />
      <CTA />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-background to-accent/40" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-saffron/15 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-india-green/15 blur-3xl" />

      <div className="container mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center relative">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 border border-border text-xs font-semibold text-navy backdrop-blur">
            <span className="w-2 h-2 rounded-full bg-saffron" />
            Sammaan • Sahayog • Shiksha • Seva
          </div>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] text-navy">
            Welcome to <span className="block text-gradient-tricolor">Senior Citizen<br />Samman Muheem</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl leading-relaxed">
            "Swasth Bujurg, Desh ka Gaurav — Sukhi Bujurg, Samaj ka Garv."
            A national movement for the dignity, care and welfare of every elder among us.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-india-green text-india-green-foreground font-semibold shadow-soft hover:opacity-90 transition">
              Join the Mission <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white border border-border text-navy font-semibold hover:bg-accent transition">
              Our Services
            </Link>
          </div>
          <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-saffron text-saffron-foreground text-sm font-medium shadow-soft">
            <MapPin className="w-4 h-4" /> Serving Delhi NCR & Faridabad
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-tricolor rounded-3xl opacity-90 blur-[1px]" />
          <div className="relative rounded-2xl overflow-hidden shadow-elevated">
            <img src={heroImg} alt="Elderly Indian couple smiling" width={1536} height={1024} className="w-full h-[420px] md:h-[520px] object-cover" />
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur rounded-xl p-4 flex items-center gap-4 border border-border">
              <div className="w-12 h-12 rounded-full ashoka-chakra flex-shrink-0" />
              <div>
                <div className="text-xs uppercase tracking-wider text-india-green font-bold">Registered NGO • 2023</div>
                <div className="text-sm font-semibold text-navy">Respect • Care • Dignity • Humanity</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhoWeAre() {
  const pillars = [
    { icon: HandHeart, label: "Care", color: "text-india-green", bg: "bg-india-green/10" },
    { icon: Heart, label: "Respect", color: "text-saffron", bg: "bg-saffron/15" },
    { icon: Users, label: "Support", color: "text-navy", bg: "bg-navy/10" },
    { icon: Shield, label: "Dignity", color: "text-india-green", bg: "bg-india-green/10" },
  ];
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center max-w-3xl mx-auto">
        <SectionTag>Who We Are</SectionTag>
        <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-navy">
          Respecting elders is not just a tradition — <span className="text-saffron">it is our संस्कार</span>.
        </h2>
        <p className="mt-4 text-muted-foreground">
          With this vision we proudly present <strong className="text-india-green">Senior Citizen Samman Muheem</strong> —
          a mission dedicated to four guiding principles.
        </p>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {pillars.map((p) => (
          <div key={p.label} className="group p-6 rounded-2xl bg-card border border-border hover:shadow-elevated hover:-translate-y-1 transition-all">
            <div className={`w-14 h-14 rounded-xl ${p.bg} flex items-center justify-center mb-4`}>
              <p.icon className={`w-7 h-7 ${p.color}`} strokeWidth={2} />
            </div>
            <div className="font-display text-xl font-bold text-navy">{p.label}</div>
            <div className="mt-1 text-sm text-muted-foreground">A pillar of our mission for every elder we serve.</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section className="bg-gradient-to-br from-accent/30 to-cream py-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative order-2 md:order-1">
          <div className="absolute -inset-3 bg-tricolor rounded-3xl opacity-80" />
          <img src={handsImg} alt="Young hand holding elderly hand" width={1280} height={1024} loading="lazy" className="relative rounded-2xl w-full h-[400px] object-cover shadow-elevated" />
        </div>
        <div className="order-1 md:order-2">
          <SectionTag>Our Journey</SectionTag>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-navy">
            Years of seva, rooted in humanity.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            For many years, our team has been serving humanity through seva activities.
            <span className="block mt-3"><strong className="text-india-green">In 2023</strong>, we officially registered our NGO as
            <strong className="text-saffron"> Senior Citizen Samman Muheem</strong>.</span>
          </p>
          <div className="mt-6 p-5 rounded-xl bg-white border-l-4 border-saffron shadow-soft">
            <p className="text-sm text-foreground/80">
              Even before registration, we continuously worked for elderly care and operated old age home services in
              <strong className="text-navy"> Sangam Vihar, Delhi.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    { icon: ShoppingBag, title: "Home-to-Home Ration Seva", text: "Monthly groceries delivered to elders in need." },
    { icon: Pill, title: "Medicines & Medical Support", text: "Essential medicines and check-up assistance." },
    { icon: Accessibility, title: "Mobility Equipment", text: "Walking sticks, walkers, wheelchairs & elderly care gear." },
    { icon: Home, title: "Ghar Ghar Seva", text: "Door-to-door initiative for helpless elders." },
  ];
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <SectionTag>Our Services</SectionTag>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-navy">
            We support senior citizens through <span className="text-saffron">care that reaches their door.</span>
          </h2>
          <div className="mt-8 space-y-4">
            {items.map((s) => (
              <div key={s.title} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-india-green/50 transition">
                <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-india-green/10 flex items-center justify-center">
                  <s.icon className="w-6 h-6 text-india-green" />
                </div>
                <div>
                  <div className="font-semibold text-navy">{s.title}</div>
                  <div className="text-sm text-muted-foreground">{s.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img src={sevaImg} alt="Volunteer giving ration to elderly woman" width={1280} height={1024} loading="lazy" className="rounded-2xl w-full h-[520px] object-cover shadow-elevated" />
          <div className="absolute -bottom-5 -left-5 bg-saffron text-saffron-foreground p-5 rounded-xl shadow-elevated max-w-[200px]">
            <div className="font-display text-3xl font-bold">1000+</div>
            <div className="text-sm">elders supported across Delhi NCR</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OldAgeHome() {
  const features = [
    { icon: Heart, label: "Care" },
    { icon: HandHeart, label: "Emotional Support" },
    { icon: Shield, label: "Safety" },
    { icon: Home, label: "Peaceful Environment" },
  ];
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-india-green/5 to-transparent" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto">
          <SectionTag>Old Age Home Support</SectionTag>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
            <span className="text-saffron italic">Ashiyana</span> <span className="text-navy">Apno Ka</span>
          </h2>
          <p className="mt-3 text-muted-foreground">A home built on love, where every elder finds their family.</p>
        </div>

        <div className="mt-10 rounded-3xl overflow-hidden relative shadow-elevated">
          <img src={oldAgeImg} alt="Happy elderly residents at old age home" width={1280} height={1024} loading="lazy" className="w-full h-[420px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {features.map((f) => (
                <div key={f.label} className="bg-white/95 backdrop-blur rounded-xl p-4 text-center">
                  <f.icon className="w-7 h-7 mx-auto text-saffron mb-2" />
                  <div className="text-sm font-semibold text-navy">{f.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-8 text-center font-display italic text-lg text-india-green">
          "Because every elder deserves love, dignity, and respect."
        </p>
      </div>
    </section>
  );
}

function Awareness() {
  const items = [
    { icon: Megaphone, title: "Awareness Programmes", color: "bg-saffron/15 text-saffron" },
    { icon: Scale, title: "Legal Awareness Seminars", color: "bg-navy/10 text-navy" },
    { icon: UsersRound, title: "Family Counselling", color: "bg-india-green/10 text-india-green" },
  ];
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img src={awarenessImg} alt="Awareness seminar speaker" width={1280} height={1024} loading="lazy" className="rounded-2xl w-full h-[480px] object-cover shadow-elevated" />
        </div>
        <div>
          <SectionTag>Awareness & Counselling</SectionTag>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-navy">
            Educating society to protect the rights of every elder.
          </h2>
          <div className="mt-6 space-y-3">
            {items.map((it) => (
              <div key={it.title} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${it.color}`}>
                  <it.icon className="w-6 h-6" />
                </div>
                <div className="font-semibold text-navy">{it.title}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-5 rounded-xl bg-cream border border-border">
            <div className="text-xs uppercase tracking-wider text-saffron font-bold mb-2">Our Goal</div>
            <div className="flex flex-wrap gap-2">
              {["Respect for Elders", "Strong Family Values", "Compassion in Society"].map((g) => (
                <span key={g} className="px-3 py-1.5 rounded-full bg-white border border-border text-sm font-medium text-navy">{g}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Belief() {
  const items = ["Respect", "Care", "Safety", "Love", "A Peaceful Life with Dignity"];
  return (
    <section className="bg-navy text-navy-foreground py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-tricolor-h" />
      <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-saffron/20 blur-3xl" />
      <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-india-green/20 blur-3xl" />
      <div className="container mx-auto px-4 relative grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-saffron" /> Our Belief
          </div>
          <h2 className="mt-5 font-display text-4xl md:text-5xl font-bold">
            Every elder deserves <span className="text-saffron italic">more.</span>
          </h2>
          <ul className="mt-8 space-y-3">
            {items.map((i, idx) => (
              <li key={i} className="flex items-center gap-3 text-lg">
                <span className="w-8 h-8 rounded-full bg-tricolor-h flex items-center justify-center text-xs font-bold text-navy">{idx + 1}</span>
                {i}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <Quote className="w-16 h-16 text-saffron mb-4" />
          <p className="font-display text-2xl md:text-3xl leading-snug">
            "Respecting elders is respecting humanity. Together, we can build a culture of compassion, care, and dignity."
          </p>
          <div className="mt-6 flex items-center gap-3 text-sm text-navy-foreground/70">
            <div className="w-10 h-10 rounded-full ashoka-chakra" />
            Senior Citizen Samman Muheem
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      <img src={sunsetImg} alt="Elder at sunset" width={1536} height={1024} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl text-navy-foreground">
          <SectionTag light>Call to Action</SectionTag>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
            Join hands with us in this noble mission.
          </h2>
          <p className="mt-4 text-navy-foreground/80 text-lg">
            Together for Seva • Humanity • Respect. Every elder deserves to feel valued.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-3 max-w-lg">
            <Link to="/contact" className="px-6 py-3 rounded-md bg-saffron text-saffron-foreground font-semibold text-center hover:opacity-90 transition shadow-elevated">
              Support Us
            </Link>
            <Link to="/contact" className="px-6 py-3 rounded-md bg-white text-navy font-semibold text-center hover:bg-cream transition">
              Volunteer With Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTag({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.15em] ${light ? "bg-white/15 text-white border border-white/20" : "bg-india-green/10 text-india-green"}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-saffron" />
      {children}
    </span>
  );
}
