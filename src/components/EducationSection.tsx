import { motion } from "framer-motion";
import { GraduationCap, Code2, Server } from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    title: "GIAIC — Web Development",
    org: "Governor Sindh Initiative for Artificial Intelligence, Computing & Cloud Computing",
    period: "2024 — Present",
    desc: "Enrolled in the official GIAIC program — building production-grade web apps with Next.js, TypeScript, and modern cloud-native tooling under industry mentors.",
    span: "md:col-span-2 md:row-span-2",
    featured: true,
  },
  {
    icon: Code2,
    title: "Frontend Development",
    org: "React · TypeScript · Tailwind · Framer Motion",
    period: "In progress",
    desc: "Building accessible, animated, production-ready interfaces.",
    span: "md:col-span-2",
  },
  {
    icon: Server,
    title: "Backend Development",
    org: "Node.js · APIs · Databases · Auth",
    period: "In progress",
    desc: "Designing reliable APIs, data layers, and authentication flows.",
    span: "md:col-span-2",
  },
];


export function EducationSection() {
  return (
    <section id="education" className="relative py-32 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="mb-16">
        <p className="label-mono">— journey</p>
        <h2
          className="mt-4 font-accent font-extrabold leading-[0.95] tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 6.5vw, 5.5rem)" }}
        >
          <span className="block text-foreground">My</span>
          <span className="block text-primary text-glow">Journey.</span>
        </h2>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] gap-4 md:gap-5"
      >
        {items.map((it) => {
          const Icon = it.icon;
          return (
            <motion.article
              key={it.title}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className={`bento-cell bento-hover relative p-6 md:p-7 flex flex-col ${it.span}`}
            >
              <div className="absolute left-0 top-6 bottom-6 w-[3px] bg-gradient-to-b from-primary to-transparent rounded-full" />
              <div className="absolute left-[-5px] top-6 w-[13px] h-[13px] rounded-full bg-primary shadow-[0_0_16px_var(--color-primary)]" />

              <div className="flex items-start justify-between">
                <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/30">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-mono text-xs text-primary tracking-wider">
                  {it.period}
                </span>
              </div>

              <div className="mt-auto">
                <h3
                  className={`font-accent font-bold text-foreground leading-tight ${
                    it.featured ? "text-3xl md:text-4xl" : "text-xl"
                  }`}
                >
                  {it.title}
                </h3>
                <p className="mt-1 text-muted-foreground text-sm">{it.org}</p>
                <p
                  className={`mt-2 text-muted-foreground ${
                    it.featured ? "text-base max-w-md" : "text-xs line-clamp-2"
                  }`}
                >
                  {it.desc}
                </p>
              </div>
            </motion.article>
          );
        })}

        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            show: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
          }}
          className="bento-cell flex flex-col items-center justify-center p-6"
        >
          <span className="label-mono">currently</span>
          <span className="font-accent font-extrabold text-6xl text-primary text-glow leading-none mt-2">
            '26
          </span>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="bento-cell p-6 md:col-span-3 flex items-center justify-between"
        >
          <div>
            <p className="label-mono">status</p>
            <p className="mt-2 font-accent font-semibold text-xl md:text-2xl text-foreground">
              Leveling up daily — frontend &amp; backend, in lockstep.
            </p>
          </div>
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
