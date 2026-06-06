import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import timeTrendImg from "@/assets/project-timeandtrend.png";
import vipsetupImg from "@/assets/project-vipsetup.png";

type Project = {
  title: string;
  desc: string;
  tags: string[];
  image: string;
  href: string;
};

const projects: Project[] = [
  {
    title: "Time & Trend",
    desc: "Premium e-commerce storefront for curated luxury timepieces — fluid product storytelling, refined typography, and a buttery checkout flow.",
    tags: ["E-Commerce", "Storefront", "Responsive"],
    image: timeTrendImg,
    href: "https://timeandtrend.store/",
  },
  {
    title: "VIP Setup — Luxury Store",
    desc: "Dark-mode luxury commerce platform deployed on Cloudflare Workers — lightning fast, globally cached, with a tailored editorial feel.",
    tags: ["Cloudflare", "Edge", "Luxury"],
    image: vipsetupImg,
    href: "https://vipsetup1.aliyousufbusiness.workers.dev/",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative py-32 px-6 md:px-10 max-w-7xl mx-auto"
    >
      <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <p className="label-mono">— projects</p>
          <h2
            className="mt-4 font-accent font-extrabold leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(2.75rem, 7vw, 6rem)" }}
          >
            <span className="text-foreground">What I've </span>
            <span className="text-primary text-glow">Built</span>
          </h2>
        </div>
        <p className="text-muted-foreground max-w-md">
          A selection of live work — real products shipped to real users.
          Click any tile to visit the live site.
        </p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12 } },
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
      >
        {projects.map((p) => (
          <motion.a
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            whileHover={{ y: -6 }}
            className="group bento-cell bento-hover relative overflow-hidden flex flex-col"
          >
            {/* Screenshot */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={p.image}
                alt={`${p.title} homepage screenshot`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-[1.4s] ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />

              {/* External link badge */}
              <div className="absolute top-4 right-4 p-2.5 rounded-full bg-card/80 backdrop-blur border border-primary/30 text-primary opacity-0 group-hover:opacity-100 translate-y-[-4px] group-hover:translate-y-0 transition-all duration-300">
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>

            {/* Body */}
            <div className="p-6 md:p-7 flex flex-col gap-3">
              <h3 className="font-accent font-bold text-2xl md:text-3xl text-foreground leading-tight">
                {p.title}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                {p.desc}
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider border border-primary/30 text-primary rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
