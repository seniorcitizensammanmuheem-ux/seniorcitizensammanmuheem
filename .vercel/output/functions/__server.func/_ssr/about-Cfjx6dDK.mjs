import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { h as heroImg } from "./hero-elders-BHpHW5N4.mjs";
import { E as Eye, T as Target, o as Award, h as Heart } from "../_libs/lucide-react.mjs";
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { title: "Who We Are", subtitle: "A movement rooted in संस्कार, built on seva." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "Elders", width: 1536, height: 1024, loading: "lazy", className: "rounded-2xl shadow-elevated w-full h-[460px] object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-navy", children: "Our Story" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: [
          "Respecting elders is not just a tradition — it is our संस्कार. With this vision we proudly serve as",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-india-green", children: " Senior Citizen Samman Muheem" }),
          ", a mission dedicated to Care, Respect, Support and Dignity."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: [
          "For many years our team has been serving humanity through seva activities. In ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-saffron", children: "2023" }),
          " we officially registered our NGO, though we have continuously worked for elderly care and operated old age home services in ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Sangam Vihar, Delhi" }),
          "."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-cream py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 grid md:grid-cols-3 gap-6", children: [{
      icon: Eye,
      title: "Our Vision",
      text: "A society where no elder feels lonely, helpless or disrespected."
    }, {
      icon: Target,
      title: "Our Mission",
      text: "Deliver care, dignity, and seva to every senior citizen in need."
    }, {
      icon: Award,
      title: "Our Values",
      text: "Respect • Care • Dignity • Humanity — guiding every action."
    }].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card p-7 rounded-2xl border border-border shadow-soft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-india-green/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "w-6 h-6 text-india-green" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl font-bold text-navy", children: c.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: c.text })
    ] }, c.title)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-4 py-16 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-10 h-10 text-saffron mx-auto fill-saffron" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl mx-auto font-display text-2xl text-navy italic", children: '"Swasth Bujurg, Desh ka Gaurav — Sukhi Bujurg, Samaj ka Garv."' })
    ] })
  ] });
}
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
export {
  PageHero,
  AboutPage as component
};
