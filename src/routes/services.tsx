import { createFileRoute } from "@tanstack/react-router";
import { ShoppingBag, Pill, Accessibility, Home, Megaphone, Scale, UsersRound, Heart, BookOpen, GraduationCap, Gift } from "lucide-react";
import { PageHero } from "./about";
import sevaImg from "@/assets/seva-ration.jpg";
import oldAgeImg from "@/assets/old-age-home.jpg";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Senior Citizen Samman Muheem" },
      { name: "description", content: "Ration seva, medical aid, mobility equipment, old age home support, awareness, and more." },
    ],
  }),
});

const services = [
  { icon: ShoppingBag, title: "Home-to-Home Ration Seva", text: "Monthly groceries delivered to elders in need." },
  { icon: Pill, title: "Medicines & Medical Support", text: "Essential medicines and check-up assistance." },
  { icon: Accessibility, title: "Mobility Equipment", text: "Walking sticks, walkers, wheelchairs & care gear." },
  { icon: Home, title: "Ghar Ghar Seva", text: "Door-to-door initiative for helpless elders." },
  { icon: Megaphone, title: "Awareness Programmes", text: "Public campaigns for senior citizen welfare." },
  { icon: Scale, title: "Legal Awareness Seminars", text: "Educating elders on their rights and protections." },
  { icon: UsersRound, title: "Family Counselling", text: "Bringing families together with respect for elders." },
  { icon: Heart, title: "Old Age Home Support", text: "Ashiyana Apno Ka — care, safety, peace." },
  { icon: BookOpen, title: "Pustak Daan", text: "Book donation drive for needy children." },
  { icon: GraduationCap, title: "Education Support", text: "Helping with school fees & study material." },
  { icon: Gift, title: "Wedding Support", text: "Assisting weddings of daughters from weaker families." },
];

function ServicesPage() {
  return (
    <div>
      <PageHero title="Our Services" subtitle="Care that reaches every door — for elders and every citizen in need." />

      <section className="container mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div key={s.title} className="group p-6 rounded-2xl bg-card border border-border hover:shadow-elevated hover:border-india-green/50 hover:-translate-y-1 transition-all">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-saffron/20 to-india-green/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <s.icon className="w-7 h-7 text-india-green" />
              </div>
              <div className="font-display text-lg font-bold text-navy">{s.title}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.text}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <img src={sevaImg} alt="Ration seva" width={1280} height={1024} loading="lazy" className="rounded-2xl w-full h-[420px] object-cover shadow-elevated" />
          <div>
            <h2 className="font-display text-3xl font-bold text-navy">Seva that travels door to door</h2>
            <p className="mt-4 text-muted-foreground">Through "Ghar Ghar Seva" we visit elders who cannot step out, ensuring rations, medicines and emotional support reach them with dignity.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="font-display text-3xl font-bold text-navy">Ashiyana Apno Ka</h2>
          <p className="mt-4 text-muted-foreground">Our old age home in Sangam Vihar, Delhi provides care, emotional support, safety, and a peaceful environment — a true family for our elders.</p>
        </div>
        <img src={oldAgeImg} alt="Old age home" width={1280} height={1024} loading="lazy" className="rounded-2xl w-full h-[420px] object-cover shadow-elevated" />
      </section>
    </div>
  );
}
