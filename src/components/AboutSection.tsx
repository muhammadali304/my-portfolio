import { motion } from "framer-motion";

const skills = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Framer Motion",
  "Three.js",
  "Node.js",
  "Figma",
];

const stats = [
  { value: "10+", label: "Projects Shipped" },
  { value: "3+", label: "Years Learning" },
  // { value: "20+", label: "Components Crafted" },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-6 md:px-10 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
      >
        <p className="label-mono">— about</p>
        <h2
          className="mt-4 font-accent font-extrabold leading-[1.05] tracking-tight"
          style={{ fontSize: "clamp(1.75rem, 6vw, 5.5rem)" }}
        >
          <span className="block text-foreground">Building the web,</span>
          <span className="block text-primary text-glow">cinematically.</span>
        </h2>
      </motion.div>

      {/* Bento grid */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-6 auto-rows-[minmax(180px,auto)] gap-4 md:gap-5">
        {/* Story card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="bento-cell bento-hover p-7 md:p-9 md:col-span-4 md:row-span-2 flex flex-col justify-between"
        >
          <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed">
            <p>
              I'm a frontend &amp; backend developer obsessed with the intersection of{" "}
              <span className="text-foreground font-semibold">design, motion, and code</span>.
              I craft interactive experiences that feel alive — pairing clean architecture
              with cinematic polish.
            </p>
            <p>
              From fluid micro-interactions to large-scale design systems, I focus on
              shipping work that's{" "}
              <span className="text-primary font-semibold">
                fast, accessible, and unforgettable
              </span>
              .
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {skills.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="px-3 py-1.5 rounded-lg font-mono text-xs border border-primary/30 text-foreground bg-card/40 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Stat cards */}
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
            className={`bento-cell bento-hover p-6 flex flex-col justify-center items-start ${
              i === 0 ? "md:col-span-2" : i === 1 ? "md:col-span-1" : "md:col-span-1"
            }`}
          >
            <span
              className="font-accent font-extrabold text-primary text-glow leading-none"
              style={{ fontSize: "clamp(2.5rem, 4vw, 3.75rem)" }}
            >
              {s.value}
            </span>
            <span className="mt-2 label-mono text-muted-foreground">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
