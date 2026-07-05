import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import srijanaImg from "@/assets/Srijana_Chettri.webp";
import umangImg from "@/assets/Umang_Tamang.webp";

const TEAM = [
  {
    name: "Srijana Chettri",
    role: "Co-Founder",
    tagline: "Crafting brands that resonate",
    image: srijanaImg,
  },
  {
    name: "Umang Tamang",
    role: "Co-Founder",
    tagline: "Building digital experiences that matter",
    image: umangImg,
  },
];

export function Team() {
  return (
    <section className="relative py-32">
      {/* Background with Brands-style gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 20% 0%, oklch(0.28 0.08 55 / 0.9), transparent 60%), radial-gradient(100% 80% at 100% 100%, oklch(0.25 0.12 30 / 0.85), transparent 55%), linear-gradient(160deg, oklch(0.14 0.02 260) 0%, oklch(0.08 0.01 260) 100%)",
        }}
      />
      {/* Subtle grid pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      {/* Glow effect */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.75 0.19 55 / 0.6), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="mb-16"
        >
          <div className="mb-4 text-[11px] uppercase tracking-[0.3em] text-white/50">08 — Who We Are</div>
          <h2 className="text-display text-[clamp(2rem,5vw,4rem)] text-white">
            People Who Make It <span className="italic text-[oklch(0.82_0.17_70)]" style={{ fontFamily: "'General Sans'" }}>Happen.</span>
          </h2>
        </motion.div>

        {/* Team Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
          {TEAM.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-xl"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                >
                  <h3 className="text-display text-2xl text-white mb-1">{member.name}</h3>
                  <p className="text-sm text-white/90 uppercase tracking-wider font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-white/70 italic leading-relaxed">{member.tagline}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Discover All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-foreground px-8 py-4 text-sm font-medium text-background transition-all hover:scale-105 hover:bg-background hover:text-foreground"
          >
            Discover All
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-[-1px]" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
