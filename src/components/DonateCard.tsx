import { useState } from "react";
import { Check, Copy, HandHeart, ShieldCheck, Smartphone } from "lucide-react";

export const UPI_ID = "seniorsamman@sbi";
export const WHATSAPP_NUMBER = "918882237024";

function CopyUpiButton() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(UPI_ID);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard access can be blocked by the browser; the UPI ID stays visible to copy manually.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-border bg-background text-sm font-semibold text-navy hover:text-india-green hover:border-india-green transition"
    >
      {copied ? <Check className="w-4 h-4 text-india-green" /> : <Copy className="w-4 h-4" />}
      {copied ? "Copied" : "Copy UPI ID"}
    </button>
  );
}

export function DonateCard() {
  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-elevated text-center">
      <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-wider text-muted-foreground font-semibold">
        <Smartphone className="w-4 h-4 text-saffron" /> Scan &amp; Support
      </div>
      <h3 className="mt-2 font-display text-2xl font-bold text-navy">Donate via UPI</h3>

      <div className="mt-5 mx-auto max-w-[340px] rounded-xl overflow-hidden border border-border bg-white p-2">
        <img
          src="/NGO-qr_code.jpeg"
          alt="UPI QR code to donate to Senior Citizen Samman Muheem"
          width={568}
          height={765}
          className="w-full h-auto"
        />
      </div>

      <div className="mt-5 text-sm text-muted-foreground">
        Merchant: <span className="font-semibold text-navy">Senior Citizen Samman Muheem</span>
      </div>
      <div className="mt-1 text-sm text-muted-foreground">
        UPI ID: <span className="font-semibold text-navy">{UPI_ID}</span>
      </div>

      <div className="mt-4 flex flex-col sm:flex-row gap-2 justify-center">
        <CopyUpiButton />
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            "Namaste! I have made a donation to Senior Citizen Samman Muheem. Sharing my payment screenshot."
          )}`}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-india-green text-india-green-foreground font-semibold text-sm shadow-soft hover:opacity-90 transition"
        >
          <HandHeart className="w-4 h-4" /> Share on WhatsApp
        </a>
      </div>

      <p className="mt-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
        <ShieldCheck className="w-4 h-4 text-india-green" /> Secure payment directly to our official UPI ID
      </p>

      <p className="mt-4 text-xs text-muted-foreground">
        Donations are voluntary contributions towards our seva activities.
      </p>
    </div>
  );
}
