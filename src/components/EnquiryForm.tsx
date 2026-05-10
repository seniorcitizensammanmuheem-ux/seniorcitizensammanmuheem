import { useState } from "react";
import { z } from "zod";
import { MessageCircle, Mail, Send, CheckCircle2 } from "lucide-react";

const WHATSAPP_NUMBER = "918882237024"; // +91 88822 37024
const EMAIL_TO = "connect@sammanmuheem.org";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  contact: z.string().trim().min(5, "Phone or email required").max(120),
  subject: z.string().trim().min(2, "Subject required").max(120),
  message: z.string().trim().min(5, "Please write a short message").max(1000),
});

export function EnquiryForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState<null | "wa" | "email" | "both">(null);

  function buildText(d: z.infer<typeof schema>) {
    return `*New Enquiry — Senior Citizen Samman Muheem*%0A%0A` +
      `*Name:* ${encodeURIComponent(d.name)}%0A` +
      `*Contact:* ${encodeURIComponent(d.contact)}%0A` +
      `*Subject:* ${encodeURIComponent(d.subject)}%0A%0A` +
      `${encodeURIComponent(d.message)}`;
  }

  function handle(channel: "wa" | "email" | "both") {
    return (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const fd = new FormData(e.currentTarget);
      const parsed = schema.safeParse({
        name: fd.get("name"),
        contact: fd.get("contact"),
        subject: fd.get("subject"),
        message: fd.get("message"),
      });
      if (!parsed.success) {
        const errs: Record<string, string> = {};
        parsed.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
        setErrors(errs);
        return;
      }
      setErrors({});
      const d = parsed.data;
      const text = buildText(d);

      if (channel === "wa" || channel === "both") {
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener");
      }
      if (channel === "email" || channel === "both") {
        const subject = encodeURIComponent(`Enquiry: ${d.subject}`);
        const body = encodeURIComponent(
          `Name: ${d.name}\nContact: ${d.contact}\nSubject: ${d.subject}\n\n${d.message}`
        );
        window.location.href = `mailto:${EMAIL_TO}?subject=${subject}&body=${body}`;
      }
      setSent(channel);
    };
  }

  return (
    <form onSubmit={handle("both")} className="p-7 rounded-2xl bg-card border border-border shadow-elevated">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-lg bg-india-green/10 flex items-center justify-center">
          <Send className="w-5 h-5 text-india-green" />
        </div>
        <div>
          <h3 className="font-display text-2xl font-bold text-navy">Enquiry Form</h3>
          <p className="text-sm text-muted-foreground">Reach us directly on WhatsApp & Email.</p>
        </div>
      </div>

      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        <Field name="name" label="Your Name" placeholder="Full name" error={errors.name} />
        <Field name="contact" label="Phone / Email" placeholder="+91 ..." error={errors.contact} />
      </div>
      <div className="mt-4">
        <Field name="subject" label="Subject" placeholder="Volunteering, Donation, Support…" error={errors.subject} />
      </div>
      <div className="mt-4">
        <label className="text-sm font-medium text-navy">Message</label>
        <textarea
          name="message"
          rows={5}
          placeholder="Tell us how we can help or how you'd like to help…"
          className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-india-green"
        />
        {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
      </div>

      <div className="mt-6 grid sm:grid-cols-2 gap-3">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-india-green text-india-green-foreground font-semibold hover:opacity-90 shadow-soft transition"
        >
          <Send className="w-4 h-4" /> Send to WhatsApp & Email
        </button>
        <button
          type="button"
          onClick={(e) => handle("wa")(new Event("submit", { cancelable: true, bubbles: true }) as unknown as React.FormEvent<HTMLFormElement>)}
          className="hidden"
          aria-hidden
        />
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-saffron text-saffron-foreground font-semibold hover:opacity-90 transition shadow-soft"
        >
          <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
        </a>
      </div>

      <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-2 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5"><MessageCircle className="w-3.5 h-3.5 text-india-green" /> +91 88822 37024</span>
        <span className="hidden sm:inline">•</span>
        <span className="inline-flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-saffron" /> {EMAIL_TO}</span>
      </div>

      {sent && (
        <div className="mt-5 p-4 rounded-lg bg-india-green/10 border border-india-green/30 text-india-green flex items-start gap-2 text-sm">
          <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <span>WhatsApp and your Email app have been opened with your enquiry — please tap <strong>Send</strong> to deliver the message. 🙏</span>
        </div>
      )}
    </form>
  );
}

function Field({ name, label, placeholder, error }: { name: string; label: string; placeholder?: string; error?: string }) {
  return (
    <div>
      <label className="text-sm font-medium text-navy">{label}</label>
      <input
        name={name}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-india-green"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Namaste! I'd like to know more about Senior Citizen Samman Muheem.")}`}
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 group inline-flex items-center gap-2 pl-3 pr-4 py-3 rounded-full bg-[#25D366] text-white font-semibold shadow-elevated hover:scale-105 transition-transform"
    >
      <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
        <MessageCircle className="w-5 h-5" fill="white" />
      </span>
      <span className="text-sm hidden sm:inline">Chat with us</span>
    </a>
  );
}
