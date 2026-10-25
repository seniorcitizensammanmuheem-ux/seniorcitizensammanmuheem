import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "./about";
import { DonateCard, UPI_ID } from "@/components/DonateCard";
import {
  GraduationCap,
  Heart,
  Home,
  Megaphone,
  Pill,
  QrCode,
  Users,
  Utensils,
} from "lucide-react";

export const Route = createFileRoute("/donate")({
  component: DonatePage,
  head: () => ({
    meta: [
      { title: "Donate Us — Senior Citizen Samman Muheem" },
      {
        name: "description",
        content:
          "Support Senior Citizen Samman Muheem. Scan our UPI QR code to donate and help provide meals, medicines, shelter and dignity to elders.",
      },
    ],
  }),
});

function DonatePage() {
  return (
    <div>
      <PageHero title="Donate Us" subtitle="Your support brings dignity, care and hope to every elder." />

      <section className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="font-display text-3xl font-bold text-navy">Your donation makes a difference</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Every contribution — big or small — helps us serve senior citizens with sammaan and care.
            Your generosity supports our seva on the ground in Delhi NCR &amp; Faridabad.
          </p>

          <ul className="mt-6 space-y-3">
            {[
              { icon: Utensils, text: "Nutritious meals and ration kits for elders and families" },
              { icon: Pill, text: "Medicines, health check-ups and daily care support" },
              { icon: Home, text: "Shelter and care at our old-age home in Sangam Vihar" },
              { icon: GraduationCap, text: "Education support for children and dignity for every daughter" },
            ].map((it) => (
              <li key={it.text} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                <div className="w-11 h-11 rounded-lg bg-india-green/10 flex items-center justify-center flex-shrink-0">
                  <it.icon className="w-5 h-5 text-india-green" />
                </div>
                <span className="text-foreground pt-2.5">{it.text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 p-6 rounded-2xl bg-cream border border-border">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground font-semibold">
              <QrCode className="w-4 h-4 text-saffron" /> How to donate
            </div>
            <ol className="mt-4 space-y-3 text-sm text-foreground">
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-saffron text-saffron-foreground text-xs font-bold flex items-center justify-center flex-shrink-0">1</span>
                Scan the QR code with any UPI app — BHIM, Google Pay, PhonePe, Paytm or your bank app.
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-saffron text-saffron-foreground text-xs font-bold flex items-center justify-center flex-shrink-0">2</span>
                Enter the amount and complete the payment. Our UPI ID is <span className="font-semibold">{UPI_ID}</span>.
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-saffron text-saffron-foreground text-xs font-bold flex items-center justify-center flex-shrink-0">3</span>
                Share the payment screenshot on WhatsApp so we can acknowledge your contribution.
              </li>
            </ol>
          </div>
        </div>

        <div className="lg:sticky lg:top-28">
          <DonateCard />
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-navy text-center">Other ways to help</h2>
          <p className="mt-2 text-muted-foreground text-center">Not able to donate right now? You can still make a difference.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {[
              { icon: Users, title: "Volunteer With Us", text: "Give your time and become part of the change." },
              { icon: Megaphone, title: "Spread Awareness", text: "Share our mission with friends and family." },
              { icon: Heart, title: "Care for Elders", text: "Begin at home — every small act of respect counts." },
            ].map((it) => (
              <div key={it.title} className="p-6 rounded-2xl bg-card border border-border text-center shadow-soft">
                <div className="w-12 h-12 mx-auto rounded-xl bg-india-green/10 flex items-center justify-center">
                  <it.icon className="w-6 h-6 text-india-green" />
                </div>
                <div className="mt-3 font-semibold text-navy">{it.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{it.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-tricolor-h py-2" />
      <section className="bg-cream py-12 text-center">
        <p className="font-display text-xl text-navy italic">"Aapka sahyog, kisi ki zindagi sanvaar sakta hai."</p>
        <p className="mt-2 text-sm text-muted-foreground">Your support can transform someone's life.</p>
      </section>
    </div>
  );
}
