import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { P as Phone, X, M as Menu, a as MapPin, b as Mail, c as MessageCircle, S as Send, C as CircleCheck } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const appCss = "/assets/styles-NoFg8GYT.css";
const logo = "/assets/logo-Kk1Li640.png";
const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/mission", label: "Mission" },
  { to: "/contact", label: "Contact" }
];
function Header() {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 bg-tricolor-h" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto flex items-center justify-between px-4 py-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-3 group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "Senior Citizen Samman Muheem logo", className: "w-12 h-12 sm:w-14 sm:h-14 object-contain" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-base sm:text-lg font-bold text-navy", children: "Senior Citizen" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] sm:text-xs font-semibold tracking-wider text-india-green uppercase", children: "Samman Muheem" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-1", children: [
        links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: l.to,
            className: "px-4 py-2 text-sm font-medium text-foreground/80 hover:text-india-green transition-colors rounded-md",
            activeProps: { className: "px-4 py-2 text-sm font-semibold text-india-green bg-accent rounded-md" },
            activeOptions: { exact: l.to === "/" },
            children: l.label
          },
          l.to
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://wa.me/918882237024?text=Namaste!%20I'd%20like%20to%20support%20Senior%20Citizen%20Samman%20Muheem.",
            target: "_blank",
            rel: "noopener",
            className: "ml-3 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-india-green text-india-green-foreground font-semibold text-sm shadow-soft hover:opacity-90 transition",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
              " WhatsApp Us"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOpen(!open), className: "md:hidden p-2 rounded-md hover:bg-accent", "aria-label": "Menu", children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "w-5 h-5" }) })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden border-t border-border bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-3 flex flex-col gap-1", children: [
      links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: l.to,
          onClick: () => setOpen(false),
          className: "px-3 py-2 rounded-md hover:bg-accent text-sm font-medium",
          activeProps: { className: "px-3 py-2 rounded-md bg-accent text-india-green font-semibold text-sm" },
          activeOptions: { exact: l.to === "/" },
          children: l.label
        },
        l.to
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:8882237024", className: "mt-2 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-saffron text-saffron-foreground font-semibold text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
        " 8882237024"
      ] })
    ] }) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-20 bg-navy text-navy-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 bg-tricolor-h" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-14 grid gap-10 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-lg bg-cream flex items-center justify-center p-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "Senior Citizen Samman Muheem logo", className: "w-full h-full object-contain" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg font-bold", children: "Senior Citizen Samman Muheem" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-navy-foreground/70 uppercase tracking-wider", children: "Respect • Care • Dignity • Humanity" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-md text-sm text-navy-foreground/80 leading-relaxed", children: '"Swasth Bujurg, Desh ka Gaurav — Sukhi Bujurg, Samaj ka Garv." A registered NGO dedicated to honouring our elders and serving every citizen in need.' })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold mb-3 text-saffron", children: "Explore" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-navy-foreground/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "hover:text-saffron", children: "About Us" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "hover:text-saffron", children: "Our Services" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/mission", className: "hover:text-saffron", children: "Our Mission" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hover:text-saffron", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold mb-3 text-saffron", children: "Reach Us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm text-navy-foreground/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4 mt-0.5 text-india-green" }),
            " Sangam Vihar, Delhi NCR & Faridabad"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4 mt-0.5 text-india-green" }),
            " +91 88822 37024"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4 mt-0.5 text-india-green" }),
            " connect@sammanmuheem.org"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-5 text-xs text-navy-foreground/60 flex flex-col sm:flex-row justify-between gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Senior Citizen Samman Muheem. Registered 2023."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Sammaan • Sahayog • Shiksha • Seva" })
    ] }) })
  ] });
}
const WHATSAPP_NUMBER = "918882237024";
const EMAIL_TO = "connect@sammanmuheem.org";
const schema = objectType({
  name: stringType().trim().min(2, "Please enter your name").max(80),
  contact: stringType().trim().min(5, "Phone or email required").max(120),
  subject: stringType().trim().min(2, "Subject required").max(120),
  message: stringType().trim().min(5, "Please write a short message").max(1e3)
});
function EnquiryForm() {
  const [errors, setErrors] = reactExports.useState({});
  const [sent, setSent] = reactExports.useState(null);
  function buildText(d) {
    return `*New Enquiry — Senior Citizen Samman Muheem*%0A%0A*Name:* ${encodeURIComponent(d.name)}%0A*Contact:* ${encodeURIComponent(d.contact)}%0A*Subject:* ${encodeURIComponent(d.subject)}%0A%0A${encodeURIComponent(d.message)}`;
  }
  function handle(channel) {
    return (e) => {
      e.preventDefault();
      const fd = new FormData(e.currentTarget);
      const parsed = schema.safeParse({
        name: fd.get("name"),
        contact: fd.get("contact"),
        subject: fd.get("subject"),
        message: fd.get("message")
      });
      if (!parsed.success) {
        const errs = {};
        parsed.error.issues.forEach((i) => {
          errs[i.path[0]] = i.message;
        });
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
          `Name: ${d.name}
Contact: ${d.contact}
Subject: ${d.subject}

${d.message}`
        );
        window.location.href = `mailto:${EMAIL_TO}?subject=${subject}&body=${body}`;
      }
      setSent(channel);
    };
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handle("both"), className: "p-7 rounded-2xl bg-card border border-border shadow-elevated", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-india-green/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-5 h-5 text-india-green" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold text-navy", children: "Enquiry Form" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Reach us directly on WhatsApp & Email." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid sm:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { name: "name", label: "Your Name", placeholder: "Full name", error: errors.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { name: "contact", label: "Phone / Email", placeholder: "+91 ...", error: errors.contact })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { name: "subject", label: "Subject", placeholder: "Volunteering, Donation, Support…", error: errors.subject }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium text-navy", children: "Message" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          name: "message",
          rows: 5,
          placeholder: "Tell us how we can help or how you'd like to help…",
          className: "mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-india-green"
        }
      ),
      errors.message && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-destructive", children: errors.message })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid sm:grid-cols-2 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "submit",
          className: "inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-india-green text-india-green-foreground font-semibold hover:opacity-90 shadow-soft transition",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4" }),
            " Send to WhatsApp & Email"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: (e) => handle("wa")(new Event("submit", { cancelable: true, bubbles: true })),
          className: "hidden",
          "aria-hidden": true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: `https://wa.me/${WHATSAPP_NUMBER}`,
          target: "_blank",
          rel: "noopener",
          className: "inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-saffron text-saffron-foreground font-semibold hover:opacity-90 transition shadow-soft",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }),
            " Chat on WhatsApp"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-col sm:flex-row sm:items-center gap-2 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-3.5 h-3.5 text-india-green" }),
        " +91 88822 37024"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "•" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-3.5 h-3.5 text-saffron" }),
        " ",
        EMAIL_TO
      ] })
    ] }),
    sent && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 p-4 rounded-lg bg-india-green/10 border border-india-green/30 text-india-green flex items-start gap-2 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 flex-shrink-0 mt-0.5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "WhatsApp and your Email app have been opened with your enquiry — please tap ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Send" }),
        " to deliver the message. 🙏"
      ] })
    ] })
  ] });
}
function Field({ name, label, placeholder, error }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium text-navy", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        name,
        placeholder,
        className: "mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-india-green"
      }
    ),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-destructive", children: error })
  ] });
}
function FloatingWhatsApp() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Namaste! I'd like to know more about Senior Citizen Samman Muheem.")}`,
      target: "_blank",
      rel: "noopener",
      "aria-label": "Chat on WhatsApp",
      className: "fixed bottom-5 right-5 z-50 group inline-flex items-center gap-2 pl-3 pr-4 py-3 rounded-full bg-[#25D366] text-white font-semibold shadow-elevated hover:scale-105 transition-transform",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-8 h-8 rounded-full bg-white/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-5 h-5", fill: "white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm hidden sm:inline", children: "Chat with us" })
      ]
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$5 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Senior Citizen Samman Muheem — Respect, Care, Dignity" },
      { name: "description", content: "An NGO dedicated to the dignity, care, and welfare of senior citizens across Delhi NCR & Faridabad." },
      { name: "author", content: "Senior Citizen Samman Muheem" },
      { property: "og:title", content: "Senior Citizen Samman Muheem — Respect, Care, Dignity" },
      { property: "og:description", content: "An NGO dedicated to the dignity, care, and welfare of senior citizens across Delhi NCR & Faridabad." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Senior Citizen Samman Muheem — Respect, Care, Dignity" },
      { name: "twitter:description", content: "An NGO dedicated to the dignity, care, and welfare of senior citizens across Delhi NCR & Faridabad." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7937ac30-a43f-45ec-a753-23d9edf1360d/id-preview-c7df4141--c31bf229-c07f-4f59-85e6-687f79a3a736.lovable.app-1778395554612.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7937ac30-a43f-45ec-a753-23d9edf1360d/id-preview-c7df4141--c31bf229-c07f-4f59-85e6-687f79a3a736.lovable.app-1778395554612.png" }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700;800&display=swap" },
      { rel: "stylesheet", href: appCss }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$5.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingWhatsApp, {})
  ] }) });
}
const $$splitComponentImporter$4 = () => import("./services-D3EDHi51.mjs");
const Route$4 = createFileRoute("/services")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component"),
  head: () => ({
    meta: [{
      title: "Services — Senior Citizen Samman Muheem"
    }, {
      name: "description",
      content: "Ration seva, medical aid, mobility equipment, old age home support, awareness, and more."
    }]
  })
});
const $$splitComponentImporter$3 = () => import("./mission-FkHbdrqO.mjs");
const Route$3 = createFileRoute("/mission")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component"),
  head: () => ({
    meta: [{
      title: "Our Mission — Senior Citizen Samman Muheem"
    }, {
      name: "description",
      content: "Our dream of a society where every elder feels respected, supported and loved."
    }]
  })
});
const $$splitComponentImporter$2 = () => import("./contact-Ct3i3DpT.mjs");
const Route$2 = createFileRoute("/contact")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component"),
  head: () => ({
    meta: [{
      title: "Contact — Senior Citizen Samman Muheem"
    }, {
      name: "description",
      content: "Reach Senior Citizen Samman Muheem in Delhi NCR & Faridabad. Volunteer, donate, or partner with us."
    }]
  })
});
const $$splitComponentImporter$1 = () => import("./about-Cfjx6dDK.mjs");
const Route$1 = createFileRoute("/about")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
  head: () => ({
    meta: [{
      title: "About — Senior Citizen Samman Muheem"
    }, {
      name: "description",
      content: "Learn about our journey, vision, and the values that drive Senior Citizen Samman Muheem."
    }]
  })
});
function PageHero({
  title,
  subtitle
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative bg-gradient-to-br from-cream via-background to-accent/40 border-b border-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 right-0 h-1 bg-tricolor-h" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-16 md:py-20 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.15em] bg-india-green/10 text-india-green", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-saffron" }),
        " Samman Muheem"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 font-display text-4xl md:text-5xl font-bold text-navy", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground max-w-2xl mx-auto", children: subtitle })
    ] })
  ] });
}
const $$splitComponentImporter = () => import("./index-WnJBKmOY.mjs");
const Route = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  head: () => ({
    meta: [{
      title: "Senior Citizen Samman Muheem — Respect, Care, Dignity"
    }, {
      name: "description",
      content: "An NGO honouring our elders through ration seva, medical aid, old age home support, and awareness. Serving Delhi NCR & Faridabad."
    }]
  })
});
const ServicesRoute = Route$4.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$5
});
const MissionRoute = Route$3.update({
  id: "/mission",
  path: "/mission",
  getParentRoute: () => Route$5
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$5
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$5
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$5
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  MissionRoute,
  ServicesRoute
};
const routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  EnquiryForm as E,
  PageHero as P,
  router as r
};
