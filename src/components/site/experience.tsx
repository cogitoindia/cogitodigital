import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "motion/react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logoAsset from "@/assets/Cogito_Digital_Logo.webp";

/* ------------------------------------------------- */
/*  Smooth scroll (Lenis)                              */
/* ------------------------------------------------- */
export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    let raf = 0;
    let lenis: any;
    let cancelled = false;
    (async () => {
      const Lenis = (await import("lenis")).default;
      if (cancelled) return;
      lenis = new Lenis({
        duration: 1.15,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });
      const loop = (time: number) => {
        lenis.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    })();
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      lenis?.destroy?.();
    };
  }, []);
  return <>{children}</>;
}

/* ------------------------------------------------- */
/*  Custom glow cursor                                  */
/* ------------------------------------------------- */
export function GlowCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement | null;
      setHover(!!t?.closest("a,button,[data-cursor='hover']"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <>
      <motion.div
        aria-hidden
        style={{ x: sx, y: sy }}
        className="pointer-events-none fixed left-0 top-0 z-[70] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      >
        <motion.div
          animate={{ scale: hover ? 1.6 : 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="size-3 rounded-full bg-white"
        />
      </motion.div>
      <motion.div
        aria-hidden
        style={{ x: sx, y: sy }}
        className="pointer-events-none fixed left-0 top-0 z-[65] -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{ scale: hover ? 2.2 : 1, opacity: hover ? 0.6 : 0.35 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="size-16 rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in oklab, var(--ember) 55%, transparent), transparent 70%)",
            filter: "blur(6px)",
          }}
        />
      </motion.div>
    </>
  );
}

/* ------------------------------------------------- */
/*  Navigation                                          */
/* ------------------------------------------------- */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pathname, setPathname] = useState<string>("/");
  useEffect(() => {
    setPathname(window.location.pathname);
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isServices = pathname.startsWith("/services");
  const homeAnchor = (h: string) => (isServices ? `/${h}` : h);

  const items = [
    { label: "Work", href: homeAnchor("#work") },
    { label: "Process", href: homeAnchor("#process") },
    { label: "About", href: homeAnchor("#about") },
    { label: "Contact", href: homeAnchor("#contact") },
  ];

  const serviceLinks = [
    { label: "Brand Identity", slug: "branding" },
    { label: "Web Design & Dev", slug: "web" },
    { label: "SEO", slug: "seo" },
    { label: "Performance Marketing", slug: "performance" },
    { label: "Content & Social", slug: "content" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <div
        className={`flex w-full max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all bg-white shadow-lg overflow-visible ${
          scrolled ? "shadow-xl" : ""
        }`}
      >
        <a href="/" className="flex items-center">
          <img
            src={logoAsset}
            alt="Cogito Digital"
            className="h-7 w-auto object-contain"
            width="240"
            height="56"
          />
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <a
              href="/services"
              className="inline-flex items-center gap-1 rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Services
              <svg className="size-3 opacity-60" viewBox="0 0 12 12" fill="none">
                <path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.22, ease: [0.19, 1, 0.22, 1] }}
                  className="absolute left-1/2 top-full z-50 mt-2 w-72 -translate-x-1/2 rounded-2xl border border-glass-border bg-white/90 p-2 shadow-luxe backdrop-blur-xl"
                >
                  {serviceLinks.map((s, i) => (
                    <a
                      key={s.slug}
                      href={`/services#${s.slug}`}
                      className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-foreground/80 transition-colors hover:bg-[oklch(0.75_0.19_55_/_0.08)] hover:text-foreground"
                    >
                      <span>
                        <span className="mr-2 font-mono text-[10px] text-muted-foreground">
                          0{i + 1}
                        </span>
                        {s.label}
                      </span>
                      <span className="text-[10px] text-muted-foreground">→</span>
                    </a>
                  ))}
                  <a
                    href="/services"
                    className="mt-1 flex items-center justify-between rounded-xl bg-foreground px-3 py-2.5 text-sm font-medium text-background"
                  >
                    All services
                    <span>→</span>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {items.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="relative rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {i.label}
            </a>
          ))}
        </nav>
        
        {/* Desktop CTA */}
        <a
          href={homeAnchor("#contact")}
          className="hidden group md:inline-flex items-center gap-2 rounded-[5px] bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
        >
          Start Project
          <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
        </a>

        {/* Mobile Menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button className="rounded-full p-2 hover:bg-muted">
              <Menu className="size-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[350px] overflow-y-auto">
            <div className="flex flex-col gap-6 mt-8">
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-3">Services</h3>
                <div className="flex flex-col gap-2">
                  {serviceLinks.map((s, i) => (
                    <a
                      key={s.slug}
                      href={`/services#${s.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-foreground/80 transition-colors hover:bg-muted"
                    >
                      <span>
                        <span className="mr-2 font-mono text-[10px] text-muted-foreground">
                          0{i + 1}
                        </span>
                        {s.label}
                      </span>
                      <span className="text-[10px] text-muted-foreground">→</span>
                    </a>
                  ))}
                  <a
                    href="/services"
                    onClick={() => setMobileOpen(false)}
                    className="mt-1 flex items-center justify-between rounded-xl bg-foreground px-3 py-2.5 text-sm font-medium text-background"
                  >
                    All services
                    <span>→</span>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-3">Navigation</h3>
                <div className="flex flex-col gap-2">
                  {items.map((i) => (
                    <a
                      key={i.href}
                      href={i.href}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-xl px-3 py-2.5 text-sm text-foreground/80 transition-colors hover:bg-muted"
                    >
                      {i.label}
                    </a>
                  ))}
                </div>
              </div>
              <a
                href={homeAnchor("#contact")}
                onClick={() => setMobileOpen(false)}
                className="group inline-flex items-center justify-center gap-2 rounded-[5px] bg-foreground px-4 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
              >
                Start Project
                <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}

/* ------------------------------------------------- */
/*  Section transition helper                           */
/* ------------------------------------------------- */
export function Reveal({
  children,
  delay = 0,
  y = 32,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, delay, ease: [0.19, 1, 0.22, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------- */
/*  Split-text reveal                                   */
/* ------------------------------------------------- */
export function SplitReveal({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");
  return (
    <span className={className} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} className="mr-[0.25em] inline-block overflow-hidden align-bottom">
          <motion.span
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{
              delay: delay + i * 0.06,
              duration: 1.1,
              ease: [0.19, 1, 0.22, 1],
            }}
            className="inline-block"
          >
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* ------------------------------------------------- */
/*  Counter                                             */
/* ------------------------------------------------- */
export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    let started = false;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started) {
          started = true;
          const start = performance.now();
          const dur = 1800;
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(to * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [to]);
  return (
    <span ref={ref} className="font-mono tabular-nums">
      {n}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------- */
/*  Magnetic wrapper                                    */
/* ------------------------------------------------- */
export function Magnetic({ children, strength = 0.35 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 20 });
  const sy = useSpring(y, { stiffness: 250, damping: 20 });
  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------- */
/*  Modal for AnimatePresence exports                   */
/* ------------------------------------------------- */
export { AnimatePresence };
