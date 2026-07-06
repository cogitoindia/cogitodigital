import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  Palette, Globe, Search, Target, Video, ArrowUpRight, Check, Sparkles,
  LineChart, Camera, Instagram, Megaphone, Layers, Rocket, Zap, Award, Users,
} from "lucide-react";
import { Nav, SmoothScroll, Reveal, SplitReveal, Counter, Magnetic } from "@/components/site/experience";
import { AmbientBackground, Contact, Footer } from "@/components/site/sections";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services - Branding, Web, SEO, Ads & Content · Cogito Digital" },
      {
        name: "description",
        content:
          "Explore Cogito Digital's services: brand identity, website design & development, SEO, performance marketing and content production - engineered for measurable growth.",
      },
      { property: "og:title", content: "Services · Cogito Digital" },
      { property: "og:description", content: "Five disciplines. One studio. Built to make ambitious brands unforgettable." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

/* ─────────────── Data ─────────────── */

const SERVICES = [
  {
    slug: "branding",
    n: "01",
    title: "Brand Identity",
    tagline: "Positioning, story and design systems that scale.",
    icon: Palette,
    tone: "from-orange-200 via-orange-100 to-amber-50",
    accent: "oklch(0.75 0.19 55)",
    description:
      "We architect brands from the inside out - from strategy and messaging to full identity systems, guidelines and brand-ready assets that stay consistent as you grow.",
    deliverables: [
      "Brand strategy & positioning",
      "Naming & verbal identity",
      "Logo systems & marks",
      "Visual identity & guidelines",
      "Packaging & collateral",
      "Brand launch kit",
    ],
    stats: [
      { label: "Brands shipped", value: 120, suffix: "+" },
      { label: "Rebrand lift", value: 3.8, suffix: "×" },
      { label: "Avg engagement", value: 62, suffix: "%" },
    ],
    metrics: [
      { label: "Strategic depth", pct: 96 },
      { label: "Visual craft", pct: 98 },
      { label: "System scalability", pct: 92 },
    ],
  },
  {
    slug: "web",
    n: "02",
    title: "Website Design & Development",
    tagline: "Editorial, motion-driven websites that convert.",
    icon: Globe,
    tone: "from-blue-100 via-indigo-50 to-white",
    accent: "oklch(0.65 0.15 250)",
    description:
      "From landing pages to full product sites - we design and engineer websites that load fast, look editorial, feel alive and turn visitors into customers.",
    deliverables: [
      "Marketing websites",
      "E-commerce (Shopify / Headless)",
      "Web applications & dashboards",
      "Design systems & Storybook",
      "CMS integration",
      "Analytics & A/B setup",
    ],
    stats: [
      { label: "Sites launched", value: 240, suffix: "+" },
      { label: "Avg PageSpeed", value: 96, suffix: "" },
      { label: "Conversion lift", value: 47, suffix: "%" },
    ],
    metrics: [
      { label: "Performance (Lighthouse)", pct: 96 },
      { label: "Accessibility (WCAG AA)", pct: 94 },
      { label: "Motion & interactivity", pct: 97 },
    ],
  },
  {
    slug: "seo",
    n: "03",
    title: "Search Engine Optimization",
    tagline: "Rank for the searches that grow your revenue.",
    icon: Search,
    tone: "from-emerald-100 via-teal-50 to-white",
    accent: "oklch(0.7 0.14 165)",
    description:
      "Technical SEO, content architecture and authority building - a compounding growth channel that keeps paying dividends long after ad budgets stop.",
    deliverables: [
      "Technical SEO audits",
      "Keyword & intent research",
      "On-page optimization",
      "Content clusters & topical maps",
      "Link building & digital PR",
      "Local SEO & GMB",
    ],
    stats: [
      { label: "Keywords ranked #1", value: 480, suffix: "+" },
      { label: "Organic traffic lift", value: 214, suffix: "%" },
      { label: "Avg time to page 1", value: 90, suffix: "d" },
    ],
    metrics: [
      { label: "Technical health", pct: 95 },
      { label: "Content authority", pct: 90 },
      { label: "Off-page signals", pct: 88 },
    ],
  },
  {
    slug: "performance",
    n: "04",
    title: "Performance Marketing",
    tagline: "Meta & Google Ads engineered for ROAS.",
    icon: Target,
    tone: "from-rose-100 via-pink-50 to-white",
    accent: "oklch(0.7 0.19 20)",
    description:
      "We treat ad accounts like product surfaces - creative, funnels, tracking and iteration cycles that turn spend into predictable, measurable pipeline.",
    deliverables: [
      "Meta Ads (Instagram / Facebook)",
      "Google Ads (Search / P-Max)",
      "YouTube & display",
      "Conversion tracking & attribution",
      "Landing page CRO",
      "Creative testing frameworks",
    ],
    stats: [
      { label: "Ad spend managed", value: 4.2, suffix: "Cr+" },
      { label: "Avg ROAS", value: 6.4, suffix: "×" },
      { label: "CAC reduction", value: 38, suffix: "%" },
    ],
    metrics: [
      { label: "Media strategy", pct: 94 },
      { label: "Creative velocity", pct: 92 },
      { label: "Measurement stack", pct: 96 },
    ],
  },
  {
    slug: "content",
    n: "05",
    title: "Content & Social Media",
    tagline: "Photo, film and story - crafted, not templated.",
    icon: Video,
    tone: "from-violet-100 via-fuchsia-50 to-white",
    accent: "oklch(0.65 0.2 300)",
    description:
      "In-house production, art direction and social strategy that gives your brand a distinctive voice across every feed, reel and story.",
    deliverables: [
      "Content strategy & calendars",
      "Photography & video production",
      "Reels & short-form editing",
      "Social media management",
      "Influencer & UGC campaigns",
      "Community building",
    ],
    stats: [
      { label: "Reels shipped", value: 1800, suffix: "+" },
      { label: "Avg reach lift", value: 340, suffix: "%" },
      { label: "Followers grown", value: 1.2, suffix: "M" },
    ],
    metrics: [
      { label: "Creative direction", pct: 96 },
      { label: "Production quality", pct: 94 },
      { label: "Community growth", pct: 91 },
    ],
  },
] as const;

/* Portfolio - reuse uploaded brand logos, tag each with a service */
const brandLogos = import.meta.glob("@/assets/brands/*.asset.json", {
  eager: true,
}) as Record<string, { default: { url: string; original_filename: string } }>;

type Project = {
  name: string;
  url: string;
  service: (typeof SERVICES)[number]["slug"];
  industry: string;
  tech: string;
  outcome: string;
};

// deterministic tagging by index so the grid stays stable
const INDUSTRIES = ["Hospitality", "Retail", "F&B", "Real Estate", "Lifestyle", "Wellness", "Education", "Fashion"];
const TECH = ["Shopify", "Next.js", "Webflow", "React", "Framer", "WordPress", "Meta Ads", "Google Ads"];
const OUTCOMES = ["+214% organic traffic", "6.4× ROAS", "+47% conversions", "Rank #1 · 40+ kws", "+340% reach", "12k monthly leads", "2× repeat orders", "Sold out launch"];
const SERVICE_ORDER: Project["service"][] = ["branding", "web", "seo", "performance", "content"];

function buildProjects(): Project[] {
  return Object.values(brandLogos).map((m, i) => ({
    url: m.default.url,
    name: m.default.original_filename
      .replace(/\.webp$/i, "")
      .replace(/_?(logo|new|color|landscape|png|design|\d+)/gi, "")
      .replace(/[_-]+/g, " ")
      .trim()
      .replace(/\b\w/g, (c) => c.toUpperCase()) || "Client Project",
    service: SERVICE_ORDER[i % SERVICE_ORDER.length],
    industry: INDUSTRIES[i % INDUSTRIES.length],
    tech: TECH[i % TECH.length],
    outcome: OUTCOMES[i % OUTCOMES.length],
  }));
}

/* ─────────────── Page ─────────────── */

function ServicesPage() {
  return (
    <SmoothScroll>
      <AmbientBackground />
      <Nav />
      <main className="relative">
        <ServicesHero />
        <ServiceAnchors />
        {SERVICES.map((s, i) => (
          <ServiceSection key={s.slug} s={s} idx={i} />
        ))}
        <ExpertiseBars />
        <PortfolioWork />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}

/* ─────────────── Hero ─────────────── */

function ServicesHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative min-h-[100svh] pt-36">
      <motion.div style={{ y, opacity }} className="mx-auto max-w-[1400px] px-6">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/60 px-3 py-1.5 text-xs uppercase tracking-[0.25em] text-muted-foreground backdrop-blur">
            <span className="size-1.5 rounded-full bg-[oklch(0.75_0.19_55)]" />
            Services · Cogito Digital
          </div>
        </Reveal>

        <h1 className="mt-8 text-display text-[clamp(3rem,9vw,9rem)]">
          <SplitReveal text="Five disciplines." delay={0.2} className="block" />
          <span className="block">
            <SplitReveal text="One studio" delay={0.4} />{" "}
            <span
              className="italic text-[oklch(0.75_0.19_55)]"
              style={{ fontFamily: "'General Sans'" }}
            >
              obsessed
            </span>
          </span>
          <SplitReveal text="with craft." delay={0.7} className="block" />
        </h1>

        <div className="mt-12 grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <Reveal delay={0.3}>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              Every service below is engineered for one thing - to make ambitious
              brands measurably more valuable. Strategy, design, engineering and
              distribution, under one roof.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="grid grid-cols-3 gap-6">
              {[
                { n: 890, s: "+", l: "Projects" },
                { n: 5, s: "", l: "Services" },
                { n: 4.9, s: "★", l: "Rating" },
              ].map((s) => (
                <div key={s.l} className="border-l border-border/60 pl-4">
                  <div className="text-display text-3xl">
                    <Counter to={s.n} suffix={s.s} />
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </motion.div>

      {/* floating iconography */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {[Palette, Globe, Search, Target, Video, Sparkles, Zap, Rocket].map((I, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${15 + (i * 11) % 70}%`,
              left: `${(i * 17) % 92}%`,
            }}
            animate={{ y: [0, -14, 0], opacity: [0.25, 0.5, 0.25] }}
            transition={{ duration: 6 + i, repeat: Infinity, delay: i * 0.3 }}
          >
            <div className="grid size-12 place-items-center rounded-2xl border border-glass-border bg-glass shadow-luxe backdrop-blur-xl">
              <I className="size-5 text-[oklch(0.75_0.19_55)]" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────── Sticky anchor bar ─────────────── */

function ServiceAnchors() {
  const [active, setActive] = useState<string>(SERVICES[0].slug);
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive((e.target as HTMLElement).id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    SERVICES.forEach((s) => {
      const el = document.getElementById(s.slug);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <div className="sticky top-24 z-30 mx-auto mb-12 flex max-w-[1400px] justify-center px-6">
      <div className="glass-panel flex max-w-full items-center gap-1 overflow-x-auto rounded-full px-2 py-2 shadow-luxe">
        {SERVICES.map((s) => (
          <a
            key={s.slug}
            href={`#${s.slug}`}
            className={`whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
              active === s.slug
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <span className="mr-1.5 font-mono text-[10px] opacity-60">{s.n}</span>
            {s.title.split(" ")[0]}
          </a>
        ))}
      </div>
    </div>
  );
}

/* ─────────────── Individual service section ─────────────── */

function ServiceSection({ s, idx }: { s: (typeof SERVICES)[number]; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const yText = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const Icon = s.icon;
  const reverse = idx % 2 === 1;

  return (
    <section id={s.slug} ref={ref} className="relative scroll-mt-32 py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className={`grid gap-12 md:grid-cols-2 md:items-center md:gap-20 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
          {/* Visual card */}
          <motion.div style={{ y: yImg }} className="relative">
            <div
              className={`relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-glass-border bg-gradient-to-br ${s.tone} shadow-luxe`}
            >
              {/* orbit halo */}
              <div
                className="absolute inset-0 opacity-70"
                style={{
                  background: `radial-gradient(60% 50% at 50% 40%, color-mix(in oklab, ${s.accent} 35%, transparent), transparent 70%)`,
                }}
              />
              {/* grid overlay */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "linear-gradient(oklch(0.2 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(0.2 0 0) 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
              />
              {/* Number */}
              <div className="absolute left-8 top-8 font-mono text-xs tracking-[0.3em] text-foreground/50">
                {s.n} / 05
              </div>
              {/* Big icon composition */}
              <div className="absolute inset-0 grid place-items-center">
                <motion.div
                  animate={{ rotate: [0, 4, 0, -4, 0] }}
                  transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  <div
                    className="grid size-40 place-items-center rounded-[2rem] shadow-glow"
                    style={{
                      background: `linear-gradient(135deg, ${s.accent}, color-mix(in oklab, ${s.accent} 60%, white))`,
                    }}
                  >
                    <Icon className="size-16 text-white" strokeWidth={1.5} />
                  </div>
                  {/* orbital chips */}
                  {[0, 1, 2, 3].map((i) => {
                    const angle = (i / 4) * Math.PI * 2;
                    const r = 130;
                    return (
                      <motion.div
                        key={i}
                        className="absolute -translate-x-1/2 -translate-y-1/2"
                        style={{
                          left: `calc(50% + ${Math.cos(angle) * r}px)`,
                          top: `calc(50% + ${Math.sin(angle) * r}px)`,
                        }}
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.4 }}
                      >
                        <div className="grid size-10 place-items-center rounded-xl border border-white/70 bg-white/80 shadow-luxe backdrop-blur">
                          {[Sparkles, LineChart, Camera, Award][i] &&
                            (() => {
                              const IC = [Sparkles, LineChart, Camera, Award][i];
                              return <IC className="size-4 text-foreground/70" />;
                            })()}
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
              {/* Bottom label */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-foreground/60">
                <span>Cogito · Service</span>
                <span>{s.title}</span>
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div style={{ y: yText }}>
            <div className="mb-3 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              <span className="font-mono">{s.n}</span>
              <span className="h-px w-8 bg-border" />
              <span>Service</span>
            </div>
            <h2 className="text-display text-[clamp(2rem,5vw,4rem)]">
              {s.title.split(" ").slice(0, -1).join(" ")}{" "}
              <span
                className="italic"
                style={{ color: s.accent, fontFamily: "'General Sans'" }}
              >
                {s.title.split(" ").slice(-1)}
              </span>
            </h2>
            <p className="mt-3 text-lg text-foreground/80">{s.tagline}</p>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
              {s.description}
            </p>

            {/* Deliverables */}
            <ul className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {s.deliverables.map((d) => (
                <li
                  key={d}
                  className="flex items-start gap-2 rounded-2xl border border-border/50 bg-white/50 p-3 text-sm backdrop-blur"
                >
                  <span
                    className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full text-white"
                    style={{ background: s.accent }}
                  >
                    <Check className="size-3" strokeWidth={3} />
                  </span>
                  {d}
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {s.stats.map((st) => (
                <div key={st.label} className="rounded-2xl border border-border/60 bg-white/60 p-4 backdrop-blur">
                  <div className="text-display text-2xl">
                    <Counter to={st.value} suffix={st.suffix} />
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                    {st.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Metric bars */}
            <div className="mt-8 space-y-3">
              {s.metrics.map((m) => (
                <MetricBar key={m.label} label={m.label} pct={m.pct} color={s.accent} />
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Magnetic>
                <a
                  href="/#contact"
                  className="group inline-flex items-center gap-2 rounded-[5px] bg-foreground px-5 py-3 text-sm font-medium text-background shadow-luxe transition-transform hover:scale-[1.03]"
                >
                  Start a {s.title.split(" ")[0].toLowerCase()} project
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </Magnetic>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-[5px] border border-border bg-white/60 px-5 py-3 text-sm font-medium backdrop-blur transition-colors hover:bg-white"
              >
                See {s.title.split(" ")[0].toLowerCase()} work
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MetricBar({ label, pct, color }: { label: string; pct: number; color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setInView(true), {
      threshold: 0.4,
    });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref}>
      <div className="mb-1.5 flex items-center justify-between text-xs">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-mono tabular-nums text-foreground/80">{pct}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-border/60">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${pct}%` : 0 }}
          transition={{ duration: 1.4, ease: [0.19, 1, 0.22, 1] }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, color-mix(in oklab, ${color} 60%, white))` }}
        />
      </div>
    </div>
  );
}

/* ─────────────── Expertise / lifecycle ─────────────── */

const LIFECYCLE = [
  { t: "Discover", d: "Audit, interviews, positioning workshop.", i: Users },
  { t: "Design", d: "Strategy → identity → interface systems.", i: Palette },
  { t: "Develop", d: "Editorial motion builds, engineered for speed.", i: Layers },
  { t: "Launch", d: "Assets, PR, campaign - a moment, not a post.", i: Rocket },
  { t: "Scale", d: "SEO, ads, content - compounding growth.", i: LineChart },
];

const EXPERTISE = [
  { label: "Brand & Identity", pct: 96 },
  { label: "Web & Product Design", pct: 97 },
  { label: "Frontend Engineering", pct: 93 },
  { label: "SEO & Content", pct: 91 },
  { label: "Performance Marketing", pct: 94 },
  { label: "Motion & Interaction", pct: 96 },
];

function ExpertiseBars() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mb-16 grid gap-6 md:grid-cols-2 md:items-end">
          <div>
            <div className="mb-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
Expertise
            </div>
            <h2 className="text-display text-[clamp(2.25rem,5vw,4.5rem)]">
              A studio built for the{" "}
              <span
                className="italic text-[oklch(0.75_0.19_55)]"
                style={{ fontFamily: "'General Sans'" }}
              >
                full lifecycle
              </span>{" "}
              of a brand.
            </h2>
          </div>
          <Reveal>
            <p className="text-muted-foreground">
              We measure ourselves on both craft and outcome - every service is
              backed by senior operators, transparent scorecards and metrics
              that matter to your business.
            </p>
          </Reveal>
        </div>

        {/* Lifecycle */}
        <div className="relative mb-24">
          <div className="absolute left-6 top-8 hidden h-px w-[calc(100%-3rem)] bg-gradient-to-r from-transparent via-border to-transparent md:block" />
          <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
            {LIFECYCLE.map((l, i) => {
              const IC = l.i;
              return (
                <Reveal key={l.t} delay={i * 0.06}>
                  <div className="relative rounded-3xl border border-glass-border bg-glass p-6 shadow-luxe backdrop-blur-xl">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-[oklch(0.75_0.19_55)] to-[oklch(0.82_0.17_70)] text-white shadow-glow">
                        <IC className="size-5" />
                      </div>
                      <span className="font-mono text-xs text-muted-foreground">
                        0{i + 1}
                      </span>
                    </div>
                    <div className="text-display text-xl">{l.t}</div>
                    <p className="mt-1.5 text-sm text-muted-foreground">{l.d}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Skill bars */}
        <div className="grid gap-x-16 gap-y-6 md:grid-cols-2">
          {EXPERTISE.map((e) => (
            <MetricBar
              key={e.label}
              label={e.label}
              pct={e.pct}
              color="oklch(0.75 0.19 55)"
            />
          ))}
        </div>

        {/* Industry stats */}
        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { n: 4, s: "+", l: "Years in market", i: Award },
            { n: 890, s: "+", l: "Projects delivered", i: Rocket },
            { n: 200, s: "+", l: "Happy clients", i: Users },
            { n: 91, s: "%", l: "Client retention", i: Sparkles },
          ].map((s) => {
            const IC = s.i;
            return (
              <div
                key={s.l}
                className="group rounded-3xl border border-glass-border bg-glass p-6 shadow-luxe backdrop-blur-xl transition-transform hover:-translate-y-1"
              >
                <IC className="size-5 text-[oklch(0.75_0.19_55)]" />
                <div className="mt-4 text-display text-4xl">
                  <Counter to={s.n} suffix={s.s} />
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">
                  {s.l}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Portfolio (Our Work) ─────────────── */

const FILTERS = [
  { key: "all", label: "All Work" },
  ...SERVICES.map((s) => ({ key: s.slug, label: s.title.split(" ")[0] })),
] as const;

function PortfolioWork() {
  const projects = useMemo(buildProjects, []);
  const [filter, setFilter] = useState<string>("all");
  const filtered = filter === "all" ? projects : projects.filter((p) => p.service === filter);

  return (
    <section id="work" className="relative py-32">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mb-10 grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,auto)] md:items-end">
          <div>
            <div className="mb-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
Our Work
            </div>
            <h2 className="text-display text-[clamp(2.25rem,5vw,4.5rem)]">
              Projects, categorized by{" "}
              <span
                className="italic text-[oklch(0.75_0.19_55)]"
                style={{ fontFamily: "'General Sans'" }}
              >
                service.
              </span>
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Every brand below is scaling with Cogito. Filter by service to see
              relevant case studies, industries and outcomes.
            </p>
          </div>
          <div className="glass-panel flex max-w-full flex-wrap items-center gap-1 rounded-full p-2">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                  filter === f.key
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((p, i) => (
            <ProjectCard key={p.url} p={p} i={i} />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="rounded-3xl border border-dashed border-border/60 p-10 text-center text-sm text-muted-foreground">
            No projects in this category yet.
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ p, i }: { p: Project; i: number }) {
  const svc = SERVICES.find((s) => s.slug === p.service)!;
  const Icon = svc.icon;
  return (
    <motion.a
      href="/#contact"
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: (i % 6) * 0.05, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-glass-border bg-glass shadow-luxe backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-glow"
      data-cursor="hover"
    >
      {/* Preview */}
      <div className="relative aspect-[4/3] overflow-hidden bg-white">
        <div
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
          style={{
            background: `radial-gradient(80% 60% at 50% 50%, color-mix(in oklab, ${svc.accent} 18%, white), white)`,
          }}
        />
        <div className="absolute inset-0 grid place-items-center p-10">
          <img
            src={p.url}
            alt={p.name}
            loading="lazy"
            className="max-h-24 w-auto max-w-[70%] object-contain transition-transform duration-700 group-hover:scale-110 md:max-h-28"
          />
        </div>
        {/* Service pill */}
        <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/70 bg-white/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-foreground/70 backdrop-blur">
          <Icon className="size-3" style={{ color: svc.accent }} />
          {svc.title.split(" ")[0]}
        </div>
        {/* hover overlay */}
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-black/0 to-black/0 p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="text-white">
            <div className="text-[10px] uppercase tracking-[0.3em] text-white/70">
              Outcome
            </div>
            <div className="mt-1 text-lg font-semibold">{p.outcome}</div>
          </div>
        </div>
      </div>

      {/* Meta */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-display text-xl leading-tight">{p.name}</div>
            <div className="mt-1 text-xs text-muted-foreground">
              {p.industry} · {p.tech}
            </div>
          </div>
          <span className="grid size-8 shrink-0 place-items-center rounded-full border border-border/60 bg-white/70 transition-transform group-hover:rotate-45">
            <ArrowUpRight className="size-4" />
          </span>
        </div>
        <div className="mt-4 flex items-center gap-2 text-[11px] text-muted-foreground">
          <span className="inline-block size-1.5 rounded-full" style={{ background: svc.accent }} />
          Case study
        </div>
      </div>
    </motion.a>
  );
}
