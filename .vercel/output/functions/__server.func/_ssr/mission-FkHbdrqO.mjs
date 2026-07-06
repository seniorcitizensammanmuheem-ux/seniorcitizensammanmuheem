import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero } from "./router-CVpz-2ea.mjs";
import { s as sunsetImg } from "./elders-sunset-Cl4WyWUy.mjs";
import { j as CircleX, k as Handshake, l as HeartHandshake, m as HandHeart, C as CircleCheck } from "../_libs/lucide-react.mjs";
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
function MissionPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { title: "Our Mission", subtitle: "Building a society of dignity, sammaan and sahayog for every elder." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-navy", children: "We dream of a society where:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3", children: ["No elderly person feels lonely", "No senior citizen feels helpless", "No elder feels disrespected", "Every child finds support in education", "Every daughter is married with dignity"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 p-4 rounded-xl bg-card border border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-5 h-5 text-saffron flex-shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: t })
        ] }, t)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-navy", children: "Together, we build a culture of:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid grid-cols-3 gap-4", children: [{
          icon: Handshake,
          label: "Humanity",
          color: "bg-saffron/15 text-saffron"
        }, {
          icon: HeartHandshake,
          label: "Compassion",
          color: "bg-india-green/10 text-india-green"
        }, {
          icon: HandHeart,
          label: "Care",
          color: "bg-navy/10 text-navy"
        }].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-5 rounded-2xl bg-card border border-border shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-14 h-14 rounded-full mx-auto flex items-center justify-center ${p.color}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { className: "w-7 h-7" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-semibold text-navy", children: p.label })
        ] }, p.label)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 p-5 rounded-xl bg-india-green text-india-green-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider font-bold opacity-80 mb-2", children: "Our Promise" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-display", children: "Every action of ours adds a smile, a meal, a moment of dignity to someone's life." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-20 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: sunsetImg, alt: "Elder at sunset", width: 1536, height: 1024, loading: "lazy", className: "absolute inset-0 w-full h-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-navy/85" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 relative text-center text-navy-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-12 h-12 mx-auto text-saffron mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-3xl mx-auto font-display text-2xl md:text-3xl italic", children: '"Aapka sahyog, kisi ki zindagi sanvaar sakta hai."' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-navy-foreground/80", children: "Your support can transform someone's life." })
      ] })
    ] })
  ] });
}
export {
  MissionPage as component
};
