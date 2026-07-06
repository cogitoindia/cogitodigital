import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as DialogOverlay, c as DialogTrigger, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { i as useScroll, n as useTransform, o as AnimatePresence, r as useMotionValue, t as useSpring } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { C as Facebook, D as ChevronLeft, E as ChevronRight, M as ArrowUpRight, S as Globe, T as Compass, _ as MapPin, c as Star, f as Play, g as Megaphone, h as Menu, i as Video, k as ChartLine, l as Sparkles, m as Palette, n as Youtube, o as TrendingUp, p as Phone, r as X, s as Target, u as Search, v as Mail, w as Eye, x as Instagram, y as Linkedin } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { i as Program, n as Mesh, r as Renderer, t as Triangle } from "../_libs/ogl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sections-BZW38pHv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Sheet = Dialog;
var SheetTrigger = DialogTrigger;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = DialogContent.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription.displayName;
var Cogito_Digital_Logo_default = "/assets/Cogito_Digital_Logo-y4jfyJWd.webp";
function SmoothScroll({ children }) {
	(0, import_react.useEffect)(() => {
		let raf = 0;
		let lenis;
		let cancelled = false;
		(async () => {
			const Lenis = (await import("../_libs/lenis.mjs").then((n) => n.t)).default;
			if (cancelled) return;
			lenis = new Lenis({
				duration: 1.15,
				easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
				smoothWheel: true
			});
			const loop = (time) => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [servicesOpen, setServicesOpen] = (0, import_react.useState)(false);
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	const [pathname, setPathname] = (0, import_react.useState)("/");
	(0, import_react.useEffect)(() => {
		setPathname(window.location.pathname);
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const isServices = pathname.startsWith("/services");
	const homeAnchor = (h) => isServices ? `/${h}` : h;
	const items = [
		{
			label: "Work",
			href: homeAnchor("#work")
		},
		{
			label: "Process",
			href: homeAnchor("#process")
		},
		{
			label: "About",
			href: homeAnchor("#about")
		},
		{
			label: "Contact",
			href: homeAnchor("#contact")
		}
	];
	const serviceLinks = [
		{
			label: "Brand Identity",
			slug: "branding"
		},
		{
			label: "Web Design & Dev",
			slug: "web"
		},
		{
			label: "SEO",
			slug: "seo"
		},
		{
			label: "Performance Marketing",
			slug: "performance"
		},
		{
			label: "Content & Social",
			slug: "content"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.header, {
		initial: {
			y: -80,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: {
			delay: .2,
			duration: .9,
			ease: [
				.19,
				1,
				.22,
				1
			]
		},
		className: "fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `flex w-full max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all bg-white shadow-lg overflow-visible ${scrolled ? "shadow-xl" : ""}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/",
					className: "flex items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: Cogito_Digital_Logo_default,
						alt: "Cogito Digital",
						className: "h-7 w-auto object-contain",
						width: "240",
						height: "56"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-1 md:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						onMouseEnter: () => setServicesOpen(true),
						onMouseLeave: () => setServicesOpen(false),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "/services",
							className: "inline-flex items-center gap-1 rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground",
							children: ["Services", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								className: "size-3 opacity-60",
								viewBox: "0 0 12 12",
								fill: "none",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M3 4.5l3 3 3-3",
									stroke: "currentColor",
									strokeWidth: "1.5",
									strokeLinecap: "round",
									strokeLinejoin: "round"
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: servicesOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 8
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: {
								opacity: 0,
								y: 8
							},
							transition: {
								duration: .22,
								ease: [
									.19,
									1,
									.22,
									1
								]
							},
							className: "absolute left-1/2 top-full z-50 mt-2 w-72 -translate-x-1/2 rounded-2xl border border-glass-border bg-white/90 p-2 shadow-luxe backdrop-blur-xl",
							children: [serviceLinks.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `/services#${s.slug}`,
								className: "flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-foreground/80 transition-colors hover:bg-[oklch(0.75_0.19_55_/_0.08)] hover:text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mr-2 font-mono text-[10px] text-muted-foreground",
									children: ["0", i + 1]
								}), s.label] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] text-muted-foreground",
									children: "→"
								})]
							}, s.slug)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "/services",
								className: "mt-1 flex items-center justify-between rounded-xl bg-foreground px-3 py-2.5 text-sm font-medium text-background",
								children: ["All services", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "→" })]
							})]
						}) })]
					}), items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: i.href,
						className: "relative rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground",
						children: i.label
					}, i.href))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: homeAnchor("#contact"),
					className: "hidden group md:inline-flex items-center gap-2 rounded-[5px] bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:scale-[1.03]",
					children: ["Start Project", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-block transition-transform group-hover:translate-x-0.5",
						children: "→"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
					open: mobileOpen,
					onOpenChange: setMobileOpen,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
						asChild: true,
						className: "md:hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "rounded-full p-2 hover:bg-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetContent, {
						side: "right",
						className: "w-[300px] sm:w-[350px] overflow-y-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-6 mt-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-semibold text-muted-foreground mb-3",
									children: "Services"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-2",
									children: [serviceLinks.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `/services#${s.slug}`,
										onClick: () => setMobileOpen(false),
										className: "flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-foreground/80 transition-colors hover:bg-muted",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "mr-2 font-mono text-[10px] text-muted-foreground",
											children: ["0", i + 1]
										}), s.label] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] text-muted-foreground",
											children: "→"
										})]
									}, s.slug)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "/services",
										onClick: () => setMobileOpen(false),
										className: "mt-1 flex items-center justify-between rounded-xl bg-foreground px-3 py-2.5 text-sm font-medium text-background",
										children: ["All services", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "→" })]
									})]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-semibold text-muted-foreground mb-3",
									children: "Navigation"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-col gap-2",
									children: items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: i.href,
										onClick: () => setMobileOpen(false),
										className: "rounded-xl px-3 py-2.5 text-sm text-foreground/80 transition-colors hover:bg-muted",
										children: i.label
									}, i.href))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: homeAnchor("#contact"),
									onClick: () => setMobileOpen(false),
									className: "group inline-flex items-center justify-center gap-2 rounded-[5px] bg-foreground px-4 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.03]",
									children: ["Start Project", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-block transition-transform group-hover:translate-x-0.5",
										children: "→"
									})]
								})
							]
						})
					})]
				})
			]
		})
	});
}
function Reveal({ children, delay = 0, y = 32, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: {
			duration: 1,
			delay,
			ease: [
				.19,
				1,
				.22,
				1
			]
		},
		className,
		children
	});
}
function SplitReveal({ text, className = "", delay = 0 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className,
		"aria-label": text,
		children: text.split(" ").map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mr-[0.25em] inline-block overflow-hidden align-bottom",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				initial: { y: "110%" },
				animate: { y: 0 },
				transition: {
					delay: delay + i * .06,
					duration: 1.1,
					ease: [
						.19,
						1,
						.22,
						1
					]
				},
				className: "inline-block",
				children: w
			})
		}, i))
	});
}
function Counter({ to, suffix = "" }) {
	const [n, setN] = (0, import_react.useState)(0);
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		let started = false;
		const io = new IntersectionObserver(([e]) => {
			if (e.isIntersecting && !started) {
				started = true;
				const start = performance.now();
				const dur = 1800;
				const tick = (t) => {
					const p = Math.min(1, (t - start) / dur);
					const eased = 1 - Math.pow(1 - p, 3);
					setN(Math.round(to * eased));
					if (p < 1) requestAnimationFrame(tick);
				};
				requestAnimationFrame(tick);
			}
		}, { threshold: .4 });
		if (ref.current) io.observe(ref.current);
		return () => io.disconnect();
	}, [to]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		className: "font-mono tabular-nums",
		children: [n, suffix]
	});
}
function Magnetic({ children, strength = .35 }) {
	const ref = (0, import_react.useRef)(null);
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const sx = useSpring(x, {
		stiffness: 250,
		damping: 20
	});
	const sy = useSpring(y, {
		stiffness: 250,
		damping: 20
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		ref,
		style: {
			x: sx,
			y: sy
		},
		onMouseMove: (e) => {
			const r = ref.current.getBoundingClientRect();
			x.set((e.clientX - (r.left + r.width / 2)) * strength);
			y.set((e.clientY - (r.top + r.height / 2)) * strength);
		},
		onMouseLeave: () => {
			x.set(0);
			y.set(0);
		},
		className: "inline-block",
		children
	});
}
var _1_exports = /* @__PURE__ */ __exportAll({ default: () => _1_default });
var _1_default = "/assets/1-CcAKm3R0.webp";
var _10_exports = /* @__PURE__ */ __exportAll({ default: () => _10_default });
var _10_default = "/assets/10-CLaX-e0_.webp";
var _11_exports = /* @__PURE__ */ __exportAll({ default: () => _11_default });
var _11_default = "/assets/11-BAlnol7j.webp";
var _12_exports = /* @__PURE__ */ __exportAll({ default: () => _12_default });
var _12_default = "/assets/12-dAblbZda.webp";
var _13_exports = /* @__PURE__ */ __exportAll({ default: () => _13_default });
var _13_default = "/assets/13-B47NMiXc.webp";
var _14_exports = /* @__PURE__ */ __exportAll({ default: () => _14_default });
var _14_default = "/assets/14-BNnuxKgc.webp";
var _15_exports = /* @__PURE__ */ __exportAll({ default: () => _15_default });
var _15_default = "/assets/15-Dav-XkoY.webp";
var _16_exports = /* @__PURE__ */ __exportAll({ default: () => _16_default });
var _16_default = "/assets/16-DAbgn-Xy.webp";
var _17_exports = /* @__PURE__ */ __exportAll({ default: () => _17_default });
var _17_default = "/assets/17-DcwE8R1f.webp";
var _18_exports = /* @__PURE__ */ __exportAll({ default: () => _18_default });
var _18_default = "/assets/18-qFqE-wn-.webp";
var _2_exports = /* @__PURE__ */ __exportAll({ default: () => _2_default });
var _2_default = "/assets/2-CipMOc5N.webp";
var _3_exports = /* @__PURE__ */ __exportAll({ default: () => _3_default });
var _3_default = "/assets/3-BwObXC4P.webp";
var _4_exports = /* @__PURE__ */ __exportAll({ default: () => _4_default });
var _4_default = "/assets/4-CN-oj84q.webp";
var _5_exports = /* @__PURE__ */ __exportAll({ default: () => _5_default });
var _5_default = "/assets/5-SRlXI7zs.webp";
var _6_exports = /* @__PURE__ */ __exportAll({ default: () => _6_default });
var _6_default = "/assets/6-D3rQISKk.webp";
var _7_exports = /* @__PURE__ */ __exportAll({ default: () => _7_default });
var _7_default = "/assets/7-DSnKyUNX.webp";
var _8_exports = /* @__PURE__ */ __exportAll({ default: () => _8_default });
var _8_default = "/assets/8-DtRihzSr.webp";
var _9_exports = /* @__PURE__ */ __exportAll({ default: () => _9_default });
var _9_default = "/assets/9-DZLfQJXC.webp";
var Prism = ({ height = 3.5, baseWidth = 5.5, animationType = "rotate", glow = 1, offset = {
	x: 0,
	y: 0
}, noise = .5, transparent = true, scale = 3.6, hueShift = 0, colorFrequency = 1, hoverStrength = 2, inertia = .05, bloom = 1, suspendWhenOffscreen = false, timeScale = .5 }) => {
	const containerRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const container = containerRef.current;
		if (!container) return;
		const H = Math.max(.001, height);
		const BASE_HALF = Math.max(.001, baseWidth) * .5;
		const GLOW = Math.max(0, glow);
		const NOISE = Math.max(0, noise);
		const offX = offset?.x ?? 0;
		const offY = offset?.y ?? 0;
		const SAT = transparent ? 1.5 : 1;
		const SCALE = Math.max(.001, scale);
		const HUE = hueShift || 0;
		const CFREQ = Math.max(0, colorFrequency || 1);
		const BLOOM = Math.max(0, bloom || 1);
		const RSX = 1;
		const RSY = 1;
		const RSZ = 1;
		const TS = Math.max(0, timeScale || 1);
		const HOVSTR = Math.max(0, hoverStrength || 1);
		const INERT = Math.max(0, Math.min(1, inertia || .12));
		const dpr = 1;
		const renderer = new Renderer({
			dpr,
			alpha: transparent,
			antialias: false
		});
		const gl = renderer.gl;
		gl.disable(gl.DEPTH_TEST);
		gl.disable(gl.CULL_FACE);
		gl.disable(gl.BLEND);
		Object.assign(gl.canvas.style, {
			position: "absolute",
			inset: "0",
			width: "100%",
			height: "100%",
			display: "block"
		});
		container.appendChild(gl.canvas);
		const vertex = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;
		const fragment = `
      precision highp float;

      uniform vec2  iResolution;
      uniform float iTime;

      uniform float uHeight;
      uniform float uBaseHalf;
      uniform mat3  uRot;
      uniform int   uUseBaseWobble;
      uniform float uGlow;
      uniform vec2  uOffsetPx;
      uniform float uNoise;
      uniform float uSaturation;
      uniform float uScale;
      uniform float uHueShift;
      uniform float uColorFreq;
      uniform float uBloom;
      uniform float uCenterShift;
      uniform float uInvBaseHalf;
      uniform float uInvHeight;
      uniform float uMinAxis;
      uniform float uPxScale;
      uniform float uTimeScale;

      vec4 tanh4(vec4 x){
        vec4 e2x = exp(2.0*x);
        return (e2x - 1.0) / (e2x + 1.0);
      }

      float rand(vec2 co){
        return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453123);
      }

      float sdOctaAnisoInv(vec3 p){
        vec3 q = vec3(abs(p.x) * uInvBaseHalf, abs(p.y) * uInvHeight, abs(p.z) * uInvBaseHalf);
        float m = q.x + q.y + q.z - 1.0;
        return m * uMinAxis * 0.5773502691896258;
      }

      float sdPyramidUpInv(vec3 p){
        float oct = sdOctaAnisoInv(p);
        float halfSpace = -p.y;
        return max(oct, halfSpace);
      }

      mat3 hueRotation(float a){
        float c = cos(a), s = sin(a);
        mat3 W = mat3(
          0.299, 0.587, 0.114,
          0.299, 0.587, 0.114,
          0.299, 0.587, 0.114
        );
        mat3 U = mat3(
           0.701, -0.587, -0.114,
          -0.299,  0.413, -0.114,
          -0.300, -0.588,  0.886
        );
        mat3 V = mat3(
           0.168, -0.331,  0.500,
           0.328,  0.035, -0.500,
          -0.497,  0.296,  0.201
        );
        return W + U * c + V * s;
      }

      void main(){
        vec2 f = (gl_FragCoord.xy - 0.5 * iResolution.xy - uOffsetPx) * uPxScale;

        float z = 5.0;
        float d = 0.0;

        vec3 p;
        vec4 o = vec4(0.0);

        float centerShift = uCenterShift;
        float cf = uColorFreq;

        mat2 wob = mat2(1.0);
        if (uUseBaseWobble == 1) {
          float t = iTime * uTimeScale;
          float c0 = cos(t + 0.0);
          float c1 = cos(t + 33.0);
          float c2 = cos(t + 11.0);
          wob = mat2(c0, c1, c2, c0);
        }

        const int STEPS = 60;
        for (int i = 0; i < STEPS; i++) {
          p = vec3(f, z);
          p.xz = p.xz * wob;
          p = uRot * p;
          vec3 q = p;
          q.y += centerShift;
          d = 0.1 + 0.2 * abs(sdPyramidUpInv(q));
          z -= d;
          o += (sin((p.y + z) * cf + vec4(0.0, 1.0, 2.0, 3.0)) + 1.0) / d;
        }

        o = tanh4(o * o * (uGlow * uBloom) / 1e5);

        vec3 col = o.rgb;
        float n = rand(gl_FragCoord.xy + vec2(iTime));
        col += (n - 0.5) * uNoise;
        col = clamp(col, 0.0, 1.0);

        float L = dot(col, vec3(0.2126, 0.7152, 0.0722));
        col = clamp(mix(vec3(L), col, uSaturation), 0.0, 1.0);

        if(abs(uHueShift) > 0.0001){
          col = clamp(hueRotation(uHueShift) * col, 0.0, 1.0);
        }

        gl_FragColor = vec4(col, o.a);
      }
    `;
		const geometry = new Triangle(gl);
		const iResBuf = /* @__PURE__ */ new Float32Array(2);
		const offsetPxBuf = /* @__PURE__ */ new Float32Array(2);
		const program = new Program(gl, {
			vertex,
			fragment,
			uniforms: {
				iResolution: { value: iResBuf },
				iTime: { value: 0 },
				uHeight: { value: H },
				uBaseHalf: { value: BASE_HALF },
				uUseBaseWobble: { value: 1 },
				uRot: { value: new Float32Array([
					1,
					0,
					0,
					0,
					1,
					0,
					0,
					0,
					1
				]) },
				uGlow: { value: GLOW },
				uOffsetPx: { value: offsetPxBuf },
				uNoise: { value: NOISE },
				uSaturation: { value: SAT },
				uScale: { value: SCALE },
				uHueShift: { value: HUE },
				uColorFreq: { value: CFREQ },
				uBloom: { value: BLOOM },
				uCenterShift: { value: H * .25 },
				uInvBaseHalf: { value: 1 / BASE_HALF },
				uInvHeight: { value: 1 / H },
				uMinAxis: { value: Math.min(BASE_HALF, H) },
				uPxScale: { value: 1 / ((gl.drawingBufferHeight || 1) * .1 * SCALE) },
				uTimeScale: { value: TS }
			}
		});
		const mesh = new Mesh(gl, {
			geometry,
			program
		});
		const resize = () => {
			const w = container.clientWidth || 1;
			const h = container.clientHeight || 1;
			renderer.setSize(w, h);
			iResBuf[0] = gl.drawingBufferWidth;
			iResBuf[1] = gl.drawingBufferHeight;
			offsetPxBuf[0] = offX * dpr;
			offsetPxBuf[1] = offY * dpr;
			program.uniforms.uPxScale.value = 1 / ((gl.drawingBufferHeight || 1) * .1 * SCALE);
		};
		const ro = new ResizeObserver(resize);
		ro.observe(container);
		resize();
		const rotBuf = /* @__PURE__ */ new Float32Array(9);
		const setMat3FromEuler = (yawY, pitchX, rollZ, out) => {
			const cy = Math.cos(yawY), sy = Math.sin(yawY);
			const cx = Math.cos(pitchX), sx = Math.sin(pitchX);
			const cz = Math.cos(rollZ), sz = Math.sin(rollZ);
			const r00 = cy * cz + sy * sx * sz;
			const r01 = -cy * sz + sy * sx * cz;
			const r02 = sy * cx;
			const r10 = cx * sz;
			const r11 = cx * cz;
			const r12 = -sx;
			const r20 = -sy * cz + cy * sx * sz;
			const r21 = sy * sz + cy * sx * cz;
			const r22 = cy * cx;
			out[0] = r00;
			out[1] = r10;
			out[2] = r20;
			out[3] = r01;
			out[4] = r11;
			out[5] = r21;
			out[6] = r02;
			out[7] = r12;
			out[8] = r22;
			return out;
		};
		const NOISE_IS_ZERO = NOISE < 1e-6;
		let raf = 0;
		const t0 = performance.now();
		const startRAF = () => {
			if (raf) return;
			raf = requestAnimationFrame(render);
		};
		const stopRAF = () => {
			if (!raf) return;
			cancelAnimationFrame(raf);
			raf = 0;
		};
		const rnd = () => Math.random();
		const wX = (.3 + rnd() * .6) * RSX;
		const wY = (.2 + rnd() * .7) * RSY;
		const wZ = (.1 + rnd() * .5) * RSZ;
		const phX = rnd() * Math.PI * 2;
		const phZ = rnd() * Math.PI * 2;
		let yaw = 0, pitch = 0, roll = 0;
		let targetYaw = 0, targetPitch = 0;
		const lerp = (a, b, t) => a + (b - a) * t;
		const pointer = {
			x: 0,
			y: 0,
			inside: true
		};
		const onMove = (e) => {
			const ww = Math.max(1, window.innerWidth);
			const wh = Math.max(1, window.innerHeight);
			const cx = ww * .5;
			const cy = wh * .5;
			const nx = (e.clientX - cx) / (ww * .5);
			const ny = (e.clientY - cy) / (wh * .5);
			pointer.x = Math.max(-1, Math.min(1, nx));
			pointer.y = Math.max(-1, Math.min(1, ny));
			pointer.inside = true;
		};
		const onLeave = () => {
			pointer.inside = false;
		};
		const onBlur = () => {
			pointer.inside = false;
		};
		let onPointerMove = null;
		if (animationType === "hover") {
			onPointerMove = (e) => {
				onMove(e);
				startRAF();
			};
			window.addEventListener("pointermove", onPointerMove, { passive: true });
			window.addEventListener("mouseleave", onLeave);
			window.addEventListener("blur", onBlur);
			program.uniforms.uUseBaseWobble.value = 0;
		} else if (animationType === "3drotate") program.uniforms.uUseBaseWobble.value = 0;
		else program.uniforms.uUseBaseWobble.value = 1;
		const render = (t) => {
			const time = (t - t0) * .001;
			program.uniforms.iTime.value = time;
			let continueRAF = true;
			if (animationType === "hover") {
				const maxPitch = .6 * HOVSTR;
				const maxYaw = .6 * HOVSTR;
				targetYaw = (pointer.inside ? -pointer.x : 0) * maxYaw;
				targetPitch = (pointer.inside ? pointer.y : 0) * maxPitch;
				const prevYaw = yaw;
				const prevPitch = pitch;
				const prevRoll = roll;
				yaw = lerp(prevYaw, targetYaw, INERT);
				pitch = lerp(prevPitch, targetPitch, INERT);
				roll = lerp(prevRoll, 0, .1);
				program.uniforms.uRot.value = setMat3FromEuler(yaw, pitch, roll, rotBuf);
				if (NOISE_IS_ZERO) {
					if (Math.abs(yaw - targetYaw) < 1e-4 && Math.abs(pitch - targetPitch) < 1e-4 && Math.abs(roll) < 1e-4) continueRAF = false;
				}
			} else if (animationType === "3drotate") {
				const tScaled = time * TS;
				yaw = tScaled * wY;
				pitch = Math.sin(tScaled * wX + phX) * .6;
				roll = Math.sin(tScaled * wZ + phZ) * .5;
				program.uniforms.uRot.value = setMat3FromEuler(yaw, pitch, roll, rotBuf);
				if (TS < 1e-6) continueRAF = false;
			} else {
				rotBuf[0] = 1;
				rotBuf[1] = 0;
				rotBuf[2] = 0;
				rotBuf[3] = 0;
				rotBuf[4] = 1;
				rotBuf[5] = 0;
				rotBuf[6] = 0;
				rotBuf[7] = 0;
				rotBuf[8] = 1;
				program.uniforms.uRot.value = rotBuf;
				if (TS < 1e-6) continueRAF = false;
			}
			renderer.render({ scene: mesh });
			if (continueRAF) raf = requestAnimationFrame(render);
			else raf = 0;
		};
		if (suspendWhenOffscreen) {
			const io = new IntersectionObserver((entries) => {
				if (entries.some((e) => e.isIntersecting)) startRAF();
				else stopRAF();
			});
			io.observe(container);
			startRAF();
			container.__prismIO = io;
		} else startRAF();
		return () => {
			stopRAF();
			ro.disconnect();
			if (animationType === "hover") {
				if (onPointerMove) window.removeEventListener("pointermove", onPointerMove);
				window.removeEventListener("mouseleave", onLeave);
				window.removeEventListener("blur", onBlur);
			}
			if (suspendWhenOffscreen) {
				const io = container.__prismIO;
				if (io) io.disconnect();
				delete container.__prismIO;
			}
			if (gl.canvas.parentElement === container) container.removeChild(gl.canvas);
		};
	}, [
		height,
		baseWidth,
		animationType,
		glow,
		noise,
		offset?.x,
		offset?.y,
		scale,
		transparent,
		hueShift,
		colorFrequency,
		timeScale,
		hoverStrength,
		inertia,
		bloom,
		suspendWhenOffscreen
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "prism-container",
		ref: containerRef
	});
};
var A_new_you_in_the_spotlight_default = "/assets/A-new-you-in-the-spotlight-zkTC1dbi.webp";
var Comfort_redefined_in_modern_living_room_default = "/assets/Comfort-redefined-in-modern-living-room-fgH8UYjQ.webp";
var Modern_dining_with_family_focus_default = "/assets/Modern-dining-with-family-focus-CUcUZVIm.webp";
var Three_sofas_one_choice_default = "/assets/Three-sofas-one-choice-D_NDDzGg.webp";
var images$4 = [
	A_new_you_in_the_spotlight_default,
	Comfort_redefined_in_modern_living_room_default,
	Modern_dining_with_family_focus_default,
	Three_sofas_one_choice_default
];
function ImageSlider() {
	const [currentIndex, setCurrentIndex] = (0, import_react.useState)(0);
	const nextSlide = () => {
		setCurrentIndex((prev) => (prev + 1) % images$4.length);
	};
	const prevSlide = () => {
		setCurrentIndex((prev) => (prev - 1 + images$4.length) % images$4.length);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative w-full h-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "wait",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
					src: images$4[currentIndex],
					alt: `Slide ${currentIndex + 1}`,
					initial: {
						opacity: 0,
						x: 50
					},
					animate: {
						opacity: 1,
						x: 0
					},
					exit: {
						opacity: 0,
						x: -50
					},
					transition: {
						duration: .5,
						ease: [
							.19,
							1,
							.22,
							1
						]
					},
					className: "absolute inset-0 w-full h-full object-cover"
				}, currentIndex)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: prevSlide,
				className: "absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 backdrop-blur-sm p-2 shadow-lg hover:bg-white transition-colors",
				"aria-label": "Previous slide",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: nextSlide,
				className: "absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 backdrop-blur-sm p-2 shadow-lg hover:bg-white transition-colors",
				"aria-label": "Next slide",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2",
				children: images$4.map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setCurrentIndex(index),
					className: `h-2 rounded-full transition-all ${index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/50"}`,
					"aria-label": `Go to slide ${index + 1}`
				}, index))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute top-4 right-4 z-10 rounded-full bg-white/80 backdrop-blur-sm px-3 py-1.5 text-xs font-medium shadow-lg",
				children: [
					String(currentIndex + 1).padStart(2, "0"),
					" / ",
					String(images$4.length).padStart(2, "0")
				]
			})
		]
	});
}
var _2025_11_19_3_default = "/assets/2025-11-19-3-BhytFcig.webp";
var _2025_11_19_5_default = "/assets/2025-11-19-5-DE0Eyn4i.webp";
var _2025_11_19_6_default = "/assets/2025-11-19-6-CMNJ9Vbw.webp";
var _2025_11_19_default = "/assets/2025-11-19-DAlHvo_f.webp";
var _2026_03_19_1_default = "/assets/2026-03-19-1-BN5qr-sj.webp";
var new_brand_default = "/assets/new-brand-CLJYH-EZ.webp";
var images$3 = [
	_2025_11_19_3_default,
	_2025_11_19_5_default,
	_2025_11_19_6_default,
	_2025_11_19_default,
	_2026_03_19_1_default,
	new_brand_default
];
function ImageSliderMeridian() {
	const [currentIndex, setCurrentIndex] = (0, import_react.useState)(0);
	const nextSlide = () => {
		setCurrentIndex((prev) => (prev + 1) % images$3.length);
	};
	const prevSlide = () => {
		setCurrentIndex((prev) => (prev - 1 + images$3.length) % images$3.length);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative w-full h-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "wait",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
					src: images$3[currentIndex],
					alt: `Slide ${currentIndex + 1}`,
					initial: {
						opacity: 0,
						x: 50
					},
					animate: {
						opacity: 1,
						x: 0
					},
					exit: {
						opacity: 0,
						x: -50
					},
					transition: {
						duration: .5,
						ease: [
							.19,
							1,
							.22,
							1
						]
					},
					className: "absolute inset-0 w-full h-full object-cover"
				}, currentIndex)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: prevSlide,
				className: "absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 backdrop-blur-sm p-2 shadow-lg hover:bg-white transition-colors",
				"aria-label": "Previous slide",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: nextSlide,
				className: "absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 backdrop-blur-sm p-2 shadow-lg hover:bg-white transition-colors",
				"aria-label": "Next slide",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2",
				children: images$3.map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setCurrentIndex(index),
					className: `h-2 rounded-full transition-all ${index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/50"}`,
					"aria-label": `Go to slide ${index + 1}`
				}, index))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute top-4 right-4 z-10 rounded-full bg-white/80 backdrop-blur-sm px-3 py-1.5 text-xs font-medium shadow-lg",
				children: [
					String(currentIndex + 1).padStart(2, "0"),
					" / ",
					String(images$3.length).padStart(2, "0")
				]
			})
		]
	});
}
var penthouse_creatives__1__default = "/assets/penthouse_creatives%20(1)-DShmDCdu.webp";
var penthouse_creatives__2__default = "/assets/penthouse_creatives%20(2)-Ds5KBMqs.webp";
var penthouse_creatives__3__default = "/assets/penthouse_creatives%20(3)-DWaalRSZ.webp";
var penthouse_creatives__4__default = "/assets/penthouse_creatives%20(4)-CcyD0rmL.webp";
var penthouse_creatives__5__default = "/assets/penthouse_creatives%20(5)-C2w0fgsP.webp";
var penthouse_creatives__6__default = "/assets/penthouse_creatives%20(6)-D0Yhy4cu.webp";
var images$2 = [
	penthouse_creatives__1__default,
	penthouse_creatives__2__default,
	penthouse_creatives__3__default,
	penthouse_creatives__4__default,
	penthouse_creatives__5__default,
	penthouse_creatives__6__default
];
function ImageSliderPenthouse() {
	const [currentIndex, setCurrentIndex] = (0, import_react.useState)(0);
	const nextSlide = () => {
		setCurrentIndex((prev) => (prev + 1) % images$2.length);
	};
	const prevSlide = () => {
		setCurrentIndex((prev) => (prev - 1 + images$2.length) % images$2.length);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative w-full h-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "wait",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
					src: images$2[currentIndex],
					alt: `Slide ${currentIndex + 1}`,
					initial: {
						opacity: 0,
						x: 50
					},
					animate: {
						opacity: 1,
						x: 0
					},
					exit: {
						opacity: 0,
						x: -50
					},
					transition: {
						duration: .5,
						ease: [
							.19,
							1,
							.22,
							1
						]
					},
					className: "absolute inset-0 w-full h-full object-cover"
				}, currentIndex)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/50 via-black/15 to-transparent backdrop-blur-sm" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: prevSlide,
				className: "absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 backdrop-blur-sm p-2 shadow-lg hover:bg-white transition-colors",
				"aria-label": "Previous slide",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: nextSlide,
				className: "absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 backdrop-blur-sm p-2 shadow-lg hover:bg-white transition-colors",
				"aria-label": "Next slide",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2",
				children: images$2.map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setCurrentIndex(index),
					className: `h-2 rounded-full transition-all ${index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/50"}`,
					"aria-label": `Go to slide ${index + 1}`
				}, index))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute top-4 right-4 z-10 rounded-full bg-white/80 backdrop-blur-sm px-3 py-1.5 text-xs font-medium shadow-lg",
				children: [
					String(currentIndex + 1).padStart(2, "0"),
					" / ",
					String(images$2.length).padStart(2, "0")
				]
			})
		]
	});
}
var Error_Brand_2_default = "/assets/Error-Brand-2-0x5DJFyi.webp";
var Error_Brand_default = "/assets/Error-Brand-C5rCkW3W.webp";
var Error_Saturday_with_DJ_Omar_default = "/assets/Error-Saturday-with-DJ-Omar-DlVK58_G.webp";
var braning_default = "/assets/braning-DcVcoyaC.webp";
var error_brand_1_default = "/assets/error-brand-1-D3AeXfqa.webp";
var errorevent_default = "/assets/errorevent-CuLcz8Bq.webp";
var images$1 = [
	Error_Brand_2_default,
	Error_Brand_default,
	Error_Saturday_with_DJ_Omar_default,
	braning_default,
	error_brand_1_default,
	errorevent_default
];
function ImageSliderKite() {
	const [currentIndex, setCurrentIndex] = (0, import_react.useState)(0);
	const nextSlide = () => {
		setCurrentIndex((prev) => (prev + 1) % images$1.length);
	};
	const prevSlide = () => {
		setCurrentIndex((prev) => (prev - 1 + images$1.length) % images$1.length);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative w-full h-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "wait",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
					src: images$1[currentIndex],
					alt: `Slide ${currentIndex + 1}`,
					initial: {
						opacity: 0,
						x: 50
					},
					animate: {
						opacity: 1,
						x: 0
					},
					exit: {
						opacity: 0,
						x: -50
					},
					transition: {
						duration: .5,
						ease: [
							.19,
							1,
							.22,
							1
						]
					},
					className: "absolute inset-0 w-full h-full object-cover"
				}, currentIndex)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: prevSlide,
				className: "absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 backdrop-blur-sm p-2 shadow-lg hover:bg-white transition-colors",
				"aria-label": "Previous slide",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: nextSlide,
				className: "absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 backdrop-blur-sm p-2 shadow-lg hover:bg-white transition-colors",
				"aria-label": "Next slide",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2",
				children: images$1.map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setCurrentIndex(index),
					className: `h-2 rounded-full transition-all ${index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/50"}`,
					"aria-label": `Go to slide ${index + 1}`
				}, index))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute top-4 right-4 z-10 rounded-full bg-white/80 backdrop-blur-sm px-3 py-1.5 text-xs font-medium shadow-lg",
				children: [
					String(currentIndex + 1).padStart(2, "0"),
					" / ",
					String(images$1.length).padStart(2, "0")
				]
			})
		]
	});
}
var sumerustudio_branding_creative_10_default = "/assets/sumerustudio-branding-creative-10-Di-96Hv4.webp";
var sumerustudio_branding_creative_12_default = "/assets/sumerustudio-branding-creative-12-D8mOUybu.webp";
var sumerustudio_branding_creative_13_default = "/assets/sumerustudio-branding-creative-13-DcTjwpxl.webp";
var sumerustudio_branding_creative_4_default = "/assets/sumerustudio-branding-creative-4-DgRZgdwt.webp";
var sumerustudio_branding_creative_5_default = "/assets/sumerustudio-branding-creative-5-3Mt0nZv5.webp";
var sumerustudio_branding_creative_7_default = "/assets/sumerustudio-branding-creative-7-CO7Cuchl.webp";
var sumerustudio_branding_creative_9_default = "/assets/sumerustudio-branding-creative-9-BQEP3hMp.webp";
var images = [
	sumerustudio_branding_creative_10_default,
	sumerustudio_branding_creative_12_default,
	sumerustudio_branding_creative_13_default,
	sumerustudio_branding_creative_4_default,
	sumerustudio_branding_creative_5_default,
	sumerustudio_branding_creative_7_default,
	sumerustudio_branding_creative_9_default
];
function ImageSliderField() {
	const [currentIndex, setCurrentIndex] = (0, import_react.useState)(0);
	const nextSlide = () => {
		setCurrentIndex((prev) => (prev + 1) % images.length);
	};
	const prevSlide = () => {
		setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative w-full h-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "wait",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
					src: images[currentIndex],
					alt: `Slide ${currentIndex + 1}`,
					initial: {
						opacity: 0,
						x: 50
					},
					animate: {
						opacity: 1,
						x: 0
					},
					exit: {
						opacity: 0,
						x: -50
					},
					transition: {
						duration: .5,
						ease: [
							.19,
							1,
							.22,
							1
						]
					},
					className: "absolute inset-0 w-full h-full object-cover"
				}, currentIndex)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: prevSlide,
				className: "absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 backdrop-blur-sm p-2 shadow-lg hover:bg-white transition-colors",
				"aria-label": "Previous slide",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: nextSlide,
				className: "absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 backdrop-blur-sm p-2 shadow-lg hover:bg-white transition-colors",
				"aria-label": "Next slide",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2",
				children: images.map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setCurrentIndex(index),
					className: `h-2 rounded-full transition-all ${index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/50"}`,
					"aria-label": `Go to slide ${index + 1}`
				}, index))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute top-4 right-4 z-10 rounded-full bg-white/80 backdrop-blur-sm px-3 py-1.5 text-xs font-medium shadow-lg",
				children: [
					String(currentIndex + 1).padStart(2, "0"),
					" / ",
					String(images.length).padStart(2, "0")
				]
			})
		]
	});
}
function Lightbox({ images, isOpen, onClose, initialIndex = 0 }) {
	const [currentIndex, setCurrentIndex] = (0, import_react.useState)(initialIndex);
	const nextImage = () => {
		setCurrentIndex((prev) => (prev + 1) % images.length);
	};
	const prevImage = () => {
		setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
	};
	const handleKeyDown = (e) => {
		if (e.key === "Escape") onClose();
		if (e.key === "ArrowRight") nextImage();
		if (e.key === "ArrowLeft") prevImage();
	};
	if (!isOpen) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: { duration: .3 },
		className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/95",
		onClick: onClose,
		onKeyDown: handleKeyDown,
		tabIndex: 0,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: onClose,
				className: "absolute top-6 right-6 z-20 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-colors",
				"aria-label": "Close lightbox",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-6" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: (e) => {
					e.stopPropagation();
					prevImage();
				},
				className: "absolute left-6 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-colors",
				"aria-label": "Previous image",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-6" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: (e) => {
					e.stopPropagation();
					nextImage();
				},
				className: "absolute right-6 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-colors",
				"aria-label": "Next image",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-6" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					scale: .9
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				exit: {
					opacity: 0,
					scale: .9
				},
				transition: { duration: .3 },
				className: "relative max-w-[90vw] max-h-[90vh]",
				onClick: (e) => e.stopPropagation(),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: images[currentIndex],
					alt: `Image ${currentIndex + 1}`,
					className: "max-w-full max-h-[85vh] object-contain"
				})
			}, currentIndex),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-6 left-1/2 -translate-x-1/2 z-20 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm",
				children: [
					String(currentIndex + 1).padStart(2, "0"),
					" / ",
					String(images.length).padStart(2, "0")
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 mt-12",
				children: images.map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: (e) => {
						e.stopPropagation();
						setCurrentIndex(index);
					},
					className: `h-1.5 rounded-full transition-all ${index === currentIndex ? "w-6 bg-white" : "w-1.5 bg-white/50"}`,
					"aria-label": `Go to image ${index + 1}`
				}, index))
			})
		]
	}) });
}
var TEAM = [{
	name: "Srijana Chettri",
	role: "Co-Founder",
	tagline: "Crafting brands that resonate",
	image: "/assets/Srijana_Chettri-DSG4vwK8.webp"
}, {
	name: "Umang Tamang",
	role: "Co-Founder",
	tagline: "Building digital experiences that matter",
	image: "/assets/Umang_Tamang-Bn9cheZm.webp"
}];
function Team() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative py-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { background: "radial-gradient(120% 80% at 20% 0%, oklch(0.28 0.08 55 / 0.9), transparent 60%), radial-gradient(100% 80% at 100% 100%, oklch(0.25 0.12 30 / 0.85), transparent 55%), linear-gradient(160deg, oklch(0.14 0.02 260) 0%, oklch(0.08 0.01 260) 100%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-0 opacity-[0.07]",
				style: {
					backgroundImage: "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
					backgroundSize: "56px 56px"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full opacity-50 blur-3xl",
				style: { background: "radial-gradient(closest-side, oklch(0.75 0.19 55 / 0.6), transparent 70%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-6xl px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 30
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							duration: .8,
							ease: [
								.19,
								1,
								.22,
								1
							]
						},
						className: "mb-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-4 text-[11px] uppercase tracking-[0.3em] text-white/50",
							children: "Who We Are"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-display text-[clamp(2rem,5vw,4rem)] text-white",
							children: ["People Who Make It ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-[oklch(0.82_0.17_70)]",
								style: { fontFamily: "'General Sans'" },
								children: "Happen."
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto",
						children: TEAM.map((member, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 50
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: {
								delay: index * .2,
								duration: .8,
								ease: [
									.19,
									1,
									.22,
									1
								]
							},
							className: "group relative overflow-hidden rounded-3xl bg-white shadow-xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative aspect-square overflow-hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: member.image,
									alt: member.name,
									className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute bottom-0 left-0 right-0 p-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									initial: {
										opacity: 0,
										y: 20
									},
									whileInView: {
										opacity: 1,
										y: 0
									},
									viewport: { once: true },
									transition: {
										delay: index * .2 + .3,
										duration: .6,
										ease: [
											.19,
											1,
											.22,
											1
										]
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-display text-2xl text-white mb-1",
											children: member.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-white/90 uppercase tracking-wider font-medium mb-2",
											children: member.role
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-white/70 italic leading-relaxed",
											children: member.tagline
										})
									]
								})
							})]
						}, member.name))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							delay: .6,
							duration: .8,
							ease: [
								.19,
								1,
								.22,
								1
							]
						},
						className: "mt-16 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#contact",
							className: "group inline-flex items-center gap-2 rounded-[5px] border-2 border-foreground bg-foreground px-8 py-4 text-sm font-medium text-background transition-all hover:scale-105 hover:bg-background hover:text-foreground",
							children: ["Discover All", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-[-1px]" })]
						})
					})
				]
			})
		]
	});
}
var bp_websites_default = "/assets/bp-websites-CvoL-rvd.webp";
var eco_search_default = "/assets/eco-search-BjK-2Wfr.webp";
var eco_automation_default = "/assets/eco-automation-BNRKrSIz.webp";
var bp_organic_default = "/assets/bp-organic-5mkICpcd.webp";
var bp_infra_default = "/assets/bp-infra-DNXQRDia.webp";
var bp_automation_default = "/assets/bp-automation-DzeXcXzg.webp";
var cs_saas_1_default = "/assets/cs-saas-1-C5ol2y9E.webp";
var cs_saas_3_default = "/assets/cs-saas-3-DTa50nW8.webp";
var cs_saas_4_default = "/assets/cs-saas-4-eJpRKLAd.webp";
var contact_hero_bg_default = "/assets/contact-hero-bg-BvjBqtOZ.webp";
function AmbientBackground() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"aria-hidden": true,
		className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -left-40 top-[-10%] size-[70vw] rounded-full opacity-70 blur-3xl",
				style: { background: "radial-gradient(closest-side, color-mix(in oklab, var(--ember) 45%, transparent), transparent 70%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -right-40 top-1/3 size-[55vw] rounded-full opacity-40 blur-3xl",
				style: { background: "radial-gradient(closest-side, color-mix(in oklab, var(--ember-glow) 55%, transparent), transparent 70%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute left-1/3 bottom-[-20%] size-[60vw] rounded-full opacity-30 blur-3xl",
				style: { background: "radial-gradient(closest-side, oklch(0.9 0.05 240 / 0.9), transparent 70%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				children: Array.from({ length: 40 }).map((_, i) => {
					const size = 2 + Math.random() * 3;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
						className: "absolute rounded-full bg-foreground/30",
						style: {
							width: size,
							height: size,
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`
						},
						animate: {
							y: [
								0,
								-18,
								0
							],
							opacity: [
								.15,
								.5,
								.15
							]
						},
						transition: {
							duration: 6 + Math.random() * 6,
							repeat: Infinity,
							delay: Math.random() * 4
						}
					}, i);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "noise-overlay" })
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative flex min-h-[100svh] items-center justify-center overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0 z-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prism, {
					animationType: "rotate",
					timeScale: .5,
					height: 3.5,
					baseWidth: 5.5,
					scale: 3.6,
					hueShift: 0,
					colorFrequency: 1,
					noise: .1,
					glow: 1,
					suspendWhenOffscreen: true
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex max-w-[1400px] flex-col items-center px-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: .4,
							duration: .8
						},
						className: "mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/60 px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground backdrop-blur",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-[oklch(0.75_0.19_55)]" }), "Premium Brand Growth Studio · Siliguri"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "text-display text-[clamp(2.2rem,5vw,5rem)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitReveal, {
							text: "We Build Brands",
							delay: .6,
							className: "block"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "block",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-block overflow-hidden align-bottom",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
										initial: { y: "110%" },
										animate: { y: 0 },
										transition: {
											delay: .85,
											duration: 1.1,
											ease: [
												.19,
												1,
												.22,
												1
											]
										},
										className: "inline-block italic text-[oklch(0.75_0.19_55)]",
										style: {
											fontFamily: "'General Sans', serif",
											fontWeight: 500
										},
										children: "People"
									})
								}),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitReveal, {
									text: "Remember.",
									delay: 1
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 12
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: 1.4,
							duration: .9
						},
						className: "mt-8 max-w-xl text-base leading-relaxed text-muted-foreground",
						children: "Helping ambitious businesses grow through branding, websites, SEO, content production and performance marketing - designed with care, engineered for results."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 12
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: 1.55,
							duration: .8
						},
						className: "mt-8 flex flex-wrap items-center justify-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#contact",
							className: "inline-flex items-center gap-2 rounded-[5px] bg-foreground px-6 py-3.5 text-sm font-medium text-background shadow-luxe transition-colors hover:bg-foreground/90",
							children: ["Start Your Project", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#work",
							className: "inline-flex items-center gap-2 rounded-[5px] border border-border bg-white/60 px-6 py-3.5 text-sm font-medium backdrop-blur transition-colors hover:bg-white",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-6 place-items-center rounded-full bg-foreground text-background",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-3 fill-current" })
							}), "Explore Our Work"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						transition: {
							delay: 1.8,
							duration: 1
						},
						className: "mt-14 grid grid-cols-4 gap-6",
						children: [
							{
								n: 890,
								s: "+",
								l: "Projects"
							},
							{
								n: 200,
								s: "+",
								l: "Clients"
							},
							{
								n: 91,
								s: "%",
								l: "Satisfaction"
							},
							{
								n: 4,
								s: "+",
								l: "Years"
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-display text-3xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
								to: s.n,
								suffix: s.s
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-[11px] uppercase tracking-widest text-muted-foreground",
							children: s.l
						})] }, s.l))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: {
					delay: 2,
					duration: 1
				},
				className: "pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground",
				children: "Scroll · Experience"
			})
		]
	});
}
var SERVICES = [
	{
		title: "Brand Strategy",
		desc: "Positioning, story, and identity systems that scale.",
		icon: Palette,
		img: eco_search_default
	},
	{
		title: "Website Design",
		desc: "Editorial, motion-driven websites that convert.",
		icon: Globe,
		img: bp_websites_default
	},
	{
		title: "SEO",
		desc: "Rank for the searches that grow your revenue.",
		icon: Search,
		img: cs_saas_1_default
	},
	{
		title: "Performance Marketing",
		desc: "Meta & Google Ads engineered for ROAS.",
		icon: Target,
		img: bp_organic_default
	},
	{
		title: "Social Media",
		desc: "Content, community and creative that resonates.",
		icon: Megaphone,
		img: cs_saas_3_default
	},
	{
		title: "Content Production",
		desc: "Photo, film and story - crafted, not templated.",
		icon: Video,
		img: contact_hero_bg_default
	},
	{
		title: "Lead Generation",
		desc: "Funnels, forms and follow-up that fill your pipeline.",
		icon: TrendingUp,
		img: cs_saas_4_default
	},
	{
		title: "Brand Identity",
		desc: "Logos, guidelines and design systems built to last.",
		icon: Sparkles,
		img: bp_automation_default
	}
];
function Services() {
	const [open, setOpen] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "services",
		className: "relative py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-16 flex flex-wrap items-end justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-4 text-[11px] uppercase tracking-[0.3em] text-muted-foreground",
					children: "Services"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-display text-[clamp(2.5rem,6vw,5.5rem)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitReveal, { text: "Everything" }),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-[oklch(0.75_0.19_55)]",
							style: { fontFamily: "'General Sans'" },
							children: "a brand needs."
						})
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-sm text-muted-foreground",
					children: "Eight disciplines under one roof. Grab, hover, click - each sphere opens into a full-screen chapter of what we do."
				}) })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-4 md:grid-cols-4",
				children: SERVICES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceSphere, {
					s,
					i,
					onOpen: () => setOpen(i)
				}, s.title))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			className: "fixed inset-0 z-[80] grid place-items-center bg-background/70 p-6 backdrop-blur-2xl",
			onClick: () => setOpen(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					scale: .85,
					opacity: 0
				},
				animate: {
					scale: 1,
					opacity: 1
				},
				exit: {
					scale: .9,
					opacity: 0
				},
				transition: {
					type: "spring",
					stiffness: 200,
					damping: 25
				},
				className: "relative max-w-3xl rounded-3xl border border-glass-border bg-white/80 p-10 shadow-luxe backdrop-blur-2xl",
				onClick: (e) => e.stopPropagation(),
				children: (() => {
					const S = SERVICES[open];
					const Icon = S.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-6 inline-grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-[oklch(0.75_0.19_55)] to-[oklch(0.82_0.17_70)] text-white shadow-glow",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-7" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-display text-4xl",
							children: S.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xl text-lg text-muted-foreground",
							children: S.desc
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 grid gap-3 sm:grid-cols-3 text-sm",
							children: [
								"Discovery",
								"Craft",
								"Launch & Scale"
							].map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border/60 bg-white/60 p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs uppercase tracking-widest text-muted-foreground",
									children: "Phase"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 font-semibold",
									children: step
								})]
							}, step))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setOpen(null),
							className: "absolute right-4 top-4 rounded-full border border-border/60 bg-white/70 px-3 py-1 text-xs",
							children: "Close"
						})
					] });
				})()
			})
		}) })]
	});
}
function ServiceSphere({ s, i, onOpen }) {
	const Icon = s.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: 30
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: { once: true },
		transition: {
			delay: i * .06,
			duration: .9,
			ease: [
				.19,
				1,
				.22,
				1
			]
		},
		className: "group aspect-square [perspective:1000px]",
		"data-cursor": "hover",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			onClick: onOpen,
			className: "relative h-full w-full cursor-pointer transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 overflow-hidden rounded-[5px] border border-glass-border bg-glass p-6 shadow-luxe backdrop-blur-xl [backface-visibility:hidden]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 opacity-70",
					style: { background: "radial-gradient(120% 80% at 20% 10%, oklch(1 0 0 / 0.9), transparent 55%), radial-gradient(80% 60% at 100% 100%, color-mix(in oklab, var(--ember) 30%, transparent), transparent 70%)" }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex h-full flex-col justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid size-12 place-items-center rounded-2xl border border-white/70 bg-white/70 backdrop-blur",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5 text-[oklch(0.75_0.19_55)]" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-display text-2xl leading-tight",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 text-xs text-muted-foreground line-clamp-2",
							children: s.desc
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 inline-flex items-center gap-1 text-xs text-foreground/80",
							children: ["Open ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3" })]
						})
					] })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 overflow-hidden rounded-[5px] shadow-luxe [backface-visibility:hidden] [transform:rotateY(180deg)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: s.img,
						alt: s.title,
						className: "absolute inset-0 h-full w-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/50" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-0 flex flex-col items-center justify-center gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid size-16 place-items-center rounded-full bg-white/95 shadow-lg backdrop-blur",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-7 text-[oklch(0.75_0.19_55)]" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-display text-lg text-white text-center px-4",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-1 text-xs font-medium text-[oklch(0.82_0.17_70)]",
								children: ["View Details ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3" })]
							})
						]
					})
				]
			})]
		})
	});
}
function About() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
	const opacity = useTransform(scrollYProgress, [
		0,
		.3,
		.7,
		1
	], [
		0,
		1,
		1,
		0
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "about",
		ref,
		className: "relative py-32 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "absolute inset-0 -z-10",
			style: { background: "radial-gradient(100% 60% at 50% 0%, oklch(0.98 0.01 260 / 0.5), transparent 70%), radial-gradient(80% 50% at 100% 100%, color-mix(in oklab, var(--ember) 8%, transparent), transparent 60%)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { duration: .8 },
					className: "mb-6 text-[11px] uppercase tracking-[0.3em] text-muted-foreground",
					children: "About Us"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					style: {
						y,
						opacity
					},
					className: "mx-auto max-w-4xl text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-display text-[clamp(2rem,5vw,4.5rem)] leading-[1.1]",
						children: [
							"Most brands",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-muted-foreground",
								style: { fontFamily: "'General Sans'" },
								children: "get seen."
							}),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Very few",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[oklch(0.75_0.19_55)]",
								children: "get remembered."
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						delay: .2,
						duration: .8
					},
					className: "mx-auto mt-8 max-w-2xl text-center text-base leading-relaxed text-muted-foreground",
					children: "We're a small studio of strategists, designers and engineers based in Siliguri, quietly building brands for founders who care about craft."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						delay: .4,
						duration: .8
					},
					className: "mt-12 grid grid-cols-1 gap-4 md:grid-cols-2",
					children: [
						{
							title: "Our Mission",
							text: "Our mission is to empower businesses by leveraging cutting-edge digital strategies and technologies. We strive to create meaningful connections between brands and their audiences, driving engagement, growth, and success.",
							icon: Target
						},
						{
							title: "Our Vision",
							text: "We envision a world where businesses of all sizes can harness the full potential of digital marketing to achieve their goals. Our aim is to be the go-to agency for innovative, results-driven digital solutions.",
							icon: Eye
						},
						{
							title: "Our Approach",
							text: "We take a client-centric approach to everything we do. By understanding your business, goals, and challenges, we develop customized strategies that deliver measurable results. Our team of experts is dedicated to staying ahead of industry trends.",
							icon: Compass
						},
						{
							title: "Get in Touch",
							text: "Ready to take your digital marketing to the next level? Contact us today to learn how Cogito can help you achieve your goals.",
							icon: Mail,
							isAction: true
						}
					].map((item, i) => {
						const Icon = item.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: {
								delay: .5 + i * .08,
								duration: .8
							},
							className: `group relative overflow-hidden rounded-2xl border border-border/60 p-6 backdrop-blur transition-all ${item.isAction ? "bg-[oklch(0.75_0.19_55)] border-[oklch(0.75_0.19_55)] hover:bg-[oklch(0.72_0.18_55)]" : "bg-white/60 hover:border-[oklch(0.75_0.19_55)]/30 hover:bg-white/80"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `mb-3 grid size-10 place-items-center rounded-xl ${item.isAction ? "bg-white/20" : "bg-[oklch(0.75_0.19_55)]/10"}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: `size-5 ${item.isAction ? "text-white" : "text-[oklch(0.75_0.19_55)]"}` })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: `text-display text-lg ${item.isAction ? "text-white" : "text-[oklch(0.75_0.19_55)]"}`,
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: `mt-3 text-sm leading-relaxed ${item.isAction ? "text-white/90" : "text-muted-foreground"}`,
									children: item.text
								}),
								item.isAction && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#contact",
									className: "mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-[oklch(0.75_0.19_55)] transition-colors hover:bg-white/90",
									children: ["Contact Us", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
								})
							]
						}, item.title);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-32",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-4 inline-flex items-center gap-2 rounded-full border border-[oklch(0.75_0.19_55)]/30 bg-[oklch(0.75_0.19_55)]/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-[oklch(0.75_0.19_55)]",
							children: "Our Ecosystem"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .05,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-display text-[clamp(2rem,5vw,4rem)]",
								children: "An interconnected growth platform"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .1,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-xl text-base text-muted-foreground",
								children: "Discover our complete suite of integrated services designed to drive measurable business growth across all channels."
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EcosystemCards, {})
					]
				})
			]
		})]
	});
}
var ECOSYSTEM_CARDS = [
	{
		title: "Social Media Management",
		desc: "Content creation, community engagement and strategic posting that grows your audience and builds brand loyalty.",
		stat: "10M+",
		statLabel: "Reach Generated",
		icon: Megaphone,
		img: bp_websites_default
	},
	{
		title: "Brand Strategy & Identity",
		desc: "Positioning, visual identity and brand systems that set you apart and make your brand unforgettable.",
		stat: "200+",
		statLabel: "Brands Built",
		icon: Palette,
		img: eco_search_default
	},
	{
		title: "Digital Presence",
		desc: "Websites, SEO and digital ecosystems designed to establish authority and drive organic discovery.",
		stat: "#1",
		statLabel: "Rankings Achieved",
		icon: Globe,
		img: eco_automation_default
	},
	{
		title: "Lead Generation & Ads",
		desc: "Performance marketing campaigns on Meta & Google engineered for maximum ROAS and qualified leads.",
		stat: "3x",
		statLabel: "Revenue Growth",
		icon: Target,
		img: bp_automation_default
	},
	{
		title: "Content Production",
		desc: "Photo, video and storytelling crafted to captivate your audience and elevate your brand across every platform.",
		stat: "500+",
		statLabel: "Projects Delivered",
		icon: Video,
		img: bp_infra_default
	}
];
function EcosystemCards() {
	const [active, setActive] = (0, import_react.useState)(0);
	const [isMobile, setIsMobile] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const check = () => {
			const mobile = window.innerWidth < 768;
			setIsMobile(mobile);
			setActive(mobile ? 0 : 2);
		};
		check();
		window.addEventListener("resize", check);
		return () => window.removeEventListener("resize", check);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-12 flex flex-col gap-0 overflow-hidden rounded-[1.5rem] md:flex-row md:h-[460px]",
		children: ECOSYSTEM_CARDS.map((card, i) => {
			const isActive = active === i;
			const Icon = card.icon;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 30
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: {
					delay: i * .08,
					duration: .8,
					ease: [
						.19,
						1,
						.22,
						1
					]
				},
				onMouseEnter: () => setActive(i),
				onClick: () => setActive(i),
				className: `relative cursor-pointer overflow-hidden border-b border-white/10 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${isActive ? "h-[280px] md:h-auto md:flex-[4]" : "h-[60px] md:h-auto md:flex-1"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: card.img,
						alt: card.title,
						className: `absolute inset-0 h-full w-full object-cover transition-transform duration-700 ${isActive ? "scale-105" : "scale-100"}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute inset-0 transition-all duration-700 ${isActive ? "bg-black/40" : "bg-black/60"}` }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `absolute inset-0 flex items-center justify-center gap-3 md:flex-col md:gap-4 transition-all duration-500 ${isActive ? "opacity-0 pointer-events-none" : "opacity-100"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5 text-white/70" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[12px] uppercase tracking-[0.2em] text-white/80 md:hidden",
								children: card.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hidden md:flex -rotate-180 items-center whitespace-nowrap text-[12px] uppercase tracking-[0.2em] text-white/80",
								style: { writingMode: "vertical-rl" },
								children: card.title
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `absolute inset-0 flex flex-col justify-end p-6 transition-all duration-700 md:p-10 ${isActive ? "opacity-100" : "opacity-0"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute right-4 top-4 rounded-xl bg-white px-3 py-2 text-center shadow-lg md:right-8 md:top-8 md:px-4 md:py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-display text-xl font-bold text-foreground md:text-2xl",
									children: card.stat
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[8px] uppercase tracking-widest text-[oklch(0.75_0.19_55)] md:text-[9px]",
									children: card.statLabel
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-display text-xl text-white md:text-3xl",
								children: card.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-md text-xs leading-relaxed text-white/70 md:mt-3 md:text-sm",
								children: card.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#contact",
								className: "mt-3 inline-flex items-center gap-2 text-xs font-medium text-[oklch(0.82_0.17_70)] transition-colors hover:text-white md:mt-5 md:text-sm",
								children: ["Explore ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
							})
						]
					})
				]
			}, card.title);
		})
	});
}
var WORK = [
	{
		title: "Luxury Living Branding",
		tag: "Brand · Web",
		tone: "from-orange-200 to-orange-400",
		images: [
			A_new_you_in_the_spotlight_default,
			Comfort_redefined_in_modern_living_room_default,
			Modern_dining_with_family_focus_default,
			Three_sofas_one_choice_default
		]
	},
	{
		title: "The Furnishing Story",
		tag: "Identity · SEO",
		tone: "from-neutral-800 to-neutral-500",
		images: [
			_2025_11_19_3_default,
			_2025_11_19_5_default,
			_2025_11_19_6_default,
			_2025_11_19_default,
			_2026_03_19_1_default,
			new_brand_default
		]
	},
	{
		title: "Penthouse Branding",
		tag: "E-commerce",
		tone: "from-pink-200 to-rose-400",
		images: [
			penthouse_creatives__1__default,
			penthouse_creatives__2__default,
			penthouse_creatives__3__default,
			penthouse_creatives__4__default,
			penthouse_creatives__5__default,
			penthouse_creatives__6__default
		]
	},
	{
		title: "Error Brew & Pub",
		tag: "SaaS Web",
		tone: "from-blue-200 to-indigo-500",
		images: [
			Error_Brand_2_default,
			Error_Brand_default,
			Error_Saturday_with_DJ_Omar_default,
			braning_default,
			error_brand_1_default,
			errorevent_default
		]
	},
	{
		title: "Sumeru Branding",
		tag: "Editorial",
		tone: "from-stone-200 to-stone-500",
		images: [
			sumerustudio_branding_creative_10_default,
			sumerustudio_branding_creative_12_default,
			sumerustudio_branding_creative_13_default,
			sumerustudio_branding_creative_4_default,
			sumerustudio_branding_creative_5_default,
			sumerustudio_branding_creative_7_default,
			sumerustudio_branding_creative_9_default
		]
	},
	{
		title: "Zenith Hotels",
		tag: "Hospitality · Brand",
		tone: "from-amber-200 to-amber-500",
		isCTA: true
	}
];
function Portfolio() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end end"]
	});
	const x = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);
	const [lightboxOpen, setLightboxOpen] = (0, import_react.useState)(false);
	const [lightboxImages, setLightboxImages] = (0, import_react.useState)([]);
	const [lightboxIndex, setLightboxIndex] = (0, import_react.useState)(0);
	const openLightbox = (images, index = 0) => {
		setLightboxImages(images);
		setLightboxIndex(index);
		setLightboxOpen(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "work",
		ref,
		className: "relative h-[800vh]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "sticky top-0 flex h-screen flex-col justify-center overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto mb-10 flex w-full max-w-[1400px] items-end justify-between px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground",
					children: "Selected Work"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-display text-[clamp(2rem,5vw,4rem)]",
					children: ["Case studies, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "italic text-muted-foreground",
						style: { fontFamily: "'General Sans'" },
						children: "not portfolios."
					})]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden text-xs text-muted-foreground md:block",
					children: "Scroll →"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: { x },
				className: "flex gap-8 pl-6",
				children: [WORK.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkCard, {
					w,
					i,
					onOpenLightbox: openLightbox
				}, w.title)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "min-w-[4vw]" })]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbox, {
			images: lightboxImages,
			isOpen: lightboxOpen,
			onClose: () => setLightboxOpen(false),
			initialIndex: lightboxIndex
		})]
	});
}
function WorkCard({ w, i, onOpenLightbox }) {
	const ref = (0, import_react.useRef)(null);
	const rx = useMotionValue(0), ry = useMotionValue(0);
	const srx = useSpring(rx, {
		stiffness: 200,
		damping: 20
	});
	const sry = useSpring(ry, {
		stiffness: 200,
		damping: 20
	});
	if (w.isCTA) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			scale: .95
		},
		whileInView: {
			opacity: 1,
			scale: 1
		},
		viewport: { once: true },
		transition: {
			duration: .8,
			ease: [
				.19,
				1,
				.22,
				1
			]
		},
		className: "relative flex h-[70vh] w-[62vw] shrink-0 flex-col items-center justify-center overflow-hidden rounded-[5px] shadow-luxe md:w-[46vw]",
		style: {
			backgroundImage: `url(${cs_saas_1_default})`,
			backgroundSize: "cover",
			backgroundPosition: "center"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "absolute inset-0 opacity-30",
				animate: { backgroundPosition: [
					"0% 0%",
					"100% 100%",
					"0% 0%"
				] },
				transition: {
					duration: 8,
					repeat: Infinity,
					ease: "linear"
				},
				style: {
					backgroundImage: "radial-gradient(circle at 30% 20%, oklch(1 0 0 / 0.5), transparent 50%), radial-gradient(circle at 80% 80%, oklch(1 0 0 / 0.4), transparent 50%)",
					backgroundSize: "200% 200%"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex flex-col items-center text-center px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							scale: 0,
							rotate: -180
						},
						whileInView: {
							scale: 1,
							rotate: 0
						},
						viewport: { once: true },
						transition: {
							delay: .2,
							duration: .8,
							ease: [
								.19,
								1,
								.22,
								1
							]
						},
						className: "mb-6 grid size-24 place-items-center rounded-full bg-white/25 backdrop-blur",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-10 text-white" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h3, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							delay: .3,
							duration: .8,
							ease: [
								.19,
								1,
								.22,
								1
							]
						},
						className: "text-display text-[clamp(2rem,4.5vw,4rem)] text-white",
						children: "Let's build yours next."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							delay: .4,
							duration: .8,
							ease: [
								.19,
								1,
								.22,
								1
							]
						},
						className: "mt-4 max-w-md text-base text-white/80",
						children: "Ready to see your brand in this lineup? Explore our services or start a conversation."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							delay: .5,
							duration: .8,
							ease: [
								.19,
								1,
								.22,
								1
							]
						},
						className: "mt-8 flex flex-wrap items-center justify-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "/services",
							className: "group inline-flex items-center gap-2 rounded-[5px] bg-white px-7 py-4 text-sm font-medium text-foreground shadow-xl transition-all hover:scale-105 hover:shadow-2xl",
							children: ["Explore Services", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-[-1px]" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#contact",
							className: "group inline-flex items-center gap-2 rounded-[5px] border-2 border-white/50 bg-white/15 px-7 py-4 text-sm font-medium text-white backdrop-blur transition-all hover:scale-105 hover:bg-white/25 hover:border-white/70",
							children: ["Start a Project", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-[-1px]" })]
						})]
					})
				]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		ref,
		onMouseMove: (e) => {
			const r = ref.current.getBoundingClientRect();
			ry.set(((e.clientX - r.left) / r.width - .5) * 12);
			rx.set(-((e.clientY - r.top) / r.height - .5) * 12);
		},
		onMouseLeave: () => {
			rx.set(0);
			ry.set(0);
		},
		onClick: () => w.images && onOpenLightbox(w.images),
		style: {
			rotateX: srx,
			rotateY: sry,
			transformPerspective: 1200
		},
		className: "relative h-[70vh] w-[62vw] shrink-0 overflow-hidden rounded-[5px] shadow-luxe md:w-[46vw] cursor-pointer",
		"data-cursor": "hover",
		children: [i === 0 && w.title === "Luxury Living Branding" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageSlider, {}) : i === 1 && w.title === "The Furnishing Story" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageSliderMeridian, {}) : i === 2 && w.title === "Penthouse Branding" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageSliderPenthouse, {}) : i === 3 && w.title === "Error Brew & Pub" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageSliderKite, {}) : i === 4 && w.title === "Sumeru Branding" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageSliderField, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute inset-0 bg-gradient-to-br ${w.tone}` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { background: "radial-gradient(60% 40% at 20% 20%, oklch(1 0 0 / 0.35), transparent 70%)" }
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 flex flex-col justify-between p-8 text-white",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between text-[10px] uppercase tracking-[0.3em]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"0",
					i + 1,
					" / 0",
					WORK.length
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: w.tag })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-display text-[clamp(2rem,4vw,4rem)]",
				style: {
					color: w.title === "Luxury Living Branding" ? "#F3852B" : "white",
					filter: w.title === "Penthouse Branding" ? "blur(0.5px)" : "none"
				},
				children: w.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-3 py-1 text-xs backdrop-blur",
				children: ["View case study ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3" })]
			})] })]
		})]
	});
}
var STEPS = [
	{
		n: "01",
		t: "Discover",
		sub: "Deep-diving into your world to uncover every opportunity.",
		d: "Immersion, interviews and audits — we learn your business inside out.",
		icon: Search
	},
	{
		n: "02",
		t: "Strategy",
		sub: "Charting the course with clarity and precision.",
		d: "Positioning, messaging and a roadmap tied to real outcomes.",
		icon: Compass
	},
	{
		n: "03",
		t: "Design",
		sub: "Bringing vision to life through seamless design and build.",
		d: "Brand and product design that feels intentional, not decorative.",
		icon: Palette
	},
	{
		n: "04",
		t: "Develop",
		sub: "Engineering experiences that perform flawlessly.",
		d: "Editorial, motion-driven builds engineered for performance.",
		icon: Globe
	},
	{
		n: "05",
		t: "Launch",
		sub: "Making your debut unforgettable across every channel.",
		d: "A launch moment — narrative, assets, campaigns, PR.",
		icon: Megaphone
	},
	{
		n: "06",
		t: "Scale",
		sub: "Compounding growth that never stops.",
		d: "SEO, ads and content — compounding growth month over month.",
		icon: ChartLine
	}
];
function Process() {
	const sectionRef = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start start", "end end"]
	});
	const [active, setActive] = (0, import_react.useState)(0);
	const total = STEPS.length;
	(0, import_react.useEffect)(() => {
		return scrollYProgress.on("change", (v) => {
			const idx = Math.min(Math.floor(v * total), total - 1);
			setActive(idx);
		});
	}, [scrollYProgress, total]);
	const scrollToStep = (idx) => {
		if (!sectionRef.current || idx < 0 || idx >= total) return;
		const rect = sectionRef.current.getBoundingClientRect();
		const sectionTop = window.scrollY + rect.top;
		const sectionHeight = rect.height;
		const stepOffset = idx / total * sectionHeight;
		window.scrollTo({
			top: sectionTop + stepOffset + 1,
			behavior: "smooth"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "process",
		ref: sectionRef,
		className: "relative",
		style: { height: `${(total + 1) * 100}vh` },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "sticky top-0 flex h-screen flex-col",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto w-full max-w-[1400px] px-6 pt-24 pb-10 md:pt-32 md:pb-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-4 text-[11px] uppercase tracking-[0.3em] text-[oklch(0.75_0.19_55)]",
							children: "Comprehensive Process"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-display text-[clamp(2.2rem,5.5vw,4.5rem)] leading-[1.15]",
							children: [
								"One-stop total solution to your",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-[oklch(0.75_0.19_55)]",
									style: { fontFamily: "'General Sans'" },
									children: "digital growth needs."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-2xl text-sm text-muted-foreground md:text-base leading-relaxed",
							children: "Our goal is to make sure every project meets its intended Function, Budget, Design, and Quality requirements."
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex-1 overflow-hidden bg-[oklch(0.13_0.01_60)] border-t border-white/5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[oklch(0.45_0.18_55)] opacity-15 blur-[100px]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto flex h-full max-w-[1400px] items-center px-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid w-full gap-8 md:grid-cols-2 md:gap-16 items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-col items-center justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
									mode: "wait",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
										initial: {
											opacity: 0,
											scale: .8
										},
										animate: {
											opacity: 1,
											scale: 1
										},
										exit: {
											opacity: 0,
											scale: .8
										},
										transition: {
											duration: .5,
											ease: [
												.19,
												1,
												.22,
												1
											]
										},
										className: "grid h-32 w-32 place-items-center rounded-3xl bg-gradient-to-br from-[oklch(0.75_0.19_55)] to-[oklch(0.60_0.22_40)] shadow-2xl md:h-44 md:w-44",
										children: (() => {
											const Icon = STEPS[active].icon;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
												className: "size-14 text-black md:size-20",
												strokeWidth: 1.5
											});
										})()
									}, active)
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-col justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
									mode: "wait",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
										initial: {
											opacity: 0,
											y: 30
										},
										animate: {
											opacity: 1,
											y: 0
										},
										exit: {
											opacity: 0,
											y: -30
										},
										transition: {
											duration: .5,
											ease: [
												.19,
												1,
												.22,
												1
											]
										},
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-display text-4xl text-white md:text-6xl",
												children: STEPS[active].t
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-3 text-base text-[oklch(0.75_0.19_55)] md:text-lg",
												style: { fontFamily: "'General Sans'" },
												children: STEPS[active].sub
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-4 max-w-md text-sm leading-relaxed text-white/60 md:text-base",
												children: STEPS[active].d
											})
										]
									}, active)
								})
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute bottom-6 left-6 md:bottom-10 md:left-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-2xl text-[oklch(0.75_0.19_55)] md:text-3xl",
							children: STEPS[active].n
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-2xl text-white/30 md:text-3xl",
							children: ["/", String(total).padStart(2, "0")]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute bottom-6 right-6 flex gap-2 md:bottom-10 md:right-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => scrollToStep(active - 1),
							disabled: active === 0,
							className: "grid size-10 place-items-center rounded-full border border-white/20 text-white/60 transition-all hover:border-white/50 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed md:size-12",
							"aria-label": "Previous step",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "1.5",
								strokeLinecap: "round",
								strokeLinejoin: "round",
								className: "size-4 md:size-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m18 15-6-6-6 6" })
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => scrollToStep(active + 1),
							disabled: active === total - 1,
							className: "grid size-10 place-items-center rounded-full border border-white/20 text-white/60 transition-all hover:border-white/50 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed md:size-12",
							"aria-label": "Next step",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "1.5",
								strokeLinecap: "round",
								strokeLinejoin: "round",
								className: "size-4 md:size-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m6 9 6 6 6-6" })
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 md:bottom-10",
						children: STEPS.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => scrollToStep(i),
							className: `h-1.5 rounded-full transition-all duration-500 ${i === active ? "w-8 bg-[oklch(0.75_0.19_55)]" : "w-1.5 bg-white/20 hover:bg-white/40"}`,
							"aria-label": `Go to step ${i + 1}`
						}, i))
					})
				]
			})]
		})
	});
}
var TESTIMONIALS = [
	{
		n: "Rohit S.",
		r: "Founder, Aurora Coffee",
		q: "They didn't just design a brand. They gave us a voice we hear every day."
	},
	{
		n: "Ananya M.",
		r: "CMO, Meridian Realty",
		q: "Traffic doubled in one quarter. But the site itself - that's the story."
	},
	{
		n: "Vikram P.",
		r: "CEO, Kite Analytics",
		q: "The most thoughtful team we've worked with. Every detail earns its place."
	},
	{
		n: "Priya K.",
		r: "Founder, Nova",
		q: "Cogito is the reason our launch felt like an event, not a post."
	},
	{
		n: "Arjun T.",
		r: "Director, Field Studio",
		q: "Motion, taste, and results. Rare to find all three."
	}
];
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative py-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-[1400px] px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-14 flex flex-wrap items-end justify-between gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground",
						children: "Voices"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-display text-[clamp(2.5rem,6vw,5rem)]",
						children: ["Founders who ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-[oklch(0.75_0.19_55)]",
							style: { fontFamily: "'General Sans'" },
							children: "trusted us."
						})]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/70 px-4 py-2 backdrop-blur",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4 fill-yellow-400 text-yellow-400" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold",
								children: "4.9"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground",
								children: "· 120+ Google Reviews"
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-6",
						style: {
							width: "max-content",
							animation: "marquee 60s linear infinite"
						},
						children: [...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "w-[380px] shrink-0 rounded-3xl border border-glass-border bg-glass p-7 shadow-luxe backdrop-blur-xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-4 flex gap-0.5",
									children: Array.from({ length: 5 }).map((_, s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4 fill-yellow-400 text-yellow-400" }, s))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-lg leading-snug",
									children: [
										"\"",
										t.q,
										"\""
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid size-10 place-items-center rounded-full bg-gradient-to-br from-[oklch(0.75_0.19_55)] to-[oklch(0.82_0.17_70)] text-sm font-semibold text-white",
										children: t.n[0]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm font-semibold",
										children: t.n
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-muted-foreground",
										children: t.r
									})] })]
								})
							]
						}, i))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-20 border-y border-border/60 py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-16 opacity-60",
						style: {
							width: "max-content",
							animation: "marquee 45s linear infinite"
						},
						children: [...Array(2)].flatMap((_, k) => [
							"Aurora",
							"Meridian",
							"Nova",
							"Kite",
							"Field",
							"Halcyon",
							"Beacon",
							"Northwind",
							"Lumen",
							"Terra"
						].map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-display text-3xl tracking-tight text-foreground/70 transition-colors hover:text-[oklch(0.75_0.19_55)]",
							children: [l, "."]
						}, `${k}-${i}`)))
					})
				})
			})
		]
	});
}
var brandLogos = /* #__PURE__ */ Object.assign({
	"/src/assets/brands/1.webp": _1_exports,
	"/src/assets/brands/10.webp": _10_exports,
	"/src/assets/brands/11.webp": _11_exports,
	"/src/assets/brands/12.webp": _12_exports,
	"/src/assets/brands/13.webp": _13_exports,
	"/src/assets/brands/14.webp": _14_exports,
	"/src/assets/brands/15.webp": _15_exports,
	"/src/assets/brands/16.webp": _16_exports,
	"/src/assets/brands/17.webp": _17_exports,
	"/src/assets/brands/18.webp": _18_exports,
	"/src/assets/brands/2.webp": _2_exports,
	"/src/assets/brands/3.webp": _3_exports,
	"/src/assets/brands/4.webp": _4_exports,
	"/src/assets/brands/5.webp": _5_exports,
	"/src/assets/brands/6.webp": _6_exports,
	"/src/assets/brands/7.webp": _7_exports,
	"/src/assets/brands/8.webp": _8_exports,
	"/src/assets/brands/9.webp": _9_exports
});
function Brands() {
	const logos = Object.values(brandLogos).map((m) => ({
		url: m.default,
		name: "Brand Partner"
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "brands",
		className: "relative py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-[1400px] px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-[2.5rem] px-6 py-20 md:px-16 md:py-28",
				style: { background: "radial-gradient(120% 80% at 20% 0%, oklch(0.28 0.08 55 / 0.9), transparent 60%), radial-gradient(100% 80% at 100% 100%, oklch(0.25 0.12 30 / 0.85), transparent 55%), linear-gradient(160deg, oklch(0.14 0.02 260) 0%, oklch(0.08 0.01 260) 100%)" },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "pointer-events-none absolute inset-0 opacity-[0.07]",
						style: {
							backgroundImage: "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
							backgroundSize: "56px 56px"
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full opacity-50 blur-3xl",
						style: { background: "radial-gradient(closest-side, oklch(0.75 0.19 55 / 0.6), transparent 70%)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-4 text-[11px] uppercase tracking-[0.3em] text-white/50",
								children: "Brands"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .05,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "text-display max-w-4xl text-[clamp(2.25rem,6vw,4.75rem)] text-white",
									children: [
										"Brands that work with",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "italic text-[oklch(0.82_0.17_70)]",
											style: { fontFamily: "'General Sans'" },
											children: "Cogito."
										})
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .1,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 max-w-xl text-base text-white/60",
									children: "From heritage hospitality to modern lifestyle labels - a growing family of brands scaling with us."
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-16 grid grid-cols-2 gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6",
								children: logos.map((logo, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									initial: {
										opacity: 0,
										y: 20
									},
									whileInView: {
										opacity: 1,
										y: 0
									},
									viewport: {
										once: true,
										margin: "-40px"
									},
									transition: {
										duration: .7,
										delay: i % 6 * .05,
										ease: [
											.19,
											1,
											.22,
											1
										]
									},
									className: "group relative flex aspect-square items-center justify-center bg-white p-4 transition-all duration-500 hover:bg-transparent",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: logo.url,
										alt: logo.name,
										loading: "lazy",
										className: "max-h-36 w-auto max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
									})
								}, logo.url))
							})
						]
					})
				]
			})
		})
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "relative py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1400px] gap-16 px-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-4 text-[11px] uppercase tracking-[0.3em] text-muted-foreground",
					children: "Contact"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-display text-[clamp(2.5rem,7vw,6rem)]",
					children: [
						"Let's build ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"something ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-[oklch(0.75_0.19_55)]",
							style: { fontFamily: "'General Sans'" },
							children: "extraordinary."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 space-y-4 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "tel:7431052034",
							className: "flex items-center gap-3 text-foreground hover:text-[oklch(0.75_0.19_55)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), " 74310 52034"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "mailto:hello@cogitoindia.in",
							className: "flex items-center gap-3 text-foreground hover:text-[oklch(0.75_0.19_55)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" }), " hello@cogitoindia.in"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4" }), " Siliguri, West Bengal, India"]
						})
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
				onSubmit: (e) => e.preventDefault(),
				className: "rounded-3xl border border-glass-border bg-glass p-8 shadow-luxe backdrop-blur-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5",
					children: [
						[
							{
								label: "Your name",
								type: "text",
								ph: "Ada Lovelace"
							},
							{
								label: "Email",
								type: "email",
								ph: "you@company.com"
							},
							{
								label: "Company",
								type: "text",
								ph: "Cogito Studio"
							}
						].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] uppercase tracking-widest text-muted-foreground",
								children: f.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: f.type,
								placeholder: f.ph,
								className: "mt-1 w-full border-b border-border bg-transparent py-3 text-lg text-foreground placeholder:text-muted-foreground/60 focus:border-[oklch(0.75_0.19_55)] focus:outline-none"
							})]
						}, f.label)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] uppercase tracking-widest text-muted-foreground",
								children: "Tell us about your project"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								rows: 4,
								placeholder: "What are you building?",
								className: "mt-1 w-full border-b border-border bg-transparent py-3 text-lg text-foreground placeholder:text-muted-foreground/60 focus:border-[oklch(0.75_0.19_55)] focus:outline-none"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							className: "mt-4 inline-flex items-center gap-2 rounded-[5px] bg-foreground px-6 py-3.5 text-sm font-medium text-background shadow-luxe hover:scale-[1.03]",
							children: ["Send message ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
						}) })
					]
				})
			})]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "relative border-t border-border/60 pt-24 pb-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-display text-[clamp(3rem,10vw,12rem)] leading-[0.9]",
				children: [
					"Ready to build ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"a brand ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "italic text-[oklch(0.75_0.19_55)]",
						style: { fontFamily: "'General Sans'" },
						children: "people remember?"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-border/60 pt-8 text-xs text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-7 place-items-center rounded-full bg-foreground text-background text-[10px]",
								children: "C."
							}),
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" Cogito Digital - Siliguri, India"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-4",
						children: [
							Instagram,
							Facebook,
							Linkedin,
							Youtube
						].map((I, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.a, {
							href: "#",
							initial: {
								opacity: 0,
								scale: .8
							},
							whileInView: {
								opacity: 1,
								scale: 1
							},
							viewport: { once: true },
							transition: {
								delay: i * .1,
								duration: .5,
								ease: [
									.19,
									1,
									.22,
									1
								]
							},
							whileHover: {
								scale: 1.15,
								rotate: [
									0,
									-10,
									10,
									0
								]
							},
							className: "grid size-11 place-items-center rounded-full border border-border/60 bg-white/70 backdrop-blur transition-colors hover:text-[oklch(0.75_0.19_55)] hover:bg-white hover:shadow-lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, { className: "size-5" })
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#work",
								children: "Work"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#services",
								children: "Services"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#about",
								children: "About"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								children: "Contact"
							})
						]
					})
				]
			})]
		})
	});
}
//#endregion
export { Testimonials as _, Counter as a, Magnetic as c, Process as d, Reveal as f, Team as g, SplitReveal as h, Contact as i, Nav as l, SmoothScroll as m, AmbientBackground as n, Footer as o, Services as p, Brands as r, Hero as s, About as t, Portfolio as u };
