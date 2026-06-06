import { motion } from "framer-motion";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, ISourceOptions } from "@tsparticles/engine";
import { ArrowRight, Mail } from "lucide-react";

const initParticles = async (engine: Engine) => {
  await loadSlim(engine);
};

const particlesOptions: ISourceOptions = {
  fpsLimit: 60,
  background: { color: { value: "transparent" } },
  particles: {
    number: { value: 80, density: { enable: true } },
    color: { value: ["#a3e635", "#f5f5f5"] },
    opacity: { value: 0.4 },
    size: { value: { min: 1, max: 2.5 } },
    links: {
      enable: true,
      color: "#a3e635",
      distance: 130,
      opacity: 0.15,
      width: 1,
    },
    move: { enable: true, speed: 0.5, outModes: { default: "out" } },
  },
  interactivity: {
    events: { onHover: { enable: true, mode: "repulse" } },
    modes: { repulse: { distance: 110, duration: 0.4 } },
  },
  detectRetina: true,
};

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <ParticlesProvider init={initParticles}>
        <Particles
          id="hero-particles"
          options={particlesOptions}
          className="absolute inset-0 z-0"
        />
      </ParticlesProvider>

      {/* Lime radial wash – stronger to match reference */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 75% 30%, rgba(163,230,53,0.22) 0%, transparent 65%), radial-gradient(ellipse 60% 50% at 20% 80%, rgba(163,230,53,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-10 pt-36 pb-24">
        {/* Available pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-flex items-center gap-2.5 bento-cell px-4 py-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span className="font-mono text-xs text-foreground/90">
            Ali Yousuf — Available for work
          </span>
        </motion.div>

        {/* Headline */}
        <h1
          className="mt-8 font-accent font-extrabold leading-[0.95] tracking-tight"
          style={{ fontSize: "clamp(3.5rem, 11vw, 9rem)" }}
        >
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block text-foreground"
            >
              Creative
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block text-primary text-glow"
            >
              Developer.
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="mt-8 max-w-2xl text-muted-foreground text-base md:text-lg leading-relaxed"
        >
          Building futuristic digital experiences with cinematic design and modern
          web technologies — where motion meets meaning.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.25, duration: 0.5, type: "spring" }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-4 rounded-full hover:shadow-[var(--shadow-lime-lg)] transition-all hover:scale-[1.03]"
          >
            View Projects
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bento-cell bento-hover text-foreground font-medium px-7 py-4 rounded-full"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 label-mono flex flex-col items-center gap-2"
        >
          <span>scroll</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="block w-px h-8 bg-primary/60"
          />
        </motion.div>
      </div>
    </section>
  );
}
