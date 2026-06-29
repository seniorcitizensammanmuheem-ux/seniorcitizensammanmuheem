import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero, E as EnquiryForm } from "./router-DadHDevd.mjs";
import { P as Phone, b as Mail, a as MapPin, m as HandHeart, n as Users, f as Megaphone, h as Heart } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "../_libs/zod.mjs";
function ContactPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { title: "Get In Touch", subtitle: "Join hands with us — Sammaan, Sahayog, Shiksha, Seva." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto px-4 py-16 grid md:grid-cols-3 gap-5", children: [{
      icon: Phone,
      label: "Call Us",
      value: "+91 88822 37024",
      href: "tel:8882237024"
    }, {
      icon: Mail,
      label: "Email",
      value: "connect@sammanmuheem.org",
      href: "mailto:connect@sammanmuheem.org"
    }, {
      icon: MapPin,
      label: "Serving",
      value: "Delhi NCR & Faridabad"
    }].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-2xl bg-card border border-border text-center shadow-soft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 mx-auto rounded-xl bg-saffron/15 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "w-6 h-6 text-saffron" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-xs uppercase tracking-wider text-muted-foreground font-semibold", children: c.label }),
      c.href ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: c.href, className: "mt-1 block font-semibold text-navy hover:text-india-green", children: c.value }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-semibold text-navy", children: c.value })
    ] }, c.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-4 pb-16 grid lg:grid-cols-2 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-navy", children: "How you can join" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-3", children: [{
          icon: HandHeart,
          title: "Support Us",
          text: "Donate ration kits, medicines or financial support."
        }, {
          icon: Users,
          title: "Volunteer With Us",
          text: "Give your time and become part of the change."
        }, {
          icon: Megaphone,
          title: "Spread Awareness",
          text: "Share our mission with friends and family."
        }, {
          icon: Heart,
          title: "Respect & Care for Elders",
          text: "Begin at home — every small act counts."
        }].map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 p-4 rounded-xl bg-card border border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-lg bg-india-green/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(it.icon, { className: "w-5 h-5 text-india-green" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-navy", children: it.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: it.text })
          ] })
        ] }, it.title)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(EnquiryForm, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-tricolor-h py-2" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-cream py-12 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl text-navy italic", children: '"Together we can make every elder feel valued."' }) })
  ] });
}
export {
  ContactPage as component
};
