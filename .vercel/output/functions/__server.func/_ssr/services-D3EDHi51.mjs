import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero } from "./router-CVpz-2ea.mjs";
import { s as sevaImg, o as oldAgeImg } from "./old-age-home-uyh0esRQ.mjs";
import { d as ShoppingBag, e as Pill, A as Accessibility, H as House, f as Megaphone, g as Scale, U as UsersRound, h as Heart, B as BookOpen, G as GraduationCap, i as Gift } from "../_libs/lucide-react.mjs";
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
const services = [{
  icon: ShoppingBag,
  title: "Home-to-Home Ration Seva",
  text: "Monthly groceries delivered to elders in need."
}, {
  icon: Pill,
  title: "Medicines & Medical Support",
  text: "Essential medicines and check-up assistance."
}, {
  icon: Accessibility,
  title: "Mobility Equipment",
  text: "Walking sticks, walkers, wheelchairs & care gear."
}, {
  icon: House,
  title: "Ghar Ghar Seva",
  text: "Door-to-door initiative for helpless elders."
}, {
  icon: Megaphone,
  title: "Awareness Programmes",
  text: "Public campaigns for senior citizen welfare."
}, {
  icon: Scale,
  title: "Legal Awareness Seminars",
  text: "Educating elders on their rights and protections."
}, {
  icon: UsersRound,
  title: "Family Counselling",
  text: "Bringing families together with respect for elders."
}, {
  icon: Heart,
  title: "Old Age Home Support",
  text: "Ashiyana Apno Ka — care, safety, peace."
}, {
  icon: BookOpen,
  title: "Pustak Daan",
  text: "Book donation drive for needy children."
}, {
  icon: GraduationCap,
  title: "Education Support",
  text: "Helping with school fees & study material."
}, {
  icon: Gift,
  title: "Wedding Support",
  text: "Assisting weddings of daughters from weaker families."
}];
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { title: "Our Services", subtitle: "Care that reaches every door — for elders and every citizen in need." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto px-4 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group p-6 rounded-2xl bg-card border border-border hover:shadow-elevated hover:border-india-green/50 hover:-translate-y-1 transition-all", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-xl bg-gradient-to-br from-saffron/20 to-india-green/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "w-7 h-7 text-india-green" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg font-bold text-navy", children: s.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-sm text-muted-foreground", children: s.text })
    ] }, s.title)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-cream py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: sevaImg, alt: "Ration seva", width: 1280, height: 1024, loading: "lazy", className: "rounded-2xl w-full h-[420px] object-cover shadow-elevated" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-navy", children: "Seva that travels door to door" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: 'Through "Ghar Ghar Seva" we visit elders who cannot step out, ensuring rations, medicines and emotional support reach them with dignity.' })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-navy", children: "Ashiyana Apno Ka" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Our old age home in Sangam Vihar, Delhi provides care, emotional support, safety, and a peaceful environment — a true family for our elders." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: oldAgeImg, alt: "Old age home", width: 1280, height: 1024, loading: "lazy", className: "rounded-2xl w-full h-[420px] object-cover shadow-elevated" })
    ] })
  ] });
}
export {
  ServicesPage as component
};
