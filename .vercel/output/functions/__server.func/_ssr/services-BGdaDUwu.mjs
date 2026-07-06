import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { i as useScroll, n as useTransform } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { A as Camera, M as ArrowUpRight, O as Check, S as Globe, a as Users, b as Layers, d as Rocket, i as Video, j as Award, k as ChartLine, l as Sparkles, m as Palette, s as Target, t as Zap, u as Search } from "../_libs/lucide-react.mjs";
import { a as Counter, c as Magnetic, f as Reveal, h as SplitReveal, i as Contact, l as Nav, m as SmoothScroll, n as AmbientBackground, o as Footer } from "./sections-axuzLCg4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-BGdaDUwu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SERVICES = [
	{
		slug: "branding",
		n: "01",
		title: "Brand Identity",
		tagline: "Positioning, story and design systems that scale.",
		icon: Palette,
		tone: "from-orange-200 via-orange-100 to-amber-50",
		accent: "oklch(0.75 0.19 55)",
		description: "We architect brands from the inside out - from strategy and messaging to full identity systems, guidelines and brand-ready assets that stay consistent as you grow.",
		deliverables: [
			"Brand strategy & positioning",
			"Naming & verbal identity",
			"Logo systems & marks",
			"Visual identity & guidelines",
			"Packaging & collateral",
			"Brand launch kit"
		],
		stats: [
			{
				label: "Brands shipped",
				value: 120,
				suffix: "+"
			},
			{
				label: "Rebrand lift",
				value: 3.8,
				suffix: "×"
			},
			{
				label: "Avg engagement",
				value: 62,
				suffix: "%"
			}
		],
		metrics: [
			{
				label: "Strategic depth",
				pct: 96
			},
			{
				label: "Visual craft",
				pct: 98
			},
			{
				label: "System scalability",
				pct: 92
			}
		]
	},
	{
		slug: "web",
		n: "02",
		title: "Website Design & Development",
		tagline: "Editorial, motion-driven websites that convert.",
		icon: Globe,
		tone: "from-blue-100 via-indigo-50 to-white",
		accent: "oklch(0.65 0.15 250)",
		description: "From landing pages to full product sites - we design and engineer websites that load fast, look editorial, feel alive and turn visitors into customers.",
		deliverables: [
			"Marketing websites",
			"E-commerce (Shopify / Headless)",
			"Web applications & dashboards",
			"Design systems & Storybook",
			"CMS integration",
			"Analytics & A/B setup"
		],
		stats: [
			{
				label: "Sites launched",
				value: 240,
				suffix: "+"
			},
			{
				label: "Avg PageSpeed",
				value: 96,
				suffix: ""
			},
			{
				label: "Conversion lift",
				value: 47,
				suffix: "%"
			}
		],
		metrics: [
			{
				label: "Performance (Lighthouse)",
				pct: 96
			},
			{
				label: "Accessibility (WCAG AA)",
				pct: 94
			},
			{
				label: "Motion & interactivity",
				pct: 97
			}
		]
	},
	{
		slug: "seo",
		n: "03",
		title: "Search Engine Optimization",
		tagline: "Rank for the searches that grow your revenue.",
		icon: Search,
		tone: "from-emerald-100 via-teal-50 to-white",
		accent: "oklch(0.7 0.14 165)",
		description: "Technical SEO, content architecture and authority building - a compounding growth channel that keeps paying dividends long after ad budgets stop.",
		deliverables: [
			"Technical SEO audits",
			"Keyword & intent research",
			"On-page optimization",
			"Content clusters & topical maps",
			"Link building & digital PR",
			"Local SEO & GMB"
		],
		stats: [
			{
				label: "Keywords ranked #1",
				value: 480,
				suffix: "+"
			},
			{
				label: "Organic traffic lift",
				value: 214,
				suffix: "%"
			},
			{
				label: "Avg time to page 1",
				value: 90,
				suffix: "d"
			}
		],
		metrics: [
			{
				label: "Technical health",
				pct: 95
			},
			{
				label: "Content authority",
				pct: 90
			},
			{
				label: "Off-page signals",
				pct: 88
			}
		]
	},
	{
		slug: "performance",
		n: "04",
		title: "Performance Marketing",
		tagline: "Meta & Google Ads engineered for ROAS.",
		icon: Target,
		tone: "from-rose-100 via-pink-50 to-white",
		accent: "oklch(0.7 0.19 20)",
		description: "We treat ad accounts like product surfaces - creative, funnels, tracking and iteration cycles that turn spend into predictable, measurable pipeline.",
		deliverables: [
			"Meta Ads (Instagram / Facebook)",
			"Google Ads (Search / P-Max)",
			"YouTube & display",
			"Conversion tracking & attribution",
			"Landing page CRO",
			"Creative testing frameworks"
		],
		stats: [
			{
				label: "Ad spend managed",
				value: 4.2,
				suffix: "Cr+"
			},
			{
				label: "Avg ROAS",
				value: 6.4,
				suffix: "×"
			},
			{
				label: "CAC reduction",
				value: 38,
				suffix: "%"
			}
		],
		metrics: [
			{
				label: "Media strategy",
				pct: 94
			},
			{
				label: "Creative velocity",
				pct: 92
			},
			{
				label: "Measurement stack",
				pct: 96
			}
		]
	},
	{
		slug: "content",
		n: "05",
		title: "Content & Social Media",
		tagline: "Photo, film and story - crafted, not templated.",
		icon: Video,
		tone: "from-violet-100 via-fuchsia-50 to-white",
		accent: "oklch(0.65 0.2 300)",
		description: "In-house production, art direction and social strategy that gives your brand a distinctive voice across every feed, reel and story.",
		deliverables: [
			"Content strategy & calendars",
			"Photography & video production",
			"Reels & short-form editing",
			"Social media management",
			"Influencer & UGC campaigns",
			"Community building"
		],
		stats: [
			{
				label: "Reels shipped",
				value: 1800,
				suffix: "+"
			},
			{
				label: "Avg reach lift",
				value: 340,
				suffix: "%"
			},
			{
				label: "Followers grown",
				value: 1.2,
				suffix: "M"
			}
		],
		metrics: [
			{
				label: "Creative direction",
				pct: 96
			},
			{
				label: "Production quality",
				pct: 94
			},
			{
				label: "Community growth",
				pct: 91
			}
		]
	}
];
var brandLogos = /* #__PURE__ */ Object.assign({});
var INDUSTRIES = [
	"Hospitality",
	"Retail",
	"F&B",
	"Real Estate",
	"Lifestyle",
	"Wellness",
	"Education",
	"Fashion"
];
var TECH = [
	"Shopify",
	"Next.js",
	"Webflow",
	"React",
	"Framer",
	"WordPress",
	"Meta Ads",
	"Google Ads"
];
var OUTCOMES = [
	"+214% organic traffic",
	"6.4× ROAS",
	"+47% conversions",
	"Rank #1 · 40+ kws",
	"+340% reach",
	"12k monthly leads",
	"2× repeat orders",
	"Sold out launch"
];
var SERVICE_ORDER = [
	"branding",
	"web",
	"seo",
	"performance",
	"content"
];
function buildProjects() {
	return Object.values(brandLogos).map((m, i) => ({
		url: m.default.url,
		name: m.default.original_filename.replace(/\.webp$/i, "").replace(/_?(logo|new|color|landscape|png|design|\d+)/gi, "").replace(/[_-]+/g, " ").trim().replace(/\b\w/g, (c) => c.toUpperCase()) || "Client Project",
		service: SERVICE_ORDER[i % SERVICE_ORDER.length],
		industry: INDUSTRIES[i % INDUSTRIES.length],
		tech: TECH[i % TECH.length],
		outcome: OUTCOMES[i % OUTCOMES.length]
	}));
}
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SmoothScroll, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AmbientBackground, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicesHero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceAnchors, {}),
				SERVICES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceSection, {
					s,
					idx: i
				}, s.slug)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpertiseBars, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortfolioWork, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
function ServicesHero() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
	const opacity = useTransform(scrollYProgress, [0, .8], [1, 0]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		id: "top",
		className: "relative min-h-[100svh] pt-36",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			style: {
				y,
				opacity
			},
			className: "mx-auto max-w-[1400px] px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/60 px-3 py-1.5 text-xs uppercase tracking-[0.25em] text-muted-foreground backdrop-blur",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-[oklch(0.75_0.19_55)]" }), "Services · Cogito Digital"]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-8 text-display text-[clamp(3rem,9vw,9rem)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitReveal, {
							text: "Five disciplines.",
							delay: .2,
							className: "block"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "block",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitReveal, {
									text: "One studio",
									delay: .4
								}),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-[oklch(0.75_0.19_55)]",
									style: { fontFamily: "'General Sans'" },
									children: "obsessed"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitReveal, {
							text: "with craft.",
							delay: .7,
							className: "block"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .3,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-xl text-lg leading-relaxed text-muted-foreground",
							children: "Every service below is engineered for one thing - to make ambitious brands measurably more valuable. Strategy, design, engineering and distribution, under one roof."
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .4,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-3 gap-6",
							children: [
								{
									n: 890,
									s: "+",
									l: "Projects"
								},
								{
									n: 5,
									s: "",
									l: "Services"
								},
								{
									n: 4.9,
									s: "★",
									l: "Rating"
								}
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-l border-border/60 pl-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-display text-3xl",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
										to: s.n,
										suffix: s.s
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-[11px] uppercase tracking-widest text-muted-foreground",
									children: s.l
								})]
							}, s.l))
						})
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0 -z-10",
			children: [
				Palette,
				Globe,
				Search,
				Target,
				Video,
				Sparkles,
				Zap,
				Rocket
			].map((I, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "absolute",
				style: {
					top: `${15 + i * 11 % 70}%`,
					left: `${i * 17 % 92}%`
				},
				animate: {
					y: [
						0,
						-14,
						0
					],
					opacity: [
						.25,
						.5,
						.25
					]
				},
				transition: {
					duration: 6 + i,
					repeat: Infinity,
					delay: i * .3
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid size-12 place-items-center rounded-2xl border border-glass-border bg-glass shadow-luxe backdrop-blur-xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, { className: "size-5 text-[oklch(0.75_0.19_55)]" })
				})
			}, i))
		})]
	});
}
function ServiceAnchors() {
	const [active, setActive] = (0, import_react.useState)(SERVICES[0].slug);
	(0, import_react.useEffect)(() => {
		const io = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) setActive(e.target.id);
			});
		}, {
			rootMargin: "-45% 0px -50% 0px",
			threshold: 0
		});
		SERVICES.forEach((s) => {
			const el = document.getElementById(s.slug);
			if (el) io.observe(el);
		});
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "sticky top-24 z-30 mx-auto mb-12 flex max-w-[1400px] justify-center px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "glass-panel flex max-w-full items-center gap-1 overflow-x-auto rounded-full px-2 py-2 shadow-luxe",
			children: SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: `#${s.slug}`,
				className: `whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-medium transition-all ${active === s.slug ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mr-1.5 font-mono text-[10px] opacity-60",
					children: s.n
				}), s.title.split(" ")[0]]
			}, s.slug))
		})
	});
}
function ServiceSection({ s, idx }) {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	const yImg = useTransform(scrollYProgress, [0, 1], [80, -80]);
	const yText = useTransform(scrollYProgress, [0, 1], [40, -40]);
	const Icon = s.icon;
	const reverse = idx % 2 === 1;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: s.slug,
		ref,
		className: "relative scroll-mt-32 py-24 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-[1400px] px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `grid gap-12 md:grid-cols-2 md:items-center md:gap-20 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					style: { y: yImg },
					className: "relative",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-glass-border bg-gradient-to-br ${s.tone} shadow-luxe`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 opacity-70",
								style: { background: `radial-gradient(60% 50% at 50% 40%, color-mix(in oklab, ${s.accent} 35%, transparent), transparent 70%)` }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": true,
								className: "absolute inset-0 opacity-[0.06]",
								style: {
									backgroundImage: "linear-gradient(oklch(0.2 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(0.2 0 0) 1px, transparent 1px)",
									backgroundSize: "48px 48px"
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute left-8 top-8 font-mono text-xs tracking-[0.3em] text-foreground/50",
								children: [s.n, " / 05"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 grid place-items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									animate: { rotate: [
										0,
										4,
										0,
										-4,
										0
									] },
									transition: {
										duration: 14,
										repeat: Infinity,
										ease: "easeInOut"
									},
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid size-40 place-items-center rounded-[2rem] shadow-glow",
										style: { background: `linear-gradient(135deg, ${s.accent}, color-mix(in oklab, ${s.accent} 60%, white))` },
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											className: "size-16 text-white",
											strokeWidth: 1.5
										})
									}), [
										0,
										1,
										2,
										3
									].map((i) => {
										const angle = i / 4 * Math.PI * 2;
										const r = 130;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
											className: "absolute -translate-x-1/2 -translate-y-1/2",
											style: {
												left: `calc(50% + ${Math.cos(angle) * r}px)`,
												top: `calc(50% + ${Math.sin(angle) * r}px)`
											},
											animate: { y: [
												0,
												-6,
												0
											] },
											transition: {
												duration: 3 + i,
												repeat: Infinity,
												delay: i * .4
											},
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "grid size-10 place-items-center rounded-xl border border-white/70 bg-white/80 shadow-luxe backdrop-blur",
												children: [
													Sparkles,
													ChartLine,
													Camera,
													Award
												][i] && (() => {
													const IC = [
														Sparkles,
														ChartLine,
														Camera,
														Award
													][i];
													return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IC, { className: "size-4 text-foreground/70" });
												})()
											})
										}, i);
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute bottom-6 left-6 right-6 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-foreground/60",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Cogito · Service" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s.title })]
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					style: { y: yText },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-3 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono",
									children: s.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-border" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Service" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-display text-[clamp(2rem,5vw,4rem)]",
							children: [
								s.title.split(" ").slice(0, -1).join(" "),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic",
									style: {
										color: s.accent,
										fontFamily: "'General Sans'"
									},
									children: s.title.split(" ").slice(-1)
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-lg text-foreground/80",
							children: s.tagline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-lg text-base leading-relaxed text-muted-foreground",
							children: s.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2",
							children: s.deliverables.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2 rounded-2xl border border-border/50 bg-white/50 p-3 text-sm backdrop-blur",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full text-white",
									style: { background: s.accent },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										className: "size-3",
										strokeWidth: 3
									})
								}), d]
							}, d))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 grid grid-cols-3 gap-4",
							children: s.stats.map((st) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border/60 bg-white/60 p-4 backdrop-blur",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-display text-2xl",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
										to: st.value,
										suffix: st.suffix
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-[10px] uppercase tracking-widest text-muted-foreground",
									children: st.label
								})]
							}, st.label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 space-y-3",
							children: s.metrics.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricBar, {
								label: m.label,
								pct: m.pct,
								color: s.accent
							}, m.label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "/#contact",
								className: "group inline-flex items-center gap-2 rounded-[5px] bg-foreground px-5 py-3 text-sm font-medium text-background shadow-luxe transition-transform hover:scale-[1.03]",
								children: [
									"Start a ",
									s.title.split(" ")[0].toLowerCase(),
									" project",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })
								]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#work",
								className: "inline-flex items-center gap-2 rounded-[5px] border border-border bg-white/60 px-5 py-3 text-sm font-medium backdrop-blur transition-colors hover:bg-white",
								children: [
									"See ",
									s.title.split(" ")[0].toLowerCase(),
									" work"
								]
							})]
						})
					]
				})]
			})
		})
	});
}
function MetricBar({ label, pct, color }) {
	const ref = (0, import_react.useRef)(null);
	const [inView, setInView] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const io = new IntersectionObserver(([e]) => e.isIntersecting && setInView(true), { threshold: .4 });
		if (ref.current) io.observe(ref.current);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-1.5 flex items-center justify-between text-xs",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "font-mono tabular-nums text-foreground/80",
				children: [pct, "%"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-1.5 overflow-hidden rounded-full bg-border/60",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { width: 0 },
				animate: { width: inView ? `${pct}%` : 0 },
				transition: {
					duration: 1.4,
					ease: [
						.19,
						1,
						.22,
						1
					]
				},
				className: "h-full rounded-full",
				style: { background: `linear-gradient(90deg, ${color}, color-mix(in oklab, ${color} 60%, white))` }
			})
		})]
	});
}
var LIFECYCLE = [
	{
		t: "Discover",
		d: "Audit, interviews, positioning workshop.",
		i: Users
	},
	{
		t: "Design",
		d: "Strategy → identity → interface systems.",
		i: Palette
	},
	{
		t: "Develop",
		d: "Editorial motion builds, engineered for speed.",
		i: Layers
	},
	{
		t: "Launch",
		d: "Assets, PR, campaign - a moment, not a post.",
		i: Rocket
	},
	{
		t: "Scale",
		d: "SEO, ads, content - compounding growth.",
		i: ChartLine
	}
];
var EXPERTISE = [
	{
		label: "Brand & Identity",
		pct: 96
	},
	{
		label: "Web & Product Design",
		pct: 97
	},
	{
		label: "Frontend Engineering",
		pct: 93
	},
	{
		label: "SEO & Content",
		pct: 91
	},
	{
		label: "Performance Marketing",
		pct: 94
	},
	{
		label: "Motion & Interaction",
		pct: 96
	}
];
function ExpertiseBars() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-16 grid gap-6 md:grid-cols-2 md:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground",
						children: "Expertise"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-display text-[clamp(2.25rem,5vw,4.5rem)]",
						children: [
							"A studio built for the",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-[oklch(0.75_0.19_55)]",
								style: { fontFamily: "'General Sans'" },
								children: "full lifecycle"
							}),
							" ",
							"of a brand."
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground",
						children: "We measure ourselves on both craft and outcome - every service is backed by senior operators, transparent scorecards and metrics that matter to your business."
					}) })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mb-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-6 top-8 hidden h-px w-[calc(100%-3rem)] bg-gradient-to-r from-transparent via-border to-transparent md:block" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-6 md:grid-cols-5",
						children: LIFECYCLE.map((l, i) => {
							const IC = l.i;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: i * .06,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative rounded-3xl border border-glass-border bg-glass p-6 shadow-luxe backdrop-blur-xl",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mb-4 flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-[oklch(0.75_0.19_55)] to-[oklch(0.82_0.17_70)] text-white shadow-glow",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IC, { className: "size-5" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-mono text-xs text-muted-foreground",
												children: ["0", i + 1]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-display text-xl",
											children: l.t
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1.5 text-sm text-muted-foreground",
											children: l.d
										})
									]
								})
							}, l.t);
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-x-16 gap-y-6 md:grid-cols-2",
					children: EXPERTISE.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricBar, {
						label: e.label,
						pct: e.pct,
						color: "oklch(0.75 0.19 55)"
					}, e.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: [
						{
							n: 4,
							s: "+",
							l: "Years in market",
							i: Award
						},
						{
							n: 890,
							s: "+",
							l: "Projects delivered",
							i: Rocket
						},
						{
							n: 200,
							s: "+",
							l: "Happy clients",
							i: Users
						},
						{
							n: 91,
							s: "%",
							l: "Client retention",
							i: Sparkles
						}
					].map((s) => {
						const IC = s.i;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group rounded-3xl border border-glass-border bg-glass p-6 shadow-luxe backdrop-blur-xl transition-transform hover:-translate-y-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IC, { className: "size-5 text-[oklch(0.75_0.19_55)]" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 text-display text-4xl",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
										to: s.n,
										suffix: s.s
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-[11px] uppercase tracking-widest text-muted-foreground",
									children: s.l
								})
							]
						}, s.l);
					})
				})
			]
		})
	});
}
var FILTERS = [{
	key: "all",
	label: "All Work"
}, ...SERVICES.map((s) => ({
	key: s.slug,
	label: s.title.split(" ")[0]
}))];
function PortfolioWork() {
	const projects = (0, import_react.useMemo)(buildProjects, []);
	const [filter, setFilter] = (0, import_react.useState)("all");
	const filtered = filter === "all" ? projects : projects.filter((p) => p.service === filter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "work",
		className: "relative py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-10 grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,auto)] md:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground",
							children: "Our Work"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-display text-[clamp(2.25rem,5vw,4.5rem)]",
							children: [
								"Projects, categorized by",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-[oklch(0.75_0.19_55)]",
									style: { fontFamily: "'General Sans'" },
									children: "service."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xl text-muted-foreground",
							children: "Every brand below is scaling with Cogito. Filter by service to see relevant case studies, industries and outcomes."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "glass-panel flex max-w-full flex-wrap items-center gap-1 rounded-full p-2",
						children: FILTERS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setFilter(f.key),
							className: `whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${filter === f.key ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`,
							children: f.label
						}, f.key))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					layout: true,
					className: "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: filtered.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, {
						p,
						i
					}, p.url))
				}),
				filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-3xl border border-dashed border-border/60 p-10 text-center text-sm text-muted-foreground",
					children: "No projects in this category yet."
				})
			]
		})
	});
}
function ProjectCard({ p, i }) {
	const svc = SERVICES.find((s) => s.slug === p.service);
	const Icon = svc.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
		href: "/#contact",
		layout: true,
		initial: {
			opacity: 0,
			y: 30
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
			delay: i % 6 * .05,
			duration: .8,
			ease: [
				.19,
				1,
				.22,
				1
			]
		},
		className: "group relative flex flex-col overflow-hidden rounded-3xl border border-glass-border bg-glass shadow-luxe backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-glow",
		"data-cursor": "hover",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[4/3] overflow-hidden bg-white",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 transition-transform duration-700 group-hover:scale-105",
					style: { background: `radial-gradient(80% 60% at 50% 50%, color-mix(in oklab, ${svc.accent} 18%, white), white)` }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 grid place-items-center p-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: p.url,
						alt: p.name,
						loading: "lazy",
						className: "max-h-24 w-auto max-w-[70%] object-contain transition-transform duration-700 group-hover:scale-110 md:max-h-28"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/70 bg-white/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-foreground/70 backdrop-blur",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						className: "size-3",
						style: { color: svc.accent }
					}), svc.title.split(" ")[0]]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-black/0 to-black/0 p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-white",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] uppercase tracking-[0.3em] text-white/70",
							children: "Outcome"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-lg font-semibold",
							children: p.outcome
						})]
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-display text-xl leading-tight",
					children: p.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-1 text-xs text-muted-foreground",
					children: [
						p.industry,
						" · ",
						p.tech
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid size-8 shrink-0 place-items-center rounded-full border border-border/60 bg-white/70 transition-transform group-hover:rotate-45",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-center gap-2 text-[11px] text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline-block size-1.5 rounded-full",
					style: { background: svc.accent }
				}), "Case study"]
			})]
		})]
	});
}
//#endregion
export { ServicesPage as component };
