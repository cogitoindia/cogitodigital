import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useScroll, useTransform, AnimatePresence } from "motion/react";
import {
  Instagram, Facebook, Linkedin, Youtube, MessageCircle, Globe, Search, Palette,
  TrendingUp, Megaphone, Video, Target, Sparkles, ArrowUpRight, Star, Play,
  Chrome, LineChart, Camera, Coffee, Notebook, BookOpen, MapPin, Phone, Mail,
  Eye, Compass,
} from "lucide-react";
import { Reveal, SplitReveal, Counter, Magnetic } from "./experience";
import Prism from "./Prism";
import { ImageSlider } from "./image-slider";
import { ImageSliderMeridian } from "./image-slider-meridian";
import { ImageSliderPenthouse } from "./image-slider-penthouse";
import { ImageSliderKite } from "./image-slider-kite";
import { ImageSliderField } from "./image-slider-field";
import { Lightbox } from "./lightbox";
import { Team } from "./team";
import bpWebsites from "@/assets/banners/bp-websites.webp";
import ecoSearch from "@/assets/banners/eco-search.webp";
import ecoAutomation from "@/assets/banners/eco-automation.webp";
import bpOrganic from "@/assets/banners/bp-organic.webp";
import bpInfra from "@/assets/banners/bp-infra.webp";
import bpAutomation from "@/assets/banners/bp-automation.webp";
import csSaas1 from "@/assets/banners/cs-saas-1.webp";
import csSaas3 from "@/assets/banners/cs-saas-3.webp";
import csSaas4 from "@/assets/banners/cs-saas-4.webp";
import contactHeroBg from "@/assets/banners/contact-hero-bg.webp";
import homepageImage from "@/assets/homepage-compressed-image.webp";
// Luxury Living images
import luxury1 from "@/assets/luxuryliving/A-new-you-in-the-spotlight.webp";
import luxury2 from "@/assets/luxuryliving/Comfort-redefined-in-modern-living-room.webp";
import luxury3 from "@/assets/luxuryliving/Modern-dining-with-family-focus.webp";
import luxury4 from "@/assets/luxuryliving/Three-sofas-one-choice.webp";
// TFS images
import tfs1 from "@/assets/tfs/2025-11-19-3.webp";
import tfs2 from "@/assets/tfs/2025-11-19-5.webp";
import tfs3 from "@/assets/tfs/2025-11-19-6.webp";
import tfs4 from "@/assets/tfs/2025-11-19.webp";
import tfs5 from "@/assets/tfs/2026-03-19-1.webp";
import tfs6 from "@/assets/tfs/new-brand.webp";
// Penthouse images
import pent1 from "@/assets/penthouse/penthouse_creatives (1).webp";
import pent2 from "@/assets/penthouse/penthouse_creatives (2).webp";
import pent3 from "@/assets/penthouse/penthouse_creatives (3).webp";
import pent4 from "@/assets/penthouse/penthouse_creatives (4).webp";
import pent5 from "@/assets/penthouse/penthouse_creatives (5).webp";
import pent6 from "@/assets/penthouse/penthouse_creatives (6).webp";
// Error images
import err1 from "@/assets/error/Error-Brand-2.webp";
import err2 from "@/assets/error/Error-Brand.webp";
import err3 from "@/assets/error/Error-Saturday-with-DJ-Omar.webp";
import err4 from "@/assets/error/braning.webp";
import err5 from "@/assets/error/error-brand-1.webp";
import err6 from "@/assets/error/errorevent.webp";
// Sumeru images
import sum1 from "@/assets/sumeru/sumerustudio-branding-creative-10.webp";
import sum2 from "@/assets/sumeru/sumerustudio-branding-creative-12.webp";
import sum3 from "@/assets/sumeru/sumerustudio-branding-creative-13.webp";
import sum4 from "@/assets/sumeru/sumerustudio-branding-creative-4.webp";
import sum5 from "@/assets/sumeru/sumerustudio-branding-creative-5.webp";
import sum6 from "@/assets/sumeru/sumerustudio-branding-creative-7.webp";
import sum7 from "@/assets/sumeru/sumerustudio-branding-creative-9.webp";

/* ══════════════════════════════════════════════════════════════ */
/*  BACKGROUND - mesh + orange gradient + particles                */
/* ══════════════════════════════════════════════════════════════ */
export function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute -left-40 top-[-10%] size-[70vw] rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--ember) 45%, transparent), transparent 70%)",
        }}
      />
      <div
        className="absolute -right-40 top-1/3 size-[55vw] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--ember-glow) 55%, transparent), transparent 70%)",
        }}
      />
      <div
        className="absolute left-1/3 bottom-[-20%] size-[60vw] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.9 0.05 240 / 0.9), transparent 70%)",
        }}
      />
      {/* particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 40 }).map((_, i) => {
          const size = 2 + Math.random() * 3;
          return (
            <motion.span
              key={i}
              className="absolute rounded-full bg-foreground/30"
              style={{
                width: size, height: size,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{ y: [0, -18, 0], opacity: [0.15, 0.5, 0.15] }}
              transition={{ duration: 6 + Math.random() * 6, repeat: Infinity, delay: Math.random() * 4 }}
            />
          );
        })}
      </div>
      <div className="noise-overlay" />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════ */
/*  HERO - split editorial + orbital workspace                     */
/* ══════════════════════════════════════════════════════════════ */
function useMouseParallax() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 60, damping: 20 });
  const sy = useSpring(y, { stiffness: 60, damping: 20 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      x.set((e.clientX - cx) / cx);
      y.set((e.clientY - cy) / cy);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);
  return { x: sx, y: sy };
}

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      {/* Prism background - centered */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Prism
          animationType="rotate"
          timeScale={0.5}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0.1}
          glow={1}
          suspendWhenOffscreen
        />
      </div>

      {/* Content - center aligned */}
      <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/60 px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground backdrop-blur"
        >
          <span className="size-1.5 rounded-full bg-[oklch(0.75_0.19_55)]" />
          Premium Brand Growth Studio · Siliguri
        </motion.div>

        <h1 className="text-display text-[clamp(2.2rem,5vw,5rem)]">
          <SplitReveal text="We Build Brands" delay={0.6} className="block" />
          <span className="block">
            <span className="inline-block overflow-hidden align-bottom">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.85, duration: 1.1, ease: [0.19, 1, 0.22, 1] }}
                className="inline-block italic text-[oklch(0.75_0.19_55)]"
                style={{ fontFamily: "'General Sans', serif", fontWeight: 500 }}
              >
                People
              </motion.span>
            </span>{" "}
            <SplitReveal text="Remember." delay={1} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.9 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground"
        >
          Helping ambitious businesses grow through branding, websites, SEO,
          content production and performance marketing - designed with care,
          engineered for results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.55, duration: 0.8 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-[5px] bg-foreground px-6 py-3.5 text-sm font-medium text-background shadow-luxe transition-colors hover:bg-foreground/90"
          >
            Start Your Project
            <ArrowUpRight className="size-4" />
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-[5px] border border-border bg-white/60 px-6 py-3.5 text-sm font-medium backdrop-blur transition-colors hover:bg-white"
          >
            <span className="grid size-6 place-items-center rounded-full bg-foreground text-background">
              <Play className="size-3 fill-current" />
            </span>
            Explore Our Work
          </a>
        </motion.div>

        {/* Trust stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="mt-14 grid grid-cols-4 gap-6"
        >
          {[
            { n: 890, s: "+", l: "Projects" },
            { n: 200, s: "+", l: "Clients" },
            { n: 91, s: "%", l: "Satisfaction" },
            { n: 4, s: "+", l: "Years" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-display text-3xl">
                <Counter to={s.n} suffix={s.s} />
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">
                {s.l}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground"
      >
        Scroll · Experience
      </motion.div>
    </section>
  );
}

function FloatingChip({
  children, style, parallax, delay = 0,
}: {
  children: React.ReactNode; style: React.CSSProperties;
  parallax: { x: any; y: any }; delay?: number;
}) {
  return (
    <motion.div
      style={{ ...style, x: parallax.x, y: parallax.y }}
      className="absolute"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.4 + delay, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
    >
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [0, 1.5, 0] }}
        transition={{ duration: 5 + delay, repeat: Infinity, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

function GlassCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-glass-border bg-glass px-3 py-2 shadow-luxe backdrop-blur-xl">
      {children}
    </div>
  );
}

function LaptopMock() {
  return (
    <div className="relative w-[340px] md:w-[420px]">
      <div className="rounded-t-2xl bg-neutral-900 p-2 shadow-luxe">
        <div className="overflow-hidden rounded-xl bg-background">
          <div className="flex items-center gap-1.5 border-b border-border/60 bg-neutral-50 px-3 py-2">
            <div className="size-2 rounded-full bg-red-400" />
            <div className="size-2 rounded-full bg-yellow-400" />
            <div className="size-2 rounded-full bg-green-400" />
            <div className="ml-3 rounded-md bg-white px-2 py-0.5 text-[10px] text-muted-foreground">
              cogitoindia.in
            </div>
          </div>
          <div className="relative aspect-[16/10] bg-gradient-to-br from-white via-white to-orange-50">
            <div className="absolute left-4 top-4 space-y-2">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Cogito</div>
              <div className="text-display text-lg leading-tight">
                Brands<br />people<br />remember.
              </div>
            </div>
            <div className="absolute right-4 top-4 grid grid-cols-2 gap-1.5">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="size-10 rounded-md"
                  style={{
                    background:
                      i % 2 === 0
                        ? "linear-gradient(135deg, var(--ember), var(--ember-glow))"
                        : "linear-gradient(135deg, #111, #333)",
                  }}
                />
              ))}
            </div>
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[9px] text-muted-foreground">
              <span>© 2026 Cogito Digital</span>
              <span>Siliguri, India</span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-2 rounded-b-3xl bg-gradient-to-b from-neutral-800 to-neutral-600" />
      <div className="mx-auto h-1 w-24 rounded-b-lg bg-neutral-400" />
    </div>
  );
}

function PhoneMock() {
  return (
    <div className="w-24 rounded-[1.4rem] border-4 border-neutral-900 bg-neutral-900 shadow-luxe">
      <div className="overflow-hidden rounded-[1rem] bg-gradient-to-br from-orange-50 via-white to-white p-2">
        <div className="text-[7px] font-semibold uppercase tracking-widest text-muted-foreground">Cogito</div>
        <div className="mt-1 text-[10px] leading-tight text-display">Brands people remember.</div>
        <div className="mt-2 grid grid-cols-3 gap-1">
          {[0,1,2,3,4,5].map((i) => (
            <div key={i} className="aspect-square rounded" style={{
              background: i % 2 ? "linear-gradient(135deg, var(--ember), var(--ember-glow))" : "#111"
            }} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* Orbit layer implementation */
function OrbitLayer({
  radius, duration, reverse = false, icons, glass = false, card = false, items,
}: {
  radius: number; duration: number; reverse?: boolean;
  icons?: { I: any; c: string }[]; glass?: boolean; card?: boolean;
  items?: { label: string; value: string; icon: any }[];
}) {
  const list = card ? items! : icons!;
  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <motion.div
        className="relative"
        style={{ width: radius * 2, height: radius * 2 }}
        animate={{ rotate: reverse ? -360 : 360 }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {list.map((_, i) => {
          const angle = (i / list.length) * Math.PI * 2;
          const x = Math.cos(angle) * radius + radius;
          const y = Math.sin(angle) * radius + radius;
          return (
            <motion.div
              key={i}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: x, top: y }}
              animate={{ rotate: reverse ? 360 : -360 }}
              transition={{ duration, repeat: Infinity, ease: "linear" }}
            >
              {card ? (
                <div className="w-max rounded-2xl border border-glass-border bg-glass px-3 py-2 shadow-luxe backdrop-blur-xl">
                  <div className="flex items-center gap-2">
                    {(() => {
                      const Icon = (list[i] as any).icon;
                      return <Icon className="size-3.5 text-[oklch(0.75_0.19_55)]" />;
                    })()}
                    <div className="text-[10px] leading-tight">
                      <div className="text-muted-foreground">{(list[i] as any).label}</div>
                      <div className="font-semibold">{(list[i] as any).value}</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className={`grid size-11 place-items-center rounded-2xl ${
                    glass
                      ? "border border-glass-border bg-glass backdrop-blur-xl"
                      : "bg-white"
                  } shadow-luxe`}
                >
                  {(() => {
                    const Ic = (list[i] as any).I;
                    const c = (list[i] as any).c;
                    return <Ic className="size-5" style={{ color: c }} />;
                  })()}
                </div>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════ */
/*  SERVICES - floating glass spheres                              */
/* ══════════════════════════════════════════════════════════════ */
const SERVICES = [
  { title: "Brand Strategy", desc: "Positioning, story, and identity systems that scale.", icon: Palette, img: ecoSearch },
  { title: "Website Design", desc: "Editorial, motion-driven websites that convert.", icon: Globe, img: bpWebsites },
  { title: "SEO", desc: "Rank for the searches that grow your revenue.", icon: Search, img: csSaas1 },
  { title: "Performance Marketing", desc: "Meta & Google Ads engineered for ROAS.", icon: Target, img: bpOrganic },
  { title: "Social Media", desc: "Content, community and creative that resonates.", icon: Megaphone, img: csSaas3 },
  { title: "Content Production", desc: "Photo, film and story - crafted, not templated.", icon: Video, img: contactHeroBg },
  { title: "Lead Generation", desc: "Funnels, forms and follow-up that fill your pipeline.", icon: TrendingUp, img: csSaas4 },
  { title: "Brand Identity", desc: "Logos, guidelines and design systems built to last.", icon: Sparkles, img: bpAutomation },
];

export function Services() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="services" className="relative py-32">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-4 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
Services
            </div>
            <h2 className="text-display text-[clamp(2.5rem,6vw,5.5rem)]">
              <SplitReveal text="Everything" /> <br />
              <span className="italic text-[oklch(0.75_0.19_55)]" style={{ fontFamily: "'General Sans'" }}>
                a brand needs.
              </span>
            </h2>
          </div>
          <Reveal>
            <p className="max-w-sm text-muted-foreground">
              Eight disciplines under one roof. Grab, hover, click - each sphere
              opens into a full-screen chapter of what we do.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {SERVICES.map((s, i) => (
            <ServiceSphere key={s.title} s={s} i={i} onOpen={() => setOpen(i)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] grid place-items-center bg-background/70 p-6 backdrop-blur-2xl"
            onClick={() => setOpen(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="relative max-w-3xl rounded-3xl border border-glass-border bg-white/80 p-10 shadow-luxe backdrop-blur-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const S = SERVICES[open];
                const Icon = S.icon;
                return (
                  <>
                    <div className="mb-6 inline-grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-[oklch(0.75_0.19_55)] to-[oklch(0.82_0.17_70)] text-white shadow-glow">
                      <Icon className="size-7" />
                    </div>
                    <h3 className="text-display text-4xl">{S.title}</h3>
                    <p className="mt-4 max-w-xl text-lg text-muted-foreground">{S.desc}</p>
                    <div className="mt-8 grid gap-3 sm:grid-cols-3 text-sm">
                      {["Discovery", "Craft", "Launch & Scale"].map((step) => (
                        <div key={step} className="rounded-2xl border border-border/60 bg-white/60 p-4">
                          <div className="text-xs uppercase tracking-widest text-muted-foreground">Phase</div>
                          <div className="mt-1 font-semibold">{step}</div>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => setOpen(null)}
                      className="absolute right-4 top-4 rounded-full border border-border/60 bg-white/70 px-3 py-1 text-xs"
                    >
                      Close
                    </button>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ServiceSphere({ s, i, onOpen }: { s: any; i: number; onOpen: () => void }) {
  const Icon = s.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.06, duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
      className="group aspect-square [perspective:1000px]"
      data-cursor="hover"
    >
      <div
        onClick={onOpen}
        className="relative h-full w-full cursor-pointer transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
      >
        {/* Front face */}
        <div className="absolute inset-0 overflow-hidden rounded-[5px] border border-glass-border bg-glass p-6 shadow-luxe backdrop-blur-xl [backface-visibility:hidden]">
          <div
            className="absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(120% 80% at 20% 10%, oklch(1 0 0 / 0.9), transparent 55%), radial-gradient(80% 60% at 100% 100%, color-mix(in oklab, var(--ember) 30%, transparent), transparent 70%)",
            }}
          />
          <div className="relative flex h-full flex-col justify-between">
            <div className="grid size-12 place-items-center rounded-2xl border border-white/70 bg-white/70 backdrop-blur">
              <Icon className="size-5 text-[oklch(0.75_0.19_55)]" />
            </div>
            <div>
              <div className="text-display text-2xl leading-tight">{s.title}</div>
              <div className="mt-2 text-xs text-muted-foreground line-clamp-2">{s.desc}</div>
              <div className="mt-4 inline-flex items-center gap-1 text-xs text-foreground/80">
                Open <ArrowUpRight className="size-3" />
              </div>
            </div>
          </div>
        </div>

        {/* Back face - banner image with icon in center */}
        <div className="absolute inset-0 overflow-hidden rounded-[5px] shadow-luxe [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <img
            src={s.img}
            alt={s.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <div className="grid size-16 place-items-center rounded-full bg-white/95 shadow-lg backdrop-blur">
              <Icon className="size-7 text-[oklch(0.75_0.19_55)]" />
            </div>
            <div className="text-display text-lg text-white text-center px-4">{s.title}</div>
            <div className="inline-flex items-center gap-1 text-xs font-medium text-[oklch(0.82_0.17_70)]">
              View Details <ArrowUpRight className="size-3" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════════ */
/*  ABOUT - pinned storytelling                                    */
/* ══════════════════════════════════════════════════════════════ */
export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden">
      {/* Subtle background gradient */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(100% 60% at 50% 0%, oklch(0.98 0.01 260 / 0.5), transparent 70%), radial-gradient(80% 50% at 100% 100%, color-mix(in oklab, var(--ember) 8%, transparent), transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-[1400px] px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-6 text-[11px] uppercase tracking-[0.3em] text-muted-foreground"
        >
          About Us
        </motion.div>

        {/* Hero heading - centered */}
        <motion.div
          style={{ y, opacity }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="text-display text-[clamp(2rem,5vw,4.5rem)] leading-[1.1]">
            Most brands{" "}
            <span className="italic text-muted-foreground" style={{ fontFamily: "'General Sans'" }}>
              get seen.
            </span>{" "}
            <br />
            Very few{" "}
            <span className="text-[oklch(0.75_0.19_55)]">get remembered.</span>
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mx-auto mt-8 max-w-2xl text-center text-base leading-relaxed text-muted-foreground"
        >
          We're a small studio of strategists, designers and engineers based in Siliguri,
          quietly building brands for founders who care about craft.
        </motion.p>

        {/* Mission/Vision/Approach/Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          {[
            {
              title: "Our Mission",
              text: "Our mission is to empower businesses by leveraging cutting-edge digital strategies and technologies. We strive to create meaningful connections between brands and their audiences, driving engagement, growth, and success.",
              icon: Target,
            },
            {
              title: "Our Vision",
              text: "We envision a world where businesses of all sizes can harness the full potential of digital marketing to achieve their goals. Our aim is to be the go-to agency for innovative, results-driven digital solutions.",
              icon: Eye,
            },
            {
              title: "Our Approach",
              text: "We take a client-centric approach to everything we do. By understanding your business, goals, and challenges, we develop customized strategies that deliver measurable results. Our team of experts is dedicated to staying ahead of industry trends.",
              icon: Compass,
            },
            {
              title: "Get in Touch",
              text: "Ready to take your digital marketing to the next level? Contact us today to learn how Cogito can help you achieve your goals.",
              icon: Mail,
              isAction: true,
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.08, duration: 0.8 }}
                className={`group relative overflow-hidden rounded-2xl border border-border/60 p-6 backdrop-blur transition-all ${
                  item.isAction
                    ? "bg-[oklch(0.75_0.19_55)] border-[oklch(0.75_0.19_55)] hover:bg-[oklch(0.72_0.18_55)]"
                    : "bg-white/60 hover:border-[oklch(0.75_0.19_55)]/30 hover:bg-white/80"
                }`}
              >
                <div className={`mb-3 grid size-10 place-items-center rounded-xl ${
                  item.isAction ? "bg-white/20" : "bg-[oklch(0.75_0.19_55)]/10"
                }`}>
                  <Icon className={`size-5 ${item.isAction ? "text-white" : "text-[oklch(0.75_0.19_55)]"}`} />
                </div>
                <h4 className={`text-display text-lg ${item.isAction ? "text-white" : "text-[oklch(0.75_0.19_55)]"}`}>
                  {item.title}
                </h4>
                <p className={`mt-3 text-sm leading-relaxed ${item.isAction ? "text-white/90" : "text-muted-foreground"}`}>
                  {item.text}
                </p>
                {item.isAction && (
                  <a
                    href="#contact"
                    className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-[oklch(0.75_0.19_55)] transition-colors hover:bg-white/90"
                  >
                    Contact Us
                    <ArrowUpRight className="size-4" />
                  </a>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Ecosystem section */}
        <div className="mt-32">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[oklch(0.75_0.19_55)]/30 bg-[oklch(0.75_0.19_55)]/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-[oklch(0.75_0.19_55)]">
              Our Ecosystem
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h3 className="text-display text-[clamp(2rem,5vw,4rem)]">
              An interconnected growth platform
            </h3>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-xl text-base text-muted-foreground">
              Discover our complete suite of integrated services designed to drive
              measurable business growth across all channels.
            </p>
          </Reveal>

          <EcosystemCards />
        </div>
      </div>
    </section>
  );
}

const ECOSYSTEM_CARDS = [
  {
    title: "Social Media Management",
    desc: "Content creation, community engagement and strategic posting that grows your audience and builds brand loyalty.",
    stat: "10M+",
    statLabel: "Reach Generated",
    icon: Megaphone,
    img: bpWebsites,
  },
  {
    title: "Brand Strategy & Identity",
    desc: "Positioning, visual identity and brand systems that set you apart and make your brand unforgettable.",
    stat: "200+",
    statLabel: "Brands Built",
    icon: Palette,
    img: ecoSearch,
  },
  {
    title: "Digital Presence",
    desc: "Websites, SEO and digital ecosystems designed to establish authority and drive organic discovery.",
    stat: "#1",
    statLabel: "Rankings Achieved",
    icon: Globe,
    img: ecoAutomation,
  },
  {
    title: "Lead Generation & Ads",
    desc: "Performance marketing campaigns on Meta & Google engineered for maximum ROAS and qualified leads.",
    stat: "3x",
    statLabel: "Revenue Growth",
    icon: Target,
    img: bpAutomation,
  },
  {
    title: "Content Production",
    desc: "Photo, video and storytelling crafted to captivate your audience and elevate your brand across every platform.",
    stat: "500+",
    statLabel: "Projects Delivered",
    icon: Video,
    img: bpInfra,
  },
];

function EcosystemCards() {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setActive(mobile ? 0 : 2);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div className="mt-12 flex flex-col gap-0 overflow-hidden rounded-[1.5rem] md:flex-row md:h-[460px]">
      {ECOSYSTEM_CARDS.map((card, i) => {
        const isActive = active === i;
        const Icon = card.icon;
        return (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)}
            className={`relative cursor-pointer overflow-hidden border-b border-white/10 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${
              isActive
                ? "h-[280px] md:h-auto md:flex-[4]"
                : "h-[60px] md:h-auto md:flex-1"
            }`}
          >
            {/* Background image */}
            <img
              src={card.img}
              alt={card.title}
              className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ${isActive ? "scale-105" : "scale-100"}`}
            />
            {/* Dark overlay */}
            <div className={`absolute inset-0 transition-all duration-700 ${isActive ? "bg-black/40" : "bg-black/60"}`} />

            {/* Collapsed state - icon + horizontal text (mobile) / vertical text (desktop) */}
            <div className={`absolute inset-0 flex items-center justify-center gap-3 md:flex-col md:gap-4 transition-all duration-500 ${isActive ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
              <Icon className="size-5 text-white/70" />
              <div className="text-[12px] uppercase tracking-[0.2em] text-white/80 md:hidden">
                {card.title}
              </div>
              <div className="hidden md:flex -rotate-180 items-center whitespace-nowrap text-[12px] uppercase tracking-[0.2em] text-white/80" style={{ writingMode: "vertical-rl" }}>
                {card.title}
              </div>
            </div>

            {/* Expanded state - content */}
            <div className={`absolute inset-0 flex flex-col justify-end p-6 transition-all duration-700 md:p-10 ${isActive ? "opacity-100" : "opacity-0"}`}>
              {/* Stat badge top-right */}
              <div className="absolute right-4 top-4 rounded-xl bg-white px-3 py-2 text-center shadow-lg md:right-8 md:top-8 md:px-4 md:py-3">
                <div className="text-display text-xl font-bold text-foreground md:text-2xl">{card.stat}</div>
                <div className="text-[8px] uppercase tracking-widest text-[oklch(0.75_0.19_55)] md:text-[9px]">{card.statLabel}</div>
              </div>

              <h4 className="text-display text-xl text-white md:text-3xl">{card.title}</h4>
              <p className="mt-2 max-w-md text-xs leading-relaxed text-white/70 md:mt-3 md:text-sm">
                {card.desc}
              </p>
              <a href="#contact" className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-[oklch(0.82_0.17_70)] transition-colors hover:text-white md:mt-5 md:text-sm">
                Explore <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════ */
/*  PORTFOLIO - horizontal pinned scroll                           */
/* ══════════════════════════════════════════════════════════════ */
const WORK = [
  { title: "Luxury Living Branding", tag: "Brand · Web", tone: "from-orange-200 to-orange-400", images: [luxury1, luxury2, luxury3, luxury4] },
  { title: "The Furnishing Story", tag: "Identity · SEO", tone: "from-neutral-800 to-neutral-500", images: [tfs1, tfs2, tfs3, tfs4, tfs5, tfs6] },
  { title: "Penthouse Branding", tag: "E-commerce", tone: "from-pink-200 to-rose-400", images: [pent1, pent2, pent3, pent4, pent5, pent6] },
  { title: "Error Brew & Pub", tag: "SaaS Web", tone: "from-blue-200 to-indigo-500", images: [err1, err2, err3, err4, err5, err6] },
  { title: "Sumeru Branding", tag: "Editorial", tone: "from-stone-200 to-stone-500", images: [sum1, sum2, sum3, sum4, sum5, sum6, sum7] },
  { title: "Zenith Hotels", tag: "Hospitality · Brand", tone: "from-amber-200 to-amber-500", isCTA: true },
];

export function Portfolio() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (images: string[], index = 0) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="work" ref={ref} className="relative md:h-[800vh]">
      <div className="flex h-screen flex-col justify-center overflow-hidden md:sticky md:top-0">
        <div className="mx-auto mb-10 flex w-full max-w-[1400px] items-end justify-between px-6">
          <div>
            <div className="mb-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Selected Work</div>
            <h2 className="text-display text-[clamp(2rem,5vw,4rem)]">
              Case studies, <span className="italic text-muted-foreground" style={{ fontFamily: "'General Sans'" }}>not portfolios.</span>
            </h2>
          </div>
          <div className="hidden text-xs text-muted-foreground md:block">Scroll →</div>
        </div>
        {/* Mobile: horizontal touch scroll, Desktop: sticky scroll */}
        <div className="flex gap-6 overflow-x-auto pl-6 snap-x snap-mandatory scrollbar-hide md:hidden">
          {WORK.map((w, i) => (
            <WorkCard key={w.title} w={w} i={i} onOpenLightbox={openLightbox} />
          ))}
          <div className="min-w-[4vw] shrink-0" />
        </div>
        <motion.div style={{ x }} className="hidden gap-8 pl-6 md:flex">
          {WORK.map((w, i) => (
            <WorkCard key={w.title} w={w} i={i} onOpenLightbox={openLightbox} />
          ))}
          <div className="min-w-[4vw]" />
        </motion.div>
      </div>
      <Lightbox
        images={lightboxImages}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        initialIndex={lightboxIndex}
      />
    </section>
  );
}

function WorkCard({ w, i, onOpenLightbox }: { w: any; i: number; onOpenLightbox: (images: string[], index?: number) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0), ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 200, damping: 20 });
  const sry = useSpring(ry, { stiffness: 200, damping: 20 });

  // CTA Card Design
  if (w.isCTA) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        className="relative flex h-[70vh] w-[85vw] shrink-0 flex-col items-center justify-center overflow-hidden rounded-[5px] shadow-luxe snap-center md:w-[46vw]"
        style={{
          backgroundImage: `url(${csSaas1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage: "radial-gradient(circle at 30% 20%, oklch(1 0 0 / 0.5), transparent 50%), radial-gradient(circle at 80% 80%, oklch(1 0 0 / 0.4), transparent 50%)",
            backgroundSize: "200% 200%",
          }}
        />
        <div className="relative flex flex-col items-center text-center px-8">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="mb-6 grid size-24 place-items-center rounded-full bg-white/25 backdrop-blur"
          >
            <ArrowUpRight className="size-10 text-white" />
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="text-display text-[clamp(2rem,4.5vw,4rem)] text-white"
          >
            Let's build yours next.
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="mt-4 max-w-md text-base text-white/80"
          >
            Ready to see your brand in this lineup? Explore our services or start a conversation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="/services"
              className="group inline-flex items-center gap-2 rounded-[5px] bg-white px-7 py-4 text-sm font-medium text-foreground shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
            >
              Explore Services
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-[-1px]" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-[5px] border-2 border-white/50 bg-white/15 px-7 py-4 text-sm font-medium text-white backdrop-blur transition-all hover:scale-105 hover:bg-white/25 hover:border-white/70"
            >
              Start a Project
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-[-1px]" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  // Normal Work Card Design
  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        ry.set(((e.clientX - r.left) / r.width - 0.5) * 12);
        rx.set(-((e.clientY - r.top) / r.height - 0.5) * 12);
      }}
      onMouseLeave={() => { rx.set(0); ry.set(0); }}
      onClick={() => w.images && onOpenLightbox(w.images)}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 1200 }}
      className="relative h-[70vh] w-[85vw] shrink-0 overflow-hidden rounded-[5px] shadow-luxe snap-center md:w-[46vw] cursor-pointer"
      data-cursor="hover"
    >
      {/* Use ImageSlider for Luxury Living Branding card */}
      {i === 0 && w.title === "Luxury Living Branding" ? (
        <ImageSlider />
      ) : i === 1 && w.title === "The Furnishing Story" ? (
        <ImageSliderMeridian />
      ) : i === 2 && w.title === "Penthouse Branding" ? (
        <ImageSliderPenthouse />
      ) : i === 3 && w.title === "Error Brew & Pub" ? (
        <ImageSliderKite />
      ) : i === 4 && w.title === "Sumeru Branding" ? (
        <ImageSliderField />
      ) : (
        <>
          <div className={`absolute inset-0 bg-gradient-to-br ${w.tone}`} />
          <div className="absolute inset-0 bg-black/10" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 40% at 20% 20%, oklch(1 0 0 / 0.35), transparent 70%)",
            }}
          />
        </>
      )}
      <div className="absolute inset-0 flex flex-col justify-between p-8 text-white">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em]">
          <span>0{i + 1} / 0{WORK.length}</span>
          <span>{w.tag}</span>
        </div>
        <div>
          <div className="text-display text-[clamp(2rem,4vw,4rem)]" style={{ 
            color: w.title === "Luxury Living Branding" ? "#F3852B" : "white",
            filter: w.title === "Penthouse Branding" ? "blur(0.5px)" : "none"
          }}>{w.title}</div>
          <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-3 py-1 text-xs backdrop-blur">
            View case study <ArrowUpRight className="size-3" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════════ */
/*  PROCESS - sticky scroll cards                                  */
/* ══════════════════════════════════════════════════════════════ */
const STEPS = [
  { n: "01", t: "Discover", sub: "Deep-diving into your world to uncover every opportunity.", d: "Immersion, interviews and audits — we learn your business inside out.", icon: Search },
  { n: "02", t: "Strategy", sub: "Charting the course with clarity and precision.", d: "Positioning, messaging and a roadmap tied to real outcomes.", icon: Compass },
  { n: "03", t: "Design", sub: "Bringing vision to life through seamless design and build.", d: "Brand and product design that feels intentional, not decorative.", icon: Palette },
  { n: "04", t: "Develop", sub: "Engineering experiences that perform flawlessly.", d: "Editorial, motion-driven builds engineered for performance.", icon: Globe },
  { n: "05", t: "Launch", sub: "Making your debut unforgettable across every channel.", d: "A launch moment — narrative, assets, campaigns, PR.", icon: Megaphone },
  { n: "06", t: "Scale", sub: "Compounding growth that never stops.", d: "SEO, ads and content — compounding growth month over month.", icon: LineChart },
];

export function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const [active, setActive] = useState(0);
  const total = STEPS.length;

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const idx = Math.min(Math.floor(v * total), total - 1);
      setActive(idx);
    });
    return unsubscribe;
  }, [scrollYProgress, total]);

  const scrollToStep = (idx: number) => {
    if (!sectionRef.current || idx < 0 || idx >= total) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const sectionTop = window.scrollY + rect.top;
    const sectionHeight = rect.height;
    const stepOffset = (idx / total) * sectionHeight;
    window.scrollTo({ top: sectionTop + stepOffset + 1, behavior: "smooth" });
  };

  return (
    <section id="process" ref={sectionRef} className="relative">
      {/* Mobile: Card layout */}
      <div className="px-6 py-16 md:hidden bg-[oklch(0.13_0.01_60)]">
        <div className="mb-8 text-center">
          <div className="mb-4 text-[11px] uppercase tracking-[0.3em] text-[oklch(0.75_0.19_55)]">Comprehensive Process</div>
          <h2 className="text-display text-[clamp(2rem,5vw,3rem)] leading-[1.15] text-white">
            One-stop total solution to your<br />
            <span className="italic text-[oklch(0.75_0.19_55)]" style={{ fontFamily: "'General Sans'" }}>
              digital growth needs.
            </span>
          </h2>
          <p className="mt-5 text-sm text-white/60 leading-relaxed">
            Our goal is to make sure every project meets its intended Function, Budget,
            Design, and Quality requirements.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur"
            >
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[oklch(0.75_0.19_55)] to-[oklch(0.60_0.22_40)] shadow-lg">
                  {(() => {
                    const Icon = step.icon;
                    return <Icon className="size-6 text-black" strokeWidth={1.5} />;
                  })()}
                </div>
                <div className="flex-1">
                  <div className="mb-1 font-mono text-xs text-[oklch(0.75_0.19_55)]">{step.n}</div>
                  <h3 className="text-display text-xl text-white">{step.t}</h3>
                  <p className="mt-1 text-sm text-[oklch(0.75_0.19_55)]" style={{ fontFamily: "'General Sans'" }}>
                    {step.sub}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-white/60">
                    {step.d}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop: Sticky scroll layout */}
      <div className="hidden md:block" style={{ height: `${(total + 1) * 100}vh` }}>
        <div className="sticky top-0 flex h-screen flex-col">
          {/* Header */}
          <div className="mx-auto w-full max-w-[1400px] px-6 pt-24 pb-10 md:pt-32 md:pb-14">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 text-[11px] uppercase tracking-[0.3em] text-[oklch(0.75_0.19_55)]">Comprehensive Process</div>
              <h2 className="text-display text-[clamp(2.2rem,5.5vw,4.5rem)] leading-[1.15]">
                One-stop total solution to your<br />
                <span className="italic text-[oklch(0.75_0.19_55)]" style={{ fontFamily: "'General Sans'" }}>
                  digital growth needs.
                </span>
              </h2>
              <p className="mt-5 max-w-2xl text-sm text-muted-foreground md:text-base leading-relaxed">
                Our goal is to make sure every project meets its intended Function, Budget,
                Design, and Quality requirements.
              </p>
            </div>
          </div>

          {/* Card area */}
          <div className="relative flex-1 overflow-hidden bg-[oklch(0.13_0.01_60)] border-t border-white/5">
            {/* Subtle amber gradient glow bottom-left */}
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[oklch(0.45_0.18_55)] opacity-15 blur-[100px]" />

            <div className="mx-auto flex h-full max-w-[1400px] items-center px-6">
              <div className="grid w-full gap-8 md:grid-cols-2 md:gap-16 items-center">
                {/* Left: Icon */}
                <div className="flex flex-col items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                      className="grid h-32 w-32 place-items-center rounded-3xl bg-gradient-to-br from-[oklch(0.75_0.19_55)] to-[oklch(0.60_0.22_40)] shadow-2xl md:h-44 md:w-44"
                    >
                      {(() => {
                        const Icon = STEPS[active].icon;
                        return <Icon className="size-14 text-black md:size-20" strokeWidth={1.5} />;
                      })()}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Right: Content */}
                <div className="flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                    >
                      <h3 className="text-display text-4xl text-white md:text-6xl">
                        {STEPS[active].t}
                      </h3>
                      <p className="mt-3 text-base text-[oklch(0.75_0.19_55)] md:text-lg" style={{ fontFamily: "'General Sans'" }}>
                        {STEPS[active].sub}
                      </p>
                      <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60 md:text-base">
                        {STEPS[active].d}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Step counter - bottom left */}
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
              <span className="font-mono text-2xl text-[oklch(0.75_0.19_55)] md:text-3xl">
                {STEPS[active].n}
              </span>
              <span className="font-mono text-2xl text-white/30 md:text-3xl">
                /{String(total).padStart(2, "0")}
              </span>
            </div>

            {/* Navigation arrows - bottom right */}
            <div className="absolute bottom-6 right-6 flex gap-2 md:bottom-10 md:right-10">
              <button
                onClick={() => scrollToStep(active - 1)}
                disabled={active === 0}
                className="grid size-10 place-items-center rounded-full border border-white/20 text-white/60 transition-all hover:border-white/50 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed md:size-12"
                aria-label="Previous step"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 md:size-5"><path d="m18 15-6-6-6 6" /></svg>
              </button>
              <button
                onClick={() => scrollToStep(active + 1)}
                disabled={active === total - 1}
                className="grid size-10 place-items-center rounded-full border border-white/20 text-white/60 transition-all hover:border-white/50 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed md:size-12"
                aria-label="Next step"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 md:size-5"><path d="m6 9 6 6 6-6" /></svg>
              </button>
            </div>

            {/* Progress dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 md:bottom-10">
              {STEPS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToStep(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === active
                      ? "w-8 bg-[oklch(0.75_0.19_55)]"
                      : "w-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to step ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════ */
/*  TESTIMONIALS + LOGOS                                           */
/* ══════════════════════════════════════════════════════════════ */
const TESTIMONIALS = [
  { n: "Rohit S.", r: "Founder, Aurora Coffee", q: "They didn't just design a brand. They gave us a voice we hear every day." },
  { n: "Ananya M.", r: "CMO, Meridian Realty", q: "Traffic doubled in one quarter. But the site itself - that's the story." },
  { n: "Vikram P.", r: "CEO, Kite Analytics", q: "The most thoughtful team we've worked with. Every detail earns its place." },
  { n: "Priya K.", r: "Founder, Nova", q: "Cogito is the reason our launch felt like an event, not a post." },
  { n: "Arjun T.", r: "Director, Field Studio", q: "Motion, taste, and results. Rare to find all three." },
];
export function Testimonials() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Voices</div>
            <h2 className="text-display text-[clamp(2.5rem,6vw,5rem)]">
              Founders who <span className="italic text-[oklch(0.75_0.19_55)]" style={{ fontFamily: "'General Sans'" }}>trusted us.</span>
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/70 px-4 py-2 backdrop-blur">
            <Star className="size-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold">4.9</span>
            <span className="text-xs text-muted-foreground">· 120+ Google Reviews</span>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="flex gap-6" style={{ width: "max-content", animation: "marquee 60s linear infinite" }}>
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <div key={i} className="w-[380px] shrink-0 rounded-3xl border border-glass-border bg-glass p-7 shadow-luxe backdrop-blur-xl">
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="size-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg leading-snug">"{t.q}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-[oklch(0.75_0.19_55)] to-[oklch(0.82_0.17_70)] text-sm font-semibold text-white">
                  {t.n[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.n}</div>
                  <div className="text-xs text-muted-foreground">{t.r}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Logos marquee */}
      <div className="mt-20 border-y border-border/60 py-10">
        <div className="relative overflow-hidden">
          <div className="flex gap-16 opacity-60" style={{ width: "max-content", animation: "marquee 45s linear infinite" }}>
            {[...Array(2)].flatMap((_, k) =>
              ["Aurora", "Meridian", "Nova", "Kite", "Field", "Halcyon", "Beacon", "Northwind", "Lumen", "Terra"].map((l, i) => (
                <div key={`${k}-${i}`} className="text-display text-3xl tracking-tight text-foreground/70 transition-colors hover:text-[oklch(0.75_0.19_55)]">
                  {l}.
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════ */
/*  BRANDS - logo wall on dark gradient                            */
/* ══════════════════════════════════════════════════════════════ */
const brandLogos = import.meta.glob("@/assets/brands/*.webp", {
  eager: true,
}) as Record<string, { default: string }>;

export function Brands() {
  const logos = Object.values(brandLogos).map((m) => ({
    url: m.default,
    name: "Brand Partner",
  }));

  return (
    <section id="brands" className="relative py-32">
      <div className="mx-auto max-w-[1400px] px-6">
        <div
          className="relative overflow-hidden rounded-[2.5rem] px-6 py-20 md:px-16 md:py-28"
          style={{
            background:
              "radial-gradient(120% 80% at 20% 0%, oklch(0.28 0.08 55 / 0.9), transparent 60%), radial-gradient(100% 80% at 100% 100%, oklch(0.25 0.12 30 / 0.85), transparent 55%), linear-gradient(160deg, oklch(0.14 0.02 260) 0%, oklch(0.08 0.01 260) 100%)",
          }}
        >
          {/* subtle grid */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />
          {/* glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, oklch(0.75 0.19 55 / 0.6), transparent 70%)",
            }}
          />

          <div className="relative">
            <Reveal>
              <div className="mb-4 text-[11px] uppercase tracking-[0.3em] text-white/50">
Brands
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-display max-w-4xl text-[clamp(2.25rem,6vw,4.75rem)] text-white">
                Brands that work with{" "}
                <span
                  className="italic text-[oklch(0.82_0.17_70)]"
                  style={{ fontFamily: "'General Sans'" }}
                >
                  Cogito.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-base text-white/60">
                From heritage hospitality to modern lifestyle labels - a
                growing family of brands scaling with us.
              </p>
            </Reveal>

            <div className="mt-16 grid grid-cols-2 gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {logos.map((logo, i) => (
                <motion.div
                  key={logo.url}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.7,
                    delay: (i % 6) * 0.05,
                    ease: [0.19, 1, 0.22, 1],
                  }}
                  className="group relative flex aspect-square items-center justify-center bg-white p-4 transition-all duration-500 hover:bg-transparent"
                >
                  <img
                    src={logo.url}
                    alt={logo.name}
                    loading="lazy"
                    className="max-h-36 w-auto max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Team };

/* ══════════════════════════════════════════════════════════════ */
/*  CONTACT + FOOTER                                               */
/* ══════════════════════════════════════════════════════════════ */
export function Contact() {
  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto grid max-w-[1400px] gap-16 px-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <div>
          <div className="mb-4 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Contact</div>

          <h2 className="text-display text-[clamp(2.5rem,7vw,6rem)]">
            Let's build <br />
            something <br />
            <span className="italic text-[oklch(0.75_0.19_55)]" style={{ fontFamily: "'General Sans'" }}>
              extraordinary.
            </span>
          </h2>
          <div className="mt-10 space-y-4 text-sm">
            <a href="tel:7431052034" className="flex items-center gap-3 text-foreground hover:text-[oklch(0.75_0.19_55)]">
              <Phone className="size-4" /> 74310 52034
            </a>
            <a href="mailto:hello@cogitoindia.in" className="flex items-center gap-3 text-foreground hover:text-[oklch(0.75_0.19_55)]">
              <Mail className="size-4" /> hello@cogitoindia.in
            </a>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="size-4" /> Siliguri, West Bengal, India
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="rounded-3xl border border-glass-border bg-glass p-8 shadow-luxe backdrop-blur-xl"
        >
          <div className="space-y-5">
            {[
              { label: "Your name", type: "text", ph: "Ada Lovelace" },
              { label: "Email", type: "email", ph: "you@company.com" },
              { label: "Company", type: "text", ph: "Cogito Studio" },
            ].map((f) => (
              <label key={f.label} className="block">
                <span className="text-[11px] uppercase tracking-widest text-muted-foreground">{f.label}</span>
                <input
                  type={f.type}
                  placeholder={f.ph}
                  className="mt-1 w-full border-b border-border bg-transparent py-3 text-lg text-foreground placeholder:text-muted-foreground/60 focus:border-[oklch(0.75_0.19_55)] focus:outline-none"
                />
              </label>
            ))}
            <label className="block">
              <span className="text-[11px] uppercase tracking-widest text-muted-foreground">Tell us about your project</span>
              <textarea
                rows={4}
                placeholder="What are you building?"
                className="mt-1 w-full border-b border-border bg-transparent py-3 text-lg text-foreground placeholder:text-muted-foreground/60 focus:border-[oklch(0.75_0.19_55)] focus:outline-none"
              />
            </label>
            <Magnetic>
              <button
                type="submit"
                className="mt-4 inline-flex items-center gap-2 rounded-[5px] bg-foreground px-6 py-3.5 text-sm font-medium text-background shadow-luxe hover:scale-[1.03]"
              >
                Send message <ArrowUpRight className="size-4" />
              </button>
            </Magnetic>
          </div>
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 pt-24 pb-10">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="text-display text-[clamp(3rem,10vw,12rem)] leading-[0.9]">
          Ready to build <br />
          a brand <br />
          <span className="italic text-[oklch(0.75_0.19_55)]" style={{ fontFamily: "'General Sans'" }}>
            people remember?
          </span>
        </div>
        <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-border/60 pt-8 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="grid size-7 place-items-center rounded-full bg-foreground text-background text-[10px]">C.</span>
            © {new Date().getFullYear()} Cogito Digital - Siliguri, India
          </div>
          <div className="flex items-center gap-4">
            {[Instagram, Facebook, Linkedin, Youtube].map((I, i) => (
              <motion.a
                key={i}
                href="#"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
                className="grid size-11 place-items-center rounded-full border border-border/60 bg-white/70 backdrop-blur transition-colors hover:text-[oklch(0.75_0.19_55)] hover:bg-white hover:shadow-lg"
              >
                <I className="size-5" />
              </motion.a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
